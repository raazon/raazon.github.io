const MIN_PAGE_FILL = 0.55;
const WHITE_SNAP_PX = 36;
const BREAK_PADDING_PX = 16;

type BreakPoint = {
	y: number;
	score: number;
};

const collectBreakPoints = (resume: HTMLElement): BreakPoint[] => {
	const resumeRect = resume.getBoundingClientRect();
	const height = resumeRect.height || resume.offsetHeight;
	if (height <= 0) {
		return [];
	}

	const points: BreakPoint[] = [];

	const add = (node: Element, score: number, edge: 'top' | 'bottom') => {
		const rect = node.getBoundingClientRect();
		const y = ((edge === 'top' ? rect.top : rect.bottom) - resumeRect.top) / height;
		if (y > 0.02 && y < 0.99) {
			points.push({ y, score });
		}
	};

	resume.querySelectorAll(':scope > hr').forEach((node) => add(node, 3, 'bottom'));
	resume.querySelectorAll('.item').forEach((node) => {
		add(node, 1, 'top');
		add(node, 3, 'bottom');
	});
	resume.querySelectorAll('section').forEach((node) => {
		add(node, 2, 'top');
		add(node, 2, 'bottom');
	});
	resume.querySelectorAll('.resume-header, .resume-intro, .resume-footer').forEach((node) => {
		add(node, 2, 'bottom');
	});
	resume.querySelectorAll('.resume-list li, .resume-skills-list li, p').forEach((node) => {
		add(node, 2, 'bottom');
	});

	return points;
};

const isMostlyWhiteRow = (data: Uint8ClampedArray, width: number, row: number) => {
	const start = row * width * 4;
	let darkPixels = 0;
	const step = 4;
	const samples = Math.ceil(width / step);

	for (let x = 0; x < width; x += step) {
		const index = start + x * 4;
		if (data[index] < 245 || data[index + 1] < 245 || data[index + 2] < 245) {
			darkPixels += 1;
		}
	}

	return darkPixels / samples < 0.012;
};

const snapToWhitespace = (source: HTMLCanvasElement, y: number) => {
	const context = source.getContext('2d');
	if (!context) {
		return y;
	}

	const searchStart = Math.max(0, Math.floor(y - WHITE_SNAP_PX));
	const searchEnd = Math.min(source.height, Math.ceil(y + WHITE_SNAP_PX));
	const height = searchEnd - searchStart;
	if (height <= 1) {
		return y;
	}

	const { data, width } = context.getImageData(0, searchStart, source.width, height);
	let bestY = y;
	let bestDistance = WHITE_SNAP_PX + 1;

	for (let row = 0; row < height; row += 1) {
		if (!isMostlyWhiteRow(data, width, row)) {
			continue;
		}

		const candidate = searchStart + row;
		const distance = Math.abs(candidate - y);
		if (distance < bestDistance) {
			bestDistance = distance;
			bestY = candidate;
		}
	}

	return bestY;
};

const choosePageEnd = (
	points: BreakPoint[],
	startY: number,
	maxEndY: number,
	minEndY: number,
	canvasHeight: number,
) => {
	if (maxEndY >= canvasHeight - 1) {
		return canvasHeight;
	}

	const inRange = points.filter((point) => (
		point.y > startY + 16 &&
		point.y >= minEndY &&
		point.y <= maxEndY
	));
	const preferred = inRange.filter((point) => point.score >= 2);
	const pool = preferred.length > 0 ? preferred : inRange;

	if (pool.length === 0) {
		return maxEndY;
	}

	return Math.max(...pool.map((point) => point.y));
};

const copySlice = (source: HTMLCanvasElement, startY: number, endY: number) => {
	const sy = Math.max(0, Math.floor(startY));
	const ey = Math.min(source.height, Math.ceil(endY));
	const height = Math.max(1, ey - sy);
	const slice = document.createElement('canvas');
	slice.width = source.width;
	slice.height = height;

	const context = slice.getContext('2d');
	if (!context) {
		throw new Error('Could not create PDF page canvas');
	}

	context.fillStyle = '#ffffff';
	context.fillRect(0, 0, slice.width, height);
	context.drawImage(source, 0, sy, source.width, height, 0, 0, source.width, height);
	return slice;
};

export async function downloadResumePdf(element: HTMLElement, fileName: string) {
	const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
		import('html2canvas'),
		import('jspdf'),
	]);

	let breakPoints: BreakPoint[] = [];

	const canvas = await html2canvas(element, {
		scale: 2,
		useCORS: true,
		backgroundColor: '#ffffff',
		windowWidth: 1200,
		logging: false,
		imageTimeout: 15000,
		scrollX: 0,
		scrollY: 0,
		onclone(clonedDoc, clonedElement) {
			clonedDoc.body.classList.remove('dark-mode');
			clonedDoc.body.classList.add('resume-pdf-export');

			clonedElement.classList.remove('theme-bg-light', 'shadow-lg', 'mb-5', 'my-5');
			clonedElement.style.boxShadow = 'none';
			clonedElement.style.margin = '0';
			clonedElement.style.border = 'none';
			clonedElement.style.setProperty('background-color', '#ffffff', 'important');
			clonedElement.style.overflow = 'visible';
			clonedElement.style.height = 'auto';

			breakPoints = collectBreakPoints(clonedElement);
		},
	});

	const pdf = new jsPDF({
		unit: 'mm',
		format: 'a4',
		orientation: 'portrait',
		compress: true,
	});

	const pageWidth = pdf.internal.pageSize.getWidth();
	const pageHeight = pdf.internal.pageSize.getHeight();
	const pageHeightPx = (canvas.width * pageHeight) / pageWidth;
	const pointsPx = breakPoints.map((point) => ({
		y: Math.min(canvas.height, point.y * canvas.height + BREAK_PADDING_PX),
		score: point.score,
	}));

	let startY = 0;
	let pageCount = 0;

	while (startY < canvas.height - 1 && pageCount < 20) {
		if (pageCount > 0) {
			pdf.addPage();
		}

		const maxEndY = Math.min(canvas.height, startY + pageHeightPx);
		const minEndY = startY + pageHeightPx * MIN_PAGE_FILL;
		let endY = choosePageEnd(pointsPx, startY, maxEndY, minEndY, canvas.height);

		if (endY < canvas.height) {
			endY = snapToWhitespace(canvas, endY);
		}

		if (endY <= startY) {
			endY = maxEndY;
		}

		const slice = copySlice(canvas, startY, endY);
		const sliceHeightMm = Math.min(
			pageHeight,
			(slice.height * pageWidth) / slice.width,
		);

		pdf.setFillColor(255, 255, 255);
		pdf.rect(0, 0, pageWidth, pageHeight, 'F');
		pdf.addImage(
			slice.toDataURL('image/jpeg', 0.98),
			'JPEG',
			0,
			0,
			pageWidth,
			sliceHeightMm,
			undefined,
			'FAST',
		);

		slice.width = 0;
		slice.height = 0;
		startY = endY;
		pageCount += 1;
	}

	await pdf.save(fileName);

	canvas.width = 0;
	canvas.height = 0;
}

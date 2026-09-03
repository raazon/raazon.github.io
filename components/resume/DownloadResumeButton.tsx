'use client';

import { downloadResumePdf } from '@/utils/downloadResumePdf';
import { useState } from 'react';

type DownloadResumeButtonProps = {
	name: string;
};

const getResumePdfFileName = (name: string) => {
	const slug = name.trim().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '');
	return `${slug || 'Resume'}-Resume.pdf`;
};

const DownloadResumeButton = ({ name }: DownloadResumeButtonProps) => {
	const [isDownloading, setIsDownloading] = useState(false);

	const handleDownload = async () => {
		const resume = document.getElementById('resume');
		if (!(resume instanceof HTMLElement) || isDownloading) {
			return;
		}

		setIsDownloading(true);

		try {
			await downloadResumePdf(resume, getResumePdfFileName(name));
		} catch (error) {
			console.error('Failed to generate resume PDF', error);
		} finally {
			setIsDownloading(false);
		}
	};

	return (
		<button
			className="btn btn-primary"
			id="download-btn"
			type="button"
			onClick={handleDownload}
			disabled={isDownloading}
			aria-busy={isDownloading}
		>
			<svg className="me-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
				<path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"></path>
			</svg>
			{isDownloading ? 'Preparing PDF…' : 'Download PDF Version'}
		</button>
	);
};

export default DownloadResumeButton;

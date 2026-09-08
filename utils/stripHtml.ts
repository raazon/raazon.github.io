export function stripHtml(html: string): string {
	if (!html) return "";

	let text = html.replace(/<[^>]+>/g, " ").trim();

	text = text
		.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
		.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
		.replace(/&nbsp;/gi, " ")
		.replace(/&ndash;/gi, "-")
		.replace(/&mdash;/gi, "—")
		.replace(/&amp;/gi, "&")
		.replace(/&quot;/gi, '"')
		.replace(/&apos;/gi, "'")
		.replace(/&lt;/gi, "<")
		.replace(/&gt;/gi, ">")
		.replace(/\u2013/g, "-")
		.replace(/\s*-\s*/g, " - ")
		.replace(/\s+/g, " ")
		.trim();

	return text;
}

export function skipAllCapsPrefix(text: string): string {
	if (!text) return "";

	const sentences = text.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g);
	if (!sentences || sentences.length < 2) return text.trim();

	const isAllCaps = (sentence: string) => {
		const letters = sentence.replace(/[^A-Za-z]/g, "");
		if (letters.length < 12) return false;
		const uppercase = letters.replace(/[^A-Z]/g, "").length;
		return uppercase / letters.length >= 0.75;
	};

	let index = 0;
	while (index < sentences.length - 1 && isAllCaps(sentences[index])) {
		index += 1;
	}

	return sentences.slice(index).join("").replace(/\s+/g, " ").trim();
}

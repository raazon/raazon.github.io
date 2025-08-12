export function letterLimit(text: string, limit: number): string {
	if (!text) return "";

	const cleanText = text.trim();
	return cleanText.length > limit
		? cleanText.slice(0, limit) + "..."
		: cleanText;
}

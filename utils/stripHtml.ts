export function stripHtml(html: string): string {
	if (!html) return "";

	// Strip HTML tags
	let text = html.replace(/<[^>]+>/g, "").trim();

	// Replace HTML dash entities with a hyphen
	text = text
		.replace(/&#8211;|&ndash;/g, "-")  // en dash → hyphen
		.replace(/&mdash;/g, "—")          // em dash → longer dash if you want

		// Optionally replace multiple hyphens/spaces with a single hyphen surrounded by spaces
		.replace(/\s*-\s*/g, " - ");

	return text;
}

export function formatInstalls(num: number | null | undefined): string {
	if (num === null || num === undefined) return "N/A";
	if (num < 1000) return num.toString();

	const units = [
		{ value: 1e9, symbol: "B" },
		{ value: 1e6, symbol: "M" },
		{ value: 1e3, symbol: "K" },
	];

	for (const unit of units) {
		if (num >= unit.value) {
			const formatted = (num / unit.value).toFixed(1).replace(/\.0$/, "");
			return formatted + unit.symbol;
		}
	}

	return num.toString();
}

import React from "react";
import Icons from "./Icons";
import './icon.scss';

const Icon = ({ name, className = "svg-icon", fill = "currentColor", ...props }) => {
	const icon = Icons[name];
	if (!icon) {
		console.error(`Icon "${name}" not found.`);
		return null;
	}

	const { svg, path } = icon;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={svg.viewBox}
			className={className}
			fill={fill}
			{...props}
		>
			<path d={path} />
		</svg>
	);
};

export default Icon;

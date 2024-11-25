import React from "react";
import Icons from "./Icons";
import './icon.scss';

const Icon = ({ name, className = "", fill = "currentColor", ...props }) => {
	const icon = Icons[name];
	if (!icon) {
		console.error(`Icon "${name}" not found.`);
		return null;
	}

	const { svg, path } = icon;

	const svgClass = className ? "svg-icon " + className : "svg-icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={svg.viewBox}
			className={svgClass}
			fill={fill}
			{...props}
		>
			<path d={path} />
		</svg>
	);
};

export default Icon;
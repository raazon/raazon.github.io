import React, { SVGProps } from "react";
import Icons from "./Icons";
import "./icon.css";

// Define the type for the `Icons` object
type IconData = {
	[key: string]: {
		svg: { viewBox: string };
		path: string;
	};
};

// Ensure the imported Icons object matches the expected type
const icons: IconData = Icons;

// Define the props for the Icon component
interface IconProps extends SVGProps<SVGSVGElement> {
	name: string;
	className?: string;
	fill?: string;
}

const Icon: React.FC<IconProps> = ({
	name,
	className = "",
	fill = "currentColor",
	...props
}) => {
	const icon = icons[name];
	if (!icon) {
		console.error(`Icon "${name}" not found.`);
		return null;
	}

	const { svg, path } = icon;

	const svgClass = className ? `svg-icon ${className}` : "svg-icon";

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

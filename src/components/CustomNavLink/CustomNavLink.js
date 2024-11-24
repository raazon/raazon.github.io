
import { NavLink } from "react-router-dom";
const CustomNavLink = ({ to, children, ariaLabel, ...props }) => (
	<NavLink
		to={to}
		className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
		{...props}
	>
		{({ isActive }) => (
			<>
				{children}
				{isActive && <span className="sr-only">(current)</span>}
			</>
		)}
	</NavLink>
);

export default CustomNavLink;
import React from "react";
import Icon from "../Icon/Icon";
import CustomNavLink from "./CustomNavLink";
import "./navigation.scss";

const Navigation: React.FC = () => {
	return (
		<>
			<ul className="navbar-nav flex-column text-start">
				<li className="nav-item">
					<CustomNavLink to="/">
						<Icon name='user' className="me-2" />
						About Me
					</CustomNavLink>
				</li>
				<li className="nav-item d-noneX">
					<CustomNavLink to="/portfolio">
						<Icon name="laptopCode" className="me-2" />
						Portfolio
					</CustomNavLink>
				</li>
				<li className="nav-item d-none">
					<CustomNavLink to="/services">
						<Icon name="briefcase" className="me-2" />
						Services &amp; Pricing
					</CustomNavLink>
				</li>
				<li className="nav-item">
					<CustomNavLink to="/resume">
						<Icon name="fileAlt" className="me-2" />
						Resume
					</CustomNavLink>
				</li>
				<li className="nav-item d-none">
					<CustomNavLink to="blog-home">
						<Icon name="blog" className="me-2" />
						Blog
					</CustomNavLink>
				</li>
				<li className="nav-item d-none">
					<CustomNavLink to="contact">
						<Icon name="envelopeOpenText" className="me-2" />
						Contact
					</CustomNavLink>
				</li>
			</ul>
		</>
	);
};

export default Navigation;

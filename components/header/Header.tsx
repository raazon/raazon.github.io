import { siteConfig } from "@/utils/siteConfig";
import Image from "next/image"; // Use Next.js `Image` component for optimized images
import Link from 'next/link';
import React from "react";
import Icon from "../icon/Icon";
import DarkMode from "./DarkMode";
import Navigation from "./Navigation";

const Header: React.FC = () => {
	return (
		<header className="header text-center">
			<div className="force-overflow">
				<h1 className="blog-name pt-lg-4 mb-0">
					<Link className="no-text-decoration" href="/" aria-label="Home">
						{siteConfig.name}
					</Link>
				</h1>

				<nav className="navbar navbar-expand-lg navbar-dark">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navigation"
						aria-controls="navigation"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div id="navigation" className="collapse navbar-collapse flex-column">
						<div className="profile-section pt-3 pt-lg-0">
							<Image
								className="profile-image mb-3 rounded-circle mx-auto"
								src="/assets/images/profile.webp" // Updated for Next.js
								alt="Razon Komar Pal"
								width={100} // Provide appropriate width
								height={100} // Provide appropriate height
								priority
							/>

							<div className="bio mb-3">{siteConfig.shortBio}</div>

							<ul className="social-list list-inline py-2 mx-auto">
								<li className="list-inline-item">
									<Link href="https://www.linkedin.com/in/raazon/" target="_blank" aria-label="Visit LinkedIn profile">
										<Icon name="linkedin" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://github.com/razon-xs" target="_blank" aria-label="Visit GitHub profile">
										<Icon name="github" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://x.com/raazzon" target="_blank" aria-label="Visit X profile">
										<Icon name="x" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://wordpress.stackexchange.com/users/144761/razon-komar-pal" target="_blank" aria-label="Visit Stack Exchange profile">
										<Icon name="stackexchange" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://profiles.wordpress.org/raazon/" target="_blank" aria-label="Visit WordPress profile">
										<Icon name="wordpress" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item d-none">
									<Link href="https://codepen.io/raazon/" target="_blank" aria-label="Visit Codepen profile">
										<Icon name="codepen" className="svg-inline--fa" />
									</Link>
								</li>
							</ul>
							<hr />
						</div>

						<Navigation />

						<div className="my-2 d-none">
							<Link className="btn btn-primary" href="contact.html" target="_blank" rel="noopener noreferrer">
								<i className="fas fa-paper-plane me-2"></i>
								Hire Me
							</Link>
						</div>

						<DarkMode />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;

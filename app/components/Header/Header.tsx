import Image from "next/image"; // Use Next.js `Image` component for optimized images
import Link from 'next/link';
import React from "react";
import Icon from "../Icon/Icon";
import Navigation from "./Navigation";

const Header: React.FC = () => {
	return (
		<header className="header text-center">
			<div className="force-overflow">
				<h1 className="blog-name pt-lg-4 mb-0">
					<Link className="no-text-decoration" href="/">
						Razon Komar Pal
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
							<Link href="/" className="d-inline-block" aria-label="Home">
								<Image
									className="profile-image mb-3 rounded-circle mx-auto"
									src="/assets/images/profile.webp" // Updated for Next.js
									alt="Razon Komar Pal"
									width={100} // Provide appropriate width
									height={100} // Provide appropriate height
									priority
								/>
							</Link>

							<div className="bio mb-3">
								{`Hi, my name is Razon Komar Pal and I'm a senior web developer. Welcome to my personal website!`}
							</div>

							<ul className="social-list list-inline py-2 mx-auto">
								<li className="list-inline-item">
									<Link href="https://www.linkedin.com/in/raazon/">
										<Icon name="linkedin" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://github.com/razon-xs">
										<Icon name="github" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://x.com/raazzon">
										<Icon name="x" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://wordpress.stackexchange.com/users/144761/razon-komar-pal">
										<Icon name="stackexchange" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item">
									<Link href="https://profiles.wordpress.org/raazon/">
										<Icon name="wordpress" className="svg-inline--fa" />
									</Link>
								</li>
								<li className="list-inline-item d-none">
									<Link href="https://codepen.io/raazon/">
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

						<div className="dark-mode-toggle text-center w-100">
							<hr className="mb-4" />
							<h4 className="toggle-name mb-3 d-none">
								<i className="fas fa-adjust me-1"></i>
								Dark Mode
							</h4>

							<input className="toggle" id="darkmode" type="checkbox" />
							<label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
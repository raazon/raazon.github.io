
import React from 'react';
import Icon from '../../components/Icon';
import Navigation from './Navigation';
import './navigation.scss';

const Header = () => {
	return (
		<>
			<header className="header text-center">
				<div className="force-overflow">
					<h1 className="blog-name pt-lg-4 mb-0">
						<a className="no-text-decoration" href="/">Razon Komar Pal</a>
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
								<a href="/" className="d-inline-block">
									<img
										className="profile-image mb-3 rounded-circle mx-auto"
										src="assets/images/profile.webp"
										alt="Razon Komar Pal"
										loading="lazy"
									/>
								</a>

								<div className="bio mb-3">
									Hi, my name is Razon Komar Pal and I'm a senior web developer. Welcome to my personal
									website!
								</div>

								<ul className="social-list list-inline py-2 mx-auto">
									<li className="list-inline-item">
										<a href="https://www.linkedin.com/in/raazon/">
											<Icon name='linkedin' />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://github.com/razon-xs">
											<Icon name='github' />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://x.com/raazzon">
											<Icon name='x' />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://wordpress.stackexchange.com/users/144761/razon-komar-pal">
											<Icon name='stackexchange' />
										</a>
									</li>
									<li className="list-inline-item">
										<a href="https://profiles.wordpress.org/raazon/">
											<Icon name='wordpress' />
										</a>
									</li>
									<li className="list-inline-item d-none">
										<a href="https://codepen.io/raazon/">
											<Icon name='codepen' />
										</a>
									</li>
								</ul>
								<hr />
							</div>

							<Navigation />

							<div className="my-2 d-none">
								<a className="btn btn-primary" href="contact.html" target="_blank">
									<i className="fas fa-paper-plane me-2"></i>
									Hire Me
								</a>
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
		</>
	)
}

export default Header
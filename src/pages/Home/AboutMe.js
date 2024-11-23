import React from 'react';

const AboutMe = () => {
	return (
		<>
			<section className="about-me-section p-3 p-lg-5 theme-bg-light">
				<div className="container">
					<div className="profile-teaser row">
						<div className="col">
							<h2 className="name font-weight-bold mb-1">Razon Komar Pal</h2>
							<div className="tagline mb-3">Senior Web Developer</div>
							<div className="bio mb-4">
								I'm a Dedicated web developer driven by a passion for continuous learning and impactful
								contributions. With over 10+ years of experience in WordPress and web development, I have
								assisted companies in enhancing their development processes and fostering dynamic team
								management. Honored as the Responsible Team Player of the Year in 2022 and the Emerging
								Scrum Master of the Year in 2023.

								<br />
								<br />
								Currently serving as a Senior Web Developer at { }
								<a
									className="text-link text-decoration-none"
									href="https://www.wpmet.com/"
									target="_blank"
									rel="noreferrer"
								>
									<span className="only-show-on-dark">Wpmet</span>
									<span className="only-show-on-light">
										<img
											className="img-fluid brand-logo"
											src="assets/images/hero/wpmet-logo.svg"
											alt="Wpmet"
											title="Wpmet"
										/>
									</span>
								</a>
								{ } a division of { }
								<a
									className="text-link text-decoration-none"
									href="https://www.xpeedstudio.com/"
									target="_blank"
									rel="noreferrer"
								>
									<span className="only-show-on-dark">XpeedStudio</span>
									<span className="only-show-on-light">
										<img
											className="img-fluid brand-logo"
											src="assets/images/hero/xpeedstudio-logo.svg"
											alt="XpeedStudio"
											title="XpeedStudio"
										/>
									</span>
								</a>
								{ } where I have taken a leading role in the managing, developing and enhancing impactful
								plugins { }
								{/* I play a key role in the managing, developing and enhancing impactful plugins, including */}
								<a
									className="text-link text-decoration-none"
									href="https://wordpress.org/plugins/elementskit-lite/"
									target="_blank"
									rel="noreferrer"
								>
									<span className="only-show-on-dark">ElementsKit,</span>
									<span className="only-show-on-light">
										<img
											className="img-fluid brand-logo"
											src="assets/images/hero/elementskit-logo.svg"
											alt="ElementsKit Elementor addons"
											title="ElementsKit Elementor Addons"
										/>
									</span>
								</a>
								{', '}
								<a
									className="text-link text-decoration-none"
									href="https://wordpress.org/plugins/gutenkit-blocks-addon/"
									target="_blank"
									rel="noreferrer"
								>
									<span className="only-show-on-dark">GutenKit</span>
									<span className="only-show-on-light">
										<img
											className="img-fluid brand-logo"
											src="assets/images/hero/gutenkit-logo.svg"
											alt="GutenKit – Page Builder Blocks, Patterns, and Templates for Gutenberg Block Editor"
											title="GutenKit – Page Builder Blocks, Patterns, and Templates for Gutenberg Block Editor"
										/>
									</span>
								</a>
								{ } and more trusted by millions of users worldwide. { }
							</div>
							<div className="mb-4">
								<a
									className="btn btn-primary me-2 mb-3 d-noneX"
									href="https://github.com/raazon/"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fas fa-arrow-alt-circle-right me-2"></i>
									<span className="d-none d-md-inline">View</span>
									GitHub
								</a>
								<a className="btn btn-secondary mb-3" href="resume.html">
									<i className="fas fa-file-alt me-2"></i>
									<span className="d-none d-md-inline">View</span>
									Resume
								</a>
							</div>
						</div>

						<div className="col-md-5 col-lg-5 d-none">
							<img
								className="profile-image img-fluid mb-3 mb-lg-0 me-md-0 rounded"
								src="assets/images/profile-lg.webp"
								alt="Razon Komar Pal"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutMe;
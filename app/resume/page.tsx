import Icon from "@/components/icon/Icon";
import profilePic from '@assets/images/profile.jpg';
import Image from 'next/image';
import './page.scss';


const Resume = () => {
	return (
		<>
			<div className="main-wrapper">
				{/* cta-section */}
				<section className="cta-section theme-bg-light py-5 d-none">
					<div className="container text-center single-col-max-width">
						<h2 className="heading mb-3">Online Resume</h2>
						<button className="btn btn-primary" id="download-btn">
							<i className="fas fa-file-pdf me-2"></i>
							Download PDF Version
						</button>
					</div>
				</section>
				{/* cta-section end */}

				{/* resume */}
				<div className="container resume-container px-3 px-lg-5">
					<article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
						<div className="resume-header">
							<div className="row align-items-center">
								<div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
									<h2 className="resume-name mb-0 text-uppercase">Razon Komar Pal</h2>
									<div className="resume-tagline mb-3 mb-md-0">Senior Web Developer</div>
								</div>
								<div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
									<ul className="list-unstyled mb-0">
										<li className="mb-2 d-none">
											<svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM351.6 321.5l-11.62 50.39c-1.633 7.125-7.9 12.11-15.24 12.11c-126.1 0-228.7-102.6-228.7-228.8c0-7.328 4.984-13.59 12.11-15.22l50.38-11.63c7.344-1.703 14.88 2.109 17.93 9.062l23.27 54.28c2.719 6.391 .8828 13.83-4.492 18.22L168.3 232c16.99 34.61 45.14 62.75 79.77 79.75l22.02-26.91c4.344-5.391 11.85-7.25 18.24-4.484l54.24 23.25C349.5 306.6 353.3 314.2 351.6 321.5z"></path></svg>
											<a className="resume-link" href="tel:+8801742259068">0174 2259 068</a>
										</li>
										<li className="mb-2 d-none">
											<svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M384 32H64C28.63 32 0 60.63 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96C448 60.63 419.4 32 384 32zM384 336c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V225.9l138.5 69.27C209.3 298.5 216.6 300.2 224 300.2s14.75-1.688 21.47-5.047L384 225.9V336zM384 190.1l-152.8 76.42c-4.5 2.25-9.812 2.25-14.31 0L64 190.1V176c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32V190.1z"></path></svg>
											<a className="resume-link" href="mailto:raazzon@gmail.com">
												raazzon@gmail.com
											</a>
										</li>
										<li className="mb-2">
											<svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
											<a className="resume-link" href="https://github.com/razon-xs">@razon-xs</a>
										</li>
										<li className="mb-2">
											<svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 256C352 278.2 350.8 299.6 348.7 320H163.3C161.2 299.6 159.1 278.2 159.1 256C159.1 233.8 161.2 212.4 163.3 192H348.7C350.8 212.4 352 233.8 352 256zM503.9 192C509.2 212.5 512 233.9 512 256C512 278.1 509.2 299.5 503.9 320H380.8C382.9 299.4 384 277.1 384 256C384 234 382.9 212.6 380.8 192H503.9zM493.4 160H376.7C366.7 96.14 346.9 42.62 321.4 8.442C399.8 29.09 463.4 85.94 493.4 160zM344.3 160H167.7C173.8 123.6 183.2 91.38 194.7 65.35C205.2 41.74 216.9 24.61 228.2 13.81C239.4 3.178 248.7 0 256 0C263.3 0 272.6 3.178 283.8 13.81C295.1 24.61 306.8 41.74 317.3 65.35C328.8 91.38 338.2 123.6 344.3 160H344.3zM18.61 160C48.59 85.94 112.2 29.09 190.6 8.442C165.1 42.62 145.3 96.14 135.3 160H18.61zM131.2 192C129.1 212.6 127.1 234 127.1 256C127.1 277.1 129.1 299.4 131.2 320H8.065C2.8 299.5 0 278.1 0 256C0 233.9 2.8 212.5 8.065 192H131.2zM194.7 446.6C183.2 420.6 173.8 388.4 167.7 352H344.3C338.2 388.4 328.8 420.6 317.3 446.6C306.8 470.3 295.1 487.4 283.8 498.2C272.6 508.8 263.3 512 255.1 512C248.7 512 239.4 508.8 228.2 498.2C216.9 487.4 205.2 470.3 194.7 446.6H194.7zM190.6 503.6C112.2 482.9 48.59 426.1 18.61 352H135.3C145.3 415.9 165.1 469.4 190.6 503.6V503.6zM321.4 503.6C346.9 469.4 366.7 415.9 376.7 352H493.4C463.4 426.1 399.8 482.9 321.4 503.6V503.6z"></path></svg>
											<a className="resume-link" href="http://raazon.com/">www.raazon.com</a>
										</li>
										<li className="mb-0">
											<svg className="me-2"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
												<path fill="currentColor" d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"></path></svg>
											Dhaka
										</li>
									</ul>
								</div>
							</div>
						</div>

						<hr />

						<div className="resume-intro py-3">
							<div className="row align-items-center">
								<div className="col-12 col-md-3 col-xl-2 text-center">
									<Image
										src={profilePic}
										alt="Profile Image"
										className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto"
										width={120}
										height={120}
									/>
								</div>
								<div className="col text-start">
									<p className="mb-0">
										Dedicated web developer driven by a passion for continuous learning and impactful
										contributions. With over 12+ years of experience in WordPress and web development, I
										have assisted companies in enhancing their development processes and fostering dynamic
										team management. Honored as the Responsible Team Player of the Year in 2022 and the
										Emerging Scrum Master of the Year in 2023.
									</p>
								</div>
							</div>
						</div>

						<hr />

						<div className="resume-body">
							<div className="row">
								<div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
									{/* work */}
									<section className="work-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
										<div className="item mb-3">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Senior Web
													Developer</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
													<a className="text-muted text-decoration-none" href="https://roxnor.com/"
														target="_blank">
														Roxnor
													</a> | 2021 - Present
												</div>
											</div>
											<div className="item-content">
												<ul className="resume-list my-3 ps-3">
													<li className="mb-2">
														Led the development and management of multiple high-impact company
														plugins, including flagship WordPress plugins such as ElementsKit and
														GutenKit, balancing parallel projects
														effectively.
													</li>
													<li className="mb-2">
														Scaled <a className="theme-link"
															href="https://wordpress.org/plugins/elementskit-lite/"
															target="_blank">ElementsKit</a> WordPress plugin from 700K to nearly
														2M active installations through dedicated feature enhancements and
														performance optimizations, significantly increasing product reach and
														user engagement.
													</li>
													<li className="mb-2">
														Launched and grew <a className="theme-link"
															href="https://wordpress.org/plugins/gutenkit-blocks-addon/"
															target="_blank">GutenKit</a> WordPress plugin to 10,000+ active
														installations following its release in March 2024, successfully
														establishing it as a valued addition to the company’s plugin portfolio.
													</li>
													<li>
														Honored consecutively in 2022 and 2023 with the awards for Responsible
														Team Player of the Year and Emerging Scrum Master of the Year.
													</li>
												</ul>
											</div>
										</div>
										<div className="item mb-3">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
													WordPress Theme and Plugin Developer
												</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
													<a className="text-muted text-decoration-none" href="https://itclanbd.com/"
														target="_blank">
														ITclan BD
													</a> | 2017 - 2020
												</div>
											</div>
											<div className="item-content">
												<ul className="resume-list my-3 ps-3">
													<li className="mb-2">
														Entrusted as the sole developer responsible for the full scope of
														WordPress development, encompassing both backend and frontend projects,
														customization, and optimization across all company-managed websites.
													</li>
													<li className="mb-2">
														Created over 35 custom WordPress themes and plugins from PSD/Figma
														designs for various clients, as well as customized multiple websites
														using premium themes and plugins.
													</li>
													<li className="mb-2">
														Worked with teams to implement WordPress data, including WooCommerce and
														Events, via REST API for integration with Laravel-based web and mobile
														applications.
													</li>
													<li>
														Managed server infrastructure, ensuring robust security, regular
														backups, and optimal performance for all WordPress sites and servers.
													</li>
												</ul>
											</div>
										</div>
										<div className="item mb-3">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
													Junior Software Engineer
												</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
													<a className="text-muted text-decoration-none" href="https://pixelaar.com/"
														target="_blank">
														Pixelaar FZC LLC
													</a> | 2016 - 2017
												</div>
											</div>
											<div className="item-content">
												<ul className="resume-list my-3 ps-3">
													<li className="mb-2">
														Actively contributed to the design and development of three premium
														themes for the Envato Marketplace, enhancing the quality and diversity
														of the product offerings.
													</li>
													<li className="mb-2">
														Conducted thorough bug fixing, unit testing, and template design for
														premium themes to ensure high performance, usability, and adherence to
														industry standards.
													</li>
													<li className="mb-2">
														Designed and built custom widgets for popular page builders, including
														Elementor and WPBakery, enhancing user experience and functionality for
														end-users.
													</li>
												</ul>
											</div>
										</div>
										<div className="item mb-3">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
													Web Developer( Remote Job)
												</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-6 text-muted text-start text-md-end">
													Prestige Brokers Group LLC | 2015 - 2016
												</div>
											</div>
											<div className="item-content">
												<ul className="resume-list my-3 ps-3">
													<li className="mb-2">
														Partnered with a team of developers to design and implement new custom
														features, enhancing functionality and user experience across various
														WordPress projects.
													</li>
													<li className="mb-2">
														Executed bug fixing and comprehensive testing, ensuring high-quality
														performance and user-friendly template design for all WordPress themes.
													</li>
													<li className="mb-2">
														Provided continuous maintenance and security oversight for all WordPress
														websites, ensuring optimal performance and protection against threats.
													</li>
												</ul>
											</div>
										</div>
										<div className="item mb-3">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
													WP Specialist( Remote Job )
												</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-6 text-muted text-start text-md-end">
													Euroboats Yachtcharter GmbH | 2014 - 2014
												</div>
											</div>
											<div className="item-content">
												<ul className="resume-list my-3 ps-3">
													<li className="mb-2">
														Worked alongside a team of developers to enhance project outcomes
														through effective collaboration and knowledge sharing.
													</li>
													<li className="mb-2">
														Performed comprehensive website customization, including bug fixing and
														the development of custom features, to improve functionality and user
														experience.
													</li>
													<li className="mb-2">
														Transformed PSD designs into responsive HTML, ensuring pixel-perfect
														accuracy and a seamless user interface across various devices.
													</li>
												</ul>
											</div>
										</div>
										<div className="item">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
													Online Marketplaces( Remote Job )
												</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-6 text-muted text-start text-md-end">
													Upwork, Fiverr | 2012 - 2014
												</div>
											</div>
											<div className="item-content">
												<ul className="resume-list my-3 ps-3">
													<li className="mb-2">
														I have successfully completed over 150 projects on Fiverr, earning the
														prestigious Level 2 Seller badge while consistently maintaining 5-star
														ratings for exceptional service and quality. My dedication to delivering
														high-quality solutions has garnered trust and positive feedback from
														clients worldwide. You can explore my <a className="theme-link"
															href="https://www.fiverr.com/raazzon" target="_blank">Fiverr
															profile</a> for more details on my work and client testimonials
													</li>
													<li className="mb-2">
														On Upwork, I have completed 92 projects and logged 809 hours of work,
														earning outstanding reviews and feedback from satisfied clients. My
														strong work ethic, expertise, and commitment to excellence have made me
														a trusted professional in delivering exceptional results.
													</li>
												</ul>
											</div>
										</div>
									</section>

									{/* volunteer */}
									<section className="volunteer-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Volunteer Experience</h3>
										<div className="item mb-3">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
													Junior WordPress Developer
												</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
													Divine LLC​ | 2013
												</div>
											</div>
											<div className="item-content">
												<p>At this company, I worked on the development of a custom multi-vendor
													WooCommerce website. During my internship, I also learned the importance of
													cross-team collaboration and gained valuable experience working with various
													teams to achieve project goals.</p>
											</div>
										</div>
										<div className="item">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
													WordPress Developer Intern
												</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
													Pixelaar FZC LLC | 2013
												</div>
											</div>
											<div className="item-content">
												<p>
													During my time at Inter, I gained hands-on experience in both frontend and
													backend development for WordPress plugin and theme development. I converted
													multiple PSD files into HTML and developed WordPress themes. Additionally, I
													contributed to the creation of various internal WordPress plugins for the
													company.
												</p>
											</div>
										</div>
									</section>

									{/* project */}
									<section className="project-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
										<div className="item mb-3">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
													<a className="theme-link"
														href="https://wordpress.org/plugins/linked-variation-for-woocommerce/"
														target="_blank">
														Linked Variation for WooCommerce - WordPress Plugin
													</a>
												</h4>
												<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
													Open Source
												</div>
											</div>
											<div className="item-content">
												<p>
													Developed a WooCommerce plugin that intelligently links products based on selected attributes, simplifying the management of complex product variations.
												</p>
											</div>
										</div>
										<div className="item d-none">
											<div className="item-heading row align-items-center mb-2">
												<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project Praesent
												</h4>
												<div
													className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
													Open Source</div>
											</div>
											<div className="item-content">
												<p>You can use this section for your side projects. Cras dapibus. Vivamus
													elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
													porttitor eu, consequat vitae, eleifend ac, enim.</p>
											</div>
										</div>
									</section>
								</div>

								{/* aside */}
								<aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
										<div className="item">
											<h4 className="item-title">Technical</h4>
											<ul className="list-unstyled resume-skills-list">
												<li className="mb-2">WordPress/PHP/REST API</li>
												<li className="mb-2">Gutenberg/FSE/WP-CLI</li>
												<li className="mb-2">WP-CLI/JavaScript/React/Vue</li>
												<li className="mb-2">TypeScript/jQuery/jQuery UI</li>
												<li className="mb-2">Plugin/Theme Development</li>
												<li className="mb-2">HTML/CSS/SASS/Tailwind</li>
												<li className="mb-2">Webpack/Babel/Playwright</li>
												<li className="mb-2">Gitflow/CI-CD</li>
											</ul>
										</div>
										<div className="item">
											<h4 className="item-title">Professional</h4>
											<ul className="list-unstyled resume-skills-list">
												<li className="mb-2">Team leadership</li>
												<li className="mb-2">Project management</li>
												<li className="mb-2">Stakeholder management</li>
												<li className="mb-2">Agile methodology</li>
												<li className="mb-2">Effective communication</li>
												<li className="mb-2">Team player</li>
												<li className="mb-2">Strong problem solver</li>
												<li className="mb-2">Conflict resolution</li>
												<li>Good time management</li>
											</ul>
										</div>
									</section>
									<section className="education-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
										<ul className="list-unstyled resume-education-list">
											<li className="mb-3">
												<div className="resume-degree font-weight-bold">BSc in Electrical and Electronic
													Engineering</div>
												<div className="resume-degree-org text-muted">Northern University of Bangladesh</div>
												<div className="resume-degree-time text-muted">2012 - Present</div>
											</li>
										</ul>
									</section>
									<section className="education-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Awards</h3>
										<ul className="list-unstyled resume-awards-list">
											<li className="mb-3">
												<div className="font-weight-bold">Emerging Scrum Master</div>
												<div className="text-muted">XpeedStudio (2023)</div>
											</li>
											<li>
												<div className="font-weight-bold">Responsible Team Player</div>
												<div className="text-muted">XpeedStudio (2022)</div>
											</li>
										</ul>
									</section>
									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
										<ul className="list-unstyled resume-lang-list">
											<li className="mb-2">
												English <span className="text-muted">(Professional)</span>
											</li>
											<li className="mb-2">
												Hindi <span className="text-muted">(Conversational)</span>
											</li>
											<li>
												Bengali <span className="text-muted">(Native)</span>
											</li>
										</ul>
									</section>
									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
										<ul className="list-unstyled resume-interests-list mb-0">
											<li className="mb-2">Playing</li>
											<li className="mb-2">Learning</li>
											<li className="mb-2">Music</li>
											<li className="mb-2">Gardening</li>
											<li className="mb-2">Programming</li>
											<li className="mb-2">Reading</li>
											<li>Travelling</li>
										</ul>
									</section>
								</aside>
							</div>
						</div>

						<hr />

						{/* resume-footer */}
						<div className="resume-footer text-center">
							<ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
								<li className="list-inline-item mb-lg-0 me-3">
									<a className="resume-link text-decoration-none" href="https://www.linkedin.com/in/raazon/">
										<Icon name="linkedin" className="me-1" />
										<span className="d-none d-lg-inline-block text-muted">@linkedin.com/in/raazon</span>
									</a>
								</li>
								<li className="list-inline-item mb-lg-0 me-3">
									<a className="resume-link text-decoration-none" href="https://github.com/razon-xs">
										<Icon name="squareGithub" className="me-1" />
										<span className="d-none d-lg-inline-block text-muted">@github.com/razon-xs</span>
									</a>
								</li>
								<li className="list-inline-item mb-lg-0 me-lg-1">
									<a className="resume-link text-decoration-none" href="https://x.com/raazzon">
										<Icon name="x" className="me-2" />
										<span className="d-none d-lg-inline-block text-muted">@raazzon</span>
									</a>
								</li>
							</ul>
						</div>
					</article>
				</div>
				{/* resume end */}
			</div>
		</>
	)
}

export default Resume;

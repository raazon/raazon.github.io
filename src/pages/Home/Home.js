import React from 'react';
import AboutMe from './AboutMe';
import './home.scss';

const Home = () => {
	return (
		<>
			<div className="main-wrapper">
				<AboutMe />

				<section className="overview-section p-3 p-lg-5">
					<div className="container">
						<h2 className="section-title font-weight-bold mb-3">What I do</h2>
						<div className="section-intro mb-5">
							With over 10+ years of experience in WordPress and web development, I have assisted companies and
							individuals in enhancing their development, processes and fostering dynamic team management. Below
							is a quick overview of my main technical skill sets and technologies I use. Want to find out more
							about my experience? Check out my
							<a className="text-link" href="resume.html">online resume</a>
							and
							<a className="text-link" href="https://github.com/raazon/" target="_blank">GitHub</a>.
						</div>
						<div className="row">
							<div className="item col-6 col-lg-3">
								<div className="item-inner">
									<div className="item-icon">
										<i className="fa-brands fa-wordpress"></i>
									</div>
									<h3 className="item-title">WordPress Development</h3>
									<div className="item-desc">This is my best expertise, I worked 80% of my projects are based on
										WordPress. It's including theme development, plugin development, and customizing.</div>
								</div>
							</div>
							<div className="item col-6 col-lg-3">
								<div className="item-inner">
									<div className="item-icon"><i className="fab fa-php"></i></div>
									<h3 className="item-title">PHP</h3>
									<div className="item-desc">As a WordPress developer, I have to know PHP. I have a good
										understanding of PHP and OOP. I can write custom PHP code for WordPress based on
										projects.</div>
								</div>
							</div>
							<div className="item col-6 col-lg-3">
								<div className="item-inner">
									<div className="item-icon"><i className="fab fa-js-square"></i></div>
									<h3 className="item-title">Vanilla JavaScript</h3>
									<div className="item-desc">I love JavaScript much! I have a good understanding of JavaScript,
										including proficiency in ES6. I can confidently write custom JavaScript code based on
										projects.</div>
								</div>
							</div>
							<div className="item col-6 col-lg-3">
								<div className="item-inner">
									<div className="item-icon"><i className="fab fa-html5 me-2"></i><i className="fab fa-css3-alt"></i>
									</div>
									<h3 className="item-title">HTML &amp; CSS</h3>
									<div className="item-desc">I have a good understanding of HTML and CSS. I can write clean,
										responsive, semantic, valid, and cross-browser compatibility HTML &amp; CSS code.</div>
								</div>
							</div>
							<div className="item col-6 col-lg-3">
								<div className="item-inner">
									<div className="item-icon"><i className="fab fa-sass me-2"></i><i className="fab fa-less"></i></div>
									<h3 className="item-title">Sass &amp; LESS</h3>
									<div className="item-desc">I can also write CSS code using SCSS and LESS. I have a good
										understanding of SCSS and LESS. I can write clean, semantic, and valid SCSS and LESS
										code.</div>
								</div>
							</div>
							<div className="item col-6 col-lg-3">
								<div className="item-inner">
									<div className="item-icon"><i className="fab fa-npm me-2"></i><i className="fab fa-gulp me-2"></i><i
										className="fab fa-grunt"></i></div>
									<h3 className="item-title">npm, Gulp &amp; Grunt</h3>
									<div className="item-desc">I can use npm, Gulp, and Grunt for task automation. I can write
										custom tasks for Gulp and Grunt. I can also use npm for package management and build
										custom npm packages.</div>
								</div>
							</div>
							<div className="item col-6 col-lg-3">
								<div className="item-inner">
									<div className="item-icon">
										<i className="fab fa-github me-2"></i>
										<i className="fab fa-git-alt me-2"></i>
									</div>
									<h3 className="item-title">GitHub &amp; Git</h3>
									<div className="item-desc">Regularly I use Git for team collaboration, version control, pull
										requests, merge conflicts, and code reviews. I use GitHub mostly, aside also use GitLab
										and Bitbucket.</div>
								</div>
							</div>
							<div className="item col-6 col-lg-3">
								<div className="item-inner">
									<div className="item-icon"><i className="fab fa-react"></i></div>
									<h3 className="item-title">React</h3>
									<div className="item-desc">I have a good understanding of React. I can write clean, semantic,
										and valid React code. Often I use React for Gutenberg block development and plugin
										dashboard.</div>
								</div>
							</div>
						</div>
						<div className="text-center py-3 d-none">
							<a href="services.html" className="btn btn-primary">
								<i className="fas fa-arrow-alt-circle-right me-2"></i>
								Services &amp; Pricing
							</a>
						</div>

					</div>
				</section>

				<div className="container d-none">
					<hr />
				</div>

				<section className="testimonials-section p-3 p-lg-5 d-none">
					<div className="container">
						<h2 className="section-title font-weight-bold mb-5">Testimonials</h2>

						<div className="testiomonial-carousel-container">
							<div className="testimonial-carousel  tiny-slider">
								<div className="item">
									<div className="item-inner">
										<div className="quote-holder">
											<blockquote className="quote-content">
												Razon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer
												adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
												natoque penatibus et magnis.
											</blockquote>
											<i className="fas fa-quote-left"></i>
										</div>
										<div className="source-holder">
											<div className="source-profile">
												<img src="assets/images/clients/profile-1.png" alt="image" />
											</div>
											<div className="meta">
												<div className="name">Brandon James</div>
												<div className="info">Project Manager, Google</div>
											</div>
										</div>
									</div>
								</div>

								<div className="item">
									<div className="item-inner">
										<div className="quote-holder">
											<blockquote className="quote-content">
												Razon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer
												adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
												natoque penatibus et magnis.
											</blockquote>
											<i className="fas fa-quote-left"></i>
										</div>
										<div className="source-holder">
											<div className="source-profile">
												<img src="assets/images/clients/profile-2.png" alt="image" />
											</div>
											<div className="meta">
												<div className="name">Kate Sanders</div>
												<div className="info">Project Manager, Uber</div>
											</div>
										</div>
									</div>
								</div>

								<div className="item">
									<div className="item-inner">
										<div className="quote-holder">
											<blockquote className="quote-content">
												Razon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer
												adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
												natoque penatibus et magnis.
											</blockquote>
											<i className="fas fa-quote-left"></i>
										</div>
										<div className="source-holder">
											<div className="source-profile">
												<img src="assets/images/clients/profile-3.png" alt="image" />
											</div>
											<div className="meta">
												<div className="name">James Lee</div>
												<div className="info">Product Manager, Amazon</div>
											</div>
										</div>
									</div>
								</div>

								<div className="item">
									<div className="item-inner">
										<div className="quote-holder">
											<blockquote className="quote-content">
												Razon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer
												adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
												natoque penatibus et magnis.
											</blockquote>
											<i className="fas fa-quote-left"></i>
										</div>
										<div className="source-holder">
											<div className="source-profile">
												<img src="assets/images/clients/profile-4.png" alt="image" />
											</div>
											<div className="meta">
												<div className="name">James Lee</div>
												<div className="info">Product Manager, Amazon</div>
											</div>
										</div>
									</div>
								</div>

								<div className="item">
									<div className="item-inner">
										<div className="quote-holder">
											<blockquote className="quote-content">
												Razon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer
												adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
												natoque penatibus et magnis.
											</blockquote>
											<i className="fas fa-quote-left"></i>
										</div>
										<div className="source-holder">
											<div className="source-profile">
												<img src="assets/images/clients/profile-5.png" alt="image" />
											</div>
											<div className="meta">
												<div className="name">Olivia White</div>
												<div className="info">Product Manager, Dropbox</div>
											</div>
										</div>
									</div>
								</div>

								<div className="item">
									<div className="item-inner">
										<div className="quote-holder">
											<blockquote className="quote-content">
												Razon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer
												adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
												natoque penatibus et magnis.
											</blockquote>
											<i className="fas fa-quote-left"></i>
										</div>
										<div className="source-holder">
											<div className="source-profile">
												<img src="assets/images/clients/profile-6.png" alt="image" />
											</div>
											<div className="meta">
												<div className="name">Samuel Reyes</div>
												<div className="info">CTO, StartupHub</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="container d-none">
					<hr />
				</div>

				<section className="featured-section p-3 p-lg-5 d-none">
					<div className="container">
						<h2 className="section-title font-weight-bold mb-5">Featured Projects</h2>
						<div className="row">
							<div className="col-md-6 mb-5">
								<div className="card project-card">
									<div className="row no-gutters">
										<div className="col-12 col-xl-5 card-img-holder">
											<img src="assets/images/project/project-1.jpg" className="card-img" alt="image" />
										</div>
										<div className="col-12 col-xl-7">
											<div className="card-body">
												<h5 className="card-title"><a href="project.html" className="theme-link">Project
													Heading</a></h5>
												<p className="card-text">Project intro lorem ipsum dolor sit amet, consectetuer
													adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient
													montes.</p>
												<p className="card-text"><small className="text-muted">Client: Google</small></p>
											</div>
										</div>
									</div>
									<div className="link-mask">
										<a className="link-mask-link" href="project.html"></a>
										<div className="link-mask-text">
											<a className="btn btn-secondary" href="project.html">
												<i className="fas fa-eye me-2"></i>View Case Study
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 mb-5">
								<div className="card project-card">
									<div className="row no-gutters">
										<div className="col-12 col-xl-5 card-img-holder">
											<img src="assets/images/project/project-2.jpg" className="card-img" alt="image" />
										</div>
										<div className="col-12 col-xl-7">
											<div className="card-body">
												<h5 className="card-title"><a href="project.html" className="theme-link">Project
													Heading</a></h5>
												<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
													Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
													ridiculus mus. </p>
												<p className="card-text"><small className="text-muted">Client: Dropbox</small></p>
											</div>
										</div>
									</div>
									<div className="link-mask">
										<a className="link-mask-link" href="project.html"></a>
										<div className="link-mask-text">
											<a className="btn btn-secondary" href="project.html">
												<i className="fas fa-eye me-2"></i>View Case Study
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 mb-5">
								<div className="card project-card">
									<div className="row no-gutters">
										<div className="col-12 col-xl-5 card-img-holder">
											<img src="assets/images/project/project-3.jpg" className="card-img" alt="image" />
										</div>
										<div className="col-12 col-xl-7">
											<div className="card-body">
												<h5 className="card-title"><a href="project.html" className="theme-link">Project
													Heading</a></h5>
												<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
													Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
													ridiculus mus. </p>
												<p className="card-text"><small className="text-muted">Client: Google</small></p>
											</div>
										</div>
									</div>
									<div className="link-mask">
										<a className="link-mask-link" href="project.html"></a>
										<div className="link-mask-text">
											<a className="btn btn-secondary" href="project.html">
												<i className="fas fa-eye me-2"></i>View Case Study
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 mb-5">
								<div className="card project-card">
									<div className="row no-gutters">
										<div className="col-12 col-xl-5 card-img-holder">
											<img src="assets/images/project/project-4.jpg" className="card-img" alt="image" />
										</div>
										<div className="col-12 col-xl-7">
											<div className="card-body">
												<h5 className="card-title"><a href="project.html" className="theme-link">Project
													Heading</a></h5>
												<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
													Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
													ridiculus mus. </p>
												<p className="card-text"><small className="text-muted">Client: Uber</small></p>
											</div>
										</div>
									</div>
									<div className="link-mask">
										<a className="link-mask-link" href="project.html"></a>
										<div className="link-mask-text">
											<a className="btn btn-secondary" href="project.html">
												<i className="fas fa-eye me-2"></i>View Case Study
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center py-3">
							<a href="portfolio.html" className="btn btn-primary">
								<i className="fas fa-arrow-alt-circle-right me-2"></i>
								View Portfolio
							</a>
						</div>

					</div>
				</section>

				<div className="container d-none">
					<hr />
				</div>

				<section className="latest-blog-section p-3 p-lg-5 d-none">
					<div className="container">
						<h2 className="section-title font-weight-bold mb-5">Latest Blog Posts</h2>
						<div className="row">
							<div className="col-md-4 mb-5">
								<div className="card blog-post-card">
									<img className="card-img-top" src="assets/images/blog/blog-post-thumb-card-1.jpg" alt="image" />
									<div className="card-body">
										<h5 className="card-title"><a className="theme-link" href="blog-post.html">Top 3 JavaScript
											Frameworks</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
											commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
											parturient...</p>
										<p className="mb-0"><a className="text-link" href="blog-post.html">Read more &rarr;</a></p>

									</div>
									<div className="card-footer">
										<small className="text-muted">Published 2 days ago</small>
									</div>
								</div>
							</div>
							<div className="col-md-4 mb-5">
								<div className="card blog-post-card">
									<img className="card-img-top" src="assets/images/blog/blog-post-thumb-card-2.jpg" alt="image" />
									<div className="card-body">
										<h5 className="card-title"><a className="theme-link" href="blog-post.html">About Remote
											Working</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
											commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
											parturient...</p>
										<p className="mb-0"><a className="text-link" href="blog-post.html">Read more &rarr;</a></p>
									</div>
									<div className="card-footer">
										<small className="text-muted">Published a week ago</small>

									</div>
								</div>
							</div>
							<div className="col-md-4 mb-5">
								<div className="card blog-post-card">
									<img className="card-img-top" src="assets/images/blog/blog-post-thumb-card-3.jpg" alt="image" />
									<div className="card-body">
										<h5 className="card-title"><a className="theme-link" href="blog-post.html">A Guide to Becoming a
											Full-Stack Developer</a></h5>
										<p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
											commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
											parturient...</p>
										<p className="mb-0"><a className="text-link" href="blog-post.html">Read more &rarr;</a></p>
									</div>
									<div className="card-footer">
										<small className="text-muted">Published 3 weeks ago</small>
									</div>
								</div>
							</div>
						</div>
						<div className="text-center py-3"><a href="blog-home.html" className="btn btn-primary"><i
							className="fas fa-arrow-alt-circle-right me-2"></i>View Blog</a></div>
					</div>

				</section>
			</div>
		</>
	)
}

export default Home
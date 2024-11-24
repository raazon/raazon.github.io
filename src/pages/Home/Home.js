import AboutMe from './AboutMe';
import './Home.scss';
import Overview from './Overview';

const Home = () => {
	return (
		<>
			<div className="main-wrapper">
				<AboutMe />

				<Overview />

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
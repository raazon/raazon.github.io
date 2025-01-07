import Image from "next/image";
import Link from "next/link";
import { AboutMe, Overview } from "./components/Home";
import './styles/home.scss';

const Home: React.FC = () => {
	return (
		<>
			<div className="main-wrapper">
				<AboutMe />

				<Overview />

				<div className="container d-none">
					<hr />
				</div>

				{/* Testimonials Section */}
				<section className="testimonials-section p-3 p-lg-5 d-none">
					<div className="container">
						<h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
						<div className="testiomonial-carousel-container">
							<div className="testimonial-carousel tiny-slider">
								{[
									{
										quote:
											"Razon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
										name: "Brandon James",
										info: "Project Manager, Google",
										img: "/assets/images/clients/profile-1.png",
									},
									{
										quote:
											"Razon is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.",
										name: "Kate Sanders",
										info: "Project Manager, Uber",
										img: "/assets/images/clients/profile-2.png",
									},
									// Add more testimonials here
								].map((testimonial, index) => (
									<div className="item" key={index}>
										<div className="item-inner">
											<div className="quote-holder">
												<blockquote className="quote-content">
													{testimonial.quote}
												</blockquote>
												<i className="fas fa-quote-left"></i>
											</div>
											<div className="source-holder">
												<div className="source-profile">
													<Image
														src={testimonial.img}
														alt="Client profile"
														width={100}
														height={100}
													/>
												</div>
												<div className="meta">
													<div className="name">{testimonial.name}</div>
													<div className="info">{testimonial.info}</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<div className="container d-none">
					<hr />
				</div>

				{/* Featured Section */}
				<section className="featured-section p-3 p-lg-5 d-none">
					<div className="container">
						<h2 className="section-title font-weight-bold mb-5">
							Featured Projects
						</h2>
						<div className="row">
							{[
								{
									title: "Project Heading",
									description:
										"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
									client: "Google",
									img: "/assets/images/project/project-1.jpg",
									link: "/project",
								},
								{
									title: "Project Heading",
									description:
										"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
									client: "Dropbox",
									img: "/assets/images/project/project-2.jpg",
									link: "/project",
								},
								// Add more projects here
							].map((project, index) => (
								<div className="col-md-6 mb-5" key={index}>
									<div className="card project-card">
										<div className="row no-gutters">
											<div className="col-12 col-xl-5 card-img-holder">
												<Image
													src={project.img}
													className="card-img"
													alt="Project"
													width={200}
													height={150}
												/>
											</div>
											<div className="col-12 col-xl-7">
												<div className="card-body">
													<h5 className="card-title">
														<Link href={project.link}>{project.title}</Link>
													</h5>
													<p className="card-text">{project.description}</p>
													<p className="card-text">
														<small className="text-muted">
															Client: {project.client}
														</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;

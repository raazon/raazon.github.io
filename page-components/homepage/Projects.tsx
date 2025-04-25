import Image from "next/image";
import Link from "next/link";
import { FC } from 'react';


interface ProjectsProps {
	hide?: string | boolean;
}

const Projects: FC<ProjectsProps> = ({ hide = false }) => {
	if (hide) {
		return null;
	}

	const projects = [
		{
			title: "Project Heading",
			description: "Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
			client: "Google",
			img: "/assets/images/project/project-1.jpg",
			link: "/project",
		},
		{
			title: "Project Heading",
			description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			client: "Dropbox",
			img: "/assets/images/project/project-2.jpg",
			link: "/project",
		},
		// Add more projects here
	];

	return (
		<>
			<div className="container">
				<hr />
			</div>

			<section className="featured-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-5">
						Featured Projects
					</h2>

					<div className="row">
						{
							projects.map((project, index) => (
								<div className="col-md-6 mb-5" key={index}>
									<div className="card project-card">
										<div className="row no-gutters">
											<div className="col-12 col-xl-5 card-img-holder">
												<Image
													src={project.img}
													alt="Project"
													width={200}
													height={150}
													className="card-img h-auto"
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
							))
						}
					</div>
				</div>
			</section>
		</>
	);

}

export default Projects;
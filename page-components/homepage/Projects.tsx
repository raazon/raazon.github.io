import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface ProjectsProps {
	hide?: string | boolean;
}

interface Project {
	title: string;
	slug: string;
	company: string;
	img: string;
	link: string;
	description?: string;
}


const Projects: FC<ProjectsProps> = ({ hide = false }) => {
	if (hide) return null;

	const [projects, setProjects] = useState < Project[] > ([
		{
			title: "ElementsKit - Elementor Addons",
			slug: "elementskit-lite",
			company: "Wpmet",
			img: "https://ps.w.org/elementskit-lite/assets/banner-1544x500.jpg",
			link: "/project/elementskit",
		},
		{
			title: "GutenKit – Gutenberg Blocks",
			slug: "gutenkit-blocks-addon",
			company: "Wpmet",
			img: "https://ps.w.org/gutenkit-blocks-addon/assets/banner-1544x500.jpg",
			link: "/project/gutenkit",
		},
		{
			title: "PopupKit - Popup Builder for WordPress",
			slug: "popup-builder-block",
			company: "Wpmet",
			img: "https://ps.w.org/popup-builder-block/assets/banner-1544x500.jpg",
			link: "/project/popupkit",
		},
	]);

	useEffect(() => {
		const fetchDescriptions = async () => {
			const updatedProjects = await Promise.all(
				projects.map(async (project) => {
					try {
						const res = await fetch(
							`https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=${project.slug}`
						);
						const data = await res.json();
						const desc =
							data?.sections?.short_description || data?.sections?.description || "No description available.";
						return {
							...project,
							description: desc.length > 300 ? desc.slice(0, 300) + "..." : desc,
						};
					} catch (error) {
						console.error(`Error fetching ${project.slug}:`, error);
						return { ...project, description: "Failed to load description." };
					}
				})
			);
			setProjects(updatedProjects);
		};

		fetchDescriptions();
	}, []);

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
											<div className="col-12 card-img-holder">
												<Link href={project.link}>
													<Image
														src={project.img}
														alt={project.title}
														width={1544}
														height={500}
														className="card-img h-auto"
													/>
												</Link>
											</div>
											<div className="col-12">
												<div className="card-body">
													<h5 className="card-title">
														<Link href={project.link} className="theme-link">
															{project.title}
														</Link>
													</h5>
													<p className="card-text">{project.description}</p>
													<p className="card-text">
														<small className="text-muted">
															Company: {project.company}
														</small>
													</p>
												</div>
											</div>
										</div>
										<div className="link-mask d-none">
											<a className="link-mask-link" href={project.link}></a>
											<div className="link-mask-text">
												<a className="btn btn-secondary" href={project.link}>
													<svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
													View Case Study
												</a>
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
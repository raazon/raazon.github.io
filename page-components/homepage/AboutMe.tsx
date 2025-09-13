import Icon from '@/components/icon/Icon';
import { siteConfig } from "@/utils/siteConfig";
import Link from 'next/link';
import { FC } from 'react';


const AboutMe: FC = () => {
	return (
		<section className="about-me-section p-3 p-lg-5 theme-bg-light">
			<div className="container">
				<div className="profile-teaser row">
					<div className="col">
						<h2 className="name font-weight-bold mb-1">
							{siteConfig.name}
						</h2>
						<div className="tagline mb-3">
							{siteConfig.designation}
						</div>
						<div className="bio mb-4 ">
							{siteConfig.bio}
						</div>
						<div className="bio mb-4 d-none">
							{`With 12 years+ of experience in WordPress and web development, I have spearheaded the architecture and management of various WordPress plugins, including GutenKit and PopupKit. My expertise includes plugin development, team leadership, project lifecycle management, bug fixing and UX enhancement. I write about software development on `}

							<Link
								className="text-link text-decoration-none"
								href="/blog"
							>
								my blog
							</Link>

							{`.`}

							{` Want to know how I may help your project? Check out my project `}

							<Link
								className="text-link text-decoration-none"
								href="/portfolio"
							>
								portfolio
							</Link>

							{` and `}

							<Link
								className="text-link text-decoration-none"
								href="/resume"
							>
								online resume
							</Link>

							{`.`}
						</div>
						<div className="mb-4">
							<Link
								className="btn btn-primary me-2 mb-3"
								href={siteConfig.links.github}
								target="_blank"
								rel="noreferrer"
							>
								<Icon name="circleRight" className="svg-inline--fa me-2" />
								<span className="d-none d-md-inline">View</span>
								{` GitHub `}
							</Link>
							<Link href="/portfolio" className="btn btn-primary me-2 mb-3 d-none">
								<Icon name="circleRight" className="svg-inline--fa me-2" />
								<span className="d-none d-md-inline">View</span>
								{` Portfolio `}
							</Link>
							<Link href="/resume" className="btn btn-secondary mb-3">
								<Icon name="fileLines" className="svg-inline--fa me-2" />
								<span className="d-none d-md-inline">View</span>
								{` Resume `}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;

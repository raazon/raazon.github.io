import Link from 'next/link';
import { FC } from 'react';
import Icon from '../Icon/Icon';

const AboutMe: FC = () => {
	return (
		<section className="about-me-section p-3 p-lg-5 theme-bg-light">
			<div className="container">
				<div className="profile-teaser row">
					<div className="col">
						<h2 className="name font-weight-bold mb-1">Razon Komar Pal</h2>
						<div className="tagline mb-3">Senior Web Developer</div>
						<div className="bio mb-4">
							{`I'm a Dedicated web developer driven by a passion for continuous learning and impactful contributions. With over 10+ years of experience in WordPress and web development, I have assisted companies in enhancing their development processes and fostering dynamic team management. Honored as the Responsible Team Player of the Year in 2022 and the Emerging Scrum Master of the Year in 2023.`}
							<br />
							<br />
							{`Currently serving as a Senior Web Developer at `}
							<a
								className="text-link text-decoration-none"
								href="https://www.wpmet.com/"
								target="_blank"
								rel="noreferrer"
							>
								Wpmet
							</a>
							{` a division of `}
							<a
								className="text-link text-decoration-none"
								href="https://www.xpeedstudio.com/"
								target="_blank"
								rel="noreferrer"
							>
								XpeedStudio
							</a>
							{` where I have taken a leading role in managing, developing, and enhancing impactful plugins `}
							<a
								className="text-link text-decoration-none"
								href="https://wordpress.org/plugins/elementskit-lite/"
								target="_blank"
								rel="noreferrer"
							>
								ElementsKit
							</a>
							{`, `}
							<a
								className="text-link text-decoration-none"
								href="https://wordpress.org/plugins/gutenkit-blocks-addon/"
								target="_blank"
								rel="noreferrer"
							>
								GutenKit
							</a>
							{` and more, trusted by millions of users worldwide.`}
						</div>
						<div className="mb-4">
							<a
								className="btn btn-primary me-2 mb-3"
								href="https://github.com/raazon/"
								target="_blank"
								rel="noreferrer"
							>
								<Icon name="circleRight" className="svg-inline--fa me-2" />
								<span className="d-none d-md-inline">View</span>
								{` GitHub `}
							</a>
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

import { Icon } from 'components';
import { NavLink } from "react-router-dom";

import { js, wordpressSimple } from './SkillsIcons';

const Overview = () => {
	const technicalSkills = [
		{
			label: "JavaScript",
			labelColor: "#333333",
			labelBgColor: "#f7df1e",
			logo: js,
			style: "for-the-badge",
		},
		{
			label: "TypeScript",
			labelColor: "#ffffff",
			labelBgColor: "#3178c6",
			logo: wordpressSimple,
			style: "for-the-badge",
		},
		{
			label: "React",
			labelColor: "#333333",
			labelBgColor: "#61dafb",
			logo: wordpressSimple,
			style: "for-the-badge",
		},
		{
			label: "jQuery",
			labelColor: "#ffffff",
			labelBgColor: "#0769ad",
			logo: wordpressSimple,
			style: "for-the-badge",
		},
		{
			label: "PHP",
			labelColor: "#ffffff",
			labelBgColor: "#777bb4",
			logo: wordpressSimple,
			style: "for-the-badge",
		},
		{
			label: "WordPress",
			labelColor: "#ffffff",
			labelBgColor: "#21759b",
			logo: wordpressSimple,
			style: "for-the-badge",
		},
		{
			label: "REST API",
			labelColor: "#ffffff",
			labelBgColor: "#008080",
			logo: wordpressSimple,
			style: "for-the-badge",
		},
		{
			label: "WP-CLI",
			labelColor: "#ffffff",
			labelBgColor: "#212121",
			logo: wordpressSimple,
			style: "for-the-badge",
		},
		{
			label: "Gutenberg",
			labelColor: "#ffffff",
			labelBgColor: "#333333",
			logo: wordpressSimple,
			style: "for-the-badge",
		},
		{
			label: "Full Site Editing",
			labelColor: "#ffffff",
			labelBgColor: "#21759b",
			logo: "wordpress",
			style: "for-the-badge",
		},
		{
			label: "Plugin Development",
			labelColor: "#ffffff",
			labelBgColor: "#0073aa",
			logo: "wordpress",
			style: "for-the-badge",
		},
		{
			label: "Theme Development",
			labelColor: "#ffffff",
			labelBgColor: "#0073aa",
			logo: "wordpress",
			style: "for-the-badge",
		},
		{
			label: "HTML 5",
			labelColor: "#ffffff",
			labelBgColor: "#E34F26",
			logo: "html5",
			style: "for-the-badge",
		},
		{
			label: "CSS 3",
			labelColor: "#ffffff",
			labelBgColor: "#1572B6",
			logo: "css3",
			style: "for-the-badge",
		},
		{
			label: "SASS",
			labelColor: "#ffffff",
			labelBgColor: "#CC6699",
			logo: "sass",
			style: "for-the-badge",
		},
		{
			label: "Bootstrap",
			labelColor: "#ffffff",
			labelBgColor: "#7952b3",
			logo: "bootstrap",
			style: "for-the-badge",
		},
		{
			label: "Tailwind CSS",
			labelColor: "#ffffff",
			labelBgColor: "#38b2ac",
			logo: "tailwindcss",
			style: "for-the-badge",
		},
	];

	const toolsAndTechnologies = [
		{
			label: "Gitflow",
			labelColor: "#ffffff",
			labelBgColor: "#f05032",
			logo: "git",
			style: "for-the-badge",
		},
		{
			label: "GitHub Actions",
			labelColor: "#ffffff",
			labelBgColor: "#2088FF",
			logo: "githubactions",
			style: "for-the-badge",
		},
		{
			label: "vscode",
			labelColor: "#ffffff",
			labelBgColor: "#22a7f2",
			logo: "vscode",
			style: "for-the-badge",
		},
		{
			label: "NPM",
			labelColor: "#ffffff",
			labelBgColor: "#cb0001",
			logo: "npm",
			style: "for-the-badge",
		},
		{
			label: "Webpack",
			labelColor: "#333333",
			labelBgColor: "#8dd6f9",
			logo: "webpack",
			style: "for-the-badge",
		},
		{
			label: "Gulp",
			labelColor: "#ffffff",
			labelBgColor: "#d04647",
			logo: "gulp",
			style: "for-the-badge",
		},
		{
			label: "Grunt",
			labelColor: "#ffffff",
			labelBgColor: "#faaa17",
			logo: "grunt",
			style: "for-the-badge",
		},
		{
			label: "Babel",
			labelColor: "#333333",
			labelBgColor: "#f9dc3e",
			logo: "babel",
			style: "for-the-badge",
		},
		{
			label: "Puppeteer",
			labelColor: "#ffffff",
			labelBgColor: "#40b5a4",
			logo: "puppeteer",
			style: "for-the-badge",
		},
		{
			label: "Playwright",
			labelColor: "#ffffff",
			labelBgColor: "#2fad33",
			logo: "playwright",
			style: "for-the-badge",
		},
		{
			label: "PHPUnit",
			labelColor: "#ffffff",
			labelBgColor: "#3b9cd7",
			logo: "php",
			style: "for-the-badge",
		},
		{
			label: "WPCS",
			labelColor: "#ffffff",
			labelBgColor: "#21759b",
			logo: "wordpress",
			style: "for-the-badge",
		},
	];

	console.log(technicalSkills);
	return (
		<>
			<section className="overview-section p-3 p-lg-5">
				<div className="container">
					<h2 className="section-title font-weight-bold mb-3">What I do</h2>
					<div className="section-intro mb-5">
						{`With over 10+ years of experience in WordPress and web development, I have assisted companies and
						individuals in enhancing their development, processes and fostering dynamic team management. Below
						is a quick overview of my main technical skill sets and technologies I use. Want to find out more
						about my experience? Check out my `}
						<NavLink className="text-link" to="/resume">
							online resume
						</NavLink>
						{` and `}
						<a className="text-link" href="https://github.com/raazon/" target="_blank" rel="noreferrer">
							GitHub
						</a>.
					</div>

					<div className="row gap-3">
						<h3 className="item-title">Technical Skills</h3>
						<div className="my-skills">
							{
								technicalSkills.map((skill, index) => (
									<span
										className='skill-item rounded'
										style={{ backgroundColor: skill.labelBgColor, color: skill.labelColor }}
										key={index}>
										{skill.logo} {skill.label}
									</span>
								))
							}
						</div>
					</div>

					<div className="row gap-3 mt-5">
						<h3 className="item-title">Tools and Technologies</h3>
						<div className="my-skills">
							{
								toolsAndTechnologies.map((skill, index) => (
									<span
										className='skill-item rounded'
										style={{ backgroundColor: skill.labelBgColor, color: skill.labelColor }}
										key={index}>
										{skill.logo} {skill.label}
									</span>
								))
							}
						</div>
					</div>

					<div className="text-center pt-5 mb-3 d-none">
						<a href="services.html" className="btn btn-primary">
							<Icon name='circleRight' className='fa-circle-right me-2' />
							Services &amp; Pricing
						</a>
					</div>
				</div>
			</section>
		</>
	)
}

export default Overview
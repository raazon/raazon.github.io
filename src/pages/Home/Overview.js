import { Icon } from 'components';
import { NavLink } from "react-router-dom";

const Overview = () => {
	const technicalSkills = [
		{
			label: "JavaScript",
			labelBgColor: "f7df1e",
			logo: "javascript",
			logoColor: "black",
			style: "for-the-badge",
		},
		{
			label: "TypeScript",
			labelBgColor: "3178c6",
			logo: "typescript",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "React",
			labelBgColor: "61dafb",
			logo: "react",
			logoColor: "black",
			style: "for-the-badge",
		},
		{
			label: "jQuery",
			labelBgColor: "0769ad",
			logo: "jquery",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "PHP",
			labelBgColor: "777bb4",
			logo: "php",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "WordPress",
			labelBgColor: "21759b",
			logo: "wordpress",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "REST API",
			labelBgColor: "008080",
			logo: "wordpress",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "WP-CLI",
			labelBgColor: "212121",
			logo: "wordpress",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Gutenberg",
			labelBgColor: "333333",
			logo: "wordpress",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Full Site Editing",
			labelBgColor: "21759b",
			logo: "wordpress",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Plugin Development",
			labelBgColor: "0073aa",
			logo: "wordpress",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Theme Development",
			labelBgColor: "0073aa",
			logo: "wordpress",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "HTML 5",
			labelBgColor: "E34F26",
			logo: "html5",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "CSS 3",
			labelBgColor: "1572B6",
			logo: "css3",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "SASS",
			labelBgColor: "CC6699",
			logo: "sass",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Bootstrap",
			labelBgColor: "7952b3",
			logo: "bootstrap",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Tailwind CSS",
			labelBgColor: "38b2ac",
			logo: "tailwindcss",
			logoColor: "white",
			style: "for-the-badge",
		},
	];

	const toolsAndTechnologies = [
		{
			label: "Gitflow",
			labelBgColor: "f05032",
			logo: "git",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "GitHub Actions",
			labelBgColor: "2088FF",
			logo: "githubactions",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "vscode",
			labelBgColor: "22a7f2",
			logo: "vscode",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "NPM",
			labelBgColor: "cb0001",
			logo: "npm",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Webpack",
			labelBgColor: "8dd6f9",
			logo: "webpack",
			logoColor: "black",
			style: "for-the-badge",
		},
		{
			label: "Gulp",
			labelBgColor: "d04647",
			logo: "gulp",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Grunt",
			labelBgColor: "faaa17",
			logo: "grunt",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Babel",
			labelBgColor: "f9dc3e",
			logo: "babel",
			logoColor: "black",
			style: "for-the-badge",
		},
		{
			label: "Puppeteer",
			labelBgColor: "40b5a4",
			logo: "puppeteer",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "Playwright",
			labelBgColor: "2fad33",
			logo: "playwright",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "PHPUnit",
			labelBgColor: "3b9cd7",
			logo: "php",
			logoColor: "white",
			style: "for-the-badge",
		},
		{
			label: "WPCS",
			labelBgColor: "21759b",
			logo: "wordpress",
			logoColor: "white",
			style: "for-the-badge",
		},
	];

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
						<h3 class="item-title">Technical Skills</h3>
						<div className="my-skils">
							{
								technicalSkills.map((skill, index) => (
									<img
										className="img-fluid rounded"
										src={`https://img.shields.io/badge/${skill.label}-${skill.labelBgColor}?logo=${skill.logo}&logoColor=${skill.logoColor}&style=${skill.style}`}
										alt={skill.label}
										key={index}
									/>
								))
							}
						</div>
					</div>

					<div className="row gap-3 mt-5">
						<h3 class="item-title">Tools and Technologies</h3>
						<div className="my-skils">
							{
								toolsAndTechnologies.map((skill, index) => (
									<img
										className="img-fluid rounded"
										src={`https://img.shields.io/badge/${skill.label}-${skill.labelBgColor}?logo=${skill.logo}&logoColor=${skill.logoColor}&style=${skill.style}`}
										alt={skill.label}
										key={index}
									/>
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
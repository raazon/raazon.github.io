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
			logoColor: "black",
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
			logoColor: "black",
			style: "for-the-badge",
		},
		{
			label: "Playwright",
			labelBgColor: "2fad33",
			labelColor: "black",
			logo: "playwright",
			logoColor: "black",
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

					<div className="row d-none">
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<Icon name='wordpress' className='fa-wordpress' />
								</div>
								<h3 className="item-title">WordPress Development</h3>
								<div className="item-desc">
									This is my best expertise, I worked 80% of my projects are based on
									WordPress. It's including theme development, plugin development, and customizing.
								</div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<Icon name='php' className='fa-php' />
								</div>
								<h3 className="item-title">PHP</h3>
								<div className="item-desc">
									As a WordPress developer, I have to know PHP. I have a good
									understanding of PHP and OOP. I can write custom PHP code for WordPress based on
									projects.
								</div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<Icon name='js' className='fa-js' />
								</div>
								<h3 className="item-title">Vanilla JavaScript</h3>
								<div className="item-desc">
									I love JavaScript much! I have a good understanding of JavaScript,
									including proficiency in ES6. I can confidently write custom JavaScript code based on
									projects.
								</div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<Icon name='html' className='fa-html5 me-2' />
									<Icon name='css' className='fa-css3 me-2' />
								</div>
								<h3 className="item-title">HTML &amp; CSS</h3>
								<div className="item-desc">
									I have a good understanding of HTML and CSS. I can write clean,
									responsive, semantic, valid, and cross-browser compatibility HTML &amp; CSS code.
								</div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<Icon name='sass' className='fa-sass me-2' />
									<Icon name='tailwindcss' className='fa-tailwindcss me-2' />
									<Icon name='bootstrap' className='fa-bootstrap' />
								</div>
								<h3 className="item-title">Sass, Tailwind &amp; Bootstrap</h3>
								<div className="item-desc">
									I can also write CSS code using SCSS and LESS. I have a good
									understanding of SCSS and LESS. I can write clean, semantic, and valid SCSS and LESS
									code.
								</div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<Icon name='npm' className='fa-npm me-2' />
									<Icon name='gulp' className='fa-gulp me-2' />
									<Icon name='grunt' className='fa-grunt' />
								</div>
								<h3 className="item-title">NPM, Gulp &amp; Grunt</h3>
								<div className="item-desc">
									I can use npm, Gulp, and Grunt for task automation. I can write
									custom tasks for Gulp and Grunt. I can also use npm for package management and build
									custom npm packages.
								</div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<Icon name='squareGit' className='fa-square-git me-2' />
									<Icon name='squareGithub' className='fa-square-github' />
								</div>
								<h3 className="item-title">Gitflow &amp; GitHub</h3>
								<div className="item-desc">
									Regularly I use Git for team collaboration, version control, pull
									requests, merge conflicts, and code reviews. I use GitHub mostly, aside also use GitLab
									and Bitbucket.
								</div>
							</div>
						</div>
						<div className="item col-6 col-lg-3">
							<div className="item-inner">
								<div className="item-icon">
									<Icon name='react' className='fa-react' />
								</div>
								<h3 className="item-title">React</h3>
								<div className="item-desc">
									I have a good understanding of React. I can write clean, semantic,
									and valid React code. Often I use React for Gutenberg block development and plugin
									dashboard.
								</div>
							</div>
						</div>
					</div>
					<div className="text-center py-3 d-none">
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
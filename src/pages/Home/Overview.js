import { Icon } from 'components';
import { NavLink } from "react-router-dom";

const Overview = () => {
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
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/javascript-f7df1c?style=for-the-badge&logo=javascript&logoColor=333333"
								alt="javascript"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/typescript-0073aa?style=for-the-badge&logo=typescript&logoColor=ffffff"
								alt="typescript"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=ffffff"
								alt="react"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/jquery-1f6faa?style=for-the-badge&logo=jquery&logoColor=ffffff"
								alt="jquery"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/php-777bb4?style=for-the-badge&logo=php&logoColor=ffffff"
								alt="php"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/wordpress-777bb4?style=for-the-badge&logo=wordpress&logoColor=ffffff"
								alt="wordpress"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/REST%20API-777bb4?style=for-the-badge&logo=api&logoColor=ffffff"
								alt="REST API"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/WP%20CLI-777bb4?style=for-the-badge&logo=wpcli&logoColor=ffffff"
								alt="WP CLI"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/gutenberg-whitesmoke?style=for-the-badge&logo=gutenberg&logoColor=333333"
								alt="gutenberg"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/html5-e35026?style=for-the-badge&logo=html5&logoColor=ffffff"
								alt="html5"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/css3-2865f0?style=for-the-badge&logo=html5&logoColor=ffffff"
								alt="css3"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/sass-cc6599?style=for-the-badge&logo=sass&logoColor=ffffff"
								alt="sass"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/bootstrap-7952b3?style=for-the-badge&logo=bootstrap&logoColor=ffffff"
								alt="bootstrap"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/tailwind-7952b3?style=for-the-badge&logo=tailwind&logoColor=ffffff"
								alt="bootstrap"
							/>
						</div>
					</div>

					<div className="row gap-3 mt-5">
						<h3 class="item-title">Tools and Technologies</h3>
						<div className="my-skils">
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/git-f05032?style=for-the-badge&logo=git&logoColor=ffffff"
								alt="git"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/CI/CD-brightgreen?style=for-the-badge&logo=githubactions&logoColor=ffffff"
								alt="CI CD"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/npm-cb0001?style=for-the-badge&logo=npm&logoColor=ffffff"
								alt="npm"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/vscode-22a7f2?style=for-the-badge&logo=vscode&logoColor=ffffff"
								alt="vscode"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/webpack-8dd6f9?style=for-the-badge&logo=webpack&logoColor=333333"
								alt="webpack"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/gulp-d04647?style=for-the-badge&logo=gulp&logoColor=ffffff"
								alt="gulp"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/grunt-faaa17?style=for-the-badge&logo=grunt&logoColor=ffffff"
								alt="grunt"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/playwright-2fad33?style=for-the-badge&logo=microsoft&logoColor=ffffff"
								alt="playwright"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/puppeteer-40b5a4?style=for-the-badge&logo=puppeteer&logoColor=ffffff"
								alt="puppeteer"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/PHPUnit-6d8faf?style=flat-square&logo=php&logoColor=ffffff"
								alt="PHPUnit"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/WPCS-6d8faf?style=for-the-badge&logo=WP&logoColor=ffffff"
								alt="WPCS"
							/>
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
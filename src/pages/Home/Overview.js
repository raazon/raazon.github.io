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
						<h4>Technical Skills:</h4>
						<div className="my-skils">
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/wordpress-0073aa?style=for-the-badge&logo=wordpress&labelColor=%200073aa&logoColor=fff"
								alt="wordpress"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/woocommerce-7f54b2?style=for-the-badge&logo=woo&labelColor=%207f54b2&logoColor=fff"
								alt="woocommerce"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/gutenberg-ecf0f1?style=for-the-badge&logo=gutenberg&logoColor=101010"
								alt="gutenberg"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/elementor-92003B?style=for-the-badge&logo=elementor&logoColor=fff"
								alt="elementor"
							/>
							<img
								className="img-fluid rounded"
								src="https://img.shields.io/badge/elementor-92003B?style=for-the-badge&logo=elementor&logoColor=fff"
								alt="woocommerce"
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
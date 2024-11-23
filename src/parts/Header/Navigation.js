import React from 'react';
import Icon from '../../components/Icon';

const Navigation = () => {
	return (
		<>
			<ul className="navbar-nav flex-column text-start">
				<li className="nav-item">
					<a className="nav-link active" href="/">
						<Icon name='user' className="me-2" />
						About Me<span className="sr-only">(current)</span>
					</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link" href="portfolio.html">
						<i className="fas fa-laptop-code fa-fw me-2"></i>
						Portfolio
					</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link" href="services.html">
						<i className="fas fa-briefcase fa-fw me-2"></i>
						Services &amp; Pricing
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="resume.html">
						<i className="fas fa-file-alt fa-fw me-2"></i>
						Resume
					</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link" href="blog-home.html">
						<i className="fas fa-blog fa-fw me-2"></i>
						Blog
					</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link" href="contact.html">
						<i className="fas fa-envelope-open-text fa-fw me-2"></i>
						Contact
					</a>
				</li>
				<li className="nav-item dropdown d-none">
					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
						data-bs-toggle="dropdown" aria-expanded="false">
						<i className="fas fa-cogs fa-fw me-2"></i>More Pages
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a className="dropdown-item" href="project.html">Project Page</a></li>
						<li><a className="dropdown-item" href="blog-home.html">Blog Home 1</a></li>
						<li><a className="dropdown-item" href="blog-home-alt.html">Blog Home 2</a></li>
						<li><a className="dropdown-item" href="blog-post.html">Blog Post</a></li>
					</ul>
				</li>
			</ul>
		</>
	)
}

export default Navigation;
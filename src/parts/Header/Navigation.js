import React from 'react';
import Icon from '../../components/Icon';

const Navigation = () => {
	return (
		<>
			<ul className="navbar-nav flex-column text-start">
				<li className="nav-item">
					<a className="nav-link active" href="/">
						<Icon name='user' className="me-2" />
						About Me
						<span className="sr-only">(current)</span>
					</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link" href="portfolio.html">
						<Icon name='laptopCode' className="me-2" />
						Portfolio
					</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link" href="services.html">
						<Icon name='briefcase' className="me-2" />
						Services &amp; Pricing
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="resume.html">
						<Icon name='fileAlt' className="me-2" />
						Resume
					</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link" href="blog-home.html">
						<Icon name='blog' className="me-2" />
						Blog
					</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link" href="contact.html">
						<Icon name='envelopeOpenText' className="me-2" />
						Contact
					</a>
				</li>
			</ul>
		</>
	)
}

export default Navigation;
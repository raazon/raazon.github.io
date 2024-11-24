import { CustomNavLink, Icon } from 'components';

const Navigation = () => {
	const navLinkClass = (isActive) => (isActive ? "nav-link active" : "nav-link");

	return (
		<>
			<ul className="navbar-nav flex-column text-start">
				<li className="nav-item">
					<CustomNavLink to="/">
						<Icon name='user' className="me-2" />
						About Me
					</CustomNavLink>
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
					<CustomNavLink to="/resume">
						<Icon name='fileAlt' className="me-2" />
						Resume
					</CustomNavLink>
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
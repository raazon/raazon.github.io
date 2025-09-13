"use client";

import "@assets/plugins/tiny-slider/tiny-slider.css";
import Script from "next/script";
import { AboutMe, Overview, Posts, Projects, Testimonials } from "../page-components/homepage";

const Home: React.FC = () => {
	return (
		<>
			<Script
				src="/assets/plugins/tiny-slider/min/tiny-slider.js"
				strategy="afterInteractive"
			/>

			<div className="main-wrapper">
				<AboutMe />

				<Projects hide={false} />

				<div className="container">
					<hr />
				</div>

				<Overview />

				<div className="container">
					<hr />
				</div>

				<Testimonials hide={true} />

				<div className="container d-none">
					<hr />
				</div>

				<Posts hide={true} />
			</div>
		</>
	);
};

export default Home;

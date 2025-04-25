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

				<Overview />

				<Testimonials hide />

				<Projects hide />

				<Posts hide />
			</div>
		</>
	);
};

export default Home;

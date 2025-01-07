"use client"; // Required for using state and effects in Next.js layouts
import "@/styles/globals.scss";
import Cookies from "js-cookie";
import { Roboto } from "next/font/google";
import Script from 'next/script';
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

// export const metadata: Metadata = {
// 	title: "Razon Komar Pal | Expert Full Stack Web Developer",
// 	description: "Razon Komar Pal is an expert Full Stack Web Developer specializing in modern web technologies and responsive design.",
// 	keywords: "Full Stack Web Developer, Web Development, Responsive Design, Modern Web Technologies, WordPress Developer, Razon Komar Pal",
// 	openGraph: {
// 		title: "Razon Komar Pal | Expert Full Stack Web Developer",
// 		description: "Razon Komar Pal is an expert Full Stack Web Developer specializing in modern web technologies and responsive design.",
// 		siteName: "Razon Komar Pal Portfolio",
// 		locale: "en_US",
// 		type: "website",
// 	},
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Client-side state management for dark mode
	const [darkMode, setDarkMode] = useState(false);

	// Load dark mode preference from cookies on mount
	useEffect(() => {
		const savedPreference = Cookies.get("dark-mode");
		setDarkMode(savedPreference === "true");
	}, []);

	// Update cookie when dark mode changes
	useEffect(() => {
		Cookies.set("dark-mode", darkMode.toString(), { expires: 365 });
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<html lang="en" className={roboto.className}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<link rel="stylesheet" href="./assets/css/theme-1.css" />
			</head>
			<body className={darkMode ? "dark-mode" : ""}>
				<Header
					toggleDarkMode={toggleDarkMode}
					darkMode={darkMode}
				/>
				{children}
				<Footer />

				<Script
					src="./assets/plugins/popper.min.js"
					strategy="beforeInteractive"
				/>
				<Script
					src="./assets/plugins/bootstrap/js/bootstrap.min.js"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}

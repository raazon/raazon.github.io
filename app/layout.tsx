import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from 'next/script';
import './assets/css/theme-1.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: "Razon Komar Pal | Expert Full Stack Web Developer",
	description: "Razon Komar Pal is an expert Full Stack Web Developer specializing in modern web technologies and responsive design.",
	keywords: "Full Stack Web Developer, Web Development, Responsive Design, Modern Web Technologies, WordPress Developer, Razon Komar Pal",
	openGraph: {
		title: "Razon Komar Pal | Expert Full Stack Web Developer",
		description: "Razon Komar Pal is an expert Full Stack Web Developer specializing in modern web technologies and responsive design.",
		siteName: "Razon Komar Pal Portfolio",
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/logo192.png" />
			</head>
			<body>
				<Header />
				{children}
				<Footer />

				<Script src="./assets/plugins/popper.min.js" strategy="beforeInteractive" />
				<Script src="./assets/plugins/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
			</body>
		</html>
	);
}

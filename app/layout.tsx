import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


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
	themeColor: "#000000",
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
				{/* <link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
				/> */}
				<link id="theme-style" rel="stylesheet" href="/assets/css/theme-1.css" />
			</head>
			<body className={roboto.className}>
				<Header />
				{children}
				<Footer />

				<script src="/assets/plugins/popper.min.js" async></script>
				<script src="/assets/plugins/bootstrap/bootstrap.min.js" async></script>
			</body>
		</html>
	);
}

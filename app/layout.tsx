import "@/styles/globals.scss"; // Import your global styles
import "@assets/css/theme-1.css"; // Import theme CSS directly
import { Roboto } from "next/font/google";
import Script from 'next/script';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { metadata } from './metadata';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

// Export metadata for the layout
export { metadata };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={roboto.className}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/logo192.png" />
			</head>
			<body>
				<Header />
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

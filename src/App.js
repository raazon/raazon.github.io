// import './assets/css/theme-1.css';
import { Home, NotFound, Resume } from 'pages';
import { Footer, Header } from 'parts';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
	const [themeMode, setThemeMode] = useState('dark');

	// Enabling dark mode
	useEffect(() => {
		document.body.classList.add('dark-mode');

		// Cleanup classes when the component unmounts
		return () => {
			document.body.classList.remove('dark-mode');
		};
	}, []);

	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;

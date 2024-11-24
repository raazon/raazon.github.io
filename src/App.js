// import './assets/css/theme-1.css';
import { Home } from 'pages';
import { Header } from 'parts';
import { useEffect, useState } from 'react';

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
			<Header />
			<Home />
		</>
	);
}

export default App;

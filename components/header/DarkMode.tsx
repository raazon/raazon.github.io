"use client";
import { useEffect, useState } from "react";

const DarkMode: React.FC = () => {
	// State to manage dark mode
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Toggle dark mode function
	const toggleDarkMode = () => {
		setIsDarkMode((prev) => {
			const newDarkModeState = !prev;
			// Apply the dark mode class to the body
			document.body.classList.toggle("dark-mode", newDarkModeState);
			// Persist the state in localStorage
			localStorage.setItem("darkMode", newDarkModeState.toString());
			return newDarkModeState;
		});
	};

	// Load dark mode state from localStorage on component mount
	useEffect(() => {
		const savedDarkMode = localStorage.getItem("darkMode") === "true";
		setIsDarkMode(savedDarkMode);
		document.body.classList.toggle("dark-mode", savedDarkMode);
	}, []);

	return (
		<>
			<div className="dark-mode-toggle text-center w-100">
				<hr className="mb-4" />
				<h4 className="toggle-name mb-3">
					<i className="fas fa-adjust me-1"></i>
					Dark Mode
				</h4>

				{/* Checkbox to toggle dark mode */}
				<input
					className="toggle"
					id="darkmode"
					type="checkbox"
					checked={isDarkMode}
					onChange={toggleDarkMode} // Call toggleDarkMode on change
				/>
				<label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>
			</div>
		</>
	);
};

export default DarkMode;

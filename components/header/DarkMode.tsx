interface DarkModeProps {
	toggleDarkMode: () => void;
	darkMode: boolean
}

const DarkMode: React.FC<DarkModeProps> = ({ toggleDarkMode, darkMode }) => {
	
	return (
		<>
			<div className="dark-mode-toggle text-center w-100">
				<hr className="mb-4" />
				<h4 className="toggle-name mb-3 d-none">
					<i className="fas fa-adjust me-1"></i>
					Dark Mode
				</h4>

				{/* Bind the checkbox checked state to the darkMode prop */}
				<input
					className="toggle"
					id="darkmode"
					type="checkbox"
					checked={darkMode}
					onChange={toggleDarkMode} // Toggle dark mode on change
				/>
				<label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>
			</div>
		</>
	)
}

export default DarkMode;
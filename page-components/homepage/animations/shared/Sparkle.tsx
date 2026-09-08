type SparkleProps = {
	className?: string;
};

const Sparkle = ({ className = "" }: SparkleProps) => (
	<svg
		className={`anim-sparkle-icon ${className}`}
		viewBox="0 0 64 64"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
	>
		<path
			className="anim-sparkle-icon__blue"
			d="M30 2c.7 10.8 8.4 18.5 19.2 19.2C38.4 22 30.7 29.6 30 40.4 29.3 29.6 21.6 22 10.8 21.2 21.6 20.5 29.3 12.8 30 2Z"
		/>
		<path
			className="anim-sparkle-icon__purple"
			d="M50 36c.4 6.2 4.8 10.6 11 11-6.2.4-10.6 4.8-11 11-.4-6.2-4.8-10.6-11-11 6.2-.4 10.6-4.8 11-11Z"
		/>
	</svg>
);

export default Sparkle;

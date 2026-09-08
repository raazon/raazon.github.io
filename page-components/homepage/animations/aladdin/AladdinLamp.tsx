import { useId } from "react";
import Sparkle from "../shared/Sparkle";

const AladdinLamp = () => {
	const uid = useId().replace(/:/g, "");
	const goldId = `${uid}-gold`;

	return (
		<div className="project-anim-stage aladdin-stage" aria-hidden="true">
			<div className="aladdin-wander">
				<div className="aladdin-bob">
					<span className="aladdin-glow" />
					<svg
						className="aladdin-lamp-icon"
						viewBox="0 0 96 56"
						xmlns="http://www.w3.org/2000/svg"
						focusable="false"
					>
						<defs>
							<linearGradient id={goldId} x1="0" y1="0" x2="1" y2="1">
								<stop offset="0%" stopColor="#ffe08a" />
								<stop offset="42%" stopColor="#e8b44a" />
								<stop offset="100%" stopColor="#b8860b" />
							</linearGradient>
						</defs>
						<ellipse cx="52" cy="50" rx="18" ry="4.5" fill={`url(#${goldId})`} opacity="0.85" />
						<path
							d="M28 34c0-9 10-16 24-16s24 7 24 16c0 8-8 13-24 13S28 42 28 34Z"
							fill={`url(#${goldId})`}
						/>
						<path
							d="M30 30C20 29 12 22 8 14c2 12 10 20 22 22v-6Z"
							fill={`url(#${goldId})`}
						/>
						<path
							d="M76 28c10 0 14 10 8 16-3 3-8 3-10 0"
							fill="none"
							stroke={`url(#${goldId})`}
							strokeWidth="4"
							strokeLinecap="round"
						/>
						<ellipse cx="52" cy="18" rx="8" ry="3.5" fill={`url(#${goldId})`} />
						<rect x="49.5" y="10" width="5" height="8" rx="1.5" fill={`url(#${goldId})`} />
						<circle cx="52" cy="9" r="2.2" fill="#ffe08a" />
					</svg>

					<div className="aladdin-spout">
						<span className="aladdin-wisp aladdin-wisp--a" />
						<span className="aladdin-wisp aladdin-wisp--b" />
						<Sparkle className="aladdin-rise aladdin-rise--a" />
						<Sparkle className="aladdin-rise aladdin-rise--b anim-sparkle-icon--mid" />
						<Sparkle className="aladdin-rise aladdin-rise--c anim-sparkle-icon--tiny" />
						<span className="aladdin-ember aladdin-ember--a" />
						<span className="aladdin-ember aladdin-ember--b" />
						<span className="aladdin-ember aladdin-ember--c" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AladdinLamp;

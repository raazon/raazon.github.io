import Sparkle from "../shared/Sparkle";

const SparkleDrift = () => (
	<div className="project-anim-stage sparkle-stage" aria-hidden="true">
		<span className="sparkle-mote sparkle-mote--a" />
		<span className="sparkle-mote sparkle-mote--b" />
		<span className="sparkle-mote sparkle-mote--c" />
		<span className="sparkle-mote sparkle-mote--d" />

		<div className="sparkle-wander sparkle-wander--main">
			<div className="sparkle-breath">
				<span className="sparkle-glow" />
				<Sparkle />
			</div>
		</div>

		<div className="sparkle-wander sparkle-wander--mid">
			<Sparkle className="anim-sparkle-icon--mid" />
		</div>

		<div className="sparkle-wander sparkle-wander--tiny">
			<Sparkle className="anim-sparkle-icon--tiny" />
		</div>
	</div>
);

export default SparkleDrift;

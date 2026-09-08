import { isProjectAnimation, projectAnimations, type ProjectAnimationName } from "./registry";

type ProjectBannerAnimationProps = {
	name?: string;
};

const ProjectBannerAnimation = ({ name }: ProjectBannerAnimationProps) => {
	if (!isProjectAnimation(name)) return null;

	const Animation = projectAnimations[name as ProjectAnimationName];
	return <Animation />;
};

export default ProjectBannerAnimation;

import AladdinLamp from "./aladdin/AladdinLamp";
import SparkleDrift from "./sparkle/SparkleDrift";

// Register a new banner animation here, then set `animation: '<name>'` on a project.
export const projectAnimations = {
	sparkle: SparkleDrift,
	aladdin: AladdinLamp,
} as const;

export type ProjectAnimationName = keyof typeof projectAnimations;

export function isProjectAnimation(name: unknown): name is ProjectAnimationName {
	return typeof name === "string" && name in projectAnimations;
}

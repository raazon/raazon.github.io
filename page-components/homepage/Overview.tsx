import Icon from '@/components/icon/Icon';
import { siteConfig } from "@/utils/siteConfig";
import Link from 'next/link';
import { CSSProperties, FC, ReactNode } from 'react';
import { aiAgents, llmApi, n8n, openclaw, promptEngineering } from './AiSkillIcons';
import { acf, agile, aiContent, clipboardCheck, composer, elementor, gauge, graphql, layers, mysql, network, shield, sitemap, users, wpHooks } from './ExtraSkillIcons';
import { bootstrap, css3, docker, gitAlt, githubAction, gutenberg, html5, jQuery, js, nextjs, npm, php, php2, playwright, plugin, react, saas, shopify, tailwind, terminal, theme, ts, vscode, vue, webhook, webpack, woocommerce, wordpressSimple } from './SkillsIcons';

type Skill = {
	label: string;
	iconColor: string;
	logo: ReactNode;
};

type SkillGroup = {
	title: string;
	skills: Skill[];
};

const isDarkIcon = (hex: string) => {
	const raw = hex.replace("#", "");
	const normalized = raw.length === 3 ? raw.split("").map((char) => char + char).join("") : raw;
	const value = parseInt(normalized, 16);
	const r = (value >> 16) & 255;
	const g = (value >> 8) & 255;
	const b = value & 255;
	return 0.2126 * r + 0.7152 * g + 0.0722 * b < 40;
};

const SkillChip: FC<{ skill: Skill }> = ({ skill }) => (
	<span
		className={`skill-item${isDarkIcon(skill.iconColor) ? " is-dark-icon" : ""}`}
		style={{ "--skill-color": skill.iconColor } as CSSProperties}
	>
		{skill.logo}
		{skill.label}
	</span>
);

const Overview: FC = () => {
	const skillGroups: SkillGroup[] = [
		{
			title: "Languages",
			skills: [
				{ label: "PHP", iconColor: "#777bb4", logo: php },
				{ label: "JavaScript", iconColor: "#c9b208", logo: js },
				{ label: "TypeScript", iconColor: "#3178c6", logo: ts },
				{ label: "MySQL", iconColor: "#4479A1", logo: mysql },
			],
		},
		{
			title: "WordPress & CMS",
			skills: [
				{ label: "WordPress", iconColor: "#21759b", logo: wordpressSimple },
				{ label: "Shopify", iconColor: "#7aa33a", logo: shopify },
				{ label: "WooCommerce", iconColor: "#7F54B3", logo: woocommerce },
				{ label: "Gutenberg", iconColor: "#3858e9", logo: gutenberg },
				{ label: "Full Site Editing", iconColor: "#21759b", logo: gutenberg },
				{ label: "Plugin Development", iconColor: "#0073aa", logo: plugin },
				{ label: "Theme Development", iconColor: "#0073aa", logo: theme },
				{ label: "WPGraphQL", iconColor: "#E10098", logo: graphql },
				{ label: "WP-CLI", iconColor: "#64748b", logo: terminal },
				{ label: "Elementor", iconColor: "#92003B", logo: elementor },
				{ label: "ACF", iconColor: "#00a88b", logo: acf },
				{ label: "WP Hooks", iconColor: "#3858e9", logo: wpHooks },
				{ label: "Multisite", iconColor: "#135e96", logo: network },
				{ label: "WP Security", iconColor: "#1d4ed8", logo: shield },
			],
		},
		{
			title: "Frontend",
			skills: [
				{ label: "React", iconColor: "#149eca", logo: react },
				{ label: "Next.js", iconColor: "#111111", logo: nextjs },
				{ label: "Vue", iconColor: "#42b883", logo: vue },
				{ label: "jQuery", iconColor: "#0769ad", logo: jQuery },
				{ label: "HTML5", iconColor: "#E34F26", logo: html5 },
				{ label: "CSS3", iconColor: "#1572B6", logo: css3 },
				{ label: "SASS", iconColor: "#CC6699", logo: saas },
				{ label: "Bootstrap", iconColor: "#7952b3", logo: bootstrap },
				{ label: "Tailwind CSS", iconColor: "#38b2ac", logo: tailwind },
			],
		},
		{
			title: "Tools & Workflow",
			skills: [
				{ label: "Git", iconColor: "#f05032", logo: gitAlt },
				{ label: "GitHub Actions", iconColor: "#2088FF", logo: githubAction },
				{ label: "VS Code", iconColor: "#22a7f2", logo: vscode },
				{ label: "NPM", iconColor: "#cb0001", logo: npm },
				{ label: "Composer", iconColor: "#885630", logo: composer },
				{ label: "Webpack", iconColor: "#1c78c0", logo: webpack },
				{ label: "Playwright", iconColor: "#2fad33", logo: playwright },
				{ label: "Docker", iconColor: "#1D63ED", logo: docker },
				{ label: "REST API", iconColor: "#0f766e", logo: webhook },
				{ label: "PHPUnit", iconColor: "#3b9cd7", logo: php2 },
				{ label: "PHPCS", iconColor: "#777bb4", logo: php2 },
				{ label: "WPCS", iconColor: "#21759b", logo: wordpressSimple },
				{ label: "Core Web Vitals", iconColor: "#0f9d58", logo: gauge },
				{ label: "Caching", iconColor: "#0ea5e9", logo: layers },
			],
		},
		{
			title: "AI & Automation",
			skills: [
				{ label: "LLM APIs", iconColor: "#4f46e5", logo: llmApi },
				{ label: "AI Agents", iconColor: "#7c3aed", logo: aiAgents },
				{ label: "Prompt Engineering", iconColor: "#0369a1", logo: promptEngineering },
				{ label: "AI Content", iconColor: "#0f766e", logo: aiContent },
				{ label: "n8n", iconColor: "#ea4b71", logo: n8n },
				{ label: "OpenClaw", iconColor: "#ff4d4d", logo: openclaw },
			],
		},
		{
			title: "Leadership",
			skills: [
				{ label: "Code Review", iconColor: "#64748b", logo: clipboardCheck },
				{ label: "Team Mentorship", iconColor: "#0f766e", logo: users },
				{ label: "Architecture", iconColor: "#4338ca", logo: sitemap },
				{ label: "Agile / Scrum", iconColor: "#ea580c", logo: agile },
			],
		},
	];

	return (
		<section className="overview-section p-3 p-lg-5">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-3">Skills</h2>
				<div className="section-intro mb-4">
					{`With over 12+ years of experience in WordPress and web development, I have assisted companies and individuals in enhancing their development processes and fostering dynamic team management. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my `}
					<Link href="/resume" className="text-link">
						online resume
					</Link>
					{` and `}
					<a
						className="text-link"
						href={siteConfig.links.github}
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>.
				</div>

				<div className="skills-grid">
					{skillGroups.map((group) => (
						<div className="skill-group" key={group.title}>
							<h3 className="item-title skill-group-title">{group.title}</h3>
							<div className="my-skills">
								{group.skills.map((skill) => (
									<SkillChip key={skill.label} skill={skill} />
								))}
							</div>
						</div>
					))}
				</div>

				<div className="text-center pt-5 mb-3 d-none">
					<Link href="/services" className="btn btn-primary">
						<Icon name="circleRight" className="fa-circle-right me-2" />
						Services &amp; Pricing
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Overview;

import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Razon Komar Pal",
  TITLE: "Razon Komar Pal | Full Stack Developer",
  EMAIL: "raazzon@gmail.com",
  DESCRIPTION:
    "Full-Stack Engineer | WordPress, PHP, JavaScript, AI, LLM, React, Gutenberg & WooCommerce",
  KEYWORDS: [
    "Razon Komar Pal",
    "Full Stack Engineer",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Full Stack Web Developer",
    "Senior Web Developer",
    "WordPress Developer",
    "PHP Developer",
    "JavaScript Developer",
    "React Developer",
    "Gutenberg Developer",
    "WooCommerce Developer",
    "Frontend Developer",
    "WordPress Plugin Development",
    "REST API Development",
    "AI LLM Integration",
  ],
  GA_ID: "G-4K5D9E2NQ1",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: SITE.DESCRIPTION,
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Articles on web engineering, WordPress, and building products people depend on.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION:
    "12+ years of web engineering and technical leadership, from WordPress development to scaling products used by millions.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Featured WordPress plugins and web apps I have designed, built, and shipped.",
};

export const SKILLS: string[] = [
  "PHP",
  "JavaScript",
  "TypeScript",
  "REST APIs",
  "WordPress",
  "MySQL",
  "Gutenberg / FSE",
  "WP-CLI",
  "React",
  "Next.js",
  "HTML / CSS / SASS",
  "Tailwind CSS",
  "Plugin Development",
  "Theme Development",
  "NPM / Composer",
  "Webpack / Gulp",
  "Git / GitHub Actions",
  "CI/CD",
  "PHPUnit / PHPCS",
  "Playwright",
  "AI / LLM Integrations",
  "n8n / OpenClaw",
];

export const SOCIALS: Socials = [
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/raazon/",
  },
  {
    NAME: "github",
    HREF: "https://github.com/raazon",
  },
  {
    NAME: "x",
    HREF: "https://x.com/raazzon",
  },
  {
    NAME: "wordpress",
    HREF: "https://profiles.wordpress.org/raazon/",
  },
  {
    NAME: "stackexchange",
    HREF: "https://wordpress.stackexchange.com/users/144761/razon-komar-pal",
  },
];

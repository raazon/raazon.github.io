// utils/siteConfig.ts
export const siteConfig = {
	name: process.env.NEXT_PUBLIC_NAME || "Default Name",
	designation: process.env.NEXT_PUBLIC_DESIGNATION || "",
	shortBio: process.env.NEXT_PUBLIC_SHORT_BIO || "",
	bio: process.env.NEXT_PUBLIC_BIO || "",
	description: process.env.SITE_DESCRIPTION || "",
	links: {
		twitter: process.env.NEXT_PUBLIC_TWITTER_LINK || "",
		github: process.env.NEXT_PUBLIC_GITHUB_LINK || "",
		linkedin: process.env.NEXT_PUBLIC_LINKEDIN_LINK || "",
	},
};


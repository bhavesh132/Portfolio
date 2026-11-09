const author = "Bhavesh Aggarwal";
const description =
	"Full Stack Developer and Automation & AI Engineer from Chandigarh, India. 2+ years building production automation platforms, LLM applications with RAG and multi-provider routing, and PSA/CRM integrations for managed service providers (MSPs).";
const url = "https://owner.aggronith.com/";
export const AppMetadata = {
	metadataBase: new URL(url),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Bhavesh Aggarwal",
		"Bhavesh Aggarwal - Automation Engineer",
		"Workflow developer",
		"RPA developer",
		"Business Insight Specialist",
		"Automation Engineer",
		"Automation Consultant",
		"Automation Specialist",
		"AI Engineer",
		"Full Stack Developer",
		"LLM routing",
		"RAG",
		"MSP automation",
		"HALO PSA integration",
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		locale: "en-US",
		type: "website"
	}
};

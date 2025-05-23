const author = "Bhavesh Aggarwal";
const description =
	"Automation Engineer from Chandigarh, India, loves to develop and analyse Ideas and bring complex processes to automated workflows, Very keen to develop Scripts and RPA Workflows that can help in automating the processes and make Tedious repetitive tasks more efficient. I am a passionate developer with a strong interest in automation, and problem-solving. I enjoy creating innovative solutions that improve efficiency and productivity of a business.";
const url = "https://myportfolio-bhavesh25515.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://myportfolio-bhavesh25515.vercel.app/"),
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

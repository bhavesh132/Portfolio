import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin, BsPhone } from "react-icons/bs";

export const SOCIAL_MEDIA = [
	{
		id: "linkedin",
		icon: <BsLinkedin />,
		title: "Visit LinkedIn profile",
		url: "https://www.linkedin.com/in/bhavesh-aggarwal-71a6a322a/"
	},
	{
		id: "github",
		icon: <BsGithub />,
		title: "Visit Github profile",
		url: "https://github.com/bhavesh132"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill />,
		title: "Send me an email",
		url: "mailto://bhavesh25515@outlook.com"
	},
	{
		id: "phone",
		icon: <BsPhone />,
		title: "Call Me",
		url: "tel:+919915194327"
	}
];

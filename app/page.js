"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection, BlogSection } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<TechnologiesSection />
			<ProjectsSection />
			<BlogSection />
		</div>
	);
}

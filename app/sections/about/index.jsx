"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I&#39;m Bhavesh, a Full Stack Developer and Automation &amp; AI Engineer with 2+ years building
							production automation platforms, LLM applications and PSA/CRM integrations for managed service providers (MSPs).
							My journey began in customer operations, where I learned to understand user pain points before solving them.
						</p><br/>
						<p>
							Today I design multi-provider LLM routing with tenant-isolated RAG, workflow engines in FastAPI,
							and multi-tenant backends with Django, Express and FastAPI. I connect the tools MSPs run on
							(HALO PSA, ConnectWise, Autotask, Zoho, HubSpot, QuickBooks, Microsoft Graph) through APIs,
							Rewst, n8n and Windmill.
						</p><br/>
						<p>
							I ship automation end to end, from the first webhook to the dashboard that reports on it,
							and I lead training for automation and AI engineers so the solutions keep growing after I hand them over.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

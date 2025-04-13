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
							I’m Bhavesh and I'm an Automation Engineer and Business Intelligence Consultant with a strong foundation in Managed IT Services. 
							My journey began in customer support, where I developed an instinct for solving problems and understanding user pain points.
						</p><br/>
						<p>
							Over time, I transitioned into automating processes, integrating platforms, and 
							building end-to-end workflows that save time, reduce errors, and boost productivity. 
							I'm deeply experienced with tools like Rewst, HALO PSA, and Datto RMM, 
							and I specialize in connecting the dots between business systems through custom API integrations.
						</p><br/>
						<p>
							Whether it's setting up automated user onboarding workflows, 
							synchronizing systems, or building dashboards 
							in Power BI and BrightGauge, 
							I thrive on creating solutions that deliver real value.
						</p><br/>
						<p>
							With a sharp eye for detail, a love for clean, efficient automation, 
							and a strong CSAT track record, 
							I’m passionate about helping MSPs unlock their full potential through smart technology.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

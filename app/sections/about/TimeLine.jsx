"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

const TimeLineData = [
	{ year: 2022, text: "Began my professional journey as a Customer Support Associate, where I honed essential communication and client interaction skills." },
	{ year: 2023, text: "Transitioned into the MSP and IT Services domain, managing frontline communication and ensuring issues were routed and resolved effectively by the right teams." },
	{ year: 2024, text: "Took a deep dive into automation technologies and PSA tools. Successfully implemented HALO PSA, streamlined internal workflows, and explored reporting platforms like Power BI and BrightGauge." },
	{ year: 2024, text: "Advanced into a role as Automation Engineer and BI Consultant. Spearheaded automation initiatives that significantly reduced manual workloads and boosted productivity across departments." },
	{ year: 2024, text: "Built organization-wide business reports by compiling data from diverse sources, transforming raw information into actionable insights for key stakeholders." },
	{ year: 2025, text: "Delivered automation workflows, business intelligence reports, and custom scripts for multiple partners. Focused heavily on RPA, achieving a 99% CSAT and increasing operational efficiency by 25%." }
];

export function TimeLine() {
	/// TODO: Add color mode support
	const colorMode = "dark";
	const [, setActiveItem] = useState(0);
	const carouselRef = useRef(null);
	// const animRef = useRef(null);
	const isInView = useInView(carouselRef, { once: true });

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: "smooth" });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<LazyMotion features={domAnimation}>
			<h2
				className="text-3xl font-bold mb-5"
				style={{
					transform: isInView ? "none" : "translateY(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
			>
				TIMELINE
			</h2>
			<ul
				ref={carouselRef}
				onScroll={handleScroll}
				className="flex flex-row flex-nowrap gap-5 justify-between overflow-x-auto snap-x cursor-pointer hide-scroll-bar"
			>
				<>
					{TimeLineData.map((item, index) => {
						return (
							<li
								id={`carousel__item-${index}`}
								key={index}
								className="flex flex-col gap-3 snap-start w-[calc((100%/2)-30px)] sm:w-1/3 md:w-1/6"
								onClick={(e) => handleClick(e, index)}
								style={{
									transform: isInView
										? "none"
										: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
									opacity: isInView ? 1 : 0,
									transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
										index === 0 ? 0.5 : 1.05 * index
									}s`
								}}
							>
								<h3
									tabIndex="0"
									aria-label={"What do I do in " + item.year}
									className="flex items-center gap-4 text-2xl font-bold"
								>
									{`${item.year}`}
									<svg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										xmlns="http://www.w3.org/2000/svg"
										fill={colorMode === "dark" ? "#fff" : "#232323"}
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fillOpacity="0.5"
										/>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="208"
												y2="0.500295"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#fff" />
												<stop offset="0.79478" stopColor="#fff" stopOpacity="0" />
											</linearGradient>
										</defs>
									</svg>
								</h3>
								<p className="tracking-wide " tabIndex="0">
									{item.text}
								</p>
							</li>
						);
					})}
				</>
			</ul>
		</LazyMotion>
	);
}

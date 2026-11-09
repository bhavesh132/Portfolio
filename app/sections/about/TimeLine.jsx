"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

const TimeLineData = [
	{ year: 2022, text: "Joined eClerx as a Senior Analyst in Customer Operations, solving customer issues in Salesforce CRM and building reports to analyse support data." },
	{ year: 2023, text: "Promoted to the Quality team to train support executives and keep the process compliant. In December, joined IT By Design as an Automation & AI Engineer and BI Specialist." },
	{ year: 2024, text: "Delivered end-to-end HALO PSA implementations, including Autotask migration, M365 mailbox intake, DocuSign and QuickBooks Online billing, and automated quote-to-contract across Zoho CRM, Zoho Sign and HALO." },
	{ year: 2025, text: "Architected a multi-provider LLM gateway with tenant-isolated RAG, built a FastAPI workflow engine for webhook and cron automations, and ran a 28-day training program for automation engineers." },
	{ year: 2026, text: "Shipping a production Automation Platform, an AI Engine on self-hosted vLLM, Digital Dispatch with an L1 Support Agent, and an MCP gateway that lets AI agents work safely with SQL Server." }
];

export function TimeLine() {
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
								className="flex flex-col gap-3 snap-start w-[calc((100%/2)-30px)] sm:w-1/3 md:w-1/5"
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
										fill="currentColor"
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

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import BrightGaugeIcon from "../../../public/assets/svg/brightgauge.svg";
import { FilterButton } from "./FilterButton";
import ImplementationIcon from "../../../public/assets/svg/workflow-office-svgrepo-com.svg";
import N8nIcon from "../../../public/assets/svg/n8n.svg";

export function Filter({ onClick = (f) => f }) {
	const animRef = useRef(null);
	const isInView = useInView(animRef, { once: true });
	const [activeFilter, setActiveFilter] = useState(undefined);

	const handleFilterClick = (filter) => {
		onClick(filter);
		setActiveFilter(filter);
	};

	return (
		<LazyMotion features={domAnimation}>
			<div
				ref={animRef}
				className="flex items-start flex-col sm:flex-row sm:items-center gap-4 my-10"
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
				}}
			>
				<h3 aria-label="Filter projects" tabIndex="0" className="font-bold text-xl">
					Filter by:
				</h3>
				<div className="flex items-center gap-4">
					<FilterButton
						onClick={() => handleFilterClick(undefined)}
						label="All"
						active={activeFilter === undefined}
					>
						All
					</FilterButton>
					<FilterButton
						onClick={() => handleFilterClick("Business Analytics")}
						label="Business Analytics"
						active={activeFilter === "Business Analytics"}
					>
						<BrightGaugeIcon size="20" />
					</FilterButton>
					<FilterButton
						onClick={() => handleFilterClick("Implementation")}
						label="Implementation"
						active={activeFilter === "Implementation"}
					>
						<ImplementationIcon size="20" />
					</FilterButton>
					<FilterButton
						onClick={() => handleFilterClick("Automation")}
						label="Automation"
						active={activeFilter === "Automation"}
					>
						<N8nIcon size="20" />
					</FilterButton>
				</div>
			</div>
		</LazyMotion>
	);
}

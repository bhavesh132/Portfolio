import ApiPageIcon from "public/assets/svg/api-page-svgrepo-com.svg";
import AutotaskIcon from "public/assets/svg/autotask.svg";
import BrightGaugeIcon from "public/assets/svg/brightgauge.svg";
import DattoRmmIcon from "public/assets/svg/dattormm.svg";
import HalopsaIcon from "public/assets/svg/halopsa.svg";
import JsonIcon from "public/assets/svg/language-json-svgrepo-com.svg";
import NableIcon from "public/assets/svg/N-able.svg";
import N8nIcon from "public/assets/svg/n8n.svg";
import NodeIcon from "public/assets/svg/node-16-svgrepo-com.svg";
import OauthIcon from "public/assets/svg/Oauth_logo.svg";
import PostmanIcon from "public/assets/svg/postman-svgrepo-com.svg";
import PowerBIIcon from "public/assets/svg/powerbi-svgrepo-com.svg";
import PowerShellIcon from "public/assets/svg/PowerShell_5.0_icon.svg";
import PythonIcon from "public/assets/svg/python-127-svgrepo-com.svg";
import RewstIcon from "public/assets/svg/rewst.svg";
import SqlIcon from "public/assets/svg/sql.svg";
import WorkflowIcon from "public/assets/svg/workflow-office-svgrepo-com.svg";
import MongoDBIcon from "public/assets/svg/mongodb-svgrepo-com.svg";

export const TECHNOLOGIES = [
	{
		category: "RMM & PSA",
		items: [
			{ name: "Datto RMM", icon: <DattoRmmIcon className="text-white dark:text-black" width={32} /> },
			{ name: "Autotask PSA", icon: <AutotaskIcon className="text-white dark:text-black" width={32} /> },
			{ name: "HALO PSA", icon: <HalopsaIcon className="text-white dark:text-black" width={32} /> },
			{ name: "ConnectWise Automate", icon: <WorkflowIcon className="text-white dark:text-black" width={32} /> },
			{ name: "N-Able", icon: <NableIcon className="text-white dark:text-black" width={32} /> }
		]
	},
	{
		category: "Automation",
		items: [
			{ name: "PowerShell", icon: <PowerShellIcon className="text-white dark:text-black" width={32} /> },
			{ name: "Python", icon: <PythonIcon className="text-white dark:text-black" width={32} /> },
			{ name: "Javascript", icon: <NodeIcon className="text-white dark:text-black" width={32} /> },
			{ name: "Rewst", icon: <RewstIcon className="text-white dark:text-black" width={32} /> },
			{ name: "n8n", icon: <N8nIcon className="text-white dark:text-black" width={32} /> }
		]
	},
	{
		category: "Business Analytics",
		items: [
			{ name: "PowerBI", icon: <PowerBIIcon className="text-white dark:text-black" width={32} /> },
			{ name: "BrightGauge", icon: <BrightGaugeIcon className="text-white dark:text-black" width={32} /> },
			{ name: "MS SQL", icon: <SqlIcon className="text-white dark:text-black" width={32} /> },
			{ name: "MongoDB", icon: <MongoDBIcon className="text-white dark:text-black" width={32} /> }
		]
	},
	{
		category: "APIs & Integrations",
		items: [
			{ name: "REST API", icon: <ApiPageIcon className="text-white dark:text-black" width={32} /> },
			{ name: "OAuth", icon: <OauthIcon className="text-white dark:text-black" width={32} /> },
			{ name: "Postman", icon: <PostmanIcon className="text-white dark:text-black" width={32} /> },
			{ name: "JSON", icon: <JsonIcon className="text-white dark:text-black" width={32} /> }
		]
	}
];

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
import PineconeIcon from "public/assets/svg/pinecone.svg";
import QdrantIcon from "public/assets/svg/qdrant.svg";
import PgVectorIcon from "public/assets/svg/pgvector.svg";
import LangChainIcon from "public/assets/svg/langchain.svg";
import LangGraphIcon from "public/assets/svg/langgraph.svg";
import WindmillIcon from "public/assets/svg/windmill.svg";
import FastApiIcon from "public/assets/svg/fastapi.svg";
import DjangoIcon from "public/assets/svg/django.svg";
import ReactIcon from "public/assets/svg/react.svg";
import HtmlIcon from "public/assets/svg/html5.svg";
import CssIcon from "public/assets/svg/css.svg";
import PostgresIcon from "public/assets/svg/postgresql.svg";
import ExpressIcon from "public/assets/svg/express.svg";
import VllmIcon from "public/assets/svg/vllm.svg";
import OllamaIcon from "public/assets/svg/ollama.svg";
import OpenAiIcon from "public/assets/svg/openai.svg";
import AnthropicIcon from "public/assets/svg/anthropic.svg";
import GeminiIcon from "public/assets/svg/googlegemini.svg";
import TailwindIcon from "public/assets/svg/tailwindcss.svg";
import ViteIcon from "public/assets/svg/vite.svg";
import RedisIcon from "public/assets/svg/redis.svg";
import CeleryIcon from "public/assets/svg/celery.svg";
import McpIcon from "public/assets/svg/modelcontextprotocol.svg";
import QwenIcon from "public/assets/svg/qwen.svg";
import WebexIcon from "public/assets/svg/webex.svg";
import AzureIcon from "public/assets/svg/azure.svg";
import Office365Icon from "public/assets/svg/office365.svg";
import ThreeCxIcon from "public/assets/svg/3cx.svg";
import DockerIcon from "public/assets/svg/docker.svg";
import GithubActionsIcon from "public/assets/svg/githubactions.svg";
import CloudflareIcon from "public/assets/svg/cloudflare.svg";
import RabbitMqIcon from "public/assets/svg/rabbitmq.svg";
import HubspotIcon from "public/assets/svg/hubspot.svg";
import ZohoIcon from "public/assets/svg/zoho.svg";
import QuickbooksIcon from "public/assets/svg/quickbooks.svg";

export const TECHNOLOGIES = [
{
    category: "Tools",
    items: [
      { name: "Datto RMM", icon: <DattoRmmIcon className="text-black dark:text-white" width={32} /> },
      { name: "Autotask PSA", icon: <AutotaskIcon className="text-black dark:text-white" width={32} /> },
      { name: "HALO PSA", icon: <HalopsaIcon className="text-black dark:text-white" width={32} /> },
      { name: "ConnectWise Automate", icon: <WorkflowIcon className="text-black dark:text-white" width={32} /> },
      { name: "N-Able", icon: <NableIcon className="text-black dark:text-white" width={32} /> },
      { name: "Microsoft 365", icon: <Office365Icon className="text-black dark:text-white" width={32} /> },
      { name: "Azure", icon: <AzureIcon className="text-black dark:text-white" width={32} /> },
      { name: "3CX", icon: <ThreeCxIcon className="text-black dark:text-white" width={32} /> },
      { name: "Webex", icon: <WebexIcon className="text-black dark:text-white" width={32} /> },
      { name: "Docker", icon: <DockerIcon className="text-black dark:text-white" width={32} /> },
      { name: "GitHub Actions", icon: <GithubActionsIcon className="text-black dark:text-white" width={32} /> },
      { name: "Cloudflare", icon: <CloudflareIcon className="text-black dark:text-white" width={32} /> }
    ]
  },
  {
    category: "Automation",
    items: [
      { name: "PowerShell", icon: <PowerShellIcon className="text-black dark:text-white" width={32} /> },
      { name: "Python", icon: <PythonIcon className="text-black dark:text-white" width={32} /> },
      { name: "Javascript", icon: <NodeIcon className="text-black dark:text-white" width={32} /> },
      { name: "Rewst", icon: <RewstIcon className="text-black dark:text-white" width={32} /> },
      { name: "n8n", icon: <N8nIcon className="text-black dark:text-white" width={32} /> },
      { name: "Windmill", icon: <WindmillIcon className="text-black dark:text-white" width={32} /> }
    ]
  },
  {
    category: "AI Stack",
    items: [
      { name: "OpenAI", icon: <OpenAiIcon className="text-black dark:text-white" width={32} /> },
      { name: "Anthropic", icon: <AnthropicIcon className="text-black dark:text-white" width={32} /> },
      { name: "Gemini", icon: <GeminiIcon className="text-black dark:text-white" width={32} /> },
      { name: "Ollama", icon: <OllamaIcon className="text-black dark:text-white" width={32} /> },
      { name: "vLLM", icon: <VllmIcon className="text-black dark:text-white" width={32} /> },
      { name: "Qwen", icon: <QwenIcon className="text-black dark:text-white" width={32} /> },
      { name: "MCP", icon: <McpIcon className="text-black dark:text-white" width={32} /> },
      { name: "LangChain", icon: <LangChainIcon className="text-black dark:text-white" width={32} /> },
      { name: "LangGraph", icon: <LangGraphIcon className="text-black dark:text-white" width={32} /> },
      { name: "Pinecone", icon: <PineconeIcon className="text-black dark:text-white" width={32} /> },
      { name: "Qdrant", icon: <QdrantIcon className="text-black dark:text-white" width={32} /> },
      { name: "PGVector", icon: <PgVectorIcon className="text-black dark:text-white" width={32} /> }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "MongoDB", icon: <MongoDBIcon className="text-black dark:text-white" width={32} /> },
      { name: "Express", icon: <ExpressIcon className="text-black dark:text-white" width={32} /> },
      { name: "React", icon: <ReactIcon className="text-black dark:text-white" width={32} /> },
      { name: "Node.js", icon: <NodeIcon className="text-black dark:text-white" width={32} /> },
      { name: "FastAPI", icon: <FastApiIcon className="text-black dark:text-white" width={32} /> },
      { name: "Django", icon: <DjangoIcon className="text-black dark:text-white" width={32} /> },
      { name: "HTML", icon: <HtmlIcon className="text-black dark:text-white" width={32} /> },
      { name: "CSS", icon: <CssIcon className="text-black dark:text-white" width={32} /> },
      { name: "Tailwind", icon: <TailwindIcon className="text-black dark:text-white" width={32} /> },
      { name: "Vite", icon: <ViteIcon className="text-black dark:text-white" width={32} /> },
      { name: "Redis", icon: <RedisIcon className="text-black dark:text-white" width={32} /> },
      { name: "Celery", icon: <CeleryIcon className="text-black dark:text-white" width={32} /> },
      { name: "RabbitMQ", icon: <RabbitMqIcon className="text-black dark:text-white" width={32} /> }
    ]
  },
	{
		category: "Business Analytics",
		items: [
			{ name: "PowerBI", icon: <PowerBIIcon className="text-black dark:text-white" width={32} /> },
			{ name: "BrightGauge", icon: <BrightGaugeIcon className="text-black dark:text-white" width={32} /> },
			{ name: "MS SQL", icon: <SqlIcon className="text-black dark:text-white" width={32} /> },
			{ name: "MongoDB", icon: <MongoDBIcon className="text-black dark:text-white" width={32} /> },
			{ name: "PostgreSQL", icon: <PostgresIcon className="text-black dark:text-white" width={32} /> }
		]
	},
	{
		category: "APIs & Integrations",
		items: [
			{ name: "REST API", icon: <ApiPageIcon className="text-black dark:text-white" width={32} /> },
			{ name: "OAuth", icon: <OauthIcon className="text-black dark:text-white" width={32} /> },
			{ name: "Postman", icon: <PostmanIcon className="text-black dark:text-white" width={32} /> },
			{ name: "JSON", icon: <JsonIcon className="text-black dark:text-white" width={32} /> },
			{ name: "HubSpot", icon: <HubspotIcon className="text-black dark:text-white" width={32} /> },
			{ name: "Zoho", icon: <ZohoIcon className="text-black dark:text-white" width={32} /> },
			{ name: "QuickBooks", icon: <QuickbooksIcon className="text-black dark:text-white" width={32} /> }
		]
	}
];

import curricula from "./curricula.json";

const BASE = "/thought-leadership/product-innovation";

export const programs = [
  {
    slug: "ai-deployment-strategist",
    curriculum: curricula.engineer,
    title: "AI Deployment Strategist",
    summary:
      "The client-facing role that bridges client expectations and technical AI solutions, aligning them to business goals.",
    questions: [
      "How do I turn a client's expectations into an AI solution we can deliver?",
      "Which use cases are worth pursuing first?",
      "How do I work effectively with Forward Deployed Engineers?",
      "How do I show that an engagement created business value?",
    ],
    audience: [
      "Client-facing consultants and business roles",
      "Solution and product managers",
      "Teams working alongside Forward Deployed Engineers",
    ],
    topics: [
      "Consulting skills for selling and delivering AI native products and services",
      "Use case discovery and solution alignment",
      "The non-technical side of an FDE engagement",
      "Aligning outcomes to business value creation",
    ],
    related: {
      label: "Consulting Mindset Workshop (24 hrs)",
      href: `${BASE}/ai-deployment-strategist-workshop`,
    },
  },
  {
    slug: "ai-forward-deployed-engineer",
    curriculum: curricula.engineer,
    title: "AI Forward Deployed Engineer",
    summary:
      "Build, deploy and deliver production-grade AI agents and RAG applications on real enterprise problems.",
    questions: [
      "How do I take an AI agent from prototype to production?",
      "How do I evaluate whether my agent or RAG application is good enough?",
      "How do I handle security and governance for AI systems?",
      "Should this run on cloud or on-premise?",
    ],
    audience: [
      "Software and AI engineers",
      "Solution architects",
      "Technical teams delivering AI implementation projects",
    ],
    topics: [
      "Agentic AI engineering and LLM concepts",
      "End-to-end agent development lifecycle",
      "Production architecture, evaluation, security and governance",
      "AI infrastructure on cloud and on-premise",
      "Selling and delivering AI products and solutions",
    ],
    related: {
      label: "Industry and tech stack specializations",
      href: `${BASE}/ai-fde-programs-industry-function-tech-stack`,
    },
  },
  {
    slug: "ai-strategist-business-operator",
    curriculum: curricula.operator,
    title: "AI Strategist / Business Operator",
    summary:
      "Translate business goals into high-impact AI strategies and put AI to work in day-to-day operations.",
    questions: [
      "Where should we apply AI first?",
      "How do we redesign processes and bring people along?",
      "How do we manage AI governance and risk?",
      "How do we measure return on AI investment?",
    ],
    audience: [
      "Sales and pre-sales teams",
      "Delivery teams",
      "Product managers",
      "Operations teams",
      "Other non-tech and low-tech roles",
    ],
    topics: [
      "Identifying and prioritising AI use cases",
      "Process re-engineering and change management",
      "AI governance and risk",
      "Measuring return on AI investment",
    ],
  },
  {
    slug: "ai-native-software-development",
    title: "AI Native Software Development",
    summary:
      "Build software with AI coding agents such as Claude Code, Codex and GitHub Copilot.",
    questions: [
      "Which AI coding agent should I use for which task?",
      "How do I get consistent results instead of trial-and-error prompting?",
      "How do I review and test code that an agent wrote?",
      "How do MCP, Agent Skills and AGENTS.md fit into my workflow?",
    ],
    audience: [
      "Software developers",
      "Tech leads and architects",
      "QA and DevOps engineers",
    ],
    topics: [
      "Working with Claude Code, OpenAI Codex and GitHub Copilot",
      "Spec driven development with GitHub Spec Kit",
      "Code generation, review, testing and deployment with AI agents",
      "Open standards: MCP, Agent Skills and AGENTS.md",
    ],
  },
];

export const getProgram = (slug) => programs.find((p) => p.slug === slug);

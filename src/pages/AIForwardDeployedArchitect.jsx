import {
  BookOpen,
  Clock,
  Users,
  Code,
  Cpu,
  Cloud,
  Zap,
  ArrowRight,
  Brain,
  Shield,
  Rocket,
  Server,
  TrendingUp,
  Star,
  Award,
  Target,
  Layers,
  ChevronDown,
  ChevronUp,
  Download,
  X,
} from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";
import { useState } from "react";

// ─── Program Data ────────────────────────────────────────────────────────────

const stats = [
  { value: "80", label: "Total Hours", icon: Clock },
  { value: "40+", label: "Hands-on Labs", icon: Code },
  { value: "6", label: "Learning Stages", icon: Layers },
  { value: "2", label: "Capstone Projects", icon: Award },
];

const stages = [
  {
    id: 1,
    stage: "Stage 1",
    title: "Agentic AI Engineering & LLM Concepts",
    duration: "52 hrs",
    coreDomain: "General AI/ Artificial General Intelligence- Agentic & Generative AI",
    tools:
      "LLMs (Anthropic Claude, OpenAI, Google Gemini, Deepseek, Kimi k2, Minimax, GLM, Qwen), Google ADK, AWS Strands SDK, Langgraph, Langflow/ n8n.io, AWS Bedrock, Google Enterprise Agent platform, Azure AI Foundry, Databricks, Evals & Observability frameworks, AI Governance Frameworks",
  },
  {
    id: 2,
    stage: "Stage 2",
    title: "Autonomous Software Development with AI SDLC Assistants & Spec driven development",
    duration: "10 hrs",
    coreDomain: "Code generation, review, testing, deployment using AI Agents/ Agentic SDLC tools",
    tools: "OpenAI Codex, Claude Code, Github Copilot, Github Speckit",
  },
  {
    id: 3,
    stage: "Stage 3",
    title: "Well Architected AI on Cloud",
    duration: "4 hrs",
    coreDomain: "Cloud basics, Cloud System design, Agent System Design Fundamentals (Production grade AI)",
    tools: "Reference Architectures, Well architected principles, Backend system design, Good practices of using open standards- MCP, Agent Skills, Agents.md, A2A, Working with Gemini API, Azure Foundry SDK, OpenAI Agents SDK, Claude Agents SDK",
  },
  {
    id: 4,
    stage: "Stage 4",
    title: "AI Infrastructure",
    duration: "4 hrs",
    coreDomain: "On-premise & cloud based AI Infra, working with open weight models",
    tools: "Cloud (AWS, GCP, Azure) & On-premise deployment of AI systems",
  },
  {
    id: 5,
    stage: "Stage 5",
    title: "Selling & delivering AI Products & Solutions",
    duration: "8 hrs",
    coreDomain: "AI Consulting Frameworks, Process Re-engineering, Change Management & Case Studies",
    tools: "McKinsey, BCG, Bain, Gartner Frameworks, Sovereign AI, Post production operations & ROI calculation",
  },
  {
    id: 6,
    stage: "Stage 6",
    title: "2 Capstone Projects - Agent & RAG Development",
    duration: "2 hrs",
    coreDomain: "Capstone project assessment, Skills interview, post assesment MCQ test",
    tools: "Sponsor-grade demo + complete handover artefact + named engagement match",
  },
];

const outcomes = [
  {
    icon: Target,
    text: "Understand the E2E Agent Development Lifecycle — from use case discovery, design, development, testing to deployment and post-production operations & optimization",
    gradient: "from-[#9333ea] to-[#1569a9]",
  },
  {
    icon: Code,
    text: "Build AI Agents (multi-agent systems) and RAG Apps hands-on with production-grade architecture",
    gradient: "from-[#1569a9] to-[#06b6d4]",
  },
  {
    icon: Shield,
    text: "Apply key architectural principles and practices across specific technical topics including governance, security and evaluation",
    gradient: "from-[#06b6d4] to-[#ec4899]",
  },
  {
    icon: Rocket,
    text: "Sell and deliver AI products & solutions with confidence, leveraging consulting frameworks from top-tier firms",
    gradient: "from-[#ec4899] to-[#9333ea]",
  },
];

const toolsHighlight = [
  "Claude (Anthropic)",
  "OpenAI GPT / Codex",
  "Google Gemini / ADK",
  "Deepseek / Kimi k2",
  "AWS Bedrock / Strands SDK",
  "Azure AI Foundry",
  "Google Vertex AI",
  "Langgraph / Langchain",
  "Langflow / n8n.io",
  "MCP Servers / FastMCP",
  "Github Copilot / Claude Code",
  "Github Speckit",
  "Databricks",
  "Ollama / OpenRouter",
  "vLLM / CNCF LLM-d",
  "NVIDIA / Palantir Sovereign AI",
];

// ─── Stage Accordion Component ───────────────────────────────────────────────

const StageAccordion = ({ stage }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 transition-colors duration-200"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 px-3 py-1 rounded-full bg-[#1569a9] flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider">
            {stage.stage}
          </span>
          <span className="font-semibold text-neutral-900 text-lg">
            {stage.title}
          </span>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0 ml-4">
          <span className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4" />
            {stage.duration}
          </span>
          {open ? (
            <ChevronUp className="w-5 h-5 text-neutral-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-neutral-400" />
          )}
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 pt-2 border-t border-neutral-100 bg-neutral-50/50">
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div>
              <p className="text-xs font-bold text-[#1569a9] uppercase tracking-wider mb-2">
                Core Domain
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {stage.coreDomain}
              </p>
            </div>
            <div>
              <p className="text-xs font-bold text-[#9333ea] uppercase tracking-wider mb-2">
                Tools & Frameworks
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {stage.tools}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────

const AIForwardDeployedArchitect = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Simulate sending data to backend / CRM
    console.log("Form submitted, triggering download...");

    // Create a temporary link to download the document stored in the public folder
    const link = document.createElement("a");
    link.href = "/docs/AI_Forward_Deployed_Architect_80_hrs_program.xlsx";
    link.download = "AI_Forward_Deployed_Architect_80_hrs_program.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close the modal and optionally show a success message
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-20 md:py-32 relative">
      {/* ── Hero ── */}
      <div className="max-w-5xl mx-auto text-center mb-16 mt-16 md:mt-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Cpu className="w-4 h-4 text-[#1569a9]" />
          <span className="text-sm font-semibold text-[#1569a9] uppercase tracking-wider">
            AI Technical Program
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-950 leading-tight">
          AI Forward Deployed{" "}
          <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
            Architect
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-10">
          Build <strong>Project & Deployment-Ready AI Forward Deployed Architects</strong> — the most
          in-demand technical role at OpenAI, Anthropic, Google, AWS, Microsoft, and Palantir. A
          comprehensive <strong>80-hour</strong> program spanning Agentic AI engineering, cloud
          architecture, AI infrastructure, and client delivery.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <GradientCard
                key={i}
                className="group rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-4 text-center">
                  <Icon className="w-5 h-5 text-[#1569a9] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 font-medium">{stat.label}</p>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* ── Intended Outcomes ── */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Intended{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Outcomes
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {outcomes.map((outcome, i) => {
            const Icon = outcome.icon;
            return (
              <GradientCard
                key={i}
                className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
              >
                <div className="p-6 flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${outcome.gradient} shadow-lg flex-shrink-0 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed group-hover:text-neutral-800 transition-colors duration-300 text-sm md:text-base">
                    {outcome.text}
                  </p>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* ── Minimal Curriculum ── */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            The 80-Hour{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Transformation Journey
            </span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our meticulously crafted 6-stage roadmap. Click through each stage below to discover the core domains and cutting-edge tools you will master.
          </p>
        </div>

        <div className="space-y-2">
          {stages.map((stage) => (
            <StageAccordion key={stage.id} stage={stage} />
          ))}
        </div>
      </div>

      {/* ── Minimal Download Curriculum CTA ── */}
      <div className="max-w-4xl mx-auto mb-16 md:mb-20 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-[#1569a9]/20 text-[#1569a9] px-6 py-4 font-semibold shadow-sm hover:shadow-md hover:bg-neutral-50 transition-all duration-300"
        >
          <Download className="w-5 h-5" />
          Download Detailed Curriculum
        </button>
      </div>

      {/* ── Tools & Technologies ── */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Tools &{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Hands-on experience with the most in-demand AI tools used by top tech companies
          </p>
        </div>

        <GradientCard className="group rounded-2xl transition-all duration-300">
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-3">
              {toolsHighlight.map((tool, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-700 shadow-sm hover:border-[#1569a9]/40 hover:text-[#1569a9] hover:shadow-md transition-all duration-200"
                >
                  <Star className="w-3 h-3 text-[#9333ea]" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </GradientCard>
      </div>

      {/* ── Why Choose ── */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why This{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Program
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              icon: BookOpen,
              gradient: "from-[#9333ea] to-[#1569a9]",
              title: "Research-Based, Monthly Updated Content",
              description:
                "Program content is continuously updated each month to reflect the latest tools, models, and industry practices — ensuring you learn what's relevant today.",
            },
            {
              icon: Rocket,
              gradient: "from-[#1569a9] to-[#06b6d4]",
              title: "Real-World Consulting Experience",
              description:
                "Instructors bring hands-on experience from AI pilot delivery and enterprise implementations, giving you practical insights that go beyond theory.",
            },
            {
              icon: Users,
              gradient: "from-[#06b6d4] to-[#ec4899]",
              title: "Seasoned Expert Instructors",
              description:
                "Learn from professionals with deep expertise in AI, enterprise applications, cloud platforms, and business consulting — the same skills you'll need on the job.",
            },
            {
              icon: Zap,
              gradient: "from-[#ec4899] to-[#9333ea]",
              title: "40+ Hands-on Labs & 2 Capstone Projects",
              description:
                "Extensive hands-on labs at every stage, culminating in two capstone projects — one on Agent development, one on RAG — to demonstrate sponsor-grade readiness.",
            },
          ].map((usp, i) => {
            const Icon = usp.icon;
            return (
              <GradientCard
                key={i}
                className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${usp.gradient} shadow-lg flex-shrink-0 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {usp.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                        {usp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-4xl mx-auto">
        <GradientCard className="group rounded-2xl transition-all duration-300">
          <div className="p-8 md:p-12 text-center">
            <div
              className={`p-4 rounded-2xl bg-gradient-to-br from-[#9333ea] to-[#1569a9] shadow-lg w-fit mx-auto mb-6 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
            >
              <Rocket className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Ready to Become an{" "}
              <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
                AI Forward Deployed Architect?
              </span>
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join the next cohort and gain the skills to deploy production-grade AI at enterprise
              scale. The most in-demand role across OpenAI, Anthropic, Google, AWS, Microsoft &
              Palantir.
            </p>
            <a
              href="mailto:info@enterprisesi.com?subject=AI Forward Deployed Architect Program Enquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9333ea] to-[#1569a9] px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
            >
              Enquire Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </GradientCard>
      </div>

      {/* ── Download Modal Popup ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#9333ea] to-[#1569a9]"></div>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#1569a9]/10 rounded-xl text-[#1569a9]">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Detailed Curriculum
                  </h3>
                  <p className="text-neutral-600 text-sm mt-1">
                    Fill out the form below to download the full 80-hour program details.
                  </p>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleDownloadSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#1569a9] focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#1569a9] focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    LinkedIn Profile URL *
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#1569a9] focus:border-transparent outline-none transition-all"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Current Company / University *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#1569a9] focus:border-transparent outline-none transition-all"
                    placeholder="Company Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#1569a9] focus:border-transparent outline-none transition-all"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#1569a9] focus:border-transparent outline-none transition-all"
                      placeholder="United States"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1569a9] to-[#06b6d4] px-6 py-3.5 text-base font-semibold text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
                  >
                    Download Curriculum Document <Download className="w-4 h-4" />
                  </button>
                  <p className="text-center text-xs text-neutral-500 mt-3">
                    All fields are required to unlock the download.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIForwardDeployedArchitect;
import { Link } from "react-router";

const supportedIndustries = [
  "Banking & Financial Services",
  "Insurance",
  "Healthcare",
  "CPG & Industrial Products",
  "Life Sciences / Pharma",
  "Oil & Gas",
];

const supportedFunctions = [
  "Finance & Accounting",
  "Supply Chain",
  "CX (Marketing, Service, Sales, Commerce)",
  "Auditing, Risk & Compliance",
];

const harnessCapabilities = [
  "Pre-configured core application backends",
  "Agent harness with MCP Servers and tools",
  "Long-term agentic memory and context graphs",
  "Pre-developed Agentic Business Copilots (Vertical AI Agent Harnesses)",
  "Ontologies and graph engineering testbeds",
  "Rapid evaluation of new agentic frameworks on real-world as-is and to-be processes",
];

const ManagedAgenticSandboxesRelease = () => {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-3xl mx-auto mt-20">
        {/* Back Link */}
        <Link
          to="/thought-leadership/product-innovations"
          className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-[#1569a9] transition-colors mb-8"
        >
          &larr; Back to Product Innovations
        </Link>

        {/* Category Badge */}
        <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <span className="text-xs font-semibold text-[#1569a9] uppercase tracking-wider">
            Managed Sandboxes &bull; Applied AI v1.1
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          Managed Agentic Sandboxes (custom) for Experimentation &amp; Prototyping Agentic Business Systems - Post Skilling Applied AI
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Content Body */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            Release Overview
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            EnterpriseSI (EnterpriseSuperIntelligence) is announcing the v1.1 release of our Managed Agentic Sandbox for Enterprises, enabling teams to experiment and prototype with emerging AI/Agentic AI technologies and specialized AI infrastructure options.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Our industrialized AI Sandboxes help enterprises simulate and experience agentic operations across specific industry verticals and core business functions, quickly demonstrating &ldquo;The Art of the Possible&rdquo; to executive stakeholders and accelerating business cases for pilot funding.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            The Bottleneck of Internal Sandboxes
          </h2>
          <div className="border-l-4 border-amber-600 pl-5 py-2 my-4 mb-8">
            <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
              Building internal sandboxes for AI experimentation and prototyping traditionally requires months of multi-departmental approvals and infrastructure setup, creating delays of over 12 months before achieving initial proof-of-value. EnterpriseSI provides zero-setup, turnkey access in days.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Supported Verticals &amp; Functional Domains
          </h2>
          <h4 className="text-sm font-semibold text-neutral-800 uppercase tracking-wider mb-2">
            Target Industries
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {supportedIndustries.map((ind, index) => (
              <span
                key={index}
                className="text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-3 py-1 rounded-full"
              >
                {ind}
              </span>
            ))}
          </div>

          <h4 className="text-sm font-semibold text-neutral-800 uppercase tracking-wider mb-2">
            Business Functions
          </h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {supportedFunctions.map((fn, index) => (
              <span
                key={index}
                className="text-sm font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full"
              >
                {fn}
              </span>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Turnkey Agent Harness Architecture
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We provide AI-enabled core application backends with agent harnesses comprising tools, MCP Servers, agent skills, long-term memory, and pre-developed Agentic Business Copilots for quickly testing agentic to-be processes against real-world as-is workflows:
          </p>
          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 leading-relaxed list-disc">
            {harnessCapabilities.map((cap, index) => (
              <li key={index} className="pl-1">
                {cap}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Enterprise Track Record
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            The customizable sandboxes have been deployed and validated across multiple enterprise clients, including a global bank, a healthcare provider, an F&amp;A services enterprise, and a fintech software organization moving from initial validation to multi-phase deployments.
          </p>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you are from an IT services organization looking to build project-ready AI Deployment Strategists or an enterprise looking to deploy production AI, contact us to schedule a sandbox demo:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="mailto:bd@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline"
              >
                bd@enterprisesi.co
              </a>
              <a
                href="mailto:abhiroop@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline"
              >
                abhiroop@enterprisesi.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedAgenticSandboxesRelease;

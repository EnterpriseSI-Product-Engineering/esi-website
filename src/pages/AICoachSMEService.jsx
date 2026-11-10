import { Link } from "react-router";

const personaList = [
  "Chief AI Officer (CAIO)",
  "Sr AI Engineering Manager",
  "Sr Forward Deployed Architect",
  "Forward Deployed Engineer (FDE)",
  "Sr AI Business Consultants (Select Industry Domains)",
  "Sr AI Cybersecurity Engineer",
  "AI Governance, Risk & Compliance (GRC) Officer",
  "Sr Agent Harness Engineer",
  "Sr Data Engineer",
  "Sr AI Testing & Evals Engineer",
  "Sr AI Infrastructure Engineer",
  "Sr Agentic Software Development Engineer",
  "Sr AIOps & SRE Engineer",
];

const scopeAreas = [
  {
    title: "Custom AI Skilling Sessions",
    detail: "Targeted modular sessions of 4 hrs, 8 hrs, or 16 hrs tailored to leadership cohorts and management tracks.",
  },
  {
    title: "Case-Based Problem Solving Sessions",
    detail:
      "Interactive 2-3 hour problem-solving workshops modeled on the Harvard Business School case method. Leaders work in cohorts or individually through AI strategy, live execution roadblocks, crisis mitigation, and escalation management with direct AI coach facilitation.",
  },
  {
    title: "Monthly Specialized AI Webinars",
    detail: "Conducting 2 or more custom webinars (1.5 to 2 hours) on emerging AI business and deep-tech topics monthly.",
  },
  {
    title: "1:1 and Team Advisory on High-Stakes Queries",
    detail:
      "Executive preparation for customer CXO pitches, AI transformation service proposals, or RFP responses requiring differentiated thought leadership, defensive positions, and verified data benchmarks.",
  },
  {
    title: "Architecture, Tooling, and RFP Solution Reviews",
    detail:
      "Independent technical review of AI solution architecture, infra stack, evaluation harnesses, and proposal solutioning, closing critical SME gaps before client submission.",
  },
  {
    title: "Rapid Prototyping and Proof-of-Concept Execution",
    detail: "Hands-on engineering support for AI POCs and quick functional prototyping (up to 30 hours per month).",
  },
  {
    title: "Strategic Advisory for AI Academies and Centers of Excellence",
    detail: "Guidance on architecting enterprise AI Centers of Excellence (COEs), AI-first Global Capability Centers (GCCs), and talent upskilling initiatives.",
  },
];

const provenOutcomes = [
  {
    client: "North American Commercial Bank",
    impact:
      "Assisted business (Finance & Accounting) and technical AI/automation leadership in identifying 40 agentic AI use cases and shortlisting 5 priority pilots for phase 1. Configured an AI experimentation sandbox for rapid prototyping and integrated banking processes via Agentic Digital Twins.",
  },
  {
    client: "EdTech Platform Company",
    impact:
      "Delivered 50+ AI agent and advanced RAG labs alongside a comprehensive AI labs GTM playbook, driving a 10x increase in lab-driven revenue within 18 months.",
  },
  {
    client: "EdTech Services Firm",
    impact:
      "Constructed an AI-driven hands-on labs and enterprise services playbook, expanding AI services revenue 5x over 6 months.",
  },
  {
    client: "US Sales Intelligence Platform",
    impact:
      "Mapped existing manual sales intelligence workflows into a robust TO-BE agentic process architecture, structured sprint milestones for MVP delivery, and established delivery team organization and cost models.",
  },
];

const AICoachSMEService = () => {
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
            Executive AI Coaching &bull; Advisory
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          AI Coach (10 AI SMEs-in-a-Box) Service for Senior Leaders &amp; Mid-Level Managers
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            AI Coaching-as-a-Service for Enterprise Leaders
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            EnterpriseSI has launched the updated edition of our &ldquo;AI Coaching&rdquo; service for senior leaders and mid-level managers across business and technology functions. Designed to support internal initiatives and client-facing engagements on-demand, this service helps organizations move faster, operate with greater agility, and execute AI roadmaps with high confidence.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            The core objective is to accelerate enterprise AI leadership talent transformation and establish a dependable pipeline of leaders capable of governing, building, and deploying AI-first, AI-native organizational capabilities.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Target Audience
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            This service is purpose-built for senior business and engineering executives, practice leaders, digital transformation directors, and mid-level managers who need to plan, strategize, and execute with precision to capture measurable business value from AI investments.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            What the Service Delivers: 10 AI SMEs-in-a-Box
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Enterprises receive direct, on-demand access to a dedicated pod of up to 10 AI coaches and subject-matter experts with demonstrated track records implementing AI products and solutions across Fortune 500 enterprises, global tier-1 organizations, and pioneering Silicon Valley AI startups.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Available personas span critical strategic, technical, and governance disciplines:
          </p>
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mb-8">
            <ul className="space-y-2.5">
              {personaList.map((persona, index) => (
                <li key={index} className="text-neutral-700 text-sm md:text-base flex items-start">
                  <span className="text-[#1569a9] font-semibold mr-3">&bull;</span>
                  <span>{persona}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Flexible Retainer Scope
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Our coaching pod operates on a flexible retainer model &mdash; starting at 30 hours or more per month &mdash; seamlessly supporting strategic tasks, solution development, and leadership skilling initiatives. Scope areas include:
          </p>
          <div className="space-y-4 mb-8">
            {scopeAreas.map((item, index) => (
              <div key={index} className="p-4 border border-neutral-200 rounded-lg">
                <h3 className="font-semibold text-neutral-900 text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Demonstrated Client Impact &amp; Outcomes
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Representative production outcomes delivered through our AI Coaching-as-a-Service model:
          </p>
          <div className="space-y-4 mb-8">
            {provenOutcomes.map((item, index) => (
              <div key={index} className="border-l-4 border-[#1569a9] pl-5 py-2">
                <h3 className="font-bold text-neutral-900 text-sm uppercase tracking-wide mb-1">
                  {item.client}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            AI Coach Experience &amp; Pedigree
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Our coaching roster comprises senior practitioners with experience ranging from 23 years overall industry tenure (with 12 years dedicated to AI systems) to 5 years in production-grade machine learning and agentic platforms. Every team member brings hands-on execution background in AI-first, AI-native practices, enterprise production rollouts, and ground-up product engineering.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Why a Retainer Engagement Model?
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Enterprise AI strategy evolves rapidly, bringing time-critical challenges that static training packages cannot solve. Rather than delivering a generic, short-term curriculum and departing, our retainer model operates as an ongoing operational partnership:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-600 mb-6 pl-2">
            <li>
              We initiate engagements in diagnostic workshop mode to uncover specific enterprise priorities, current tooling, and capability gaps across business units.
            </li>
            <li>
              We co-develop custom learning paths, case exercises, and SME support pods matched to your evolving technology roadmap.
            </li>
            <li>
              We continuously adjust engagement methods to ensure maximum impact across leadership skilling, technical vetting, and customer-facing revenue outcomes.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Retainer Commitment Guidelines
          </h2>
          <div className="border border-neutral-200 rounded-lg p-6 mb-8">
            <p className="text-neutral-700 leading-relaxed text-sm md:text-base mb-3">
              To drive measurable organizational transformation, we recommend a 6-month retainer commitment (minimum 30 hours per month), guaranteeing reserved allocation of dedicated senior SMEs for your organization.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm">
              For initial validation, pilot engagements are available with a 3-month minimum commitment.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Connect With Our Team
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            EnterpriseSI maintains a comprehensive catalog of over 50 specific operational line items supported through our AI Coach-as-a-Service model.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-4">
            To schedule a demo and explore a tailored coaching engagement for your leadership cohorts:
          </p>
          <ul className="list-disc list-inside space-y-1 text-neutral-600 mb-8 pl-2">
            <li>
              Email:{" "}
              <a href="mailto:sales@enterprisesi.co" className="text-[#1569a9] font-medium hover:underline">
                sales@enterprisesi.co
              </a>
              {" "}or{" "}
              <a href="mailto:abhiroop@enterprisesi.co" className="text-[#1569a9] font-medium hover:underline">
                abhiroop@enterprisesi.co
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AICoachSMEService;

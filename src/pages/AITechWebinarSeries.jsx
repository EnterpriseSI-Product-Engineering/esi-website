import { Link } from "react-router";

const webinarTopics = [
  "Air-gapped AI - The next chapter in 2027 for deployable & safe AI Infrastructure",
  "Architecting AI Agents with Decision AI / SystemOne models like Jev from TypesafeAI (with business use cases, demos)",
  "Demystifying Deep Neural Networks for Software Engineers",
  "Demystifying LLM Architectures for Software Engineers (2-part series)",
  "AI Inferencing Techniques & Strategies - What AI Deployment Strategists & AI Forward Deployed Engineers should know",
  "Deep dive workshop - Building AI Agents with custom backend app, tools & MCP server (2-part series)",
  "Deep dive workshop - Architecture patterns for Multi-agent systems",
  "Deep dive workshop - Advanced Forms of Retrieval Augmented Generation - RAG (2-part series)",
  "Demystifying AI Agent Governance - Strategies & cases",
  "Deep dive workshop - AI Enabling Software apps via tools & MCP Server (2-part series)",
  "AI powered software development with Spec driven development & Claude code (2-part series)",
  "Context Engineering for AI Agents (2-part series)",
];

const targetRoles = [
  "Software Engineers & Technical Architects",
  "AI Forward Deployed Engineers",
  "AI Deployment Strategists",
  "Product Managers & Solution Architects",
  "GTM, Sales Engineering & Client-Facing Tech Leads",
];

const AITechWebinarSeries = () => {
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
            Webinar Series &bull; Continuous Skilling
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          AITech Webinar Series for Enterprises
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Content Body */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            Series Overview
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            As part of our initiative to assist enterprises in building an AI Talent Factory with deployment-ready AI Forward Deployed Engineers, AI Deployment Strategists, and other critical AI roles rapidly with short time commitments, EnterpriseSI offers a continuous monthly webinar series on cutting-edge AI technology topics.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            The AITech series is designed for both engineering and cross-functional strategy/GTM teams. Each short 2-hr webinar features open enrollment (capped at 500 employees per session) allowing team members across different business units, industry verticals, and technology practices to master current AI concepts and observe real-world application demonstrations.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Target Participant Profiles
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {targetRoles.map((role, index) => (
              <span
                key={index}
                className="text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-3 py-1 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Featured Webinar Topics (Nov &ndash; Dec 2026)
          </h2>
          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 leading-relaxed list-disc">
            {webinarTopics.map((topic, index) => (
              <li key={index} className="pl-1">
                <span className="text-neutral-900 font-medium">{topic}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Hands-on Sandbox &amp; Lab Continuity
          </h2>
          <div className="border-l-4 border-[#1569a9] pl-5 py-2 my-4 mb-8">
            <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
              Topics introduced via these webinars can subsequently be practiced hands-on by employees through dedicated AI labs and experimentation sandboxes on our Agentic AI Playground platform.
            </p>
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you are from an IT services organization looking to build project-ready AI teams or an enterprise aiming to deploy AI into production, contact us or share this with your Chief Learning Officer, Head of AI, CTO, or L&amp;D team:
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

export default AITechWebinarSeries;

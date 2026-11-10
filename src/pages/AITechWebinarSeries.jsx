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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28">
      <div className="max-w-3xl mx-auto mt-4 sm:mt-8 md:mt-12">
        {/* Back Link */}
        <Link
          to="/thought-leadership/product-innovations"
          className="inline-flex items-center text-xs sm:text-sm font-medium text-neutral-500 hover:text-[#1569a9] transition-colors mb-6 sm:mb-8"
        >
          &larr; Back to Product Innovations
        </Link>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight break-words">
          AITech Webinar Series for Enterprises
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Series Overview
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
            As part of our initiative to assist enterprises in building an AI Talent Factory with deployment-ready AI Forward Deployed Engineers, AI Deployment Strategists, and other critical AI roles rapidly with short time commitments, EnterpriseSI offers a continuous monthly webinar series on cutting-edge AI technology topics.
          </p>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
            AITech series is focused on technical /engineering roles and those in Strategy/ GTM/ client facing &amp; Solution/ Product management roles and comprises short 2 hr webinars with open enrolment (capped at 500 employees per webinar) so that employees from different BUs, industry &amp; technology practices / depts can join in and learn about the latest AI technical and business use case topics and can understand how these concepts can be applied to various problem statements (with selective demos).
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Target Participant Profiles
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {targetRoles.map((role, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-2.5 py-1 sm:px-3 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Featured Webinar Topics (Nov &ndash; Dec 2026)
          </h2>
          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 text-base sm:text-lg leading-relaxed list-disc">
            {webinarTopics.map((topic, index) => (
              <li key={index} className="pl-1">
                <span className="text-neutral-900 font-medium">{topic}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Hands-on Sandbox &amp; Lab Continuity
          </h2>
          <div className="border-l-4 border-[#1569a9] pl-4 sm:pl-5 py-2 my-4 mb-8">
            <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Topics introduced via these webinars can subsequently be learnt hands-on by employees via hands-on AI labs and sandbox, as part of our Agentic AI Playground.
            </p>
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              If you are from an IT services organization looking to build project-ready AI teams or an enterprise aiming to deploy AI into production, contact us or share this with your Chief Learning Officer, Head of AI, CTO, or L&amp;D team:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-base sm:text-lg">
              <a
                href="mailto:abhiroop@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline break-all sm:break-normal"
              >
                abhiroop@enterprisesi.co
              </a>
              <a
                href="mailto:bd@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline break-all sm:break-normal"
              >
                bd@enterprisesi.co
              </a>
              <a
                href="mailto:sales@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline break-all sm:break-normal"
              >
                sales@enterprisesi.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITechWebinarSeries;

import { Link } from "react-router";

const coreTopics = [
  "Multi-agent systems",
  "Context engineering",
  "Agentic memory",
  "Evals & automated testing",
  "Advanced RAG pipelines",
  "Loop engineering",
  "Graph engineering",
  "Ontologies & knowledge graphs",
  "Working with the newest LLMs & SLMs",
];

const keyQuestions = [
  "How do I keep my employees' AI skills relevant & upgraded in a fast-changing tech landscape with the state-of-the-art shifting every month?",
  "How do I perennially keep my AI-trained workforce project/deployment ready, even if they are not currently working on an active AI project or pilot?",
  "How do I build a repetitive, scalable factory model that can continuously develop sufficiently skilled AI engineers (FDEs & beyond) on a constant basis, given natural talent attrition?",
];

const AIFDEFactorySeries = () => {
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
            Engineering Factory &bull; Series Part 1
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          AI FORWARD DEPLOYED ENGINEER (FDE) Factory
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Content Body */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            Series Introduction
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We are starting a series on what differentiates our AI Talent Factory model for developing AI Forward Deployed Engineers and fully loaded AI Project Teams. This is Part 1 of this series.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            EnterpriseSI&apos;s platform-based approach ensures a continuous supply of practice labs on the most important and latest topics for the agent development lifecycle, AI app development, and production deployment.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Core Technical Capabilities Covered
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {coreTopics.map((topic, index) => (
              <span
                key={index}
                className="text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-3 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Key Questions Every Practice Leader, CTO &amp; HR L&amp;D Asks
          </h2>
          <div className="space-y-4 my-6">
            {keyQuestions.map((q, index) => (
              <div
                key={index}
                className="border-l-4 border-[#1569a9] pl-5 py-2"
              >
                <p className="text-neutral-800 font-medium leading-relaxed text-base">
                  {q}
                </p>
              </div>
            ))}
          </div>

          <p className="text-neutral-600 leading-relaxed mt-8 mb-6">
            If you are a Practice Leader, CTO, or HR L&amp;D professional, we would love to hear your views on how you are addressing the above questions today.
          </p>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              To understand how EnterpriseSI can help create a sustainable AI Talent Factory for your organization, please contact us at:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="mailto:abhiroop@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline"
              >
                abhiroop@enterprisesi.co
              </a>
              <a
                href="mailto:sales@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline"
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

export default AIFDEFactorySeries;

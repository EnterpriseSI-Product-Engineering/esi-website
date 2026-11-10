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
          AI FORWARD DEPLOYED ENGINEER (FDE) Factory
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Series Introduction
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
            We are starting a series on what differentiates our AI Talent Factory model for developing AI Forward Deployed Engineers and fully loaded AI Project Teams. This is Part 1 of this series.
          </p>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
            EnterpriseSI&apos;s platform-based approach ensures a continuous supply of practice labs on the most important and latest topics for the agent development lifecycle, AI app development, and production deployment.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Core Technical Capabilities Covered
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {coreTopics.map((topic, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-2.5 py-1 sm:px-3 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Key Questions Every Practice Leader, CTO &amp; HR L&amp;D Asks
          </h2>
          <div className="space-y-4 my-6">
            {keyQuestions.map((q, index) => (
              <div
                key={index}
                className="border-l-4 border-[#1569a9] pl-4 sm:pl-5 py-2"
              >
                <p className="text-neutral-800 font-medium leading-relaxed text-sm sm:text-base md:text-lg">
                  {q}
                </p>
              </div>
            ))}
          </div>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mt-8 mb-6">
            If you are a Practice Leader, CTO, or HR L&amp;D professional, we would love to hear your views on how you are addressing the above questions today.
          </p>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              To understand how EnterpriseSI can help create a sustainable AI Talent Factory for your organization, please contact us at:
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

export default AIFDEFactorySeries;

import { Link } from "react-router";

const supportedIndustries = [
  "Banking & Financial Services",
  "Insurance",
  "Healthcare",
  "CPG & Industrial Products",
  "Life Sciences/ Pharma",
  "Oil & Gas",
];

const supportedFunctions = [
  "Finance & Accounting",
  "Supply chain",
  "CX - Marketing, service, sales, commerce",
  "Auditing, Risk & Compliance",
];

const ManagedAgenticSandboxesRelease = () => {
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
          Managed Agentic Sandboxes (custom) for Experimentation &amp; prototyping Agentic Business Systems - Post Skilling Applied AI
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          {/* Announcement Intro */}
          <p className="text-neutral-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            Announcing the new release of one of our most innovative product offering, that&apos;s in high demand with our Enterprise customers. Our Managed Agentic Sandboxes opens up immense potential for learning how to apply agentic ai technologies to real business problems/ use cases in a non production setup.
          </p>

          {/* v1.1 Release Card */}
          <div className="border-l-4 border-[#1569a9] bg-[#1569a9]/5 rounded-r-xl p-5 sm:p-6 mb-8 sm:mb-10">
            <div className="text-xs font-bold text-[#1569a9] uppercase tracking-wider mb-2">
              Release Announcement
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3">
              v1.1 Release of our Managed Agentic Sandbox for Enterprises
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
              EnterpriseSI (EnterpriseSuperIntelligence) is announcing the v1.1 release of our Managed Agentic Sandbox for Enterprises, enabling them to experiment and prototype with new AI/ Agentic AI technologies and AI Infra options.
            </p>
          </div>

          {/* Industrialized AI Sandboxes & Target Verticals Grid */}
          <div className="my-8 sm:my-10">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
              Industrialized AI Sandboxes
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
              Our Industrialized AI Sandboxes help enterprises simulate/ experience agentic operations for specific Industries and business functions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
              {/* Industries Box */}
              <div className="p-5 sm:p-6 rounded-xl border border-neutral-200 bg-white shadow-2xs">
                <h3 className="text-xs font-bold text-[#1569a9] uppercase tracking-wider mb-3 sm:mb-4 pb-2 border-b border-neutral-100">
                  Specific Industries
                </h3>
                <ul className="space-y-2">
                  {supportedIndustries.map((ind, index) => (
                    <li key={index} className="text-neutral-800 text-sm sm:text-base flex items-start">
                      <span className="text-[#1569a9] font-semibold mr-2.5">&bull;</span>
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Functions Box */}
              <div className="p-5 sm:p-6 rounded-xl border border-neutral-200 bg-white shadow-2xs">
                <h3 className="text-xs font-bold text-[#1569a9] uppercase tracking-wider mb-3 sm:mb-4 pb-2 border-b border-neutral-100">
                  Business Functions
                </h3>
                <ul className="space-y-2">
                  {supportedFunctions.map((fn, index) => (
                    <li key={index} className="text-neutral-800 text-sm sm:text-base flex items-start">
                      <span className="text-[#1569a9] font-semibold mr-2.5">&bull;</span>
                      <span>{fn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Art of the Possible Text */}
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed my-4 sm:my-6">
              leveraging the latest and most popular AI Technologies on the most high potential business use cases/ problem statements, quickly enabling them to showcase &ldquo;The Art of the Possible&rdquo; for Agentic Business Transformation to various stakeholders. This further accelerates the business case for funding pilot/ implementation.
            </p>
          </div>

          {/* Bottleneck Callout */}
          <div className="border-l-4 border-amber-500 bg-amber-500/5 rounded-r-xl p-5 sm:p-6 my-8 sm:my-10">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
              The Enterprise Challenge
            </div>
            <p className="text-neutral-800 text-sm sm:text-base md:text-lg leading-relaxed">
              Building Internal Sandboxes for AI experimentation &amp; prototyping takes a long time and multiple approvals at various levels, creating delays of over 12 months at times on AI proof-of-value.
            </p>
          </div>

          {/* Turnkey Architecture & Capabilities */}
          <div className="my-8 sm:my-10 p-5 sm:p-8 rounded-2xl border border-neutral-200 bg-neutral-50/70">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-3 sm:mb-4">
              Turnkey Backend &amp; Agent Harness
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              We provide AI enabled core application backends with agent harness comprising tools, MCP Servers, agent skills, long term agentic memory, pre-developed Agentic Business Copilots (these are our Vertical AI Agent Harnesses for test drive) for quickly designing &amp; testing agentic to-be processes, replicating real world as-is processes.
            </p>
            <div className="pt-4 border-t border-neutral-200/80">
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Technologies like new agentic frameworks, context graphs &amp; ontologies/ graph engineering, agent skills, agentic memory, etc can be quickly tried out on real world like use cases/ scenarios.
              </p>
            </div>
          </div>

          {/* Customer Validation */}
          <div className="border-l-4 border-emerald-600 bg-emerald-500/5 rounded-r-xl p-5 sm:p-6 my-8 sm:my-10">
            <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              Customer Validation
            </div>
            <p className="text-neutral-800 text-sm sm:text-base md:text-lg leading-relaxed">
              The customizable sandboxes have been used by multiple customers including a bank, a healthcare company, a F&amp;A services company, a Fintech services company (few are still ongoing - moving from phase 1 to 2).
            </p>
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              If you are from an IT Services organization looking to build deployment/ project ready AI Deployment Strategists OR domain Enterprise looking to deploy AI in production, kindly contact us for a demo cum discussion:
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

export default ManagedAgenticSandboxesRelease;

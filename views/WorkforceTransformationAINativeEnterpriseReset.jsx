import Link from "next/link";

const approachItems = [
  "Discovery Workshop for Workforce calibration / AI skills assessment & enablement",
  "Rolling out Perpetual AI Skilling Model",
  "Measure AI Skills Maturity",
  "Deploy AI ready Workforce",
  "Collect feedback and update Skilling Model",
];

const platformCapabilities = [
  "Tech and Domain use case labs - RAG, AI Agents, Deployment, Governance, etc. New labs every month on the latest AI topics of Enterprise relevance",
  "AI enabled Enterprise backend & data for building real world like agents with multi-step workflows",
  "Ontology, knowledge graph & context graph modeling labs on real world business data & processes",
  "Decision AI Model test bed - on various use cases",
  "Managed AI Sandbox for prototyping & experimentation",
  "AI Business Copilots for test drive & demo of the \"Art of the Possible\"",
  "AI Webinar series - with agent tech and use case demos from our platform",
  "AI Coach / mentor support - 10 AI SMEs - FDE, Deployment Strategist, other profiles, available on-demand to support talent transformation & AI projects",
  "AI Implementation Accelerator Apps for Pilots & Implementations",
];

const WorkforceTransformationAINativeEnterpriseReset = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28">
      <div className="max-w-3xl mx-auto mt-4 sm:mt-8 md:mt-12">
        {/* Back Link */}
        <Link
          href="/thought-leadership/product-innovation"
          className="inline-flex items-center text-xs sm:text-sm font-medium text-neutral-500 hover:text-[#047857] transition-colors mb-6 sm:mb-8"
        >
          &larr; Back to Product Innovations
        </Link>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight break-words">
          Workforce Transformation for an AI-Native Enterprise Reset
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          {/* Announcement Card */}
          <div className="border-l-4 border-[#047857] bg-[#047857]/5 rounded-r-xl p-5 sm:p-6 mb-8 sm:mb-10">
            <p className="text-neutral-800 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-3">
              EnterpriseSI is officially launching our new platform-driven advisory-to-execution service line:{" "}
              <span className="text-[#047857] font-bold block sm:inline mt-1 sm:mt-0">
                Workforce Transformation for an AI-Native Enterprise Reset
              </span>
            </p>
            <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Our set of frameworks, methodologies &amp; platform-based Perpetual Skilling Model enables GCCs and IT Services Enterprises to plan, design &amp; implement AI Talent transformation initiatives at scale across their entire Global Workforce, with an outcome-driven approach.
            </p>
          </div>

          {/* Our Approach Section */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Our approach involves:
            </h2>
            <ul className="space-y-3 pl-2 sm:pl-4">
              {approachItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-neutral-800 text-base sm:text-lg leading-relaxed"
                >
                  <span className="text-[#047857] font-bold mr-3 text-lg leading-snug">
                    &bull;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Differentiated Platform Capabilities */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Some of the highly differentiated platform (our product) based capabilities we bring in as part of the transformation engagement:
            </h2>
            <ul className="space-y-3 pl-2 sm:pl-4">
              {platformCapabilities.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-neutral-800 text-base sm:text-lg leading-relaxed"
                >
                  <span className="text-[#047857] font-bold mr-3 text-lg leading-snug">
                    &bull;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Strategic Support & Differentiation */}
          <div className="space-y-4 mb-8 sm:mb-10">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Apart from this, our Chief AI Officer, AI FDEs and other AI SMEs are available for supporting AI Strategy work, Pilots &amp; Implementations / deployments.
            </p>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              We enable Enterprises to be self-dependent / build internal capability to address most of their AI needs.
            </p>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-medium">
              Unlike competitors, we cover the end-to-end value chain from AI assessments to deployments to post production optimization.
            </p>
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#047857]/5 border border-[#047857]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              For a demo cum discussion of our highly differentiated Workforce Transformation service, DM Abhiroop Roy or email:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-base sm:text-lg">
              <a
                href="mailto:abhiroop@enterprisesi.co"
                className="text-[#047857] font-semibold hover:underline break-all sm:break-normal"
              >
                abhiroop@enterprisesi.co
              </a>
              <a
                href="mailto:bd@enterprisesi.co"
                className="text-[#047857] font-semibold hover:underline break-all sm:break-normal"
              >
                bd@enterprisesi.co
              </a>
              <a
                href="mailto:sales@enterprisesi.co"
                className="text-[#1569a9] font-semibold hover:underline break-all sm:break-normal"
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

export default WorkforceTransformationAINativeEnterpriseReset;

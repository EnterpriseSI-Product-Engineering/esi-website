import { Link } from "react-router";

const domainPrograms = [
  "AI Forward Deployed Engineer - Banking & Financial Services Specialization",
  "AI Forward Deployed Engineer - Insurance Specialization",
  "AI Forward Deployed Engineer - Healthcare Specialization",
  "AI Forward Deployed Engineer - Life Sciences/Pharma Specialization",
  "AI Forward Deployed Engineer - CPG, Retail & Ecom Specialization",
  "AI Forward Deployed Engineer - Oil & Gas Specialization",
  "AI Forward Deployed Engineer - Finance, Accounting & Auditing Specialization",
  "AI Forward Deployed Engineer - Manufacturing & Supply Chain Specialization",
  "AI Forward Deployed Engineer - Marketing, Sales & Service Specialization",
];

const techStackPrograms = [
  "AI Forward Deployed Engineer - OpenAI + Azure Tech Stack",
  "AI Forward Deployed Engineer - Anthropic + AWS Tech Stack",
  "AI Forward Deployed Engineer - Google (GCP, Gemini & Gemma, ADK) Tech Stack",
  "AI Forward Deployed Engineer - Open source & Open Weight LLMs/ SLMs",
];

const AIFDEProgramsSpecializations = () => {
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
          AI FDE Programs - By Industry, Business Function, Tech Stack
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Program Overview
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
            EnterpriseSI has been delivering 25+ AI Forward Deployed Engineer programs every quarter &amp; our labs are designed to be scalable to continously skill 1000s of employees in an organization w/o instructor intervention.
          </p>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
            We are thrilled to be one of the first in the Industry to launch domain &amp; tech stack specific AI Forward Deployed Engineer programs. These programs are designed &amp; delivered by a team of Sr FDEs with over a decade of experience, working on global AI Implementation projects &amp; Agentic AI product engineering.
          </p>

          {/* 80 hrs Programs */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-2">
            80 hrs Programs: Domain &amp; Business Function Specializations
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#1569a9] mb-4">
            With 40 hands-on AI labs &amp; 8 Assessment Tests delivered via our Agentic AI Playground platform:
          </p>
          <ol className="pl-6 space-y-3 mb-6 text-neutral-600 text-base sm:text-lg leading-relaxed list-decimal">
            {domainPrograms.map((prog, index) => (
              <li key={index} className="pl-1">
                <span className="text-neutral-900 font-medium">{prog}</span>
              </li>
            ))}
          </ol>

          <div className="border-l-4 border-[#1569a9] pl-5 py-2 my-4 mb-10">
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              <span className="font-semibold text-neutral-900">Capstone Projects:</span> Two capstone projects &mdash; E2E Agent Design, development, deployment, testing &mdash; 10 hrs each (additional 20 hrs).
            </p>
          </div>

          {/* 60 hrs Programs */}
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-2">
            60 hrs Programs: Tech Stack Specializations
          </h2>
          <p className="text-sm sm:text-base font-medium text-[#1569a9] mb-4">
            With 20 hands-on AI labs &amp; 4 Assessment Tests delivered via our Agentic AI Playground platform:
          </p>
          <ol start={10} className="pl-6 space-y-3 mb-6 text-neutral-600 text-base sm:text-lg leading-relaxed list-decimal">
            {techStackPrograms.map((prog, index) => (
              <li key={index} className="pl-1">
                <span className="text-neutral-900 font-medium">{prog}</span>
              </li>
            ))}
          </ol>

          <div className="border-l-4 border-amber-600 pl-5 py-2 my-4 mb-10">
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              <span className="font-semibold text-neutral-900">Capstone Projects:</span> Two capstone projects &mdash; E2E Agent Design, development, deployment, testing &mdash; 10 hrs each (additional 20 hrs).
            </p>
          </div>

          {/* Availability */}
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Program Availability
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
            These programs are available in <span className="font-semibold text-neutral-900">B2B</span> (Direct to Enterprise) and <span className="font-semibold text-neutral-900">B2C</span> (Direct to Individual professionals) avatars.
          </p>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              To discuss curriculum details, corporate cohort pricing, or customized labs for your organization, please contact us at:
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

export default AIFDEProgramsSpecializations;

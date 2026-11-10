import { Link } from "react-router";

const domainTopics = [
  "Retail & Commercial Banking in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "Investment Banking in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "Fintech in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "Life & General Insurance in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "Healthcare in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "CPG/ FMCG in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "Retail & Ecom in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "Life Sciences/ Pharma in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "Oil & Gas in-depth - Processes, Data & Core Business Apps, Analytics, Key players, AI use cases - 8 hrs",
  "Finance & Accounting in-depth - Processes, Data & Core Business Apps, Analytics, AI use cases - 16 hrs",
  "Supply Chain & Manufacturing in-depth - Processes, Data & Core Business Apps, Analytics, AI use cases - 16 hrs",
  "Customer Experience (CX) - Marketing, Sales, Service, Commerce in-depth - Processes, Data & Core Business Apps, Analytics, AI use cases - 16 hrs",
];

const targetProfiles = [
  "AI Forward Deployed Engineers",
  "Business Analytics SMEs",
  "Functional Consultants & Business Analysts",
  "Technical Architects & Software Engineers needing domain fluency",
];

const DomainDeepdiveLearningSeries = () => {
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
          Domain (Industries, Business Functions) Deepdive for AI &amp; Software Engineers
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Series Overview
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
            EnterpriseSI is launching a learning series on &ldquo;Domain Deepdive for AI &amp; Software Engineers&rdquo; for enterprises.
          </p>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
            Below are the Standard Webinar Topics, each to be delivered as a series of 2 hr webinars or longer intensive sessions of 4 or 8 hrs a day. In the former format, sessions are open to company-wide participation (100+ employees), while in the intensive format, sessions run as invitation-only short programs with a maximum of 50 participants per batch.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Standard Webinar &amp; Deepdive Topics
          </h2>
          <ol className="pl-6 space-y-3 mb-8 text-neutral-600 text-base sm:text-lg leading-relaxed list-decimal">
            {domainTopics.map((topic, index) => (
              <li key={index} className="pl-1">
                <span className="text-neutral-900 font-medium">{topic}</span>
              </li>
            ))}
          </ol>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Continuous Assessments on Agentic AI Playground
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
            The webinars will be complemented with Continuous Assessments &amp; scenario based Qs on the domain learning, in our Agentic AI Playground platform, with completion status &amp; scores available by learner. This ensures the learning of domain is a continuous process rather than restricted to a one time webinar.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Target Technical Profiles
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {targetProfiles.map((prof, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-2.5 py-1 sm:px-3 rounded-full"
              >
                {prof}
              </span>
            ))}
          </div>

          <div className="border-l-4 border-[#1569a9] pl-4 sm:pl-5 py-2 my-6">
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              Above webinar series/ programs can be further customized to an Enterprise&apos;s needs.
            </p>
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              If you are an enterprise looking to build AI Forward Deployed Engineers, Business Analytics SMEs, and Functional Consultants with deeper understanding of core industries and functions, please contact us at:
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

export default DomainDeepdiveLearningSeries;

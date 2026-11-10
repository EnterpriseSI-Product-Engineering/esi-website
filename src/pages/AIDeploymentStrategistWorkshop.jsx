import { Link } from "react-router";

const targetAudience = [
  "IT Services Organizations",
  "Global Capability Centers (GCCs)",
  "B2B Software Product Enterprises embedding AI in their product stack",
  "Enterprises building AI-native products and client-facing solutions",
];

const AIDeploymentStrategistWorkshop = () => {
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
          AI Deployment Strategist - Sharpening the Consulting Mindset - Workshop - 24 hrs
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Program Overview
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
            EnterpriseSI (EnterpriseSuperIntelligence) has launched our new short term program on &ldquo;AI Deployment Strategist- Sharpening the Consulting Mindset&rdquo;.
          </p>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
            This is a 24 hrs program designed to augment skills of the client-facing &ldquo;AI Deployment Strategist&rdquo; role that serves as a bridge between client expectations and technical AI solutions, taking care of the non-tech part of the FDE engagement and aligning the solution to business goal realization.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Program Objective
          </h2>
          <div className="border-l-4 border-[#1569a9] pl-4 sm:pl-5 py-2 my-4">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              To sharpen the consulting skills needed for selling &amp; delivering AI native products &amp; services and aligning outcomes to business value creation.
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Target Organizations
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
            This program is relevant for:
          </p>
          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 text-base sm:text-lg leading-relaxed list-disc">
            {targetAudience.map((target, index) => (
              <li key={index} className="pl-1">
                {target}
              </li>
            ))}
          </ul>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              To schedule a call/demo and discuss the detailed curriculum, kindly DM Abhiroop Roy or contact us at:
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

export default AIDeploymentStrategistWorkshop;

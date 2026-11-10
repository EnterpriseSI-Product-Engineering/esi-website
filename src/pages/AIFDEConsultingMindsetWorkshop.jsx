import { Link } from "react-router";

const coverageItems = [
  "Day-in-the-life and Skills needed - AI FDE",
  "Specific examples of business problems solved by FDEs using AI & data tech",
  "Tools used by FDEs",
  "Agent behavior in production & challenges in Agent Deployment",
  "FDE Leading Practices from discovery to post production optimization of Agents",
  "Case Studies of challenging AI Implementations",
  "8 Role Plays using Case Method - Solving various FDE tasks & problem statements",
];

const targetAudience = [
  "IT Services Organizations",
  "Global Capability Centers (GCCs)",
  "B2B Software Product Enterprises embedding AI in their product stack",
  "Enterprises building AI-native products and client-facing solutions",
];

const AIFDEConsultingMindsetWorkshop = () => {
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
            Executive Workshop
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          AI FDE (Forward Deployed Engineering) Consulting Mindset - Workshop – 20 hrs
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Content Body */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            Program Overview
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            EnterpriseSI (EnterpriseSuperIntelligence) has launched our new short term program on &ldquo;AI FDE (Forward Deployed Engineer) Consulting Mindset&rdquo;.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            This is a 20 hrs program designed to augment skills of client-facing tech and business roles working with AI.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Program Coverage
          </h2>
          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 leading-relaxed list-disc">
            {coverageItems.map((item, index) => (
              <li key={index} className="pl-1">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Program Objective
          </h2>
          <div className="border-l-4 border-[#1569a9] pl-5 py-2 my-4">
            <p className="text-neutral-700 leading-relaxed text-base">
              To sharpen the consulting skills needed for selling &amp; delivering AI native products &amp; services and aligning outcomes to business value creation.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Target Organizations
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            This program is relevant for:
          </p>
          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 leading-relaxed list-disc">
            {targetAudience.map((target, index) => (
              <li key={index} className="pl-1">
                {target}
              </li>
            ))}
          </ul>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              To schedule a call/demo and discuss the detailed curriculum, kindly DM Abhiroop Roy or contact us at:
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

export default AIFDEConsultingMindsetWorkshop;

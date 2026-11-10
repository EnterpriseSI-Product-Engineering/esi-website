import { Link } from "react-router";

const AISkillingAtScaleWithoutTrainers = () => {
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
          AI Skilling at scale for Tech &amp; Business Employees w/o need for human trainers
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            High Impact AI Talent Factory
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
            EnterpriseSI&apos;s Agentic AI Playground platform now enables Enterprises to build high impact, highly differentiated AI Talent Factory by skilling their tech and business employees on AI, at scale, with continuous hands-on learning, assessments/ evaluation &amp; scoring and with no or very low requirement for Human Trainers.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Solving the Human Trainer Challenge
          </h2>
          <div className="border-l-4 border-[#1569a9] pl-4 sm:pl-5 py-2 my-4 mb-8">
            <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Finding or building scores of human trainers with great depth &amp; expertise in the newest AI Technologies is like finding a needle in a pond. We are taking this challenge head-on with our Platform driven approach.
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Digital-First Structured Learning Paths
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
            We enable a first-of-its-kind digital first skilling process via our structured, guided learning paths with monthly tasks on labs, study notes &amp; short videos, assessments, sandbox prototyping and analytics/ usage report and scores made available to Talent management team/ management.
          </p>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              For a demo cum discussion on how our platform driven AI Talent Factory system works, DM me or email us at:
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

export default AISkillingAtScaleWithoutTrainers;

import { Link } from "react-router";

const learningPathElements = [
  "Guided hands-on cloud labs covering modern agentic workflows and AI tools",
  "Illustrated study notes and concise concept videos",
  "Standardized assessments, automated evaluation, and skill scoring",
  "Dedicated sandbox environments for real-world experimentation and prototyping",
  "Real-time analytics, progress tracking, and usage reports accessible to Talent Management and leadership",
];

const AISkillingAtScaleWithoutTrainers = () => {
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
            Scaled Skilling &bull; AI Talent Factory
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          AI Skilling at Scale for Tech &amp; Business Employees w/o Need for Human Trainers
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Content Body */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            Transforming Enterprise AI Skilling
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            EnterpriseSI&apos;s Agentic AI Playground platform enables enterprises to build a high-impact, highly differentiated AI Talent Factory by skilling tech and business employees on AI, at scale, with continuous hands-on learning, assessments, evaluation, and scoring &mdash; with little to no requirement for human trainers.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            The Human Trainer Bottleneck
          </h2>
          <div className="border-l-4 border-[#1569a9] pl-5 py-2 my-4 mb-8">
            <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
              Finding or building dozens of external human trainers possessing deep, hands-on expertise in the newest AI technologies is nearly impossible in today&apos;s rapidly evolving market. EnterpriseSI solves this scarcity with an automated, platform-driven model.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Digital-First Guided Learning Paths
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We enable a digital-first skilling process via structured, self-paced learning paths with monthly milestones across:
          </p>
          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 leading-relaxed list-disc">
            {learningPathElements.map((el, index) => (
              <li key={index} className="pl-1">
                {el}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Continuous Measurement &amp; Reporting
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Instead of passive attendance metrics, leadership gains access to granular capability benchmarks, hands-on lab completion verification, and real-time skill scores by employee and business unit.
          </p>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              To discuss how our platform-driven AI Talent Factory system operates or schedule a live platform demo, contact us at:
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

export default AISkillingAtScaleWithoutTrainers;

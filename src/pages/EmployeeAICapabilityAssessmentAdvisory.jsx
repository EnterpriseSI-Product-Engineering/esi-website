import { Link } from "react-router";

const platformComponents = [
  "Comprehensive AI Programs tailored to enterprise roles",
  "Illustrated study notes & graphical concept demonstrations",
  "Hands-on practice labs in isolated cloud sandboxes",
  "Standardized assessment tests with AI-Native scoring logic",
  "AI Sandbox for experimentation & prototyping with real-world-like agents",
];

const EmployeeAICapabilityAssessmentAdvisory = () => {
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
            Advisory &bull; GCCs &amp; IT Services
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          Employee AI Capability Assessment &amp; AI Native Talent Transformation Strategy - Advisory
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Content Body */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            Service Overview
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            EnterpriseSI has launched our &ldquo;Employee AI Capability Assessment &amp; AI Native Talent transformation Strategy&rdquo; service for GCCs and IT Services Enterprises.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            This advisory service is based on 50+ Employee AI Assessments delivered through our Agentic AI Playground app, as part of our AI Programs and lab subscriptions where we measure skills learned via assessment tests and AI-Native scoring logic.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Assessment &amp; Transformation Methodology
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We help enterprises map and understand their AI Talent pool, bucketing talent into maturity tiers and developing structured learning journeys built on top of our platform components:
          </p>
          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 leading-relaxed list-disc">
            {platformComponents.map((comp, index) => (
              <li key={index} className="pl-1">
                {comp}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Enterprise Value
          </h2>
          <div className="border-l-4 border-[#1569a9] pl-5 py-2 my-4">
            <p className="text-neutral-700 leading-relaxed text-base">
              If you are an Enterprise looking to perform an organization-wide assessment of your employees&apos; AI Readiness, categorize teams into maturity tiers, and plan targeted AI Talent transformation initiatives based on these findings, we can help.
            </p>
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              To discuss organization-wide assessment options, maturity benchmarking, or schedule a demo discussion, please contact us at:
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

export default EmployeeAICapabilityAssessmentAdvisory;

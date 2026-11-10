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
  "Working with newest LLMs & SLMs",
];

const toolkitFeatures = [
  {
    title: "Train-the-Trainer AI FDE Programs",
    desc: "Led by experienced AI FDEs, Agent Harness Engineers, and AI Product Engineers. Helps build an in-house team of 100+ AI trainers, augmented with hands-on technical labs, assessments, and an AI Sandbox for prototyping. Includes 8–16 hrs of domain-specific training across verticals (BFS, Insurance, Healthcare, CPG, O&G, Life Sciences) and business functions (F&A, Supply Chain, CX).",
  },
  {
    title: "Industry's Most Comprehensive Curriculums & Content",
    desc: "Complete program curriculums, presentations, reference documentation, spreadsheets, and production code repositories updated monthly to keep pace with rapid state-of-the-art shifts.",
  },
  {
    title: "12-Month Hands-on AI Labs Subscription",
    desc: "Seat-based subscription model for trainers and learners where each seat accommodates up to 6 individual learners, one at a time, over a 12-month period.",
  },
  {
    title: "12-Month Webinar Series Subscription",
    desc: "Continuous 2-hr webinar series covering AITech, domain topics, hands-on code walkthroughs, architecture blueprints, and development workflow perspectives.",
  },
];

const keyQuestions = [
  "How do I keep my employees' AI skills relevant & upgraded in a fast-changing tech landscape with the state-of-the-art shifting every month?",
  "How do I perennially keep my AI-trained workforce project/deployment ready, even if they are not currently working on an active AI project or pilot?",
  "How do I build a repetitive, scalable factory model that can continuously develop sufficiently skilled AI engineers (FDEs & beyond) on a constant basis, given natural talent attrition?",
];

const AIFDEAcademyToolkit = () => {
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
            Academy Toolkit &bull; Talent Factory
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          AI Forward Deployed Engineering Academy Toolkit for AI Talent Factory
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Content Body */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            Service Launch
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            EnterpriseSI is launching our new platform-based service: <span className="font-semibold text-neutral-900">AI Forward Deployed Engineering Academy Toolkit</span> for enterprises looking to build AI-native, AI-first engineering capabilities &mdash; tailored for IT Services Organizations and GCCs of global multinationals across BFSI, CPG, Oil &amp; Gas, Life Sciences, Healthcare, and beyond.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            What Challenges It Addresses
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            The traditional multi-decade approach of hiring external trainers to instruct employees in small classroom batches fails in an era of rapid AI disruption. With the capability and pace of AI reshaping entire industries, the demand for AI Forward Deployed Engineers far outstrips the scarce supply of external trainers with real-world agent implementation experience.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Furthermore, generic training curriculums fail to address the complex engineering and non-technical consulting skills required on actual enterprise AI deployments.
          </p>

          {/* Key Questions Addressed */}
          <h3 className="text-xl font-bold text-neutral-900 mt-8 mb-4">
            Key Questions Practice Leaders, CTOs &amp; HR L&amp;D Ask:
          </h3>
          <div className="space-y-4 my-6">
            {keyQuestions.map((q, index) => (
              <div
                key={index}
                className="border-l-4 border-[#1569a9] pl-5 py-2"
              >
                <p className="text-neutral-800 font-medium leading-relaxed text-sm md:text-base">
                  {q}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Our Solution: The In-House AI Talent Factory
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Enterprises need to build self-sustaining in-house AI training capabilities &mdash; human-led and augmented by a continuous hands-on labs and experimentation sandbox approach. This platform-driven model ensures the highest ROI and accelerates talent development.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-4">
            EnterpriseSI&apos;s platform provides an uninterrupted supply of practice labs covering critical topics across the agent development lifecycle:
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {coreTopics.map((topic, index) => (
              <span
                key={index}
                className="text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-3 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            What the AI FDE Academy Toolkit Provides (All-in-the-Box Solution)
          </h2>
          <div className="space-y-6 my-6">
            {toolkitFeatures.map((feat, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/50"
              >
                <h4 className="text-base font-bold text-neutral-900 mb-1.5">
                  {feat.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you are an enterprise looking to build an internal AI FDE Academy and in-house pool of AI FDE trainers (capable of leading 5&ndash;6 distinct AI training tracks), contact us to discuss the toolkit and schedule a demo:
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

export default AIFDEAcademyToolkit;

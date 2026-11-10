import { Link } from "react-router";

const agendas = [
  {
    step: "1",
    title: "Learn",
    highlight: "Agentic AI Playground & Skilling Programs",
    desc: "Structured hands-on labs and skilling programs for tech and business teams.",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    step: "2",
    title: "Experiment & Prototype",
    highlight: "AI Sandbox & Digital Twins",
    desc: "AI Sandbox with Agentic Digital Twins, Agentic Process Templates & Agentic Business Copilots.",
    badge: "bg-purple-100 text-purple-800",
  },
  {
    step: "3",
    title: "Pilot & Test Drive",
    highlight: "AI Coach & Pilot Accelerators",
    desc: "AI Coach Service & Agentic Pilot Accelerators cutting pilot time and cost by 50%+.",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    step: "4",
    title: "Implement / Adopt & Optimize",
    highlight: "Turnkey Implementation & Staffing",
    desc: "Enterprise turnkey project implementation, staffing, and continuous loop optimization.",
    badge: "bg-amber-100 text-amber-800",
  },
];

const industries = [
  "Banking & Financial Services",
  "Insurance",
  "Healthcare",
  "CPG / FMCG",
  "Oil & Gas",
  "Pharma / Life Sciences",
  "Professional Services (IT / Business Consulting)",
  "Others",
];

const AgenticBusinessAccelerationPlatform = () => {
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
            Agentic AI
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
          Agentic Business Acceleration Platform &amp; our platform driven &ldquo;AI Native Enterprise&rdquo; Transformation Loop
        </h1>

        {/* Date / Metadata */}
        <div className="text-sm text-neutral-500 mb-10 pb-8 border-b border-neutral-200">
          10th Nov 2026
        </div>

        {/* Content Body */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-10 mb-4">
            Platform Overview
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Our platform comprises two major modules:
          </p>

          <ul className="pl-6 space-y-3 mb-6 text-neutral-700 leading-relaxed list-disc">
            <li className="pl-1">
              <span className="font-semibold text-neutral-900">Agentic AI Playground:</span> Hands-on learning environments and skilling pathways.
            </li>
            <li className="pl-1">
              <span className="font-semibold text-neutral-900">Agentic AI Sandbox &amp; Pilot Accelerators:</span> Virtual enterprise sandbox environments with digital twins and pre-built process accelerators.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            The 4 Major AI Transformation Agendas
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Now our platform serves across 4 major AI transformation agendas:
          </p>

          {/* Simple Diagram */}
          <div className="my-8 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1569a9]">
                Transformation Loop Diagram
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                Continuous Cycle
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agendas.map((item) => (
                <div
                  key={item.step}
                  className="p-4 rounded-xl border bg-white shadow-2xs relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.badge}`}>
                        Agenda {item.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#1569a9] mb-2">
                      {item.highlight}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 leading-relaxed list-disc">
            <li className="pl-1">
              <span className="font-semibold text-neutral-900">Learn:</span> Via our Agentic AI Playground &amp; Skilling programs.
            </li>
            <li className="pl-1">
              <span className="font-semibold text-neutral-900">Experiment &amp; Prototype:</span> Via our AI Sandbox with Agentic Digital Twins, Agentic Process Templates &amp; Agentic Business Copilots.
            </li>
            <li className="pl-1">
              <span className="font-semibold text-neutral-900">Pilot &amp; Test drive:</span> Via our AI Coach Service &amp; Agentic Pilot Accelerators.
            </li>
            <li className="pl-1">
              <span className="font-semibold text-neutral-900">Implement / Adopt &amp; Optimize:</span> Via our AI Implementation (Project turnkey) &amp; Staffing services.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            If you are an Enterprise looking to:
          </h2>

          <div className="space-y-4 my-6">
            <div className="border-l-4 border-[#1569a9] pl-5 py-2">
              <h4 className="text-base font-semibold text-neutral-900 mb-1">
                Start / accelerate your AI Talent Transformation journey
              </h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Our <span className="font-semibold text-neutral-900">&ldquo;Learn&rdquo;</span> solutions may be a good start point.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-5 py-2">
              <h4 className="text-base font-semibold text-neutral-900 mb-1">
                Improve AI skills of employees beyond static courses
              </h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                If your employees are trained with self-learning video courses and instructor-led trainings, then our <span className="font-semibold text-neutral-900">&ldquo;Learn&rdquo;</span> and <span className="font-semibold text-neutral-900">&ldquo;Experiment &amp; Prototype&rdquo;</span> solutions may be a good start point. Your employees get access to hands-on labs, experimentation, prototyping &amp; you can build your AI Engineering lab &amp; AI Engineer pods within our platform.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-5 py-2">
              <h4 className="text-base font-semibold text-neutral-900 mb-1">
                Identify Agentic AI use cases and execute pilot implementations
              </h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Our <span className="font-semibold text-neutral-900">&ldquo;Pilot &amp; Test drive&rdquo;</span> solutions may be a good start point. Leverage our AI Coaches &amp; Pilot Accelerators to reduce lead time, cost &amp; efforts on Pilots by 50% or more.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-5 py-2">
              <h4 className="text-base font-semibold text-neutral-900 mb-1">
                Deploy Agentic apps into production
              </h4>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Our <span className="font-semibold text-neutral-900">&ldquo;Adopt &amp; Optimize&rdquo;</span> solutions may be a good start point. Leverage our AI Architecture &amp; Design, Implementation &amp; Support services to accelerate outcomes.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mt-12 mb-4">
            Relevant Sectors
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {industries.map((ind) => (
              <span
                key={ind}
                className="text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-3 py-1 rounded-full"
              >
                {ind}
              </span>
            ))}
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-6 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you are an organization belonging to sectors like Banking &amp; Financial Services, Insurance, Healthcare, CPG/ FMCG, Oil &amp; Gas, Pharma/ Life Sciences, Professional Services (IT/ Business Consulting), others and want to learn more on how our platform driven scalable AI Acceleration loop can fit into your AI initiatives, please DM or email us to setup a demo cum discussion:
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="mailto:abhiroop@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline"
              >
                abhiroop@enterprisesi.co
              </a>
              <a
                href="mailto:bd@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline"
              >
                bd@enterprisesi.co
              </a>
              <a
                href="mailto:sales@enterprisesi.co"
                className="text-[#1569a9] font-medium hover:underline"
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

export default AgenticBusinessAccelerationPlatform;

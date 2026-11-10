import { Link } from "react-router";

const agendas = [
  {
    step: "1",
    title: "Learn",
    highlight: "Agentic AI Playground & Skilling Programs",
    desc: "Via our Agentic AI Playground & Skilling programs.",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    step: "2",
    title: "Experiment & Prototype",
    highlight: "AI Sandbox & Digital Twins",
    desc: "Via our AI Sandbox with Agentic Digital Twins, Agentic Process Templates & Agentic Business Copilots.",
    badge: "bg-purple-100 text-purple-800",
  },
  {
    step: "3",
    title: "Pilot & Test Drive",
    highlight: "AI Coach & Pilot Accelerators",
    desc: "Via our AI Coach Service & Agentic Pilot Accelerators.",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    step: "4",
    title: "Implement / Adopt & Optimize",
    highlight: "Turnkey Implementation & Staffing",
    desc: "Via our AI Implementation (Project turnkey) & Staffing services.",
    badge: "bg-amber-100 text-amber-800",
  },
];

const enterprisePoints = [
  {
    goal: "Start / accelerate your AI Talent Transformation journey",
    text: 'Our "Learn" solutions may be a good start point.',
    borderColor: "border-[#1569a9]",
  },
  {
    goal: "Improve AI skills of employees trained with self learning video courses and Instructor led trainings",
    text: 'Our "Learn" and "Experiment & Prototype" solutions may be a good start point. Your employees get access to hands-on labs, experimentation, prototyping & you can build your AI Engineering lab & AI Engineer pods within our platform.',
    borderColor: "border-purple-600",
  },
  {
    goal: "Identify Agentic AI use cases and execute pilot implementations",
    text: 'Our "Pilot & Test drive" solutions may be a good start point. Leverage our AI Coaches & Pilot Accelerators to reduce lead time, cost & efforts on Pilots by 50% or more.',
    borderColor: "border-emerald-600",
  },
  {
    goal: "Deploy Agentic apps in production",
    text: 'Our "Adopt & Optimize" solutions may be a good start point. Leverage our AI Architecture & Design, Implementation & Support services to accelerate outcomes.',
    borderColor: "border-amber-600",
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
          Agentic Business Acceleration Platform &amp; our platform driven &ldquo;AI Native Enterprise&rdquo; Transformation Loop
        </h1>

        {/* Content Body */}
        <div className="text-justify text-base sm:text-lg">
          {/* Announcement */}
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
            On the auspicious occasion of Krishna Janmashtami, EnterpriseSI is excited to announce a major release, 3.0 of our Agentic Business Acceleration Platform built for Enterprises, to realize at scale, our AI Acceleration loop.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Platform Modules
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-4">
            Our platform comprises two major modules:
          </p>

          <ul className="pl-6 space-y-2 mb-8 text-neutral-800 text-base sm:text-lg leading-relaxed list-disc">
            <li className="pl-1">
              <span className="font-semibold text-neutral-900">Agentic AI Playground</span>
            </li>
            <li className="pl-1">
              <span className="font-semibold text-neutral-900">Agentic AI Sandbox &amp; Pilot Accelerators</span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            The 4 Major AI Transformation Agendas
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
            Now our platform serves across 4 major AI transformation agendas:
          </p>

          {/* Simple Diagram */}
          <div className="my-8 p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1569a9]">
                Transformation Loop Diagram
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                Continuous Cycle
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {agendas.map((item) => (
                <div
                  key={item.step}
                  className="p-3.5 sm:p-4 rounded-xl border bg-white shadow-2xs relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.badge}`}>
                        Agenda {item.step}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">
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

          <ul className="pl-6 space-y-3 mb-8 text-neutral-600 text-base sm:text-lg leading-relaxed list-disc">
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

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            If you are an Enterprise looking to:
          </h2>

          <div className="space-y-4 my-6">
            {enterprisePoints.map((item, index) => (
              <div key={index} className={`border-l-4 ${item.borderColor} pl-4 sm:pl-5 py-2`}>
                <h4 className="text-base sm:text-lg font-semibold text-neutral-900 mb-1">
                  {item.goal}
                </h4>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mt-8 sm:mt-10 md:mt-12 mb-3 sm:mb-4">
            Relevant Sectors
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {industries.map((ind) => (
              <span
                key={ind}
                className="text-xs sm:text-sm font-medium text-[#1569a9] bg-[#1569a9]/5 border border-[#1569a9]/20 px-2.5 py-1 sm:px-3 rounded-full"
              >
                {ind}
              </span>
            ))}
          </div>

          {/* Contact Block */}
          <div className="rounded-xl bg-[#1569a9]/5 border border-[#1569a9]/20 p-5 sm:p-6 my-8">
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-4">
              If you are an organization belonging to sectors like Banking &amp; Financial Services, Insurance, Healthcare, CPG/ FMCG, Oil &amp; Gas, Pharma/ Life Sciences, Professional Services (IT/ Business Consulting), others and want to learn more on how our platform driven scalable AI Acceleration loop can fit into your AI initiatives, please DM or email us to setup a demo cum discussion:
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

export default AgenticBusinessAccelerationPlatform;

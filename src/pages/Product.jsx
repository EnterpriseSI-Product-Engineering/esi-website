import { Rocket, Gamepad2, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const platformFeatures = [
  {
    icon: Gamepad2,
    title: "Agentic AI Builder Playground",
    description: "Interactive Development Environment",
    link: "/product/agentic-ai-builder-playground",
    p1: "No Proven solution to continuously develop AI talent at scale via hands-on / practical approach",
    p2: "CASH (Continuous, Accelerated, Scalable & Holistic) model of AI Talent Transformation deployed via learner & builder labs, continuous skill scoring & usage analytics.",
  },
  {
    icon: Zap,
    title: "Agentic AI Business Pilot Accelerators",
    description: "Ready-to-Deploy Business Solutions",
    link: "/product/agentic-ai-business-pilot-accelerators",
    p1: "No Proven solution to finding right AI use cases, accelerate/ improve pilots & pilot-to-production journeys (on factors- cost, efforts, success probability)",
    p2: "Production grade Agentic AI Use Case Pilot & Pilot-to-Implementation accelerators reducing cost, efforts & failure rate of AI pilots & implementations.",
    p3: "With AI Governance, Risk mgt & Safety leading practices baked-in.",
  },
];

const Product = () => {
  return (
    <div className="container mt-20 md:mt-0 mx-auto py-20 md:py-40 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Overview of Our Platform
      </h1>
      <p className="text-center text-base md:text-lg mt-4 text-neutral-600 max-w-4xl mx-auto">
        EnterpriseSI is building a ground breaking agentic AI acceleration
        platform that enables fortune 2000 enterprises in improving AI adoption
        & value realization at scale using our playground & pilot accelerators.
      </p>

      <div className="mt-16 md:mt-32 relative">
        {/* <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20">
          How We Support Agentic AI Accelerators
        </h1> */}

        <div className="relative max-w-5xl mx-auto">
          {/* Parent Node */}
          <div className="flex justify-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-[#1569a9]/40 bg-[#1569a9]/5 shadow-lg">
              {/* <Rocket className="w-6 h-6 text-[#1569a9]" /> */}
              <p className="text-base md:text-lg font-semibold text-[#1569a9] text-center">
                Problem Statements We Address
              </p>
            </div>
          </div>

          {/* Connecting Lines */}
          <svg
            className="absolute top-[60px] md:top-[72px] left-1/2 -translate-x-1/2 w-full h-24 hidden md:block"
            style={{ zIndex: 0 }}
          >
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="40"
              stroke="#1569a9"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="30%"
              y1="40"
              x2="70%"
              y2="40"
              stroke="#1569a9"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="30%"
              y1="40"
              x2="30%"
              y2="80"
              stroke="#1569a9"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <line
              x1="70%"
              y1="40"
              x2="70%"
              y2="80"
              stroke="#1569a9"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Child Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group h-full border-2 border-neutral-200 rounded-xl p-6 hover:border-[#1569a9]/40 hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                >
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    <div className="p-2 md:p-3 rounded-lg bg-[#1569a9]/10 border border-[#1569a9]/20">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#1569a9]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs md:text-sm text-[#1569a9] font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs text-neutral-500 font-semibold mb-2">
                        CHALLENGE
                      </p>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {feature.p1}
                      </p>
                    </div>

                    <div className="border-t border-neutral-200 pt-4">
                      <p className="text-xs text-neutral-500 font-semibold mb-2">
                        OUR SOLUTION
                      </p>
                      <p className="text-sm text-neutral-800 leading-relaxed mb-2">
                        {feature.p2}
                      </p>
                      {feature.p3 && (
                        <p className="text-sm text-neutral-800 leading-relaxed">
                          {feature.p3}
                        </p>
                      )}
                    </div>
                  </div>

                  <Link to={feature.link} className="block mt-4">
                    <button className="w-full cursor-pointer px-4 py-2.5 bg-[#1569a9] hover:bg-[#1569a9]/90 text-white rounded-lg text-sm md:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2">
                      <span className="hidden sm:inline">Explore {feature.title}</span>
                      <span className="sm:hidden">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import {
  Sparkles,
  AlertTriangle,
  Target,
  Zap,
  Shield,
  Rocket,
  Globe,
  Settings,
  TrendingUp,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";
import FocusAreas from "@/components/products/FocusAreas";

const AgenticAIBusinessPilotAccelerators = () => {
  return (
    <div className="container mx-auto py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto text-center pt-8 md:pt-14 pb-12 md:pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full bg-slate-100 border border-slate-200">
          <Sparkles className="w-4 h-4 text-esi-primary" />
          <span className="text-xs md:text-sm font-semibold text-slate-700">
            AI PILOT ACCELERATORS
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block mb-2 text-zinc-800">Agentic AI Pilot</span>
          <span className="text-zinc-800">Accelerator Suite</span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
          Create Successful AI Pilot & Pilot-to-Implementation journeys with our
          Production-Ready AI Business Copilots & Agents
        </p>
      </div>

      {/* Problem Statement Section */}
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
            The Challenge
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <GradientCard className="group h-full hover:border-[#9333ea]/30 transition-all duration-300 rounded-xl">
            <div className="p-4 md:p-6 h-full flex flex-col gap-3 md:gap-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="inline-flex p-2 md:p-2.5 rounded-lg border bg-[#9333ea]/10 border-[#9333ea]/20">
                  <AlertTriangle
                    className="w-4 h-4 md:w-5 md:h-5 text-[#9333ea]"
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-800 mb-2">
                    Industry Reality
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-sm text-zinc-600 leading-relaxed">
                <p>
                  Enterprises have limited understanding of AI & its business
                  applications, especially when this technology is evolving
                  rapidly.
                </p>
                <p>
                  According to an Aug 2025 MIT report,{" "}
                  <span className="text-[#9333ea] font-semibold">
                    95% of Generative AI Pilots are failing
                  </span>{" "}
                  to demonstrate any returns.
                </p>
                <p>
                  Despite billions invested in AI, business executives remain
                  wary of pilot risks and uncertain returns.
                </p>
              </div>
            </div>
          </GradientCard>

          <GradientCard className="group h-full hover:border-[#9333ea]/30 transition-all duration-300 rounded-xl">
            <div className="p-4 md:p-6 h-full flex flex-col gap-3 md:gap-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="inline-flex p-2 md:p-2.5 rounded-lg border bg-[#9333ea]/10 border-[#9333ea]/20">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-[#9333ea]" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-800 mb-2">
                    Key Gaps
                  </h3>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-zinc-600 leading-relaxed list-disc list-inside">
                <li>
                  Lack of combined skills in business processes, enterprise
                  data, AI, and software development
                </li>
                <li>
                  Lack of pre-built AI app blueprints that reduce time-to-value
                  in pilots
                </li>
                <li>
                  Pilots lack production-grade architecture, becoming throwaway
                  prototypes
                </li>
              </ul>
            </div>
          </GradientCard>
        </div>
      </div>

      {/* Our Solution Section */}
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
            Our Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              icon: Rocket,
              title: "Pre-built Production Grade Apps",
              description:
                "Production-grade Agentic AI apps addressing top 5-6 high-value business use cases for specific functions and industries.",
            },
            {
              icon: Globe,
              title: "Deployable Images",
              description:
                "Ready-to-deploy app images that can be hosted in customer's cloud or on-premise environments.",
            },
            {
              icon: Settings,
              title: "Customization Interface",
              description:
                "Business-friendly interface to customize accelerators for unique processes, data, and integration needs.",
            },
          ].map((solution, index) => {
            const Icon = solution.icon;
            return (
              <GradientCard
                key={index}
                className="group h-full hover:border-[#9333ea]/30 transition-all duration-300 rounded-xl"
              >
                <div className="p-4 md:p-6 h-full flex flex-col gap-3 md:gap-4">
                  <div className="inline-flex p-2 md:p-2.5 rounded-lg border bg-[#9333ea]/10 border-[#9333ea]/20 w-fit">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#9333ea]" strokeWidth={2} />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-zinc-800">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* Focus Areas Section */}
      <FocusAreas />

      {/* Business Benefits Section */}
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-800 mb-4">
            Business Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              icon: TrendingUp,
              title: "50%+ Cost & Time Reduction",
              description:
                "Dramatically reduce the cost and effort required for AI pilots with pre-built accelerators",
            },
            {
              icon: Shield,
              title: "50%+ Risk Reduction",
              description:
                "Minimize pilot failure risk with proven ROI and business value demonstration frameworks",
            },
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <GradientCard
                key={index}
                className="group h-full hover:border-[#1569a9]/30 transition-all duration-300 rounded-xl"
              >
                <div className="p-4 md:p-6 h-full flex flex-col gap-3 md:gap-4">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="inline-flex p-2 md:p-2.5 rounded-lg border bg-[#1569a9]/10 border-[#1569a9]/20">
                      <Icon
                        className="w-4 h-4 md:w-5 md:h-5 text-[#1569a9]"
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-zinc-800 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto py-12 md:py-16">
        <GradientCard className="group hover:border-[#1569a9]/30 transition-all duration-300 rounded-xl">
          <div className="text-center space-y-4 md:space-y-6 py-8 md:py-12 px-4 md:px-6">
            <div className="inline-block">
              <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-[#1569a9]" />
            </div>

            <div className="space-y-3 md:space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-800">
                Ready to Transform Your Business?
              </h3>
              <p className="text-base md:text-lg text-zinc-600">
                To learn more about our Business Role & process workflow based
                AI Copilots & Agents,{" "}
                <a
                  href="https://master.d1jvuujmp5rpat.amplifyapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1569a9] font-semibold hover:text-[#0d5a8f] transition-colors duration-300"
                >
                  click here
                  <ArrowRight className="w-4 h-4" />
                </a>
              </p>
            </div>

            <a
              href="https://agents.enterprisesi.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1569a9] to-[#0d5a8f] hover:opacity-90 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Our Solutions
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </GradientCard>
      </div>
    </div>
  );
};

export default AgenticAIBusinessPilotAccelerators;

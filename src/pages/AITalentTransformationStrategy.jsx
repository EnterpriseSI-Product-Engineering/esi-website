import { Sparkles, AlertTriangle, Lightbulb, Users, Target, BarChart3, Zap, Settings, TrendingUp } from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";

const areas = [
  {
    icon: Target,
    title: "AI Native Scoring & Measurement",
    description:
      "Building AI native scoring & measurement for your organization across key employee categories",
    gradient: "from-[#9333ea] to-[#1569a9]",
  },
  {
    icon: Users,
    title: "Learning Paths & Journeys",
    description:
      "Building Learning paths and Journeys for key employee personas for outcome driven AI Skill development.",
    gradient: "from-[#1569a9] to-[#06b6d4]",
  },
  {
    icon: BarChart3,
    title: "Competency & KRA Mapping",
    description:
      "Mapping learning journeys to competency development goals/ KRAs with metrics data",
    gradient: "from-[#06b6d4] to-[#ec4899]",
  },
];

const benefits = [
  "Leverage EnterpriseSI's 10+ years of expertise in building global AI practices.",
  "Proven track record of advising 20+ enterprise customers on AI transformation strategies.",
  "Measurable results through execution of structured AI learning journeys.",
  "Platform-driven approach for scalability, personalization, and performance tracking.",
  "Holistic enablement model: Continuous, Accelerated, Scalable, and Holistic (CASH).",
];

const AITalentTransformationStrategy = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="max-w-5xl mx-auto text-center mb-16 mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Sparkles className="w-4 h-4 text-[#1569a9]" />
          <span className="text-sm font-semibold text-[#1569a9] uppercase tracking-wider">
            Talent Transformation
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span>AI Talent Transformation Strategy</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
          EnterpriseSI's Founding Team brings 10+ years experience in building
          Global AI practices. Over the last 3 years, we've advised 20+
          Enterprise customers on outcome-oriented AI Talent Transformation
          Strategies with measurable results.
        </p>
      </div>

      {/* Challenge & Approach Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* The Challenge */}
          <GradientCard className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  The Challenge
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                  AI is rapidly redefining the enterprise workforce landscape,
                  but many organizations struggle to align employee skill
                  transformation with business outcomes.
                </p>
                <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                  Generic online courses or ad-hoc trainings fail to create
                  measurable impact in competency development and AI technology
                  adoption.
                </p>
              </div>
            </div>
          </GradientCard>

          {/* Our Approach */}
          <GradientCard className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#1569a9] shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-neutral-900 group-hover:bg-gradient-to-r group-hover:from-[#06b6d4] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Our Approach
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                  We leverage our proprietary{" "}
                  <strong className="bg-gradient-to-r from-[#06b6d4] to-[#1569a9] bg-clip-text text-transparent">
                    CASH model
                  </strong>{" "}
                  (Continuous, Accelerated, Scalable, Holistic) to deliver
                  measurable workforce transformation outcomes.
                </p>
                <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                  Through our platform, tools, and AI programs, we enable
                  organizations with structured learning journeys, scoring
                  mechanisms, and competency mapping.
                </p>
              </div>
            </div>
          </GradientCard>
        </div>
      </div>

      {/* Areas Where We Can Support Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Areas Where We Can{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Support
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <GradientCard
                key={index}
                className="group h-full text-center transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
              >
                <div className="p-6">
                  <div className="mx-auto mb-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${area.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 w-fit mx-auto`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {area.title}
                  </h3>
                  <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                    {area.description}
                  </p>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* Why Choose Our Strategy Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Strategy
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <GradientCard
              key={index}
              className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#9333ea] to-[#1569a9] shadow-lg flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                    {benefit}
                  </p>
                </div>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>

      {/* CASH Model & Execution Support Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <GradientCard className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl">
            <div className="p-8 text-center">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#9333ea] to-[#1569a9] shadow-lg w-fit mx-auto mb-4">
                <Settings className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                CASH Model Implementation
              </h3>
              <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                Our consulting work leverages our CASH (Continuous, Accelerated, Scalable, Holistic) model with a unique platform-driven approach.
              </p>
            </div>
          </GradientCard>

          <GradientCard className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl">
            <div className="p-8 text-center">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-[#06b6d4] to-[#ec4899] shadow-lg w-fit mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#06b6d4] group-hover:to-[#ec4899] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Complete Execution Support
              </h3>
              <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                Via our platform and AI programs, we provide tools, technologies, enablement mechanisms, processes and data for executing AI Talent Transformation strategies.
              </p>
            </div>
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default AITalentTransformationStrategy;

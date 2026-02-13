import { Sparkles, Users, Target, TrendingUp, Layers, CheckCircle, Clock, BookOpen, Brain, Award, Zap } from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";

const programs = [
  {
    sno: 1,
    program: "Generative and Agentic AI for Sr Business Leaders",
    personas: "CEO, CFO, COO, SVP, VP, AVP, Sr Director, Director levels",
    duration: "16 hrs",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Users,
  },
  {
    sno: 2,
    program: "Generative and Agentic AI for All Business Practitioners",
    personas:
      "All profiles – middle and junior level – non tech/ business domains",
    duration: "16 hrs",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Target,
  },
  {
    sno: 3,
    program:
      "Generative and Agentic AI for Finance & Accounting, Auditing Practitioners",
    personas:
      "VP Finance, Financial Controller, Director- FP&A, Sr Analyst/ Consultant",
    duration: "8 hrs",
    gradient: "from-[#06b6d4] to-[#ec4899]",
    icon: TrendingUp,
  },
  {
    sno: 4,
    program: "Generative and Agentic AI for Supply Chain Practitioners",
    personas:
      "VP Supply Chain, Supply Chain Managers, Supply Chain Analysts/ Consultants",
    duration: "8 hrs",
    gradient: "from-[#ec4899] to-[#9333ea]",
    icon: Layers,
  },
  {
    sno: 5,
    program: "Generative and Agentic AI for HR Practitioners",
    personas:
      "VP HR, Director HR, HR Business partners, Payroll SMEs, Recruiters",
    duration: "8 hrs",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Users,
  },
  {
    sno: 6,
    program: "Generative and Agentic AI for Customer Service Practitioners",
    personas: "Customer Service Organization- Sr and mid-level associates",
    duration: "8 hrs",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: CheckCircle,
  },
];

const usps = [
  {
    title: "Research-Based Content",
    description:
      "Content is well researched, with monthly updates to keep it latest.",
    icon: BookOpen,
    gradient: "from-[#9333ea] to-[#1569a9]",
  },
  {
    title: "Domain Expertise",
    description:
      "Experience in AI Consulting, pilots, and domain expertise embedded into programs.",
    icon: Brain,
    gradient: "from-[#1569a9] to-[#06b6d4]",
  },
  {
    title: "Expert Instructors",
    description:
      "Mentors/Instructors are experts in AI, Enterprise Apps, and business domains.",
    icon: Award,
    gradient: "from-[#06b6d4] to-[#ec4899]",
  },
  {
    title: "Hands-on Learning",
    description:
      "Plenty of demos and hands-on labs for practical exposure and better retention.",
    icon: Zap,
    gradient: "from-[#ec4899] to-[#9333ea]",
  },
];

const BusinessAIPrograms = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="max-w-5xl mx-auto text-center mb-16 mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Sparkles className="w-4 h-4 text-esi-primary" />
          <span className="text-sm font-semibold text-esi-primary uppercase tracking-wider">
            AI Training Programs
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span>Business AI Workshops</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
          We have pioneered AI Enablement workshops and skilling programs,
          training thousands of senior executives and leaders across Fortune
          2000 enterprises on Generative and Agentic AI over the last 2.5 years.
        </p>
      </div>

      {/* Programs Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Most Popular{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <GradientCard
                key={program.sno}
                className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${program.gradient} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {program.program}
                  </h3>
                  <p className="text-sm text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                    <strong>Target Audience:</strong> {program.personas}
                  </p>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* Why Choose Our Programs Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <GradientCard
                key={index}
                className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${usp.gradient} shadow-lg flex-shrink-0`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {usp.title}
                      </h3>
                      <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors duration-300">
                        {usp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessAIPrograms;

import {
  BookOpen,
  Clock,
  Users,
  Code,
  Cpu,
  Cloud,
  Zap,
  ArrowRight,
} from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";
import { Link } from "react-router";

const programs = [
  {
    sno: 1,
    name: "AI Forward Deployed Architect",
    personas: "AI Forward Deployed Engineers, Solution Architects, Technical Leads, Enterprise Architects",
    duration: "80 hrs",
    href: "/solutions/ai-forward-deployed-architect",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Cpu,
  },
];

const usps = [
  {
    title: "Research-Based Content",
    description:
      "Content is well researched, with monthly updates to ensure the latest tools, models, and practices are included.",
    icon: BookOpen,
    gradient: "from-[#9333ea] to-[#1569a9]",
  },
  {
    title: "Real-World Expertise",
    description:
      "Real-world consulting experience in AI pilots and domain projects gives our programs a clear competitive edge.",
    icon: Zap,
    gradient: "from-[#1569a9] to-[#06b6d4]",
  },
  {
    title: "Expert Instructors",
    description:
      "Mentors/Instructors are seasoned professionals in AI, Enterprise Applications, and technical domains.",
    icon: Users,
    gradient: "from-[#06b6d4] to-[#ec4899]",
  },
  {
    title: "Hands-on Labs",
    description:
      "Extensive demos and hands-on labs enrich the learning experience for stronger retention and practical exposure.",
    icon: Code,
    gradient: "from-[#ec4899] to-[#9333ea]",
  },
];

const AITechnicalPrograms = () => {
  return (
    <div className="container mx-auto px-4 py-20 md:py-32">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto text-center mb-16 mt-16 md:mt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <Cloud className="w-4 h-4 text-[#1569a9]" />
          <span className="text-sm font-semibold text-[#1569a9] uppercase tracking-wider">
            AI Acceleration
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-950">
          AI Technical Programs
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
          Develop the architecture and engineering skills to bring AI solutions
          into real-world environments. Our programs are designed for{" "}
          <strong>technical practitioners</strong> who want to build and deploy
          production-grade AI systems.
        </p>
      </div>

      {/* Programs Section */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Specialized AI training designed for architects, engineers, and
            technical leaders
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <GradientCard
                key={program.sno}
                className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Icon & Duration row */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${program.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  {/* Program title */}
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {program.name}
                  </h3>

                  {/* Personas */}
                  <div className="flex items-start gap-2 mb-6">
                    <Users className="w-4 h-4 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {program.personas}
                    </p>
                  </div>

                  {/* Start Learning button — centered */}
                  <div className="mt-auto flex justify-center">
                    <Link
                      to={program.href}
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#1569a9] to-[#06b6d4] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 group-hover:scale-105"
                    >
                      Start Learning
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* Why Choose Our Programs Section */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Our{" "}
            <span className="bg-gradient-to-r from-[#9333ea] to-[#1569a9] bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Experience the difference with our research-backed, hands-on
            approach to AI education
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <GradientCard
                key={index}
                className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${usp.gradient} shadow-lg flex-shrink-0 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-[#9333ea] group-hover:to-[#1569a9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {usp.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
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

export default AITechnicalPrograms;
import { BookOpen, Clock, Users, Code, Cpu, Cloud, Zap } from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";

const programs = [
  {
    sno: 1,
    program: "Generative and Agentic AI for Sr. Technical Leaders",
    personas:
      "CTO, Head of Engineering, Practice Leader, SVP, VP, AVP, Sr. Director, Director",
    duration: "24 hrs",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Users,
  },
  {
    sno: 2,
    program:
      "Generative and Agentic AI with AWS Bedrock (Claude, Amazon Nova, Llama)",
    personas: "AWS SMEs, AI Architects, ML Engineers, Data Scientists",
    duration: "40 hrs",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Cloud,
  },
  {
    sno: 3,
    program:
      "Generative and Agentic AI with GCP Vertex AI (Gemini, Gemma, Llama)",
    personas: "GCP SMEs, AI Architects, ML Engineers, Data Scientists",
    duration: "40 hrs",
    gradient: "from-[#06b6d4] to-[#ec4899]",
    icon: Cloud,
  },
  {
    sno: 4,
    program:
      "Generative and Agentic AI with Azure AI Foundry (OpenAI, Microsoft Phi, Llama)",
    personas: "Azure SMEs, AI Architects, ML Engineers, Data Scientists",
    duration: "40 hrs",
    gradient: "from-[#ec4899] to-[#9333ea]",
    icon: Cloud,
  },
  {
    sno: 5,
    program: "Generative and Agentic AI with OpenAI Technologies",
    personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
    duration: "24 hrs",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Cpu,
  },
  {
    sno: 6,
    program: "Generative and Agentic AI with Anthropic Technologies",
    personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
    duration: "24 hrs",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Cpu,
  },
  {
    sno: 7,
    program: "Generative and Agentic AI with Mistral Technologies",
    personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
    duration: "24 hrs",
    gradient: "from-[#06b6d4] to-[#ec4899]",
    icon: Cpu,
  },
  {
    sno: 8,
    program: "Agentic AI & RAG Engineering – Hands-on",
    personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
    duration: "40–60 hrs",
    gradient: "from-[#ec4899] to-[#9333ea]",
    icon: Code,
  },
  {
    sno: 9,
    program: "Generative and Agentic AI for Software Testers",
    personas:
      "Software Testing Practice Lead, Pre-sales Consultants, Sr Testers, PMs, Delivery Leads",
    duration: "45 hrs",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Code,
  },
  {
    sno: 10,
    program:
      "Agentic & Vibe Coding with AI SDLC Tools (GitHub Copilot, Cursor, Google AI Studio, Replit, Lovable.dev)",
    personas:
      "Architects, Sr Developers, Pre-sales Consultants, Project Managers, Delivery Leads",
    duration: "40 hrs",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Code,
  },
];

const usps = [
  "Content is well researched, with monthly updates to ensure the latest tools, models, and practices are included.",
  "Real-world consulting experience in AI pilots and domain projects gives our programs a clear competitive edge.",
  "Mentors/Instructors are seasoned professionals in AI, Enterprise Applications, and technical domains.",
  "Extensive demos and hands-on labs enrich the learning experience for stronger retention and practical exposure.",
];

const TechnicalAIPrograms = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="max-w-5xl mx-auto text-center mb-20 mt-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <BookOpen className="h-5 w-5 text-esi-primary" />
          <span className="text-sm font-semibold text-[#1569a9] uppercase tracking-wider">
            Professional AI Training
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span>Technical AI Workshops</span>
        </h1>
        <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
          Pioneering AI enablement for <strong>Fortune 2000 enterprises</strong>
          . Training CTOs, Engineering Leaders, Architects & Developers on
          Generative and Agentic AI for <strong>2.5+ years</strong>.
        </p>
      </div>

      {/* Programs Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Most Popular Programs
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Comprehensive AI training programs designed for different
            technical roles and expertise levels
          </p>
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
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-[#06b6d4] mt-1 flex-shrink-0" />
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {program.personas}
                    </p>
                  </div>
                </div>
              </GradientCard>
            );
          })}
        </div>
      </div>

      {/* Why Choose Our Programs Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Our Programs
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Experience the difference with our research-backed, hands-on
            approach to AI education
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {usps.map((usp, index) => (
            <GradientCard
              key={index}
              className="group h-full transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 rounded-xl"
            >
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#1569a9] to-[#06b6d4] p-3 rounded-xl shadow-lg flex-shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-neutral-600 leading-relaxed flex-1 group-hover:text-neutral-700 transition-colors duration-300">
                    {usp}
                  </p>
                </div>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalAIPrograms;

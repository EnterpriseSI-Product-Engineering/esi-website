import {
  BookOpen,
  Clock,
  Users,
  Code,
  Cpu,
  Cloud,
  Zap,
  ArrowRight,
  Shield,
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
  {
    sno: 2,
    name: "Generative and Agentic AI for Sr. Technical Leaders",
    personas: "CTO, Head of Engineering, Practice Leader, SVP, VP, AVP, Sr. Director, Director",
    duration: "24 hrs",
    href: "#",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Users,
  },
  {
    sno: 3,
    name: "Generative and Agentic AI with AWS Bedrock (Claude, Amazon Nova, Llama)",
    personas: "AWS SMEs, AI Architects, ML Engineers, Data Scientists",
    duration: "40 hrs",
    href: "#",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Cloud,
  },
  {
    sno: 4,
    name: "Generative and Agentic AI with GCP Vertex AI (Gemini, Gemma, Llama)",
    personas: "GCP SMEs, AI Architects, ML Engineers, Data Scientists",
    duration: "40 hrs",
    href: "#",
    gradient: "from-[#06b6d4] to-[#ec4899]",
    icon: Cloud,
  },
  {
    sno: 5,
    name: "Generative and Agentic AI with Azure AI Foundry (OpenAI, Microsoft Phi, Llama)",
    personas: "Azure SMEs, AI Architects, ML Engineers, Data Scientists",
    duration: "40 hrs",
    href: "#",
    gradient: "from-[#ec4899] to-[#9333ea]",
    icon: Cloud,
  },
  {
    sno: 6,
    name: "Generative and Agentic AI with OpenAI Technologies",
    personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
    duration: "24 hrs",
    href: "#",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Cpu,
  },
  {
    sno: 7,
    name: "Generative and Agentic AI with Anthropic Technologies",
    personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
    duration: "24 hrs",
    href: "#",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Cpu,
  },
  {
    sno: 8,
    name: "Generative and Agentic AI with Mistral Technologies",
    personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
    duration: "24 hrs",
    href: "#",
    gradient: "from-[#06b6d4] to-[#ec4899]",
    icon: Cpu,
  },
  {
    sno: 9,
    name: "Agentic AI & RAG Engineering – Hands-on",
    personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
    duration: "40–60 hrs",
    href: "#",
    gradient: "from-[#ec4899] to-[#9333ea]",
    icon: Code,
  },
  {
    sno: 10,
    name: "Generative and Agentic AI for Software Testers",
    personas: "Software Testing Practice Lead, Pre-sales Consultants, Sr Testers, PMs, Delivery Leads",
    duration: "45 hrs",
    href: "#",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Code,
  },
  {
    sno: 11,
    name: "Agentic & Vibe Coding with AI SDLC Tools (GitHub Copilot, Cursor, Google AI Studio, Replit, Lovable.dev)",
    personas: "Architects, Sr Developers, Pre-sales Consultants, Project Managers, Delivery Leads",
    duration: "40 hrs",
    href: "#",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Code,
  },
  {
    sno: 12,
    name: "AI Forward Deployed Engineer- Banking & Financial Services",
    personas: "AI Forward Deployed Engineers, BFSI Domain SMEs, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#06b6d4] to-[#ec4899]",
    icon: Cpu,
  },
  {
    sno: 13,
    name: "AI Forward Deployed Engineer- Healthcare",
    personas: "AI Forward Deployed Engineers, Healthcare Domain SMEs, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#ec4899] to-[#9333ea]",
    icon: Cpu,
  },
  {
    sno: 14,
    name: "AI Forward Deployed Engineer- Consumer (CPG, Retail, Ecommerce)",
    personas: "AI Forward Deployed Engineers, Retail/CPG Domain SMEs, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Cpu,
  },
  {
    sno: 15,
    name: "AI Forward Deployed Engineer- Oil & Gas",
    personas: "AI Forward Deployed Engineers, Energy Domain SMEs, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Cpu,
  },
  {
    sno: 16,
    name: "AI Forward Deployed Engineer- Life sciences/ Pharma",
    personas: "AI Forward Deployed Engineers, Pharma Domain SMEs, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#06b6d4] to-[#ec4899]",
    icon: Cpu,
  },
  {
    sno: 17,
    name: "AI Forward Deployed Engineer- Anthropic Claude & AWS",
    personas: "AI Forward Deployed Engineers, AWS Architects, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#ec4899] to-[#9333ea]",
    icon: Cloud,
  },
  {
    sno: 18,
    name: "AI Forward Deployed Engineer- Google Gemini & GCP",
    personas: "AI Forward Deployed Engineers, GCP Architects, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Cloud,
  },
  {
    sno: 19,
    name: "AI Forward Deployed Engineer- OpenAI & Microsoft Azure",
    personas: "AI Forward Deployed Engineers, Azure Architects, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Cloud,
  },
  {
    sno: 20,
    name: "AI Forward Deployed Engineer- Open weight models & local AI",
    personas: "AI Forward Deployed Engineers, ML Engineers, Solution Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#06b6d4] to-[#ec4899]",
    icon: Cpu,
  },
  {
    sno: 21,
    name: "AI Business Operator",
    personas: "Business Analysts, Operations Managers, Product Managers",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#ec4899] to-[#9333ea]",
    icon: Users,
  },
  {
    sno: 22,
    name: "AI Governance, Risk & Compliance Practitioner",
    personas: "Compliance Officers, Risk Managers, Security Architects",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#9333ea] to-[#1569a9]",
    icon: Shield,
  },
  {
    sno: 23,
    name: "AI Strategist - Sr Leaders",
    personas: "CXOs, VP of Strategy, Innovation Leaders, Directors",
    duration: "To be announced",
    href: "#",
    gradient: "from-[#1569a9] to-[#06b6d4]",
    icon: Users,
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
    icon: Cpu,
    gradient: "from-[#1569a9] to-[#06b6d4]",
  },
  {
    title: "Seasoned Instructors",
    description:
      "Mentors/Instructors are seasoned professionals in AI, Enterprise Applications, and technical domains.",
    icon: Users,
    gradient: "from-[#06b6d4] to-[#ec4899]",
  },
  {
    title: "Hands-On Experience",
    description:
      "Extensive demos and hands-on labs enrich the learning experience for stronger retention and practical exposure.",
    icon: Zap,
    gradient: "from-[#ec4899] to-[#9333ea]",
  },
];

const AITechnicalPrograms = () => {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-5xl mx-auto text-center mb-20 mt-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-[#1569a9]/5 border border-[#1569a9]/20">
          <BookOpen className="h-5 w-5 text-esi-primary" />
          <span className="text-sm font-semibold text-[#1569a9] uppercase tracking-wider">
            Professional AI Training
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span>AI Technical Programs</span>
        </h1>
        <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
          Pioneering AI enablement for <strong>Fortune 2000 enterprises</strong>
          . Training CTOs, Engineering Leaders, Architects & Developers on
          Generative and Agentic AI for <strong>2.5+ years</strong>.
        </p>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Most Popular Programs
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Comprehensive AI training programs designed for different technical
            roles and expertise levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            
            const cardContent = (
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
                    {program.name}
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

            if (program.href !== "#") {
              return (
                <Link to={program.href} key={program.sno} className="block h-full cursor-pointer">
                  {cardContent}
                </Link>
              );
            }

            return <div key={program.sno}>{cardContent}</div>;
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
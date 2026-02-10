import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Zap, BookOpen } from "lucide-react";

const TechnicalAIPrograms = () => {
  const programs = [
    {
      sno: 1,
      program: "Generative and Agentic AI for Sr Technical Leaders",
      personas:
        "CTO, Head of Engineering, Practice Leader, SVP, VP, AVP, Sr Director, Director",
      duration: "24 hrs",
    },
    {
      sno: 2,
      program:
        "Generative and Agentic AI with AWS Bedrock (Claude, Amazon Nova, Llama)",
      personas: "AWS SMEs, AI Architects, ML Engineers, Data Scientists",
      duration: "40 hrs",
    },
    {
      sno: 3,
      program:
        "Generative and Agentic AI with GCP Vertex AI (Gemini, Gemma, Llama)",
      personas: "GCP SMEs, AI Architects, ML Engineers, Data Scientists",
      duration: "40 hrs",
    },
    {
      sno: 4,
      program:
        "Generative and Agentic AI with Azure AI Foundry (OpenAI, Microsoft Phi, Llama)",
      personas: "Azure SMEs, AI Architects, ML Engineers, Data Scientists",
      duration: "40 hrs",
    },
    {
      sno: 5,
      program: "Generative and Agentic AI with OpenAI Technologies",
      personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
      duration: "24 hrs",
    },
    {
      sno: 6,
      program: "Generative and Agentic AI with Anthropic Technologies",
      personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
      duration: "24 hrs",
    },
    {
      sno: 7,
      program: "Generative and Agentic AI with Mistral Technologies",
      personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
      duration: "24 hrs",
    },
    {
      sno: 8,
      program: "Agentic AI & RAG Engineering – Hands-on",
      personas: "AI Architects, Sr Developers, ML Engineers, Data Scientists",
      duration: "40–60 hrs",
    },
    {
      sno: 9,
      program: "Generative and Agentic AI for Software Testers",
      personas:
        "Software Testing Practice Lead, Pre-sales Consultants, Sr Testers, PMs, Delivery Leads",
      duration: "45 hrs",
    },
    {
      sno: 10,
      program:
        "Agentic & Vibe Coding with AI SDLC Tools (GitHub Copilot, Cursor, Google AI Studio, Replit, Lovable.dev)",
      personas:
        "Architects, Sr Developers, Pre-sales Consultants, Project Managers, Delivery Leads",
      duration: "40 hrs",
    },
  ];

  const usps = [
    "Content is well researched, with monthly updates to ensure the latest tools, models, and practices are included.",
    "Real-world consulting experience in AI pilots and domain projects gives our programs a clear competitive edge.",
    "Mentors/Instructors are seasoned professionals in AI, Enterprise Applications, and technical domains.",
    "Extensive demos and hands-on labs enrich the learning experience for stronger retention and practical exposure.",
  ];

  return (
    <div>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 mt-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 px-4 py-2 rounded-full mb-6">
            <BookOpen className="h-5 w-5 text-ai-purple" />
            <span className="text-sm font-medium text-ai-purple">
              Professional AI Training
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Technical AI Workshops
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Pioneering AI enablement for{" "}
            <strong>Fortune 2000 enterprises</strong>. Training CTOs,
            Engineering Leaders, Architects & Developers on Generative and
            Agentic AI for <strong>2.5+ years</strong>.
          </p>
        </div>

        {/* Programs Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Most Popular Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI training programs designed for different
              technical roles and expertise levels
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {programs.map((program) => (
              <Card
                key={program.sno}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border bg-gradient-to-br from-background via-background to-ai-blue/5"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-ai-purple/10 text-ai-purple hover:bg-ai-purple/20"
                    >
                      #{program.sno.toString().padStart(2, "0")}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-ai-blue transition-colors">
                    {program.program}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-ai-cyan mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {program.personas}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* USPs */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our research-backed, hands-on
              approach to AI education
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {usps.map((usp, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border bg-gradient-to-br from-background via-background to-ai-cyan/5"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-ai-blue to-ai-cyan p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {usp}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechnicalAIPrograms;

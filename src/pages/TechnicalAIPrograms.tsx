import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";

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
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Technical AI Programs
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We have pioneered AI Enablement workshops and skilling programs,
            training{" "}
            <strong>
              CTOs, Heads of Engineering, Architects, Developers, and Technical
              Leaders
            </strong>{" "}
            across Fortune 2000 enterprises on Generative and Agentic AI over
            the last 2.5 years.
          </p>
        </div>

        {/* Programs Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Most Popular Programs
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-gradient-to-r from-ai-purple/10 to-ai-blue/10">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                    S No
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                    Program
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                    Personas
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.sno} className="hover:bg-muted transition-colors">
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      {p.sno}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium">
                      {p.program}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      {p.personas}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-sm">
                      {p.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* USPs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {usps.map((usp, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-ai-blue/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-ai-blue flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{usp}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <EmailSubscription />
      </main>
    </div>
  );
};

export default TechnicalAIPrograms;

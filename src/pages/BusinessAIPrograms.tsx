import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, CheckCircle, Users, Brain, Layers } from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";

const BusinessAIPrograms = () => {
  const programs = [
    {
      sno: 1,
      program: "Generative and Agentic AI for Sr Business Leaders",
      personas:
        "Business- CEO, CFO, COO, SVP, VP, AVP, Sr Director, Director levels",
      duration: "16 hrs",
    },
    {
      sno: 2,
      program: "Generative and Agentic AI for All Business Practitioners",
      personas:
        "All profiles – middle and junior level – non tech/ business domains",
      duration: "16 hrs",
    },
    {
      sno: 3,
      program:
        "Generative and Agentic AI for Finance & Accounting, Auditing Practitioners",
      personas:
        "VP Finance, Financial Controller, Director- FP&A, Sr Analyst/ Consultant, SAP FICO Consultant",
      duration: "8 hrs",
    },
    {
      sno: 4,
      program: "Generative and Agentic AI for Supply Chain Practitioners",
      personas:
        "VP Supply Chain, Supply Chain Managers, Supply Chain Analysts/ Consultants",
      duration: "8 hrs",
    },
    {
      sno: 5,
      program: "Generative and Agentic AI for HR Practitioners",
      personas:
        "VP HR, Director HR, HR Business partners, Payroll SMEs, Recruiters, Compensation & Benefits Team",
      duration: "8 hrs",
    },
    {
      sno: 6,
      program: "Generative and Agentic AI for Customer Service Practitioners",
      personas: "Customer Service Organization- Sr and mid-level associates",
      duration: "8 hrs",
    },
    {
      sno: 7,
      program: "Generative and Agentic AI for BFS",
      personas: "BFSI mid and junior level associates",
      duration: "8 hrs",
    },
    {
      sno: 8,
      program: "Generative and Agentic AI for CPG, Retail, Ecom",
      personas: "CPG, Retail, Ecom mid and junior level associates",
      duration: "8 hrs",
    },
    {
      sno: 9,
      program:
        "Responsible AI & Regulations (AI & Data) – AI Ethics, Risk, Governance, Safety",
      personas: "Auditing, Risk, Compliance, AI leadership, AI Architects",
      duration: "8 hrs",
    },
    {
      sno: 10,
      program: "Agentic AI Analyst/ Business Architect",
      personas:
        "Business SMEs who will own and execute AI programs, build Agents and RAG apps without coding, manage AI governance, safety",
      duration: "40 hrs",
    },
  ];

  const usps = [
    "Content is well researched, with monthly updates to keep it latest.",
    "Experience in AI Consulting, pilots, and domain expertise embedded into programs.",
    "Mentors/Instructors are experts in AI, Enterprise Apps, and business domains (F&A, Supply Chain, Service, Marketing & Sales, Audit & Compliance).",
    "Plenty of demos and hands-on labs for practical exposure and better retention.",
  ];

  return (
    <div>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Business AI Programs
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We have pioneered AI Enablement workshops and skilling programs,
            training thousands of senior executives and leaders (CFOs, MDs,
            Business SMEs) across Fortune 2000 enterprises on Generative and
            Agentic AI over the last 2.5 years.
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
                className="hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-ai-purple/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-ai-purple flex-shrink-0 mt-1" />
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

export default BusinessAIPrograms;

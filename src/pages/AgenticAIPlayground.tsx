import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Brain,
  Target,
  BarChart3,
  Code,
  Cloud,
  Zap,
} from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";

const AgenticAIPlayground = () => {
  const features = [
    {
      icon: Users,
      title: "Learner Labs",
      description:
        "Pre-defined scope of labs with illustrated tutorials and step-wise code tasks via integrated IDE with Cloud & AI infrastructure.",
    },
    {
      icon: Code,
      title: "Builder Labs",
      description:
        "Build Agentic or RAG apps with full-stack development, testing, and deployment via sandbox environment.",
    },
    {
      icon: Target,
      title: "AI Native Skill Score",
      description:
        "Assessment tests at different stages with generated scores reflecting progress in learning journeys.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Usage and performance analytics for each user to track progress and competency mapping.",
    },
  ];

  const technologies = [
    "Python & Machine Learning",
    "AI Agent Development (Google ADK, Microsoft Autogen, AWS Strands SDK)",
    "RAG Development (Llamaindex, Langchain)",
    "Agentic Coding Tools (GitHub Copilot, Cursor, Google AI Studio)",
    "Cloud AI Services (AWS Bedrock, Azure AI Foundary, GCP Vertex AI)",
    "Context Engineering",
  ];

  const benefits = [
    "Continuously right-skill employees on rapidly evolving AI technology",
    "Score and monitor AI skills development of employees",
    "Avoid expensive instructor-led trainings with self-paced learning",
    "Save direct and opportunity costs while improving ROI",
    "Scale to upskill thousands simultaneously",
  ];

  return (
    <div>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-20 ">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Agentic AI Builder Playground
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your workforce with our CASH (Continuous, Accelerated,
            Scalable, Holistic) model for high-impact AI talent transformation
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 container mx-auto max-w-6xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The rapid progress in Artificial Intelligence is disrupting
                traditional models of Tech Services and business process
                management.
              </p>
              <p className="text-muted-foreground">
                Enterprises & Tech SIs struggle to align their workforce to
                leverage & monetize AI effectively. Current online courses and
                budget trainers haven't created real business impact.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-ai-cyan/20 bg-gradient-to-br from-background to-ai-cyan/5">
            <CardHeader>
              <CardTitle className="text-2xl text-ai-cyan">
                Our Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our unique CASH model delivers high-impact AI Talent
                Transformation through our Agentic AI Playground approach.
              </p>
              <p className="text-muted-foreground">
                Customized structured learning journeys for specific personas,
                including the latest AI tools, technologies & infrastructure for
                Enterprise-grade solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-primary/5"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-primary to-ai-blue w-fit">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies & Tools
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-ai-purple/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-ai-purple flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{benefit}</p>
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

export default AgenticAIPlayground;

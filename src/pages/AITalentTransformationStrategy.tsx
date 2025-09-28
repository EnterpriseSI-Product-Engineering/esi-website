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
  Target,
  BarChart3,
  Brain,
  Layers,
  Zap,
} from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";

const AITalentTransformationStrategy = () => {
  const areas = [
    {
      icon: Target,
      title: "AI Native Scoring & Measurement",
      description:
        "Build AI-native scoring & measurement frameworks across key employee categories to quantify adoption and growth.",
    },
    {
      icon: Users,
      title: "Learning Paths & Journeys",
      description:
        "Design outcome-driven learning paths and journeys tailored for different employee personas.",
    },
    {
      icon: BarChart3,
      title: "Competency & KRA Mapping",
      description:
        "Map learning journeys to competency development goals and KRAs, supported with metrics-driven data.",
    },
  ];

  const benefits = [
    "Leverage EnterpriseSI’s 10+ years of expertise in building global AI practices.",
    "Proven track record of advising 20+ enterprise customers on AI transformation strategies.",
    "Measurable results through execution of structured AI learning journeys.",
    "Platform-driven approach for scalability, personalization, and performance tracking.",
    "Holistic enablement model: Continuous, Accelerated, Scalable, and Holistic (CASH).",
  ];

  return (
    <div>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              AI Talent Transformation Strategy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            EnterpriseSI’s Founding Team brings 10+ years of experience in
            building global AI practices. In the last 3 years, we’ve advised 20+
            enterprises on outcome-oriented AI Talent Transformation Strategies
            and executed them with measurable results.
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 container mx-auto max-w-6xl">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AI is rapidly redefining the enterprise workforce landscape, but
                many organizations struggle to align employee skill
                transformation with business outcomes.
              </p>
              <p className="text-muted-foreground">
                Generic online courses or ad-hoc trainings fail to create
                measurable impact in competency development and adoption of AI
                technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-ai-cyan/20 bg-gradient-to-br from-background to-ai-cyan/5">
            <CardHeader>
              <CardTitle className="text-2xl text-ai-cyan">
                Our Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We leverage our proprietary CASH model (Continuous, Accelerated,
                Scalable, Holistic) to deliver measurable workforce
                transformation outcomes.
              </p>
              <p className="text-muted-foreground">
                Through our platform, tools, and AI programs, we enable
                organizations with structured learning journeys, scoring
                mechanisms, and competency mapping to drive sustained
                transformation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Areas of Support */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Areas Where We Can Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-primary/5"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-primary to-ai-blue w-fit">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Strategy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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

export default AITalentTransformationStrategy;

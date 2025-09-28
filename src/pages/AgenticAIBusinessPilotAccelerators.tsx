import {
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmailSubscription from "@/components/EmailSubscription";

const AgenticAIBusinessPilotAccelerators = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ai-light to-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent animate-fade-in">
            Agentic AI Business Pilot Accelerators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Transform your AI pilots from costly experiments to valuable
            business assets with our production-grade accelerator suite
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-elegant">
            <h2 className="text-3xl font-bold mb-6 text-center">
              The Challenge
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Enterprises face significant challenges with AI adoption.
                  According to an Aug 2025 MIT report,
                  <span className="text-destructive font-semibold">
                    {" "}
                    95% of Generative AI Pilots are failing
                  </span>{" "}
                  to demonstrate returns.
                </p>
                <p className="text-muted-foreground mb-6">
                  Despite billions invested by big tech companies, business
                  executives remain wary of AI pilot risks due to unclear value
                  demonstrations.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Skills Gap</h4>
                    <p className="text-sm text-muted-foreground">
                      Lack of combined domain and AI expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">No Ready Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Missing pre-built AI app blueprints
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Production Gaps</h4>
                    <p className="text-sm text-muted-foreground">
                      Pilots become throwaway prototypes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solution</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-glow transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Pre-built Production Apps</CardTitle>
                <CardDescription>
                  Production-grade Agentic AI applications for top 5-6
                  high-value business use cases
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Deployable Images</CardTitle>
                <CardDescription>
                  Ready-to-deploy applications for customer cloud or on-premise
                  environments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-glow transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Customization Interface</CardTitle>
                <CardDescription>
                  Business-friendly interface to customize accelerators for
                  unique processes and data
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Initial Focus Areas</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Starting with 20 high-impact use cases across key business functions
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-2">
                Finance & Accounting
              </h3>
              <p className="text-muted-foreground">
                Automated financial processes and reporting
              </p>
            </div>
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-2">Internal Auditing</h3>
              <p className="text-muted-foreground">
                Intelligent audit workflows and compliance checks
              </p>
            </div>
            <div className="bg-background/50 rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-2">Risk & Compliance</h3>
              <p className="text-muted-foreground">
                Proactive risk management and regulatory compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  50%+ Cost & Time Reduction
                </h3>
                <p className="text-muted-foreground">
                  Dramatically reduce the cost and effort required for AI pilots
                  with pre-built accelerators
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  50%+ Risk Reduction
                </h3>
                <p className="text-muted-foreground">
                  Minimize pilot failure risk with proven ROI and business value
                  demonstration frameworks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot-as-Service Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Agentic AI Product Pilot-as-Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Offshore Delivery for AI Startups
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Challenges We Address
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-ai-purple mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    AI startups need enterprise pilots for license sales
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-ai-purple mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Implementation teams required for license consumption
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-ai-purple mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Pilots need people-heavy, hands-on services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-ai-purple mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Lack of on-demand specialized AI talent
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Our Offshore Solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-ai-blue mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Dedicated pre-vetted offshore delivery teams (India)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-ai-blue mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Enterprise lead generation through workshops and demos
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-ai-blue mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    5-8x cost advantage with top-tier offshore talent
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-ai-blue mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Proven experience from successful US Unicorn AI startup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmailSubscription />
    </div>
  );
};

export default AgenticAIBusinessPilotAccelerators;

import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Lightbulb, Star } from "lucide-react";
import EmailSubscription from "@/components/EmailSubscription";

const AgenticAIPilotService = () => {
  const challenges = [
    "AI startups must pilot products with enterprises on custom requirements & data to support license sales.",
    "Once licenses are sold, a capable technical team is needed for implementation to ensure ROI and adoption.",
    "Pilots require people-heavy, hands-on services — unlike product engineering or GTM activities.",
    "Startups often have to build new professional services or customer success teams, diverting focus from innovation.",
    "Lack of on-demand specialized AI talent makes scaling pilots costly.",
    "Having a technically strong offshore team offers competitive advantage by executing pilots faster and better.",
    "Startups need partners who can introduce their products into qualified enterprise leads.",
  ];

  const solutions = [
    "Enterprise Agentic AI Pilot & Implementation Delivery with high offshore leverage.",
    "Dedicated pre-vetted offshore delivery teams (India): stable on-demand core team + flexible scaling. Training on the startup’s offering. ",
    "We introduce your products to qualified/ potential Enterprise leads via training workshops, product demos & hands-on labs/ free trial access",
    "Lower cost, faster scaling, and repeatable success delivery model.",
    "Backed by founders with proven experience in building customer success/ services BU & large offshore teams for a successful US based Unicorn AI startup & top tier Tech Sis.",
  ];

  const benefits = [
    "Achieve a 5–8x cost advantage by leveraging top-tier offshore Agentic AI talent.",
    "Rapidly scale pilots and implementations while allowing internal teams to focus on product innovation.",
    "Speed up time-to-market and enterprise successes, boosting adoption rates and business growth",
    "Generate new Enterprise leads supported by our on-product experience-based lead nurturing",
  ];

  return (
    <div>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 mt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
              Agentic AI Product Pilot-as-Service
            </span>
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl">
              Offshore Delivery Solution
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            EnterpriseSI has been helping startups in high-cost countries like
            US, UK, others to run their customer pilots with high offshore
            leverage (cost & profit advantage) without investing in offshore
            centers and hiring additional employees/ contractors at onsite, with
            our Enterprise Agentic AI Product Pilot & Implementation- Offshore
            Delivery Service
          </p>
        </div>

        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Challenges Addressed
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-ai-blue/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Wrench className="h-6 w-6 text-ai-blue flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-ai-purple/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-6 w-6 text-ai-purple flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Business Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-ai-cyan/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-ai-cyan flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Subscription Footer */}
        <EmailSubscription page="solutions" />
      </main>
    </div>
  );
};

export default AgenticAIPilotService;

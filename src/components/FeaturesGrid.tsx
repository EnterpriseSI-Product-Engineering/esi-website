import {
  Users,
  Workflow,
  TrendingUp,
  Lightbulb,
  Code,
  BarChart,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Improve Customer Experience",
    description: "Marketing | Service | E-Com | Sales | UI-UX Transformation",
    gradient: "from-ai-purple to-ai-blue",
  },
  {
    icon: Workflow,
    title: "Improve Business Processes",
    description:
      "Process Intelligence | Process Automation | Process Optimization | Process Analytics & Exception Handling",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: TrendingUp,
    title: "Improve Revenue, Profit & Cash Flow",
    description:
      "Revenue Generation | Profit Optimization | Cash Flow Management",
    gradient: "from-ai-cyan to-neural-pink",
  },
  {
    icon: Lightbulb,
    title: "Improve Employee Productivity & Creativity",
    description:
      "Intelligent Assistance | Augmentation | Learning & Development",
    gradient: "from-neural-pink to-ai-purple",
  },
  {
    icon: Code,
    title: "Improve Software Development Outcomes",
    description:
      "Design & Analysis | Coding | Testing | Deployment | Operations Transformation",
    gradient: "from-ai-purple to-ai-blue",
  },
  {
    icon: BarChart,
    title: "Improve Analysis & Decision Making",
    description:
      "Real Time Insights | Next Best Action/ Recommendation | Insight-to-action | Decision Simulation/ What-if analysis",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: ShieldCheck,
    title: "Improve Regulatory Compliance & Risk Management",
    description:
      "Real Time Risk/ Threat Detection | Compliance Automation | Audit reporting augmentation |  Audit task automation",
    gradient: "from-ai-cyan to-neural-pink",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="pb-24 px-4 sm:px-6 lg:px-8 -mt-20">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transform Your Enterprise with{' '}
            <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">
              Agentic AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform empowers businesses across multiple dimensions, delivering measurable improvements 
            in efficiency, innovation, and growth.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50 hover:from-background hover:to-muted transition-all duration-300 hover:scale-105"
            >
              {/* Gradient border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
              />
              <div className="absolute inset-[1px] bg-gradient-to-br from-background to-muted/50 rounded-lg" />

              <CardContent className="relative p-8">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-ai-purple transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

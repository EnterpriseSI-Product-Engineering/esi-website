import {
  Users,
  Workflow,
  TrendingUp,
  Lightbulb,
  Code,
  BarChart,
  ShieldCheck,
} from "lucide-react";
import { GradientCard } from "@/components/ui/animatedcard";

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

const Features = () => {
  return (
    <div className="pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <GradientCard key={index} className="border rounded-md h-full">
              <div className="p-6 flex flex-col h-full">
                <Icon className="w-10 h-10 mb-4 text-[#1569a9]" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </GradientCard>
          );
        })}
      </div>
    </div>
  );
};

export default Features;

import { GradientCard } from "@/components/ui/animatedcard";
import { Target, Users, Lightbulb } from "lucide-react";

const focusAreas = [
  {
    icon: Target,
    title: "AI Product Development",
    description:
      "Developing high-performance AI products that meet enterprise-grade standards with scalable architecture.",
    gradient: "from-ai-purple to-ai-blue",
  },
  {
    icon: Users,
    title: "Enterprise AI Solutions",
    description:
      "Providing customized AI solutions tailored to enterprise needs and complex business processes.",
    gradient: "from-ai-blue to-ai-cyan",
  },
  {
    icon: Lightbulb,
    title: "AI Adoption Strategy",
    description:
      "Helping businesses seamlessly adopt and integrate AI technology into their operations and workflows.",
    gradient: "from-ai-cyan to-neural-pink",
  },
];

const AboutImpact = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-center text-3xl md:text-5xl mb-3">Our Vision & Focus Areas</h1>
      <p className="mx-auto max-w-5xl text-center mb-10 text-base md:text-lg">
        At the core of our business is a commitment to bringing cutting-edge AI
        solutions to enterprises, driving innovation and transformation across
        industries.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {focusAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <GradientCard key={index} className="border rounded-md h-full">
              <div className="flex p-4 items-center justify-center flex-col h-full">
                <Icon className="w-8 h-8 mb-3" />
                <h1 className="capitalize text-center">{area.title}</h1>
                <p className="text-sm text-center mt-2">{area.description}</p>
              </div>
            </GradientCard>
          );
        })}
      </div>
    </div>
  );
};

export default AboutImpact;

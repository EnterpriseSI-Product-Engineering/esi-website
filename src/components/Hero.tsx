import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ai-purple/5 via-background to-ai-blue/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-cyan/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-neural-pink/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-20">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan bg-clip-text text-transparent">
            Accelerating Journey towards
          </span>
          <br />
          <div className="inline-flex mt-4 items-center gap-2 px-10 py-3 rounded-full bg-ai-purple/10 text-ai-purple text-sm lg:text-5xl font-medium mb-8 leading-0">
            <Sparkles className="w-8 h-8 mt-1" />
            Enterprise SuperIntelligence
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed ">
          Our product-led AI accelerators are helping Enterprises embrace{" "}
          <span className="text-ai-purple font-semibold">
            Artificial General Intelligence
          </span>{" "}
          for building fully autonomous business processes/ operations, enabling
          next gen{" "}
          <span className="text-ai-purple font-semibold">
            Digital Business Transformation.
          </span>{" "}
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-5xl mx-auto">
          Introducing our{" "}
          <span className="text-ai-blue font-semibold">
            Agentic AI Acceleration Platform
          </span>{" "}
          that will enable businesses to use AI Agents/Agentic AI and Advanced
          Context Engineering for Business Outcomes like :
        </p>

        {/* CTA */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#email-subscription">
            <Button
              variant="outline"
              size="lg"
              className="border-ai-purple text-ai-purple hover:bg-ai-purple/10 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

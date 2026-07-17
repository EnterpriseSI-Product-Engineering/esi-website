import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import ThreeAnimation from "../common/HeroAnimation";
import Silk from "../Silk";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
  Check,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen h-screen relative w-full ">
      {/* new hero */}
      <section className="absolute top-1/2 left-1/2 z-10 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-4 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-[50px] font-bold text-white/70">
          Scale your Forward Deployed AI Engineering.
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-[50px] font-bold text-white/70">
          Implementation outcomes with Agentic Business Acceleration Platform.
        </p>
      </section>
      {/* Hero silk */}
      <div className=" w-full h-full">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
    </div>
  );
};

export default Hero;

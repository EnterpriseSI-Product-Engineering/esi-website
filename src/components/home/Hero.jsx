import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import TrueFocus from "@/components/ui/true-focus";
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
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="min-h-screen h-screen relative w-full ">
      {/* new hero */}
      <section className="absolute top-1/2 left-1/2 z-10 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-4 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-[50px] font-bold text-white/70">
          Scale your Forward Deployed AI Engineering.
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-[50px] font-bold text-white/70">
          Implementation outcomes with our
        </p>
        <TrueFocus text="Agentic Business Acceleration Platform" />

        <div className=" flex gap-2 mt-10 items-center justify-center ">
          <Link to="/product">
            <LiquidButton
              size={"lg"}
              className="w-full sm:w-auto md:w-auto text-white"
            >
              <span className="flex items-center justify-center gap-1">
                <span>Explore platform</span>
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </LiquidButton>
          </Link>
          <Link to="/demo">
            <LiquidButton
              size={"lg"}
              className="w-full sm:w-auto md:w-auto text-white"
            >
              <span className="flex items-center justify-center gap-1">
                <span>Book a demo</span>
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </LiquidButton>
          </Link>
        </div>
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

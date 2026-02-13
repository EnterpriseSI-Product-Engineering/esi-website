import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import ThreeAnimation from "../common/HeroAnimation";
// import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="min-h-screen max-h-dvh flex flex-col items-center justify-center ">
      <ThreeAnimation />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-[-5]" />
      {/* <div className="z-10 flex md:hidden  items-center justify-center">
        <div
          className={cn(
            "group rounded-full border mb-6 bg-white  text-xs text-green-500/30 transition-all ease-in dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>Introducing Kloudstac</span>
          </AnimatedShinyText>
        </div>
      </div> */}
      {/* <div className="z-10 md:flex hidden mt-20  items-center justify-center">
        <div
          className={cn(
            "group rounded-full border mb-6 bg-white  text-xs text-green-500/30 transition-all ease-in dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>
              Powering the Future: The World&apos;s First Agentic AI Accelerator
              Platform
            </span>
          </AnimatedShinyText>
        </div>
      </div> */}
      <h1 className="text-[32px] capitalize md:text-[72px] lg:text-[75px] font-bold leading-tight md:leading-[80px] text-center text-[#0A1C2F]">
        Accelerating journey towards
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        <LiquidButton size={"lg"}>Enterprise SuperIntelligence</LiquidButton>
        <LiquidButton size={"lg"}>Agentic Business processes</LiquidButton>
        <LiquidButton size={"lg"}>Human-in-control</LiquidButton>
      </div>{" "}
      {/* <p className="text-center text-md max-w-[80%] md:text-2xl text-neutral-600 dark:text-neutral-400 lg:max-w-3xl mx-auto mt-4">
        Explore, learn, and build on the world&apos;s first end-to-end Agentic
        accelerator platform—designed to take ideas from lab prototypes to
        production-grade deployments seamlessly.hands-on Agentic learning,
        secure infrastructure, and low-code solutions.
      </p> */}
      {/* <div className="flex items-center justify-center mt-8 gap-4">
        <Link to="/labs">
          <LiquidButton size={window.innerWidth < 768 ? "lg" : "xxl"}>
            Explore Labs
          </LiquidButton>
        </Link>
        <Link to="/demo">
          <LiquidButton size={window.innerWidth < 768 ? "lg" : "xxl"}>
            Book a demo
          </LiquidButton>
        </Link>
      </div> */}
    </div>
  );
};

export default Hero;

import { AuroraBackground } from "../ui/aurora-background";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const StacbotHero = () => {
  return (
    <AuroraBackground className={"mt-20"}>
      <div className="-mt-20 flex flex-col items-center justify-center container ">
        <h1 className=" text-[72px] md:text-[72px] max-w-6xl  font-bold text-center leading-[80px] ">
          Stacbot: Your AI Companion
        </h1>

        <p className="text-center text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mt-4">
          Empower every user in your platform with a real-time AI assistant
          designed for hands-on learning, instant support, and AI-powered
          automation.
        </p>

        <div className="flex items-center justify-center mt-8 gap-4">
          <LiquidButton>Talk to Sales</LiquidButton>
          <LiquidButton>watch demo</LiquidButton>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default StacbotHero;

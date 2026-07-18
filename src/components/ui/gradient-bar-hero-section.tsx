import React from "react";

const GradientBars = () => {
  const numBars = 15;

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="flex h-full">
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: "1 0 calc(100% / 15)",
                maxWidth: "calc(100% / 15)",
                height: "100%",
                background:
                  "linear-gradient(to top, rgb(6, 182, 212), transparent)",
                transform: `scaleY(${height / 100})`,
                transformOrigin: "bottom",
                animation: "pulseBar 2s ease-in-out infinite alternate",
                animationDelay: `${index * 0.1}s`,
              }}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes pulseBar {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

interface GradientBarHeroSectionProps {
  title?: string;
  subtitle?: string;
}

export const GradientBarHeroSection: React.FC<
  GradientBarHeroSectionProps
> = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" />
      <GradientBars />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen py-20">
        <h1 className="w-full text-white leading-tight tracking-tight mb-6 sm:mb-8 px-4">
          <span className="block font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-[50px]">
            Scale your Forward Deployed AI Engineering &
          </span>
          <span className="block font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-[50px]">
            Implementation outcomes with our <br /> Agentic Business
            Acceleration Platform
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 px-4">
          <a
            href="/product"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-medium transition-all duration-300 hover:bg-gray-100"
          >
            Explore platform
          </a>
          <a
            href="/demo"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/30 bg-white/10 text-white font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
};

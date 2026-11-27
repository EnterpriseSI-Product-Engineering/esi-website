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
                  "linear-gradient(to top, #34D399, transparent)",
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#34D399]/20 blur-[140px] pointer-events-none rounded-full" />
      <GradientBars />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen py-24 sm:py-28">
        <h1 className="w-full text-white leading-tight tracking-tight mb-5 sm:mb-6 px-4">
          <span className="block font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-[52px]">
            Scale Enterprise AI,
          </span>
          <span className="block font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight sm:leading-tight md:leading-tight lg:leading-[52px] bg-gradient-to-r from-white via-[#d1fae5] to-[#6ee7b7] bg-clip-text text-transparent">
            From Pilot to Production
          </span>
        </h1>

        <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          Secure sandboxes, ready-to-deploy pilots and an AI-ready workforce, all on our Agentic Business Acceleration Platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 px-4">
          <a
            href="#explore-platform"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gray-100 shadow-lg shadow-white/10 cursor-pointer"
          >
            Explore platform
          </a>
          <a
            href="#book-a-call"
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/30 bg-white/10 text-white font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50 cursor-pointer"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
};

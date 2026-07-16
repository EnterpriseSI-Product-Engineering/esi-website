import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const { pathname } = useLocation();

  if (pathname === "/demo") {
    return null;
  }

  return (
    <section
      className={cn(
        "group relative overflow-hidden py-16 px-4 sm:py-24 md:py-32",
      )}
    >
      <div className="relative h-10 z-10 mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-6 md:gap-8">
        <div className="pb-10 flex  items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h3 className="max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to turn your next AI initiative into an operating advantage?
            </h3>
            <p className="mt-4 text-ploy-text-secondary">
              Bring the business problem. EnterpriseSI will help shape the path.
            </p>
          </div>
          <LiquidButton size={"lg"}>
            <span className="flex items-center gap-1">
              <span>Book a demo</span>
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </LiquidButton>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" className="animate-appear-zoom delay-300" />
      </div>
    </section>
  );
}

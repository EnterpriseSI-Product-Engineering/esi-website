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
        "group relative overflow-hidden py-12 px-4 sm:py-16 md:py-20 lg:py-24 ",
      )}
    >
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 max-w-4xl flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full max-w-4xl text-center md:text-left">
          <div className="flex-1">
            <h3 className="max-w-2xl text-balance font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Ready to turn your next AI initiative into an operating advantage?
            </h3>
            <p className="mt-2 md:mt-3 text-sm md:text-base text-ploy-text-secondary">
              Bring the business problem. EnterpriseSI will help shape the path.
            </p>
          </div>
          <div className="w-full sm:w-auto md:w-auto shrink-0">
            <Link to="/demo">
              <LiquidButton size={"lg"} className="w-full sm:w-auto md:w-auto">
                <span className="flex items-center justify-center gap-1">
                  <span>Book a demo</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </LiquidButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" className="animate-appear-zoom delay-300" />
      </div>
    </section>
  );
}

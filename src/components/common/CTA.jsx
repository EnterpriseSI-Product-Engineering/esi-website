import { Button } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import { useLocation } from "react-router";

export default function CTA() {
  const { pathname } = useLocation();

  if (pathname === "/demo") {
    return null;
  }

  return (
    <section className={cn("group relative overflow-hidden py-16 px-4 sm:py-24 md:py-32")}>
      <div className="relative h-10 z-10 mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-6 md:gap-8">
        {/* <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl animate-appear px-4">
          Experience the Future - Live
        </h2>
        <Button
          variant={"default"}
          size="lg"
          className="animate-appear delay-100 w-full sm:w-auto"
          asChild
        >
          <Link to={"/demo"}>Schedule a demo</Link>
        </Button> */}
      </div>
      <div className="absolute left-0 top-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" className="animate-appear-zoom delay-300" />
      </div>
    </section>
  );
}

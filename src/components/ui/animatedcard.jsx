import useMouse from "@/hooks/usemouse";
import { cn } from "@/lib/utils";

export const GradientCard = ({ circleSize = 400, className, children }) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className={cn(
        "group relative transform-gpu overflow-hidden bg-white/10 p-2",
        className, // ✅ all classes passed here
      )}
      ref={parentRef}
    >
      <div
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-full transition-transform duration-500 group-hover:scale-[3]",
          mouse.elementX === null || mouse.elementY === null
            ? "opacity-0"
            : "opacity-100",
        )}
        style={{
          maskImage: `radial-gradient(${
            circleSize / 2
          }px circle at center, white, transparent)`,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          left: `${mouse.elementX}px`,
          top: `${mouse.elementY}px`,
          background:
            "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
        }}
      />

      <div className="absolute inset-px rounded-inherit bg-neutral-100/80 dark:bg-neutral-900/80" />

      {children && (
        <div className="relative h-full rounded-md overflow-hidden border-white bg-white/70 dark:border-neutral-950 dark:bg-black/50 rounded-inherit">
          {children}
        </div>
      )}
    </div>
  );
};

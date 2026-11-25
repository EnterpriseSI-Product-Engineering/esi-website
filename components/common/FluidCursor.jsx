"use client";

import { useEffect, useRef } from "react";
import fluidCursor from "@/hooks/useFluidCursor";

const FluidCursor = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    if (!initialized.current) {
      initialized.current = true;
      fluidCursor();
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 -z-1 pointer-events-none">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  );
};

export default FluidCursor;

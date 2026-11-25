"use client";

import dynamic from "next/dynamic";
import ScrollToTop from "./ScrollToTop";

const FluidCursor = dynamic(() => import("./FluidCursor"), {
  ssr: false,
});

export default function ClientProviders() {
  return (
    <>
      <ScrollToTop />
      <FluidCursor />
    </>
  );
}

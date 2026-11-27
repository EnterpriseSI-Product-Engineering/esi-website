"use client";

import Hero from "@/components/home/Hero";
import AboutShortDesc from "@/components/home/AboutShortDesc";
import ExplorePlatform from "@/components/home/ExplorePlatform";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import BookACall from "@/components/home/BookACall";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* 1. Hero */}
      <Hero />

      {/* 2. About Short Description */}
      <AboutShortDesc />

      {/* 3. Explore Platform */}
      <ExplorePlatform />

      {/* 4. Testimonials Auto Slider */}
      <TestimonialsSlider />

      {/* 5. Book a Call Section */}
      <BookACall />
    </div>
  );
}

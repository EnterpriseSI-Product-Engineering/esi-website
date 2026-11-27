"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote,
  Star,
  Building2,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { testimonials } from "@/data/testimonials";

const CATEGORIES = [
  "All Roles",
  "Engineering",
  "Executive Leadership",
  "Risk & Governance",
  "Architecture",
];

export default function TestimonialsSlider() {
  const [selectedCategory, setSelectedCategory] = useState("All Roles");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Filter items based on active category
  const filteredTestimonials =
    selectedCategory === "All Roles"
      ? testimonials
      : testimonials.filter((t) => t.roleCategory === selectedCategory);

  const total = filteredTestimonials.length;

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Safe navigation helpers
  const maxIndex = Math.max(0, total - visibleCount);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleSelectDot = (idx) => {
    setCurrentIndex(Math.min(idx, maxIndex));
  };

  // Reset index when category changes
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, total, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-[#f8fafc] border-b border-neutral-300/60 overflow-hidden"
      aria-label="Client testimonials and reviews"
    >
      {/* Background Decorative Accents */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#047857]/10 text-[#047857] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories & Validation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
            Trusted by Enterprise Leaders Across{" "}
            <span className="text-[#047857]">Every AI Role</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            From technical Forward Deployed Engineers to executive leadership and
            compliance officers, discover how EnterpriseSI powers mission-critical
            AI pilots.
          </p>

          {/* Role Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((category) => {
              const count =
                category === "All Roles"
                  ? testimonials.length
                  : testimonials.filter((t) => t.roleCategory === category).length;

              if (count === 0) return null;

              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#047857] text-white shadow-sm shadow-emerald-700/20"
                      : "bg-white/90 text-neutral-700 hover:bg-neutral-100 border border-neutral-200/80"
                  }`}
                  aria-pressed={isActive}
                >
                  {category}
                  <span
                    className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[11px] font-bold ${
                      isActive
                        ? "bg-emerald-900/40 text-emerald-100"
                        : "bg-neutral-200/70 text-neutral-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Slider Controls Bar */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-2xs hover:bg-neutral-50 transition cursor-pointer"
              title={isPaused ? "Resume auto-sliding" : "Pause auto-sliding"}
              aria-label={isPaused ? "Resume auto-sliding" : "Pause auto-sliding"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#047857]" />
                  <span>Auto-scroll Paused</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#047857]" />
                  <span>Auto-scrolling</span>
                </>
              )}
            </button>
            <span className="hidden sm:inline-block text-xs text-neutral-400">
              • Hover to hold
            </span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={total <= visibleCount}
              className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-[#047857] hover:border-emerald-300 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-2xs cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={total <= visibleCount}
              className="p-2 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-[#047857] hover:border-emerald-300 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-2xs cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport & Slider Track */}
        <div
          className="relative overflow-hidden rounded-2xl p-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {filteredTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="px-2.5 sm:px-3 shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <article className="h-full flex flex-col justify-between bg-white rounded-2xl border border-neutral-200/90 p-6 md:p-7 shadow-xs hover:shadow-md hover:border-emerald-300/80 transition-all duration-300 relative group">
                    {/* Top Row: Rating & Quote Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <span className="p-2 rounded-xl bg-emerald-50 text-[#047857] group-hover:scale-110 transition-transform duration-200">
                          <Quote className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>

                      {/* Quote Text */}
                      <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic relative mb-6">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Bottom Row: User Info & Role Tag */}
                    <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                      {/* Name and Company */}
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-neutral-900 truncate">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-neutral-500 truncate mt-0.5">
                          <Building2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span className="truncate">{item.company}</span>
                        </div>
                      </div>

                      {/* User Role Highlight Badge */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                          <UserCheck className="w-3 h-3 text-[#047857]" />
                          <span>{item.role}</span>
                        </span>
                        <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectDot(idx)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? "w-7 bg-[#047857]"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={isActive ? "true" : undefined}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

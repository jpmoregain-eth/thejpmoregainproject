"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  slug: string;
  image?: string;
  imageStyle?: "cover" | "contain";
  isComingSoon?: boolean;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Card width + gap (matches CSS below)
  const SCROLL_AMOUNT = 420;
  const AUTO_SCROLL_INTERVAL = 4000; // 4 seconds
  const RESUME_DELAY = 8000; // resume auto-scroll 8s after manual interaction

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  }, []);

  const scrollTo = useCallback(
    (direction: "left" | "right") => {
      const el = scrollRef.current;
      if (!el) return;

      if (direction === "right") {
        // If near the end, loop back to start
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
        }
      } else {
        el.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
      }

      setTimeout(updateScrollButtons, 400);
    },
    [updateScrollButtons]
  );

  // Auto-scroll
  useEffect(() => {
    if (isPaused) {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      return;
    }

    autoScrollRef.current = setInterval(() => {
      scrollTo("right");
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isPaused, scrollTo]);

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseLeave = () => {
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  // Manual scroll → pause temporarily then resume
  const handleManualScroll = (direction: "left" | "right") => {
    setIsPaused(true);
    scrollTo(direction);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  };

  // Update button states on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => updateScrollButtons();
    el.addEventListener("scroll", onScroll, { passive: true });
    updateScrollButtons();

    return () => el.removeEventListener("scroll", onScroll);
  }, [updateScrollButtons]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Arrow */}
      <button
        onClick={() => handleManualScroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0A0A0F]/80 border border-[#D4A843]/30 text-[#D4A843] backdrop-blur-sm transition-all duration-300 hover:bg-[#D4A843]/20 hover:border-[#D4A843]/60 hover:scale-110 ${
          canScrollLeft
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll left"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => handleManualScroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#0A0A0F]/80 border border-[#D4A843]/30 text-[#D4A843] backdrop-blur-sm transition-all duration-300 hover:bg-[#D4A843]/20 hover:border-[#D4A843]/60 hover:scale-110 ${
          canScrollRight
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll right"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0A0A0F] to-transparent z-[1] pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0F] to-transparent z-[1] pointer-events-none" />

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 pb-4 carousel-scroll"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex-shrink-0 w-[380px] sm:w-[400px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              slug={project.slug}
              image={project.image}
              imageStyle={project.imageStyle}
              isComingSoon={project.isComingSoon}
            />
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              el.scrollTo({
                left: i * SCROLL_AMOUNT,
                behavior: "smooth",
              });
              setIsPaused(true);
              if (resumeTimeoutRef.current)
                clearTimeout(resumeTimeoutRef.current);
              resumeTimeoutRef.current = setTimeout(() => {
                setIsPaused(false);
              }, RESUME_DELAY);
            }}
            className="w-2 h-2 rounded-full bg-[#D4A843]/30 hover:bg-[#D4A843]/60 transition-colors"
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

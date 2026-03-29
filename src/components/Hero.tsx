"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Where Technology Meets Alpha";

  useEffect(() => {
    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="hero-bg min-h-[80vh] flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="font-mono">
            <span className="text-[#E5E5E5]">The </span>
            <span className="text-[#D4A843]">JP</span>
            <span className="text-[#E5E5E5]">MoreGain</span>
          </span>
          <br />
          <span className="text-[#E5E5E5]/90">Project</span>
        </h1>

        {/* Subtitle with typing effect */}
        <div className="h-8 sm:h-10 mb-8">
          <p className="font-mono text-lg sm:text-xl md:text-2xl text-[#00FF88]">
            {typedText}
            <span
              className={`inline-block w-[3px] h-6 bg-[#00FF88] ml-1 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </p>
        </div>

        {/* Description */}
        <p className="text-[#E5E5E5]/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Building AI-powered tools, platforms, and experiments at the
          intersection of technology, finance, and creativity.
        </p>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4A843]/50" />
          <div className="w-2 h-2 rounded-full bg-[#D4A843]/50" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#D4A843]/50" />
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-[#D4A843]/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState, useCallback } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Throttled mouse move handler for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // Use passive listener for better scroll performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseout", () => setIsVisible(false));

    // Handle hover states
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile, handleMouseMove]);

  if (isMobile) return null;

  return (
    <>
      {/* Simple elegant cursor ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.15s ease-out, opacity 0.2s ease-out",
        }}
      >
        <div
          className="w-8 h-8 rounded-full border border-white transition-transform duration-200"
          style={{
            transform: isHovering ? "scale(1.5)" : "scale(1)",
          }}
        />
      </div>

      {/* Center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease-out",
        }}
      >
        <div className="w-1 h-1 rounded-full bg-white" />
      </div>
    </>
  );
};

export default CustomCursor;

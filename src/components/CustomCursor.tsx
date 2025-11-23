"use client";

import { MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 12, y: e.clientY - 12 });
      setIsVisible(true);
    };

    const handleMouseOut = () => setIsVisible(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, [tabindex]:not([tabindex='-1'])"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseout", handleMouseOut);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${isHovering ? 1.5 : 1})`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <MousePointer2
        className="w-6 h-6 transition-transform duration-200"
        style={{
          color: "hsl(25 95% 53%)",
          filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
        }}
        strokeWidth={2.5}
        fill="hsl(25 95% 53%)"
      />
    </div>
  );
};

export default CustomCursor;


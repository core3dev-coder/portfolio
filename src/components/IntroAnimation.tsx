import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !brandRef.current || !taglineRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 300);
      },
    });

    // Initial state
    gsap.set(brandRef.current, {
      opacity: 0,
      scale: 0.8,
      letterSpacing: "0.1em",
    });

    gsap.set(taglineRef.current, {
      opacity: 0,
      y: 20,
    });

    // Animate brand name
    tl.to(brandRef.current, {
      opacity: 1,
      scale: 1,
      letterSpacing: "0.2em",
      duration: 1.2,
      ease: "power3.out",
    })
      // Animate tagline
      .to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      // Hold
      .to({}, { duration: 1.5 })
      // Fade out
      .to(
        [brandRef.current, taglineRef.current],
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.in",
        },
        "-=0.2"
      );
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <div className="text-center space-y-6">
        <div
          ref={brandRef}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[0.2em] uppercase text-white"
        >
          CORE3
        </div>
        <div
          ref={taglineRef}
          className="text-sm md:text-base lg:text-lg font-light tracking-[0.3em] uppercase text-white/70"
        >
          — Crafting Premium Digital Experiences —
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;



import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
}

interface HeroProps {
  introTransitioning?: boolean;
}

// Premium website development agency themed images - luxury perspective
const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    title: "CORE3",
    subtitle: "CRAFTING PREMIUM DIGITAL EXPERIENCES",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
    title: "DESIGN. DEVELOP. ELEVATE.",
    subtitle: "We Build Digital Experiences With Precision and Luxury",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80",
    title: "MODERN DESIGN THINKING",
    subtitle: "Where strategy meets exceptional execution",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    title: "CRAFTED WITH PRECISION",
    subtitle: "High-performance websites built to scale",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80",
    title: "WEB EXPERIENCES CRAFTED FOR THE ELITE",
    subtitle: "Premium digital solutions for discerning clients",
  },
];

const Hero = ({ introTransitioning = false }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const firstSlideTextRef = useRef<HTMLDivElement>(null);

  // Initialize slide refs
  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, slides.length);
    textRefs.current = textRefs.current.slice(0, slides.length);
    parallaxRefs.current = parallaxRefs.current.slice(0, slides.length);
  }, []);

  // Animate first slide when intro transitions
  useEffect(() => {
    if (introTransitioning && firstSlideTextRef.current && currentSlide === 0) {
      // Make first slide visible
      const firstSlide = slideRefs.current[0];
      if (firstSlide) {
        gsap.set(firstSlide, { opacity: 1 });
      }

      // Animate text from intro position (already in position from intro animation)
      gsap.fromTo(
        firstSlideTextRef.current,
        {
          opacity: 0,
          scale: 0.4,
          y: -window.innerHeight * 0.35,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        }
      );
    }
  }, [introTransitioning, currentSlide]);

  // Parallax effect on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

      parallaxRefs.current.forEach((ref, index) => {
        if (ref && index === currentSlide) {
          gsap.to(ref, {
            x: x,
            y: y,
            duration: 1.5,
            ease: "power2.out",
          });
        }
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, [currentSlide]);

  // Animate slide transition
  useEffect(() => {
    slides.forEach((_, index) => {
      const slideEl = slideRefs.current[index];
      const textEl = textRefs.current[index];

      if (slideEl && textEl) {
        if (index === currentSlide) {
          // Animate in
          gsap.to(slideEl, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          });
          if (index !== 0 || !introTransitioning) {
            gsap.fromTo(
              textEl,
              {
                opacity: 0,
                y: 40,
                scale: 0.95,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
              }
            );
          }
        } else {
          // Animate out
          gsap.to(slideEl, {
            opacity: 0,
            scale: 1.05,
            duration: 0.8,
            ease: "power2.in",
          });
          gsap.to(textEl, {
            opacity: 0,
            y: -20,
            scale: 0.98,
            duration: 0.6,
            ease: "power2.in",
          });
        }
      }
    });
  }, [currentSlide, introTransitioning]);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => (slideRefs.current[index] = el)}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide || (index === 0 && introTransitioning)
              ? "opacity-100"
              : "opacity-0"
          )}
        >
          {/* Background Image with Parallax */}
          <div
            ref={(el) => (parallaxRefs.current[index] = el)}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `scale(1.1)`,
            }}
          >
            {/* Darker overlay for better text readability - darker for first slide */}
            <div
              className={cn(
                "absolute inset-0",
                index === 0
                  ? "bg-gradient-to-b from-black/50 via-black/40 to-black/60"
                  : "bg-gradient-to-b from-black/30 via-black/20 to-black/50"
              )}
            />
          </div>

          {/* Text Content */}
          <div
            ref={(el) => {
              textRefs.current[index] = el;
              if (index === 0) firstSlideTextRef.current = el;
            }}
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center z-30 px-6 md:px-12 lg:px-16",
              index === 0 && "justify-center"
            )}
          >
            {index === 0 ? (
              // First slide - exact same styling and position as intro
              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[0.2em] uppercase text-white">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-white/30" />
                    <p className="text-sm md:text-base lg:text-lg font-extralight tracking-[0.3em] uppercase text-white/90">
                      {slide.subtitle}
                    </p>
                    <div className="h-px w-12 bg-white/30" />
                  </div>
                )}
              </div>
            ) : (
              // Other slides
              <>
                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[0.15em] uppercase text-white text-center mb-4 md:mb-6">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <p className="text-base md:text-lg lg:text-xl font-light tracking-[0.25em] uppercase text-white/85 text-center">
                    {slide.subtitle}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Dots - bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

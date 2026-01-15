import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

// Tech-focused slides with modern imagery
const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
    eyebrow: "SaaS Development Agency",
    title: "Code That\nScales",
    subtitle: "Modern web applications engineered for growth",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
    eyebrow: "Cloud Architecture",
    title: "Infrastructure\nRedefined",
    subtitle: "Serverless solutions for the modern enterprise",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80",
    eyebrow: "System Audits",
    title: "Debug.\nOptimize.",
    subtitle: "Performance profiling and security hardening",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
    eyebrow: "API Development",
    title: "Connect\nEverything",
    subtitle: "RESTful APIs and microservices architecture",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    const elements = textRef.current.querySelectorAll('.animate-item');

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, [currentSlide]);

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
    }, 6000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused]);

  const currentSlideData = slides[currentSlide];

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-[2000ms] ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover scale-105"
            style={{
              animation: index === currentSlide ? "slowZoom 8s ease-out forwards" : "none",
            }}
          />
        </div>
      ))}

      {/* Tech Grid Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />

      {/* Accent Glow */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 z-10 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(99, 102, 241, 0.3), transparent 60%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div
          ref={textRef}
          className={cn(
            "max-w-4xl transition-all duration-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Tech Badge */}
          <div className="animate-item overflow-hidden mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <p className="text-xs tracking-[0.3em] uppercase text-indigo-300 font-medium">
                {currentSlideData.eyebrow}
              </p>
            </div>
          </div>

          {/* Main Title */}
          <div className="animate-item overflow-hidden mb-8">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.9] tracking-tight font-light"
            >
              {currentSlideData.title.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {i === 1 ? (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          {currentSlideData.subtitle && (
            <div className="animate-item overflow-hidden mb-12">
              <p className="text-base md:text-lg lg:text-xl text-white/60 font-light tracking-wide max-w-xl font-mono">
                {'>'} {currentSlideData.subtitle}
              </p>
            </div>
          )}

          {/* CTAs */}
          <div className="animate-item flex items-center gap-6">
            <button className="group relative px-8 py-4 text-sm tracking-[0.15em] uppercase text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 rounded-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <span>Start Project</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <a
              href="#services"
              className="flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300 font-light group"
            >
              <span className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-indigo-400 transition-all duration-300" />
              Explore Stack
            </a>
          </div>

          {/* Tech Stack Icons */}
          <div className="animate-item mt-16 flex items-center gap-8">
            <span className="text-xs tracking-[0.2em] uppercase text-white/30">Built with</span>
            <div className="flex items-center gap-6">
              {['React', 'Node.js', 'AWS', 'TypeScript'].map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono text-white/40 border border-white/10 rounded hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="px-8 md:px-16 lg:px-24 pb-8">
          {/* Progress Lines */}
          <div className="flex items-center gap-3 mb-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative h-[2px] overflow-hidden transition-all duration-500"
                style={{ width: index === currentSlide ? '48px' : '24px' }}
              >
                <div className="absolute inset-0 bg-white/20" />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left",
                    index === currentSlide ? "scale-x-100" : "scale-x-0"
                  )}
                  style={{
                    animation: index === currentSlide ? "progressBar 6s linear forwards" : "none",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="flex items-center justify-between">
            <p className="text-xs tracking-[0.3em] text-white/40 font-mono">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </p>

            <div className="flex items-center gap-3 text-white/40">
              <span className="text-xs tracking-[0.2em] uppercase font-light">Scroll</span>
              <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

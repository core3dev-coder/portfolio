import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

const caseStudies = [
  {
    id: 1,
    client: "CloudScale",
    tagline: "API Platform",
    location: "San Francisco",
    industry: "Developer Tools",
    summary: "Built a high-throughput API gateway handling 50M+ requests daily with sub-10ms latency.",
    metrics: ["50M+ Requests/Day", "<10ms Latency", "99.99% Uptime"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    tech: ["Go", "Kubernetes", "Redis"],
  },
  {
    id: 2,
    client: "DataForge",
    tagline: "Analytics Suite",
    location: "Berlin",
    industry: "SaaS Platform",
    summary: "Real-time analytics dashboard processing terabytes of data with instant visualization.",
    metrics: ["1TB+ Data/Day", "Real-Time", "Auto-Scaling"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    tech: ["React", "Python", "Snowflake"],
  },
  {
    id: 3,
    client: "SecureAuth",
    tagline: "Identity Platform",
    location: "Singapore",
    industry: "Cybersecurity",
    summary: "Zero-trust authentication system with biometric verification and fraud detection.",
    metrics: ["Zero Breaches", "SOC 2 Type II", "GDPR Ready"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=800&fit=crop",
    tech: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 4,
    client: "DevOps Pro",
    tagline: "CI/CD Platform",
    location: "Toronto",
    industry: "Infrastructure",
    summary: "Fully automated deployment pipeline reducing release cycles from weeks to minutes.",
    metrics: ["95% Faster Deploys", "Zero Downtime", "GitOps Native"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
    tech: ["Docker", "Terraform", "GitHub Actions"],
  },
];

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideWidth = 70;

  const goToSlide = (index: number) => {
    if (index < 0) index = 0;
    if (index >= caseStudies.length) index = caseStudies.length - 1;
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX < -100) {
      goToSlide(currentIndex + 1);
    } else if (translateX > 100) {
      goToSlide(currentIndex - 1);
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setTranslateX(diff);
  };

  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Header */}
      <div className="container px-8 md:px-16 lg:px-24 mb-16 relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs tracking-[0.3em] uppercase text-indigo-300 font-mono">
                  Case Studies
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-light">
                Shipped{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Production
                </span>
              </h2>
              <p className="text-white/50 font-light mt-4 font-mono text-sm">
                {'>'} Real projects. Real scale. Real results.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-6 py-3 text-xs tracking-[0.15em] uppercase bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition-all duration-300 flex items-center gap-2 hover:from-indigo-500 hover:to-purple-500">
                All Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="relative cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex * slideWidth}% + ${translateX}px + 8%))`,
          }}
        >
          {caseStudies.map((study, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={study.id}
                className={cn(
                  "flex-shrink-0 px-2 transition-all duration-700",
                  isActive ? "opacity-100" : "opacity-40"
                )}
                style={{ width: `${slideWidth}%` }}
                onClick={() => !isActive && goToSlide(index)}
              >
                <div className="grid lg:grid-cols-2 gap-0 h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10">
                  {/* Left - Content */}
                  <div className="bg-[#0c0c14] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
                    {/* Code Pattern Background */}
                    <div className="absolute inset-0 opacity-[0.03] font-mono text-[10px] leading-tight text-indigo-400 p-4 overflow-hidden">
                      {`const deploy = async () => {\n  await build();\n  await test();\n  await ship();\n};\n\nfunction optimize(data) {\n  return data.map(x => x * 2);\n}\n\nexport default function App() {\n  return <Component />;\n}`.repeat(10)}
                    </div>

                    <div className="relative z-10">
                      {/* Industry Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span className="text-xs font-mono text-indigo-300">{study.industry}</span>
                      </div>

                      <h3 className="text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] font-light mb-2">
                        {study.client}
                      </h3>
                      <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-mono mb-6">
                        {study.tagline}
                      </p>
                      <p className="text-white/50 font-light leading-relaxed max-w-md">
                        {study.summary}
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="relative z-10 space-y-6">
                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2">
                        {study.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-3 py-1.5 text-xs font-mono text-white/60 border border-white/10 rounded-lg bg-white/[0.02]"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-white/30 font-mono">Stack:</span>
                        <div className="flex gap-2">
                          {study.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-1 text-xs font-mono text-indigo-300 bg-indigo-500/10 rounded border border-indigo-500/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Image */}
                  <div className="relative overflow-hidden">
                    <div className="absolute top-6 left-6 right-6 z-20 flex items-start justify-between">
                      <span className="text-xs tracking-[0.2em] text-white/60 font-mono">
                        0{index + 1}
                      </span>
                      <span className="text-xs tracking-[0.2em] text-white/60 font-mono">
                        {study.location}
                      </span>
                    </div>

                    <img
                      src={study.image}
                      alt={study.client}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-700",
                        isActive ? "grayscale-0 scale-100" : "grayscale scale-105"
                      )}
                      draggable={false}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-transparent to-black/30" />

                    {/* Terminal Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-red-500" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500" />
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                        <p className="text-xs font-mono text-green-400">
                          $ npm run deploy --prod ✓
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="container px-8 md:px-16 lg:px-24 mt-12 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl text-white font-mono">
              0{currentIndex + 1}
            </span>
            <span className="text-white/30">/</span>
            <span className="text-sm text-white/30 font-mono">
              0{caseStudies.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative h-[2px] overflow-hidden transition-all duration-500"
                style={{ width: index === currentIndex ? '48px' : '24px' }}
              >
                <div className="absolute inset-0 bg-white/20" />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left transition-transform duration-500",
                    index === currentIndex ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => goToSlide(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 disabled:opacity-30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToSlide(currentIndex + 1)}
              disabled={currentIndex === caseStudies.length - 1}
              className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 disabled:opacity-30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
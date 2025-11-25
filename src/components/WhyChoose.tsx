import { useRef, useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const strengths = [
  {
    title: "Transparent partnership",
    description: "Weekly loom updates, live dashboards, and access to the exact team building your product.",
    stat: "72h",
    statLabel: "Response time",
  },
  {
    title: "Global-level polish",
    description: "Premium typography, purposeful spacing, and delightful micro-interactions across every breakpoint.",
    stat: "40%",
    statLabel: "Average UX lift",
  },
  {
    title: "Performance obsessed",
    description: "Core Web Vitals and accessibility monitored before and after launch.",
    stat: "90+",
    statLabel: "Lighthouse avg.",
  },
];

const AnimatedStat = ({ stat, label }: { stat: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.5, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric value from stat
    const numericMatch = stat.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(stat);
      return;
    }

    const targetValue = parseInt(numericMatch[0]);
    const suffix = stat.replace(numericMatch[0], "");
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetValue / steps;
    const stepDuration = duration / steps;

    let currentValue = 0;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        setDisplayValue(targetValue + suffix);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(currentValue) + suffix);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat]);

  return (
    <div ref={ref} className="flex items-baseline gap-2">
      <span className="text-4xl font-semibold text-primary transition-all duration-300">
        {displayValue}
      </span>
      <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
    </div>
  );
};

const WhyChoose = () => {
  return (
    <section className="py-28 md:py-32 relative bg-secondary/30">
      <div className="container px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <AnimatedSection animation="fade-right" className="space-y-6">
          <p className="eyebrow">Why teams choose Core3 web design agency</p>
          <h2 className="section-heading">
            We treat every custom website like a flagship product—because that's how your customers experience your brand online.
          </h2>
          <p className="section-subheading">
            Expect opinionated creative web design direction, controlled web development engineering, and post-launch website
            maintenance support that actually sticks around.
          </p>
          <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] hover-lift transition-all duration-300">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/80">Core values</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li className="transition-transform duration-300 hover:translate-x-2">Trust</li>
              <li className="transition-transform duration-300 hover:translate-x-2">Modern design thinking</li>
              <li className="transition-transform duration-300 hover:translate-x-2">Smart, sustainable development</li>
            </ul>
          </div>
        </AnimatedSection>

        <div className="grid gap-6">
          {strengths.map((item, index) => (
            <AnimatedSection
              key={item.title}
              animation="fade-left"
              delay={index * 150}
            >
              <div className="rounded-[28px] border border-border/70 bg-card p-8 flex flex-col gap-6 shadow-sm hover:shadow-lg hover-lift transition-all duration-300 group">
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium text-muted-foreground">Core3 Advantage</p>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <AnimatedStat stat={item.stat} label={item.statLabel} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;


import { useRef, useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Terminal, GitBranch, Cpu, Cloud } from "lucide-react";

const strengths = [
  {
    title: "Ship Fast, Ship Right",
    description: "Agile sprints with daily standups. We deploy to production early and often.",
    stat: "2wk",
    statLabel: "Sprint Cycles",
    icon: GitBranch,
  },
  {
    title: "Enterprise-Grade Code",
    description: "TypeScript, automated testing, and CI/CD pipelines. Built to scale from day one.",
    stat: "100%",
    statLabel: "Test Coverage",
    icon: Cpu,
  },
  {
    title: "Cloud-Native Architecture",
    description: "Serverless, containers, and auto-scaling. Your infrastructure grows with your users.",
    stat: "99.9%",
    statLabel: "Uptime Target",
    icon: Cloud,
  },
];

const AnimatedStat = ({ stat, label }: { stat: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref, { threshold: 0.5, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isVisible) return;

    const numericMatch = stat.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(stat);
      return;
    }

    const targetValue = parseFloat(numericMatch[0]);
    const suffix = stat.replace(numericMatch[0], "");
    const duration = 2000;
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
        const isDecimal = targetValue % 1 !== 0;
        setDisplayValue(isDecimal ? currentValue.toFixed(1) + suffix : Math.floor(currentValue) + suffix);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat]);

  return (
    <div ref={ref} className="flex items-baseline gap-3">
      <span className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-mono">
        {displayValue}
      </span>
      <span className="text-xs uppercase tracking-[0.15em] text-white/40 font-mono">{label}</span>
    </div>
  );
};

const WhyChoose = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column */}
          <AnimatedSection animation="fade-right" className="lg:sticky lg:top-32 lg:self-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10">
                <Terminal className="w-3 h-3 text-indigo-400" />
                <p className="text-xs tracking-[0.3em] uppercase text-indigo-300 font-mono">
                  Why Core3
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-light">
                Code that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  scales
                </span>
              </h2>

              <p className="text-lg text-white/50 font-light max-w-md">
                We're not an agency. We're your technical co-founders, embedded in your mission.
              </p>

              {/* Terminal Card */}
              <div className="mt-10 p-6 rounded-xl border border-white/10 bg-[#0c0c14]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-white/30 font-mono">core3-dev</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-white/40">$ core3 capabilities</p>
                  <p className="text-green-400">✓ Full-Stack Development</p>
                  <p className="text-green-400">✓ System Architecture</p>
                  <p className="text-green-400">✓ Cloud Infrastructure</p>
                  <p className="text-green-400">✓ Security Audits</p>
                  <p className="text-white/40 pt-2">$ _</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column */}
          <div className="space-y-8">
            {strengths.map((item, index) => (
              <AnimatedSection
                key={item.title}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="group p-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-[1px] mb-6">
                    <div className="w-full h-full rounded-xl bg-[#0c0c14] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <p className="text-xs tracking-[0.3em] text-white/30 font-mono mb-4">
                    0{index + 1}
                  </p>

                  <h3 className="text-xl md:text-2xl font-light text-white mb-4 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-white/50 font-light leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <AnimatedStat stat={item.stat} label={item.statLabel} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

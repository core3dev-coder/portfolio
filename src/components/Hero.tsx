import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg-white.jpg";
import AnimatedBackground from "./AnimatedBackground";

const heroStats = [
  { label: "Launches guided", value: "120+" },
  { label: "Avg. performance gain", value: "38%" },
  { label: "Client satisfaction", value: "98%" },
];

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden pt-32 md:pt-36 pb-24 md:pb-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Animated elements */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 container px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="text-left space-y-8">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span>Core3 · Trusted by B2B, SaaS & finance</span>
          </div>

          <div>
            <p className="eyebrow mb-4">Full-stack digital agency</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Premium websites built with
              <span className="block text-primary">trust, polish & accuracy.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl">
              Core3 blends modern design with technical rigor to ship lightning-fast websites,
              thoughtful UX, and scalable systems for ambitious teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Speak with Core3 <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-foreground/20" asChild>
              <Link to="/projects" className="flex items-center gap-2">
                View latest work <Play className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:flex md:items-center md:gap-10">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-white/80 border border-border rounded-[32px] p-8 shadow-[0_40px_120px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="space-y-6">
            <div>
              <p className="eyebrow">Core3 delivery model</p>
              <p className="text-2xl font-semibold leading-snug mt-2">
                Strategy, design, engineering, QA & launch in one tight workflow.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Technical audits with actions in 72 hours",
                "Design direction crafted by Creative Director",
                "Sprint-based builds with full transparency",
                "Always-on partnership after launch",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutTemplate, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Custom website design services",
    description: "High-converting website design and user experience design services shaped by Core3's expert design team.",
    icon: Sparkles,
    highlights: ["Premium UI/UX design systems", "Editorial-grade content strategy", "Mobile-responsive web design"],
  },
  {
    title: "Full-stack web development",
    description: "Robust custom website development that balances performance, accessibility, and scalability.",
    icon: Wrench,
    highlights: ["Next.js & React web development", "API integration & backend development", "Cloud infrastructure & DevOps"],
  },
  {
    title: "Website optimization services",
    description: "Website performance optimization and proactive maintenance for existing web properties.",
    icon: ShieldCheck,
    highlights: ["Website speed optimization", "Accessibility compliance", "Conversion rate optimization"],
  },
];

interface CardTiltState {
  rotateX: number;
  rotateY: number;
}

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [tilt, setTilt] = useState<CardTiltState>({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY = ((e.clientX - centerX) / rect.width) * 15;
    const rotateX = -((e.clientY - centerY) / rect.height) * 15;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <AnimatedSection
      animation="fade-up"
      delay={index * 100}
      className="h-full perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: "transform 0.3s ease-out",
        }}
        className="h-full"
      >
        <Card
          className={`h-full border-border/80 hover:border-primary/40 transition-all duration-300 bg-card backdrop-blur-sm hover-lift hover-glow relative overflow-hidden ${isHovered ? "animate-shimmer" : ""
            }`}
        >
          <CardHeader className="space-y-6">
            <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-300 ${isHovered ? "scale-110 rotate-6" : ""}`}>
              <Icon className={`w-6 h-6 text-primary transition-all duration-300 ${isHovered ? "scale-110" : ""}`} />
            </div>
            <div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base mt-3">{service.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {service.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{highlight}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-28 md:py-32 relative">
      <div className="container px-6 space-y-16">
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto space-y-4">
          <p className="eyebrow">Professional web development services</p>
          <h2 className="section-heading">
            Custom website design and development services built to move faster than traditional web agencies.
          </h2>
          <p className="section-subheading">
            Every web development project is senior-led. Expect polished deliverables, thoughtful collaboration, and measurable
            results that drive business growth.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}

          <AnimatedSection animation="fade-up" delay={300} className="md:col-span-2 lg:col-span-1">
            <Card className="h-full border-dashed border-2 border-border/70 bg-secondary/40 hover-lift transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <LayoutTemplate className="w-6 h-6 text-muted-foreground" />
                </div>
                <CardTitle className="text-2xl">Flexible web development packages</CardTitle>
                <CardDescription className="text-base">
                  We adapt our web design and development services to your roadmap—whether we lead product strategy or embed into your internal team.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>Choose from quarterly retainers, project-based website builds, or launch sprints without ever seeing a price table.</p>
                <p>Every web development engagement starts with a Core3 discovery session and a strategic roadmap you can share with leadership.</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Engaging Stats Section */}
        <AnimatedSection animation="fade-up" delay={400} className="mt-20">
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-12 md:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

            <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-bold text-primary">150+</div>
                <div className="text-lg text-foreground/80">Projects Delivered</div>
                <div className="text-sm text-muted-foreground">Across 20+ industries</div>
              </div>

              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-bold text-primary">98%</div>
                <div className="text-lg text-foreground/80">Client Satisfaction</div>
                <div className="text-sm text-muted-foreground">Long-term partnerships</div>
              </div>

              <div className="space-y-3">
                <div className="text-5xl md:text-6xl font-bold text-primary">24/7</div>
                <div className="text-lg text-foreground/80">Support Available</div>
                <div className="text-sm text-muted-foreground">Always here for you</div>
              </div>
            </div>

            {/* Call to action */}
            <div className="relative z-10 mt-12 text-center">
              <p className="text-lg text-foreground/70 mb-6">Ready to elevate your digital presence?</p>
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
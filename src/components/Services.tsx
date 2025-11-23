import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutTemplate, ShieldCheck, Sparkles, Wrench } from "lucide-react";

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

const Services = () => {
  return (
    <section id="services" className="py-28 md:py-32 relative">
      <div className="container px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="eyebrow">Professional web development services</p>
          <h2 className="section-heading">
            Custom website design and development services built to move faster than traditional web agencies.
          </h2>
          <p className="section-subheading">
            Every web development project is senior-led. Expect polished deliverables, thoughtful collaboration, and measurable
            results that drive business growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="h-full border-border/80 hover:border-primary/40 transition duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
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
            );
          })}

          <Card className="md:col-span-2 lg:col-span-1 border-dashed border-2 border-border/70 bg-secondary/40">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
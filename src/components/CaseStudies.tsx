import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    client: "Arcadia Bank",
    industry: "Financial services",
    summary: "Rebuilt the marketing site and onboarding flow with a modern design system and rigorous compliance standards.",
    metrics: ["+48% qualified leads", "1.2s faster TTFB", "WCAG AA certified"],
  },
  {
    client: "Northwind Labs",
    industry: "B2B SaaS",
    summary: "Product storytelling overhaul with modular case stories and a headless CMS for the marketing team.",
    metrics: ["+32% conversion", "New CMS in 4 weeks", "Reusable page builder"],
  },
  {
    client: "Harbor & Co.",
    industry: "Architecture & real estate",
    summary: "Immersive portfolio site with editorial typography, custom interactions, and automated asset optimization.",
    metrics: ["+2.4x time on site", "90+ Lighthouse", "Global CDN rollout"],
  },
];

const CaseStudies = () => {
  return (
    <section className="py-28 md:py-32 relative">
      <div className="container px-6 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="eyebrow">Selected projects</p>
          <h2 className="section-heading">Case-study approach with measurable performance gains.</h2>
          <p className="section-subheading">
            Every engagement receives a custom measurement plan—so design work translates into tangible numbers.
          </p>
        </div>

        <div className="grid gap-10">
          {caseStudies.map((study) => (
            <Card key={study.client} className="border border-border/70 bg-white/90 rounded-[32px] overflow-hidden">
              <CardContent className="p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-10 items-start">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">{study.industry}</p>
                  <h3 className="text-3xl font-semibold">{study.client}</h3>
                  <p className="text-lg text-muted-foreground">{study.summary}</p>
                  <div className="flex flex-wrap gap-4">
                    {study.metrics.map((metric) => (
                      <span key={metric} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground/80">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition">
                  Explore case study <ArrowUpRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    client: "Auraasync",
    industry: "Fashion & AI",
    summary: "AI-powered fashion analysis platform rebuilt with modern architecture, resulting in improved user engagement and faster load times.",
    metrics: ["+65% user engagement", "2.1s faster load time", "95+ Lighthouse score"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    live: "https://auraasync.in",
  },
  {
    client: "FRA Dashboard",
    industry: "Government & Social Impact",
    summary: "Digital transformation for Forest Rights Administration, streamlining government processes with improved accessibility and performance.",
    metrics: ["+42% user adoption", "1.8s faster TTFB", "WCAG AA compliant"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    live: "https://hackathonfra.netlify.app/",
  },
  {
    client: "Kavach",
    industry: "Healthcare",
    summary: "Pediatric healthcare platform optimized for performance, enabling faster appointment scheduling and improved patient experience.",
    metrics: ["+58% appointment bookings", "1.5s faster interactions", "Mobile-first optimized"],
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
    live: "https://kavacchh.netlify.app/",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-28 md:py-32 relative">
      <div className="container px-6 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="eyebrow">Selected web development projects</p>
          <h2 className="section-heading">Website development case studies with measurable performance gains.</h2>
          <p className="section-subheading">
            Every web development engagement receives a custom measurement plan—so our website design and development work 
            translates into tangible business results.
          </p>
        </div>

        <div className="grid gap-10">
          {caseStudies.map((study) => (
            <Card key={study.client} className="border border-border/70 bg-white/90 rounded-[32px] overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[400px_1fr] gap-0">
                  <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden rounded-l-[32px]">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">{study.industry}</p>
                      <h3 className="text-3xl font-semibold">{study.client}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{study.summary}</p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        {study.metrics.map((metric) => (
                          <span key={metric} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground/80">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={study.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition mt-6 w-fit"
                    >
                      Visit website <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
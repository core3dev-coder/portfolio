import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
  {
    client: "Advocate Law",
    industry: "Legal Services",
    summary: "Professional digital presence for legal counsel, focusing on trust, clarity, and client accessibility.",
    metrics: ["+35% inquiries", "Semantic HTML", "Fast Response"],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=600&fit=crop",
    live: "https://lawfirm-advocate.netlify.app/",
  },
  {
    client: "ScrollScape",
    industry: "Creative Portfolio",
    summary: "Immersive scrolling experience showcasing creative work with dynamic animations and smooth transitions.",
    metrics: ["High engagement", "GSAP Animations", "Unique UI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    live: "https://scrollscape-frontend.netlify.app/",
  },
  {
    client: "Core3 Real Estate",
    industry: "Real Estate",
    summary: "Premium property listing platform with advanced search capabilities and high-quality visual presentation.",
    metrics: ["+40% leads", "Virtual Tours", "Interactive Map"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    live: "https://real-estate-core3.netlify.app/",
  },
  {
    client: "ResuCraft",
    industry: "Career & Productivity",
    summary: "Intuitive resume building tool helping professionals craft ATS-friendly resumes with ease and precision.",
    metrics: ["User-friendly", "Real-time preview", "PDF Export"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    live: "https://resucraft-resu-builder.netlify.app/",
  },
  {
    client: "Polite Project",
    industry: "Web Application",
    summary: "A modern, responsive web application demonstrating clean architecture and efficient state management.",
    metrics: ["Responsive Design", "Fast Loading", "Modern Stack"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    live: "https://polite-blini-ac02ab.netlify.app/",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-28 md:py-32 relative">
      <div className="container px-6 space-y-16">
        <AnimatedSection animation="fade-up" className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="eyebrow">Selected web development projects</p>
          <h2 className="section-heading">Website development case studies with measurable performance gains.</h2>
          <p className="section-subheading">
            Every web development engagement receives a custom measurement plan—so our website design and development work
            translates into tangible business results.
          </p>
        </AnimatedSection>

        <div className="grid gap-10">
          {caseStudies.map((study, index) => (
            <AnimatedSection
              key={study.client}
              animation="fade-up"
              delay={index * 150}
            >
              <Card className="border border-border/70 bg-card rounded-[32px] overflow-hidden group hover:shadow-xl hover-lift transition-all duration-500">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[400px_1fr] gap-0">
                    <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden rounded-l-[32px]">
                      <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/20 transition-all duration-500" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground uppercase tracking-[0.3em]">{study.industry}</p>
                        <h3 className="text-3xl font-semibold group-hover:text-primary transition-colors duration-300">{study.client}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{study.summary}</p>
                        <div className="flex flex-wrap gap-3 pt-2">
                          {study.metrics.map((metric) => (
                            <span key={metric} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={study.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-all duration-300 mt-6 w-fit group/link"
                      >
                        Visit website <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
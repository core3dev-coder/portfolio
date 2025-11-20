import Services from "@/components/Services";
import Process from "@/components/Process";
import ToolsTech from "@/components/ToolsTech";
import WhyChoose from "@/components/WhyChoose";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Dedicated strategy, design, and engineering leads",
  "CMS setup with flexible blocks and documentation",
  "Performance, accessibility, and SEO baked into every sprint",
  "Launch support with monitoring and experimentation ideas",
];

const ServicesPage = () => {
  return (
    <main className="pt-28 md:pt-36 lg:pt-40 space-y-0">
      <section className="py-20 md:py-28">
        <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="eyebrow">Core3 services</p>
            <h1 className="section-heading">
              Websites, products, and digital campaigns crafted with premium polish and measurable ROI.
            </h1>
            <p className="section-subheading">
              We combine design systems, thoughtful UX, and robust engineering to help brands launch confidently without
              managing multiple vendors.
            </p>
            <div className="grid gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Button className="rounded-full px-8" asChild>
                <Link to="/contact">Book a discovery</Link>
              </Button>
              <Button variant="outline" className="rounded-full px-8" asChild>
                <Link to="/projects">View case studies</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-[32px] border border-border/70 bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.1)]">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Engagements</p>
                <h2 className="text-2xl font-semibold mt-3">Launch sprints, full rebuilds, or partner retainers.</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Product & marketing website creation</li>
                <li>• Experience refresh without changing your backend</li>
                <li>• Multi-site systems and localization</li>
                <li>• Ongoing CRO, feature work, and site care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <WhyChoose />
      <Process />
      <ToolsTech />
    </main>
  );
};

export default ServicesPage;


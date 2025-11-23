import Services from "@/components/Services";
import Process from "@/components/Process";
import ToolsTech from "@/components/ToolsTech";
import WhyChoose from "@/components/WhyChoose";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Dedicated web design, development, and strategy leads",
  "Custom CMS development with flexible content blocks and documentation",
  "Website performance optimization and accessibility built into every sprint",
  "Post-launch website maintenance with monitoring and conversion optimization",
];

const ServicesPage = () => {
  return (
    <main className="space-y-0">
      <section className="pt-16 md:pt-20 pb-20 md:pb-28">
        <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="eyebrow">Professional web design & development services</p>
            <h1 className="section-heading">
              Custom websites, web applications, and digital marketing campaigns crafted with premium design and measurable ROI.
            </h1>
            <p className="section-subheading">
              We combine modern design systems, thoughtful user experience design, and robust web development to help brands launch 
              high-performance websites confidently without managing multiple vendors.
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
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Web development packages</p>
                <h2 className="text-2xl font-semibold mt-3">Website launch sprints, full website rebuilds, or ongoing web development retainers.</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Custom website design & development for products & marketing</li>
                <li>• Website redesign services without changing your backend</li>
                <li>• Multi-site web development and localization services</li>
                <li>• Ongoing conversion optimization, feature development, and website maintenance</li>
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


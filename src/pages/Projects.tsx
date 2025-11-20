import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <main className="pt-28 md:pt-36 lg:pt-40 space-y-0">
      <section className="py-20 md:py-28">
        <div className="container px-6 space-y-6 max-w-4xl">
          <p className="eyebrow">Core3 work</p>
          <h1 className="section-heading">Case-study rigor for every website and product we ship.</h1>
          <p className="section-subheading">
            From financial institutions to SaaS scale-ups, we merge storytelling with technical excellence. Each outcome
            is measured, documented, and supported after launch.
          </p>
          <Button className="rounded-full px-8" asChild>
            <Link to="/contact">Request a project walk-through</Link>
          </Button>
        </div>
      </section>

      <CaseStudies />
      <Testimonials />

      <section className="py-20">
        <div className="container px-6 text-center space-y-6 max-w-2xl">
          <h2 className="section-heading">Want to see more private work?</h2>
          <p className="section-subheading">
            We keep a deeper archive for NDAs and in-progress launches. Share a bit about your team and we’ll curate a
            relevant reel.
          </p>
          <Button variant="outline" className="rounded-full px-8" asChild>
            <Link to="/contact">Unlock private case studies</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;


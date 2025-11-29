import CaseStudies from "@/components/CaseStudies";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import SEO from "@/components/SEO";

const ProjectsPage = () => {
  return (
    <main className="space-y-0">
      <SEO
        title="Case Studies & Portfolio - Digital Success Stories | Core3"
        description="Explore our portfolio of high-performance websites and digital transformation projects. From financial institutions to SaaS scale-ups."
        canonical="/projects"
      />
      <section className="pt-16 md:pt-20 pb-20 md:pb-28">
        <div className="container px-6 space-y-6 max-w-4xl">
          <p className="eyebrow">Core3 web development portfolio</p>
          <h1 className="section-heading">Case-study rigor for every custom website and web application we develop.</h1>
          <p className="section-subheading">
            From financial institutions to SaaS scale-ups, we merge compelling storytelling with technical web development excellence.
            Each website project outcome is measured, documented, and supported after launch.
          </p>
          <Button className="rounded-full px-8" asChild>
            <Link to="/contact">Request a project walk-through</Link>
          </Button>
        </div>
      </section>

      <CaseStudies />

      <section className="py-20">
        <div className="container px-6 text-center space-y-6 max-w-2xl">
          <h2 className="section-heading">Want to see more private web development projects?</h2>
          <p className="section-subheading">
            We keep a deeper archive of website design and development work for NDAs and in-progress launches.
            Share a bit about your team and we'll curate a relevant portfolio reel.
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


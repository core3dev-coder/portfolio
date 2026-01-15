import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import ToolsTech from "@/components/ToolsTech";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="relative min-h-screen space-y-0">
      <SEO
        title="Core3 Software - Enterprise Web Applications & Legacy Modernization"
        description="Specialized software development firm delivering high-performance web applications, system audits, and legacy infrastructure modernization."
        canonical="/"
      />
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <ToolsTech />
      <CaseStudies />
      <FAQ />
    </main>
  );
};

export default Index;
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import ToolsTech from "@/components/ToolsTech";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";

interface IndexProps {
  introTransitioning?: boolean;
}

const Index = ({ introTransitioning = false }: IndexProps) => {
  return (
    <main className="relative min-h-screen space-y-0">
      <SEO
        title="Digital Agency - Strategic Web Optimization & Development"
        description="Full-service digital agency specializing in web creation, project optimization, and scalable digital infrastructure."
        canonical="/"
      />
      <Hero introTransitioning={introTransitioning} />
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
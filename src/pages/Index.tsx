import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import ToolsTech from "@/components/ToolsTech";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <main className="relative min-h-screen pt-28 md:pt-36 lg:pt-40 space-y-0">
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <ToolsTech />
      <CaseStudies />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Index;
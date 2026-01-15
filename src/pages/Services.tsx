import Services from "@/components/Services";
import Process from "@/components/Process";
import ToolsTech from "@/components/ToolsTech";
import WhyChoose from "@/components/WhyChoose";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/SEO";

const highlights = [
  "Dedicated web design, development, and strategy leads",
  "Custom CMS development with flexible content blocks and documentation",
  "Website performance optimization and accessibility built into every sprint",
  "Post-launch website maintenance with monitoring and conversion optimization",
];

const ServicesPage = () => {
  return (
    <main className="space-y-0">
      <SEO
        title="Web Design & Development Services | Core3"
        description="Custom websites, web applications, and digital marketing campaigns crafted with premium design and measurable ROI."
        canonical="/services"
      />


      <Services />
      <WhyChoose />
      <Process />
      <ToolsTech />
    </main>
  );
};

export default ServicesPage;


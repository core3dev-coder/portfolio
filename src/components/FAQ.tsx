import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "How long does a typical website development project take?",
    answer:
      "Website discovery and design direction usually take 2–3 weeks. Full custom website builds run 8–12 weeks depending on scope. Post-launch website maintenance support continues for 30 days with optional retainers for ongoing web development work.",
  },
  {
    question: "Can you collaborate with our internal web development team or agency?",
    answer:
      "Yes. We often embed alongside internal web designers, marketers, or engineering teams. Shared Slack channels, weekly playbacks, and transparent development sprint boards keep everyone in sync.",
  },
  {
    question: "Do you handle both website content strategy and web development?",
    answer:
      "Absolutely. Core3 delivers end-to-end website services—strategy, content, web design, custom development, QA, and deployment. We can also collaborate with your content team if you prefer.",
  },
  {
    question: "What happens after website launch?",
    answer:
      "We monitor website performance and accessibility for at least 30 days. Many partners keep Core3 on retainer for conversion optimization, feature development, and new website initiatives throughout the year.",
  },
  {
    question: "How quickly can you start a new website project?",
    answer:
      "We typically begin web development projects within 1–2 weeks. Rush timelines are available when aligned with our quality standards for website design and development.",
  },
];

const FAQ = () => {
  return (
    <section className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-accent">Questions</span> About Our Web Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions about our website design and development services? We've got answers. If you don't see what you're looking for,
            reach out directly to our web development team.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 hover-lift transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
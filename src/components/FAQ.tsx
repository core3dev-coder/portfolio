import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical Core3 engagement take?",
    answer:
      "Discovery and direction usually take 2–3 weeks. Full website builds run 8–12 weeks depending on scope. Launch support continues for 30 days with optional retainers for ongoing experiments.",
  },
  {
    question: "Can you collaborate with our internal team or agency?",
    answer:
      "Yes. We often embed alongside internal designers, marketers, or engineering teams. Shared Slack channels, weekly playbacks, and transparent sprint boards keep everyone in sync.",
  },
  {
    question: "Do you handle both content and development?",
    answer:
      "Absolutely. Core3 delivers end-to-end—strategy, copy, design, development, QA, and deployment. We can also collaborate with your content team if you prefer.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We monitor performance, accessibility, and SEO for at least 30 days. Many partners keep Core3 on retainer for CRO, product experiments, and new features throughout the year.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "We typically begin audits within 1–2 weeks. Rush timelines are available when aligned with our quality standards.",
  },
];

const FAQ = () => {
  return (
    <section className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, 
            reach out directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 hover:scale-[1.02] transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
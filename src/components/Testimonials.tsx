import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CMO, Arcadia Bank",
    content:
      "Core3 took a regulated industry and made it feel modern without compromising trust. The launch playbook was the most organized I've seen.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, Northwind Labs",
    content:
      "They embedded with our team, challenged assumptions, and shipped a system our internal designers now rely on. Core3 is our default partner.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Harbor & Co.",
    content:
      "The new site feels editorial and premium, but it's also fast and easy to edit. Every detail was intentional—from typography to CMS workflows.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "VP of Operations, Brightline Logistics",
    content:
      "Core3 rebuilt our platform with performance budgets and QA baked in. Support after launch has been proactive, not reactive.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 md:py-32">
      <div className="container px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-heading">Leaders trust Core3 with their most visible digital moments.</h2>
          <p className="section-subheading">Human collaboration, senior talent, and a calm process win repeat work.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/90 border border-border/70 rounded-[28px] shadow-sm hover:shadow-lg transition">
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-base font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
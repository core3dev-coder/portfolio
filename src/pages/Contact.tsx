import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone } from "lucide-react";

import SEO from "@/components/SEO";

const ContactPage = () => {
  return (
    <main className="space-y-0">
      <SEO
        title="Contact Us - Start Your Project | Core3"
        description="Ready to elevate your digital presence? Book a discovery call with our team today. We typically respond within one business day."
        canonical="/contact"
      />
      <section className="pt-16 md:pt-20 pb-20 md:pb-28">
        <div className="container px-6 grid lg:grid-cols-2 gap-14">
          <div className="space-y-6">
            <p className="eyebrow">Contact Core3 web design agency</p>
            <h1 className="section-heading">Tell us about your website project roadmap. We'll reply with a tailored web development plan.</h1>
            <p className="section-subheading">
              Share as much context as you can—timeline, goals, existing platforms. Our web development team typically responds
              within one business day with a customized proposal for your website design and development needs.
            </p>
            <div className="space-y-4">
              <a href="mailto:core3dev@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                core3dev@gmail.com
              </a>
              <a href="tel:+918097387412" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                +91 80973 87412
              </a>
              <a href="https://wa.me/918097387412" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                WhatsApp Core3
              </a>
            </div>
          </div>

          <form className="rounded-[32px] border border-border/70 bg-card p-8 space-y-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <Input placeholder="Your name" required className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Company</label>
                <Input placeholder="Company" required className="mt-2" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <Input type="email" placeholder="you@email.com" required className="mt-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Website / Product URL</label>
                <Input placeholder="https://core3.agency" className="mt-2" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Project goals</label>
              <Textarea placeholder="Share context, timing, goals, and challenges." rows={5} className="mt-2" />
            </div>
            <Button className="w-full rounded-full">Send message to Core3</Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;


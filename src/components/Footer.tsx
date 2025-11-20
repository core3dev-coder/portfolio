import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-white/80">
      <div className="absolute inset-0 pointer-events-none opacity-70 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="container relative z-10 px-6 py-20 space-y-14">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <p className="eyebrow">Work with Core3</p>
          <h2 className="section-heading">Tell us about your next launch. We’ll respond with a tailored plan.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="rounded-full px-8" asChild>
              <Link to="/contact">Start a project</Link>
            </Button>
            <Button variant="outline" className="rounded-full px-8 border-foreground/20" asChild>
              <Link to="/projects">See latest work</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
          <a href="mailto:core3dev@gmail.com" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-foreground transition">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            core3dev@gmail.com
          </a>
          <a href="tel:+918097387412" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-foreground transition">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            +91 80973 87412
          </a>
          <a href="https://wa.me/918097387412" className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground hover:text-foreground transition" target="_blank" rel="noreferrer">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            WhatsApp Core3
          </a>
        </div>

        <div className="border-t border-border/60 pt-6 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Core3. Modern, trustworthy, high-performance websites.</p>
          <div className="flex gap-6 text-xs uppercase tracking-[0.3em]">
            <span>Trust</span>
            <span>Design</span>
            <span>Development</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
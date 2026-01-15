import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container px-8 md:px-16 lg:px-24 py-24 relative z-10">
        {/* Main CTA */}
        <AnimatedSection animation="fade-up" className="mb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-xs tracking-[0.3em] uppercase text-green-300 font-mono">
                Available for Projects
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-light mb-8">
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                great
              </span>
            </h2>

            <div className="flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="px-8 py-4 text-sm tracking-[0.15em] uppercase text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg transition-all duration-500 inline-flex items-center gap-2"
              >
                Start a Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 text-sm tracking-[0.15em] uppercase text-white/70 font-light border border-white/20 hover:border-indigo-500/50 hover:text-white rounded-lg transition-all duration-500"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Grid */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid md:grid-cols-4 gap-8 py-12 border-t border-b border-white/10">
            <a href="mailto:core3dev@gmail.com" className="group">
              <p className="text-xs tracking-[0.2em] uppercase text-white/30 font-mono mb-2">Email</p>
              <p className="text-white/70 group-hover:text-indigo-400 transition-colors duration-300 font-mono text-sm">
                core3dev@gmail.com
              </p>
            </a>

            <a href="tel:+918097387412" className="group">
              <p className="text-xs tracking-[0.2em] uppercase text-white/30 font-mono mb-2">Phone</p>
              <p className="text-white/70 group-hover:text-indigo-400 transition-colors duration-300 font-mono text-sm">
                +91 80973 87412
              </p>
            </a>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-white/30 font-mono mb-2">Location</p>
              <p className="text-white/70 font-mono text-sm">
                Remote / Global
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-white/30 font-mono mb-2">Response</p>
              <p className="text-white/70 font-mono text-sm">
                {"<"} 24 hours
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C3</span>
              </div>
              <div>
                <span className="text-lg text-white font-light">Core3</span>
                <span className="text-xs text-white/30 ml-2 font-mono">v2.0</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Mail, href: "mailto:core3dev@gmail.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/30 font-mono">
              © {new Date().getFullYear()} Core3. All rights reserved.
            </p>
          </div>
        </AnimatedSection>

        {/* Terminal Footer */}
        <AnimatedSection animation="fade-up" delay={400} className="mt-16">
          <div className="p-6 rounded-xl border border-white/10 bg-[#0c0c14]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-white/30 font-mono">terminal</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <p className="text-white/40">$ npm run build</p>
              <p className="text-green-400">✓ Compiled successfully</p>
              <p className="text-white/40">$ npm run deploy</p>
              <p className="text-green-400">✓ Deployed to production</p>
              <p className="text-white/40 pt-2">$ echo "Thanks for visiting!"</p>
              <p className="text-indigo-400">Thanks for visiting!</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
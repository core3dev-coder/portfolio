import { Monitor, Search, RefreshCw, Rocket, Code, Database, Shield, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Full-Stack Development",
    description: "Modern web applications with React, Next.js, and Node.js. Scalable architecture from day one.",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "API & Backend Systems",
    description: "RESTful APIs, GraphQL, and microservices. Built for high throughput and reliability.",
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "System Audits",
    description: "Performance profiling, security assessment, and codebase analysis. Find bottlenecks fast.",
    icon: Search,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS, GCP, and Azure deployments. Serverless, containers, and auto-scaling.",
    icon: Shield,
    gradient: "from-green-500 to-emerald-500",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "API" },
];

const Services = () => {
  return (
    <section id="services" className="py-32 md:py-40 relative overflow-hidden">
      {/* Background Elements */}
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

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container px-8 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
              <Zap className="w-3 h-3 text-indigo-400" />
              <p className="text-xs tracking-[0.3em] uppercase text-indigo-300 font-mono">
                Services
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-light mb-6">
              What we{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                build
              </span>
            </h2>
            <p className="text-lg text-white/50 font-light font-mono">
              {'>'} Senior-led development. Production-ready code.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
                {/* Gradient Line Top */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-xl bg-[#0c0c14] flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Number */}
                <p className="text-xs tracking-[0.3em] text-white/20 font-mono mb-4">
                  0{index + 1}
                </p>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-light text-white mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-8 flex items-center gap-2 text-white/30 group-hover:text-indigo-400 transition-colors duration-500">
                  <span className="text-xs tracking-[0.15em] uppercase font-mono">Learn more</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech Stack Section */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 md:p-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-md">
                <h3 className="text-2xl font-light text-white mb-4">
                  Our Tech Stack
                </h3>
                <p className="text-white/50 font-light">
                  Modern technologies for modern problems. We stay current so you stay ahead.
                </p>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
                  >
                    <p className="text-xs text-white/30 font-mono mb-1">{tech.category}</p>
                    <p className="text-sm text-white/80 font-mono group-hover:text-indigo-300 transition-colors">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fade-up" delay={500} className="mt-16">
          <div className="grid md:grid-cols-4 gap-8 py-12 border-t border-b border-white/10">
            {[
              { value: "150+", label: "Projects Shipped" },
              { value: "99.9%", label: "Uptime Average" },
              { value: "<24h", label: "Response Time" },
              { value: "50M+", label: "API Calls/Day" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-mono mb-2">
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.15em] uppercase text-white/40 font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={600} className="mt-16 text-center">
          <button className="px-10 py-5 text-sm tracking-[0.15em] uppercase text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg transition-all duration-500 inline-flex items-center gap-3">
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
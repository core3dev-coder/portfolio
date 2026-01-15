import AnimatedSection from "./AnimatedSection";
import { Check } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "30-min call to understand your stack, goals, and timeline. No pitch decks, just technical discussion.",
    output: "Scope Document",
    command: "git init project",
  },
  {
    number: "02",
    title: "Architecture",
    description: "We design the system architecture, select the optimal stack, and plan the sprint roadmap.",
    output: "Tech Blueprint",
    command: "npm run architect",
  },
  {
    number: "03",
    title: "Sprint Execution",
    description: "2-week agile sprints with daily commits. You see progress in real-time on GitHub.",
    output: "Working Code",
    command: "git push origin main",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description: "CI/CD pipelines, monitoring, and auto-scaling. Go live with confidence.",
    output: "Production App",
    command: "npm run deploy --prod",
  },
];

const Process = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background */}
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

      <div className="container px-8 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
              <Check className="w-3 h-3 text-indigo-400" />
              <p className="text-xs tracking-[0.3em] uppercase text-indigo-300 font-mono">
                Process
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] font-light">
              From zero to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                production
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="group flex gap-8">
                  {/* Number Node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-[1px]">
                      <div className="w-full h-full rounded-xl bg-[#0c0c14] flex items-center justify-center">
                        <span className="text-sm font-mono text-white">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-light text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-white/50 font-light leading-relaxed max-w-xl">
                          {step.description}
                        </p>

                        {/* Output Badge */}
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-green-500/30 bg-green-500/10">
                          <Check className="w-3 h-3 text-green-400" />
                          <span className="text-xs font-mono text-green-300">{step.output}</span>
                        </div>
                      </div>

                      {/* Terminal Command */}
                      <div className="lg:w-64 p-4 rounded-lg border border-white/10 bg-[#0c0c14]">
                        <div className="flex items-center gap-1.5 mb-3">
                          <span className="w-2 h-2 rounded-full bg-red-500/80" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                          <span className="w-2 h-2 rounded-full bg-green-500/80" />
                        </div>
                        <p className="text-xs font-mono text-green-400">
                          $ {step.command}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={500} className="mt-20 text-center">
          <p className="text-white/50 font-light mb-8 text-lg font-mono">
            {'>'} Ready to start building?
          </p>
          <button className="px-10 py-5 text-sm tracking-[0.15em] uppercase text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg transition-all duration-500 inline-flex items-center gap-3">
            Schedule a Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Process;
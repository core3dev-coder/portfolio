import { CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Website strategy & alignment",
    description:
      "We analyze your current website and user experience to uncover friction, missed opportunities, and technical improvements. We align with your leadership on web development priorities.",
    deliverable: "Website discovery + development roadmap",
  },
  {
    number: "02",
    title: "Website design direction",
    description:
      "Core3's creative web design team defines the visual design system, content narrative, and UI component library before a single line of code is shipped.",
    deliverable: "Interactive website mockups & prototypes",
  },
  {
    number: "03",
    title: "Website development & refinement",
    description:
      "Our web developers, QA engineers, and project managers ship in weekly sprints. Expect playbacks, accessible website builds, and performance optimization budgets baked in.",
    deliverable: "Staging website + development sprint recaps",
  },
  {
    number: "04",
    title: "Website launch & maintenance",
    description:
      "We orchestrate website launch, monitor performance metrics, and stay on as your proactive web development partner for experiments, conversion optimization, and new features.",
    deliverable: "Post-launch website optimization plan",
  },
];

const Process = () => {
  return (
    <section className="py-28 md:py-32 relative bg-secondary/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="eyebrow">Web development workflow</p>
          <h2 className="section-heading">A calm, controlled website development process that keeps launches on schedule.</h2>
          <p className="section-subheading">No chaos. No mystery. Just clarity from website discovery to post-launch website maintenance.</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl md:text-3xl font-semibold text-white">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-card/80 border border-border rounded-3xl p-6 md:p-8 shadow-sm group-hover:border-primary/50 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{step.description}</p>
                  <div className="text-sm font-medium text-muted-foreground/80 uppercase tracking-[0.3em]">
                    {step.deliverable}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
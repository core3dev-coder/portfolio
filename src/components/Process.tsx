import { CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Insight & alignment",
    description:
      "A 360º audit uncovers friction, missed storylines, and technical weak spots. We align with your leadership on priorities.",
    deliverable: "CX audit + roadmap",
  },
  {
    number: "02",
    title: "Design direction",
    description:
      "Core3’s creative team defines the visual system, narrative, and component library before a single line of code is shipped.",
    deliverable: "Interactive artboards & prototypes",
  },
  {
    number: "03",
    title: "Build & refine",
    description:
      "Engineers, QA, and PMs ship in weekly sprints. Expect playbacks, accessible builds, and performance budgets baked in.",
    deliverable: "Staging site + sprint recaps",
  },
  {
    number: "04",
    title: "Launch & care",
    description:
      "We orchestrate launch, monitor vitals, and stay on as your proactive partner for experiments, CRO, and new initiatives.",
    deliverable: "Post-launch optimization plan",
  },
];

const Process = () => {
  return (
    <section className="py-28 md:py-32 relative bg-secondary/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="eyebrow">Workflow</p>
          <h2 className="section-heading">A calm, controlled process that keeps launches on schedule.</h2>
          <p className="section-subheading">No chaos. No mystery. Just clarity from audit to post-launch care.</p>
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
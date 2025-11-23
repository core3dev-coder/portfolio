const strengths = [
  {
    title: "Transparent partnership",
    description: "Weekly loom updates, live dashboards, and access to the exact team building your product.",
    stat: "72h",
    statLabel: "Response time",
  },
  {
    title: "Global-level polish",
    description: "Premium typography, purposeful spacing, and delightful micro-interactions across every breakpoint.",
    stat: "40%",
    statLabel: "Average UX lift",
  },
  {
    title: "Performance obsessed",
    description: "Core Web Vitals and accessibility monitored before and after launch.",
    stat: "90+",
    statLabel: "Lighthouse avg.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-28 md:py-32 relative bg-secondary/30">
      <div className="container px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
        <div className="space-y-6">
          <p className="eyebrow">Why teams choose Core3 web design agency</p>
          <h2 className="section-heading">
            We treat every custom website like a flagship product—because that's how your customers experience your brand online.
          </h2>
          <p className="section-subheading">
            Expect opinionated creative web design direction, controlled web development engineering, and post-launch website 
            maintenance support that actually sticks around.
          </p>
          <div className="rounded-3xl border border-border/60 bg-white/90 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground/80">Core values</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li>Trust</li>
              <li>Modern design thinking</li>
              <li>Smart, sustainable development</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6">
          {strengths.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-border/70 bg-white/80 p-8 flex flex-col gap-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-muted-foreground">Core3 Advantage</p>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-primary">{item.stat}</span>
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{item.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;


const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Sanity",
  "Shopify",
  "Framer Motion",
  "AWS",
  "Cloudflare",
  "Vercel",
  "Stripe",
  "HubSpot",
  "PostgreSQL",
];

const ToolsTech = () => {
  return (
    <section className="py-24 md:py-28">
      <div className="container px-6 space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="eyebrow">Tools & stack</p>
          <h2 className="section-heading">Trusted modern stack for reliability and speed.</h2>
          <p className="section-subheading">
            We pair battle-tested technology with your existing workflows, making handoff and future iterations effortless.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-2xl border border-border/70 bg-white/70 px-6 py-4 text-center text-sm font-semibold tracking-wide uppercase text-muted-foreground hover:border-primary/40 hover:text-foreground transition"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTech;


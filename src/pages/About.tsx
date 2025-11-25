const values = [
  {
    title: "Trust first",
    description: "Transparent communication, clear documentation, and ownership at every step of the build.",
  },
  {
    title: "Modern design",
    description: "Systems thinking, premium typography, and curated visuals that feel crafted—not templated.",
  },
  {
    title: "Smart development",
    description: "Reliable engineering standards, performance budgets, and accessibility baked in.",
  },
];

const AboutPage = () => {
  return (
    <main className="space-y-0">
      <section className="pt-16 md:pt-20 pb-20 md:pb-28">
        <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="eyebrow">About Core3 web design agency</p>
            <h1 className="section-heading">We are a full-stack web development agency focused on trust, modern website design, and smart custom development.</h1>
            <p className="section-subheading">
              Founded by senior web designers and software engineers, Core3 was built to help ambitious teams launch premium,
              high-performance websites without the chaos of managing multiple vendors. We operate like an embedded web development
              unit—strategic, proactive, and easy to collaborate with.
            </p>
          </div>
          <div className="rounded-[32px] border border-border/60 bg-card p-8 shadow-[0_30px_80px_rgba(15,23,42,0.1)] space-y-6">
            <h2 className="text-2xl font-semibold">Our mission</h2>
            <p className="text-muted-foreground">
              To build trustworthy, high-performance websites and digital experiences that feel personal and perform flawlessly.
              We believe premium website design and custom web development should be accessible to teams of every size.
            </p>
            <h2 className="text-2xl font-semibold pt-4">Our story</h2>
            <p className="text-muted-foreground">
              Core3 emerged from shipping dozens of enterprise websites where design quality was often sacrificed for speed.
              We designed a better web development model—small senior teams, thoughtful process, honest collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container px-6 grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="rounded-[24px] border border-border/70 bg-card p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{value.title}</p>
              <p className="text-base text-muted-foreground mt-4">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container px-6 space-y-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="section-heading">Team</h2>
            <p className="section-subheading">
              We partner with a network of senior talent. Core leadership stays on every project from kickoff to rollout.
            </p>
          </div>
          <div className="rounded-[32px] border border-dashed border-border/70 p-12 text-center text-muted-foreground">
            Team profiles coming soon. In the meantime, ask for the Core3 leadership deck.
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;


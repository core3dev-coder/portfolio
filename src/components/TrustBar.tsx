const logos = ["Arcadia Bank", "Northwind Labs", "Harbor & Co.", "Summit Realty", "Nova Health", "Brightline Logistics"];

const TrustBar = () => {
  return (
    <section className="py-12 border-y border-border/60 bg-background backdrop-blur">
      <div className="container px-6">
        <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground/80 text-center mb-6">Trusted by teams worldwide</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center text-sm font-semibold text-muted-foreground">
          {logos.map((logo) => (
            <span key={logo} className="text-center opacity-70 hover:opacity-100 transition tracking-wide">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;


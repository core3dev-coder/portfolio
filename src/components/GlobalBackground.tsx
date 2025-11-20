const noiseTexture =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuMTIiLz48L3N2Zz4=";

const GlobalBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,196,138,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,153,112,0.35), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,220,200,0.4), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(250,248,245,0.95) 100%)",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-screen blur-3xl opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(251,146,60,0.25), transparent 55%), radial-gradient(circle at 90% 20%, rgba(244,114,182,0.2), transparent 50%), radial-gradient(circle at 80% 90%, rgba(56,189,248,0.15), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${noiseTexture})`,
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
        }}
      />
      <div className="absolute inset-x-0 top-20 h-40 bg-gradient-to-b from-white/80 via-white/0 to-transparent opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-white via-white/80 to-transparent opacity-80" />
    </div>
  );
};

export default GlobalBackground;


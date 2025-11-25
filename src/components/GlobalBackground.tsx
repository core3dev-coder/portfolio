import ParticleField from "./ParticleField";

const noiseTexture =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJibGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4xMiIvPjwvc3ZnPg==";

const GlobalBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dark Gray Grid Background - lighter for better text visibility */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#1a1a1a', // Dark gray instead of pure black
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Light overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Animated gradient base */}
      <div
        className="absolute inset-0 bg-gradient-animated opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,196,138,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,153,112,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,220,200,0.3), transparent 45%)",
        }}
      />

      {/* Animated gradient overlay with shifting colors */}
      <div
        className="absolute inset-0 mix-blend-screen blur-3xl opacity-30 animate-pulse-glow"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(251,146,60,0.2), transparent 55%), radial-gradient(circle at 90% 20%, rgba(244,114,182,0.15), transparent 50%), radial-gradient(circle at 80% 90%, rgba(56,189,248,0.12), transparent 55%)",
        }}
      />

      {/* Floating particles */}
      <ParticleField count={30} />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${noiseTexture})`,
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
};

export default GlobalBackground;

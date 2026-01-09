import ParticleField from "./ParticleField";

const noiseTexture =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJibGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMC4xMiIvPjwvc3ZnPg==";

const GlobalBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Dark Tech Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45, 91, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 91, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated gradient base - Engineering Blue/Deep */}
      <div
        className="absolute inset-0 bg-gradient-animated opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(45,91,255,0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(0,200,255,0.1), transparent 40%), radial-gradient(circle at 50% 80%, rgba(90,45,255,0.15), transparent 45%)",
        }}
      />

      {/* Animated gradient overlay with shifting colors */}
      <div
        className="absolute inset-0 mix-blend-screen blur-3xl opacity-20 animate-pulse-glow"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(45,91,255,0.2), transparent 55%), radial-gradient(circle at 90% 20%, rgba(0,255,255,0.1), transparent 50%), radial-gradient(circle at 80% 90%, rgba(45,91,255,0.15), transparent 55%)",
        }}
      />

      {/* Floating particles - primary color handled by component */}
      <ParticleField count={30} />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-10"
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

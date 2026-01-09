const AnimatedBackground = () => {
  return (
    <>
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 border-2 border-primary/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-accent/30 animate-spin-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-accent/50 rounded-full animate-float-slow"></div>
    </>
  );
};

export default AnimatedBackground;
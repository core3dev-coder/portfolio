import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-mark.svg";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/projects" },
  { label: "DEVELOPERS", href: "/developers" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Floating Pill Navbar - Desktop */}
      <header
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden lg:block",
          scrolled ? "top-4" : "top-6",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
        )}
      >
        <nav
          className={cn(
            "relative px-8 py-4 rounded-full",
            "backdrop-blur-2xl bg-white/10 border border-white/20",
            "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
            "transition-all duration-500 ease-out",
            scrolled && "bg-white/5 border-white/10"
          )}
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
          }}
        >
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105 group"
              aria-label="Home"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Core3 Digital"
                  className="h-8 w-8 opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/90 group-hover:text-white transition-colors">
                Core3
              </span>
            </Link>

            {/* Divider */}
            <div className="h-6 w-px bg-white/20" />

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => {
                      // Scroll to top smoothly when clicking nav link
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={cn(
                      "relative px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 rounded-full",
                      "text-white/70 hover:text-white",
                      isActive && "text-white"
                    )}
                  >
                    {/* Active background */}
                    {isActive && (
                      <span className="absolute inset-0 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 animate-pulse-glow" />
                    )}

                    {/* Hover background */}
                    <span className="absolute inset-0 bg-white/5 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />

                    {/* Text */}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-500",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav
          className={cn(
            "relative px-6 py-4 backdrop-blur-xl transition-all duration-500",
            scrolled
              ? "bg-black/60 border-b border-white/10 shadow-lg"
              : "bg-black/40 border-b border-white/5"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 transition-all duration-300 hover:opacity-80"
              aria-label="Home"
            >
              <img src={logo} alt="Core3 Digital" className="h-8 w-8 opacity-90" />
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/90">
                Core3
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="text-white/70 hover:text-white/90 transition-colors duration-300 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="mt-6 pb-4 border-t border-white/10 pt-4 animate-fade-in-down">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => {
                        // Close mobile menu
                        setMobileMenuOpen(false);
                        // Scroll to top smoothly
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={cn(
                        "block px-6 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-lg",
                        "text-white/70 hover:text-white hover:bg-white/5",
                        isActive && "text-white bg-primary/20"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden lg:block",
          scrolled ? "top-4" : "top-6",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
        )}
      >
        <nav
          className={cn(
            "relative px-2 py-2 rounded-2xl",
            "backdrop-blur-xl bg-[#0c0c14]/80 border border-white/10",
            "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
            "transition-all duration-500 ease-out"
          )}
        >
          <div className="flex items-center gap-1">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white/5 transition-all duration-300 group"
              aria-label="Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">C3</span>
              </div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors font-mono">
                core3.dev
              </span>
            </Link>

            {/* Divider */}
            <div className="h-8 w-px bg-white/10 mx-2" />

            {/* Navigation Links */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={cn(
                      "relative px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 rounded-lg font-mono",
                      "text-white/50 hover:text-white hover:bg-white/5",
                      isActive && "text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-8 w-px bg-white/10 mx-2" />

            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 font-mono flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Hire Us
            </Link>
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
              ? "bg-[#0c0c14]/90 border-b border-white/10"
              : "bg-[#0c0c14]/70 border-b border-white/5"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 transition-all duration-300"
              aria-label="Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">C3</span>
              </div>
              <span className="text-sm font-medium text-white/90 font-mono">
                core3.dev
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
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 rounded-lg font-mono",
                        "text-white/60 hover:text-white hover:bg-white/5",
                        isActive && "text-white bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 px-4 py-3 text-sm font-medium tracking-[0.1em] uppercase bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition-all duration-300 font-mono text-center flex items-center justify-center gap-2"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Hire Us
                </Link>
              </nav>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

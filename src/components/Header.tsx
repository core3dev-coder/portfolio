import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-mark.svg";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeHref = useMemo(() => {
    if (pathname === "/") return "/";
    const match = navItems.find((item) => pathname.startsWith(item.href));
    return match?.href ?? pathname;
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl pointer-events-auto px-4 sm:px-6 py-2 sm:py-3">
        <nav
          className={cn(
            "flex items-center justify-between w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300",
            "bg-gradient-to-r from-white/90 via-[#FFF3E6]/90 to-white/90",
            "backdrop-blur-xl border border-white/60",
            "shadow-[0_8px_32px_rgba(15,23,42,0.08)]",
            scrolled && "shadow-[0_12px_40px_rgba(15,23,42,0.12)] scale-[0.98]"
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/90 border border-white/60 shadow-sm hover:shadow-md transition-shadow"
            aria-label="Core3 Digital Home"
          >
            <img src={logo} alt="Core3 Digital" className="w-8 h-8 sm:w-10 sm:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold uppercase tracking-wider",
                    "text-foreground/90 hover:text-primary transition-colors duration-200",
                    "rounded-lg"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 border border-white/60 shadow-sm hover:shadow-md transition-shadow"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_12px_40px_rgba(15,23,42,0.15)] overflow-hidden">
            <nav className="flex flex-col p-2">
              {navItems.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg",
                      "text-foreground/90 hover:text-primary hover:bg-primary/5",
                      "transition-colors duration-200",
                      isActive && "text-primary bg-primary/10"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


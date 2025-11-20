import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import PillNav, { PillNavItem } from "./PillNav";
import logo from "@/assets/logo-mark.svg";
import { cn } from "@/lib/utils";

const navItems: PillNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
    <header className="pointer-events-none fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-2 sm:py-3">
      <div className="mx-auto max-w-6xl pointer-events-auto">
        <PillNav
          logo={logo}
          logoAlt="Core3 Digital"
          items={navItems}
          activeHref={activeHref}
          className={cn("custom-pill-nav", scrolled && "pill-nav-scrolled")}
          ease="power2.easeOut"
          baseColor="#FFF3E6"
          pillColor="rgba(15,23,42,0.92)"
          hoveredPillTextColor="#EB5E28"
          pillTextColor="#0F172A"
        />
      </div>
    </header>
  );
};

export default Header;


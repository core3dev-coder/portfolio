import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export type NavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface NavBarProps {
  logo: string;
  logoAlt?: string;
  items: NavItem[];
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
}) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isExternalLink = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const isRouterLink = (href?: string) => href && !isExternalLink(href);

  const activeHref = React.useMemo(() => {
    if (location.pathname === "/") return "/";
    const match = items.find((item) => location.pathname.startsWith(item.href));
    return match?.href ?? location.pathname;
  }, [location.pathname, items]);

  const homeHref = items.find((item) => item.href === "/")?.href || items[0]?.href || "/";

  return (
    <nav className={`navbar ${className}`} aria-label="Primary">
      <div className="navbar-container">
        {/* Logo */}
        {isRouterLink(homeHref) ? (
          <Link to={homeHref} className="navbar-logo" aria-label="Home">
            <img src={logo} alt={logoAlt} />
          </Link>
        ) : (
          <a href={homeHref} className="navbar-logo" aria-label="Home">
            <img src={logo} alt={logoAlt} />
          </a>
        )}

        {/* Desktop Navigation */}
        <ul className="navbar-list desktop-only" role="menubar">
          {items.map((item) => (
            <li key={item.href} role="none">
              {isRouterLink(item.href) ? (
                <Link
                  to={item.href}
                  className={`navbar-link ${activeHref === item.href ? "is-active" : ""}`}
                  role="menuitem"
                  aria-label={item.ariaLabel || item.label}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`navbar-link ${activeHref === item.href ? "is-active" : ""}`}
                  role="menuitem"
                  aria-label={item.ariaLabel || item.label}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-button mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`} />
          <span className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu mobile-only ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="navbar-mobile-list">
          {items.map((item) => (
            <li key={item.href}>
              {isRouterLink(item.href) ? (
                <Link
                  to={item.href}
                  className={`navbar-mobile-link ${activeHref === item.href ? "is-active" : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={`navbar-mobile-link ${activeHref === item.href ? "is-active" : ""}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;


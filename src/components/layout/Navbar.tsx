"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/a-propos", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = isHome && !scrolled;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isDark ? "transparent" : "rgba(255,255,255,0.97)",
        borderBottom: isDark ? "none" : "1px solid #E8F5ED",
        boxShadow: isDark ? "none" : "0 1px 20px rgba(0,0,0,0.06)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{ width: "40px", height: "40px" }}>
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
              <polygon points="0,30 30,0 30,60" fill="#145C2F" />
              <polygon points="60,30 30,0 30,60" fill="#1B7A3E" />
              <polygon points="30,15 18,40 30,47 42,40" fill={isDark ? "#0a1a0f" : "white"} />
              <circle cx="30" cy="7" r="4" fill="#52C27A" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontWeight: 700,
              fontSize: "20px",
              color: isDark ? "white" : "#1B7A3E",
              transition: "color 0.3s",
              letterSpacing: "-0.5px",
            }}>
              Venertiweb
            </span>
            <span style={{
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#52C27A",
              textTransform: "uppercase",
            }}>
              Web Design
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden-mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                color: pathname === link.href
                  ? "#1B7A3E"
                  : isDark ? "rgba(255,255,255,0.85)" : "#555",
                transition: "color 0.2s",
                position: "relative",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden-mobile">
          <Link
            href="/devis"
            style={{
              backgroundColor: "#1B7A3E",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              padding: "10px 24px",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "background-color 0.2s",
              display: "inline-block",
            }}
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            padding: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isDark ? "white" : "#333",
          }}
          className="show-mobile"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: "white",
              borderTop: "1px solid #E8F5ED",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: pathname === link.href ? "#1B7A3E" : "#555",
                    textDecoration: "none",
                    padding: "8px 0",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/devis"
                onClick={() => setMenuOpen(false)}
                style={{
                  backgroundColor: "#1B7A3E",
                  color: "white",
                  textAlign: "center",
                  padding: "12px 24px",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  marginTop: "8px",
                }}
              >
                Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}

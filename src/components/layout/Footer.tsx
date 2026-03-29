"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
  { href: "/devis", label: "Devis Gratuit" },
];

const services = [
  "Site Vitrine",
  "E-commerce",
  "Landing Page",
  "SEO & Référencement",
  "Maintenance",
  "Identité Visuelle",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1a0f", color: "white" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", gap: "48px" }} className="footer-grid">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}>
              <div style={{ width: "36px", height: "36px" }}>
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                  <polygon points="0,30 30,0 30,60" fill="#145C2F" />
                  <polygon points="60,30 30,0 30,60" fill="#2ea55a" />
                  <polygon points="30,15 18,40 30,47 42,40" fill="#0a1a0f" />
                  <circle cx="30" cy="7" r="4" fill="#52C27A" />
                </svg>
              </div>
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "18px", color: "white" }}>Venerti</div>
                <div style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "3px", color: "#52C27A", textTransform: "uppercase", marginTop: "2px" }}>Web Design</div>
              </div>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", lineHeight: 1.8, marginBottom: "24px", maxWidth: "260px" }}>
              Votre partenaire digital au Maroc. Nous créons des sites web qui convertissent et des expériences qui marquent.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
             {[
  { label: "IG", href: "https://instagram.com/venertiweb", icon: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )},
  { label: "LI", href: "https://linkedin.com/company/venerti", icon: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
  { label: "TK", href: "https://tiktok.com/@venertiweb", icon: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
  )},
].map((s) => (
  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
    width: "36px", height: "36px", borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,0.08)",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "rgba(255,255,255,0.6)",
    textDecoration: "none", transition: "background 0.2s",
  }}
    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1B7A3E")}
    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")}
  >
    {s.icon}
  </a>
))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "20px" }}>
              Navigation
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    color: "rgba(255,255,255,0.5)", fontSize: "14px",
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#52C27A")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "20px" }}>
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {services.map((s) => (
                <li key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#1B7A3E", flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "20px" }}>
              Contact
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: Mail, value: "contact@venerti.com", href: "mailto:contact@venerti.com" },
              ].map(({ icon: Icon, value, href }) => (
                <div key={value} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Icon size={15} color="#1B7A3E" />
                  {href ? (
                    <a href={href} style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", textDecoration: "none" }}>{value}</a>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>{value}</span>
                  )}
                </div>
              ))}
            </div>
            <Link href="/devis" style={{
              display: "inline-block", marginTop: "24px",
              backgroundColor: "#1B7A3E", color: "white",
              fontWeight: 600, fontSize: "13px",
              padding: "10px 22px", borderRadius: "999px",
              textDecoration: "none",
            }}>
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          padding: "20px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "13px" }}>
            © 2026 Venerti Web Design. Tous droits réservés.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
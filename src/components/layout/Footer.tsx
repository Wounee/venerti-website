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
              {["IG", "LI", "FB"].map((s) => (
                <a key={s} href="#" style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", fontSize: "11px", fontWeight: 700,
                  textDecoration: "none", transition: "background 0.2s",
                }}>
                  {s}
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
                { icon: MapPin, value: "Maroc", href: null },
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
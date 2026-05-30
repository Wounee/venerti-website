"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Monitor, ShoppingCart, Wrench } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Monitor,
    title: "Business Websites",
    desc:
      "A polished website that explains your offer, earns trust, and turns visitors into real inquiries.",
    features: [
      "Custom design",
      "Fully responsive",
      "SEO optimized",
      "Fast delivery",
    ],
  },

  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc:
      "Online stores that feel premium, stay easy to manage, and guide customers from product to checkout.",
    features: [
      "Secure payments",
      "Product dashboard",
      "Admin panel",
      "Multilingual support",
    ],
  },

  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc:
      "Ongoing improvements, fixes, backups, and support so your website keeps working after launch.",
    features: [
      "Website updates",
      "Backups & security",
      "Technical support",
      "Performance monitoring",
    ],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "100px 0", backgroundColor: "#F8FDF9" }} id="services">
      <div className="site-shell">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="eyebrow" style={{ backgroundColor: "#E8F5ED", color: "#1B7A3E", marginBottom: "20px" }}>
            OUR SERVICES
          </span>
          <h2 className="section-heading" style={{ marginBottom: "16px" }}>
            Everything your website needs
            <br />
            <span style={{ color: "#1B7A3E" }}>to win better clients</span>
          </h2>
          <p className="section-copy" style={{ maxWidth: "590px", margin: "0 auto" }}>
            From the first impression to the final form submission, every part
            of the site is planned to make your business feel clear, credible,
            and easy to contact.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="card"
              style={{
                padding: "32px",
                transition: "all 0.3s", cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(27,122,62,0.25)";
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(27,122,62,0.08)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#F0F0F0";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: "48px", height: "48px", borderRadius: "8px",
                backgroundColor: "#E8F5ED", display: "flex",
                alignItems: "center", justifyContent: "center", marginBottom: "20px",
              }}>
                <service.icon size={22} color="#1B7A3E" />
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "18px", color: "#111", marginBottom: "10px" }}>
                {service.title}
              </h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
                {service.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {service.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#52C27A", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <Link href="/devis" className="button-primary">
            Plan my website
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

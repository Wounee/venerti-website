"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, ShoppingCart, Smartphone, Search, Paintbrush, Wrench } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Monitor,
    title: "Site Web",
    desc: "Un site professionnel qui reflète votre image de marque et convertit vos visiteurs en clients.",
    features: ["Design sur mesure", "100% responsive", "SEO optimisé", "Livraison rapide"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Une boutique en ligne complète avec gestion des produits, paiements et tableau de bord.",
    features: ["Paiement sécurisé", "Gestion catalogue", "Dashboard admin", "Multi-langues"],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Votre site toujours à jour, sécurisé et performant avec un support humain réactif.",
    features: ["Mises à jour", "Sauvegardes", "Support 24/7", "Rapport analytics"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "100px 24px", backgroundColor: "#F8FDF9" }} id="services">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "inline-block", backgroundColor: "#E8F5ED",
            color: "#1B7A3E", fontSize: "11px", fontWeight: 700,
            padding: "6px 16px", borderRadius: "999px",
            letterSpacing: "2.5px", marginBottom: "20px",
          }}>
            NOS SERVICES
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800,
            color: "#111", lineHeight: 1.15, marginBottom: "16px",
            letterSpacing: "-0.5px",
          }}>
            Tout ce dont vous avez besoin
            <br />
            <span style={{ color: "#1B7A3E" }}>pour grandir en ligne</span>
          </h2>
          <p style={{ color: "#888", fontSize: "17px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Des solutions digitales clé-en-main, livrées à temps, avec un support humain basé au Maroc.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                backgroundColor: "white", borderRadius: "20px",
                padding: "32px", border: "1px solid #F0F0F0",
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
                width: "48px", height: "48px", borderRadius: "14px",
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
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "#1B7A3E", color: "white",
            fontWeight: 600, fontSize: "15px",
            padding: "14px 36px", borderRadius: "999px",
            textDecoration: "none",
          }}>
            Démarrer un projet
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
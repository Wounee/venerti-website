"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "100%", label: "Clients satisfaits" },
  { value: "21j", label: "Délai moyen de livraison" },
  { value: "24/7", label: "Support disponible" },
  { value: "50+", label: "Projets livrés" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "100px 24px", backgroundColor: "#0a1a0f" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{
            display: "inline-block",
            backgroundColor: "rgba(27,122,62,0.2)",
            color: "#52C27A", fontSize: "11px", fontWeight: 700,
            padding: "6px 16px", borderRadius: "999px",
            border: "1px solid rgba(27,122,62,0.3)",
            letterSpacing: "2.5px", marginBottom: "20px",
          }}>
            POURQUOI VENERTI
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800,
            color: "white", lineHeight: 1.15, marginBottom: "16px",
            letterSpacing: "-0.5px",
          }}>
            La qualité comme
            <br />
            <span style={{ color: "#52C27A" }}>engagement.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "17px", maxWidth: "480px", margin: "0 auto" }}>
            Des résultats concrets, des projets livrés à temps, un support humain réactif.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="why-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px", padding: "40px 24px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "48px", fontWeight: 800, color: "#52C27A", marginBottom: "12px" }}>
                {stat.value}
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.6 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginTop: "24px" }} className="values-grid">
          {[
            { title: "Livraison garantie", desc: "On s'engage sur des délais réels et on les respecte. Toujours." },
            { title: "Code de qualité", desc: "Sites rapides, sécurisés, optimisés SEO. Lighthouse score 90+ garanti." },
            { title: "Support humain", desc: "Une vraie équipe disponible, pas un chatbot. On répond en moins de 24h." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px", padding: "32px",
              }}
            >
              <div style={{
                width: "40px", height: "4px", borderRadius: "2px",
                backgroundColor: "#1B7A3E", marginBottom: "20px",
              }} />
              <h3 style={{ fontWeight: 700, color: "white", fontSize: "17px", marginBottom: "10px" }}>{v.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.8 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
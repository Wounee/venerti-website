"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "Clear", label: "Offers people understand quickly" },
  { value: "Fast", label: "Pages built for modern performance" },
  { value: "Sharp", label: "Visual systems that feel credible" },
  { value: "Useful", label: "Forms and flows that create leads" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "100px 0", backgroundColor: "#0a1a0f" }}>
      <div className="site-shell">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="eyebrow" style={{
            backgroundColor: "rgba(27,122,62,0.2)",
            color: "#52C27A",
            border: "1px solid rgba(27,122,62,0.3)",
            marginBottom: "20px",
          }}>
            Why Choose Venerti
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800,
            color: "white", lineHeight: 1.15, marginBottom: "16px",
            letterSpacing: "-0.5px",
          }}>
            Built with
            <br />
            <span style={{ color: "#52C27A" }}>commercial intent.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "17px", maxWidth: "480px", margin: "0 auto" }}>
            Your site should not just exist online. It should explain what you
            do, make people trust you, and make the next step obvious.
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
                borderRadius: "8px", padding: "36px 20px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "32px", fontWeight: 800, color: "#52C27A", marginBottom: "12px" }}>
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
            {
              title: "Reliable Delivery",
              desc: "Clear timelines, organized workflow, and simple communication from first call to launch.",
            },
            {
              title: "Quality Development",
              desc: "Fast, secure, SEO-friendly websites built with clean code and modern best practices.",
            },
            {
              title: "Human Support",
              desc: "Practical help when you need updates, improvements, maintenance, or technical guidance.",
            },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px", padding: "32px",
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

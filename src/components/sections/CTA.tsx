"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "80px 24px", backgroundColor: "#F8FDF9" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            backgroundColor: "#0a1a0f",
            borderRadius: "24px",
            padding: "80px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
        >
          {/* Grid bg */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
            <svg style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1B7A3E" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          {/* Glow */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: "300px", height: "150px",
            backgroundColor: "rgba(27,122,62,0.3)", filter: "blur(60px)",
          }} />

          <div style={{ position: "relative", zIndex: 10 }}>
            <span style={{
              display: "inline-block",
              backgroundColor: "rgba(27,122,62,0.2)",
              color: "#52C27A", fontSize: "11px", fontWeight: 700,
              padding: "6px 16px", borderRadius: "999px",
              border: "1px solid rgba(27,122,62,0.3)",
              letterSpacing: "2px", marginBottom: "24px",
            }}>
              PRET A DEMARRER
            </span>

            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800, color: "white",
              lineHeight: 1.2, marginBottom: "20px",
              letterSpacing: "-0.5px",
            }}>
              Votre site web<br />
              <span style={{ color: "#52C27A" }}>vous attend.</span>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "17px", lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}>
              Obtenez un devis gratuit en 24h. Sans engagement, sans surprise.
              Juste un projet bien fait, livre a temps.
            </p>

            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              backgroundColor: "#1B7A3E", color: "white",
              fontWeight: 700, fontSize: "16px",
              padding: "16px 40px", borderRadius: "999px",
              textDecoration: "none",
            }}>
              Demander votre devis
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Skizzly",
    category: "Application Web",
    desc: "Plateforme innovante d'échange de compétences entre utilisateurs. Matching intelligent, profils détaillés et système de réputation intégré.",
    tags: ["Next.js", "MongoDB", "Python"],
    color: "#1B7A3E",
  },
  {
    title: "e-Gouvernance Berrechid",
    category: "Plateforme Citoyenne",
    desc: "Plateforme de réclamations citoyennes avec dashboard admin et traitement automatisé des demandes par intelligence artificielle.",
    tags: ["React", "FastAPI", "AI"],
    color: "#145C2F",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "100px 24px", backgroundColor: "white" }} id="portfolio">
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
            NOS RÉALISATIONS
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800,
            color: "#111", lineHeight: 1.15, marginBottom: "16px",
            letterSpacing: "-0.5px",
          }}>
            Des projets qui parlent
            <br />
            <span style={{ color: "#1B7A3E" }}>d&apos;eux-mêmes</span>
          </h2>
          <p style={{ color: "#888", fontSize: "17px", maxWidth: "480px", margin: "0 auto" }}>
            Chaque projet est unique. Voici une sélection de nos réalisations récentes.
          </p>
        </motion.div>

        {/* Projects — 2 large cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="portfolio-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              style={{
                backgroundColor: "#F8FDF9", borderRadius: "24px",
                border: "1px solid #F0F0F0", overflow: "hidden",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(27,122,62,0.3)";
                e.currentTarget.style.boxShadow = "0 12px 48px rgba(27,122,62,0.1)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#F0F0F0";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Visual */}
              <div style={{
                height: "240px", backgroundColor: project.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
                  <svg style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`g${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#g${i})`} />
                  </svg>
                </div>
                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <svg viewBox="0 0 60 60" style={{ width: "64px", height: "64px", opacity: 0.3 }}>
                    <polygon points="0,30 30,0 30,60" fill="white" />
                    <polygon points="60,30 30,0 30,60" fill="white" fillOpacity="0.6" />
                    <polygon points="30,15 18,40 30,47 42,40" fill={project.color} />
                  </svg>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "12px", letterSpacing: "2px", fontWeight: 600 }}>
                    {project.category.toUpperCase()}
                  </p>
                </div>
              </div>

              <div style={{ padding: "32px" }}>
                <h3 style={{ fontWeight: 800, fontSize: "22px", color: "#111", marginBottom: "12px" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.8, marginBottom: "20px" }}>
                  {project.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      backgroundColor: "#E8F5ED", color: "#1B7A3E",
                      fontSize: "12px", fontWeight: 600,
                      padding: "5px 14px", borderRadius: "999px",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            border: "2px solid #1B7A3E", color: "#1B7A3E",
            fontWeight: 600, fontSize: "15px",
            padding: "14px 36px", borderRadius: "999px",
            textDecoration: "none",
          }}>
            Démarrer un projet
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
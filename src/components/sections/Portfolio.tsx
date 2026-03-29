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
    accent: "#C9A84C",
    bg: "#FDF8F0",
    screens: [
      { label: "Skills Discovery", color: "#fff", border: "#e8e0d0" },
      { label: "Skill Matches", color: "#fff", border: "#e8e0d0" },
      { label: "Messages", color: "#fff", border: "#e8e0d0" },
    ],
    stat1: "90", stat1label: "Skills disponibles",
    stat2: "98%", stat2label: "Match accuracy",
  },
  {
    title: "e-Gouvernance Berrechid",
    category: "Plateforme Citoyenne",
    desc: "Plateforme de réclamations citoyennes avec dashboard admin et traitement automatisé des demandes par intelligence artificielle.",
    tags: ["React", "FastAPI", "AI"],
    accent: "#2563EB",
    bg: "#F0F5FF",
    screens: [
      { label: "Accueil citoyen", color: "#fff", border: "#dce8ff" },
      { label: "Dashboard Admin", color: "#fff", border: "#dce8ff" },
      { label: "Analyse IA", color: "#fff", border: "#dce8ff" },
    ],
    stat1: "157", stat1label: "Réclamations traitées",
    stat2: "3", stat2label: "Langues supportées",
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

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.2 }}
              style={{
                backgroundColor: project.bg,
                borderRadius: "24px",
                border: `1px solid ${project.accent}22`,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1.2fr" : "1.2fr 1fr",
                transition: "all 0.3s",
              }}
              className="portfolio-card"
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 16px 56px ${project.accent}20`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Content side */}
              <div style={{
                padding: "48px",
                order: i % 2 === 0 ? 0 : 1,
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}>
                <span style={{
                  fontSize: "11px", fontWeight: 700,
                  color: project.accent, letterSpacing: "2px",
                  textTransform: "uppercase", marginBottom: "12px",
                  display: "block",
                }}>
                  {project.category}
                </span>
                <h3 style={{
                  fontWeight: 800, fontSize: "32px", color: "#111",
                  marginBottom: "16px", letterSpacing: "-0.5px",
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: "#666", fontSize: "15px", lineHeight: 1.8,
                  marginBottom: "28px",
                }}>
                  {project.desc}
                </p>

                {/* Stats */}
                <div style={{ display: "flex", gap: "32px", marginBottom: "28px" }}>
                  <div>
                    <p style={{ fontSize: "28px", fontWeight: 800, color: project.accent }}>{project.stat1}</p>
                    <p style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>{project.stat1label}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "28px", fontWeight: 800, color: project.accent }}>{project.stat2}</p>
                    <p style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>{project.stat2label}</p>
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      backgroundColor: `${project.accent}15`,
                      color: project.accent,
                      fontSize: "12px", fontWeight: 600,
                      padding: "5px 14px", borderRadius: "999px",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual side */}
              <div style={{
                padding: "40px 40px 0",
                order: i % 2 === 0 ? 1 : 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "flex-end",
                gap: "12px",
                background: `linear-gradient(180deg, ${project.accent}08 0%, ${project.accent}18 100%)`,
              }}>
                {/* Browser mockup */}
                {project.screens.map((screen, si) => (
                  <div
                    key={si}
                    style={{
                      width: si === 0 ? "100%" : si === 1 ? "90%" : "80%",
                      backgroundColor: "white",
                      borderRadius: "12px 12px 0 0",
                      border: `1px solid ${screen.border}`,
                      borderBottom: "none",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    }}
                  >
                    {/* Browser bar */}
                    <div style={{
                      padding: "8px 12px",
                      backgroundColor: "#F5F5F5",
                      display: "flex", alignItems: "center", gap: "6px",
                      borderBottom: `1px solid ${screen.border}`,
                    }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28C940" }} />
                      <div style={{
                        flex: 1, backgroundColor: "white", borderRadius: "4px",
                        padding: "3px 10px", fontSize: "10px", color: "#999",
                        marginLeft: "8px",
                      }}>
                        {screen.label}
                      </div>
                    </div>
                    {/* Screen content placeholder */}
                    <div style={{
                      height: "80px",
                      background: `linear-gradient(135deg, ${project.accent}08, ${project.accent}15)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <p style={{ fontSize: "11px", color: project.accent, fontWeight: 600, opacity: 0.7 }}>
                        {screen.label}
                      </p>
                    </div>
                  </div>
                ))}
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
        @media (max-width: 800px) {
          .portfolio-card { grid-template-columns: 1fr !important; }
          .portfolio-card > div { order: unset !important; }
        }
      `}</style>
    </section>
  );
}
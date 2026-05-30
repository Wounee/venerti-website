"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "ImmiNexus Consultants",
    category: "Immigration Website",
    desc:
      "A professional immigration consulting website with multilingual pages, online booking, automated confirmations, and a responsive experience for clients abroad.",
    tags: ["Next.js", "React", "Vercel", "PDF", "Multilingual"],
    accent: "#1B7A3E",
    bg: "#F4FBF6",
    screens: ["Homepage", "Services", "Booking"],
    stat1: "3",
    stat1label: "Languages",
    stat2: "24/7",
    stat2label: "Online booking",
  },
  {
    title: "Skizzly",
    category: "Web Application",
    desc:
      "A skill-sharing product concept with user matching, messaging, rich profiles, and reputation tools designed for trust between members.",
    tags: ["Next.js", "MongoDB", "Python"],
    accent: "#B58A24",
    bg: "#FDF8F0",
    screens: ["Discover", "Matches", "Messaging"],
    stat1: "90+",
    stat1label: "Available skills",
    stat2: "98%",
    stat2label: "Match accuracy",
  },
  {
    title: "e-Governance",
    category: "Citizen Platform",
    desc:
      "A civic platform concept with AI-assisted request processing, analytics dashboards, and multilingual accessibility for citizens and teams.",
    tags: ["React", "FastAPI", "AI"],
    accent: "#2563EB",
    bg: "#F3F7FF",
    screens: ["Citizen Portal", "Dashboard", "AI Analysis"],
    stat1: "157+",
    stat1label: "Requests processed",
    stat2: "3",
    stat2label: "Languages",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "100px 0", backgroundColor: "white" }} id="portfolio">
      <div className="site-shell">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="eyebrow" style={{ backgroundColor: "#E8F5ED", color: "#1B7A3E", marginBottom: "20px" }}>
            Our Projects
          </span>
          <h2 className="section-heading" style={{ marginBottom: "16px" }}>
            Project examples with
            <br />
            <span style={{ color: "#1B7A3E" }}>real product thinking.</span>
          </h2>
          <p className="section-copy" style={{ maxWidth: "560px", margin: "0 auto" }}>
            A good website is more than a nice screen. It needs structure,
            conversion paths, technical quality, and a clear reason for people
            to take the next step.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "34px" }}>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.16 }}
              style={{
                backgroundColor: project.bg,
                borderRadius: "8px",
                border: `1px solid ${project.accent}22`,
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1.18fr" : "1.18fr 1fr",
                transition: "all 0.3s",
              }}
              className="portfolio-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 16px 56px ${project.accent}20`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  padding: "48px",
                  order: i % 2 === 0 ? 0 : 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: project.accent,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                    display: "block",
                  }}
                >
                  {project.category}
                </span>
                <h3 style={{ fontWeight: 850, fontSize: "32px", color: "#111", marginBottom: "16px" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#58625b", fontSize: "15px", lineHeight: 1.85, marginBottom: "28px" }}>
                  {project.desc}
                </p>

                <div style={{ display: "flex", gap: "32px", marginBottom: "28px", flexWrap: "wrap" }}>
                  <div>
                    <p style={{ fontSize: "28px", fontWeight: 850, color: project.accent }}>{project.stat1}</p>
                    <p style={{ fontSize: "12px", color: "#6d766f", marginTop: "2px" }}>{project.stat1label}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "28px", fontWeight: 850, color: project.accent }}>{project.stat2}</p>
                    <p style={{ fontSize: "12px", color: "#6d766f", marginTop: "2px" }}>{project.stat2label}</p>
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: `${project.accent}15`,
                        color: project.accent,
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "6px 12px",
                        borderRadius: "999px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: "40px 40px 0",
                  order: i % 2 === 0 ? 1 : 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "12px",
                  background: `linear-gradient(180deg, ${project.accent}08 0%, ${project.accent}18 100%)`,
                }}
              >
                {project.screens.map((screen, si) => (
                  <div
                    key={screen}
                    style={{
                      width: si === 0 ? "100%" : si === 1 ? "90%" : "80%",
                      backgroundColor: "white",
                      borderRadius: "8px 8px 0 0",
                      border: `1px solid ${project.accent}33`,
                      borderBottom: "none",
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#F5F5F5",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        borderBottom: `1px solid ${project.accent}22`,
                      }}
                    >
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28C940" }} />
                      <div
                        style={{
                          flex: 1,
                          backgroundColor: "white",
                          borderRadius: "4px",
                          padding: "3px 10px",
                          fontSize: "10px",
                          color: "#777",
                          marginLeft: "8px",
                        }}
                      >
                        {screen}
                      </div>
                    </div>
                    <div
                      style={{
                        height: "86px",
                        background: `linear-gradient(135deg, ${project.accent}08, ${project.accent}15)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p style={{ fontSize: "11px", color: project.accent, fontWeight: 700, opacity: 0.75 }}>
                        {screen}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "2px solid #1B7A3E",
              color: "#1B7A3E",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 30px",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            Start a project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .portfolio-card { grid-template-columns: 1fr !important; }
          .portfolio-card > div { order: unset !important; }
        }
        @media (max-width: 560px) {
          .portfolio-card > div { padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}

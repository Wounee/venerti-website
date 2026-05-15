"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      backgroundColor: "#0a1a0f",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.2 }}>
        <svg style={{ width: "100%", height: "100%" }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1B7A3E" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow */}
      <div style={{
        position: "absolute", top: "25%", left: "20%",
        width: "500px", height: "500px",
        backgroundColor: "rgba(27,122,62,0.15)",
        borderRadius: "50%", filter: "blur(80px)",
      }} />

      {/* Diamond deco */}
      <div style={{
        position: "absolute", right: "5%", top: "50%",
        transform: "translateY(-50%)", opacity: 0.08,
      }}>
        <svg viewBox="0 0 300 300" style={{ width: "400px", height: "400px" }}>
          <polygon points="150,0 300,150 150,300 0,150" fill="none" stroke="#1B7A3E" strokeWidth="1" />
          <polygon points="150,40 260,150 150,260 40,150" fill="none" stroke="#1B7A3E" strokeWidth="0.6" />
          <polygon points="150,80 220,150 150,220 80,150" fill="#1B7A3E" fillOpacity="0.3" />
        </svg>
      </div>

      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: "1280px", margin: "0 auto",
        padding: "128px 48px 80px",
        width: "100%",
      }}>
        <div style={{ maxWidth: "800px" }}>


          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: "clamp(42px, 6vw, 80px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "24px",
              letterSpacing: "-1px",
            }}
          >
            Your professional website
            <br />
            <span style={{ color: "#52C27A" }}>built to last</span>
            <br />
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "18px",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "560px",
            }}
          >
            We create modern, responsive, and conversion-focused websites for businesses,
            freelancers, and startups that want to stand out online.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "64px" }}
          >
            <Link href="/devis" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "#1B7A3E", color: "white",
              fontWeight: 600, fontSize: "16px",
              padding: "14px 32px", borderRadius: "999px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}>
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white", fontWeight: 600, fontSize: "16px",
              padding: "14px 32px", borderRadius: "999px",
              textDecoration: "none",
            }}>
              View Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}
          >
            {[
              { value: "Fast", label: "Project delivery" },
              { value: "Modern", label: "Web experiences" },
              { value: "Responsive", label: "Mobile-first design" },
              { value: "24/7", label: "Online presence" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#52C27A" }}>{stat.value}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          position: "absolute", bottom: "32px",
          left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        <ChevronDown size={24} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
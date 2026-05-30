"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import WebsiteMockup3D from "@/components/ui/WebsiteMockup3D";

const proof = [
  { value: "21d", label: "Typical launch window" },
  { value: "100%", label: "Mobile-first builds" },
  { value: "SEO", label: "Clean foundations included" },
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-shell">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="eyebrow"
            style={{
              color: "#b8f3ca",
              border: "1px solid rgba(126,224,160,0.24)",
              background: "rgba(126,224,160,0.1)",
              marginBottom: 22,
            }}
          >
            <Sparkles size={14} />
            Venertiweb Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="hero-title"
          >
            Websites that make your business look <span>ready for more.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="hero-copy"
          >
            Venertiweb designs and builds sharp, fast websites for businesses
            that need credibility, clear offers, and a client experience that
            works beautifully on every screen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="hero-actions"
          >
            <Link href="/devis" className="button-primary">
              Get a free quote
              <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="button-secondary">
              See recent work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
            className="hero-proof"
          >
            {proof.map((item) => (
              <div className="hero-proof-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <WebsiteMockup3D />
      </div>
    </section>
  );
}

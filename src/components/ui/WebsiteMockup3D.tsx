"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gauge, MousePointerClick } from "lucide-react";

type WebsiteMockup3DProps = {
  compact?: boolean;
};

export default function WebsiteMockup3D({ compact = false }: WebsiteMockup3DProps) {
  return (
    <div className={compact ? "mockup-stage mockup-stage-compact" : "mockup-stage"} aria-hidden="true">
      <motion.div
        className="mockup-depth-layer mockup-depth-layer-one"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mockup-depth-layer mockup-depth-layer-two"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="mockup-browser"
        initial={{ opacity: 0, rotateX: 12, rotateY: -18, y: 30 }}
        animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mockup-browser-bar">
          <span />
          <span />
          <span />
          <div>venertiweb.com/live-preview</div>
        </div>

        <div className="mockup-browser-screen">
          <div className="mockup-nav">
            <div className="mockup-logo" />
            <div />
            <div />
            <div />
          </div>

          <div className="mockup-hero-block">
            <div>
              <span />
              <strong />
              <strong className="short" />
              <p />
              <button />
            </div>
            <div className="mockup-visual-card">
              <Gauge size={26} />
              <strong>98</strong>
              <span>Speed score</span>
            </div>
          </div>

          <div className="mockup-card-row">
            <div />
            <div />
            <div />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mockup-phone"
        initial={{ opacity: 0, x: 28, y: 24, rotate: 8 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0], rotate: 5 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.25 },
          x: { duration: 0.65, delay: 0.25 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="mockup-phone-notch" />
        <div className="mockup-phone-hero" />
        <div className="mockup-phone-lines">
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-phone-button" />
      </motion.div>

      <motion.div
        className="mockup-stat mockup-stat-left"
        initial={{ opacity: 0, x: -16, y: 10 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.45, delay: 0.45 },
          x: { duration: 0.55, delay: 0.45 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <CheckCircle2 size={16} />
        <div>
          <strong>Launch ready</strong>
          <span>Design, SEO, forms, QA</span>
        </div>
      </motion.div>

      <motion.div
        className="mockup-stat mockup-stat-right"
        initial={{ opacity: 0, x: 16, y: -8 }}
        animate={{ opacity: 1, x: 0, y: [0, 7, 0] }}
        transition={{
          opacity: { duration: 0.45, delay: 0.55 },
          x: { duration: 0.55, delay: 0.55 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <MousePointerClick size={16} />
        <div>
          <strong>Clear CTA</strong>
          <span>Built to convert visitors</span>
        </div>
      </motion.div>
    </div>
  );
}

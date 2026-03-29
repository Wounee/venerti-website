"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projets livrés", desc: "Sites web, e-commerces, apps" },
  { value: 21, suffix: "j", label: "Délai moyen", desc: "De la signature à la mise en ligne" },
  { value: 100, suffix: "%", label: "Clients satisfaits", desc: "Taux de satisfaction global" },
  { value: 3, suffix: "x", label: "ROI moyen client", desc: "Retour sur investissement constaté" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} style={{ fontSize: "48px", fontWeight: 800, color: "#1B7A3E" }}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ padding: "80px 24px", backgroundColor: "white", borderTop: "1px solid #E8F5ED", borderBottom: "1px solid #E8F5ED" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                textAlign: "center", padding: "32px 16px",
                borderRadius: "20px", transition: "background 0.3s",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F8FDF9")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p style={{ fontWeight: 700, color: "#111", fontSize: "15px", marginTop: "8px" }}>{stat.label}</p>
              <p style={{ color: "#aaa", fontSize: "13px", marginTop: "4px" }}>{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
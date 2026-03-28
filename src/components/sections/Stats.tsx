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
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#1B7A3E]">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white border-y border-[#E8F5ED]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl hover:bg-[#E8F5ED] transition-colors duration-300 group"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="mt-3">
                <p className="font-semibold text-gray-800 text-sm">{stat.label}</p>
                <p className="text-gray-400 text-xs mt-1">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
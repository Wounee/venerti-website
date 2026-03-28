"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Argana Restaurant",
    category: "Site Vitrine",
    desc: "Site vitrine moderne avec menu digital et réservation en ligne pour un restaurant à Marrakech.",
    tags: ["Next.js", "Tailwind", "SEO"],
    color: "#1B7A3E",
  },
  {
    title: "Souk Artisanat",
    category: "E-commerce",
    desc: "Boutique en ligne pour artisans marocains avec paiement CMI intégré et gestion catalogue.",
    tags: ["React", "MongoDB", "CMI"],
    color: "#145C2F",
  },
  {
    title: "Dr. Benali Clinic",
    category: "Site Vitrine",
    desc: "Site professionnel pour cabinet médical avec prise de rendez-vous en ligne intégrée.",
    tags: ["Next.js", "Calendly", "SEO Local"],
    color: "#1B7A3E",
  },
  {
    title: "FitMaroc App",
    category: "Landing Page",
    desc: "Landing page haute conversion pour une application fitness marocaine. +40% de téléchargements.",
    tags: ["React", "Framer Motion", "Analytics"],
    color: "#145C2F",
  },
  {
    title: "Immo Premium",
    category: "Application Web",
    desc: "Plateforme immobilière avec recherche avancée, filtres et estimation automatique de prix.",
    tags: ["Next.js", "Python", "MongoDB"],
    color: "#1B7A3E",
  },
  {
    title: "CoachPro Maroc",
    category: "Landing Page",
    desc: "Site personal branding pour coach business avec tunnel de vente et intégration CRM.",
    tags: ["Next.js", "Stripe", "HubSpot"],
    color: "#145C2F",
  },
];

const categories = ["Tous", "Site Vitrine", "E-commerce", "Landing Page", "Application Web"];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#E8F5ED] text-[#1B7A3E] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-wide">
            NOS RÉALISATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Des projets qui parlent
            <br />
            <span className="text-[#1B7A3E]">d'eux-mêmes</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Chaque projet est unique. Voici une sélection de nos réalisations récentes.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-[#1B7A3E] text-white shadow-md"
                  : "bg-[#F8FDF9] text-gray-600 hover:bg-[#E8F5ED] hover:text-[#1B7A3E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-[#F8FDF9] rounded-2xl overflow-hidden border border-gray-100 hover:border-[#1B7A3E]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Color block placeholder */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${i}`} width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                  </svg>
                </div>
                <svg viewBox="0 0 60 60" className="w-16 h-16 opacity-30">
                  <polygon points="0,30 30,0 30,60" fill="#145C2F" />
                  <polygon points="60,30 30,0 30,60" fill="white" fillOpacity="0.5" />
                  <polygon points="30,15 18,40 30,47 42,40" fill={project.color} />
                </svg>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[#1B7A3E] text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-lg mt-0.5">{project.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#E8F5ED] text-[#1B7A3E] text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border-2 border-[#1B7A3E] text-[#1B7A3E] hover:bg-[#1B7A3E] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
          >
            Voir tout le portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Karim Bensouda",
    role: "Gérant, Argana Restaurant",
    content: "Venerti a transformé notre présence en ligne. Notre site est magnifique, rapide et nos réservations en ligne ont augmenté de 60% en 2 mois. Équipe très professionnelle et réactive.",
    rating: 5,
    initials: "KB",
  },
  {
    name: "Fatima Zahra El Idrissi",
    role: "Fondatrice, Souk Artisanat",
    content: "Notre boutique en ligne a été livrée en 18 jours exactement comme promis. Le design est moderne et nos ventes ont décollé dès le premier mois. Je recommande vivement !",
    rating: 5,
    initials: "FZ",
  },
  {
    name: "Dr. Youssef Benali",
    role: "Médecin, Benali Clinic",
    content: "Site très professionnel qui reflète parfaitement l'image de notre cabinet. La prise de rendez-vous en ligne a vraiment simplifié notre quotidien. Merci Venerti !",
    rating: 5,
    initials: "YB",
  },
  {
    name: "Sara Moussaoui",
    role: "Coach Business, CoachPro",
    content: "L'équipe a parfaitement compris ma vision. Le site convertit vraiment — j'ai eu mes 5 premiers clients coaching via le site dans la première semaine de lancement.",
    rating: 5,
    initials: "SM",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#0a1a0f]" id="temoignages">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#1B7A3E]/20 text-[#52C27A] text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-[#1B7A3E]/30 tracking-wide">
            TÉMOIGNAGES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Ce que disent
            <br />
            <span className="text-[#52C27A]">nos clients</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Des résultats concrets, des clients satisfaits. Leur succès est notre meilleure carte de visite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1B7A3E]/50 hover:bg-white/8 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1B7A3E] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
                <Quote size={24} className="text-[#1B7A3E] opacity-50 shrink-0" />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#52C27A] fill-[#52C27A]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{t.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
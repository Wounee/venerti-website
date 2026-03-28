"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, ShoppingCart, Smartphone, Search, Paintbrush, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Monitor,
    title: "Site Vitrine",
    desc: "Un site professionnel qui reflète votre image de marque et convertit vos visiteurs en clients.",
    price: "À partir de 3 500 MAD",
    features: ["Design sur mesure", "100% responsive", "SEO optimisé", "Livraison 7–14 jours"],
    color: "#1B7A3E",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Une boutique en ligne complète avec gestion des produits, paiements et tableau de bord.",
    price: "À partir de 10 000 MAD",
    features: ["Paiement CMI/Stripe", "Gestion catalogue", "Dashboard admin", "Multi-langues"],
    color: "#145C2F",
  },
  {
    icon: Smartphone,
    title: "Landing Page",
    desc: "Une page de conversion optimisée pour vos campagnes publicitaires Google et Meta.",
    price: "À partir de 2 500 MAD",
    features: ["Conversion maximale", "A/B testing ready", "Chargement < 1s", "Intégration CRM"],
    color: "#1B7A3E",
  },
  {
    icon: Search,
    title: "SEO & Visibilité",
    desc: "Apparaissez en première page de Google et attirez des clients locaux qualifiés.",
    price: "À partir de 1 500 MAD/mois",
    features: ["Audit SEO complet", "Google My Business", "Mots-clés locaux", "Rapport mensuel"],
    color: "#145C2F",
  },
  {
    icon: Paintbrush,
    title: "Identité Visuelle",
    desc: "Logo, charte graphique et supports de communication pour une image cohérente.",
    price: "À partir de 2 000 MAD",
    features: ["Logo vectoriel", "Charte graphique", "Formats réseaux", "Fichiers sources"],
    color: "#1B7A3E",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Votre site toujours à jour, sécurisé et performant avec un support humain réactif.",
    price: "À partir de 500 MAD/mois",
    features: ["Mises à jour", "Sauvegardes", "Support 24/7", "Rapport analytics"],
    color: "#145C2F",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-[#F8FDF9]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#E8F5ED] text-[#1B7A3E] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-wide">
            NOS SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Tout ce dont vous avez
            <br />
            <span className="text-[#1B7A3E]">besoin pour grandir en ligne</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Des solutions digitales clé-en-main, livrées à temps, avec un support humain basé au Maroc.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#1B7A3E]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: service.color + "15" }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52C27A] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-[#1B7A3E] font-semibold text-sm">{service.price}</span>
                <Link
                  href="/devis"
                  className="flex items-center gap-1 text-[#1B7A3E] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Démarrer <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#1B7A3E] hover:bg-[#145C2F] text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105"
          >
            Voir tous nos services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
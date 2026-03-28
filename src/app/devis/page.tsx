import { ArrowRight } from "lucide-react";
import Link from "next/link";

const options = [
  { type: "Site Vitrine Starter", price: "3 500 MAD", delay: "7–10 jours", features: ["3–5 pages", "Design responsive", "SEO de base", "Formulaire contact"] },
  { type: "Site Vitrine Pro", price: "6 000 MAD", delay: "10–14 jours", features: ["5–10 pages", "Blog intégré", "Google Analytics", "3 révisions"] },
  { type: "E-commerce", price: "10 000 MAD", delay: "14–21 jours", features: ["Boutique complète", "Paiement en ligne", "Gestion catalogue", "Dashboard admin"] },
  { type: "Sur Mesure", price: "Devis personnalisé", delay: "À définir", features: ["Application web", "Fonctionnalités custom", "Intégrations API", "Support dédié"] },
];

export default function DevisPage() {
  return (
    <div style={{ paddingTop: "96px" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E8F5ED] text-[#1B7A3E] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            DEVIS GRATUIT
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choisissez votre
            <br />
            <span className="text-[#1B7A3E]">formule.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Des tarifs transparents, sans surprise. Contactez-nous pour un devis personnalisé gratuit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {options.map((opt, i) => (
            <div key={opt.type} className={`rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${i === 2 ? "bg-[#1B7A3E] border-[#1B7A3E] text-white" : "bg-white border-gray-100"}`}>
              {i === 2 && (
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  POPULAIRE
                </span>
              )}
              <h3 className={`font-bold text-lg mb-2 ${i === 2 ? "text-white" : "text-gray-900"}`}>{opt.type}</h3>
              <p className={`text-2xl font-bold mb-1 ${i === 2 ? "text-[#a8e6bf]" : "text-[#1B7A3E]"}`}>{opt.price}</p>
              <p className={`text-xs mb-6 ${i === 2 ? "text-white/70" : "text-gray-400"}`}>Livraison : {opt.delay}</p>
              <ul className="space-y-2 mb-8">
                {opt.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${i === 2 ? "text-white/90" : "text-gray-600"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 2 ? "bg-[#a8e6bf]" : "bg-[#52C27A]"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${i === 2 ? "bg-white text-[#1B7A3E] hover:bg-gray-100" : "bg-[#E8F5ED] text-[#1B7A3E] hover:bg-[#1B7A3E] hover:text-white"}`}
              >
                Choisir <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
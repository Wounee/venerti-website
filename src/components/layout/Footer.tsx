import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
  { href: "/devis", label: "Devis Gratuit" },
];

const services = [
  "Site Vitrine",
  "E-commerce",
  "Landing Page",
  "SEO & Référencement",
  "Maintenance",
  "Identité Visuelle",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1a0f] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <polygon points="0,30 30,0 30,60" fill="#145C2F" />
                  <polygon points="60,30 30,0 30,60" fill="#2ea55a" />
                  <polygon points="30,15 18,40 30,47 42,40" fill="#0a1a0f" />
                  <circle cx="30" cy="7" r="4" fill="#52C27A" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-xl text-white">Venerti</span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#52C27A] uppercase">Web Design</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre partenaire digital au Maroc. Nous créons des sites web qui convertissent et des expériences qui marquent.
            </p>
            <div className="flex items-center gap-3">
           <a href="https://instagram.com/venertiweb" target="_blank" rel="noopener noreferrer"
  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1B7A3E] flex items-center justify-center transition-colors duration-200 text-white text-xs font-bold">
  IG
</a>
<a href="https://linkedin.com/company/venerti" target="_blank" rel="noopener noreferrer"
  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1B7A3E] flex items-center justify-center transition-colors duration-200 text-white text-xs font-bold">
  LI
</a>
<a href="https://facebook.com/venertiweb" target="_blank" rel="noopener noreferrer"
  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1B7A3E] flex items-center justify-center transition-colors duration-200 text-white text-xs font-bold">
  FB
</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-gray-400 hover:text-[#52C27A] text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-[#52C27A] transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B7A3E]" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@venerti.ma"
                  className="text-gray-400 hover:text-[#52C27A] text-sm transition-colors flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 text-[#1B7A3E] shrink-0" />
                  contact@venerti.ma
                </a>
              </li>
              <li>
                <a href="tel:+212600000000"
                  className="text-gray-400 hover:text-[#52C27A] text-sm transition-colors flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 text-[#1B7A3E] shrink-0" />
                  +212 6 00 00 00 00
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-[#1B7A3E] shrink-0" />
                  Maroc
                </span>
              </li>
            </ul>
            <Link href="/devis"
              className="mt-6 inline-block bg-[#1B7A3E] hover:bg-[#145C2F] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200">
              Devis Gratuit →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2026 Venerti Web Design. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs">
            Fait avec <span className="text-[#52C27A]">♥</span> au Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
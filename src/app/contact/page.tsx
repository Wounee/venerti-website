"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Erreur inconnue");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });

    } catch {
      setErrorMsg("Erreur réseau. Vérifiez votre connexion.");
      setStatus("error");
    }
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "96px", paddingBottom: "80px", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            display: "inline-block", backgroundColor: "#E8F5ED",
            color: "#1B7A3E", fontSize: "12px", fontWeight: 600,
            padding: "6px 16px", borderRadius: "999px",
            letterSpacing: "2px", marginBottom: "16px",
          }}>
            CONTACT
          </span>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800,
            color: "#111", lineHeight: 1.15, marginBottom: "16px",
            letterSpacing: "-1px",
          }}>
            Parlons de votre<br />
            <span style={{ color: "#1B7A3E" }}>projet.</span>
          </h1>
          <p style={{ color: "#888", fontSize: "17px", maxWidth: "480px", margin: "0 auto" }}>
            Réponse garantie en moins de 24h. Devis gratuit et sans engagement.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "40px" }} className="contact-grid">

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{
              backgroundColor: "#F8FDF9", borderRadius: "20px",
              padding: "32px", border: "1px solid #E8F5ED",
            }}>
              <h2 style={{ fontWeight: 700, fontSize: "20px", color: "#111", marginBottom: "24px" }}>
                Contactez-nous
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: Mail, label: "Email", value: "contact@venerti.com", href: "mailto:contact@venerti.com" },
                  { icon: Phone, label: "Téléphone", value: "+212 6 00 00 00 00", href: "tel:+212600000000" },
                  { icon: MapPin, label: "Localisation", value: "Maroc", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%",
                      backgroundColor: "#E8F5ED", display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <Icon size={18} color="#1B7A3E" />
                    </div>
                    <div>
                      <p style={{ fontSize: "12px", color: "#aaa", marginBottom: "2px" }}>{label}</p>
                      {href ? (
                        <a href={href} style={{ fontWeight: 600, color: "#111", fontSize: "15px", textDecoration: "none" }}>{value}</a>
                      ) : (
                        <p style={{ fontWeight: 600, color: "#111", fontSize: "15px" }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <a
  href="https://wa.me/212600000000"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    backgroundColor: "#25D366",
    color: "white",
    fontWeight: 600,
    fontSize: "15px",
    padding: "16px 24px",
    borderRadius: "16px",
    textDecoration: "none",
  }}
>
  <MessageCircle size={20} />
  Discuter sur WhatsApp
</a>
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: "#F8FDF9", borderRadius: "20px",
            padding: "40px", border: "1px solid #E8F5ED",
          }}>
            <h2 style={{ fontWeight: 700, fontSize: "20px", color: "#111", marginBottom: "28px" }}>
              Envoyez un message
            </h2>

            {status === "success" ? (
              <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", gap: "16px", padding: "60px 20px", textAlign: "center",
              }}>
                <CheckCircle size={56} color="#1B7A3E" />
                <h3 style={{ fontWeight: 700, fontSize: "20px", color: "#111" }}>Message envoyé !</h3>
                <p style={{ color: "#888", fontSize: "15px" }}>On vous répond dans moins de 24h.</p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    backgroundColor: "#1B7A3E", color: "white",
                    fontWeight: 600, padding: "12px 28px",
                    borderRadius: "999px", border: "none", cursor: "pointer",
                    fontSize: "14px", marginTop: "8px",
                  }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "8px" }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      style={{
                        width: "100%", padding: "12px 16px",
                        borderRadius: "12px", border: "1px solid #E0E0E0",
                        fontSize: "14px", outline: "none",
                        backgroundColor: "white", boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "8px" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      style={{
                        width: "100%", padding: "12px 16px",
                        borderRadius: "12px", border: "1px solid #E0E0E0",
                        fontSize: "14px", outline: "none",
                        backgroundColor: "white", boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "8px" }}>
                    Sujet *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Création site vitrine"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    style={{
                      width: "100%", padding: "12px 16px",
                      borderRadius: "12px", border: "1px solid #E0E0E0",
                      fontSize: "14px", outline: "none",
                      backgroundColor: "white", boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#555", marginBottom: "8px" }}>
                    Message *
                  </label>
                  <textarea
                    placeholder="Décrivez votre projet..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    style={{
                      width: "100%", padding: "12px 16px",
                      borderRadius: "12px", border: "1px solid #E0E0E0",
                      fontSize: "14px", outline: "none",
                      backgroundColor: "white", resize: "none",
                      boxSizing: "border-box", fontFamily: "inherit",
                    }}
                  />
                </div>

                {status === "error" && (
                  <div style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    backgroundColor: "#FEF2F2", border: "1px solid #FECACA",
                    borderRadius: "12px", padding: "12px 16px",
                  }}>
                    <AlertCircle size={16} color="#DC2626" />
                    <span style={{ fontSize: "14px", color: "#DC2626" }}>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    backgroundColor: status === "loading" ? "#888" : "#1B7A3E",
                    color: "white", fontWeight: 600, fontSize: "15px",
                    padding: "14px 24px", borderRadius: "12px",
                    border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s",
                  }}
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const countryCodes = [
  { code: "+212", country: "MA" },
  { code: "+213", country: "DZ" },
  { code: "+216", country: "TN" },
  { code: "+20", country: "EG" },
  { code: "+221", country: "SN" },
  { code: "+225", country: "CI" },
  { code: "+33", country: "FR" },
  { code: "+32", country: "BE" },
  { code: "+41", country: "CH" },
  { code: "+44", country: "GB" },
  { code: "+49", country: "DE" },
  { code: "+34", country: "ES" },
  { code: "+39", country: "IT" },
  { code: "+31", country: "NL" },
  { code: "+351", country: "PT" },
  { code: "+1", country: "US/CA" },
  { code: "+52", country: "MX" },
  { code: "+55", country: "BR" },
  { code: "+966", country: "SA" },
  { code: "+971", country: "AE" },
  { code: "+974", country: "QA" },
  { code: "+965", country: "KW" },
  { code: "+962", country: "JO" },
  { code: "+961", country: "LB" },
  { code: "+90", country: "TR" },
  { code: "+91", country: "IN" },
  { code: "+86", country: "CN" },
  { code: "+81", country: "JP" },
  { code: "+82", country: "KR" },
  { code: "+61", country: "AU" },
  { code: "+64", country: "NZ" },
  { code: "+27", country: "ZA" },
  { code: "+234", country: "NG" },
  { code: "+254", country: "KE" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", countryCode: "+212", subject: "", message: "" });
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
        body: JSON.stringify({ ...form, phone: `${form.countryCode} ${form.phone}` }),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || "Erreur inconnue"); setStatus("error"); return; }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", countryCode: "+212", subject: "", message: "" });
    } catch {
      setErrorMsg("Erreur réseau. Vérifiez votre connexion.");
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px",
    borderRadius: "12px", border: "1.5px solid #EBEBEB",
    fontSize: "14px", outline: "none",
    backgroundColor: "white", boxSizing: "border-box" as const,
    fontFamily: "inherit", color: "#111",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block", fontSize: "13px",
    fontWeight: 600, color: "#555", marginBottom: "8px",
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "96px", paddingBottom: "80px", backgroundColor: "#F8FDF9" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            display: "inline-block", backgroundColor: "#E8F5ED",
            color: "#1B7A3E", fontSize: "11px", fontWeight: 700,
            padding: "6px 16px", borderRadius: "999px",
            letterSpacing: "2.5px", marginBottom: "20px",
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
          <p style={{ color: "#888", fontSize: "17px", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
            Réponse garantie en moins de 24h. Devis gratuit et sans engagement.
          </p>
        </div>

        {/* Info Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "48px" }} className="contact-info-grid">
          {[
            { icon: Mail, label: "Email", value: "venertiweb@gmail.com", href: "mailto:venertiweb@gmail.com" },
          
          ].map(({ icon: Icon, label, value, href }) => (
            <div key={label} style={{
              backgroundColor: "white", borderRadius: "16px",
              padding: "24px", border: "1px solid #F0F0F0",
              display: "flex", alignItems: "center", gap: "16px",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px",
                backgroundColor: "#E8F5ED", display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={18} color="#1B7A3E" />
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "#aaa", marginBottom: "4px" }}>{label}</p>
                {href ? (
                  <a href={href} style={{ fontWeight: 600, color: "#111", fontSize: "14px", textDecoration: "none" }}>{value}</a>
                ) : (
                  <p style={{ fontWeight: 600, color: "#111", fontSize: "14px" }}>{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{
          backgroundColor: "white", borderRadius: "24px",
          padding: "48px", border: "1px solid #F0F0F0",
          boxShadow: "0 4px 40px rgba(0,0,0,0.04)",
        }}>
          <h2 style={{ fontWeight: 700, fontSize: "22px", color: "#111", marginBottom: "32px", textAlign: "center" }}>
            Envoyez-nous un message
          </h2>

          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <CheckCircle size={56} color="#1B7A3E" style={{ margin: "0 auto 16px" }} />
              <h3 style={{ fontWeight: 700, fontSize: "22px", color: "#111", marginBottom: "8px" }}>Message envoyé !</h3>
              <p style={{ color: "#888", fontSize: "15px", marginBottom: "24px" }}>On vous répond dans moins de 24h.</p>
              <button onClick={() => setStatus("idle")} style={{
                backgroundColor: "#1B7A3E", color: "white",
                fontWeight: 600, padding: "12px 28px",
                borderRadius: "999px", border: "none", cursor: "pointer", fontSize: "14px",
              }}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-2col">
                <div>
                  <label style={labelStyle}>Nom complet *</label>
                  <input type="text" placeholder="Votre nom" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" placeholder="votre@email.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Téléphone</label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <select
                    value={form.countryCode}
                    onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                    style={{ ...inputStyle, width: "120px", flexShrink: 0, cursor: "pointer" }}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.code} {c.country}</option>
                    ))}
                  </select>
                  <input type="tel" placeholder="6 00 00 00 00" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Sujet *</label>
                <input type="text" placeholder="Ex: Création site vitrine" value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea placeholder="Décrivez votre projet, vos besoins, votre budget..." value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required rows={5}
                  style={{ ...inputStyle, resize: "none" }} />
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

              <button type="submit" disabled={status === "loading"} style={{
                backgroundColor: status === "loading" ? "#888" : "#1B7A3E",
                color: "white", fontWeight: 700, fontSize: "15px",
                padding: "16px 24px", borderRadius: "14px",
                border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
                width: "100%", transition: "background 0.2s",
              }}>
                {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
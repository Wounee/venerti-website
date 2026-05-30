"use client";

import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+7", country: "RU" },
  { code: "+20", country: "EG" },
  { code: "+27", country: "ZA" },
  { code: "+30", country: "GR" },
  { code: "+31", country: "NL" },
  { code: "+32", country: "BE" },
  { code: "+33", country: "FR" },
  { code: "+34", country: "ES" },
  { code: "+36", country: "HU" },
  { code: "+39", country: "IT" },
  { code: "+40", country: "RO" },
  { code: "+41", country: "CH" },
  { code: "+43", country: "AT" },
  { code: "+44", country: "GB" },
  { code: "+45", country: "DK" },
  { code: "+46", country: "SE" },
  { code: "+47", country: "NO" },
  { code: "+48", country: "PL" },
  { code: "+49", country: "DE" },
  { code: "+51", country: "PE" },
  { code: "+52", country: "MX" },
  { code: "+53", country: "CU" },
  { code: "+54", country: "AR" },
  { code: "+55", country: "BR" },
  { code: "+56", country: "CL" },
  { code: "+57", country: "CO" },
  { code: "+58", country: "VE" },
  { code: "+60", country: "MY" },
  { code: "+61", country: "AU" },
  { code: "+62", country: "ID" },
  { code: "+63", country: "PH" },
  { code: "+64", country: "NZ" },
  { code: "+65", country: "SG" },
  { code: "+66", country: "TH" },
  { code: "+81", country: "JP" },
  { code: "+82", country: "KR" },
  { code: "+84", country: "VN" },
  { code: "+86", country: "CN" },
  { code: "+90", country: "TR" },
  { code: "+91", country: "IN" },
  { code: "+92", country: "PK" },
  { code: "+93", country: "AF" },
  { code: "+94", country: "LK" },
  { code: "+95", country: "MM" },
  { code: "+98", country: "IR" },
  { code: "+212", country: "MA" },
  { code: "+213", country: "DZ" },
  { code: "+216", country: "TN" },
  { code: "+218", country: "LY" },
  { code: "+220", country: "GM" },
  { code: "+221", country: "SN" },
  { code: "+222", country: "MR" },
  { code: "+223", country: "ML" },
  { code: "+224", country: "GN" },
  { code: "+225", country: "CI" },
  { code: "+226", country: "BF" },
  { code: "+227", country: "NE" },
  { code: "+229", country: "BJ" },
  { code: "+230", country: "MU" },
  { code: "+231", country: "LR" },
  { code: "+233", country: "GH" },
  { code: "+234", country: "NG" },
  { code: "+235", country: "TD" },
  { code: "+236", country: "CF" },
  { code: "+237", country: "CM" },
  { code: "+238", country: "CV" },
  { code: "+240", country: "GQ" },
  { code: "+241", country: "GA" },
  { code: "+242", country: "CG" },
  { code: "+243", country: "CD" },
  { code: "+244", country: "AO" },
  { code: "+245", country: "GW" },
  { code: "+249", country: "SD" },
  { code: "+250", country: "RW" },
  { code: "+251", country: "ET" },
  { code: "+252", country: "SO" },
  { code: "+253", country: "DJ" },
  { code: "+254", country: "KE" },
  { code: "+255", country: "TZ" },
  { code: "+256", country: "UG" },
  { code: "+257", country: "BI" },
  { code: "+258", country: "MZ" },
  { code: "+260", country: "ZM" },
  { code: "+261", country: "MG" },
  { code: "+263", country: "ZW" },
  { code: "+264", country: "NA" },
  { code: "+265", country: "MW" },
  { code: "+266", country: "LS" },
  { code: "+267", country: "BW" },
  { code: "+269", country: "KM" },
  { code: "+291", country: "ER" },
  { code: "+351", country: "PT" },
  { code: "+352", country: "LU" },
  { code: "+353", country: "IE" },
  { code: "+354", country: "IS" },
  { code: "+355", country: "AL" },
  { code: "+356", country: "MT" },
  { code: "+357", country: "CY" },
  { code: "+358", country: "FI" },
  { code: "+359", country: "BG" },
  { code: "+370", country: "LT" },
  { code: "+371", country: "LV" },
  { code: "+372", country: "EE" },
  { code: "+373", country: "MD" },
  { code: "+374", country: "AM" },
  { code: "+375", country: "BY" },
  { code: "+376", country: "AD" },
  { code: "+377", country: "MC" },
  { code: "+380", country: "UA" },
  { code: "+381", country: "RS" },
  { code: "+382", country: "ME" },
  { code: "+385", country: "HR" },
  { code: "+386", country: "SI" },
  { code: "+387", country: "BA" },
  { code: "+420", country: "CZ" },
  { code: "+421", country: "SK" },
  { code: "+502", country: "GT" },
  { code: "+503", country: "SV" },
  { code: "+504", country: "HN" },
  { code: "+505", country: "NI" },
  { code: "+506", country: "CR" },
  { code: "+507", country: "PA" },
  { code: "+509", country: "HT" },
  { code: "+591", country: "BO" },
  { code: "+592", country: "GY" },
  { code: "+593", country: "EC" },
  { code: "+595", country: "PY" },
  { code: "+598", country: "UY" },
  { code: "+855", country: "KH" },
  { code: "+856", country: "LA" },
  { code: "+880", country: "BD" },
  { code: "+886", country: "TW" },
  { code: "+960", country: "MV" },
  { code: "+961", country: "LB" },
  { code: "+962", country: "JO" },
  { code: "+963", country: "SY" },
  { code: "+964", country: "IQ" },
  { code: "+965", country: "KW" },
  { code: "+966", country: "SA" },
  { code: "+967", country: "YE" },
  { code: "+968", country: "OM" },
  { code: "+971", country: "AE" },
  { code: "+972", country: "IL" },
  { code: "+973", country: "BH" },
  { code: "+974", country: "QA" },
  { code: "+976", country: "MN" },
  { code: "+977", country: "NP" },
  { code: "+992", country: "TJ" },
  { code: "+993", country: "TM" },
  { code: "+994", country: "AZ" },
  { code: "+995", country: "GE" },
  { code: "+996", country: "KG" },
  { code: "+998", country: "UZ" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", countryCode: "+1", subject: "", message: "" });
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
      if (!res.ok) { setErrorMsg(data.error || "Unknown error"); setStatus("error"); return; }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", countryCode: "+212", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please check your connection.");
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
            Tell us about your<br/>
            <span style={{ color: "#1B7A3E" }}>projet.</span>
          </h1>
          <p style={{ color: "#888", fontSize: "17px", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
            Get a response within 24 hours. Free consultation and no-obligation quote.
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
            Start your project
          </h2>

          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <CheckCircle size={56} color="#1B7A3E" style={{ margin: "0 auto 16px" }} />
              <h3 style={{ fontWeight: 700, fontSize: "22px", color: "#111", marginBottom: "8px" }}>Your message has been sent successfully.</h3>
              <p style={{ color: "#888", fontSize: "15px", marginBottom: "24px" }}>Our team will respond within 24 hours.</p>
              <button onClick={() => setStatus("idle")} style={{
                backgroundColor: "#1B7A3E", color: "white",
                fontWeight: 600, padding: "12px 28px",
                borderRadius: "999px", border: "none", cursor: "pointer", fontSize: "14px",
              }}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-2col">
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input type="text" placeholder="Your name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" placeholder="your@email.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Phone Number</label>
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
                  <input type="tel" placeholder="Enter your phone number" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject *</label>
                <input type="text" placeholder="Example: E-commerce website development" value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  required style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea placeholder="Describe your project, goals, timeline, or requirements..." value={form.message}
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
                {status === "loading" ? "Sending your message..." : "Start Your Project"}
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

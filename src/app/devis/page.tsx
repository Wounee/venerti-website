import Link from "next/link";

const options = [
  {
    type: "Starter Business Website",
    delay: "7–10 days",
    features: [
      "3–5 pages",
      "Responsive design",
      "Basic SEO",
      "Contact form",
    ],
  },

  {
    type: "Professional Website",
    delay: "10–14 days",
    features: [
      "5–10 pages",
      "Integrated blog",
      "Google Analytics",
      "3 revisions",
    ],
  },

  {
    type: "E-Commerce Store",
    delay: "14–21 days",
    features: [
      "Complete online store",
      "Online payments",
      "Product management",
      "Admin dashboard",
    ],
    popular: true,
  },

  {
    type: "Custom Solution",
    delay: "Custom timeline",
    features: [
      "Web application",
      "Custom features",
      "API integrations",
      "Dedicated support",
    ],
  },
];

export default function DevisPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "96px", paddingBottom: "80px", backgroundColor: "#F8FDF9" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            display: "inline-block", backgroundColor: "#E8F5ED",
            color: "#1B7A3E", fontSize: "11px", fontWeight: 700,
            padding: "6px 16px", borderRadius: "999px",
            letterSpacing: "2.5px", marginBottom: "20px",
          }}>
            Free Quote
          </span>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800,
            color: "#111", lineHeight: 1.15, marginBottom: "16px",
            letterSpacing: "-1px",
          }}>
            Choose your
            <br />
            <span style={{ color: "#1B7A3E" }}>plan.</span>
          </h1>
          <p style={{ color: "#888", fontSize: "17px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            Contact us for a personalized free quote. Response in less than 24h.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "48px" }} className="devis-grid">
          {options.map((opt, i) => (
            <div key={opt.type} style={{
              borderRadius: "20px", padding: "32px",
              border: opt.popular ? "2px solid #1B7A3E" : "1px solid #F0F0F0",
              backgroundColor: opt.popular ? "#1B7A3E" : "white",
              transition: "all 0.2s",
              position: "relative",
            }}>
              {opt.popular && (
                <span style={{
                  position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                  backgroundColor: "#52C27A", color: "white",
                  fontSize: "10px", fontWeight: 700, padding: "4px 14px",
                  borderRadius: "999px", letterSpacing: "1.5px", whiteSpace: "nowrap",
                }}>
                  POPULAR
                </span>
              )}
              <h3 style={{
                fontWeight: 700, fontSize: "16px", marginBottom: "8px",
                color: opt.popular ? "white" : "#111",
              }}>
                {opt.type}
              </h3>
              <p style={{
                fontSize: "12px", marginBottom: "24px",
                color: opt.popular ? "rgba(255,255,255,0.6)" : "#aaa",
              }}>
                Delivery : {opt.delay}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {opt.features.map((f) => (
                  <li key={f} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    fontSize: "13px", color: opt.popular ? "rgba(255,255,255,0.85)" : "#555",
                  }}>
                    <span style={{
                      width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0,
                      backgroundColor: opt.popular ? "#a8e6bf" : "#52C27A",
                    }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "100%", padding: "12px",
                borderRadius: "12px", fontWeight: 600, fontSize: "13px",
                textDecoration: "none", transition: "all 0.2s",
                backgroundColor: opt.popular ? "white" : "#E8F5ED",
                color: opt.popular ? "#1B7A3E" : "#1B7A3E",
              }}>
                Choose this plan
              </Link>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: "white", borderRadius: "20px",
          padding: "40px", border: "1px solid #F0F0F0",
          textAlign: "center",
        }}>
          <h2 style={{ fontWeight: 700, fontSize: "22px", color: "#111", marginBottom: "12px" }}>
            Do you have a custom project?
          </h2>
          <p style={{ color: "#888", fontSize: "15px", marginBottom: "24px", maxWidth: "480px", margin: "0 auto 24px" }}>
            Describe your project and we will prepare a personalized quote for you free of charge.
          </p>
          <Link href="/contact" style={{
            display: "inline-block",
            backgroundColor: "#1B7A3E", color: "white",
            fontWeight: 600, fontSize: "15px",
            padding: "14px 36px", borderRadius: "999px",
            textDecoration: "none",
          }}>
            Request Your Quote
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .devis-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .devis-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
export default function AProposPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "96px", paddingBottom: "80px", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{
            display: "inline-block", backgroundColor: "#E8F5ED",
            color: "#1B7A3E", fontSize: "11px", fontWeight: 700,
            padding: "6px 16px", borderRadius: "999px",
            letterSpacing: "2.5px", marginBottom: "20px",
          }}>
            À PROPOS
          </span>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800,
            color: "#111", lineHeight: 1.15, marginBottom: "16px",
            letterSpacing: "-1px",
          }}>
            Deux passionnés,
            <br />
            <span style={{ color: "#1B7A3E" }}>une vision digitale.</span>
          </h1>
          <p style={{
            color: "#888", fontSize: "17px", lineHeight: 1.8,
            maxWidth: "580px", margin: "0 auto",
          }}>
            Venerti est fondée par Amine et Youness, deux entrepreneurs marocains de 20 ans
            passionnés par le web, le design et la technologie. Notre mission : aider les
            entreprises marocaines à grandir en ligne avec des sites web qui convertissent vraiment.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "80px" }} className="apropos-grid">
          {[
            { title: "Notre Mission", desc: "Aider chaque entrepreneur marocain à avoir une présence digitale professionnelle, accessible et performante." },
            { title: "Notre Vision", desc: "Devenir l'agence web de référence au Maroc et en Afrique francophone d'ici 2028." },
            { title: "Nos Valeurs", desc: "Qualité, transparence, respect des délais et support humain. On livre ce qu'on promet." },
          ].map((item) => (
            <div key={item.title} style={{
              backgroundColor: "#F8FDF9", borderRadius: "20px",
              padding: "32px", border: "1px solid #E8F5ED",
            }}>
              <div style={{
                width: "40px", height: "4px", borderRadius: "2px",
                backgroundColor: "#1B7A3E", marginBottom: "20px",
              }} />
              <h3 style={{ fontWeight: 700, color: "#111", fontSize: "18px", marginBottom: "12px" }}>{item.title}</h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: "#0a1a0f", borderRadius: "24px",
          padding: "64px 48px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: "300px", height: "150px",
            backgroundColor: "rgba(27,122,62,0.3)", filter: "blur(60px)",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              Vous avez un projet en tête ?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", marginBottom: "32px" }}>
              Parlons-en. Devis gratuit en 24h.
            </p>
            <a href="/contact" style={{
              display: "inline-block",
              backgroundColor: "#1B7A3E", color: "white",
              fontWeight: 600, fontSize: "15px",
              padding: "14px 36px", borderRadius: "999px",
              textDecoration: "none",
            }}>
              Nous contacter
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .apropos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
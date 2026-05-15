"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: "24px", left: "50%",
      transform: "translateX(-50%)",
      zIndex: 9999, width: "calc(100% - 48px)",
      maxWidth: "720px",
    }}>
      <div style={{
        backgroundColor: "#0a1a0f",
        border: "1px solid rgba(27,122,62,0.3)",
        borderRadius: "20px",
        padding: "28px 32px",
        boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "260px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontSize: "20px" }}></span>
              <h3 style={{ fontWeight: 700, color: "white", fontSize: "16px", margin: 0 }}>
                We use cookies
              </h3>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>
              We use cookies to improve your experience, analyze traffic, and
              optimize website performance.
              {" "}
              <button
                onClick={() => setShowDetails(!showDetails)}
                style={{
                  background: "none", border: "none", color: "#52C27A",
                  cursor: "pointer", fontSize: "13px", padding: 0,
                  textDecoration: "underline",
                }}
              >
                {showDetails ? "Masquer les détails" : "En savoir plus"}
              </button>
            </p>

            {showDetails && (
              <div style={{
                marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px",
              }}>
                {[
                  {
                    name: "Essential Cookies",
                    desc: "Required for the website to function properly.",
                    required: true,
                  },
                  {
                    name: "Analytics",
                    desc: "Helps us understand how visitors interact with the website.",
                    required: false,
                  },
                  {
                    name: "Performance",
                    desc: "Improves browsing experience and remembers preferences.",
                    required: false,
                  },
                ].map((cookie) => (
                  <div key={cookie.name} style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: "10px", padding: "12px 14px",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                  }}>
                    <div>
                      <p style={{ color: "white", fontSize: "13px", fontWeight: 600, margin: "0 0 2px" }}>{cookie.name}</p>
                      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: 0 }}>{cookie.desc}</p>
                    </div>
                    <div style={{
                      width: "36px", height: "20px", borderRadius: "999px",
                      backgroundColor: cookie.required ? "#1B7A3E" : "rgba(255,255,255,0.15)",
                      display: "flex", alignItems: "center",
                      justifyContent: cookie.required ? "flex-end" : "flex-start",
                      padding: "2px", flexShrink: 0,
                    }}>
                      <div style={{
                        width: "16px", height: "16px", borderRadius: "50%",
                        backgroundColor: "white",
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", flexShrink: 0 }}>
            <button
              onClick={acceptAll}
              style={{
                backgroundColor: "#1B7A3E", color: "white",
                fontWeight: 700, fontSize: "14px",
                padding: "12px 24px", borderRadius: "999px",
                border: "none", cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Accept All cookies
            </button>
            <button
              onClick={acceptEssential}
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.7)",
                fontWeight: 500, fontSize: "13px",
                padding: "10px 24px", borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer", whiteSpace: "nowrap",
              }}
            >
              Essential only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
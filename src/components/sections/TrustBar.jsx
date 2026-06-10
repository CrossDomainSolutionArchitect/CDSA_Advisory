import React from "react";
import "./TrustBar.css";

const badges = [
  "B-BBEE Compliant",
  "NDP 2030 Aligned",
  "IBASA Certified",
  "ESG Data Ready",
  "Zero-Data Pipeline",
];

const TrustBar = () => {
  return (
    <section className="trust-bar social-proof">
      <div className="trust-shell">
        {badges.map((badge) => (
          <span key={badge} className="trust-pill">✓ {badge}</span>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;

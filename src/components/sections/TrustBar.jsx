import React from "react";
import {
  FaShieldAlt,
  FaGlobeAfrica,
  FaAward,
  FaChartBar,
} from "react-icons/fa";
import "./TrustBar.css";

const badges = [
  {
    id: "bbbee",
    label: "Level 1 B-BBEE",
    description: "135% preferential procurement recognition value.",
    icon: FaShieldAlt,
  },
  {
    id: "ndp",
    label: "NDP 2030 Aligned",
    description: "Supporting South Africa's National Development Plan goals.",
    icon: FaGlobeAfrica,
  },
  {
    id: "ibasa",
    label: "IBASA Certified",
    description: "Institute of Business Advisors South Africa accredited guidance.",
    icon: FaAward,
  },
  {
    id: "esg",
    label: "ESG Data Ready",
    description: "Audit-ready environmental, social, and governance reporting metrics.",
    icon: FaChartBar,
  },
];

const TrustBar = () => {
  return (
    <section className="trust-bar social-proof">
      <div className="trust-shell">
        {badges.map(({ id, label, description, icon: Icon }) => (
          <div key={id} className="trust-pill" aria-label={label}>
            <span className="trust-icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="trust-copy">
              <strong>{label}</strong>
              <small>{description}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;

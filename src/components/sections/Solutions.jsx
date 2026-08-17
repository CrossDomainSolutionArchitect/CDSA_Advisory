import React from "react";
import { FaBriefcase, FaGlobe, FaClipboard } from "react-icons/fa";
import "./Solutions.css";

const pillars = [
  {
    id: "advisory",
    icon: FaBriefcase,
    title: "Business Advisory",
    scorecard: "Enterprise & Supplier Development (ESD) 📈",
    impact:
      "We fast-track survivalist SMMEs into compliant, scalable, and sustainable corporate-ready suppliers.",
    emoji: "💼",
  },
  {
    id: "digital",
    icon: FaGlobe,
    title: "Digital Enablement",
    scorecard: "Socio-Economic Development (SED) & ESG Metrics 🌐",
    impact:
      "We deploy low-cost digital assets and zero-data pipelines to bridge the technology gap for township entrepreneurs.",
    emoji: "🌐",
  },
  {
    id: "governance",
    icon: FaClipboard,
    title: "Project Management",
    scorecard: "Responsible Governance & Audit Tracking 🛡️",
    impact:
      "We deliver full project oversight with clear data dashboards, giving you verified, audit-ready proof of your compliance impact.",
    emoji: "🛡️",
  },
];

const Solutions = () => {
  return (
    <section className="section section-solutions" id="solutions">
      <div className="solutions-shell">
        <div className="solutions-header">
          <h2>Our Three-Pillar Impact Model</h2>
          <p className="solutions-intro">
            We turn your Enterprise and Supplier Development (ESD) and socio-economic contributions into structured, high-yield initiatives.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map(({ id, title, scorecard, impact, emoji }) => (
            <div key={id} className="pillar-card">
              <div className="pillar-number">{pillars.indexOf(pillars.find((p) => p.id === id)) + 1}</div>
              <div className="pillar-emoji">{emoji}</div>
              <h3 className="pillar-title">{title}</h3>

              <div className="pillar-section">
                <strong className="pillar-label">The Scorecard Link:</strong>
                <p className="pillar-text">{scorecard}</p>
              </div>

              <div className="pillar-section">
                <strong className="pillar-label">The Impact:</strong>
                <p className="pillar-text">{impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

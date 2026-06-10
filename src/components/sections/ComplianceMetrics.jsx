import React from "react";
import "./ComplianceMetrics.css";

const badges = [
  {
    title: "B-BBEE Compliant",
    subtitle: "Designed for South African enterprise procurement requirements.",
  },
  {
    title: "NDP 2030 Aligned",
    subtitle: "Mapped to national development priorities and investment frameworks.",
  },
  {
    title: "IBASA Certified Advisory",
    subtitle: "Certified advisory services for formal institutional review.",
  },
];

const ComplianceMetrics = () => {
  return (
    <section className="section section-compliance" id="compliance">
      <div className="compliance-shell">
        <div className="compliance-intro">
          <span className="compliance-eyebrow">🛡️ ENTERPRISE-READY ASSURANCE</span>
          <p className="compliance-copy">
            Our solutions map directly to institutional compliance frameworks:
          </p>
        </div>

        <div className="compliance-logos">
          {badges.map((badge) => (
            <div key={badge.title} className="compliance-logo-card">
              <div className="compliance-logo-mark">✓</div>
              <div className="compliance-logo-text">
                <strong>{badge.title}</strong>
                <span>{badge.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceMetrics;

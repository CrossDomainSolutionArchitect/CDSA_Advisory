import React from "react";
import { FaArrowDown } from "react-icons/fa";
import "./ThreeTierPipeline.css";

const phases = [
  {
    id: "phase-01",
    phase: "Phase 01",
    title: "Deployment & Allocation",
    stakeholder: "Corporate Enterprise Partner",
    mechanism:
      "Strategic allocation of Enterprise & Supplier Development (ESD) or Socio-Economic Development (SED) funding.",
    outcome: "Corporate compliance mandates are securely unlocked, registering immediate 135% Preferential Procurement recognition value.",
    icon: "🏢",
  },
  {
    id: "phase-02",
    phase: "Phase 02",
    title: "Integration & Distribution",
    stakeholder: "CDSA Platform Engines",
    mechanism:
      "Capital is instantly converted into operational digital assets, registered advisory programs, and proprietary Zero-Data infrastructure.",
    outcome:
      "Complex socio-economic funding is consolidated into active, risk-managed field initiatives without data-cost friction.",
    icon: "⚙️",
  },
  {
    id: "phase-03",
    phase: "Phase 03",
    title: "Economic Impact & Verification",
    stakeholder: "Verified SMME Ecosystem",
    mechanism:
      "Grassroots township entrepreneurs receive real-time business insights, localized digital assets, and accredited IBASA mentoring.",
    outcome:
      "Sustainable job creation, localized revenue growth, and the generation of live, audit-ready compliance data packs for your verifiers.",
    icon: "🌾",
  },
];

const ThreeTierPipeline = () => {
  return (
    <section className="section section-pipeline operational-architecture" id="pipeline">
      <div className="pipeline-shell">
        <div className="pipeline-header">
          <h2>Operational Architecture that turns Capital to Impact</h2>
          <p className="pipeline-copy">
            Our proprietary pipeline transforms corporate compliance funding into auditable economic infrastructure through a closed-loop B2B2C deployment model.
          </p>
        </div>

        <div className="phases-flow">
          {phases.map((phase, index) => (
            <div key={phase.id}>
              <div className="phase-card">
                <div className="phase-badge">{phase.phase}</div>
                <div className="phase-icon">{phase.icon}</div>
                <h3 className="phase-title">{phase.title}</h3>

                <div className="phase-block">
                  <strong className="block-label">Stakeholder:</strong>
                  <p className="block-text">{phase.stakeholder}</p>
                </div>

                <div className="phase-block">
                  <strong className="block-label">Mechanism:</strong>
                  <p className="block-text">{phase.mechanism}</p>
                </div>

                <div className="phase-block phase-block-outcome">
                  <strong className="block-label">Outcome:</strong>
                  <p className="block-text">{phase.outcome}</p>
                </div>
              </div>
              {index < phases.length - 1 && (
                <div className="phase-connector" aria-hidden="true">
                  <FaArrowDown size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeTierPipeline;

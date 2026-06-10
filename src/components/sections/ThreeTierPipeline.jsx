import React from "react";
import "./ThreeTierPipeline.css";

const steps = [
  {
    emoji: "🏢",
    title: "Enterprise Partner",
    description: "Funds, compliance, impact goals",
  },
  {
    emoji: "⚙️",
    title: "CDSA Platform",
    description: "Aggregates data, delivers offline tools, manages reporting",
  },
  {
    emoji: "🌾",
    title: "SMME Impact",
    description: "Real-time alerts, business growth, jobs created",
  },
];

const ThreeTierPipeline = () => {
  return (
    <section className="section section-pipeline b2b2c-flow" id="pipeline">
      <div className="pipeline-shell">
        <div className="pipeline-header">
          <h2>How It Works (B2B2C Flow)</h2>
          <p className="pipeline-copy">A simple sequence showing how funding becomes field impact.</p>
        </div>
        <div className="pipeline-flow" role="list">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="pipeline-step">
                <div className="pipeline-step-icon">{step.emoji}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className={`pipeline-arrow ${index === steps.length - 2 ? "end" : ""}`} aria-hidden>
                  <span className="arrow">→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="pipeline-footer">
          <p>From funding to field impact – fully traceable.</p>
        </div>
      </div>
    </section>
  );
};

export default ThreeTierPipeline;

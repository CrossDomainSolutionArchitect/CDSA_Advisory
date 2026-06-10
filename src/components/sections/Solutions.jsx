import React from "react";
import "./Solutions.css";

const Card = ({ title, subhead, price, note, href, cta }) => {
  const isExternal = href?.startsWith("http");

  return (
    <div className="solution-card">
      <div className="card-head">
        <h3>{title}</h3>
        {subhead && <p className="card-subhead">{subhead}</p>}
      </div>
      <div className="card-body">
        {price && <div className="card-price">{price}</div>}
        {note && <div className="card-note">{note}</div>}
      </div>
      <div className="card-actions">
        <a
          className="btn btn-primary"
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

const Solutions = () => {
  return (
    <section className="section section-solutions" id="solutions">
      <div className="solutions-shell">
        <div className="solutions-header">
          <h2>Technology and advisory for every SMME need - built for low-connectivity environments.</h2>
        </div>

        <div className="solutions-grid">
          <Card
            className="solution-card teal"
            title="Digital Enablement"
            subhead="Websites, CRM, automation"
            price="From R7,500 once-off"
            note="Custom scoping"
            href="/services/digital-enablement"
            cta="Learn more →"
          />

          <Card
            className="solution-card purple"
            title="AI & Data Solutions"
            subhead="Dashboards, risk scoring, predictive analytics"
            price="Custom scoping"
            href="/services/ai-data-solutions"
            cta="Learn more →"
          />

          <Card
            className="solution-card pink"
            title="Business Advisory"
            subhead="Diagnostics, mentorship, funding readiness"
            href="/services/business-advisory"
            cta="Learn more →"
          />
        </div>

        <div className="solutions-footer">
          <a className="solutions-all yellow" href="https://cdsa.tech/" target="_blank" rel="noreferrer">📱 Explore all our tech products →</a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;

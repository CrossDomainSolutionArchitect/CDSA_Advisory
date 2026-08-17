import React from "react";
import { FaCheck } from "react-icons/fa";
import "./TwoPathways.css";

const TwoPathways = () => {
  const benefits = [
    {
      id: "contributor",
      status: "Level 1 Contributor",
      benefit: "135% B-BBEE procurement recognition on qualifying spend",
      icon: "🎯",
    },
    {
      id: "empowering",
      status: "Empowering Supplier",
      benefit: "Additional Preferential Procurement points beyond standard recognition",
      icon: "⚡",
    },
    {
      id: "youth",
      status: "100%+ Youth Black Ownership",
      benefit: "Maximum value for your targeted corporate compliance spend",
      icon: "🚀",
    },
  ];

  return (
    <section className="section section-two-pathways" id="two-pathways">
      <div className="two-shell">
        <div className="pathways-header">
          <h2>What This Means For Your Business</h2>
          <p className="pathways-subhead">
            Every Rand you spend with us drives economic transformation and maximizes your scorecard points.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((item) => (
            <div key={item.id} className="benefit-card">
              <div className="benefit-icon">{item.icon}</div>
              <div className="benefit-status">{item.status}</div>
              <div className="benefit-text">
                <strong>Your Benefit:</strong> {item.benefit}
              </div>
              <div className="benefit-check">
                <FaCheck size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoPathways;

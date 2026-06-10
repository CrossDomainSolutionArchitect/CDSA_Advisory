import React from "react";
import "./OfflineFirstGrid.css";

const features = [
  {
    icon: "📱",
    title: "ZERO-DATA PIPELINE",
    description: "Works over low-cost cellular networks. Eliminates data-cost barriers entirely.",
  },
  {
    icon: "🌐",
    title: "OFFLINE SYNC",
    description: "Saves data locally on mobile devices. Operates without internet active.",
  },
  {
    icon: "💬",
    title: "WHATSAPP/USSD",
    description: "Interfaces via simple text chats without complex apps or downloads.",
  },
];

const OfflineFirstGrid = () => {
  return (
    <section className="section section-offline-first" id="offline-first">
      <div className="offline-shell">
        <div className="offline-header">
          <h2>Built for Real-World Constraints</h2>
        </div>

        <div className="offline-grid">
          {features.map((feature) => (
            <div key={feature.title} className="offline-card">
              <div className="offline-icon">{feature.icon}</div>
              <div className="offline-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfflineFirstGrid;

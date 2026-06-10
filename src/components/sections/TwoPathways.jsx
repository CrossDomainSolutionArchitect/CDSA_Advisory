import React from "react";
import "./TwoPathways.css";

const TwoPathways = () => {
  const PARTNER_EMAIL = "info@vcdsa.co.za";
  const makePartnerMailto = () => {
    const subject = `Request RFQ / Pilot — Partnership enquiry`;
    const body = `Hello CDSA team,%0D%0A%0D%0AWe are interested in requesting an RFQ or pilot for a partnership. Please provide next steps and capability statement.%0D%0A%0D%0AOrganisation:%0D%0APrimary contact (name & role):%0D%0APhone:%0D%0AProgramme scope / notes:%0D%0A%0D%0AThanks,%0D%0A`;
    return `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };
  return (
    <section className="section section-two-pathways" id="two-pathways">
      <div className="two-shell">
        <div className="card audience-card smm">
          <div className="card-icon">👥 💬</div>
          <h3>You run a small business. We speak your language.</h3>
          <ul>
            <li>Free business advice via WhatsApp</li>
            <li>Affordable websites & digital tools from R999/m</li>
            <li>No data required – works on any phone</li>
          </ul>
          <a className="btn btn-smme" href="https://wa.me/27673931524" target="_blank" rel="noreferrer">Start on WhatsApp →</a>
        </div>

        <div className="card audience-card partner">
          <div className="card-icon">🏢 📊</div>
          <h3>Fund SMME development. We handle delivery & reporting.</h3>
          <ul>
            <li>B-BBEE / NDP aligned programmes</li>
            <li>Automated ESG & impact data</li>
            <li>Pilot-ready infrastructure (AgriScan, etc.)</li>
            <li>White-label reporting for your stakeholders</li>
          </ul>
          <a className="btn btn-partner" href={makePartnerMailto()}>Request RFQ or Pilot →</a>
        </div>
      </div>
    </section>
  );
};

export default TwoPathways;

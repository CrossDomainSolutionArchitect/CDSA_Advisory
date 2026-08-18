import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner footer-compliance-grid">
        <div className="footer-block footer-brand">
          <div className="footer-brand-stack">
            <span className="footer-brand-name">CDSA . Cross Domain Solution Architect</span>
          </div>

          <p className="footer-intro">
            CDSA is a verified Level 1 B-BBEE Empowering Supplier. We engineer secure,
            low-latency digital pipelines and accredited advisory networks that convert standard
            corporate compliance spending into sustainable macroeconomic growth within the
            township ecosystem.
          </p>

          <ul className="footer-badges">
            <li>LEVEL 1 CONTRIBUTOR</li>
            <li>135% PROCUREMENT WEIGHT</li>
          </ul>
        </div>

        <div className="footer-block footer-nav">
          <h4>Solutions Matrix</h4>
          <ul className="footer-structured-list">
            <li>
              <strong>01 / Enterprise Development (ESD)</strong>
              <span>Strategic vendor pipeline integration and enterprise funding management.</span>
            </li>
            <li>
              <strong>02 / Zero-Data Infrastructure</strong>
              <span>Deploying no-cost mobile digital asset solutions to underserved commercial corridors.</span>
            </li>
            <li>
              <strong>03 / IBASA Business Advisory</strong>
              <span>Accredited mentorship and compliance training for grassroots entrepreneurs.</span>
            </li>
            <li>
              <strong>04 / Governance &amp; Impact Portals</strong>
              <span>Live corporate reporting dashboards with audit-ready performance indicators.</span>
            </li>
          </ul>
        </div>

        <div className="footer-block footer-contact">
          <h4>Contact & Legal</h4>
          
          <div className="footer-contact-info">
            <h5>Get In Touch</h5>
            <ul className="footer-contact-list">
              <li>
                <strong>Email:</strong>
                <a href="mailto:info@vcdsa.co.za">info@vcdsa.co.za</a>
              </li>
              <li>
                <strong>WhatsApp Business:</strong>
                <a href="https://wa.me/27673931524" target="_blank" rel="noopener noreferrer">067 3931524</a>
              </li>
              <li>
                <strong>Location:</strong>
                <span>South Africa • Johannesburg & Mpumalanga</span>
              </li>
            </ul>
          </div>

          <div className="footer-legal">
            <h5>Legal</h5>
            <ul className="footer-trust-list">
              <li><Link to="/privacy-policy">Privacy Policy & POPIA Framework</Link></li>
              <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
              <li>Statutory Terms of Engagement</li>
            </ul>
          </div>

          <div className="footer-notice">
            <p>
              <strong>© 2026 Cross Domain Solution Architect (Pty) Ltd. All rights reserved.</strong>
            </p>
            <p>
              <strong>Statutory Notice:</strong> Scorecard point allocations and corporate
              transformation metrics are subject to final verification by your enterprise&apos;s
              appointed, SANAS-accredited verification agency. CDSA provides comprehensive
              source documentation, data trails, and certified score validation packets under
              the statutory B-BBEE Codes of Good Practice.
            </p>
            <ul className="footer-meta-list">
              <li><strong>Web Portal:</strong> vcdsa.co.za</li>
              <li><strong>Compliance Classification:</strong> RSA Certified</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

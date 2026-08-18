import React from "react";
import Container from "../Container";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <section className="terms-section">
      <Container>
        <div className="terms-header">
          <h1>Terms and Conditions of Use</h1>
          <p className="terms-subtitle">
            Legal framework governing access to CDSA services and solutions
          </p>
        </div>

        <div className="terms-content">
          <div className="terms-block">
            <div className="block-number">01</div>
            <div className="block-content">
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing the web portal (vcdsa.co.za) or engaging with CDSA solutions, 
                you agree to these Terms and Conditions and our Statutory Terms of Engagement.
              </p>
            </div>
          </div>

          <div className="terms-block terms-highlight-primary">
            <div className="block-number">02</div>
            <div className="block-content">
              <h2>Service Offering and B-BBEE Metrics</h2>
              <ul className="terms-list">
                <li>
                  CDSA provides a <strong>135% preferential procurement recognition value</strong> as a Level 1 B-BBEE Contributor.
                </li>
                <li>
                  <strong>Statutory Notice:</strong> Final scorecard point allocations and transformation metrics 
                  depend on verification by your own SANAS-accredited verification agency.
                </li>
                <li>
                  CDSA provides comprehensive source documentation, data trails, and certified score validation packets. 
                  We do not guarantee final points if your specific agency uses alternate interpretations of the B-BBEE 
                  Codes of Good Practice.
                </li>
              </ul>
            </div>
          </div>

          <div className="terms-block">
            <div className="block-number">03</div>
            <div className="block-content">
              <h2>Corporate Funding and Ring-Fencing</h2>
              <ul className="terms-list">
                <li>
                  Corporate partners can allocate <strong>Enterprise & Supplier Development (ESD)</strong> or 
                  <strong> Socio-Economic Development (SED)</strong> funding.
                </li>
                <li>
                  Partners may ring-fence funding to target specific geographic areas (such as Johannesburg and Mpumalanga) 
                  or industry sectors.
                </li>
                <li>
                  <strong className="warning-text">Funding is instantly deployed into active field initiatives and digital assets. 
                  It cannot be refunded once the audit-ready data packets are generated.</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="terms-block">
            <div className="block-number">04</div>
            <div className="block-content">
              <h2>SMME Program Mid-Cycle Changes</h2>
              <ul className="terms-list">
                <li>CDSA manages a verified SMME ecosystem.</li>
                <li>
                  If a beneficiary drops out of the business advisory program mid-cycle, CDSA will re-allocate 
                  the infrastructure and tracking to an eligible replacement SMME.
                </li>
                <li>
                  This ensures your corporate compliance mandates remain protected and valid for your tracking period.
                </li>
              </ul>
            </div>
          </div>

          <div className="terms-block terms-highlight-secondary">
            <div className="block-number">05</div>
            <div className="block-content">
              <h2>Intellectual Property</h2>
              <p>
                All content, proprietary pipeline frameworks, Solutions Matrix designs, and digital assets on the 
                CDSA web portal are the property of <strong>Cross Domain Solution Architect (Pty) Ltd</strong>. 
                Unauthorized use or copying is prohibited.
              </p>
            </div>
          </div>

          <div className="terms-block">
            <div className="block-number">06</div>
            <div className="block-content">
              <h2>Limitation of Liability</h2>
              <p>
                CDSA works to ensure high uptime and low-latency delivery. However, we are not liable for operational 
                disruptions caused by telecommunications failures or changes in national B-BBEE legislation.
              </p>
            </div>
          </div>

          <div className="terms-block terms-highlight-law">
            <div className="block-number">07</div>
            <div className="block-content">
              <h2>Governing Law</h2>
              <p>
                These terms are governed by the <strong>laws of the Republic of South Africa</strong>. 
                Any disputes will be settled within the jurisdiction of South African courts.
              </p>
            </div>
          </div>

          <div className="terms-contact-section">
            <h3>📋 Contact and Legal Information</h3>
            <p>For questions about this policy or our data practices, contact us:</p>
            
            <div className="contact-grid">
              <div className="contact-item">
                <strong>Email</strong>
                <a href="mailto:info@vcdsa.co.za">info@vcdsa.co.za</a>
              </div>
              <div className="contact-item">
                <strong>WhatsApp Business</strong>
                <a href="https://wa.me/27673931524" target="_blank" rel="noopener noreferrer">067 3931524</a>
              </div>
              <div className="contact-item">
                <strong>Location</strong>
                <span>Johannesburg & Mpumalanga, South Africa</span>
              </div>
            </div>

            <div className="legal-entity">
              <p>
                <strong>© 2026 Cross Domain Solution Architect (Pty) Ltd. All rights reserved.</strong>
              </p>
            </div>
          </div>

          <div className="terms-footer-notice">
            <p>
              <strong>Last Updated:</strong> August 2026
            </p>
            <p>
              For comprehensive engagement terms and service-level agreements, please refer to our 
              <strong> Statutory Terms of Engagement</strong> or contact our team directly.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TermsAndConditions;

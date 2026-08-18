import React from "react";
import Container from "../Container";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy section">
      <Container>
        <div className="policy-header">
          <h1>Privacy Policy & POPIA Data Framework</h1>
          <p className="policy-subtitle">
            Cross Domain Solution Architect's commitment to data protection and responsible information handling
          </p>
        </div>

        <div className="policy-content">
          <div className="policy-section">
            <div className="section-number">01</div>
            <div className="section-content">
              <h2>Scope and Commitment</h2>
              <p>
                This policy applies to all users of the CDSA web portal (vcdsa.co.za), corporate enterprise partners, 
                and Broad-Based Black Economic Empowerment (B-BBEE) beneficiaries. CDSA is a Level 1 B-BBEE Empowering 
                Supplier [RSA Certified]. We protect your privacy and handle personal information responsibly.
              </p>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">02</div>
            <div className="section-content">
              <h2>Information We Collect</h2>
              <p>We collect information to deliver B-BBEE verification data packets, digital services, and business advisory tracking.</p>
              <ul className="policy-list">
                <li>
                  <strong>Corporate Partner Data:</strong> Company name, registration number, VAT number, 
                  financial contribution values, and representative contact details.
                </li>
                <li>
                  <strong>SMME Beneficiary Data:</strong> Owner identities, demographic details (for B-BBEE tracking), 
                  business registration documents, and operational performance metrics.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP addresses and access logs captured via our Zero-Data Infrastructure 
                  and corporate portals.
                </li>
              </ul>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">03</div>
            <div className="section-content">
              <h2>Purpose of Processing Personal Information</h2>
              <p>We process your personal data only for lawful purposes under POPIA:</p>
              <ul className="policy-list">
                <li>To generate audit-ready B-BBEE data trails for SANAS-accredited verification agencies.</li>
                <li>To manage Enterprise & Supplier Development (ESD) and Socio-Economic Development (SED) programs.</li>
                <li>To deliver accredited IBASA mentoring and low-cost digital assets.</li>
                <li>To maintain security and low latency on our Cross Domain Solution platforms.</li>
              </ul>
            </div>
          </div>

          <div className="policy-section policy-highlight">
            <div className="section-number">04</div>
            <div className="section-content">
              <h2>The Zero-Data Pipeline Framework</h2>
              <p>
                Our Zero-Data Infrastructure deploys mobile digital asset solutions without data-cost friction to the beneficiary.
              </p>
              <ul className="policy-list">
                <li>This pipeline strips away unnecessary personal identifiers during network transmittal.</li>
                <li>It optimizes information security while monitoring real-time performance indicators.</li>
                <li>This process ensures full compliance with condition-specific POPIA processing standards.</li>
              </ul>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">05</div>
            <div className="section-content">
              <h2>Data Sharing and Third-Party Disclosures</h2>
              <p>CDSA will not sell or lease personal information. We share data only with:</p>
              <ul className="policy-list">
                <li>Your enterprise's appointed, SANAS-accredited B-BBEE verification agencies.</li>
                <li>The Institute of Business Advisors South Africa (IBASA) for mentor tracking.</li>
                <li>Statutory regulatory bodies when required by the laws of the Republic of South Africa.</li>
              </ul>
            </div>
          </div>

          <div className="policy-section">
            <div className="section-number">06</div>
            <div className="section-content">
              <h2>Security Safeguards</h2>
              <p>
                We secure our operational architecture through advanced encryption and strict access controls. 
                We protect all corporate funding allocations and beneficiary data against unauthorized loss, 
                damage, or access.
              </p>
            </div>
          </div>

          <div className="policy-section policy-cta">
            <div className="section-number">07</div>
            <div className="section-content">
              <h2>Your Data Rights</h2>
              <p>
                Under POPIA, you have the right to request access to your personal information, ask for corrections, 
                or request deletion. To exercise these rights, contact our information officer:
              </p>
              <div className="contact-box">
                <a href="mailto:info@vcdsa.co.za" className="contact-link">
                  📧 info@vcdsa.co.za
                </a>
              </div>
            </div>
          </div>

          <div className="policy-footer-notice">
            <p>
              <strong>Last Updated:</strong> August 2026
            </p>
            <p>
              For questions about this Privacy Policy or our POPIA Data Framework, please contact us at 
              <a href="mailto:info@vcdsa.co.za"> info@vcdsa.co.za</a> or reach out via WhatsApp at 
              <a href="https://wa.me/27673931524" target="_blank" rel="noopener noreferrer"> 067 3931524</a>.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;

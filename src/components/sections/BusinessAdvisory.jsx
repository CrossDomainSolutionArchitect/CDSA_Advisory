import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import businessPlaceholder from "../../images/business-consultant.jpg";
import "./BusinessAdvisory.css";

const whatsappLink = "https://wa.me/27673931524?text=Hi%20CDSA%2C%20I%27m%20interested%20in%20business%20advisory";

const BusinessAdvisory = () => {
  return (
    <>
      <Header />
      <main className="advisory-page">
        <section className="advisory-hero">
          <Container className="advisory-hero-inner">
            <div className="advisory-copy">
              <p className="eyebrow">Business Advisory</p>
              <h1>Structured business advice that works — from R999/month. Get funding-ready with expert mentorship.</h1>
              <p className="advisory-lead">
                Practical diagnostics, mentorship and funding readiness for SMMEs and partners running growth programmes.
              </p>
              <div className="advisory-actions">
                <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  Start with WhatsApp advice (free)
                </a>
                <a className="btn btn-secondary" href="#pricing">
                  Enrol in Starter plan →
                </a>
              </div>
            </div>
            <div className="advisory-visuals">
              <img
                className="visual-placeholder"
                src={businessPlaceholder}
                alt="Business advisory screenshot placeholder"
              />
            </div>
          </Container>
        </section>

        <section id="pricing" className="section advisory-tiers">
          <Container>
            <SectionTitle eyebrow="Service tiers" title="Two clear advisory packages" />
            <div className="tier-grid">
              <div className="tier-card">
                <p className="tier-label">Starter</p>
                <p className="tier-price">R999/m</p>
                <ul>
                  <li>Group advisory sessions</li>
                  <li>Business templates</li>
                  <li>Funding readiness checklist</li>
                  <li>Quarterly report</li>
                </ul>
              </div>
              <div className="tier-card tier-card-highlight">
                <p className="tier-label">Premium</p>
                <p className="tier-price">R2,500/m</p>
                <ul>
                  <li>1-on-1 mentorship</li>
                  <li>Custom improvement plan</li>
                  <li>Monthly financial health check</li>
                  <li>Pitch deck review</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="section advisory-includes">
          <Container>
            <SectionTitle eyebrow="What you get" title="Practical outcomes for SMMEs and programme partners" />
            <ul className="advisory-list">
              <li>📋 Business diagnostics — strengths and gaps assessment</li>
              <li>🧑‍🏫 Mentorship — local, practical guidance for operators</li>
              <li>📄 Funding application support — submission-ready materials</li>
              <li>📈 Business improvement plan — clear next steps and targets</li>
            </ul>
          </Container>
        </section>

        <section className="section section-muted advisory-audience">
          <Container>
            <SectionTitle eyebrow="Who it’s for" title="For SMMEs and partners focused on growth" />
            <p>
              Spaza owners, smallholder farmers, youth enterprises and any SMME wanting to grow — plus partners running SMME incubators and development programmes.
            </p>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default BusinessAdvisory;

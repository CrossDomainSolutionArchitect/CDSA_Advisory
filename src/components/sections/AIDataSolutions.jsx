import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import aiPlaceholder from "../../images/ai-.jpg";
import "./AIDataSolutions.css";

const AIDataSolutions = () => {
  return (
    <>
      <Header />
      <main className="ai-data-page">
        <section className="ai-hero">
          <Container className="ai-hero-inner">
            <div className="ai-copy">
              <p className="eyebrow">AI & Data Solutions</p>
              <h1>Turn raw field data into actionable insights. Custom dashboards for SMME programmes and rural operations.</h1>
              <p className="ai-lead">
                CDSA builds monitoring and reporting solutions for government, corporate and impact partners that need programme visibility, risk scoring and predictive planning.
              </p>
              <div className="ai-actions">
                <button className="btn btn-primary" type="button" disabled>
                  Request a demo dashboard
                </button>
                <button className="btn btn-secondary" type="button" disabled>
                  Download capability statement (PDF)
                </button>
              </div>
            </div>

            <div className="ai-visuals">
              <img
                className="visual-placeholder"
                src={aiPlaceholder}
                alt="AI and data screenshot placeholder"
              />
            </div>
          </Container>
        </section>

        <section className="section ai-solutions">
          <Container>
            <SectionTitle eyebrow="Solutions offered" title="Data and AI capabilities for programme monitoring and risk management" />
            <div className="ai-solution-grid">
              <div className="ai-solution-card">
                <div className="ai-icon">📊</div>
                <h3>Dashboards</h3>
                <p>Real-time ESG, crop health and programme KPI dashboards for fast partner reporting.</p>
              </div>
              <div className="ai-solution-card">
                <div className="ai-icon">⚠️</div>
                <h3>Risk scoring</h3>
                <p>Credit, weather and disease risk scoring for SMMEs so partners can prioritise intervention.</p>
              </div>
              <div className="ai-solution-card">
                <div className="ai-icon">🔮</div>
                <h3>Predictive analytics</h3>
                <p>Forecast crop yields, equipment failure and funding needs with tailored predictive models.</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section-muted ai-audience">
          <Container>
            <SectionTitle eyebrow="Who it’s for" title="Designed for partners, not just SMMEs" />
            <p>
              Government tender managers, corporate CSI/ESG teams, impact funds and agricultural cooperatives that need trusted, transparent data for SMME programmes and rural operations.
            </p>
          </Container>
        </section>

        <section className="section ai-pricing">
          <Container>
            <SectionTitle eyebrow="Pricing" title="Custom scoping for pilots and RFQs" />
            <p className="ai-pricing-copy">
              Custom scoping – contact us for a pilot or RFQ. Pricing is designed around your programme scale, data sources and partner requirements.
            </p>
          </Container>
        </section>

        <section className="section section-muted ai-reference">
          <Container>
            <SectionTitle eyebrow="Reference project" title="Built on our AgriScan experience" />
            <p>
              See how we built AgriScan for smallholder farmers to deliver AI-driven crop alerts, field monitoring and predictive advice.
            </p>
            <a className="ai-link" href="https://cdsa.tech/agriscan" target="_blank" rel="noreferrer">
              See how we built AgriScan for smallholder farmers →
            </a>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default AIDataSolutions;

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import websitePlaceholder from "../../images/free-website-mockup.jpg";
import "./DigitalEnablement.css";

const whatsappLink = "https://wa.me/27673931524?text=Hi%20CDSA%2C%20I%27d%20like%20a%20free%20consultation%20for%20Digital%20Enablement";
const partnerMailto = () => {
  const subject = `Partnership enquiry — Fund SMME programmes`;
  const body = `Hello CDSA team,%0D%0A%0D%0AI am contacting you about funding SMME programmes and would like to discuss partnership opportunities.%0D%0A%0D%0AOrganisation:%0D%0APrimary contact (name & role):%0D%0APhone:%0D%0AKey goals / notes:%0D%0A%0D%0AThanks,%0D%0A`;
  return `mailto:info@vcdsa.co.za?subject=${encodeURIComponent(subject)}&body=${body}`;
};

const DigitalEnablement = () => {
  return (
    <>
      <Header />
      <main className="digital-page">
        <section className="digital-hero">
          <Container className="digital-hero-inner">
            <div className="digital-copy">
              <p className="eyebrow">Digital Enablement</p>
              <h1>Get your business online - from R7,500 once-off. No tech skills needed.</h1>
              <p className="digital-lead">
                Affordable websites, CRM setup and workflow automation for SMMEs with low digital skills and low connectivity.
              </p>
              <div className="digital-actions">
                <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  Book a free consultation
                </a>
                <a className="btn btn-secondary" href={partnerMailto()} target="_blank" rel="noreferrer">
                  Request a quote for partners
                </a>
              </div>
            </div>

            <div className="digital-visuals">
              <img
                className="visual-placeholder"
                src={websitePlaceholder}
                alt="Digital enablement screenshot placeholder"
              />
            </div>
          </Container>
        </section>

        <section className="section digital-includes">
          <Container>
            <SectionTitle eyebrow="What’s included" title="Everything delivered for a working online presence" />
            <ul className="digital-list">
              <li>
                <strong>✅ Website</strong>
                <span>3-5 pages, mobile-friendly and built to load quickly on low bandwidth.</span>
              </li>
              <li>
                <strong>✅ Domain registration</strong>
                <span>One year of domain registration included so your business has a credible web address.</span>
              </li>
              <li>
                <strong>✅ Basic CRM</strong>
                <span>Simple contact management for customers, leads and enquiries without extra complexity.</span>
              </li>
              <li>
                <strong>✅ Workflow automation</strong>
                <span>Auto-replies, lead capture and follow-up workflows that save time and keep customers engaged.</span>
              </li>
              <li>
                <strong>✅ Training</strong>
                <span>One hour of video plus a PDF guide so anyone can keep the system running.</span>
              </li>
            </ul>
          </Container>
        </section>

        <section className="section section-muted digital-who">
          <Container>
            <SectionTitle eyebrow="Who it’s for" title="Built for everyday SMMEs that need a simple digital presence" />
            <p>
              Spaza shops, small retailers, service providers, agribusinesses — any SMME wanting a digital presence that works without demanding high digital skills.
            </p>
          </Container>
        </section>

        <section className="section digital-pricing">
          <Container>
            <SectionTitle eyebrow="Pricing" title="Clear and affordable digital enablement" />
            <div className="pricing-card">
              <div className="pricing-copy">
                <p className="pricing-title">One clear option</p>
                <p className="pricing-price">R7,500 once-off</p>
                <p className="pricing-note">Optional monthly hosting and maintenance from R299/m.</p>
              </div>
              <div className="pricing-details">
                <ul>
                  <li>Website setup and launch</li>
                  <li>Domain & hosting set up</li>
                  <li>CRM and lead workflow</li>
                  <li>Training video + PDF guide</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section-muted digital-case-study">
          <Container>
            <SectionTitle eyebrow="Case study" title="Coming soon" />
            <p className="case-copy">
              Coming soon: How we helped [X] get online and increase sales by Y%.
            </p>
          </Container>
        </section>

        <section className="section digital-cta">
          <Container>
            <div className="cta-panel">
              <div>
                <h2>Ready to move online with no tech stress?</h2>
                <p>Let’s make your digital presence happen with one affordable package.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
                  Book a free consultation
                </a>
                <a className="btn btn-secondary" href="#request-quote">
                  Request a quote for partners
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section-muted digital-faq">
          <Container>
            <SectionTitle eyebrow="FAQ" title="Simple questions answered" />
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Do I need to know tech?</h3>
                <p>No — we do it for you, and then we train your team with easy guides.</p>
              </div>
              <div className="faq-item">
                <h3>Can I upgrade later?</h3>
                <p>Yes — the package is built to grow, with extra pages, CRM features and support available later.</p>
              </div>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default DigitalEnablement;

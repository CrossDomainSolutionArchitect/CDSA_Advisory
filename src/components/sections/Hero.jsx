import React from "react";
import Container from "../Container";
import Button from "../common/Button";
import heroImage from "../../images/IS2000-B-beee.png";
import "./Hero.css";

const Hero = () => {
  const PARTNER_EMAIL = "info@vcdsa.co.za";
  const makePartnerMailto = () => {
    const subject = `Partnership enquiry — Fund SMME programmes`;
    const body = `Hello CDSA team,%0D%0A%0D%0AI am contacting you about funding SMME programmes and would like to discuss partnership opportunities.%0D%0A%0D%0AOrganisation:%0D%0APrimary contact (name & role):%0D%0APhone:%0D%0AKey goals / notes:%0D%0A%0D%0AThanks,%0D%0A`;
    return `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };
  return (
    <section className="hero section-hero" id="home">
      <Container className="hero-wrapper">
        <div className="hero-split">
          <div className="hero-panel hero-panel-left">
            <div className="hero-copy">
              <h1>Secure 135% B-BBEE procurement value through measurable social impact.</h1>
              <p className="hero-subhead">
                CDSA helps corporates strengthen their B-BBEE scorecard while unlocking sustainable growth for SMMEs.
                As a Level 1 B-BBEE Empowering Supplier, we connect strategic funding, compliance, and business enablement
                to deliver verified, audit-ready outcomes that support both transformation and long-term enterprise value.
              </p>
            </div>
          </div>

          <div className="hero-panel hero-panel-right">
            <div className="hero-visual-single">
              <img src={heroImage} alt="CDSA B-BBEE certification" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

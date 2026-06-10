import React from "react";
import Container from "../Container";
import Button from "../common/Button";
import analyticsImage from "../../images/i_boredroom.jpg";
import traderImage from "../../images/township_econ.jpg";
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
              <h1>We connect corporate funding to SMME growth - without requiring data or smartphones.</h1>
              <p className="hero-subhead">Enterprise-ready compliance. Township-first tools. One platform.</p>

              <div className="hero-actions">
                <Button href="https://wa.me/27673931524" target="_blank" variant="smme">I'm an SMME - Get free help</Button>
                <Button href={makePartnerMailto()} variant="partner">I'm a partner - Fund SMME programmes</Button>
              </div>
            </div>
          </div>

          <div className="hero-panel hero-panel-right">
            <div className="visual-composite">
              <div className="composite-top"><img src={analyticsImage} alt="Corporate dashboard"/></div>
              <div className="composite-bottom"><img src={traderImage} alt="Township entrepreneur"/></div>
              <div className="bridge">CDSA</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

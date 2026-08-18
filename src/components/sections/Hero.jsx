import React from "react";
import Container from "../Container";
import heroImage from "../../images/IS2000-B-beee.png";
import "./Hero.css";

const Hero = () => {
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

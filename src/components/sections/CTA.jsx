import React from "react";
import Container from "../Container";
import Button from "../common/Button";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section final-cta">
      <Container>
        <div className="cta-box">
          <h2>Need a bid-ready advisory and digital delivery partner?</h2>
          <p>CDSA is structured to support RFQs, pilots, SMME programmes and digital transformation initiatives with advisory and technical execution.</p>
          <Button href="#contact">Start the Conversation</Button>
        </div>
      </Container>
    </section>
  );
};

export default CTA;

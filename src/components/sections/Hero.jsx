import React from "react";
import Container from "../Container";
import Button from "../common/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Business Advisory • GovTech • AI Systems • Supplier Procurement</p>
          <h1>Building measurable digital transformation for <span className="gradient-text">SMMEs, private and public-sector programmes.</span></h1>
          <p>CDSA helps government entities, development agencies and growth-stage SMMEs design, implement and monitor advisory, digital enablement, data analytics and AI-powered solutions.</p>
          <div className="hero-actions"><Button href="#contact">Request Capability Statement</Button><Button href="#services" variant="secondary">Explore Services</Button></div>
        </div>
        <div className="hero-panel"><h3>Delivery Focus</h3><ul><li>SMME performance monitoring</li><li>Business advisory implementation</li><li>Digital enablement for funded enterprises</li><li>AI/data solutions for public & private sector</li><li>Telecommunication supplier procurement</li></ul></div>
      </Container>
    </section>
  );
};

export default Hero;

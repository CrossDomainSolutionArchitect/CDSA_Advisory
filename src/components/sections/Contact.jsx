import React from "react";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="section section-muted" id="contact">
      <Container>
        <SectionTitle eyebrow="Contact" title="Let’s package the right CDSA solution for your programme or business." description="Reach out for capability statements, advisory packages, digital enablement pilots, AgriScan discussions or GovTech delivery partnerships." />
        <div className="grid grid-2">
          <Card><h3>CDSA — Cross Domain Solution Architect</h3><p>Email: info@vcdsa.co.za</p><p>Phone: +27 6 91 424 153</p><p>Location: Johannesburg, South Africa</p></Card>
          <Card><h3>Best-fit requests</h3><ul className="contact-list"><li>SMME advisory and digital enablement</li><li>Government programme implementation</li><li>AI/data dashboards and monitoring systems</li><li>AgriScan pilot or agriculture innovation partnerships</li></ul></Card>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

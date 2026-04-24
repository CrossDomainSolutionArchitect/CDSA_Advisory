import React from "react";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const proofPoints = [
  "Registered South African company positioned for advisory and digital delivery.",
  "Founder combines software engineering, data, AI and project management capability.",
  "Flagship innovation project demonstrates practical AI application for public value."
];

const Testimonials = () => {
  return (
    <section className="section section-muted">
      <Container>
        <SectionTitle eyebrow="Credibility Signals" title="Proof points for early-stage tender and partnership conversations." description="Until formal client testimonials are collected, CDSA uses verifiable capability signals and project evidence." />
        <div className="grid grid-3">{proofPoints.map((item) => <Card key={item}><p>{item}</p></Card>)}</div>
      </Container>
    </section>
  );
};

export default Testimonials;

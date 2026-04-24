import React from "react";
import Container from "../Container";
import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";

const reasons = [
  "Business advisory plus technical execution in one delivery model.",
  "Strong alignment with SMME development, youth employment and digital transformation priorities.",
  "Practical experience building AI-enabled and data-driven systems such as AgriScan.",
  "Cost-effective delivery using open-source, cloud-first and agile implementation methods."
];

const WhyChooseUs = () => {
  return (
    <section className="section">
      <Container>
        <SectionTitle eyebrow="Why CDSA" title="Built for measurable outcomes, not slide-deck consulting." description="CDSA positions itself as an implementation partner that can diagnose, digitize, monitor and report results." />
        <div className="grid grid-2">{reasons.map((reason, index) => <Card key={reason}><h3>{`0${index + 1}`}</h3><p>{reason}</p></Card>)}</div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

import React from "react";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const steps = [
  { title: "Assess", text: "Diagnose business, programme or system gaps using structured discovery and baseline metrics." },
  { title: "Design", text: "Define the service model, digital stack, implementation roadmap and outcome indicators." },
  { title: "Implement", text: "Deploy advisory sessions, websites, workflows, dashboards, AI tools or programme systems." },
  { title: "Monitor & Report", text: "Track adoption, revenue, jobs, risk, usage and programme performance through clear reporting." }
];

const Process = () => {
  return (
    <section className="section section-muted">
      <Container>
        <SectionTitle eyebrow="Delivery Methodology" title="A simple implementation process government evaluators can understand." description="Every engagement is structured around assessment, delivery, monitoring and reporting." />
        <div className="grid grid-4">{steps.map((step, index) => <Card key={step.title}><span className="eyebrow">{`Step ${index + 1}`}</span><h3>{step.title}</h3><p>{step.text}</p></Card>)}</div>
      </Container>
    </section>
  );
};

export default Process;

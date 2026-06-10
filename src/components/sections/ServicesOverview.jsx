import React from "react";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import ServiceDetailCard from "./ServiceDetailCard";
import "./ServicesOverview.css";

const services = [
  { number: "01", title: "Business Advisory & Programme Implementation", description: "Structured advisory support for SMMEs, youth enterprises and funded business development programmes.", items: ["Diagnostics", "Mentorship", "Business improvement plans", "Programme reporting"] },
  { number: "02", title: "Digital Enablement for SMMEs", description: "Practical digitization packages that help small businesses improve visibility, operations and market access.", items: ["Websites and domains", "CRM setup", "Workflow automation", "Analytics tracking"] },
  { number: "03", title: "AI, Data & GovTech Solutions", description: "Custom platforms, dashboards and intelligent systems that give decision-makers visibility over outcomes.", items: ["Dashboards", "Risk scoring", "Predictive analytics", "AI integration"] }
];

const ServicesOverview = () => {
  return (
    <section className="section section-muted services limit-two-colours" id="services">
      <Container>
        <SectionTitle eyebrow="What CDSA Delivers" title="Three focused service lines built for contracts, RFQs and impact." description="CDSA packages advisory, implementation and technical delivery into clear offers for government, corporate and SMME environments." />
        <div className="grid grid-3">{services.map((service) => <ServiceDetailCard key={service.number} {...service} />)}</div>
      </Container>
    </section>
  );
};

export default ServicesOverview;

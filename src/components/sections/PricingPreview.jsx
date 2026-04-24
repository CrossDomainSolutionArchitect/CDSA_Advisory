import React from "react";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import "./PricingPreview.css";

const packages = [
  { title: "SMME Advisory Starter", price: "From R999 / month", items: ["Group advisory", "Templates", "Funding readiness", "Basic digital guidance"] },
  { title: "Digital Enablement Package", price: "From R7,500 once-off", items: ["Website", "Domain setup", "Basic CRM", "Automation starter"] },
  { title: "Programme / Government Delivery", price: "Scoped per RFP", items: ["Diagnostics", "Dashboards", "Implementation", "Impact reporting"] }
];

const PricingPreview = () => {
  return (
    <section className="section" id="pricing">
      <Container>
        <SectionTitle eyebrow="Commercial Models" title="Flexible pricing for SMMEs, RFQs and programme contracts." description="Pricing is structured to support once-off projects, monthly retainers and tender-based delivery." />
        <div className="grid grid-3">{packages.map((pkg) => <Card key={pkg.title} className="pricing-card"><h3>{pkg.title}</h3><strong>{pkg.price}</strong><ul>{pkg.items.map((item) => <li key={item}>{item}</li>)}</ul></Card>)}</div>
      </Container>
    </section>
  );
};

export default PricingPreview;

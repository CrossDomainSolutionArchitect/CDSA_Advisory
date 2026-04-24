import React from "react";
import Container from "../Container";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import Button from "../common/Button";

const CaseStudies = () => {
  return (
    <section className="section" id="case-studies">
      <Container>
        <SectionTitle eyebrow="Flagship Project" title="AgriScan: AI-powered agricultural intelligence for smallholder support." description="AgriScan demonstrates CDSA's ability to combine AI, data, software engineering and public-sector relevance into a scalable solution." />
        <Card>
          <h3>Problem</h3><p>Agricultural SMMEs and smallholder farmers often lack fast, affordable access to crop insights, disease detection and decision-support tools.</p>
          <h3>Solution</h3><p>CDSA developed AgriScan as an AI-enabled agricultural intelligence platform designed to support crop analysis, advisory workflows and scalable rural digital transformation.</p>
          <h3>Government Relevance</h3><p>The platform aligns with food security, rural development, SMME growth, digital agriculture and data-driven farmer support programmes.</p>
          <Button href="#contact">Discuss AgriScan Pilot</Button>
        </Card>
      </Container>
    </section>
  );
};

export default CaseStudies;

import React, { useState } from "react";
import Container from "../Container";
import { FaChevronDown } from "react-icons/fa";
import "./PricingPreview.css";

const faqs = [
  {
    id: "procurement",
    question: "How does our enterprise claim the 135% preferential procurement allocation?",
    answer:
      "All qualifying services or development projects are contracted directly through CDSA. Because of our Level 1 Empowering Supplier status, your finance department automatically applies the 135% recognition weight during your annual verification window.",
  },
  {
    id: "verification",
    question: "What documentation is provided for our B-BBEE verification agency?",
    answer:
      "We issue a comprehensive, audit-ready Verification Packet. This includes our valid B-BBEE affidavit/certificate, verified ownership credentials, and granular project impact logs mapping financial allocations directly to verified ESD or SED code requirements.",
  },
  {
    id: "popia",
    question: "Is the CDSA data platform compliant with the Protection of Personal Information Act (POPIA)?",
    answer:
      "Yes. Our infrastructure features end-to-end data encryption that adheres strictly to South African POPIA frameworks. All operational data, business performance metrics, and identification credentials collected from beneficiary SMMEs are securely managed, ensuring your enterprise satisfies its data privacy and governance mandates.",
  },
  {
    id: "ringfence",
    question: "Can we ring-fence our funding to target specific geographical regions or industry sectors?",
    answer:
      "Yes. Our project management framework allows corporate partners to strategically allocate funding. You can target specific geographic corridors—such as defined township economies—or prioritize specific industrial sectors to align directly with your internal corporate social investment (CSI) or enterprise development strategies.",
  },
  {
    id: "zerodata",
    question: "How does the Zero-Data Pipeline function without costing the beneficiary?",
    answer:
      "Our proprietary technical architecture bridges the digital divide by removing mobile data barriers. By optimizing data payloads and utilizing reverse-billed data channels, we ensure that grassroots SMMEs can interact with our core digital toolsets, training resources, and advisory notifications completely free of airtime or data charges.",
  },
  {
    id: "dropout",
    question: "What happens if an SMME drops out of the business advisory program mid-cycle?",
    answer:
      "Our robust project governance framework features a proactive risk-mitigation model. If an enterprise becomes inactive, our system triggers an automated review. We can then reallocate active resources or introduce a pre-qualified reserve SMME from our pipeline, ensuring your corporate enterprise development points remain fully protected and audit-compliant.",
  },
  {
    id: "skills",
    question: "Does our spending with CDSA contribute to our Skills Development element?",
    answer:
      "No. To maintain complete transparency and legal compliance, our solutions map precisely to the Preferential Procurement, Enterprise Development (ED), and Supplier Development (SD) scorecard elements. If your initiatives include explicit, accredited bursaries or training through recognized sectoral bodies, those are broken out under distinct, ring-fenced project agreements.",
  },
];

const FAQAccordion = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        className="faq-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="faq-question">{faq.question}</span>
        <FaChevronDown
          className={`faq-icon ${isOpen ? "open" : ""}`}
          size={14}
        />
      </button>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

const PricingPreview = () => {
  return (
    <section className="section section-pricing governance-faq" id="governance">
      <Container>
        <div className="pricing-header">
          <h2>Governance & Compliance Protocols</h2>
          <p className="faq-intro">Transparent answers to your most critical enterprise compliance and deployment questions.</p>
        </div>

        <div className="faq-shell">
          {faqs.map((faq) => (
            <FAQAccordion key={faq.id} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingPreview;

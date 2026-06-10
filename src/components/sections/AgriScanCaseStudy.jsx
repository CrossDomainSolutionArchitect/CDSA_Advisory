import React from "react";
import Button from "../common/Button";
import "./AgriScanCaseStudy.css";

const WHATSAPP_NUMBER = "27673931524";
const makeWhatsAppHref = (card) => {
  const items = card.items.join(", ");
  const text = `Hi, I'm interested in the ${card.title} package (${card.price}). Features: ${items}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

const pricingCards = [
  {
    title: "Free",
    price: "R0/m",
    items: ["WhatsApp advice", "1 Virtual meeting"],
     href: "https://w./",
    cta: "Start free",
  },
  {
    title: "Starter",
    price: "R999/m",
    items: ["Website","Logo Design","Funding readiness"],
     href: "https://cdsa.tech/",
    cta: "Enrol now",
  },
  {
    title: "Grow",
    price: "Book a call",
    items: ["Personal guidance", "Digital readiness","Basic automation",  "SME support plans"],
    href: "https://cdsa.tech/",
    cta: "Book a call",
  },
];

const AgriScanCaseStudy = () => {
  return (
    <section className="section section-price-overview section-pricing pricing" id="agriscan">
      <div className="case-study-shell">
        <div className="case-study-headline">
          <h2>Simple, transparent pricing for SMMEs. Partners: contact us for custom quotes.</h2>
        </div>

        <div className="pricing-grid">
          {pricingCards.map((card) => (
            <div key={card.title} className={`pricing-card ${card.title.toLowerCase()}`}>
              <div>
                <h3>{card.title}</h3>
                <strong>{card.price}</strong>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Button href={makeWhatsAppHref(card)}>{card.cta}</Button>
            </div>
          ))}
        </div>

        <div className="case-study-note">
          <a href="https://cdsa.tech/" target="_blank" rel="noreferrer">For government & corporate programmes – request a tailored RFQ response →</a>
        </div>
      </div>
    </section>
  );
};

export default AgriScanCaseStudy;

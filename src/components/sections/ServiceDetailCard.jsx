import React from "react";
import Card from "../common/Card";

const ServiceDetailCard = ({ number, title, description, items }) => {
  return (
    <Card className="service-card">
      <span className="service-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Card>
  );
};

export default ServiceDetailCard;

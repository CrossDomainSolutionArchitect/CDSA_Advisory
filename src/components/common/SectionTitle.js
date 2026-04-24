import React from "react";
import "../../styles/Common.css";

const SectionTitle = ({ eyebrow, title, description }) => {
  return (
    <div className="section-title">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionTitle;

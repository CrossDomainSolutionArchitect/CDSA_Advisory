import React from "react";
import "../../styles/Common.css";

const Card = ({ children, className = "" }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;

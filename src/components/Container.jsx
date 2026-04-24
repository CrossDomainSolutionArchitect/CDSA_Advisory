import React from "react";
import "../styles/Common.css";

const Container = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;

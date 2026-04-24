import React from "react";
import "../../styles/Common.css";

const Button = ({ children, href = "#contact", variant = "primary" }) => {
  return <a className={`btn btn-${variant}`} href={href}>{children}</a>;
};

export default Button;

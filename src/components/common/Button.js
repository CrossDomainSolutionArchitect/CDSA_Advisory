import React from "react";
import "../../styles/Common.css";

const Button = ({ children, href = "#contact", variant = "primary", ...props }) => {
  return (
    <a className={`btn btn-${variant}`} href={href} {...props}>
      {children}
    </a>
  );
};

export default Button;

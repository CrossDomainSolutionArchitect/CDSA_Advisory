// import React from 'react';
// import Container from './Container';

// function Footer() {
//   return (
//     <footer className="site-footer">
//       <Container className="footer-grid">
//         <div>
//           <h3>CDSA</h3>
//           <p>
//             Cross Domain Solution Architect is a Johannesburg-based business advisory and GovTech
//             solutions firm focused on SMME growth, digital enablement, data systems, and practical
//             AI integration.
//           </p>
//         </div>

//         <div>
//           <h4>Core Focus</h4>
//           <ul>
//             <li>Business Advisory</li>
//             <li>SMME Digital Transformation</li>
//             <li>Government Programme Support</li>
//             <li>AI & Data Solutions</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Contact</h4>
//           <ul>
//             <li>Johannesburg, South Africa</li>
//             <li><a href="tel:+27691424153">+27 69 142 4153</a></li>
//             <li><a href="mailto:vvsharbney@gmail.com">vvsharbney@gmail.com</a></li>
//             <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
//           </ul>
//         </div>
//       </Container>
//       <div className="footer-bottom">
//         <Container>
//           <p>© {new Date().getFullYear()} CDSA — Cross Domain Solution Architect. All rights reserved.</p>
//         </Container>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div><h3>CDSA — Cross Domain Solution Architect</h3><p>Business advisory, GovTech, data systems and AI-powered digital transformation for SMMEs and public-sector programmes.</p></div>
        <div className="footer-links"><a href="#services">Services</a><a href="#case-studies">Case Studies</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></div>
      </div>
    </footer>
  );
};

export default Footer;

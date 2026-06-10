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
import logo from "../images/logo_icon.png";

const Footer = () => {
  const WHATSAPP_NUMBER = "27673931524";
  const PARTNER_EMAIL = "info@vcdsa.co.za";

  const smmeWhatsAppHref = () => {
    const text = `Hello CDSA, I am an SMME and would like to get help with funding, compliance, or business tools.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const partnerMailtoHref = () => {
    const subject = `Partnership enquiry — Fund SMME programmes`;
    const body = `Hello CDSA team,%0D%0A%0D%0AI am contacting you about funding SMME programmes and would like to discuss partnership opportunities.%0D%0A%0D%0AOrganisation:%0D%0APrimary contact (name & role):%0D%0APhone:%0D%0AKey goals / notes:%0D%0A%0D%0AThanks,%0D%0A`;
    return `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-block footer-brand">
          <div className="footer-logo-wrap">
            <img src={logo} alt="CDSA logo" className="footer-logo-image" />
            <div className="footer-brand-stack">
              <span className="footer-brand-name">CDSA – Cross Domain Solution Architect</span>
              <svg className="footer-nodes" width="140" height="18" viewBox="0 0 140 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="4" className="node n1" />
                <circle cx="48" cy="12" r="4" className="node n2" />
                <circle cx="84" cy="12" r="4" className="node n3" />
                <circle cx="120" cy="12" r="4" className="node n4" />
              </svg>
            </div>
          </div >
          <p className="footer-block footer-nav">Johannesburg, South Africa</p>
          {/* <p>Reg No: 2024 / 234857 / 07</p> */}
        </div>

        <div className="footer-block footer-nav">
          <h4>Quick links</h4>
          <ul>
            <li><a href={smmeWhatsAppHref()} target="_blank" rel="noreferrer">For SMMEs</a></li>
            <li><a href={partnerMailtoHref()}>For Partners</a></li>
            <li><a href="#solutions">Solutions</a></li>
            </ul>
        </div>

        <div className="footer-block footer-contact">
          <h4>Contact</h4>
          <p><a href="mailto:info@vcdsa.co.za">info@vcdsa.co.za</a></p>
          <p><a href="tel:+27691424153">+27 (69) 142 4153</a></p>
          <p><a className="whatsapp-link" href="https://wa.me/27673931524" target="_blank" rel="noreferrer">WhatsApp: +27 (67) 393 1524</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© CDSA</span>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="https://cdsa.tech/" target="_blank" rel="noreferrer">Another site: CDSA.tech (all tech products)</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

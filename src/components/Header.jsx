import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../images/logo_icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const WHATSAPP_NUMBER = "27673931524";
  const PARTNER_EMAIL = "info@vcdsa.co.za";

  const makeSMMEWhatsAppHref = () => {
    const text = `Hello CDSA, I am an SMME and would like to get help with funding, compliance, or business tools.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const makePartnerMailto = () => {
    const subject = `Partnership enquiry — Fund SMME programmes`;
    const body = `Hello CDSA team,%0D%0A%0D%0AI am contacting you about funding SMME programmes and would like to discuss partnership opportunities.%0D%0A%0D%0AOrganisation:%0D%0APrimary contact (name & role):%0D%0APhone:%0D%0AKey goals / notes:%0D%0A%0D%0AThanks,%0D%0A`;
    return `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const navItems = [
    { label: "For SMMEs", href: makeSMMEWhatsAppHref(), external: true },
    { label: "For Partners", href: makePartnerMailto(), external: true },
    {
      label: "Solutions",
      submenu: [
        { label: "Digital Enablement", href: "/services/digital-enablement" },
        { label: "AI & Data", href: "/services/ai-data-solutions" },
        { label: "Business Advisory", href: "/services/business-advisory" },
        { label: "See all on CDSA.tech", href: "https://cdsa.tech", external: true },
      ],
    },
  ];

  const toggleMenu = () => setIsMenuOpen((current) => !current);
  const toggleSolutions = () => setIsSolutionsOpen((current) => !current);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <header className="header">
      <div className="main-nav">
        <div className="header-brand">
          <a href="/" onClick={closeMenu} className="logo-link">
            <div className="logo-image-wrap">
              <img src={logo} alt="CDSA logo" className="logo-image" />
              <svg className="logo-nodes" width="56" height="24" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="10" cy="20" r="6" className="node node-1" />
                <circle cx="50" cy="20" r="6" className="node node-2" />
                <circle cx="90" cy="20" r="6" className="node node-3" />
                <circle cx="130" cy="20" r="6" className="node node-4" />
              </svg>
            </div>
            <span className="logo-copy">CDSA</span>
          </a>
        </div>

        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className={item.submenu ? "nav-item nav-item-dropdown" : "nav-item"}>
                {item.submenu ? (
                  <>
                    <button type="button" className="dropdown-trigger" onClick={toggleSolutions}>
                      {item.label} <span>▼</span>
                    </button>
                    <ul className={`dropdown-menu ${isSolutionsOpen ? "open" : ""}`}>
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            target={sub.external ? "_blank" : "_self"}
                            rel={sub.external ? "noreferrer" : undefined}
                            className="dropdown-link"
                            onClick={closeMenu}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="nav-link"
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noreferrer" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button className="mobile-menu-btn" type="button" onClick={toggleMenu}>
          {isMenuOpen ? "✕ Close" : "☰ Menu"}
        </button>

        <a className="whatsapp-float" href={makeSMMEWhatsAppHref()} target="_blank" rel="noreferrer">
          Chat Free on WhatsApp
        </a>
      </div>

      {isMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.label} className={item.submenu ? "mobile-nav-item has-submenu" : "mobile-nav-item"}>
                {!item.submenu ? (
                  <a href={item.href} onClick={closeMenu}>{item.label}</a>
                ) : (
                  <>
                    <button type="button" className="mobile-submenu-toggle" onClick={toggleSolutions}>
                      {item.label} <span>{isSolutionsOpen ? "▲" : "▼"}</span>
                    </button>
                    {isSolutionsOpen && (
                      <ul className="mobile-submenu">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              target={sub.external ? "_blank" : "_self"}
                              rel={sub.external ? "noreferrer" : undefined}
                              onClick={closeMenu}
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

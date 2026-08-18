import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../images/logo_icon.png";
import ContactModal from "./sections/ContactModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navItems = [
    { label: "Our Offering", href: "#solutions" },
    { label: "Our Impact", href: "https://cdsa.tech/", external: true },
    { label: "Get To Know Us", href: "#footer" },
    { label: "AI & Products", href: "https://cdsa.tech/", external: true },
    { label: "Contact Us", onClick: () => setIsContactModalOpen(true), button: true },
  ];

  const toggleMenu = () => setIsMenuOpen((current) => !current);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="main-nav">
        <div className="header-brand">
          <a href="/" onClick={closeMenu} className="logo-link" aria-label="CDSA home">
            <div className="logo-image-wrap">
              <img src={logo} alt="CDSA logo" className="logo-image" />
            </div>
          </a>
        </div>

        <nav className="nav-desktop" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className={item.button ? "nav-item contact-button-item" : "nav-item"}>
                {item.onClick ? (
                  <button
                    className={item.button ? "nav-link contact-link" : "nav-link"}
                    onClick={() => {
                      item.onClick();
                      closeMenu();
                    }}
                    type="button"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={item.button ? "nav-link contact-link" : "nav-link"}
                    onClick={closeMenu}
                    {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button className="mobile-menu-btn" type="button" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? "✕ Close" : "☰ Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.label} className={item.button ? "mobile-nav-item mobile-contact-item" : "mobile-nav-item"}>
                {item.onClick ? (
                  <button
                    className={item.button ? "mobile-contact-link" : undefined}
                    onClick={() => {
                      item.onClick();
                      closeMenu();
                    }}
                    type="button"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={item.button ? "mobile-contact-link" : undefined}
                    {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </header>
  );
};

export default Header;

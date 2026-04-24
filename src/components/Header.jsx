// import React, { useState } from "react";
// import "../styles/Header.css";

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const navLinks = ["Home", "Services", "Case Studies", "Contact"];

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <header className="header">
//       <div className="header-brand">
//         <h1 className="logo">CDSA</h1>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="nav-desktop">
//         <ul className="nav-list">
//           {navLinks.map((link) => (
//             <li key={link} className="nav-item">
//               <a
//                 href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
//                 className="nav-link"
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile Dropdown Navigation */}
//       <div className="nav-mobile">
//         <button className="hamburger-btn" onClick={toggleDropdown}>
//           <span className="hamburger-icon">
//             {isDropdownOpen ? "✕" : "☰"}
//           </span>
//         </button>

//         {isDropdownOpen && (
//           <ul className="dropdown-menu">
//             {navLinks.map((link) => (
//               <li key={link} className="dropdown-item">
//                 <a
//                   href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
//                   className="dropdown-link"
//                   onClick={closeDropdown}
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navLinks = ["Home", "Services", "Case Studies", "Pricing", "Contact"];
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);
  const getAnchor = (link) => `#${link.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <header className="header">
      <div className="header-brand">
        <a href="#home" onClick={closeDropdown}><h1 className="logo">CDSA<span>.</span>co</h1></a>
      </div>
      <nav className="nav-desktop">
        <ul className="nav-list">
          {navLinks.map((link) => <li key={link} className="nav-item"><a href={getAnchor(link)} className="nav-link">{link}</a></li>)}
        </ul>
      </nav>
      <div className="nav-mobile">
        <button className="hamburger-btn" onClick={toggleDropdown} aria-label="Toggle navigation menu" type="button">
          <span className="hamburger-icon">{isDropdownOpen ? "✕" : "☰"}</span>
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            {navLinks.map((link) => <li key={link} className="dropdown-item"><a href={getAnchor(link)} className="dropdown-link" onClick={closeDropdown}>{link}</a></li>)}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;

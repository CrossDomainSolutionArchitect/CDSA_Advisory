// import React from "react";
// import "../styles/Body.css";

// const Body = () => {
//   return (
//     <main className="body">
//       <section id="home" className="section">
//         <h2 className="section-title">Welcome Home</h2>
//         <p className="section-text">
//           This is the Home section. Add your landing content here.
//         </p>
//       </section>

//       <section id="services" className="section section-alt">
//         <h2 className="section-title">Our Services</h2>
//         <p className="section-text">
//           This is the Services section. Describe what you offer here.
//         </p>
//         <div className="cards">
//           {["Web Design", "Development", "Consulting"].map((service) => (
//             <div key={service} className="card">
//               <h3 className="card-title">{service}</h3>
//               <p className="card-text">
//                 Short description about {service.toLowerCase()}.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="contacts" className="section">
//         <h2 className="section-title">Contact Us</h2>
//         <p className="section-text">
//           This is the Contacts section. Add your contact form or details here.
//         </p>
//       </section>

//       <section id="career" className="section section-alt">
//         <h2 className="section-title">Career Opportunities</h2>
//         <p className="section-text">
//           This is the Career section. List job openings or career info here.
//         </p>
//       </section>
//     </main>
//   );
// };

// export default Body;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import TwoPathways from "./sections/TwoPathways";
import ThreeTierPipeline from "./sections/ThreeTierPipeline";
import AgriScanCaseStudy from "./sections/AgriScanCaseStudy";
import Solutions from "./sections/Solutions";
import "../styles/Body.css";

const Body = () => {
  return (
    <>
      <Header />
      <main className="body-main">
        <Hero />
        <TrustBar />
        <TwoPathways />
        <ThreeTierPipeline />
        <Solutions />
        <AgriScanCaseStudy />
      </main>
      <Footer />
    </>
  );
};

export default Body;

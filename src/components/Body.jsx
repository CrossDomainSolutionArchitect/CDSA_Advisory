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
import ServicesOverview from "./sections/ServicesOverview";
import WhyChooseUs from "./sections/WhyChooseUs";
import Process from "./sections/Process";
import CaseStudies from "./sections/CaseStudies";
import Testimonials from "./sections/Testimonials";
import PricingPreview from "./sections/PricingPreview";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import "../styles/Body.css";

const Body = () => {
  return (
    <>
      <Header />
      <main className="body-main">
        <Hero />
        <ServicesOverview />
        <WhyChooseUs />
        <Process />
        <CaseStudies />
        <Testimonials />
        <PricingPreview />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Body;

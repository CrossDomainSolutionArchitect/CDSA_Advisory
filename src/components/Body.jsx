import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import TwoPathways from "./sections/TwoPathways";
import ThreeTierPipeline from "./sections/ThreeTierPipeline";
// import AgriScanCaseStudy from "./sections/AgriScanCaseStudy";
import Solutions from "./sections/Solutions";
import "../styles/Body.css";
import PricingPreview from "./sections/PricingPreview";

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
        <PricingPreview />
      </main>
      <Footer />
    </>
  );
};

export default Body;

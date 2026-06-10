import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import DigitalEnablement from "./components/sections/DigitalEnablement";
import AIDataSolutions from "./components/sections/AIDataSolutions";
import BusinessAdvisory from "./components/sections/BusinessAdvisory";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Routes>
          <Route path="/services/digital-enablement" element={<DigitalEnablement />} />
          <Route path="/services/ai-data-solutions" element={<AIDataSolutions />} />
          <Route path="/services/business-advisory" element={<BusinessAdvisory />} />
          <Route path="*" element={<Body />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

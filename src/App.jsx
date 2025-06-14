import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Production from "./Components/Production";
import Testimonial from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Pro from "./Components/pro";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions";
import CookiePolicy from "./Components/CookiePolicy";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      easing: "ease-in-out-sine",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonial />
            <Contact />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

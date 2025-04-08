import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Services from "./Services";
import ContactUs from "./ContactUs";


function Home({ user }) {
  const navigate = useNavigate();
  const featureRef = useRef(null);

  const handleGetStarted = () => {
    // Navigate directly to the User Profile Form
    navigate("/user-info");
  };

  const handleExplore = () => {
    // Smooth scroll to features section
    featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Fincorp: Your Path to Financial Freedom Starts Here.</h1>
            <p>
              SmartSaver helps you manage your money like a pro — track income,
              budget smartly, set savings goals, and get AI-powered financial tips,
              all in one place.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleGetStarted}>
                Start Your Journey
              </button>
              <button className="btn-secondary" onClick={handleExplore}>
                Explore Features
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/assets/home.jpg"
              alt="Illustration of financial planning"
              className="form-banner"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-fincorp">
        <div className="about-fincorp-container">
          <div className="about-fincorp-image">
            <img
              src="/assets/fin.jpg"
              alt="Team working on financial strategy"
              className="form-banner"
            />
          </div>
          <div className="about-fincorp-text">
            <h2>About Fincorp</h2>
            <p>
              Welcome to <strong>Fincorp</strong>, your ultimate solution for smarter financial
              planning. At Fincorp, we understand that managing money can be overwhelming,
              but it doesn’t have to be. Our platform is built to simplify your financial
              journey and help you make the most of your earnings.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section (scroll-to target) */}
      <div ref={featureRef}>
        <Services />
      </div>

     
      <ContactUs />
    </div>
  );
}

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";
import Services from "./Services";
import About from "./About";
import ContactUs from "./ContactUs";
import PricingPlans from "./PricingPlans";

function Home({ user }) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle "Get Started" button click
  const handleGetStarted = () => {
    if (user) {
      navigate("/services"); // Redirect to services page if logged in
    } else {
      navigate("/login"); // Redirect to login page if not logged in
    }
  };

  return (
    <div>
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Effortless ITR Filing for Everyone</h1>
            <p>
              File your Income Tax Returns with confidence. Simple, secure, and guided process designed for first-time filers.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleGetStarted}>
                Get Started
              </button>
              <button className="btn-secondary">Talk to an Expert</button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://thumbs.dreamstime.com/b/young-business-international-people-using-gadgets-conference-business-people-using-gadgets-conference-133009808.jpg"
              alt="Effortless ITR Filing"
            />
          </div>
        </div>
      </section>

      {/* Services component placed outside hero section */}
      <Services />
      <About />
      <PricingPlans />
      <ContactUs />
    </div>
  );
}

export default Home;

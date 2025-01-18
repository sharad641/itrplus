import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>Simplified solutions for your tax and salary needs.</p>
      <div className="services-container">
        {/* Tax Filing Service Card */}
        <div className="service-card">
          <h3>Tax Filing</h3>
          <p>
            Hassle-free filing for individuals, freelancers, and businesses. Maximize deductions and refunds securely.
          </p>
          <Link to="/tax-filing" className="cta-link">
            <button className="cta-button">File Now</button>
          </Link>
        </div>

        {/* Salary Management Service Card */}
        <div className="service-card">
          <h3>Salary Management</h3>
          <p>
            Optimize your earnings with budgeting tools and tax-saving advice.
          </p>
          <button className="cta-button">Learn More</button>
        </div>

        {/* Freelancer Solutions Service Card */}
        <div className="service-card">
          <h3>Freelancer Solutions</h3>
          <p>
            Custom tax solutions for independent professionals, including GST and ITR filing.
          </p>
          <button className="cta-button">Get Started</button>
        </div>

        {/* Corporate Packages Service Card */}
        <div className="service-card">
          <h3>Corporate Packages</h3>
          <p>
            Tailored tax solutions for startups and SMEs, including payroll tax optimization.
          </p>
          <button className="cta-button">Explore Plans</button>
        </div>
      </div>
    </section>
  );
}

export default Services;

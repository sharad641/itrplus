import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
  const navigate = useNavigate();

  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>
        Smart financial tools tailored for modern individuals, freelancers, and businesses.
      </p>

      <div className="services-container">
        {/* 💸 Money Management */}
        <div className="service-card">
          <h3>Money Management</h3>
          <p>
            Track income, expenses, and budgets in real-time. Get personalized insights and automated alerts to improve your savings habits.
          </p>
          <button
            className="cta-button"
            onClick={() => navigate("/money-management")}
          >
            Learn More
          </button>
        </div>

        {/* 🤖 AI Finance Assistant */}
        <div className="service-card">
          <h3>AI Finance Assistant</h3>
          <p>
            Ask finance-related questions, get tax-saving tips, and generate reports — all powered by AI for real-time support.
          </p>
          <button
            className="cta-button"
            onClick={() => navigate("/chatbot")}
          >
            Chat Now
          </button>
        </div>

        {/* 🎯 Savings & Goal Tracker */}
        <div className="service-card">
          <h3>Savings & Goal Tracker</h3>
          <p>
            Define savings goals, track your progress visually, and receive nudges to stay on track with gamified encouragement.
          </p>
          <Link to="/goal-tracking">
            <button className="cta-button">Start Saving</button>
          </Link>
        </div>

        {/* 🎧 Money Matters */}
        <div className="service-card">
          <h3>Money Matters: Listen, Learn, Grow</h3>
          <p>
            Explore bite-sized audio content, financial literacy podcasts, and expert interviews to grow your financial knowledge anytime, anywhere.
          </p>
          <button
            className="cta-button"
            onClick={() => navigate("/money-matters")}
          >
            Listen Now
          </button>
        </div>

        {/* 💰 Tax Calculator */}
        <div className="service-card">
          <h3>Tax Calculator</h3>
          <p>
            Calculate your taxable income, estimate your tax liability, and optimize your tax savings. Get a clear understanding of your tax obligations with real-time calculations.
          </p>
          <button
            className="cta-button"
            onClick={() => navigate("/tax-calculator")}
          >
            Calculate Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;

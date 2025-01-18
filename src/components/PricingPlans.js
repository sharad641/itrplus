import React from 'react';
import './PricingPlans.css';

function PricingPlans() {
  return (
    <section id="pricing-plans" className="pricing-plans">
      <div className="pricing-container">
        <h2>Pricing Plans</h2>
        <p className="description">Select the plan that best suits your needs. All plans come with no hidden fees, regular support, and secure filing.</p>

        <div className="plans-wrapper">
          {/* Basic Plan */}
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <p className="plan-subtitle">Perfect for Individuals</p>
            <ul>
              <li>Tax filing</li>
              <li>Basic documentation review</li>
              <li>Email support</li>
            </ul>
            <p className="price">₹999/year</p>
            <button className="cta-button">Choose Basic Plan</button>
          </div>

          {/* Premium Plan */}
          <div className="plan-card highlight">
            <h3>Premium Plan</h3>
            <p className="plan-subtitle">Ideal for Small Businesses</p>
            <ul>
              <li>Advanced filing</li>
              <li>Financial analysis</li>
              <li>Priority support</li>
            </ul>
            <p className="price">₹4999/year</p>
            <button className="cta-button">Choose Premium Plan</button>
          </div>

          {/* Corporate Plan */}
          <div className="plan-card">
            <h3>Corporate Plan</h3>
            <p className="plan-subtitle">Built for Enterprises</p>
            <ul>
              <li>Custom strategies</li>
              <li>Bulk filing</li>
              <li>Dedicated account manager</li>
            </ul>
            <p className="price">₹19,999/year</p>
            <button className="cta-button">Choose Corporate Plan</button>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta">
        <p>Start your journey to seamless tax management today.</p>
        <button className="cta-button large">Get Started Now</button>
      </div>
    </section>
  );
}

export default PricingPlans;

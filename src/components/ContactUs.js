import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <section id="contact-us" className="contact-us">
      <div className="contact-us-container">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="send-message-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> support@itrplus.com</p>
          <p><strong>Phone:</strong> +91 1800-123-4567</p>
          <p><strong>Live Chat:</strong> Available 24/7</p>
          <div className="social-links">
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

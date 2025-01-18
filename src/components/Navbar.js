import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, onLogout }) {
  const [isMobile, setIsMobile] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          ITRPLUS
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        <div className={`navbar-icon ${isMobile ? "active" : ""}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${isMobile ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/pricing-plans" onClick={closeMenu}>
              Pricing Plans
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          {user ? (
            <li>
              <button
                className="navbar-logout"
                onClick={() => {
                  onLogout();
                  closeMenu();
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="navbar-login" onClick={closeMenu}>
                Login/Signup
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

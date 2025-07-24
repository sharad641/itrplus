import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, onLogout }) {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          ITRPLUS
        </Link>
      </div>

      {/* Hamburger */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        <div className={`navbar-icon ${isMobile ? "active" : ""}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      {/* Links */}
      <div className={`navbar-links ${isMobile ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
         
          <li><Link to="/pricing-plans" onClick={closeMenu}>Pricing</Link></li>
          <li><Link to="/tax-calculator" onClick={closeMenu}>Tax Calculator</Link></li>
          <li><Link to="/money-management" onClick={closeMenu}>Money Tools</Link></li>
          <li><Link to="/contact-us" onClick={closeMenu}>Contact</Link></li>

          {user ? (
            <>
              <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
              <li>
                <button className="navbar-logout" onClick={() => { onLogout(); closeMenu(); }}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="navbar-login" onClick={closeMenu}>
                Login / Signup
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

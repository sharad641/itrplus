import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Services from "./components/Services";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import PricingPlans from "./components/PricingPlans";
import Footer from "./components/Footer";
import TaxFilingForm from "./components/TaxFilingForm"; // Import TaxFilingForm
import SalaryManagement from "./components/SalaryManagement";

import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar will appear at the top of every page */}
        <Navbar user={user} onLogout={handleLogout} />
        
        {/* Define Routes for the application */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pricing-plans" element={<PricingPlans />} />
          <Route path="/tax-filing" element={<TaxFilingForm />} /> {/* Tax Filing Form Route */}
          <Route path="/salary-management" element={<SalaryManagement />} /> {/* Salary Management Route */}
        </Routes>
        
        {/* Footer will appear at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

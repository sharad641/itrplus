import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import PricingPlans from "./components/PricingPlans";
import UserInfoForm from "./components/UserInfoForm";
import IncomeTaxFiling from "./components/IncomeTaxFiling";

// Protected Tools
import ProtectedRoute from "./components/ProtectedRoute";
import MoneyManagement from "./components/MoneyManagement";
import GoalTrackingService from "./components/GoalTrackingService";
import TaxCalculatorApp from "./components/TaxCalculatorApp";
import Profile from "./components/Profile";
import ChatBot from "./components/ChatBot";

// Firebase
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/chatbot" element={<ChatBot />} />

        {/* Forms & Services */}
        <Route path="/user-info" element={<UserInfoForm />} />
        <Route path="/itr-filing" element={<UserInfoForm />} />
        <Route path="/services/income-tax-filing" element={<IncomeTaxFiling />} />

        {/* Protected Routes */}
        <Route
          path="/money-management"
          element={
            <ProtectedRoute user={user}>
              <MoneyManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/goal-tracking"
          element={
            <ProtectedRoute user={user}>
              <GoalTrackingService />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tax-calculator"
          element={
            <ProtectedRoute user={user}>
              <TaxCalculatorApp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

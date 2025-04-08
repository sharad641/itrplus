import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Services from "./components/Services";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import PricingPlans from "./components/PricingPlans";
import Footer from "./components/Footer";
import UserInfoForm from "./components/UserInfoForm";
import MoneyManagement from "./components/MoneyManagement";
import GoalTrackingService from "./components/GoalTrackingService";
import ChatBot from "./components/ChatBot";
import MoneyMatters from "./components/MoneyMatters"; // ✅ New Feature
import Profile from "./components/Profile"; // Profile Component (New)
import ProtectedRoute from "./components/ProtectedRoute"; // 🌟 New Protected Route Component
import TaxCalculatorApp from './components/TaxCalculatorApp'; // ✅ Tax Calculator App

// Firebase Auth
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  // Listen for authentication state change to update user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Update user state on logout
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar with user state for login/logout */}
        <Navbar user={user} onLogout={handleLogout} />

        <Routes>
          {/* 🌐 Main Pages */}
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pricing-plans" element={<PricingPlans />} />

          {/* 📄 Forms */}
          <Route path="/itr-filing" element={<UserInfoForm />} />
          <Route path="/user-info" element={<UserInfoForm />} />

          {/* 💰 Smart Finance Tools (Protected Routes) */}
          <Route
            path="/services"
            element={
              <ProtectedRoute user={user}>
                <Services />
              </ProtectedRoute>
            }
          />
          <Route
            path="/money-management"
            element={
              <ProtectedRoute user={user}>
                <MoneyManagement />
              </ProtectedRoute>
            }
          />

          {/* 🎯 Tax Calculator */}
          <Route
            path="/tax-calculator"
            element={
              <ProtectedRoute user={user}>
                <TaxCalculatorApp />
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

          {/* 🎧 Money Matters - Podcast Section (Protected Route) */}
          <Route
            path="/money-matters"
            element={
              <ProtectedRoute user={user}>
                <MoneyMatters />
              </ProtectedRoute>
            }
          />

          {/* 🤖 AI Chatbot */}
          <Route path="/chatbot" element={<ChatBot />} />

          {/* 👤 Profile Route (Protected Route) */}
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
      </div>
    </Router>
  );
}

export default App;

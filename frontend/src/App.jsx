// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DriverRegister from "./pages/DriverRegister";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always on top */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/driverregister" element={<DriverRegister />} />
          </Routes>
        </main>

        {/* Footer always on bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

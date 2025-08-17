import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center mt-10">
      <p>© {new Date().getFullYear()} Orange Taxi. All rights reserved.</p>
      <p className="text-sm mt-2">Intelligent Ride-Hailing Platform</p>
    </footer>
  );
};

export default Footer;

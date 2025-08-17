import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-orange-600">Orange Taxi</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-orange-500">Features</a>
          <a href="#usecases" className="hover:text-orange-500">Use Cases</a>
          <a href="#tech" className="hover:text-orange-500">Technology</a>
          <a href="#contact" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">Book Ride</a>
        </div>
      </div>
    </nav>
  );
}

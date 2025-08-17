import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900">
          Intelligent Ride-Hailing <span className="text-orange-600">Reimagined</span>
        </h2>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Dynamic pricing, real-time driver matching, and optimized routes—Orange Taxi gets you there smarter.
        </p>
        <div className="mt-8 space-x-4">
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700">
            Book a Ride
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300">
            Become a Driver
          </button>
        </div>
      </div>
    </section>
  );
}

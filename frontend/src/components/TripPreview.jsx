import React from "react";

export default function TripPreview() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Live Trip Preview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-gray-500">Estimated Arrival</p>
            <p className="text-xl font-semibold">5 min</p>
          </div>
          <div>
            <p className="text-gray-500">Fare Range</p>
            <p className="text-xl font-semibold">₱120 - ₱150</p>
          </div>
          <div>
            <p className="text-gray-500">Surge</p>
            <p className="text-xl font-semibold text-red-600">1.5x</p>
          </div>
        </div>
      </div>
    </section>
  );
}

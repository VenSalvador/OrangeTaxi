import React from "react";

const specs = [
  "GPS tracking system",
  "Machine learning algorithms",
  "Payment gateway integration",
  "Driver app (iOS/Android)",
  "Passenger app (iOS/Android)",
  "Admin dashboard",
];

const TechnicalSpecs = () => {
  return (
    <section className="py-16 bg-white" id="technical-specs">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Technical Specifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{spec}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;

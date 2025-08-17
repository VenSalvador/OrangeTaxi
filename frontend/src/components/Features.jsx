import React from "react";

const features = [
  "Dynamic route optimization",
  "Real-time driver matching",
  "Surge pricing algorithm",
  "Multi-modal transportation",
  "Payment integration",
  "Trip tracking and safety",
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

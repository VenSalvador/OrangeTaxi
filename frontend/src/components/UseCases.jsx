import React from "react";

const useCases = [
  "Urban ride-hailing",
  "Airport transfers",
  "Corporate transportation",
  "Medical emergency transport",
  "Tourist transportation",
  "Daily commute optimization",
];

const UseCases = () => {
  return (
    <section className="py-16 bg-white" id="usecases">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((caseItem, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{caseItem}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

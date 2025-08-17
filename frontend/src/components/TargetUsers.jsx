import React from "react";

const users = [
  "Passengers",
  "Drivers",
  "Fleet Managers",
  "Transportation Companies",
];

const TargetUsers = () => {
  return (
    <section className="py-16 bg-gray-50" id="target-users">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Target Users</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{user}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;

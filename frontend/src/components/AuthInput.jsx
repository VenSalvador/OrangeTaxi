import React from "react";

const AuthInput = ({ label, name, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
};

export default AuthInput;

import React from "react";

export default function SelectInput({ label, name, value, onChange, options = [], error, required }) {
  return (
    <div>
      <label>{label} {required && "*"}</label><br />
      <select
        name={name}
        value={value || ""}
        onChange={(e) => onChange(name, e.target.value)}
      >
        <option value="">Select</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

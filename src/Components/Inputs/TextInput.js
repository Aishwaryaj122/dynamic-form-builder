import React from "react";

export default function TextInput({ label, name, value, onChange, error, required }) {
  return (
    <div>
      <label>{label} {required && "*"}</label><br />
      <input
        type="text"
        name={name}
        value={value || ""}
        onChange={(e) => onChange(name, e.target.value)}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

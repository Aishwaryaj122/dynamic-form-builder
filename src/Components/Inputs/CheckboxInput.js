import React from "react";

export default function CheckboxInput({ label, name, value, onChange, required, error }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={!!value}
          onChange={(e) => onChange(name, e.target.checked)}
        />
        {label} {required && "*"}
      </label>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

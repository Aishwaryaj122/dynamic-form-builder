import React, { useState } from "react";
import FieldRenderer from "./FieldRenderer";

export default function FormBuilder({ schema }) {
  const [formSchema, setFormSchema] = useState(schema);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [newField, setNewField] = useState({ label: "", name: "", type: "text", required: false });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    formSchema.fields.forEach((f) => {
      if (f.required) {
        if (f.type === "checkbox" && !formData[f.name]) newErrors[f.name] = "Required";
        if (f.type !== "checkbox" && !formData[f.name]) newErrors[f.name] = "Required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedData(formData);
  };

  const handleAddField = () => {
    if (!newField.name || !newField.label) return alert("Name and label required!");
    const field = { ...newField, id: Date.now() };
    setFormSchema((prev) => ({
      ...prev,
      fields: [...prev.fields, field],
    }));
    setNewField({ label: "", name: "", type: "text", required: false });
  };

  return (
    <div>
      <h2>{formSchema.title}</h2>

      <div>
        <h4>Add New Field</h4>
        <input
          placeholder="Label"
          value={newField.label}
          onChange={(e) => setNewField({ ...newField, label: e.target.value })}
        />
        <input
          placeholder="Name"
          value={newField.name}
          onChange={(e) => setNewField({ ...newField, name: e.target.value })}
        />
        <select
          value={newField.type}
          onChange={(e) => setNewField({ ...newField, type: e.target.value })}
        >
          <option value="text">Text</option>
        
        </select>
        <label>
          <input
            type="checkbox"
            checked={newField.required}
            onChange={(e) => setNewField({ ...newField, required: e.target.checked })}
          />
          Required
        </label>
        <button type="button" onClick={handleAddField}>Add Field</button>
      </div>

     
      <form onSubmit={handleSubmit}>
        {formSchema.fields.map((field) => (
          <FieldRenderer
            key={field.id}
            field={field}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h4>Submitted Data:</h4>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

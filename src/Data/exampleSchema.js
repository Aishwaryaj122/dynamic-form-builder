const exampleSchema = {
  title: "Employee Information Form",
  fields: [
    { id: 1, name: "name", label: "Full Name", type: "text", required: true },
    { id: 2, name: "department", label: "Department", type: "select", options: ["HR", "IT", "Finance"], required: true },
    { id: 3, name: "terms", label: "Accept Terms", type: "checkbox", required: true }
  ]
};

export default exampleSchema;

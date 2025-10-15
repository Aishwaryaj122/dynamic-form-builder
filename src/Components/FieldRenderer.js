import React from "react";
import TextInput from "./Inputs/TextInput";
import SelectInput from "./Inputs/SelectInput";
import CheckboxInput from "./Inputs/CheckboxInput";

export default function FieldRenderer({ field, value, onChange, error }) {
  const props = { ...field, value, onChange, error };

  switch (field.type) {
    case "text": return <TextInput {...props} />;
    case "select": return <SelectInput {...props} />;
    case "checkbox": return <CheckboxInput {...props} />;
    default: return null;
  }
}

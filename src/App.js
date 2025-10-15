import React from "react";
import FormBuilder from "./Components/FormBuilder";
import exampleSchema from "./Data/exampleSchema";

function App() {
  return (
    <div >
      <FormBuilder schema={exampleSchema} />
    </div>
  );
}

export default App;

1.Clone the repository : https://github.com/Aishwaryaj122/dynamic-form-builder.git
2.Navigate to the project folder :cd dynamic-form-builder
3.Start the development server - npm i npm start
4.Open in your browser:http://localhost:3000
5.Packages Used :react,react-dom ,react-scripts
6.Component Structure and Reasoning (Short Note)

App.js – Entry point, imports schema and renders the FormBuilder component.

FormBuilder.js – Main logic, manages schema-based field rendering, validation, form submission, and dynamic field addition.

FieldRenderer.js – Acts as a bridge; decides which input component (text, select, or checkbox) to render based on the field type.

TextInput.js, SelectInput.js, CheckboxInput.js – Reusable, controlled input components for different field types.

Schema.js – Contains example JSON schema used for generating the form dynamically.


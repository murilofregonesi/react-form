import React from "react";

function dontValidate(value) {
  console.log("No validation.");
  return { valid: true, text: "" };
}

const defaultValidations = {
  cpf: dontValidate,
  name: dontValidate,
  surname: dontValidate,
  password: dontValidate,
};

const FormValidation = React.createContext(defaultValidations);

export default FormValidation;

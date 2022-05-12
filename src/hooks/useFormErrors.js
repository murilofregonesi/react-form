import React, { useState } from "react";

function useFormErrors(validations) {
  const [errors, setErrors] = useState(initialErrors(validations));

  function validateField(event) {
    const { name, value } = event.target;
    let newErrors = { ...errors };
    newErrors[name] = validations[name](value);
    setErrors(newErrors);
  }

  function allowSubmit() {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }
    return true;
  }

  return [errors, validateField, allowSubmit];
}

function initialErrors(validations) {
  const initialErrors = {};
  for (let field in validations) {
    initialErrors[field] = { valid: true, text: "" };
  }
  return initialErrors;
}

export default useFormErrors;

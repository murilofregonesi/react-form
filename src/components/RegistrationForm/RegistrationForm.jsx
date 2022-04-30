import React, { useState, Fragment } from "react";
import DataUser from "./DataUser";
import DataLogin from "./DataLogin";
import DataAddress from "./DataAddress";

function RegistrationForm({
  onSubmit,
  validateCPF,
  validateName,
  validateSurname,
}) {
  const [currStep, setCurrStep] = useState(0);

  const forms = [
    <DataLogin onSubmit={incrementStep} />,
    <DataUser
      onSubmit={incrementStep}
      validateCPF={validateCPF}
      validateName={validateName}
      validateSurname={validateSurname}
    />,
    <DataAddress onSubmit={onSubmit} />,
  ];

  function incrementStep() {
    setCurrStep(currStep + 1);
  }

  function decrementStep() {
    setCurrStep(currStep - 1);
  }

  return <Fragment>{forms[currStep]}</Fragment>;
}

export default RegistrationForm;

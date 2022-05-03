import React, { useState, Fragment, useEffect } from "react";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import DataUser from "./DataUser";
import DataLogin from "./DataLogin";
import DataAddress from "./DataAddress";

function RegistrationForm({ onSubmit, validations }) {
  const [currStep, setCurrStep] = useState(0);
  const [data, setData] = useState({});

  const forms = [
    <DataLogin onSubmit={updateForm} validations={validations} />,
    <DataUser onSubmit={updateForm} validations={validations} />,
    <DataAddress onSubmit={updateForm} validations={validations} />,
    <Typography variant="h5">Pedido finalizado com sucesso!</Typography>,
  ];

  useEffect(() => {
    if (currStep === forms.length - 1) {
      onSubmit(data);
    }
  });

  function updateForm(newData) {
    setData({ ...data, ...newData });
    setCurrStep(currStep + 1);
  }

  function decrementStep() {
    setCurrStep(currStep - 1);
  }

  return (
    <Fragment>
      <Stepper activeStep={currStep}>
        <Step key={0}>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step key={1}>
          <StepLabel>Dados pessoais</StepLabel>
        </Step>
        <Step key={2}>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step key={3}>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[currStep]}
    </Fragment>
  );
}

export default RegistrationForm;

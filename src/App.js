import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import { Container, Typography } from "@mui/material";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h3" align="center">
        Formulário Cadastro
      </Typography>
      <RegistrationForm
        onSubmit={handleSubmit}
        validateCPF={validateCPF}
        validateName={validateName}
        validateSurname={validateSurname}
      />
    </Container>
  );
}

function handleSubmit(data) {
  console.log(data);
}

function validateCPF(value) {
  if (value.length !== 11) {
    return { valid: false, text: "CPF deve ter 11 dígitos." };
  } else {
    return { valid: true, text: "" };
  }
}
function validateName(value) {
  return { valid: true, text: "" };
}
function validateSurname(value) {
  return { valid: true, text: "" };
}

export default App;

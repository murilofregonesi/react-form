import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import validations from "./models/registration";
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
        validations={validations}
      />
    </Container>
  );
}

function handleSubmit(data) {
  console.log(data);
}

export default App;

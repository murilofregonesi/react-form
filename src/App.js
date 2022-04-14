import { Fragment } from 'react';
import './App.css';
import RegistrationForm from "./components/RegistrationForm"
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h3" align="center">Formulário Cadastro</Typography>
      <RegistrationForm/>
    </Container>
  );
}

export default App;

import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@mui/material";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        label="Nome"
        margin="dense"
        fullWidth
      />
      <TextField
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        id="surname"
        label="Sobrenome"
        margin="dense"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        id="cpf"
        label="CPF"
        margin="dense"
        fullWidth
      />

      <FormControlLabel label="Novidades" control={<Switch defaultChecked />} />
      <FormControlLabel label="Promoções" control={<Switch defaultChecked />} />

      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}

export default RegistrationForm;

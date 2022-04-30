import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@mui/material";

function DataUser({ onSubmit, validateCPF, validateName, validateSurname }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [news, setNews] = useState(true);
  const [promo, setPromo] = useState(false);
  const [errors, setErrors] = useState({
    cpf: { valid: true, text: "" },
    name: { valid: true, text: "" },
    surname: { valid: true, text: "" },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        label="Nome"
        required
        margin="dense"
        fullWidth
        error={!errors.name.valid}
        helperText={errors.name.text}
        onBlur={(e) => {
          const error = validateName(e.target.value);
          setErrors({ ...errors, name: error });
        }}
      />
      <TextField
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        id="surname"
        label="Sobrenome"
        required
        margin="dense"
        fullWidth
        error={!errors.surname.valid}
        helperText={errors.surname.text}
        onBlur={(e) => {
          const error = validateSurname(e.target.value);
          setErrors({ ...errors, surname: error });
        }}
      />
      <TextField
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        id="cpf"
        label="CPF"
        required
        margin="dense"
        fullWidth
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        onBlur={(e) => {
          const error = validateCPF(e.target.value);
          setErrors({ ...errors, cpf: error });
        }}
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch checked={news} onChange={(e) => setNews(e.target.checked)} />
        }
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promo}
            onChange={(e) => setPromo(e.target.checked)}
          />
        }
      />

      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}

export default DataUser;

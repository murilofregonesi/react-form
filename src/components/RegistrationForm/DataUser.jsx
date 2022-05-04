import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@mui/material";

function DataUser({ onSubmit, validations }) {
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

  function handleSubmit(event) {
    event.preventDefault();
    if (allowSubmit()) {
      onSubmit({ name, surname, cpf, news, promo });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        name="name"
        label="Nome"
        required
        margin="dense"
        fullWidth
        error={!errors.name.valid}
        helperText={errors.name.text}
        onBlur={validateField}
      />
      <TextField
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        id="surname"
        name="surname"
        label="Sobrenome"
        required
        margin="dense"
        fullWidth
        error={!errors.surname.valid}
        helperText={errors.surname.text}
        onBlur={validateField}
      />
      <TextField
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        id="cpf"
        name="cpf"
        label="CPF"
        required
        margin="dense"
        fullWidth
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        onBlur={validateField}
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
        Próximo
      </Button>
    </form>
  );
}

export default DataUser;

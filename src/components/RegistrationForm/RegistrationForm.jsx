import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Switch } from "@mui/material";

function RegistrationForm({onSubmit}) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [news, setNews] = useState(true);
  const [promo, setPromo] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({name, surname, cpf, news, promo});
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

export default RegistrationForm;

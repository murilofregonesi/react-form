import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function DataLogin({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id="email"
        label="email"
        type="email"
        required
        margin="dense"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id="password"
        label="password"
        type="password"
        required
        margin="dense"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}

export default DataLogin;

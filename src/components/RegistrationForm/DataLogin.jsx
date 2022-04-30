import React from "react";
import { TextField, Button } from "@mui/material";

function DataLogin({ onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        required
        margin="dense"
        fullWidth
      />
      <TextField
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

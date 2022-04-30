import React from "react";
import { TextField, Button } from "@mui/material";

function DataAddress({ onSubmit }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <TextField id="cep" label="CEP" type="number" margin="dense" />
      <TextField
        id="address"
        label="Endereço"
        type="text"
        margin="dense"
        fullWidth
      />
      <TextField id="number" label="Número" type="number" margin="dense" />
      <TextField id="state" label="Estado" type="text" margin="dense" />
      <TextField id="city" label="Cidade" type="text" margin="dense" />
      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}

export default DataAddress;

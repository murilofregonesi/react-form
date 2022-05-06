import React, { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import FormValidation from "../../contexts/FormValidation";

function DataAddress({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const validations = useContext(FormValidation);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ cep, address, number, state, city });
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => {
          setCep(e.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        margin="dense"
      />
      <TextField
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        id="address"
        label="Endereço"
        type="text"
        margin="dense"
        fullWidth
      />
      <TextField
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        id="number"
        label="Número"
        type="number"
        margin="dense"
      />
      <TextField
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        id="state"
        label="Estado"
        type="text"
        margin="dense"
      />
      <TextField
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        id="city"
        label="Cidade"
        type="text"
        margin="dense"
      />
      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}

export default DataAddress;

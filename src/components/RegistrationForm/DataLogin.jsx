import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import FormValidation from "../../contexts/FormValidation";
import useFormErrors from "../../hooks/useFormErrors";

function DataLogin({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validations = useContext(FormValidation);

  const [errors, validateField, allowSubmit] = useFormErrors(validations);

  function handleSubmit(event) {
    event.preventDefault();
    if (allowSubmit()) {
      onSubmit({ email, password });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        name="password"
        label="password"
        type="password"
        required
        margin="dense"
        fullWidth
        error={!errors.password.valid}
        helperText={errors.password.text}
        onBlur={validateField}
      />
      <Button type="submit" variant="contained">
        Próximo
      </Button>
    </form>
  );
}

export default DataLogin;

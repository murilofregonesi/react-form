import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function DataLogin({ onSubmit, validations }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    password: { valid: true, text: "" },
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

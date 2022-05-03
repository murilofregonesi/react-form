function validateCPF(value) {
  if (value.length !== 11) {
    return { valid: false, text: "CPF deve ter 11 dígitos." };
  } else {
    return { valid: true, text: "" };
  }
}

function validateName(value) {
  return { valid: true, text: "" };
}

function validateSurname(value) {
  return { valid: true, text: "" };
}

export default {
  cpf: validateCPF,
  name: validateName,
  surname: validateSurname,
};

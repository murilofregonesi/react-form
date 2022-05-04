function validateCPF(value) {
  if (value.length !== 11) {
    return { valid: false, text: "CPF deve ter 11 dígitos." };
  } else {
    return { valid: true, text: "" };
  }
}

function validateLength(value) {
  if (value.length < 4 || value.length > 72) {
    return { valid: false, text: "Deve conter entre 4 e 72 caracteres." };
  } else {
    return { valid: true, text: "" };
  }
}

export default {
  cpf: validateCPF,
  name: validateLength,
  surname: validateLength,
  password: validateLength,
};

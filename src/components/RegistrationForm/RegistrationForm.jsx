import React from "react";
import Button from '@mui/material/Button';


function RegistrationForm() {
    return(
        <form>
            <label>Nome</label>
            <input type="text" />
            
            <label>Sobrenome</label>
            <input type="text" />
            
            <label>CPF</label>
            <input type="text" />
            
            <label>Newsletter</label>
            <input type="checkbox" />
            
            <label>Promoções</label>
            <input type="checkbox" />
            
            <Button variant="contained">Cadastrar</Button>
        </form>
    );
}

export default RegistrationForm;

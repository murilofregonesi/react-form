import React from "react";
import { TextField, Button, FormControlLabel, Switch } from '@mui/material';


function RegistrationForm() {
    return(
        <form>
            <TextField id="name" label="Nome" margin="dense" fullWidth />
            <TextField id="surname" label="Sobrenome" margin="dense" fullWidth />
            <TextField id="cpf" label="CPF" margin="dense" fullWidth />
            
            <FormControlLabel label="Novidades" control={<Switch defaultChecked />} />
            <FormControlLabel label="Promoções" control={<Switch defaultChecked />} />

            <Button variant="contained">Cadastrar</Button>
        </form>
    );
}

export default RegistrationForm;

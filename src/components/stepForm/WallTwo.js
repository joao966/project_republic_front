import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WallTwo = ({ formData, setForm, navigation }) => {
  const {alturaB, larguraB, janelaB, portaB} = formData;

  const validate = () => {
    const sumWall = (Number(alturaB) * Number(larguraB));
    const resultPorta = (Number(portaB) * 1.52);
    const resultJanela = (Number(janelaB) * 2.4);
    const result = resultJanela + resultPorta;

    if(result <= sumWall / 2 ) {
      return navigation.next();
    } else {
      return toast.error('Janelas e Portas não devem exeder 50% da area total');
    }
  }
  
  const handleClick = async () => { 
    if(portaB === '') {
      validate()
    } else if(Number(portaB) > 0 && Number(alturaB) > 2.2) {
      validate();
    } else {
      return toast.error('Altura da parede deve conter mais que 2.2');
    }
  }
  
  return (
    <Container maxWidth="xs">
      <h3>PAREDE DOIS</h3>
      <TextField
        label="altura"
        name="alturaB"
        // value={endereco}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="largura"
        name="larguraB"
        // value={numero}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <label style={{display: "flex", flexDirection: "column"}}>
          Janela
          <input name="janelaB" onChange={setForm} type="number" min="1" max="3" />
        </label>
        <label style={{display: "flex", flexDirection: "column"}}>
          Porta
          <input name="portaB" onChange={setForm} type="number" min="1" max="3" />
        </label>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
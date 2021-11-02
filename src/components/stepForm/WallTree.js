import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const WallTree = ({ formData, setForm, navigation }) => {
  const {alturaC, larguraC, janelaC, portaC} = formData;

  const validate = () => {
    const sumWall = (Number(alturaC) * Number(larguraC));
    const resultPorta = (Number(portaC) * 1.52);
    const resultJanela = (Number(janelaC) * 2.4);
    const result = resultJanela + resultPorta;

    if(result <= sumWall / 2 ) {
      return navigation.next();
    } else {
      return toast.error('Janelas e Portas não devem exeder 50% da area total');
    }
  }
  
  const handleClick = async () => { 
    if(portaC === '') {
      validate()
    } else if(Number(portaC) > 0 && Number(alturaC) > 2.2) {
      validate();
    } else {
      return toast.error('Altura da parede deve conter mais que 2.2');
    }
  }
  
  return (
    <Container maxWidth="xs">
      <h3>PAREDE TRÊS</h3>
      <TextField
        label="altura"
        name="alturaC"
        // value={endereco}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="largura"
        name="larguraC"
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
          <input onChange={setForm} name="janleaC" type="number" min="1" max="3" />
        </label>
        <label style={{display: "flex", flexDirection: "column"}}>
          Porta
          <input onChange={setForm} name="portaC" type="number" min="1" max="3" />
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
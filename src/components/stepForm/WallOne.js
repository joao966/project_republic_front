import React, { useContext, useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import context from '../../context/contex'

export const WallOne = ({ formData, setForm, navigation }) => {
  // console.log('navigation', navigation)

  const {alturaA, larguraA, janelaA, portaA} = formData;
  // const {requisitionCep} = useContext(context);
  
  const validate = () => {
    const sumWall = (Number(alturaA) * Number(larguraA));
    const resultPorta = (Number(portaA) * 1.52);
    const resultJanela = (Number(janelaA) * 2.4);
    const result = resultJanela + resultPorta;

    if(result <= sumWall / 2 ) {
      return navigation.next();
    } else {
      return toast.error('Janelas e Portas não devem exeder 50% da area total');
    }
  }
  
  const handleClick = async () => { 
    if(portaA === '') {
      validate()
    } else if(Number(portaA) > 0 && Number(alturaA) > 2.2) {
      validate();
    } else {
      return toast.error('Altura da parede deve conter mais que 2.2');
    }
  }
  
  return (
    <Container maxWidth="xs">
      <h3>PAREDE UM</h3>
     
      <TextField
        type="number"
        label="altura"
        name="alturaA"
        // value={alturaA}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="larguraA"
        name="larguraA"
        // value={larguraA}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <label style={{display: "flex", flexDirection: "column"}}>
          Janela
          <input onChange={setForm} name="janelaA" type="number" min="1" max="3" />
        </label>
        <label style={{display: "flex", flexDirection: "column"}}>
          Porta
          <input onChange={setForm} name="portaA" type="number" min="1" max="3" />
        </label>
      </div>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handleClick}
      >
        Next
      </Button>
    </Container>
  );
};

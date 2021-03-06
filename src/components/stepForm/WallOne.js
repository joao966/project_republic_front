import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import {Col} from "antd";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/form.css';
import img from '../../assets/juca.svg';

export const WallOne = ({ formData, setForm, navigation }) => {
  const {alturaA, larguraA, janelaA, portaA} = formData;

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
    if(!alturaA || !larguraA) {
      return toast.error('preencha todos os campos')
    };

    if(Number(alturaA) > 15 || Number(alturaA) < 1) {
      return toast.error('A parede não pode ser menor que 1 metro ou maior que 15 metros');
    }

    if(Number(larguraA) > 15 || Number(larguraA) <1) {
      return toast.error('A parede não pode ser menor que 1 metro ou maior que 15 metros');
    }

    if(portaA === '') {
      validate()
    } else if(Number(portaA) > 0 && Number(alturaA) > 2.2) {
      validate();
    } else {
      return toast.error('Altura da parede deve conter mais que 2.2');
    }

    return;
  }
  
  return (
    <Container maxWidth="xs">
      <div className="container">
      <img className="fadeIn" src={img} alt="gif-juca" />
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
        type="number"
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
          <input className="input" onChange={setForm} name="janelaA" type="number" min="1" max="3" />
        </label>
        <Col span={1} />
        <label style={{display: "flex", flexDirection: "column"}}>
          Porta
          <input className="input" onChange={setForm} name="portaA" type="number" min="1" max="3" />
        </label>
      </div>
      <hr className="hr" />
      <button
        className="button"
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={handleClick}
      >
        Next
      </button>
      </div>
    </Container>
  );
};

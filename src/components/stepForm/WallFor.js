import React, { useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Col} from "antd";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../style/form.css';
import img from '../../assets/juca.svg';
import context from "../../context/context";

export const WallFor = ({ formData, setForm, navigation }) => {
  const {setCurWall} = useContext(context);
  const {alturaD, larguraD, janelaD, portaD} = formData;

  useEffect(() => {
    setCurWall('review');
  });

  const validate = () => {
    const sumWall = (Number(alturaD) * Number(larguraD));
    const resultPorta = (Number(portaD) * 1.52);
    const resultJanela = (Number(janelaD) * 2.4);
    const result = resultJanela + resultPorta;

    if(!alturaD || !larguraD) {
      return toast.error('preencha todos os campos')
    };

    if(result <= sumWall / 2 ) {
      return navigation.next();
    } else {
      return toast.error('Janelas e Portas não devem exeder 50% da area total');
    }
  }
  
  const handleClick = async () => { 
    if(Number(alturaD) > 15 && Number(alturaD) < 1 || Number(larguraD) > 15 || Number(larguraD) < 1) {
      return toast.error('A parede não pode ser menor que 1 metro ou maior que 15 metros');
    }

    if(portaD === '') {
      validate()
    } else if(Number(portaD) > 0 && Number(alturaD) > 2.2) {
      validate();
    } else {
      return toast.error('Altura da parede deve conter mais que 2.2', {position: "bottom-center"});
    }
  }
  
  return (
    <Container maxWidth="xs">
      <div className="container">
      <img className="fadeIn" src={img} alt="gif-juca" />
      <h3>PAREDE QUATRO</h3>
      <TextField
        label="altura"
        name="alturaD"
        // value={endereco}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="largura"
        name="larguraD"
        // value={numero}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
     <div style={{display: "flex", justifyContent: "space-around"}}>
        <label style={{display: "flex", flexDirection: "column"}} >
          Janela
          <input className="input" onChange={setForm} name="janelaD" type="number" min="1" max="3" />
        </label>
        <Col span={1} />
        <label style={{display: "flex", flexDirection: "column"}} >
          Porta
          <input className="input" onChange={setForm} name="portaD" type="number" min="1" max="3" />
        </label>
      </div>
      <hr className="hr" />
      <div className="buttonFor">
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
    </div>
    </Container>
  );
};
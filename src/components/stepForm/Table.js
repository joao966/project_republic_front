import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import context from '../../context/context';
import {Row, Col, Button} from 'antd';
import { toast } from 'react-toastify';
import '../../style/Table.css';
import { Redirect } from "react-router-dom";

export const Table = (_props) => {
  const { calculation } = useContext(context);
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);

  const { cans05, cans25, cans36, cans18, sumWall } = calculation;

  useEffect(() => {
      const resultToken =  JSON.parse(localStorage.getItem('user'));
      console.log(resultToken)
      setUser(resultToken.user);
  },[]);

  const handleClick = async () => {
    try {
      const {name} = user;
      const resultSum = Number(cans05) + Number(cans18) + Number(cans25) + Number(cans36);
      console.log(name)
      const newHistory = {
        user: name,
        meters: String(sumWall),
        liters: String(resultSum + '000'),
      }
  
      const result = await axios.post('https://project-republic.herokuapp.com/history', newHistory)
     
      setUser(user)
      localStorage.setItem('history', JSON.stringify(result.data));
      setRedirect(true);
      toast.warning(`${result.data.message} Obrigado por utilizar a pormeteu tintas!`);
    } catch (error) {
      toast.error('bad request');
    }
  };

  if(redirect) {
    return  <Redirect to="/" />;
  }
 
  return (
    <div >
      <div>
        <div className="title">
          <h1 data-testid="heading">O RESULTADO É</h1>
        </div>
      <Row >
        <Col span={4} />
        <Col span={16} >
          <Row  >
            <div className="table">
            {`Sua area util é de ${sumWall} m²`}
            <br />
            A quantidade total de tintas em latas são:
            <br />
            {cans05 > 0 && ` - ${cans05} latas de 0.5L `}
            <br />
            {cans25 > 0 && ` - ${cans25} latas de 2.5L `}
            <br />
            {cans36 > 0 && ` - ${cans36} latas de 3.6L `}
            <br />
            {cans18 > 0 && ` - ${cans18} latas de 18L `}
            </div>
          </Row>
        </Col>
        <Col span={4} />
      </Row>
      <div className="buttonTable">
        <Button onClick={handleClick} >
          Salvar consulta no histórico
        </Button>
      </div>
    </div>
    </div>
  )
};

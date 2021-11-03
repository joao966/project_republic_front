import React, {useContext, useEffect, useState} from "react";
import context from '../../context/context';
import {Row, Col, Button} from 'antd';
import '../../style/Table.css';

export const Table = (_props) => {
  const { calculation } = useContext(context);
  const [token, setToken] = useState('');
  // console.log(calculation)
  const { lata05, lata25, lata36, lata18, sumWall } = calculation;

  useEffect(() => {
    const resultToken = localStorage.getItem('token');
    console.log(resultToken)
    setToken(resultToken)
  }, []);
 
  return (
    <div >
      <Row >
        <Col span={24} >
          <Row className="table" >
            <Col span={24} >
            <Col span={4}>{`sua area util é de ${sumWall} m²`}</Col>
            O gasto total será de:
            <Col span={4}>{lata05 > 0 && `você precisará de ${lata05} latas de 0.5L `}</Col>
            <Col span={4}>{lata25 > 0 && `você precisará de ${lata25} latas de 2.5L `}</Col>
            <Col span={4}>{lata36 > 0 && `você precisará de ${lata36} latas de 3.6L `}</Col>
            <Col span={4}>{lata18 > 0 && `você precisará de ${lata18} latas de 18L `}</Col>
            </Col>
          </Row>
        </Col>
      </Row>
    <Button>
      Salvar consulta no histórico
    </Button>
    </div>
  )
};
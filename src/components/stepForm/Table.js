import React, {useContext, useEffect, useState} from "react";
import context from '../../context/context';
import {Row, Col, Button} from 'antd';
import '../../style/Table.css';

export const Table = (_props) => {
  const { calculation } = useContext(context);
  const [token, setToken] = useState('');

  const { cans05, cans25, cans36, cans18, sumWall } = calculation;

  useEffect(() => {
    const resultToken = localStorage.getItem('token');
    setToken(resultToken);
  }, []);
 
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
        <Button >
          Salvar consulta no histórico
        </Button>
      </div>
    </div>
    </div>
  )
};

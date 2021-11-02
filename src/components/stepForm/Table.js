import React, {useContext, useEffect} from "react";
import context from '../../context/contex';
import {Row, Col} from 'antd';
import '../../style/Table.css';

export const Table = (_props) => {
  const { calculation } = useContext(context);
  console.log(calculation)
  const { lata05, lata25, lata36, lata18, sumWall } = calculation;
 
  return (
    <div >
      <Row >
        <Col span={24} >
          <Row className="table" >
            <Col span={24} >
            <Col span={4}>{`sua area util é de ${sumWall} m²`}</Col>
            <Col span={4}>{lata05 > 0 && `você precisará de ${lata05} latas de 0.5L `}</Col>
            <Col span={4}>{lata25 > 0 && `você precisará de ${lata25} latas de 2.5L `}</Col>
            <Col span={4}>{lata36 > 0 && `você precisará de ${lata36} latas de 3.6L `}</Col>
            <Col span={4}>{lata18 > 0 && `você precisará de ${lata18} latas de 18L `}</Col>
            </Col>
          </Row>
        </Col>
      </Row>

    </div>
  )
};

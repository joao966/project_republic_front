import React, { useContext, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import context from '../../context/context'

export const Review = ({ formData, navigation }) => {
  const { setCalculation } = useContext(context);
  const { go } = navigation;
  const { alturaA,larguraA, janelaA, portaA, alturaB, larguraB, janelaB, portaB, alturaC, larguraC, janelaC, portaC, alturaD, larguraD, janelaD, portaD } = formData;
  // console.log('navigation', navigation)

  const wallOne = Number(alturaA) * Number(larguraA) - (1.52 * portaA) - (2.4 * janelaA);
  const wallTwo = Number(alturaB) * Number(larguraB) - (1.52 * portaB) - (2.4 * janelaB);
  const wallTree = Number(alturaC) * Number(larguraC) - (1.52 * portaC) - (2.4 * janelaC);
  const wallFor = Number(alturaD) * Number(larguraD) - (1.52 * portaD) - (2.4 * janelaD);

  const sumWall = Number(wallOne + wallTwo + wallTree + wallFor);
  let resultPaints = sumWall / 5;

  let lata05 = 0, lata25 = 0, lata36 = 0, lata18 = 0;

  useEffect(() => {
    while (resultPaints > 0) {
      if (resultPaints >= 18) {
        resultPaints = resultPaints - 18
        lata18 += 1;
      } else if (resultPaints >= 3.6) {
        resultPaints = resultPaints - 3.6;
        lata36 += 1;
      } else if (resultPaints >= 2.5) {
        resultPaints = resultPaints - 2.5;
        lata25 += 1;
      } else {
        resultPaints = resultPaints - 0.5;
        lata05 += 1;
      }
    }
    if (lata05 > 0) {
      setCalculation((oldState) => {
        return {...oldState, lata05, sumWall }
      });
    }
    if (lata25 > 0) {
      setCalculation((oldState) => {
        return {...oldState, lata25, sumWall}
      });
    }
    if (lata36 > 0) {
      setCalculation((oldState) => {
        return {...oldState, lata36, sumWall}
      });
    }
    if (lata18 > 0) {
      setCalculation((oldState) => {
        return {...oldState, lata18, sumWall}
      });
    }
  }, [])


  return (
    <div className="form-reviw">
      <Container maxWidth='sm'>
        <h3>Review</h3>
        <RenderAccordion summary="parede-um" go={ go } details={[
          { 'ALTURAa': alturaA },
          { 'LARGURAa': larguraA },
          { 'JANELAa': janelaA },
          { 'PORTAa': portaA },
        ]} />
        <RenderAccordion summary="parede-dois" go={ go } details={[
          { 'ALTURAb': alturaB },
          { 'LARGURAb': larguraB },
          { 'JANELAb': janelaB },
          { 'PORTAb': portaB },
        ]} />
        <RenderAccordion summary="parede-tres" go={ go } details={[
          { 'ALTURAc': alturaC },
          { 'LARGURAc': larguraC },
          { 'JANELAc': janelaC },
          { 'PORTAc': portaC },
        ]} />
        <RenderAccordion summary="parede-quatro" go={ go } details={[
          { 'ALTURAd': alturaD },
          { 'LARGURAd': larguraD },
          { 'JANELAd': janelaD },
          { 'PORTAd': portaD },
        ]} />
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: '1.5rem' }}
          onClick={() => go('submit')}
          >
          Submit
        </Button>

      </Container>
    </div>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)
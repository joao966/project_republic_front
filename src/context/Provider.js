import React, { useEffect, useState } from 'react';
import context from './contex';
// import { toast } from 'react-toastify';

function Provider({children}) {
  const [calculation, setCalculation] = useState({
    lata05: 0,
    lata25: 0,
    lata36: 0,
    lata18: 0,
  })


  const GLOBAL_STATE = {
    calculation,
    setCalculation,
  }

  return (
    <context.Provider value={GLOBAL_STATE}>
      {children}
    </context.Provider>
  )
}

export default Provider;
import React, { useEffect, useState } from 'react';
import context from './context';
// import { toast } from 'react-toastify';

function Provider({children}) {
  const [modal, setModal] = useState(false);
  const [curWall, setCurWall] = useState('');
  const [user, setUser] = useState({});
  const [calculation, setCalculation] = useState({
    lata05: 0,
    lata25: 0,
    lata36: 0,
    lata18: 0,
  })

  const GLOBAL_STATE = {
    calculation,
    setCalculation,
    setUser,
    user,
    setModal,
    modal,
    setCurWall,
    curWall,
  }

  return (
    <context.Provider value={GLOBAL_STATE}>
      {children}
    </context.Provider>
  )
}

export default Provider;
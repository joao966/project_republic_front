import React, { useState } from 'react';
import context from './context';

function Provider({children}) {
  const [modal, setModal] = useState(false);
  const [curWall, setCurWall] = useState('');
  const [user, setUser] = useState({});
  const [calculation, setCalculation] = useState({
    
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
import React from 'react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWhiteRouter = (component,
{
  initialRouter = ['/'],
  history = createMemoryHistory({initialRouter}),
} = {}) => {
  return {
    ...render(
      <Router history={ history }>
    
          {component} 
       
      </Router>
    ),
    history
  };
};

export default renderWhiteRouter;

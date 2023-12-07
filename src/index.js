import React from 'react';
import { createRoot } from 'react-dom/client';

import Login from './containers/Login';
import GlobalStyles from './styles/globalStyles';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <>
    <Login />
    <GlobalStyles />  
  </>,

)
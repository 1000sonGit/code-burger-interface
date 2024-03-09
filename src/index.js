import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import Routes from './routes/routes';
import AppProvider from './hooks';
import GlobalStyles from './styles/globalStyles';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <>
    <AppProvider>
      <Routes/>
    </AppProvider>    
    <ToastContainer autoClose={2000} theme="colored"/>    
    <GlobalStyles />  
  </>,

)
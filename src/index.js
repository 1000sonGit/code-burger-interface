import React from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify'

// import Login from './containers/Login';
import Register from './containers/Register';
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './styles/globalStyles';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <>
    <UserProvider>
      <Login />
    </UserProvider>
    <Register />
    <ToastContainer autoClose={2000} theme="colored"/>    
    <GlobalStyles />  
  </>,

)
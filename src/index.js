import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './bootstrap.min.css'
import ContextShare from './Context/ContextShare';
import LoginContext from './Context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <LoginContext>
     <ContextShare>
       <BrowserRouter> 
       <App />
       </BrowserRouter>
     </ContextShare>
   </LoginContext>
  </React.StrictMode>
);


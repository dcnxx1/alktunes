import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/main/main.css';
import Guard from './auth/Guard'
import Redirector from './auth/Redirector';
import App from './App';
import Entrance from './components/Entrance';
import Login from './compound/Login';
import Register from './compound/Register';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  
  <BrowserRouter>
    <Routes>
        <Route exact path='/*' element={<Guard> <App /> </Guard>} />
        <Route path='/entrance' element={ <Redirector><Entrance/></Redirector> } />  
        <Route path='/login' element={ <Redirector><Login /></Redirector>} />
        <Route path='/register' element={<Redirector><Register /></Redirector>} />
    </Routes>
  </BrowserRouter>
  
  
  </>
);


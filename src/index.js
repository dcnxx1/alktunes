import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/main/main.css';
import App from './App';
import Entrance from './components/Entrance';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/entrance' element={<Entrance/>} />
    </Routes>
  </BrowserRouter>
);


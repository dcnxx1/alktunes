import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Player from './components/Player/Player'
import Nav from './components/Nav/Nav'
function App() {
  return (
    <div className="App">
     <Nav />
     <Home />
     <Player />
    </div>
  );
}

export default App;

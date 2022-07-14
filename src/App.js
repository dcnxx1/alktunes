import React from 'react';
import {Home,Playing, Search, Icon, Nav, PlayListComp, APlaylist} from './imports'
import {Route, Routes} from 'react-router-dom'
import ReactPlayer from 'react-player';
function App() {
  return (
    
    <div className="App">
      <Nav />
      <Routes>
        <Route  path='/playlist' element={<PlayListComp />} />
        <Route  exact path='/playlist/:id' element={<APlaylist />} />
        <Route  path='/' element={<Home />} />
      </Routes>
      <Playing />
    </div>
  );
}

export default App;

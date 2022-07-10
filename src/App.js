import React from 'react';
import {Home,Playing, Search, Icon, Nav, PlayListComp} from './imports'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route  path='/playlist' element={<PlayListComp />} />
        <Route  path='/' element={<Home />} />
      </Routes>
      <Playing />
    </div>
  );
}

export default App;

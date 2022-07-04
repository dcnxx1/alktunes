import React from 'react';
import {Home,Playing, Search, Icon, Nav, Bar} from './imports'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/playlist' element={<Bar />} />
        </Routes>
      <Playing />
    </div>
  );
}

export default App;

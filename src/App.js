import React from 'react';
import {Home,Playing, Search, Icon, Nav} from './imports'
import iconer from './static/icons/search_white.png'
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Playing />
    </div>
  );
}

export default App;

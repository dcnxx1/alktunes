import React from 'react';
import {Home,Playing, Search, Icon, Nav, PlayListComp, APlaylist, Music } from './imports'
import {Route, Routes} from 'react-router-dom'
import ControllerContext from './Context/ControllerContext';
import useMusicComponent from './Music/useMusicComponent';

function App() {
  const [{song, setSong}, {playlist, setPlaylistFromUrl, setPlaylist}, {play, setPlay}, playNext, loading] = useMusicComponent()
  
  const formatOptions = {
    song,
    setSong, 
    playlist,
    setPlaylist,
    setPlaylistFromUrl,
    play,
    setPlay,
    playNext,
  }

  return (
    
    <div className="App">
      <Nav />
      <ControllerContext.Provider value={formatOptions}>
      <Routes>
        <Route  path='/playlist' element={<PlayListComp/>} />
        <Route  exact path='/playlist/:id' element={<APlaylist />} />
        <Route  path='/' element={<Home />} />
      </Routes>
      <Playing />
      </ControllerContext.Provider>
      <Music songInfo={{song, play, setPlay}} />
      
    </div>
  );
}

export default App;

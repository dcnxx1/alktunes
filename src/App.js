import React, {useState, useEffect, createRef} from 'react';
import {Home,Playing, Search, Icon, Nav, PlayListComp, APlaylist, Music, Artist, PlayingMobile } from './imports'
import {Route, Routes} from 'react-router-dom'
import ControllerContext from './Context/ControllerContext';
import useMusicComponent from './Music/useMusicComponent';

function App() {

  const [
    [song, playlist, play, userPlaylists, at],
    [setSong, setPlaylist, setPlay, setUserPlaylists, playNext, setAt]
  ] = useMusicComponent()

  const formatOptions = {
    song,
    playlist,
    play,
    userPlaylists,
    at,
    setPlaylist,
    setPlay,
    setSong,
    setUserPlaylists,
    playNext,
    setAt,
  }

  const searchRef = createRef()
   
  return (

    <div className="App">
      <Nav />
      <ControllerContext.Provider value={formatOptions}>
      <Routes>
        <Route  path='/playlist' element={<PlayListComp/>} />
        <Route  exact path='/playlist/:id' element={<APlaylist refSearch={{searchRef}} />} />
        <Route  path="/artist/:id" element={<Artist />} />
        <Route  path='/' element={<Home />} />
      
      </Routes>

      <Playing  />
      </ControllerContext.Provider>
      <Music songInfo={{song, play, setPlay, setAt}} />
    </div>
    
   
  );
}

export default App;

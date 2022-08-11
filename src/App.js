import React, {useState, useEffect, createRef} from 'react';
import {Home,Playing, Search, Icon, Nav, PlayListComp, APlaylist, Music, Artist, PlayingMobile } from './imports'
import {Route, Routes} from 'react-router-dom'
import ControllerContext from './Context/ControllerContext';
import useMusicComponent from './Music/useMusicComponent';
import axios from 'axios';

function App() {
  
  const [homeFeatures, setHomeFeatures] = useState({})
      useEffect(() => {
        axios.get(`${process.env.REACT_APP_ENV}/tracks/tracktalker`).then((res) => {
          setHomeFeatures({
            features: res.data[0],
            trending: res.data[1]
          })
        })
      }, [])

  const [
    [song, playlist, play, userPlaylists, at],
    [setSong, setPlaylist, setPlay, setUserPlaylists, playNext, setAt, playPrevious]
  ] = useMusicComponent()
  const playerRef = createRef()

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
    playerRef,
    playPrevious
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
        <Route  path='/' element={<Home features={{homeFeatures}} />} />
      
      </Routes>
       <Playing />
      
     
      </ControllerContext.Provider>
    </div>
    
   
  );
}

export default App;

import React, {useContext, useMemo, useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import ContextController from '../Context/ControllerContext'
const Ranger = styled.input.attrs({type: 'range'})`
    width: 70%;
    height: fit-content;
    background: transparent; 
    border-color: transparent;
    color: transparent;
    max-width: 350px;
`

function Range({playedTime}) {
  const {song, play, setPlay, playNext} = useContext(ContextController)
  const {timePlayed, setPlayed} = playedTime

  const playerRef = useRef()

  function timeToInt() {
    const splitArr = song.track_length?.split(":")
    
    const seconds = splitArr && splitArr[0]*60+(+splitArr[1]);
    return seconds  
  }

  useEffect(() => {
    setPlayed(0)
  }, [song])

  function setToTime(e) {
    const {valueAsNumber} = e.target
    setPlayed(valueAsNumber.toFixed(0))
    playerRef.current.seekTo(valueAsNumber.toFixed() - 1, 'seconds')
  }




  return ( <>
    <Ranger max={timeToInt()} onChange={e => setToTime(e)} value={timePlayed}  />
    <ReactPlayer onEnded={e => playNext()} onProgress={e => setPlayed(prevValue => prevValue = e.playedSeconds.toFixed(0))} ref={playerRef} playing={play} url={song.track_source} style={{display: "none"}} />
  </>
  )
}

export default Range
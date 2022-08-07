import React, {useRef} from 'react'
import ReactPlayer from 'react-player'



function Music({songInfo}) {
  const {song, play, setPlay, setAt} = songInfo
  const playerRef = useRef()
   
  return (
    <ReactPlayer onProgress={e => setAt(e.playedSeconds)} ref={playerRef} playing={play} url={song.track_source} style={{display: "none"}} />
  )
}

export default Music
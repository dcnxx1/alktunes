import React from 'react'
import ReactPlayer from 'react-player'



function Music({songInfo}) {

    console.log(songInfo)
    
  return (
    <ReactPlayer playing={songInfo.play} url={songInfo.song[0].url} style={{display: "none"}} />
  )
}

export default Music
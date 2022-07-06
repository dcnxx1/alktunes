import React, {useState} from 'react'
import Track from '../compound/Track'
import {Icon,Controller, MobileController, MediumController, PlaylistWhite } from '../imports'


function Playing() {
  const [showMiniPlayer, setShowMiniPlayer] = useState(false)  
  return (
    <div className={`Playing ${showMiniPlayer == true ? "showMiniPlayer" : ""}`}>
    <span onClick={() => setShowMiniPlayer(prevValue => !prevValue)} className='arrow-up'></span>
    <span className='line'></span>
      <div className={`nexton`}>
          <div className='playing-header'>
          <h2>Next on playlist</h2>
        </div>
        <div className='playing-track'>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
        </div>
      </div>
      <div className='Player'>
        <div className='player-holder'>
        </div>
     
        <Controller/>
    <div className='show-playlist'>
      <Icon path={PlaylistWhite} />
    </div>
      </div>
    </div>
  )
}

export default Playing
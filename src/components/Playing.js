import React, {useState} from 'react'
import Track from '../compound/Track'
import {Icon,Controller,  PlaylistWhite } from '../imports'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'

function Playing() {
  const [showMiniPlayer, setShowMiniPlayer] = useState(false)  
  const [showNexton, setNexton] = useState(false)
  return (
    <div className={`Playing ${showMiniPlayer == true ? "showMiniPlayer" : ""}`}>
      <span onClick={() => setShowMiniPlayer(prevValue => !prevValue)} className='arrow-up'></span>
      <span className='line'></span>
      <div className={`nexton ${showNexton == true ? 'show-nexton' : ""}`}>
          <div className='playing-header'>
           <h2>Next on playlist</h2>
          </div>
        <div className='playing-track'>
          <Track />
          <Track />
          <Track />
        </div>
        
      </div>
      <div className='Player'>
        <div className='player-holder'>
        {/* image cover */}
        </div>
        <Controller/>
        <div className='show-playlist'>
          <Icon  onClick={() => setNexton(prevValue => !prevValue)} className="playlist-medium" path={PlaylistWhite} />
        </div>
      </div>
    </div>
  )
}

export default Playing
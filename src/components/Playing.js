import React, {useState, useRef, useCallback} from 'react'
import Track from '../compound/Track'
import {Icon,Controller,  PlaylistWhite } from '../imports'
import useOutsideClick from '../hooks/useOutsideClick'
import useMediaQuery from '../hooks/useMediaQuery'

function Playing() {
  const [showMiniPlayer, setShowMiniPlayer] = useState(false)  
  const [showNexton, setNexton] = useState(false)
  const playlistRef = useRef(null)
  const miniPlayerRef = useRef(null)
  useOutsideClick(playlistRef, () => setNexton(false))
  useOutsideClick(miniPlayerRef, () => setShowMiniPlayer(false))

  useMediaQuery(() => setNexton(false))
  
 

  return (
    // ${showMiniPlayer == true ? "showMiniPlayer" : "" <- inslide player
    <div ref={miniPlayerRef} className={`Playing ${showMiniPlayer == true ? "showMiniPlayer" : ""}`}>
      <span onClick={() => setShowMiniPlayer(prevValue => !prevValue)} className='arrow-up'></span>
      <span className='line'></span>
      <div ref={playlistRef} className={`nexton ${showNexton == true ? 'show-nexton' : ""}`}>
          <div className='playing-header'>
           <h2>Next on playlist</h2>
          </div>
        <div className='playing-track'>
          <Track defineOptions={false} />
          <Track defineOptions={false} />
          <Track defineOptions={false} />
          <Track defineOptions={false} />
          <Track defineOptions={false} />
        </div>
        
      </div>

      <div className='Player'>
    
        <div className='player-holder'>
        {/* image cover */}
        </div>
        <Controller/>
        <div className='show-playlist '>
          <Icon id="show-play"  onClick={() => {setNexton(prevValue => !prevValue)}} className="playlist-medium" path={PlaylistWhite} />
        </div>
      </div>
      
    </div>
  )
}

export default Playing
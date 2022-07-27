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
    <div  ref={miniPlayerRef} className={`Playing ${showMiniPlayer == true ? "showMiniPlayer" : ""}`}>
      <span onClick={() => setShowMiniPlayer(prevValue => !prevValue)} className='arrow-up'></span>
      <span className='line'></span>
      <div ref={playlistRef} className={`nexton ${showNexton == true ? 'show-nexton' : ""}`}>
          <div className='playing-header'>
           <h2>Next on playlist</h2>
          </div>
        <div className='playing-track'>
          <Track>
          <Track.Holder className="track-holder">
            <img className='img-track' src='https://unsplash.it/200/200' />
          </Track.Holder>
            <Track.Holder >
              <span className='playing-song'>Song name</span> <br/>
              <span className='artist-name'>Artist name</span>
            </Track.Holder>
            <Track.Holder className="track-holder now-playing f-1">
              Now playing
            </Track.Holder>
          </Track>
        </div>
        
      </div>

      <div className='Player'>
    
        <div className='player-holder'>
        {/* image cover */}
        </div>
        <Controller />
        <div className='show-playlist '>
          <Icon id="show-play"  onClick={() => {setNexton(prevValue => !prevValue)}} className="playlist-medium" path={PlaylistWhite} />
        </div>
      </div>
      
    </div>
  )
}

export default Playing
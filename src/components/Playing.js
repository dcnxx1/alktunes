import React, {useState, useRef, useCallback, useContext} from 'react'
import Track from '../compound/Track'
import {Icon,Controller,  PlaylistWhite } from '../imports'
import useOutsideClick from '../hooks/useOutsideClick'
import useMediaQuery from '../hooks/useMediaQuery'
import ContextController from '../Context/ControllerContext'
function Playing() {
  const [showMiniPlayer, setShowMiniPlayer] = useState(false)  
  const [showNexton, setNexton] = useState(false)
  const playlistRef = useRef(null)
  const miniPlayerRef = useRef(null)
  const {song, playlist, setSong} = useContext(ContextController)
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
           <h2>Next on {playlist.playlist_name}</h2>
          </div>
        <div className='playing-track'>
        {playlist.playlist_tracks ? playlist.playlist_tracks.map((track) => (
          <Track onClick={() => setSong(track)}>
          <Track.Holder className="track-holder">
            <img className='img-track' src={track.track_cover} />
          </Track.Holder>
            <Track.Holder >
              <span className='playing-song'>{track.track_name}</span> <br/>
              <span className='artist-name'>{track.track_artist || "TODO: GET ARTIST!!! "}</span>
            </Track.Holder>
            <Track.Holder className="track-holder now-playing f-1">
              {track.track_id === song.track_id && "Now Playing"}
            </Track.Holder>
          </Track>
        )) : "sum else"}
          
        </div>
        
      </div>

      <div className='Player'>
    
        <div style={{background: `url(${song.track_cover}) center no-repeat`, objectFit : 'contain'}} className='player-holder'>
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
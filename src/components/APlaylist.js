import React, {useState, forwardRef} from 'react'
import Search from './Search'
import { Options, Icon, TrashDefect, TrashWhite, CloseWhite , OptionsDefect } from '../imports'
import {useLocation, useParams, useSearchParams, Link} from 'react-router-dom'
import Track from '../compound/Track'
import useAPlaylist from '../hooks/useAPlaylist'

function APlaylist({refSearch}) {
  const {searchRef} = refSearch
  const params = useParams()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [
    [showOptions, tracks],
    [setOptions, handleOptions, handleRefFocus]
  ] = useAPlaylist(params.id)
  
  
    
  
    const SearchRef = forwardRef((props, ref) => (
      <Search buttonRef={ref} />
    ))

  return (
    <div className='APlaylist'>
     <div className='apl-search'>
        <SearchRef ref={refSearch} />
     </div>
     <div className='APlaylist-container'>
        <div className='APlaylist-header'>
            <h2>{location.state.playlist_name}</h2>
        </div>
        <div className='APlaylist-options'>
        { showOptions == true && <Icon onClick={() => setOptions(false)} style={{backgroundSize: "18px"}} path={CloseWhite} />}
            <Icon onClick={() => {
            handleOptions()
            }} style={{backgroundSize: "20px"}} path={Options}  />
            {showOptions && <Icon style={{backgroundSize: "20px"}} path={TrashDefect} />}
            {showOptions && <span className='opt-info apl-info'>Select a song to delete</span>}
            
        </div>

        <div className='APlaylist-holder'>
            {tracks.length < 1 ? 
            <div className='aplaylist-empty-tracks'>
              <span>Your playlist seems to be empty 😯</span>
              <span>You can <i onClick={() => handleRefFocus(searchRef)}>Search</i> for new songs or find more on the <Link to="/" className="link-primray"><i>Home</i></Link> page 🤗</span>
            </div> 
            : "Ye"}
        </div>
     </div>
    </div>
  )
}

export default APlaylist
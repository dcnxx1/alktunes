import React, {useState} from 'react'
import Search from './Search'
import { Options, Icon, TrashDefect, TrashWhite, CloseWhite } from '../imports'
import {useLocation} from 'react-router-dom'
import Track from '../compound/Track'
import useAPlaylist from '../hooks/useAPlaylist'

function APlaylist() {
  
    const location = useLocation()
    const [{showOptions, setOptions}] = useAPlaylist()
    


    

  return (
    <div className='APlaylist'>
     <div className='apl-search'>
        <Search />
     </div>
     <div className='APlaylist-container'>
        <div className='APlaylist-header'>
            <h2>Playlist Name</h2>
        </div>
        <div className='APlaylist-options'>
        {showOptions == true && <Icon onClick={() => setOptions(false)} style={{backgroundSize: "18px"}} path={CloseWhite} />}
            <Icon onClick={() => {
                setOptions(prevValue => !prevValue)
            }} style={{backgroundSize: "20px"}} path={Options}  />
            {showOptions && <Icon style={{backgroundSize: "20px"}} path={TrashDefect} />}
            {showOptions && <span className='opt-info apl-info'>Select a song to delete</span>}
            
        </div>

        <div className='APlaylist-holder'>
            
        </div>
     </div>
    </div>
  )
}

export default APlaylist
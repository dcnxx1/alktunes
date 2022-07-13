import React from 'react'
import Search from './Search'
import {useLocation} from 'react-router-dom'

function APlaylist() {
    const location = useLocation()
    console.log(location.hash)

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
            
        </div>

        <div className='APlaylist-holder'>

        </div>

     </div>
    </div>
  )
}

export default APlaylist
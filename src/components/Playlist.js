import React from 'react'
import Search from './Search'
import Modal from './Modal'
function Playlist() {
  return (
    <div className='Playlist-Comp'>
    <Modal header="Add to playlist">Yoe</Modal>
      <Search className="pl-s" />
      <div className='playlist-container'>
        Boezhoe
      </div>
    </div>
  )
}

export default Playlist
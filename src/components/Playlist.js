import React, {useState, createRef} from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import useOutsideClick from '../hooks/useOutsideClick';
import usePlaylist from '../hooks/usePlaylist';
import {ArrowFullWhite, Icon, TrashDefect, TrashWhite, Plus, Options, CloseWhite, Modal} from '../imports';

function Playlist({playlist}) {
  const modalRef = createRef()
  const [addPlaylistModal, setAddModal] = useState(false)
  useOutsideClick(modalRef, () => setAddModal(false))
  const [
    [options, optionHandler],
    [handlePlusButton]
  
  ] = usePlaylist() 


  return (
    <div className='Playlist-Comp'>
     <Search className="Search" />
     <div className="playlist-holder">
      <div className='playlist-header'>
        <div className='navleft'>
          <Link to="/" className="link-primary link-playlist">
            <span className="goback"></span>
            <span className="to">Home</span>
          </Link>
        </div>
        <h2>Playlist</h2>
      </div>
      <div className='options'>
        <Icon onClick={() => handlePlusButton(setAddModal)} path={options ? CloseWhite : Plus} className="Icon" />
        <Icon onClick={optionHandler} path={Options} className="Icon" />
      </div>
      <div className='playlists'>
        <ul className='playlists__ul'>
          <Link to="playlist/name" className="link-primary">
          <li className='playlists__track'>
          <div className='playlists__img'>
            <img className="playlists__img" src="https://unsplash.it/200/200" />
          </div>
            
            <div className='playlists__name_holder'>
              <span className='playlists__name'>Playlist name</span>
            </div>
            <div className='playlists__length'>
              <span className='playlists__name'>2:15</span>
            </div>

            <div className='playlists__select'>
              <span className='playlists__box'></span>
            </div>
          </li>
          </Link>
        </ul>
      </div>
     </div>
     {addPlaylistModal && <ShowModal mRef={modalRef} close={setAddModal} />}
    </div>
  )
}

export default Playlist


function ShowModal({mRef, close}){
  return (
    <Modal className="portal" ref={mRef} header="New playlist">
    <form className='playlist-form' method='POST'>
      <input type="text" className="playlist-input" placeholder="Playlist Name" />
      <div className='modal-options'>
        <input onClick={() => close(false)} type='button' className='modal-button' value="No"/>
        <input type='submit' className='modal-button' value="Ok"/>
      </div>
      </form>
    </Modal>
  )
}


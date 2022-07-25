import React, {useState, createRef, useRef} from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import useOutsideClick from '../hooks/useOutsideClick';
import usePlaylist from '../hooks/usePlaylist';
import {ArrowFullWhite, Icon, TrashDefect, TrashWhite, Plus, Options, CloseWhite, Modal, OptionsDefect} from '../imports';

function Playlist() {
  const [userPlaylists, setUserPlaylists] = useState([])
  const modalRef = createRef()
  const [addPlaylistModal, setAddModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false) 
  useOutsideClick(modalRef, () => setAddModal(false))
  useOutsideClick(modalRef, () => setDeleteModal(false))
  
  const [
    // states
    [options, inputValue, selectedPlaylists, loading],
    // function
    [handlePlusButton, handleLink, optionHandler, 
     formHandler, setInput, selectedPlaylistsHandler, 
     formHandlerDelete, deleteHandler]
  ] = usePlaylist(setUserPlaylists) 


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
        <Icon onClick={() => optionHandler(userPlaylists)} path={userPlaylists.length < 1 ? OptionsDefect : Options} className="Icon" />
        {options &&  <Icon onClick={() =>deleteHandler(setDeleteModal)} path={userPlaylists.length == 0 ? TrashDefect : TrashWhite} className="Icon" />}
        {options && <span className="options__text">Selected a playlist to remove</span>}
      </div>
      <div className='playlists'>
        <ul className={`playlists__ul ${options && 'playlists__ul__selected'}`}>
          { userPlaylists.length == 0 && loading === true ? <div className='playlists__empty'>
            <span className='playlists__empty__text'>You have no playlists yet. You can create one <i onClick={() => setAddModal(true)}>here</i></span>
          </div> : loading === false &&   userPlaylists.map((playlistObj) => (
            <Link key={playlistObj.playlist_id} data-key={playlistObj.playlist_id} onClick={e => handleLink(e)} to={{pathname: `/playlist/${playlistObj.playlist_id}`, query: {id :playlistObj.playlist_id}}} className="link-primary">
          <li  className={`playlists__track ${options && 'playlists__selected'}`}>
          <div className='playlists__img'>
            <img className="playlists__img" src="https://unsplash.it/200/200" />
          </div>
            <div className='playlists__name_holder'>
              <span className='playlists__name'>{playlistObj.playlist_name}</span>
            </div>
            <div className='playlists__length'>
              <span className='playlists__name'>2:15</span>
            </div>
            <div className='playlists__select'>
             {options == true &&  <span className='playlists__box'></span>}
            </div>
          </li>
          </Link>
          ))}
        </ul>
      </div>
     </div>
     {addPlaylistModal && <ShowModalAddPlaylist mRef={modalRef} inputValue={inputValue} setInput={setInput} formHandler={formHandler} close={setAddModal} />}
    {deleteModal && <ShowModalDeletePlaylists  formHandler={formHandlerDelete} hideModal={setDeleteModal} playlist={selectedPlaylists} mRef={modalRef} />}
    </div>
  )
}

export default Playlist


function ShowModalAddPlaylist({mRef, close, formHandler, setInput, inputValue}){
  return (
    <Modal className="portal" ref={mRef} header="New playlist">
    <form onSubmit={e => formHandler(e, close)} className='playlist-form' method='POST'>
      <input  value={inputValue} onChange={e => setInput(e.target.value)} type="text" className="playlist-input" placeholder="Playlist Name" />
      <div className='modal-options'>
        <input onClick={() => close(false)} type='button' className='modal-button' value="No"/>
        <input type='submit' className='modal-button' value="Ok"/>
      </div>
      </form>
    </Modal>
  )
}

function ShowModalDeletePlaylists({mRef, formHandlerDelete, playlist, hideModal}) {
  return <Modal className="portal" ref={mRef} header="Delete playlist">
  <form onSubmit={ e => {formHandlerDelete(e, hideModal)}} className="playlist-form">
    <div className="modal-delete">
      <span>Are you sure you want to delete {playlist.length} playlist(s)</span>
      <div>
      <input onClick={() => hideModal(false)} type="button" className="modal-button" value="No" />
      <input type="submit"  className='modal-button' value="Yes"/>
      </div>
    </div>
  </form>
  </Modal>
}


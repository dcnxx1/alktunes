import React, {useRef, useState, forwardRef, createRef, useEffect, useMemo, useContext} from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import useOutsideClick from '../hooks/useOutsideClick'
import Track from '../compound/Track'
import {Icon, Logo, TrashWhite, TrashDefect, Plus, Options, CloseWhite, OptionsDefect} from '../imports'
import usePlaylist from '../hooks/usePlaylist'
import axios from 'axios'
import useForm from '../hooks/useForm'
import statics from '../static/statics'
import ContextController from '../Context/ControllerContext'

function Playlist() {
  const {setPlaylist : activePlaylist} = useContext(ContextController)
  const modalRef = createRef()
  const [addPlaylistModal, setAddModal] = useState(false)
  const [userPlaylists, setUserPlaylists] = useState([])
  const [formControl, {inputFields, setDataForLogin}, error, extractError] = useForm(statics.FORM.PLAYLIST, [setUserPlaylists, setAddModal])
  const [{showOptions, optionHandler, selectedPlaylists, playlistHandler, 
    checkBox, setCheckBox , selectedBy, setSelected, handleLink, 
    showModal, handlePlaylistDelete, checkPlaylistsExist}] = usePlaylist(formControl, inputFields, error, extractError,setDataForLogin, setUserPlaylists)
    useOutsideClick(modalRef, () => setAddModal(false))

   
 // const checkPlaylistsNoneSelected = () => selectedPlaylists.length == 0 ? true : false
   
   const checkIfPlaylistsExist = useMemo(() => checkPlaylistsExist(userPlaylists), [userPlaylists])

  return (
    <div className='Playlist-Comp'>
      <Search className="pl-s" />
      <div className='playlist-container'>
        <div className='playlist-header'>
          <h2>Playlists</h2>
        </div>

        <div className='playlist-options'>
           {showOptions === false ? <Icon onClick={() => {
            setAddModal(prevValue => !prevValue)
            setSelected('add')
            }} style={{backgroundSize: "20px"}} path={Plus} /> : <Icon  style={{backgroundSize: "20px"}} onClick={() => optionHandler(checkIfPlaylistsExist)} path={CloseWhite}  />}
            {/* MODAL */}
            {addPlaylistModal && selectedBy == 'add' ? showModal('playlistadd', setAddModal, modalRef) : addPlaylistModal == true &&  selectedBy == 'delete' && showModal('playlistdelete', setAddModal, modalRef) }
          {/* !MODAL! */}
            <Icon onClick={() => optionHandler(checkIfPlaylistsExist)} style={{backgroundSize: "20px"}} path={checkIfPlaylistsExist == true ? Options : OptionsDefect} />
           {showOptions == true ?  <Icon style={{backgroundSize: "20px"}} onClick={(e) => {
            handlePlaylistDelete(e, setAddModal)
            }} path={selectedPlaylists.length === 0 ? TrashDefect : TrashWhite} /> : "" }
          
          {showOptions == true && <span className='opt-info'>Select playlist to remove</span>}
        </div>

        <div className='playlist-holder'>
            
          { checkIfPlaylistsExist === false ? <div className='display-no-playlist'>
            <p>You have no playlists you can create one <span onClick={() => {setAddModal(prevValue => !prevValue)
            setSelected('add')}}>here</span>  </p>
          </div> : userPlaylists.map((aPlaylist) => (
            <div key={aPlaylist.playlist_id} data-key={aPlaylist.playlist_id} onClick={(e) => { playlistHandler(e) }} className="track-select"> 
            <Link onClick={e => handleLink(e)} className='link-primary' to={`/playlist/:playlist_id`}>
          <Track>
            <Track.Holder className="track-holder">
              <img className="playlist-img" src={Logo} alt="" />
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
              <span>{aPlaylist.playlist_name}</span>
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
              <span>2:61</span>
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
              {/* {showOptions && <span data-key={indx}  className='addbox'>
              {selectedPlaylists.some((obj) => obj.keyId == indx) === true && <span className='checktrue'></span>}
              </span>} */}
            </Track.Holder>
          </Track>
          </Link> 
          </div>
          )) 
          
          }
        </div>
      </div>
    </div>
  )
}

export default Playlist




/// modal
/*
 {showModal && <Modal  header="Add to playlist" ref={modalRef}>
        <Track onClick={() => setCheckBox(prevValue => !prevValue)}>
        <Track.Holder className="track-holder ">
          <img className='playlist-img' src="https://unsplash.it/200/200" />
        </Track.Holder>
        <Track.Holder className="track-holder ">
          <span>Playlist Name</span>
        </Track.Holder>
        <Track.Holder className="track-holder f-1">
          <span className='addbox'>
            {checkBox && <span className='checktrue'></span>}
          </span>
        </Track.Holder>
       </Track> 
       </Modal>}


* */
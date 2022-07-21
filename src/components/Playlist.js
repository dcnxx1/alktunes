import React, {useRef, useState, forwardRef, createRef, useEffect, useMemo} from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
import useOutsideClick from '../hooks/useOutsideClick'
import Track from '../compound/Track'
import {Icon, Logo, TrashWhite, TrashDefect, Plus, Options, CloseWhite, OptionsDefect} from '../imports'
import usePlaylist from '../hooks/usePlaylist'
import axios from 'axios'


function Playlist({playlist}) {
 
  const modalRef = createRef()
  const [addPlaylistModal, setAddModal] = useState(false)
  const [{showOptions, optionHandler, selectedPlaylists, playlistHandler, 
    checkBox, setCheckBox , selectedBy, setSelected, handleLink, 
    showModal, handlePlaylistDelete, checkPlaylistsExist}] = usePlaylist()

  useOutsideClick(modalRef, () => setAddModal(false))

  const checkPlaylistsNoneSelected = () => selectedPlaylists.length == 0 ? true : false


   const checkIfPlaylistsExist = useMemo(() => checkPlaylistsExist(playlist), [playlist])

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
        
         {Array(8).fill(null).map((obj, indx) => (
          <div key={indx} data-key={indx} onClick={(e) => {
              playlistHandler(e)
            }} className="track-select">
            {
              checkIfPlaylistsExist == false ? <p>You have no playlists yet</p> : <Link onClick={e => handleLink(e)} className='link-primary' to="/playlist/55">
          <Track>
            <Track.Holder className="track-holder">
              <img className="playlist-img" src={Logo} alt="" />
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
              <span>Playlist name</span>
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
              <span>2:61</span>
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
              {showOptions && <span data-key={indx}  className='addbox'>
              {selectedPlaylists.some((obj) => obj.keyId == indx) === true && <span className='checktrue'></span>}
              </span>}
            </Track.Holder>
          </Track>
          </Link> 
            }
          </div>
         ))}
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
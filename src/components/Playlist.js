import React, {useRef, useState, forwardRef, createRef} from 'react'
import Search from './Search'
import Modal from './Modal'
import useOutsideClick from '../hooks/useOutsideClick'
import Track from '../compound/Track'
import {Icon, Logo, TrashWhite, TrashDefect, Plus, Options} from '../imports'

function Playlist() {
  const modalRef = createRef()
  const [checkBox, setCheckBox] = useState(false)
  const [addPlaylistModal, setAddModal] = useState(false)
  const [showOptions, setOptions] = useState(false)
  const [selectedPlaylists , setPlaylists] = useState([])

  useOutsideClick(modalRef, () => setAddModal(false))

  const checkPlaylistsNoneSelected = () => selectedPlaylists.length == 0 ? true : false


  return (
    <div className='Playlist-Comp'>
      <Search className="pl-s" />
      <div className='playlist-container'>
        <div className='playlist-header'>
          <h2>Playlists</h2>
        </div>
        <div className='playlist-options'>
            <Icon onClick={() => setAddModal(prevValue => !prevValue)} style={{backgroundSize: "20px"}} path={Plus} />
            {/* MODAL */}
            {addPlaylistModal && <Modal header="Create Playlist" ref={modalRef}>
              <div className='add-playlist-holder'>
                 <form>
                <label htmlFor='input-playlist' >Playlist name: </label>
                     <input placeholder='Playlist name' id="input-playlist" className='input text' type="text" />
                     {/* <span style={{alignSelf: "center", color: "red"}}>Please fill in </span> */}
                     <div className='add-playlist-btns'>
                      <input onClick={() => setAddModal(false)} className="input btn" value="Cancel" type="button" />
                      <input className="input btn" value="OK" type="submit"/>
                     </div> 
                 </form>            
              </div>
            </Modal>}
          {/* !MODAL! */}
            <Icon onClick={() => setOptions(prevValue => !prevValue)} style={{backgroundSize: "20px"}} path={Options} />
           {showOptions == true ? checkPlaylistsNoneSelected() == true ? <Icon style={{backgroundSize: "20px"}}  path={TrashDefect} /> : <Icon style={{backgroundSize: "20px"}} path={TrashWhite} /> : ""}
          {showOptions == true && <span className='opt-info'>Select playlist to remove</span>}
        </div>
        <div className='playlist-holder'>
          <Track onClick={() => {
            setCheckBox(prevValue => !prevValue)
            }}>
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
              {showOptions && <span className='addbox'>
              {checkBox && <span className='checktrue'></span>}
              </span>}
            </Track.Holder>
          </Track>
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
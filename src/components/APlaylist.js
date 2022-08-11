import React, {useState, forwardRef, useContext, useRef, useEffect} from 'react'
import Search from './Search'
import { Options, Icon, TrashDefect, TrashWhite, CloseWhite , OptionsDefect, Modal } from '../imports'
import {useLocation, useParams, useSearchParams, Link} from 'react-router-dom'
import Track from '../compound/Track'
import useAPlaylist from '../hooks/useAPlaylist'
import ContextController from '../Context/ControllerContext'
import useOutsideClick from '../hooks/useOutsideClick'
import axios from 'axios'

function APlaylist({refSearch}) {
  const {searchRef} = refSearch
  const params = useParams()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const {setSong, setPlaylist, userPlaylist}  = useContext(ContextController)

  let modalRef = useRef()

  const [
    [showOptions, tracks, selectTrack, modal, cookies],
    [setOptions, handleOptions, handleRefFocus, trackHandler, showModal, deleteHandler, setTracks, setSelectTracks]
  ] = useAPlaylist(params.id, setPlaylist)
  
  


    const SearchRef = forwardRef((props, ref) => (
      <Search buttonRef={ref} />
    ))

      useOutsideClick(modalRef, () => showModal(false))

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
            {showOptions && <Icon onClick={() => deleteHandler()} style={{backgroundSize: "20px"}} path={selectTrack.length < 1 ? TrashDefect : TrashWhite} />}
            {showOptions && <span className='opt-info apl-info'>Select a song to delete</span>}
            
        </div>

        <div className='APlaylist-holder'>
            { tracks.playlist_tracks && tracks.playlist_tracks.length >= 1 ?  tracks.playlist_tracks.map((track) => (
              <Track key={track.track_id} onClick={(e) => trackHandler(e, setSong, track.track_id)}>
                <Track.Holder className="track-holder">
                  <img src={track.track_cover} />
                </Track.Holder>
                <Track.Holder className="track-holder f-1">
                <span>{track.track_name}</span>
                </Track.Holder>
                <Track.Holder className="track-holder f-1">
                  <span>{track.track_album}</span>
                </Track.Holder>
                <Track.Holder className="track-holder f-1">
                {showOptions === false ? <span>{track.track_length}</span> : <span className='playlists__box'>
                 {selectTrack.some(({id : optTrck}) => optTrck === track.track_id) &&  <span className='addbox'></span>}
                </span> }
                
                </Track.Holder>
                
              </Track>
            )) : <div className='aplaylist-empty-tracks'>
              <span>Your playlist seems to be empty 😯</span>
              <span>You can <i onClick={() => handleRefFocus(searchRef)}>Search</i> for new songs or find more on the <Link to="/" className="link-primray"><i>Home</i></Link> page 🤗</span>
            </div> 
            
            }
        </div>
     </div>
            {modal === true  && <DeleteModal options={{setOptions}} updateTracks={{setTracks, tracks}} playlistId={{params}} cookie={{cookies}} modalShow={{showModal}} modalRefDelete={{modalRef}}  songLength={{selectTrack, setSelectTracks}} />}
    </div>
  )
}

function DeleteModal({options, updateTracks, songLength, cookie, modalRefDelete, modalShow, playlistId}) {
  const {selectTrack, setSelectTracks} = songLength
  const {modalRef} = modalRefDelete
  const {showModal} = modalShow
  const {id} = playlistId.params
  const {setTracks, tracks} = updateTracks
  const {cookies} = cookie
  const config = {headers: {Authorization: `Bearer ${cookies.USRCOOKIEE}`}}
  const {setOptions} = options
  const submitDelete = e => {
    e.preventDefault()
    const data = {
      tracksToDelete : selectTrack,
      playlist_id : id
    }
    axios.post(`${process.env.REACT_APP_ENV}/tracks/delete`, data, config).then((res) => {
      const updatedTracks = res.data
    console.log(updatedTracks)
      setTracks(prevValue => ({
        ...prevValue,
        playlist_tracks: updatedTracks
      }))
    })
    showModal(false)
    setSelectTracks(prevValue => prevValue = [])
    setOptions(prevValue => !prevValue)
    
  }


  return <Modal ref={modalRef} className="portal" header={`Delete ${selectTrack.length} song(s)?`}>
    <form onSubmit={e => submitDelete(e)} className="delete-track-modal">
      <input onClick={() => showModal(prevValue => !prevValue)} type="button" value="Cancel" />
      <input type="submit" value="Delete" />
    </form>
  </Modal>
}




export default APlaylist
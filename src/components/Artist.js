import React, {useState, useEffect, useRef, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import {Search, Icon, MoreWhite, Pause, AddPlaylist, CheckNo, CloseWhite, Modal, Plus, Logo, CheckYes, Play} from '../imports';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import statics from '../static/statics';
import Track from '../compound/Track';
import useOutsideClick from '../hooks/useOutsideClick';
import usePlaylistForm from '../hooks/usePlaylistForm';
import ContextController from '../Context/ControllerContext';




function Artist() {
  const [cookies, setCookie ,removeCookie] = useCookies(statics.USR_COOKIE)
  const [artist, setArtist] = useState({})
  const [selectTrack, setTrack] = useState([])
  const [trackUpload, setUploadTrack] = useState([])
  const location = useLocation()
  const [modal, showModal] = useState(false)
  const moreRef = useRef()
  const {song, setSong, setPlay, play} = useContext(ContextController)

  const modalRef = useRef()
  const handleSelectMore = (selectedId) => {

    return selectTrack.some(({id}) => id === selectedId) 
  }
  const config = { headers: { Authorization: `Bearer ${cookies.USRCOOKIEE}`}}
  
  useEffect(() => {

    const data = {
      params : {
        artist : location.state.name,
        type: location.state.type
      }
    }
    axios.get(`${process.env.REACT_APP_ENV}/tracks/artist`, data, config).then((res) => {
    setArtist(res.data)
    })
  }, [location.state.name])

  function prepareTrack(track) {
    setUploadTrack(track)
    showModal(true)
  }

  useOutsideClick(moreRef, () => setTrack([]))
  useOutsideClick(modalRef, () => showModal(false))
  return (
    <div className="artist">
    <div className='search-artist'>
      <Search />
    </div>
      <div className="artist-component">
        <div className="artist-header">
        <div className="cover-holder">
          <img src={artist.track_cover}/>
        </div>
          <h1 className="artist-name-artist">{location.state.name}</h1>
        </div>
        <div className="artist-track-holder">
          <ul>
            {artist.formattedArray && artist.formattedArray.map((track) => (
              <Track key={track.track_id}>
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
                  <span>{track.track_length}</span>
                </Track.Holder>
                <Track.Holder className="track-holder f-1">
                  <Icon id="option-artist" onClick={() => setTrack([{id: track.track_id}])} className="Icon" path={MoreWhite} />
                  {handleSelectMore(track.track_id) && <div key={track.track_id} ref={moreRef} className="more-options-artist">
                    <div className="options-holder">
                      <div onClick={() => {
                          setSong(track)            
                      }} className="options-option">
                      <div className='option-icon'>
                        <Icon  path={song.track_id === track.track_id && play === true ? Pause : Play} className="Icon" />
                      </div>
                        <span>{song.track_id === track.track_id && play === true ?  "Pause" : "Play"}</span>
                      </div>
                      <div className="options-option" onClick={() => prepareTrack(track)}>
                      <div className="option-icon">
                        <Icon path={AddPlaylist} className="Icon" />
                      </div>
                        <span>Add to playlist</span>
                      </div>
                      <div className="options-option" onClick={() => setTrack([])}>
                      <div className="option-icon">
                        <Icon path={CloseWhite} className="Icon" />
                      </div>
                        <span>Close</span>
                      </div>
                    </div>
                  </div>}
                </Track.Holder>
              </Track>
            ))}
          </ul>
        </div>
      </div>
      {modal && <ArtistModal uploadTrack={{trackUpload}}  setModal={{showModal}} modalRef={modalRef} />}
    </div>
  )
}
 
export default Artist

function ArtistModal({modalRef, setModal, uploadTrack}){
  const {userPlaylists, setUserPlaylists, setPlaylist, playlist} = useContext(ContextController)
  const {showModal} = setModal
  const {trackUpload} = uploadTrack
  const [
    [input, errors, createPlaylist, playlistSelect],
    [setInput, formSubmit, setErrors,  setPlaylistCreate, setPlaylistSelected, submitTrack]
  ] = usePlaylistForm(trackUpload, showModal, setUserPlaylists, userPlaylists, setPlaylist, playlist)
  
  function checkSongAlreadyExists(playlistId){
    let findPlaylist = userPlaylists.find((playlist) => playlist.playlist_id === playlistId)
    return findPlaylist.playlist_tracks.some((track) => track.track_id === uploadTrack.trackUpload.track_id)
  }

  function handlePlaylist(playlist_id) {
    if(playlistSelect.some(({id}) => id === playlist_id) === true){
      setPlaylistSelected([])
    } else {
      if(checkSongAlreadyExists(playlist_id) !== true){
        setPlaylistSelected([{id: playlist_id}])
      } 
    }
  }

  function handleButtonCancel () {
    setPlaylistCreate(prevValue => !prevValue)
    setErrors([])
    setInput('')
  }

  return (
  <Modal header="Add to playlist" ref={modalRef}>
  <div className="artist-modal">
    <form name="artist-playlist-form" onSubmit={e => formSubmit(e)}  className="artist-options">
      <div className="artist-playlist-action-wrapper">

      <div className="icon-create">
        <Icon onClick={() => handleButtonCancel()}  path={createPlaylist ? CloseWhite : Plus} className="Icon"/>
      </div>
      {createPlaylist && 
      <div className="artist-create-playlist">
        <input value={input} onChange={e => setInput(e.target.value)} type="text" className="artist-input"  placeholder="Create new playlist..." />
      </div>
      }
      
      {createPlaylist && 
      <div className="artist-create-playlist-submit">
        <input value=""  type="submit" className="submit-playlist-icon" />
        <Icon onClick={() => handleButtonCancel()} path={CheckNo} className="Icon check" />
      </div>
      }
      </div>
      <div className="artist-show-error">
        {errors && <span>{errors[0]?.message}</span>}
      </div>
  </form>
  {userPlaylists && userPlaylists.length !== 0 ? <div className="artist-playlist-holder">
    {userPlaylists && userPlaylists.map((playlist) => (
      <Track onClick={() => handlePlaylist(playlist.playlist_id)} key={playlist.playlist_id}>
        <Track.Holder  className="track-holder">
          <img src={Logo} />
        </Track.Holder>
        <Track.Holder className="track-holder f-1">
          <span>{playlist.playlist_name}</span>
        </Track.Holder>
        <Track.Holder className="track-holder f-1">
          {checkSongAlreadyExists(playlist.playlist_id) === true ? "Song exists" : <span  className="playlists__box">
          {playlistSelect.some(({id}) => id === playlist.playlist_id) && <span className="addbox"></span> }
          </span> }
        </Track.Holder>
      </Track>
    ))}
    </div>  : "Loading ...."}
    <form className='artist-track-add' onSubmit={e => submitTrack(e)}>  
      <input onClick={() => showModal(false)} type="button" value="Cancel" /> 
      <input  type="submit" value="Add" /> 
    </form>
  </div>
  </Modal>
)
}
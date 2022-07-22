import {useState, useEffect} from 'react'
import Modal from '../components/Modal'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import statics from '../static/statics'
function usePlaylist(formControl, inputFields, error, extractError, setDataForLogin, setUserPlaylists) {
    const [showOptions, setOptions] = useState(false)
    const [selectedPlaylists , setPlaylists] = useState([])
    const [checkBox, setCheckBox] = useState(false)
    const [selectedBy, setSelected] = useState('')
    const [cookie, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
    

    useEffect(() => {
      const config = {
        headers: {
          'Authorization': `Bearer ${cookie.USRCOOKIEE}`
        }
      }
      
      
      axios.get('http://192.168.1.210:5055/playlist/', config).then((res) => {
        setUserPlaylists(prevValue => prevValue = res.data)
      })
    }, [])

    function playlistHandler(e){
        let selectedPlaylist =  e.currentTarget.getAttribute('data-key')

        if(selectedPlaylists.some(playlist => playlist.playlist_id == selectedPlaylist) === false){
         setPlaylists(prevValue => ([
           ...prevValue,
           {keyId : selectedPlaylist, isChecked: true}
         ]))
        } else {
         setPlaylists(selectedPlaylists.filter((obj) => obj.keyId !== selectedPlaylist))
        }
       }


        function handleLink(e) {
            if(showOptions === true) {
              e.preventDefault()
            }
          }

          function handlePlaylistDelete(e, setAddModal){
            if(selectedPlaylists.length == 0) return
            setSelected('delete')
            setAddModal(prevValue => !prevValue)
          }

          useEffect(() => {
                if(showOptions == false) {
                    setPlaylists(prevValue => prevValue = [])
                }
          }, [showOptions])
    
     
          function showModal(modalType, modalHandle, modalRef){
            return modalType == 'playlistadd' ? <Modal header="Create Playlist" ref={modalRef}>
                <div className='add-playlist-holder'>
                   <form method="POST" action='' onSubmit={e => formControl(e)  }>
                  <label htmlFor='input-playlist' >Playlist name: </label>
                       <input placeholder='Playlist name' name="playlistname" value={inputFields.playlistname} onChange={e => setDataForLogin(e)} id="input-playlist"  className='pl-input text' type="text" />
                        {error.map((err) => (
                          <p style={{color: 'red'}}>{err?.message}</p>
                        ))}
                       {/* <span style={{alignSelf: "center", color: "red"}}>Please fill in </span> */}
                       <div className='add-playlist-btns'>
                        <input onClick={() => {modalHandle(false)}} className="pl-input btn" value="Cancel" type="button" />
                        
                        <input className="pl-input btn" value="OK" type="submit"/>
                       </div> 
                   </form>            
                </div>
              </Modal> : <Modal header='Delete playlist' ref={modalRef}>
                    <div className='add-playlist-holder'>
                        <form>
                        <span>Are you sure you want do delete {selectedPlaylists.length} playlist(s)?</span>
                            <div className='add-playlist-btns'>
                                <input onClick={() => {modalHandle(false)
                              
                                }} className="pl-input btn" value="No" type="button" />
                                <input className="pl-input btn" value="Yes" type="submit"/>
                            </div>
                        </form>
                    </div>
              </Modal>
            
          }


          
     
          function checkPlaylistsExist(playlist){
            if(playlist && playlist.length == 0) {
              return false
            } else {
              return true
            }
          }

          function optionHandler(checkForPlaylist){
            if(checkForPlaylist === false) return
            setOptions(prevValue => !prevValue)
          }

    return [{showOptions, optionHandler, 
        selectedPlaylists, playlistHandler, 
        checkBox, setCheckBox, 
        selectedBy, setSelected,
        handleLink, showModal, handlePlaylistDelete, checkPlaylistsExist}
    ]
}

export default usePlaylist
import {useState, useEffect} from 'react'
import Modal from '../components/Modal'
function usePlaylist() {
    const [showOptions, setOptions] = useState(false)
    const [selectedPlaylists , setPlaylists] = useState([])
    const [checkBox, setCheckBox] = useState(false)
    const [selectedBy, setSelected] = useState('')
    function playlistHandler(e){
        let selectedPlaylist =  e.currentTarget.getAttribute('data-key')

        if(selectedPlaylists.some(playlist => playlist.keyId == selectedPlaylist) === false){
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
                   <form>
                  <label htmlFor='input-playlist' >Playlist name: </label>
                       <input placeholder='Playlist name' id="input-playlist" className='pl-input text' type="text" />
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
     

    return [{showOptions, setOptions}, 
        {selectedPlaylists, playlistHandler}, 
        {checkBox, setCheckBox}, 
        {selectedBy, setSelected},
        handleLink, showModal, handlePlaylistDelete
    ]
}

export default usePlaylist
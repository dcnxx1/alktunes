import {useState, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import statics from '../static/statics'
import axios from 'axios'

function usePlaylist(setUserPlaylists) {


const [options, setOptions] = useState(false)
const [inputValue, setInput] = useState('')
const [cookie, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
const [selectedPlaylists, setSelected] = useState([])
const [loading, setLoading] = useState(false)

const optionHandler = (userPlaylist) => userPlaylist.length >= 1 && setOptions(prevValue => !prevValue)          
const handlePlusButton = (showModal) => options == false ? showModal(prevValue => !prevValue): setOptions(prevValue => !prevValue)
const deleteHandler = (deleteModal) => selectedPlaylists.length >= 1 && deleteModal(true) 

function formHandler(e, closeModal) {
    setLoading(true)
    e.preventDefault()
    const config = {
        headers: {
            Authorization: `Bearer ${cookie.USRCOOKIEE}`
        }
    }
    const data = {playlistName: inputValue}
    
    axios.post('http://192.168.1.210:5055/playlist/create', data, config).then((res)  => {
        const playlistData = res.data
        setUserPlaylists(playlistData)
        setLoading(false)
    })
    closeModal(false)
    setInput(prevValue => prevValue = '')
   
}

function formHandlerDelete(e, closeModal) {
    setLoading(true)
    e.preventDefault()
   
    const config = {
        headers: {
            'Authorization': `Bearer ${cookie.USRCOOKIEE}`
        }
    }
    const data = {
        playlists : selectedPlaylists
    }
    console.log(selectedPlaylists)
   
    axios.post('http://192.168.1.210:5055/playlist/delete', data, config).then((res) => {
    const retrievePlaylist = res.data 
    setUserPlaylists(retrievePlaylist)
    })

    closeModal(false)
    setLoading(false)
    setOptions(false)
}

function selectedPlaylistsHandler (e, id) {
    options == true && e.preventDefault() 

    if(selectedPlaylists.some((playlist) => playlist.playlist_id == id) == false){
        setSelected(prevValue => ([
            ...prevValue,
            {playlist_id : id}
        ]))
    } else {
        setSelected(prevValue => prevValue.filter(({playlist_id}) => playlist_id !== id ))
    }
}


useEffect(() => {
      setLoading(true)
        
    const config = {
        headers: {
            'Authorization': ` Bearer ${cookie.USRCOOKIEE}`
        }
    }
    axios.get('http://192.168.1.210:5055/playlist', config).then((res) => {
    setUserPlaylists(res.data)
    
    setLoading(false)    
})
    
}, [])

return [
    [options, inputValue, selectedPlaylists,  loading],
    [handlePlusButton, optionHandler, formHandler, setInput, selectedPlaylistsHandler, formHandlerDelete, deleteHandler],
]
}

export default usePlaylist
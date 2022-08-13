import {useState, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import statics from '../static/statics'
import axios from 'axios'
import codesRequest from '../errors/codes.request'

function usePlaylist(setUserPlaylists) {


const [options, setOptions] = useState(false)
const [inputValue, setInput] = useState('')
const [cookie, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
const [selectedPlaylists, setSelected] = useState([])
const [loading, setLoading] = useState(false)
const [errors, setErrors] = useState([])

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
    
    if(checkInput() === true) {
        axios.post(`${process.env.REACT_APP_ENV}/playlist/create`, data, config).then((res)  => {
            const playlistData = res.data
            setUserPlaylists(playlistData)
            setLoading(false)
        })
        closeModal(false)
        setInput(prevValue => prevValue = '')
    } else {
        return
    }
    
   
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
    
    axios.post(`${process.env.REACT_APP_ENV}/playlist/delete`, data, config).then((res) => {
    const retrievePlaylist = res.data 
    setUserPlaylists(retrievePlaylist)
    })

    closeModal(false)
    setLoading(false)
    setOptions(false)
}

function checkInput() {
    if(inputValue.trim().length === 0){
        setError(codesRequest.FORM_ERR.ERR_PLAYLIST_EMPTY)     
        return false
    }
    if(inputValue.length < 3) {
        setError(codesRequest.FORM_ERR.ERR_MIN_CHARS_PLAYLIST)
        return false
    }    
    if(statics.INPUT_VALIDATION.RESTRICT_CHARS.test(inputValue) === true){
        setError(codesRequest.FORM_ERR.ERR_SPECIAL_CHARS_PLAYLIST)
        return false
    }
    if(statics.INPUT_VALIDATION.STARTS_WITH_NUM.test(inputValue) === true){
        setError(codesRequest.FORM_ERR.ERR_PLAYLIST_STARTS_WITH_NUM)
        return false
    }
    setErrors([])
    return true
}

function setError(TYPE){
    if(errors.some(({ ERR : FIND_ERR}) => FIND_ERR === TYPE.ERR) == false) {
        setErrors([{ERR : TYPE.ERR, message: TYPE.message}])
    }
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




return [
    [options, inputValue, selectedPlaylists,  loading, errors],
    [handlePlusButton, optionHandler, formHandler, setInput, selectedPlaylistsHandler, formHandlerDelete, deleteHandler, setErrors],
]
}

export default usePlaylist
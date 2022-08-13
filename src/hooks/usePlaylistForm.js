import {useState, useEffect} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import codesRequest from '../errors/codes.request'
import statics from '../static/statics'

export default function usePlaylistForm(trackUpload, showModal, setUserPlaylists, userPlaylists, setPlaylist, playlist){
    const [errors, setErrors] = useState([])
    const [playlistSelect, setPlaylistSelected] = useState([])
    const [input, setInput] = useState('')
    const [createPlaylist, setPlaylistCreate] = useState(false)
    const [cookies, setCookies, removeCookies] = useCookies(statics.USR_COOKIE)
    const config = {headers: {Authorization: `Bearer ${cookies.USRCOOKIEE}`}}

    function formSubmit(e) {
        e.preventDefault()
        const data = {
            playlistName : input.trim()
        }
        
        if(checkInput() === true ){
            axios.post(`${process.env.REACT_APP_ENV}/playlist/create`, data, config).then((res) => {
                setUserPlaylists(res.data)
                setPlaylistCreate(false)
            })
        } else {
            return
        }
    }
    
    function setError(TYPE){
        if(errors.some(({ ERR : FIND_ERR}) => FIND_ERR === TYPE.ERR) == false) {
            setErrors([{ERR : TYPE.ERR, message: TYPE.message}])
        }
    }


   const checkInput = () => {
    if(input.trim().length === 0){
        setError(codesRequest.FORM_ERR.ERR_PLAYLIST_EMPTY)     
        return false
    }
    if(input.length < 3) {
        setError(codesRequest.FORM_ERR.ERR_MIN_CHARS_PLAYLIST)
        return false
    }    
    if(statics.INPUT_VALIDATION.RESTRICT_CHARS.test(input) === true){
        setError(codesRequest.FORM_ERR.ERR_SPECIAL_CHARS_PLAYLIST)
        return false
    }
    if(statics.INPUT_VALIDATION.STARTS_WITH_NUM.test(input) === true){
        setError(codesRequest.FORM_ERR.ERR_PLAYLIST_STARTS_WITH_NUM)
        return false
    }
    setErrors([])
    return true
    }

   
    function submitTrack(e) {
        e.preventDefault()
        
        const data = {
            playlist_id : playlistSelect,
            track: trackUpload
        }
     
            if(playlistSelect.length !== 0 ){
                axios.post(`${process.env.REACT_APP_ENV}/tracks/upload`, data, config).then((res) => {
                   
                    setUserPlaylists(
                    userPlaylists.map((playlist) => {
                        
                       return playlist.playlist_id === data.playlist_id[0].id ? 
                        {...playlist, playlist_tracks : res.data} : playlist
                    })
                   ) 
                   setPlaylist(prevValue => ({
                    ...prevValue,
                    playlist_tracks : res.data
                  }))
                    
                })
                showModal(false)
            }
        }
    
 
    

    return [
        [input, errors, createPlaylist, playlistSelect],
        [setInput, formSubmit, setErrors, setPlaylistCreate, setPlaylistSelected, submitTrack]
    ]
}
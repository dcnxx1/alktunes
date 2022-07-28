import {useState, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import statics from '../static/statics'
function useAPlaylist(playlist_id) {
    const [showOptions, setOptions] = useState(false)
    const [cookies, setCookies, removeCookies] = useCookies(statics.USR_COOKIE)
    const [tracks, setTracks] = useState([])
    

    const handleOptions = () => {
        setOptions(prevValue => !prevValue)
    }

    const handleRefFocus =(searchRef) => searchRef.current.focus() 



    useEffect(() => {
       const config = {headers:  {"Authorization" : `Bearer ${cookies.USRCOOKIEE}`}}
       const data = { params : { playlist_id: playlist_id}}
        axios.get(`http://192.168.1.210:5055/tracks?playlist_id=${playlist_id}`, config, data).then((res)  => {
            const {playlist_tracks}  = res.data
            setTracks(playlist_tracks)
            console.log(res.data)
        })
    },[])

    return [
        // state
        [showOptions, tracks]
    ,   // state handlers
        [setOptions, handleOptions, handleRefFocus]
    ]
}

export default useAPlaylist

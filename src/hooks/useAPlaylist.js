import {useState, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import statics from '../static/statics'
function useAPlaylist(playlist_id, setPlaylist) {
    const [showOptions, setOptions] = useState(false)
    const [cookies, setCookies, removeCookies] = useCookies(statics.USR_COOKIE)
    const [tracks, setTracks] = useState({})
    const [selectTrack, setSelectTracks] = useState([])
    const [modal, showModal] = useState(false);
    const handleOptions = () => {
        setOptions(prevValue => !prevValue)
    }

    const handleRefFocus =(searchRef) => searchRef.current.focus() 


    function trackHandler(e, setSong, trackId) {
        if(showOptions === true){
        let getTrackId = selectTrack.some(({id}) => id === trackId)
        if(getTrackId === false){
            setSelectTracks(prevValue => ([
                ...prevValue,
                {id : trackId}
            ]))
        } else {
            setSelectTracks(prevValue => prevValue.filter(({id}) => id !== trackId))
        }
        return    
    }
        setPlaylist(tracks)
        setSong(tracks.playlist_tracks.find(({track_id}) => track_id === trackId))
        setPlaylist(tracks)
    }


    function deleteHandler() {
        if(selectTrack.length < 1) {
            return
        }
        showModal(prevValue => !prevValue)
        
    }

    useEffect(() => {
       const config = {headers:  {"Authorization" : `Bearer ${cookies.USRCOOKIEE}`}}
       const data = { params : { playlist_id: playlist_id}}
        axios.get(`http://192.168.1.210:5055/tracks?playlist_id=${playlist_id}`, config, data).then((res)  => {
            const {playlist_tracks}  = res.data
            setTracks({
                playlist_id : res.data.playlist_id,
                playlist_name: res.data.playlist_name,
                playlist_tracks
            })

        })
    },[])

    return [
        // state
        [showOptions, tracks, selectTrack, modal, cookies]
    ,   // state handlers
        [setOptions, handleOptions, handleRefFocus, trackHandler, showModal, deleteHandler, setTracks, setSelectTracks]
    ]
}

export default useAPlaylist

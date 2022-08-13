import React, {useState, useEffect, useMemo} from 'react'
import ReactDOM from 'react-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import statics from '../static/statics'
function useMusicComponent() {
    const [cookie, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
    const [song, setSong] = useState({})
    const [playlist, setPlaylist] = useState({})
    const [at, setAt] = useState(0)
    const [play, setPlay] = useState(true)
    const [userPlaylist, setUserPlaylist] = useState([])
    const config = {headers: {Authorization: `Bearer ${cookie.USRCOOKIEE}`}}
    

    useEffect(() => {
        if(song.hasOwnProperty('track_id')){
            document.title = `${song.track_name}`
        } else {
            document.title = "Alktunes"
        }
        setPlay(true)
    }, [song])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_ENV}/playlist/`, config).then((res) => {
            const userPlaylistArray = res.data   
            setUserPlaylist(userPlaylistArray)
        })
    }, [])



    function playNext(){
        // let getNextSong = playlist.playlist_tracks.splice(0, 1)[0]
        let currentSongIndex = playlist.playlist_tracks.findIndex(({track_id}) => track_id === song.track_id)
        let nextSong = currentSongIndex + 1 
        let getNextTrack = playlist.playlist_tracks[nextSong]
        
        if(getNextTrack !== undefined){
            setSong(getNextTrack)
        } else {
           const firstSong = playlist.playlist_tracks[0]
           setSong(firstSong)
        }
        // setSong(getNextSong)E
        setPlay(true)
    }

    function playPrevious() {
        let currentSongIndex = playlist.playlist_tracks.findIndex(({track_id}) => track_id === song.track_id)
        let previousSong = currentSongIndex - 1 
        let getPreviousTrack = playlist.playlist_tracks[previousSong]
        if(getPreviousTrack !== undefined){
            setSong(getPreviousTrack)
        } else {
            const getLastSong = playlist.playlist_tracks[playlist.playlist_tracks.length - 1]
            setSong(getLastSong)
        }
    }
   

    return [
        [song, playlist, play, userPlaylist, at],
        [setSong, setPlaylist, setPlay, setUserPlaylist, playNext, setAt, playPrevious]
    ]
}

export default useMusicComponent
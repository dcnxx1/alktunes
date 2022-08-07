import React, {useState, useEffect, useMemo} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import statics from '../static/statics'
function useMusicComponent() {
    const [cookie, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
    const [loading, setLoading] = useState(false)
    const [song, setSong] = useState({})
    const [playlist, setPlaylist] = useState({})
    const [at, setAt] = useState(0)
    const [play, setPlay] = useState(true)
    const [userPlaylist, setUserPlaylist] = useState([])
    const config = {headers: {Authorization: `Bearer ${cookie.USRCOOKIEE}`}}


    useEffect(() => {
        axios.get('http://192.168.1.210:5055/playlist/', config).then((res) => {
            const userPlaylistArray = res.data    
            setUserPlaylist(res.data)
        })
    }, [])

    function playNext(){
        let getNextSong = userPlaylist.splice(0, 1)[0]
        console.log(getNextSong)
        // setSong(prevValue => prevValue.concat(slicedSong))
        setPlay(true)
    }

    useEffect(() => {
        console.log(playlist)
    }, [playlist])
    function setPlaylistFromUrl(url){
        setPlaylist(url)
    }
  

    return [
        [song, playlist, play, userPlaylist, at],
        [setSong, setPlaylist, setPlay, setUserPlaylist, playNext, setAt]
    ]
}

export default useMusicComponent
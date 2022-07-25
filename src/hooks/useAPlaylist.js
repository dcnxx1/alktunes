import {useState, useEffect} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import statics from '../static/statics'
function useAPlaylist(playlist_id) {
    const [showOptions, setOptions] = useState(false)
    const [cookies, setCookies, removeCookies] = useCookies(statics.USR_COOKIE)
 


    useEffect(() => {
        const config = {params: {user_id: cookies.USRCOOKIEE}}
        const data = {playlist_id: playlist_id }
        axios.get('http://192.168.1.210:5055/tracks', data, config).then((res)  => {
            console.log(res.data)
        })
    },[])

    return [
        // state
        [showOptions]
    ,   // state handlers
        [setOptions]
    ]
}

export default useAPlaylist
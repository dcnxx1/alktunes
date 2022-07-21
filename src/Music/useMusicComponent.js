import React, {useState, useEffect, useMemo} from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import statics from '../static/statics'
function useMusicComponent() {
    const [cookie, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
    const [song, setSong] = useState([
        {url: "https://alktunes.s3.eu-central-1.amazonaws.com/all_eyez_on_me/only_god_can_judge_me.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQDgcTNM5D2IdwFvH0UmxdTTfitkPm%2FIDmeCHig5ehYnnQIhALCmex%2BOlLDKKhZHSenPgN%2BdJopXWCDbVN2NjjwGGnN3Kv8CCEQQABoMOTQzOTY5NjU0MTgzIgxdjW1XsduM3Tx2rwAq3AICYSG%2Brxn1gzlJSJgIb6eWCT3cvQ9B4AmuZH8%2FZXA5bWt59Gn0ROiOHVy7dJw9BmlyYop2MAH%2FRFiidzOs%2Bqkk%2B2b3jHTpiRynwkYnUNvhtdu2a%2BsPVufW4jCBOppHDHMjDqwM8PvLppy340ZjdRK%2Bo3i85ybII%2F3X4cIER47MJvgoeCBX0swuzsriARZvxUF7EK8bQMxY2jFrqiO6ObTOMu6lzZSQOo2tz58utcIKhpjj%2Bab0U4fuhEz9pZ2%2BMbwruufig4NjOtuWrpx85y6EST%2FVvk7Ef4VBoQ5txZi5d0MLuNv1GrFZXt14nLw2IqZK4Mn1Whh3HHoXEjBGI77ilwQqjclI7bgp78bTkacuovEdOvblvelUoc8k4XhY%2F%2FeQwWeeyE3ZCNgXPnwbfaml7NKuFo%2FYdsOnuqfUwiSmBEc6C1Y6RPcyZn2AMDdjX3dDowW%2FubMquaLUblAwttrklgY6sgLmedG5H7G7yGbkdVXX133FLEfLAdvV9XgjAJ%2FdeI4A19yiQbWG6V%2F21ZFHoq5w3Ayn%2FAesICCDt1XA5iXFlBn6z4mY05b4t9ZooW6v5th3KNV9S58qRcEjhsU%2Fo%2F2%2FA9EwQtZeG6c4iGJIICVQOHWvoFiz2hL6dPuzhVdjvtT4GTE%2BWHtWfRxgNjCwySywOR66DTt%2Bnol3B1hLUP0jFKIdx9vYvAcUyExTSkah6xBOqP9FSnPESTI138OLmRyKSEi0bkMwLhLJ5VNSyw02P%2FfnXVEEtgVo4XpTLZRHo83aViqR6%2FDfrDC8t8ZOh%2BsV0r76QtPWJ9E686v3lGs0QUx%2BugJbEh2%2Byn8Lgq5I%2FqaTrD7V3bt5uslAcBKyGm3TZJJ4PfMYNObrbnvgpcWJX3BonWQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220721T105819Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5XSHZ2WTWRUGURFR%2F20220721%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=768d7ef80fc44ea503c58d55eda7949953a78801fef9c8e40d077f715d0d3360"},
        {url: "https://alktunes.s3.eu-central-1.amazonaws.com/all_eyez_on_me/california_love.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQDgcTNM5D2IdwFvH0UmxdTTfitkPm%2FIDmeCHig5ehYnnQIhALCmex%2BOlLDKKhZHSenPgN%2BdJopXWCDbVN2NjjwGGnN3Kv8CCEQQABoMOTQzOTY5NjU0MTgzIgxdjW1XsduM3Tx2rwAq3AICYSG%2Brxn1gzlJSJgIb6eWCT3cvQ9B4AmuZH8%2FZXA5bWt59Gn0ROiOHVy7dJw9BmlyYop2MAH%2FRFiidzOs%2Bqkk%2B2b3jHTpiRynwkYnUNvhtdu2a%2BsPVufW4jCBOppHDHMjDqwM8PvLppy340ZjdRK%2Bo3i85ybII%2F3X4cIER47MJvgoeCBX0swuzsriARZvxUF7EK8bQMxY2jFrqiO6ObTOMu6lzZSQOo2tz58utcIKhpjj%2Bab0U4fuhEz9pZ2%2BMbwruufig4NjOtuWrpx85y6EST%2FVvk7Ef4VBoQ5txZi5d0MLuNv1GrFZXt14nLw2IqZK4Mn1Whh3HHoXEjBGI77ilwQqjclI7bgp78bTkacuovEdOvblvelUoc8k4XhY%2F%2FeQwWeeyE3ZCNgXPnwbfaml7NKuFo%2FYdsOnuqfUwiSmBEc6C1Y6RPcyZn2AMDdjX3dDowW%2FubMquaLUblAwttrklgY6sgLmedG5H7G7yGbkdVXX133FLEfLAdvV9XgjAJ%2FdeI4A19yiQbWG6V%2F21ZFHoq5w3Ayn%2FAesICCDt1XA5iXFlBn6z4mY05b4t9ZooW6v5th3KNV9S58qRcEjhsU%2Fo%2F2%2FA9EwQtZeG6c4iGJIICVQOHWvoFiz2hL6dPuzhVdjvtT4GTE%2BWHtWfRxgNjCwySywOR66DTt%2Bnol3B1hLUP0jFKIdx9vYvAcUyExTSkah6xBOqP9FSnPESTI138OLmRyKSEi0bkMwLhLJ5VNSyw02P%2FfnXVEEtgVo4XpTLZRHo83aViqR6%2FDfrDC8t8ZOh%2BsV0r76QtPWJ9E686v3lGs0QUx%2BugJbEh2%2Byn8Lgq5I%2FqaTrD7V3bt5uslAcBKyGm3TZJJ4PfMYNObrbnvgpcWJX3BonWQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220721T105904Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5XSHZ2WTWRUGURFR%2F20220721%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=5e77527ca92693161b1a12be12252043a102bca4c951971232481a4b42355cf9"}
    ])
    const [playlist, setPlaylist] = useState([])
    const [play, setPlay] = useState(true)
    

    function getPlaylist(){
        console.log(cookie)
        const config = {
            headers: {
                Authorization : `Bearer ${cookie.USRCOOKIEE} `
            }
        }

        axios.get('http://192.168.1.210:5055/playlist/', 
            config
        ).then((res) => {
            setPlaylist(res.data.playlists)
        })    
    }

    



    function playNext(){
        let slicedSong = song.splice(0, 1)[0]
        setSong(prevValue => prevValue.concat(slicedSong))
        setPlay(true)
    }

    function setPlaylistFromUrl(url){
        setPlaylist(url)
    }
    
    useEffect(() => {
        getPlaylist()
    }, [])
   

    useEffect(() => {
        console.log(song)
    }, [song])


    return [{song, setSong}, {playlist, setPlaylistFromUrl}, {play, setPlay}, playNext]
}

export default useMusicComponent
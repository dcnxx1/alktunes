import {useState} from 'react'

function useAPlaylist() {
    const [showOptions, setOptions] = useState(false)
    
 
    return [
        {showOptions, setOptions}, 
    ]
}

export default useAPlaylist
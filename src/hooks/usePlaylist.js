import {useState, useEffect} from 'react'


function usePlaylist() {
const [options, setOptions] = useState(false)

const optionHandler = () => setOptions(prevValue => !prevValue)          
const handlePlusButton = (showModal) => options == false ? showModal(prevValue => !prevValue): setOptions(prevValue => !prevValue)
return [
    [options, optionHandler],
    [handlePlusButton]
]
}

export default usePlaylist
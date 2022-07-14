import React, {useState} from 'react'
import Search from './Search'
import { Options, Icon, TrashDefect, TrashWhite } from '../imports'
import {useLocation} from 'react-router-dom'
import Track from '../compound/Track'

function APlaylist() {
    const location = useLocation()
    const [showOptions, setOptions] = useState(false)
    const [checkBox, setCheckBox] = useState(false)
    
    const [selectedSongs, setSongs] = useState(false)


    const optionHandler = {
        onClick: () => showOptions == true ? setCheckBox(prevValue => !prevValue): "",
    }
    console.log(optionHandler[0])

  return (
    <div className='APlaylist'>
     <div className='apl-search'>
        <Search />
     </div>
     <div className='APlaylist-container'>
        <div className='APlaylist-header'>
            <h2>Playlist Name</h2>
        </div>
        <div className='APlaylist-options'>
            <Icon onClick={() => {
                setOptions(prevValue => !prevValue)
                setCheckBox(false)
            }} style={{backgroundSize: "20px"}} path={Options}  />
            {showOptions && <Icon style={{backgroundSize: "20px"}} path={TrashDefect} />}
            {showOptions && <span className='opt-info apl-info'>Select a song to delete</span>}
        </div>

        <div className='APlaylist-holder'>
          <Track {...optionHandler} >
            <Track.Holder className="track-holder ">
                <img className='apl-img' src="https://unsplash.it/200/200" />
            </Track.Holder>
            <Track.Holder className="track-holder t-flex-col">
                <span className='apl-song'>Song name</span> 
                <span className='apl-artist'>Artist name</span>
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
                <span>Album name</span>
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
                <span>2:52</span>
            </Track.Holder>
            <Track.Holder className="track-holder f-1">
                {showOptions !== true ? <span>Now playing</span> : <span className='addbox'>
                    {checkBox && showOptions && <span className='checktrue'></span>}
                </span>}
            </Track.Holder>
          </Track>      
        </div>
     </div>
    </div>
  )
}

export default APlaylist
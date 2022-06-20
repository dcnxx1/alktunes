import React from 'react'
import AlkTunesLogo from '../static/alktune_logo_Svg.svg'
function Logo() {
  return (
    <div className='logo'>
            <img draggable='false' src={AlkTunesLogo} alt="Logo AlkTunes" />
        </div>
  )
}

export default Logo
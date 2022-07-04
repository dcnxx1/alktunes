import React, {useState} from 'react'
import Track from '../compound/Track'

import {Icon,Controller, MobileController, MediumController, PlaylistWhite } from '../imports'


function Playing() {
  
  return (
    <div className='Playing'>
      <div className={`nexton`}>
          <div className='playing-header'>
          <h2>Next on playlist</h2>
        </div>
        <div className='playing-track'>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
        </div>
      </div>
      <div className='Player'>
        <div className='player-holder b-test'>
        </div>
     
        <Controller/>
    <div className='show-playlist'>
      <Icon path={PlaylistWhite} />
    </div>
      </div>
    </div>
  )
}

export default Playing
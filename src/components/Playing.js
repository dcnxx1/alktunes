import React from 'react'
import Track from '../compound/Track'
import Controller from './Controller'
function Playing() {
  return (
    <div className='Playing'>
      <div className='nexton'>
          <div className='playing-header'>
          <h2>Next on playlist</h2>
        </div>
        <div className='playing-track'>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
          
        </div>
      </div>
      <div className='Player'>
        <div className='player-holder b-test'>
          <Controller />
        </div>
      </div>
    </div>
  )
}

export default Playing
import React from 'react'
import Track from '../compound/Track'
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
      
    </div>
  )
}

export default Playing
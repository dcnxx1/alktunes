import React from 'react'

function Track() {
  return (
    <li className='track'>
      <img className='track__cover' src='https://unsplash.it/200/200' />
      <div className='track__holder'>
        <span className='track__name'>Track Name</span>
        <span className='track__artist'>Track Artist</span>
      </div>
      <div className='track__album'>
        <span className='track_album_text'>Album name</span>
      </div>
      <div className='track__length'>
        <span>2:15</span>
      </div>
      <div className='track__more'>
        <span className='track__icon'></span>
      </div>
    </li>
  )
}

export default Track
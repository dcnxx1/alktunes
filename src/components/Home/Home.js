import React from 'react'
import Search from '../../compound/Search'
import Track from '../../compound/Track'
function Home() {
  const imitator = [
    {img: 'https://unsplash.it/100/500'},
    {img: 'https://unsplash.it/100/500'},
    {img: 'https://unsplash.it/100/500'},
  ]
  return (
    <div className='Home'>
      <Search />

      <div className='featured'>
        <span className='featured__text'>Featured</span>
        <div className='featured__holder'>
          {imitator.forEach((img) => (
            <div className='featured__container'>
              <span>Artist Name</span>
            </div> 
          ))}
             
         </div>
      </div>
      
      <div className='trending'>
        <ul className='trending__holder'>
          <Track addClass='track-home' />
          <Track addClass='track-home' />
          <Track addClass='track-home' />
          
        </ul>
      </div>
    </div>
  )
}

export default Home
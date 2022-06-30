import React from 'react'
import Search from '../../compound/Search'
import Track from '../../compound/Track'
function Home() {
  return (
    <div className='Home'>
      <Search />

      <div className='featured'>
        <span className='featured__text'>Featured</span>
        <div className='featured__holder'>

          <div className='featured__container'>
            <img className='featured__cover' src='https://unsplash.it/200/200' />
            <span className='featured__name-artist'>Artist name</span>
          </div>  

          <div className='featured__container'>
            <img className='featured__cover' src='https://unsplash.it/200/200' />
            <span className='featured__name-artist'>Artist name</span>
          </div>  

          <div className='featured__container'>
            <img className='featured__cover' src='https://unsplash.it/200/200' />
            <span className='featured__name-artist'>Artist name</span>
          </div>  
         </div>
      </div>
      
      <div className='trending'>
        <ul className='trending__holder'>
          <Track />
          <Track />
          <Track />
        </ul>
      </div>
    </div>
  )
}

export default Home
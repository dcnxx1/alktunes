import React from 'react'
import Search from './Search'
import Feature from '../compound/Feature'
import Track from '../compound/Track'
function Home() {
  return (
    <div className='Home '>
        <Search className="b-test" />
      <div className='component-featured '>
        <div className='featured-header'>
          <h2>Featured</h2>
        </div>
          <div className='feature-holder '>
            <div className='item-content'>
              <Feature artistName="Default" imgSrc='https://unsplash.it/200/200' />
            </div>
            <div className='item-content '>
              <Feature artistName="Default" imgSrc='https://unsplash.it/200/200' />
            </div>
            <div className='item-content '>
              <Feature artistName="Default" imgSrc='https://unsplash.it/200/200' />
            </div>
          </div>
      </div>
      <div className='component-trending b-test'>
      <div className='trending-holder'>
        <h2>Trending</h2>
      </div>
      <div className="trending-track-holder">
        
      </div>
      
      </div>
    </div>
  )
}

export default Home
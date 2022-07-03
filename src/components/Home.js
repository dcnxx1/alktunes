import React from 'react'
import Search from './Search'
import Feature from '../compound/Feature'
import Track from '../compound/Track'
import {MoreWhite} from '../imports'

function Home() {
  return (
    <div className='Home '>
      <Search className="Search" />
      <div className='Featured '>
        <div className='feature-header'>
          <h2 className=''>Featured</h2>
        </div>
        <div className='feature-holder'>
          <div className='item-holder'>
            <Feature pathToImg={'https://unsplash.it/500/500'}></Feature>
          </div>
          <div className='item-holder'>
            <Feature pathToImg={'https://unsplash.it/500/500'}></Feature>
          </div>
          <div className='item-holder'>
            <Feature pathToImg={'https://unsplash.it/500/500'}></Feature>
          </div>
        </div>
      </div>
      <div className='Trending b-test'>
        <div className='trending-header'>
          <h2>Trending</h2>
        </div>

        <div className='trending-holder'>
          <ul className='trending-ul'>
            <Track />
            <Track />
            <Track />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
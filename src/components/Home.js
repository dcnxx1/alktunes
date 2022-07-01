import React from 'react'
import Search from './Search'
import Feature from '../compound/Feature'

function Home() {
  return (
    <div className='Home '>
        <Search className="b-test" />
      <div className='component-featured '>
        <div className='featured-header'>
          <h2>Featured</h2>
        </div>
          <div className='feature-holder '>
            <div className='item-content b-test'>
              <Feature artistName="Default" imgSrc='https://unsplash.it/200/200' />
            </div>
            <div className='item-content b-test'>
              <Feature artistName="Default" imgSrc='https://unsplash.it/200/200' />
            </div>
            <div className='item-content b-test'>
              <Feature artistName="Default" imgSrc='https://unsplash.it/200/200' />
            </div>
          </div>
            
        
      </div>
      <div className='component-trending'>

      </div>
    </div>
  )
}

export default Home
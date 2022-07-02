import React from 'react'
import Search from './Search'
import Track from '../compound/Track'
import {MoreWhite} from '../imports'
function Home() {
  return (
    <div className='Home '>
      <Search className="Search" />
      <div className='Featured b-test'>
    
      </div>
      <div className='Trending b-test'>

      </div>
    </div>
  )
}

export default Home
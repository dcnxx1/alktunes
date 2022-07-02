import React from 'react'
import Search from './Search'
import Feature from '../compound/Feature'
import Track from '../compound/Track'
import {MoreWhite} from '../imports'
function Home() {
  return (
    <div className='Home b-test'>
        <Search className="b-test" />
        <div className='Featured b-test'>

        </div>
        <div className='Trending b-test'>

        </div>
      </div>
  )
}

export default Home
import React from 'react'
import Search from '../../compound/Search'

function Home() {
  return (
    <div className='Home'>
      <Search />

      <div className='featured'>
        Featured
      </div>
      
      <div className='trending'>
        Trending
      </div>
    </div>
  )
}

export default Home
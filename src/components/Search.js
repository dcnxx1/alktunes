import React from 'react'
import { Icon, SearchWhite, ArrowFullWhite } from '../imports'
function Search() {
  return (
    <form className='Search'>
      <div className='search-holder'>
        <input className='searchbar' type='text' placeholder='Search artist, song, album...' />
        <Icon type="submit" className="Icon" path={SearchWhite} />
      </div>
      <Icon className="Icon" hide={true}  path={ArrowFullWhite} />
    </form>
  )
}

export default Search
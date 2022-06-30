import React from 'react'

function Search() {
  return (
    <form className='search'>
      <input className='search__input' type='text' placeholder='Artist / Music / Album' />
      <button className='search_icon'></button>
    </form>
  )
}

export default Search
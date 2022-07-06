import React from 'react'
import styled from 'styled-components'
import { Icon, SearchWhite, ArrowFullWhite } from '../imports'

const SearchIcon = styled.span`
width: 35px;
height: 35px;
background-size: 20px;
background: url(${({path}) => path}) no-repeat center;
align-self: center;
cursor: pointer;

@media only screen and (max-width: 600px){
  background-size: 15px;
}
`

function Search() {
  return (
    <form className='Search'>
      <div className='search-holder'>
        <input className='searchbar' type='text' placeholder='Search artist, song, album...' />
        <SearchIcon className="Icon" path={SearchWhite} />
      </div>
      <Icon className="Icon" hide={false}  path={ArrowFullWhite} />
    </form>
  )
}

export default Search
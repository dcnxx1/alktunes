import React from 'react'
import styled from 'styled-components'
import { Icon, SearchWhite, ArrowFullWhite } from '../imports'

const SearchIcon = styled.span`
width: 35px;
height: 35px;
background-size: 25px;
background: url(${({path}) => path}) no-repeat center;
align-self: center;
cursor: pointer;
`

function Search() {
  return (
    <form className='Search'>
      <div className='search-holder'>
        <input className='searchbar' type='text' placeholder='Search artist, song, album...' />
        <SearchIcon className="Icon" path={SearchWhite} />
      </div>
      <Icon className="Icon" hide={true}  path={ArrowFullWhite} />
    </form>
  )
}

export default Search
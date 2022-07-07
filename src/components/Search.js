import React, {useState} from 'react'
import styled from 'styled-components'
import { Icon, SearchWhite, ArrowFullWhite, HomeWhite, QueueWhite, PlaylistWhite, LogoutWhite  } from '../imports'


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
  const [showMenu, setMenu] = useState(false)
  return (
    <form className='Search'>
      <div className='search-holder'>
        <input className='searchbar' type='text' placeholder='Search artist, song, album...' />
        <SearchIcon className="Icon" path={SearchWhite} />
      </div>
      <Icon onClick={() => setMenu(prevValue => !prevValue)} className="Icon search-menu-icon" hide="true"  path={ArrowFullWhite} />
      <div className={`show-menu ${showMenu == true ? 'show-m' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Playlist</li>
          <li>Queue</li>
          <li>Logout</li>
        </ul>
      </div>
    </form>
  )
}

export default Search
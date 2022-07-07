import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { Icon, SearchWhite, ArrowFullWhite, HomeWhite, QueueWhite, PlaylistWhite, LogoutWhite  } from '../imports'
import useOutsideClick from '../hooks/useOutsideClick'

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
    const ref = useRef(null)
    useOutsideClick(ref, () => setMenu(false))
  return (
    <form   className='Search'>
      <div className='search-holder'>
        <input className='searchbar' type='text' placeholder='Search artist, song, album...' />
        <SearchIcon className="Icon" path={SearchWhite} />
      </div>
      <div ref={ref} >
      <Icon onClick={() => setMenu(!showMenu)} className="Icon search-menu-icon" hide="true"  path={ArrowFullWhite} />
      </div>
      <div className={`show-menu ${showMenu == true ? 'show-m' : ''}`}>
        <ul >
          <li> <SearchIcon path={LogoutWhite} /> Home</li>
          <li>Playlist</li>
          <li>Queue</li>
          <li>Logout</li>
        </ul>
      </div>
    </form>
  )
}

export default Search
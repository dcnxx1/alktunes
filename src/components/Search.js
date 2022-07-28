import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon, SearchWhite, ArrowFullWhite, HomeWhite, QueueWhite, PlaylistWhite, LogoutWhite  } from '../imports'
import useOutsideClick from '../hooks/useOutsideClick'
import useSearch from '../hooks/useSearch'


function Search({buttonRef = {}}) {
    const {searchRef} = buttonRef
    const [showMenu, setMenu] = useState(false)
    const ref = useRef(null)
    const [
      [search, searchInput],
      [handleSubmit, handleSearchInput]
    ] = useSearch()

    useOutsideClick(ref, () => {
      setMenu(false)})
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="Search">
      <div className='search-holder'>
        <input onChange={e => handleSearchInput(e)} value={searchInput} ref={searchRef}  className='searchbar' type='text' placeholder='Search artist, album, song' />
        <SearchIcon value=""  className="Icon" path={SearchWhite} />
      </div>
      <div  className='seach-result'>

      </div>
      <Icon onClick={() => setMenu(prevValue => !prevValue)} id="menu-btn"  className='Icon search-menu-icon' hide="true"  path={ArrowFullWhite} />
      
      <div ref={ref} className={`show-menu ${showMenu == true ? 'show-m' : ''}`}>
 
          <Link to="/" className='mobile-link'>Home</Link>
          <Link to="/playlist" className='mobile-link'>Playlist</Link>
          <Link to="/queue" className='mobile-link'>Queue</Link>
          <Link to="/logout" className='mobile-link'>Logout</Link>
       
      </div>
    </form>
  )
}

export default Search



//  STLYED
const SearchIcon = styled.input.attrs({type: "submit"})`
width: 35px;
height: 35px;
background-size: 20px;
background: url(${({path}) => path}) no-repeat center;
align-self: center;
cursor: pointer;
border: none;
&:focus{
  outline: none;
  border: none;
}

@media only screen and (max-width: 600px){
  background-size: 15px;
}
`

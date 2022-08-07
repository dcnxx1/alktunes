import React, {useState, useRef, useMemo} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon, SearchWhite, ArrowFullWhite, HomeWhite, QueueWhite, PlaylistWhite, LogoutWhite, Pause, MoreWhite , AddPlaylist } from '../imports'
import useOutsideClick from '../hooks/useOutsideClick'
import useSearch from '../hooks/useSearch'
import Track from '../compound/Track'

function Search({buttonRef = {}}) {
    const {searchRef} = buttonRef
    const [showMenu, setMenu] = useState(false)
    const resultRef = useRef()
    const ref = useRef(null)
    const [
      [search, searchInput, showResults],
      [handleSubmit, handleSearchInput, setResults]
    ] = useSearch()


  
    useOutsideClick(resultRef, () => setResults(false))
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
      {showResults && <div ref={resultRef} className="search-results">
        <ul className="list-results">
          {search.map(({name, type, searchResults}) => (
           <div key={name} className='result-wrapper'>
            {name && 
            <Link state={{name, type}} className="link-primary" 
            to={{
              pathname: `/artist/${name.replace(' ', '').replace(' ', '')}`,
            }}><span className="search-name">{name}</span></Link>}
            {searchResults && searchResults.map((resultObj) => (
              <Track className="Track">
                <Track.Holder className="track-holder">
                  <img className="search-cover" src={resultObj.track_cover} />
                </Track.Holder>
                <Track.Holder className="track-holder f-1">
                  <span>
                  {resultObj.track_name}
                  </span>
                  <span>
                    {resultObj.track_artist}
                  </span>
                </Track.Holder>
                <Track.Holder className="track-holder f-1">
                <span>
                  {resultObj.track_album}
                </span>
                </Track.Holder>
                <Track.Holder className="track-hodler f-1">
                <span>
                  {resultObj.track_length}
                </span>
                </Track.Holder>
                <Track.Holder>
                <span className="more-options">
                                    
                </span>
                </Track.Holder>
              </Track>
            ))}
           </div>
          ))}
        </ul>
      </div>}
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

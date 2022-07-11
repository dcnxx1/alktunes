import React from 'react'
import {Link} from 'react-router-dom'
import { Icon, HomeWhite, PlaylistWhite, QueueWhite, LogoutWhite } from '../imports'
import styled from 'styled-components'



function Nav() {

  return (
    <nav className='Nav'> 
      <Icon className="Icon tooltip nav-icon" path={HomeWhite} toolTip="Home" />
      <Icon className="Icon tooltip" toolTip="Playlists" path={PlaylistWhite} />
      <Icon className="Icon tooltip" toolTip="Queue" path={QueueWhite} />
      <Icon className="Icon tooltip" toolTip="Logout" path={LogoutWhite} />
    </nav>
  )
}

export default Nav
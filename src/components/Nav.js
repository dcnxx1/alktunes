import React from 'react'
import {Link} from 'react-router-dom'
import { Icon, HomeWhite, PlaylistWhite, QueueWhite, LogoutWhite } from '../imports'
import styled from 'styled-components'



function Nav() {

  return (
    <nav className='Nav'> 
      <Link className="nav-link" to="/">
        <Icon className="Icon tooltip nav-icon" path={HomeWhite}/>
      </Link>

      <Link className="nav-link" to="/playlist">
        <Icon className="Icon tooltip"  path={PlaylistWhite} /> 
      </Link>
      <Icon className="Icon tooltip"  path={LogoutWhite} />
    </nav>
  )
}

export default Nav
import React from 'react'
import { Icon, HomeWhite, PlaylistWhite, QueueWhite, LogoutWhite } from '../imports'
function Nav() {
  return (
    <nav className='Nav'>
    <Icon className="Icon" path={HomeWhite} toolTip="Home" />
    <Icon className="Icon" toolTip="Playlists" path={PlaylistWhite} />
    <Icon className="Icon" toolTip="Queue" path={QueueWhite} />
    <Icon className="Icon" toolTip="Logout" path={LogoutWhite} />
    </nav>
  )
}

export default Nav
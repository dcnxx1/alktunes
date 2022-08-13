import React, {useState, forwardRef, createRef} from 'react'
import {Link} from 'react-router-dom'
import { Icon, HomeWhite, PlaylistWhite, QueueWhite, LogoutWhite, Modal } from '../imports'
import styled from 'styled-components'

import { useCookies } from 'react-cookie'
import statics from '../static/statics'
import { useNavigate} from 'react-router-dom'
function Nav() {
  const [escape, showEscape] = useState(false)

 
  return (
    <nav className='Nav'> 
      <Link className="nav-link" to="/">
        <Icon className="Icon tooltip nav-icon" path={HomeWhite}/>
      </Link>

      <Link className="nav-link" to="/playlist">
        <Icon className="Icon tooltip"  path={PlaylistWhite} /> 
      </Link>
      <Icon onClick={e => showEscape(prevValue => !prevValue)} className="Icon tooltip"  path={LogoutWhite} />
      {escape && <Nav.Escape escapeShow={{showEscape}}/> }
    </nav>
  )
}


export default Nav


Nav.Escape = function ModalEscape({escapeShow}){
 const {showEscape} = escapeShow
  const [cookies, setCookies, removeCookie] = useCookies(statics.USR_COOKIE)
let navigation = useNavigate()

function logOut(){
  removeCookie(statics.USR_COOKIE)
  console.log(cookies)
  navigation('/entrance', {replace: true})
}

return <Modal  className="portal" header="Do you want to log out?">
  <div className="escape-header">
  <input onClick={() => showEscape(false)} className='button-primary' value="Stay" />
  <input onClick={e => logOut()} className="button-primary" value="Log out" />
  </div>
  </Modal>
}
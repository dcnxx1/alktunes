import React from 'react'
import { useCookies } from 'react-cookie'
import { Navigate, useLocation } from 'react-router-dom'
import statics from '../static/statics'

function Guard({children}) {
  const [cookies, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
  const location = useLocation()
  
  return Object.keys(cookies).length !== 0 ? (
    <div>{children}</div>
  ) : <Navigate replace={true} to="/entrance" state={{from: `${location.pathname}${location.search}`}} /> 
}

export default Guard
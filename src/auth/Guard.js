import axios from 'axios'
import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie'
import { useLocalStorage } from '../imports'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import statics from '../static/statics'


function Guard({children}) {
  const [cookies, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
  const [storage, setStorage, removeStorage] = useLocalStorage(statics.USR_TOKEN)
  
  const location = useLocation()



  return cookies.USRCOOKIEE !== undefined ? (
    <div>{children}</div>
  ) : <Navigate replace={true} to="/entrance" state={{from: `${location.pathname}${location.search}`}} /> 
}

export default Guard
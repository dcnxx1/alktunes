import axios from 'axios'
import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import statics from '../static/statics'


function Guard({children}) {
  const [cookies, setCookie, removeCookie] = useCookies(statics.USR_COOKIE)
  const location = useLocation()
  let config = {headers: {Authorization: `Bearer ${cookies.USRCOOKIEE}`}}

  function validator() {
    axios.post(`${process.env.REACT_APP_ENV}/validator`, null , config).then((res) => {
      
    }).catch((err) => {
      
    })
  }

  useEffect(() => {
    validator()
  }, [])
  return cookies.USRCOOKIEE !== undefined ? (
    <div>{children}</div>
  ) : <Navigate replace={true} to="/entrance" state={{from: `${location.pathname}${location.search}`}} /> 
}

export default Guard
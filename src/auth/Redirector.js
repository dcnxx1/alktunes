import React from 'react';
import { useCookies } from 'react-cookie'
import {Navigate, useLocation} from 'react-router-dom'
import statics from '../static/statics'
import App from '../App';
// checks whether user has a JWT token inside their cookie storage. If the cookie exists, redirect them to the main application
export default function Redirector({children}) {
const [cookies, setCookie, removeCookies] = useCookies(statics.USR_COOKIE)
const location = useLocation()

    return Object.keys(cookies).length == 0 ? (
        <div>
    {children}
    </div>
    ) : <Navigate to='/' replace={true} state={`${location.pathname}${location.search}`} />
}
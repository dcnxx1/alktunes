import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import AlkTunesLogo from '../static/alktune_logo_png.png'



function Entrance() {
  const location = useLocation()
  return (
    <div className='entrance'>
    <div className="logo">
      <img src={AlkTunesLogo} alt='AlkTunes Logo' />
    </div>
          <div className='wrapper-entrance'>
            <div className='usr-left'>
                <div className='heading'>
                  <div>
                    <h1>Music</h1>
                    <h1>Makes</h1>
                    <h1>Perfect.</h1>
                  </div>

                </div>
                <div className='usr-txt'>
                  <span>Experience the world of music</span> <br />
                  <span>Listen to your favorite artists</span> <br />
                  <span>And transform your world.</span>
                </div>
            </div>
            <div className='usr-right'>
              <div className='redir'>
              <Link to={{pathname: '/login', state: {prevPath: location.pathname}}} className='link-primary'>
                 <button className='button-primary redir__btn'>Login {'>'}</button>
              </Link>
              <Link to={{pathname: '/register', state: {prevPath: location.pathname}}} className='link-primary'>
                 <button className='button-primary redir__btn'>Register {'>'}</button>
              </Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Entrance
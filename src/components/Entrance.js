import React from 'react'
import AlkTunesLogo from '../static/alktune_logo_Svg.svg'
function Entrance() {
  return (
    <div className='entrance'>
        <div className='logo'>
            <img draggable='false' src={AlkTunesLogo} alt="Logo AlkTunes" />
            
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
                <button className='button-primary redir__btn'>Login {'>'}</button>
                <button className='button-primary redir__btn'>Register {'>'}</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Entrance
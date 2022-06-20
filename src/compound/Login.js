import React from 'react'
import AlkTunesLogo from '../static/alktune_logo_Svg.svg';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <>
    <div className='entrance-container'>
        <form className='form-control'>
            <div className='logo'>
                <img src={AlkTunesLogo} alt='AlkTunes Logo' />
            </div>
            <span className='form-type'>Login</span>
            <div className='form-register'>
            <span className="input-message">
                <input type='text' className='input' placeholder='Username'/>
                <p>ERROR MESSAGE</p>
            </span>
            <span className="input-message">
                <input type='password' className='input' placeholder='Password'/>
                <p>ERROR MESSAGE</p>
            </span>
                <input type='submit lg' className='input submit button-primary' value='Login'/>
            </div>
            <span>Don't have an account yet? <Link className='link-primary' to='/register'>Register</Link></span>
        </form>
    </div>
   
    </>
  )
}

export default Login
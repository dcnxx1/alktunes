import React from 'react';
import { Link } from 'react-router-dom';
import AlkTunesLogo from '../static/alktune_logo_png.png';



function Register() {


    return (
        <>
            <div className='entrance-container'>

                <form className='form-control'>
                    <div className='logo'>
                        <img src={AlkTunesLogo} alt="AlkTunes Logo" />
                    </div>
                    <span className='form-type'>Register</span>
                    <div className='form-register'>

                        <span className='input-message'>
                            <input type='text' className='input username' placeholder='Username' />
                            <p>ERROR MESSAGE</p>
                        </span>

                        <span className='input-message'>
                            <input type='email' className='input email' placeholder='E-mail' />
                            <p>ERROR MESSAGE</p>
                        </span>
                        <span className="input-message">
                            <input type='password' className='input password' placeholder='Password' />
                            <p>ERROR MESSAGE</p>
                        </span>
                        <span className="input-message">
                         <input type='password' className='input password repeat-password' placeholder='Repeat Password' />
                         <p>ERROR MESSAGE</p>
                        </span>

                        <input className='input submit button-primary' type='submit' value='Register' />
                    </div>
                    <span>Already a member? <Link to='/login' className='link-primary'>Login</Link></span>
                </form>


            </div>
        </>
    )
}

export default Register
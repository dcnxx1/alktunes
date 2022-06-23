import React, {useState} from 'react'
import TunesLogo from '../static/alktune_logo_png.png'
import {Link} from 'react-router-dom';
import statics from '../static/statics';
import useForm from '../hooks/useForm';
function Login() {
    const [formControl, {inputFields, setDataForLogin}] = useForm(statics.FORM.LOGIN)


   

  return (
    <>
    <div className='entrance-container'>
        <form onSubmit={formControl} className='form-control'>
            <div className='logo'>
                <img src={TunesLogo} alt='AlkTunes Logo' />
            </div>
            <span className='form-type'>Login</span>
            <div className='form-register'>
            <span className="input-message">
                <input onChange={e => setDataForLogin(e)} name='username' value={inputFields.username} type='text' className='input' placeholder='Username'/>
                <p>ERROR MESSAGE</p>
            </span>
            <span className="input-message">
                <input onChange={e => setDataForLogin(e)} name='password' value={inputFields.password} type='password' className='input' placeholder='Password'/>
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
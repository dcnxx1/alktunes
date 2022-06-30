import React, {useState, useEffect, useRef} from 'react'
import TunesLogo from '../static/logo_new/alktune_full_png.png'
import {Link} from 'react-router-dom';
import statics from '../static/statics';
import useForm from '../hooks/useForm';
import codesRequest from '../errors/codes.request';

function Login() {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const [formControl, {inputFields, setDataForLogin, removeNoInputWhenInput}, error, extractError] = useForm(statics.FORM.LOGIN, {usernameRef, passwordRef})
 
   
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
            {error.some(obj => obj.ERR == extractError(codesRequest.FORM_ERR.ERR_NO_INPUT.ERR)?.ERR) && (<p>{codesRequest.FORM_ERR.ERR_NO_INPUT.message}</p>)}
                <input 
                    onChange={e => { 
                        setDataForLogin(e) 
                        removeNoInputWhenInput(e)}
                    }    
                    name='username' 
                    value={inputFields.username} 
                    type='text' 
                    ref={usernameRef}
                    className='input' 
                    placeholder='Username'
                />
              
            </span>
            <span className="input-message">
                <input onChange={e => setDataForLogin(e)} name='password' value={inputFields.password} type='password' className='input' placeholder='Password'/>
                {error.some(obj => obj.ERR == extractError(codesRequest.ERRORS.ERR_USR_NOT_EXIST.ERR)?.ERR) && (<p>{codesRequest.ERRORS.ERR_USR_NOT_EXIST.message}</p>)}
            </span>
                <input type='submit' className='input submit button-primary' value='Login'/>
            </div>
            <span>Don't have an account yet? <Link className='link-primary' to='/register'>Register</Link></span>
        </form>
    </div>
   
    </>
  )
}

export default Login
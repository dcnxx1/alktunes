import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import AlkTunesLogo from '../static/logo_new/alktune_full_png.png';
import useForm from '../hooks/useForm';
import statics from '../static/statics';
import codesRequest from '../errors/codes.request';

function Register() {
    const emailRef = useRef()
    const [formControl, {inputFields, setDataForLogin, removeNoInputWhenInput}, error, extractError, returnError] = useForm(statics.FORM.REGISTER, {emailRef})
    

    return (
        <>
            <div className='entrance-container'>

                <form onSubmit={e => formControl(e)} className='form-control'>
                    <div className='logo'>
                        <img src={AlkTunesLogo} alt="AlkTunes Logo" />
                    </div>
                    <span className='form-type'>Register</span>
                    <div className='form-register'>
                    
                        <span className='input-message'>
                        {error.some(checkForError => checkForError.ERR == extractError(codesRequest.FORM_ERR.ERR_NO_INPUT.ERR)?.ERR) && <p>{codesRequest.FORM_ERR.ERR_NO_INPUT.message}</p>}
                            <input onChange={e => {
                                setDataForLogin(e)
                                removeNoInputWhenInput(e)
                                }} value={inputFields.username} name='username' type='text' className='input username' placeholder='Username' />
                         {returnError("USERNAME") && <p>{returnError("USERNAME").message}</p>}
                        </span>

                        <span className='input-message'>
                            <input onChange={e => {setDataForLogin(e)}} ref={emailRef} value={inputFields.email} name='email' type='email' className='input email' placeholder='E-mail' />
                         {returnError("EMAIL") && <p>{returnError("EMAIL").message}</p>}
                        </span>
                        <span className="input-message">
                            <input onChange={e => setDataForLogin(e)} value={inputFields.password} name='password' type='password' className='input password' placeholder='Password' />
                            {returnError("PASSWORD") && <p>{returnError("PASSWORD").message}</p>}
                        </span>
                        <span className="input-message">
                         <input onChange={e => setDataForLogin(e)} value={inputFields.repeatPassword} name='repeatPassword' type='password' className='input password repeat-password' placeholder='Repeat Password' />
                         {extractError(codesRequest.FORM_ERR.ERR_PASS_DONT_MATCH) && <p>{extractError(codesRequest.FORM_ERR.ERR_PASS_DONT_MATCH).message}</p>}
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
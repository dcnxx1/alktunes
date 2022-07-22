import {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import statics from '../static/statics'
import codesRequest from '../errors/codes.request'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import {FORM_ERR, ERRORS} from '../errors/codes.request'
function useForm(typeOfForm, pl = []) {
    const [inputFields, setInputFields] = useState({})
    const [error, setErrors] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies([statics.USR_COOKIE])

    const navigator = useNavigate()

    function setDataForLogin(e){
       const {name, value} = e.target
       setInputFields(prevValue => ({
        ...prevValue,
        [name]: value
       }))
    }

    useEffect(() => {
        console.log(error)
    }, [error])

    function findError(searchError){
        return error.some(errorObj => errorObj.ERR == searchError)
    }

    function removeError(errToRemove){
        setErrors(prevValue => prevValue.filter(removeErr => removeErr.ERR !== errToRemove.ERR))
    }

    function insertError(errorCode){
            // if error doesnt exist, add the error
             if(error.some(findErr => findErr.ERR == errorCode.ERR) == false){ 
                console.log("this has run even after the same error is found")
                removeOfTheSameType(errorCode?.FOR)
                setErrors(prevValue => ([...prevValue, {ERR : errorCode.ERR, FOR: errorCode.FOR, message: errorCode.message}]))
            } 
    }

    function removeOfTheSameType(search){
        error.forEach((objErr) => {
            if(objErr.FOR == search){
                removeError(objErr)
            }
        })
    }

    function inputValidation(typeOfForm){
       switch(typeOfForm){
        
        case statics.FORM.LOGIN: 
        
            if(!inputFields.username && !inputFields.password){
                insertError(FORM_ERR.ERR_NO_INPUT)
            } else {
               removeError(FORM_ERR.ERR_NO_INPUT)
                 
                axios.post('http://192.168.1.210:5055/entrance/login', {
                    username : inputFields.username,
                    password: inputFields.password
                }).then((res) => {
                    const {data} = res
                    if(data.statusCode == 500){
                        setErrors(prevValue => ([...prevValue, {ERR: ERRORS.ERR_USR_NOT_EXIST.ERR, message: ERRORS.ERR_USR_NOT_EXIST.message}])) 
                    } else {
                        setErrors(prevValue => prevValue.filter(removeError => removeError.ERR !== ERRORS.ERR_USR_NOT_EXIST.ERR))
                        setCookie(statics.USR_COOKIE,data.token)
                        navigator('/', {replace: true})
                    }
                }).catch((err) => {
                //
                })
            }    
            
            
        break;

        case statics.FORM.REGISTER : 
       
       
        const {username, password, email, repeatPassword} = inputFields  
        // if username is empty, insert error. else remove error
        !username || !password || !repeatPassword  ? insertError(FORM_ERR.ERR_NO_INPUT) : removeError(FORM_ERR.ERR_NO_INPUT)
        if(username){
            statics.INPUT_VALIDATION.RESTRICT_CHARS.test(username) == true ? insertError(FORM_ERR.ERR_SPECIAL_CHARS_USR) : removeError(FORM_ERR.ERR_SPECIAL_CHARS_USR)
            statics.INPUT_VALIDATION.STARTS_WITH_NUM.test(username) == true ? insertError(FORM_ERR.ERR_USR_CONTAINS_NUMERICAL) : removeError(FORM_ERR.ERR_USR_CONTAINS_NUMERICAL)
            username.length < 5 == true ? insertError(FORM_ERR.ERR_MIN_CHARS_USR) : removeError(FORM_ERR.ERR_MIN_CHARS_USR)
        }
        if(password){
            password.length < 5 == true ? insertError(FORM_ERR.ERR_MIN_CHARS_PASS) : removeError(FORM_ERR.ERR_MIN_CHARS_PASS)
        }
        repeatPassword !== password ? insertError(FORM_ERR.ERR_PASS_DONT_MATCH) : removeError(FORM_ERR.ERR_PASS_DONT_MATCH)
        
        email && email.length == 0 ? insertError(FORM_ERR.ERR_EMAIL_EMPTY) : removeError(FORM_ERR.ERR_EMAIL_EMPTY)
           
      
        // if there are no errors
       
        if(error.length == 0 && username){
            axios.post('http://192.168.1.210:5055/entrance/register', {
                username,
                password,
                email
            }).then(({data}) => {
                if(data.statusCode == 500){
                    insertError(ERRORS.ERR_EMAIL_EXIST)
                } else {
                    setCookie(statics.USR_COOKIE, data.token)
                    navigator('/', {replace : true})
                }
            }).catch((err) => {
                //
            })
        }
            
        break;


        case statics.FORM.PLAYLIST: 
            const {playlistname} = inputFields 
            !playlistname ? insertError(FORM_ERR.ERR_PLAYLIST_EMPTY) : removeError(FORM_ERR.ERR_PLAYLIST_EMPTY)
            if(playlistname){
                statics.INPUT_VALIDATION.RESTRICT_CHARS.test(playlistname) == true ? insertError(FORM_ERR.ERR_SPECIAL_CHARS_PLAYLIST) : removeError(FORM_ERR.ERR_SPECIAL_CHARS_PLAYLIST)
                // statics.INPUT_VALIDATION.RESTRICT_CHARS.test(playlistname) == true ? console.log(" adding this now: " + FORM_ERR.ERR_SPECIAL_CHARS_PLAYLIST) : console.log("removing this now: " + FORM_ERR.ERR_SPECIAL_CHARS_PLAYLIST)
                statics.INPUT_VALIDATION.STARTS_WITH_NUM.test(playlistname) == true ? insertError(FORM_ERR.ERR_PLAYLIST_STARTS_WITH_NUM) : removeError(FORM_ERR.ERR_PLAYLIST_STARTS_WITH_NUM)
                // statics.INPUT_VALIDATION.STARTS_WITH_NUM.test(playlistname) == true ? insertError(FORM_ERR.ERR_PLAYLIST_STARTS_WITH_NUM) : removeError(FORM_ERR.ERR_PLAYLIST_STARTS_WITH_NUM)
                playlistname.length < 3 == true ? insertError(FORM_ERR.ERR_MIN_CHARS_PLAYLIST) : removeError(FORM_ERR.ERR_MIN_CHARS_PLAYLIST)                 
                // playlistname.length < 3 == true ? insertError(FORM_ERR.ERR_MIN_CHARS_PLAYLIST) : removeError(FORM_ERR.ERR_MIN_CHARS_PLAYLIST)                 
            } 

            const config = {
                headers: {
                    'Authorization': `Bearer ${cookie.USRCOOKIEE}`
                }
            }
            console.log(config)
            const data = {
                playlistName: inputFields.playlistname
            }

            if(error && error.length == 0) {
                axios.post('http://192.168.1.210:5055/playlist/create', data, config ).then((res) => {
                    // pl(prevValue => prevValue = res.data.Items.playlist)
                    console.log(res.data)
                    const {L : playlists} = res.data.Attributes.playlists
                    pl[0](prevValue => prevValue = playlists)
                    pl[1](false)
                }).catch(err => {
                    // 
                })
            }
            
       }
    }
    
    // get specific error object
    function extractError(typeOfErrorToExtract){
     return error.find(obj => obj.ERR == typeOfErrorToExtract) 
    }

    function returnError(type){
        return error.find(obj => obj.FOR == type)
    }
    // when user the user has tried to send data and recieved a no input error, remove the error after input has more than 3 chars
    function removeNoInputWhenInput(e){
        if(e.target.value.length > 3){
            setErrors(prevValue => prevValue.filter(removeError => removeError.ERR !== codesRequest.FORM_ERR.ERR_NO_INPUT.ERR))
        }
    }

    function formControl(e) {
        e.preventDefault()
        switch(typeOfForm){
            case statics.FORM.LOGIN: 
              inputValidation(statics.FORM.LOGIN)
            break;
            case statics.FORM.REGISTER:
            inputValidation(statics.FORM.REGISTER)
            break;
            case statics.FORM.PLAYLIST: 
            inputValidation(statics.FORM.PLAYLIST)
            break;
        }
    }

    return [formControl, {inputFields, setDataForLogin, removeNoInputWhenInput}, error, extractError, returnError]
}

export default useForm
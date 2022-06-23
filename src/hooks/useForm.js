import React, {useState} from 'react'
import axios from 'axios'
import statics from '../static/statics'

function useForm(typeOfForm, inputData) {
    const [inputFields, setInputFields] = useState({})
    const [error, setErrors] = useState([])

    function setDataForLogin(e){
       const {name, value} = e.target
       setInputFields(prevValue => ({
        ...prevValue,
        [name]: value
       }))

    }

    switch(typeOfForm){
        case statics.FORM.LOGIN: 
        const {username, password} = inputFields
        // axios.post({username, password}).then((res) => {
        //     console.log(res)
        // })
        break;

        case statics.FORM.REGISTER:

        break;
    }

    function formControl(e) {
        e.preventDefault()
        
    }

    return [formControl, {inputFields, setDataForLogin}]
}

export default useForm
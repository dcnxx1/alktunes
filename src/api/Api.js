import {useState} from 'react'
import axios from 'axios'

function Api(typeOfReq, path, data) {
  const [response, setResponse] = useState({})

switch(typeOfReq){
    case "GET":

    break;

    case "POST" : 
    axios.post(`http://192.168.1.210:5055${path}`, data)
    .then((res) => {
        setResponse(res)
    }).catch((err) => {
        //
    })
    break;
}
    
return [response]
}

export default Api
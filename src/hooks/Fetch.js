import axios from 'axios'
import {API_URL} from '../static/statics'

function Fetch() {
  return axios.create({
    baseUrl: API_URL
  })
}

export default Fetch
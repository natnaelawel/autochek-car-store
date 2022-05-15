import axios from 'axios'

const API = axios.create({
  baseURL: `https://api.staging.myautochek.com/v1`,
})

export default API

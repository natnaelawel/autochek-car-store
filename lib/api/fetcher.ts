import axios from 'axios'
import axiosRetry from 'axios-retry'

// const API = axios.create({
//   baseURL: `https://api.staging.myautochek.com/v1`,
// })

axiosRetry(axios, { retries: 3 })

export default axios

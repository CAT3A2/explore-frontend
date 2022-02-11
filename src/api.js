import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:5500/'
    // baseURL: import.meta.env.REACT_APP_API_URL
    baseURL: process.env.REACT_APP_API_URL
})

export default api
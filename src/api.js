import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5500/'
    // baseURL: import.meta.env.API_URL
})

export default api
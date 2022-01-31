
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000/'
    // baseURL: import.meta.env.VITE_API_URL
})

export default api
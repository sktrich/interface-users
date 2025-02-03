import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-users-lake-theta.vercel.app'
})

export default api
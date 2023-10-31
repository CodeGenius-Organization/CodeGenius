import axios from 'axios'

// Ver rota backend
const api = axios.create({
    baseURL: 'http://localhost:8181'
})

export default api
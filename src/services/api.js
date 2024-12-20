import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'https://code-club-burger-production-5ef9.up.railway.app/'
})

apiCodeBurger.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('codeburger:userData')    
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default apiCodeBurger

import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    // headers: {'Authorization': 'Bearer ' + getToken()}
})

axios.interceptors.request.use(
    async function (config) {
        const user = localStorage.getItem('userInfo')
        if (user.token) config.headers.Authorization = `${user.token}`
        return config
    }
)

export { axios }
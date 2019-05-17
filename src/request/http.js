import axios from 'axios'
import store from '../vuex/store'


// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.github.com'

// http request 拦截器
axios.interceptors.request.use(
    config => {
        const token = store.state.token;
        if (token) {
            config.headers.Authorization = token
        }
         return config
    },
    err => {
        return Promise.reject(err)
    },
  )

  export default axios
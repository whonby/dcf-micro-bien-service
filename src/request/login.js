import axios from 'axios';

export default axios.create({

    baseURL: process.env.VUE_APP_LOGIN_URL
    
})

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')




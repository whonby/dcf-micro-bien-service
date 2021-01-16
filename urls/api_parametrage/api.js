import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:1000/api'
    // baseURL: 'http://dcf-parametrage.kognishare.com/api'
})
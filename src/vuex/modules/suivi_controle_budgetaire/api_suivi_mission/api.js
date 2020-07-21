import axios from 'axios';

export default axios.create({

    baseURL: 'http://localhost:4100/api'
// baseURL: 'http://dcf-suivi-missions.kognishare.com/api'
})
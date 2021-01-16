import axios from 'axios';

export default axios.create({

     baseURL: 'http://localhost:5200/api'
   //baseURL: 'http://dcf-suivi-missions.kognishare.com/api'
})
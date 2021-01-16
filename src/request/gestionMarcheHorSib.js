import axios from 'axios';

export default axios.create({

    baseURL: process.env.VUE_APP_GESTION_MARCHE_HORS_SIB_URL
})

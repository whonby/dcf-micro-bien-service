
import Login from '../../pages/auth/Login.vue'
import Logout from '../../pages/auth/Logout.vue'
import GestionCF from "../../pages/gestionCF/GestionCF";
import DetailCF from "../../pages/gestionCF/DetailCF";


const AuthRoutes = [
    {
        path: '/connexion',
       name:"Login",
       meta: {layout: "no-sidebar"},
       component: Login
    },
    

     
     {
      path: '/logout',
     name:"Logout",
     component: Logout,
     meta: { requiresAuth: true }  

   },
    {
        path: '/gestion-cf',
        name:"GestionCF",

        component: GestionCF
    },
    {
        path: '/detail-cf/:id',
        name:"DetailCF",

        component: DetailCF
    },
   
]

export default AuthRoutes;

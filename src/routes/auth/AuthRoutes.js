
import Login from '../../pages/auth/Login.vue'
import Logout from '../../pages/auth/Logout.vue'
import GestionCF from "../../pages/parametres_generaux/affectation_cf/GestionCF";
import AffectationCF from "../../pages/parametres_generaux/affectation_cf/AffectationCF";

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
        path:"/gestion-cf",
        name:"GestionCF",
        component:GestionCF
    },
    {
        path:"/affectation-cf",
        name:"affectation-cf",
        component:AffectationCF
    }

   
]

export default AuthRoutes;

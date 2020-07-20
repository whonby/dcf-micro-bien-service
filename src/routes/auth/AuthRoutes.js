
import Login from '../../pages/auth/Login.vue'
import Logout from '../../pages/auth/Logout.vue'
import GestionCF from "../../pages/gestionCF/GestionCF";
import DetailCF from "../../pages/gestionCF/DetailCF";
import photoProfil from "../../pages/auth/modifierPhotoProfil/photoProfil";

const AuthRoutes = [


    {
        path: '/photo-Profil',
        name: "photoProfil",

        component: photoProfil
    },
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


import Login from '../../pages/auth/Login.vue'
import Logout from '../../pages/auth/Logout.vue'
import GestionCF from "../../pages/gestionCF/GestionCF";
import DetailCF from "../../pages/gestionCF/DetailCF";
import Groupe from "../../pages/auth/groupe/Groupe.vue"
import AddGroupe from "../../pages/auth/groupe/AddGroupe.vue"
import UpdateGroupe from "../../pages/auth/groupe/UpdateGroupe.vue"
import Autorisation from "../../pages/auth/autorisation/Autorisation.vue"
import MonEquipe from "../../pages/auth/equipe/MonEquipe.vue"
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
        component: GestionCF,
        meta: { requiresAuth: true }
    },
    {
        path: '/detail-cf/:id',
        name:"DetailCF",
        component: DetailCF,
        meta: { requiresAuth: true }
    },
    {
        path: '/groupe',
        name:"Groupe",
        component: Groupe,
        meta: { requiresAuth: true }
    },
    {
        path: '/ajouter-groupe',
        name:"AjouteGroupe",
        component: AddGroupe,
        meta: { requiresAuth: true }
    },
    {
        path: '/modifier-groupe',
        name:"ModifierGroupe",
        component: UpdateGroupe,
        meta: { requiresAuth: true }
    },
    {
        path: '/gestion-access',
        name:"GestionAccess",
        component: Autorisation,
        meta: { requiresAuth: true }
    },
    {
        path: '/mon-equipe',
        name:"MonEquipe",
        component: MonEquipe,
        meta: { requiresAuth: true }
    },
   
]

export default AuthRoutes;

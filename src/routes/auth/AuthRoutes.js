import Autorisation from "@/pages/auth/autorisation/Autorisation.vue";
import groupe1 from "@/pages/auth/groupe/groupe1.vue"
import Login from '@/pages/auth/Login.vue'
import Logout from '@/pages/auth/Logout.vue'
import GestionCF from "@/pages/gestionCF/GestionCF";
import DetailCF from "@/pages/gestionCF/DetailCF";
import photoProfil from "@/pages/auth/modifierPhotoProfil/photoProfil";
//import Groupe from  "@/pages/auth/groupe/Groupe.vue"
//import AddGroupe from "@/pages/auth/groupe/AddGroupe.vue"
import TableauDeBordG from "@/pages/auth/TableauDeBordG"
import Chat from "@/pages/chat/Chat"
import MonEquipe from "@/pages/gestionCF/MonEquipe";
import pagePresentation from "@/gestionDesModule/pagePresentation";
import TableauBordGestionVehicule from "@/gestionDesModule/TableauBordGestionVehicule.vue";
const AuthRoutes = [
    {
        path: '/TableauBordGestionVehicule/:id',
       name:"TableauBordGestionVehicule",
       
       component: TableauBordGestionVehicule
    },
{
        path: '/sidcf',
       name:"pagePresentation",
       meta: {layout: "no-sidebar",
           requiresAuth: true},
       component: pagePresentation
    },
    {
        path:"/mon-equipe",
        name:"equipe",
        component:MonEquipe
    },
    {
        path: '/TableauDeBordG/:id',
        name: "TableauDeBordG",
        component: TableauDeBordG,
        meta: { requiresAuth: true }
    },
    {
        path: '/chat',
        name: "Chat",
        component: Chat,
        meta: { requiresAuth: true }
    },
    // {
    //     path: '/ajouter-groupe',
    //     name: "AjouteGroupe",
    //     component: AddGroupe,
    //     meta: { requiresAuth: true }
    // },
    {
        path:"/liste-groupe",
        name:"groupe",
        component:groupe1,
        meta: { requiresAuth: true }
    },
    {
        path:"/affectation-groupe",
        name:"affectation",
        component:Autorisation
    },

    // {
    //     path: '/groupe',
    //     name: "Groupe",
    //     component: Groupe,
    //     meta: { requiresAuth: true }
    // },
    {
        path: '/mon-equipe',
        name: "MonEquipe",
        component: MonEquipe,
        meta: { requiresAuth: true }
    },
    {
        path: '/photo-Profil',
        name: "photoProfil",
        component: photoProfil,
        meta: { requiresAuth: true }
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
        meta: { requiresAuth: true },
        component: GestionCF
    },
    {
        path: '/detail-cf/:id',
        name:"DetailCF",
        component: DetailCF,
        meta: { requiresAuth: true }
    },
   
]

export default AuthRoutes;

import addGroupe1 from "@/pages/auth/groupe/addGroupe1.vue";
import DetailGroupe1 from "@/pages/auth/groupe/DetailGroupe1.vue";
import menu from "@/pages/auth/Module_Menu/menu.vue"; 
import moduleDuProjet from "@/pages/auth/Module_Menu/moduleDuProjet.vue"; 
import Autorisation from "@/pages/auth/autorisation/Autorisation.vue";
import listeAutorisation from "@/pages/auth/autorisation/listeAutorisation.vue";
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
import TableauBordGestionVehicule1 from "@/gestionDesModule/TableauBordGestionVehicule.vue";
import ServiceCF from "@/pages/gestionCF/Service/ServiceCF";
import AffectationCFAService from "@/pages/gestionCF/Service/AffectationCFAService";
import DetailServiceCF from "@/pages/gestionCF/DetailServiceCF";
import AffectationServiceCfaUA from "@/pages/gestionCF/Service/AffectationServiceCfaUA";

const AuthRoutes = [
    {
        path: '/affecation-service-cf-ua/:id',
        name:"AffectationServiceCfaUA",
        component: AffectationServiceCfaUA
    },
    {
        path: '/detail-service-cf',
        name:"DetailServiceCF",
        component: DetailServiceCF
    },
    {
        path: '/affectation-cf-service',
        name:"AffectationCFAService",
        component: AffectationCFAService
    },
    {
        path: '/service-cf',
        name:"ServiceCF",
        component: ServiceCF
    },
    {
        path: '/TableauBordGestionVehicule',
       name:"TableauBordGestionVehicule1",
       
       component: TableauBordGestionVehicule1
    },
    {
        path: '/TableauBordGestionVehicule/:id',
       name:"TableauBordGestionVehicule",
       
       component: TableauBordGestionVehicule
    },
    {
    path:"/module",
    name:"module",
   
    component:moduleDuProjet
    },
    {
        path:"/menus",
        name:"menus",
       
        component:menu
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
      
        
    },
    {
        path:"/liste-affectation",
        name:"liste_affectation",
        component:listeAutorisation
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
    {
        path: '/detail-groupe/:id',
        name:"Detail_groupe",
        component: DetailGroupe1,
        meta: { requiresAuth: true }
    },
    {
        path: 'add-groupe',
        name:"add_groupe",
        component: addGroupe1,
        meta: { requiresAuth: true }
    },
    
   
]

export default AuthRoutes;

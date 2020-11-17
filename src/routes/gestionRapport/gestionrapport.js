import suiviDesEntreprise from "../../pages/Gestion_des_Rapports/suiviDesEntreprise";

import ficheSuivi from "../../pages/Gestion_des_Rapports/ficheSuivi";

import editerFicheRealiteServiceFait from "../../pages/Gestion_des_Rapports/editerFicheRealiteServiceFait";
import suiviMarcheDesProjets from "../../pages/Gestion_des_Rapports/marcheHorsSib/suiviMarcheDesProjets.vue";
import suiviMarcheDesProjetParTypeMarche from "../../pages/Gestion_des_Rapports/marcheHorsSib/suiviMarcheDesProjetParTypeMarche";
import etatRecapitulative from "../../pages/Gestion_des_Rapports/marcheHorsSib/etatRecapitulative.vue";

const gestionrapport =[
    {
        path:"/etat-Recapitulative",
        name:"etatRecapitulative",
        component:etatRecapitulative
    },
    {
        path:"/Suivi-Marche",
        name:"suiviMarcheDesProjetParTypeMarche",
        component:suiviMarcheDesProjetParTypeMarche
    },
    {
        path:"/editerFicheRealiteServiceFait/:id",
        name:"editerFicheRealiteServiceFait",
        component:editerFicheRealiteServiceFait
    },
    {
        path:"/Suivi-Marche-Projet",
        name:"suiviMarcheDesProjets",
        component:suiviMarcheDesProjets
    },
    {
        path:"/Suivi-De-l-Entreprise",
        name:"suiviDesEntreprise",
        component:suiviDesEntreprise
    },

    {
        path: "/FicheSuivi",
        name: "ficheSuivi",
        component: ficheSuivi
      }
      
]
export default gestionrapport;
import suiviDesEntreprise from "../../pages/Gestion_des_Rapports/suiviDesEntreprise";
import suiviMarcheDesProjets from "../../pages/Gestion_des_Rapports/marcheHorsSib/suiviMarcheDesProjets.vue";
const gestionrapport =[
    {
        path:"/Suivi-Marche-Projet",
        name:"suiviMarcheDesProjets",
        component:suiviMarcheDesProjets
    },
    {
        path:"/Suivi-De-l-Entreprise",
        name:"suiviDesEntreprise",
        component:suiviDesEntreprise
    }
]
export default gestionrapport;
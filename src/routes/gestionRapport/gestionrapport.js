import suiviDesEntreprise from "../../pages/Gestion_des_Rapports/suiviDesEntreprise";
import ficheSuivi from "../../pages/Gestion_des_Rapports/ficheSuivi";
const gestionrapport =[
   
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
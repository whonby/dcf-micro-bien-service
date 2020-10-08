import marche from "../../pages/Hors_sib/marche_hors_sib/marche";
import ajouterMarcheHorSib from "../../pages/Hors_sib/marche_hors_sib/ajouterMarcheHorSib.vue";
import modifierMarcheHorSib from "../../pages/Hors_sib/marche_hors_sib/modifierMarcheHorSib.vue"
const marcheHorSibRoutes =[
  
    {
        path:"/creation-marche-hors-sib",
        name:"GestionMarcheHorSib",
        component:marche
    },
    {
        path:"/ajouter-marche-hors-sib",
        name:"ajouter_hors_sib",
        component:ajouterMarcheHorSib
    },
    {
        path:"/modifier-marche-hors-sib/:id",
        name:"modifier_hors_sib",
        component:modifierMarcheHorSib
    }
]
export default marcheHorSibRoutes;
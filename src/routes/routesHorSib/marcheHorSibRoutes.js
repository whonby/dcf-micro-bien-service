import marche from "../../pages/Hors_sib/marche_hors_sib/marche";
import ajouterMarcheHorSib from "../../pages/Hors_sib/marche_hors_sib/ajouterMarcheHorSib.vue";
import modifierMarcheHorSib from "../../pages/Hors_sib/marche_hors_sib/modifierMarcheHorSib.vue"
import detailMarcheHorsSib from "../../pages/Hors_sib/marche_hors_sib/detailMarcheHorsSib.vue";
import marche_hors_sib from "../../pages/Hors_sib/biens_service/marche_hors_sib.vue";
import tableau_de_bord_biens_service from "../../pages/Hors_sib/biens_service/tableau_de_bord_biens_service.vue";
import GestionMarcheHorsib from "../../pages/Hors_sib/marche_hors_sib/GestionMarcheHorsib.vue"
const marcheHorSibRoutes =[
  
    {
        path:"/creation-marche-hors-sib",
        name:"GestionMarcheHorSib",
        component:marche
    },
    {
        path:"/cerstion-marche-hors-sib",
        name:"gestion_marche",
        component:GestionMarcheHorsib
    },
    {
        path:"/tableau_bord_biens_service_hors_sib",
        name:"tableau_de_bord_hors",
        component:tableau_de_bord_biens_service
    },
    {
        path:"/suivi-marche-hors-sib",
        name:"suivi_marhe",
        component:marche_hors_sib
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
    },
    {
        path:"/detail-hors-sib/:id",
        name:"detail_hors_sib",
        component:detailMarcheHorsSib
    }
]
export default marcheHorSibRoutes;
import marche from "../../pages/Hors_sib/marche_hors_sib/marche";
import ajouterMarcheHorSib from "../../pages/Hors_sib/marche_hors_sib/ajouterMarcheHorSib.vue";
import modifierMarcheHorSib from "../../pages/Hors_sib/marche_hors_sib/modifierMarcheHorSib.vue"
import detailMarcheHorsSib from "../../pages/Hors_sib/marche_hors_sib/detailMarcheHorsSib.vue";
import marche_hors_sib from "../../pages/Hors_sib/biens_service/marche_hors_sib.vue";
import tableau_de_bord_biens_service from "../../pages/Hors_sib/biens_service/tableau_de_bord_biens_service.vue";
import GestionMarcheHorsib from "../../pages/Hors_sib/marche_hors_sib/GestionMarcheHorsib.vue"
import marcheHorSibInvestissement from "../../pages/Hors_sib/marche_hors_sib_investissement/marcheHorSibInvestissement.vue"
import tableauDeBorde from "../../pages/Hors_sib/marche_hors_sib_investissement/tableauDeBorde.vue";
import listeMarcheInvestissementHS from "../../pages/Hors_sib/marche_hors_sib_investissement/ExecutionInvestissement/listeMarcheInvestissementExecutionHS.vue";
import listeMarcheBienEtServiceHS from "../../pages/Hors_sib/marche_hors_sib_investissement/ExecutionInvestissement/listeMarcheBienEtServiceExecutionHS.vue";
const marcheHorSibRoutes =[
    {
        path:"/listeMarcheBienEtServiceHS",
        name:"listeMarcheBienEtServiceHS",
        component:listeMarcheBienEtServiceHS
    },
    {
        path:"/listeMarcheInvestissementHS",
        name:"listeMarcheInvestissementHS",
        component:listeMarcheInvestissementHS
    },
    {
        path:"/creation-marche-hors-sib",
        name:"GestionMarcheHorSib",
        component:marche
    },
    {
        path:"/creation-marche-hors-sib-investissement",
        name:"marche_hors_sib_investissement",
        component:marcheHorSibInvestissement
    },
    {
        path:"/tableau-marche-hors-sib-investissement",
        name:"tableau_de_bors_sib_investissement",
        component:tableauDeBorde
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
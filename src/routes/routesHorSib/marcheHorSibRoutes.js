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
import recrutementPersonnelHorsSib from "../../pages/Hors_sib/dossierPersonnel/recrutementPersonnel.vue";
import ListesPersonnel from "../../pages/Hors_sib/dossierPersonnel/ListesPersonnel.vue";
import detailExecutionHorsSib from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierPrincipal/detailExecutionHorsSib.vue';
import ajouterServiceRealiteHorsSib from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierRealiteServiceFait/ajouterServiceRealiteHorsSib.vue';
import OpDefinitifDirect from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DossierOrdrePaiement/AjouterOpDefinitif.vue';
import ajouterOpProvisoire from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DossierOrdrePaiement/DossierOpProvisoire/ajouterOpProvisoire.vue';
import decompteProvisoire from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierDecompte/decomptePro.vue';

import detailOpdefinitif from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DetailOrdrePaiement/detailOpdefinitif.vue';

import ModifierServiceRealiteHorsSib from "../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierRealiteServiceFait/ModifierServiceRealiteHorsSib.vue"


import detailOpProvisoire from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DetailOrdrePaiement/detailOpProvisoire';

import detailOpAnnulation from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DetailOrdrePaiement/detailOpAnnulation';

import AjouterOpProvDefinitif from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DossierOrdrePaiement/DossierOpProvisoire/AjouterOpProvDefinitif.vue';
import AjouterServiceRealiteOpProvisoire from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierRealiteServiceFait/AjouterServiceRealiteOpProvisoire';
import detailExecutionOpDirect from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierPrincipal/detailExecutionOpDirect.vue';
import detailExecutionOpInDirect from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierPrincipal/detailExecutionOpInDirect.vue';
const marcheHorSibRoutes =[

    {
        path: "/decompte_Provisoire",
        name: "decompteProvisoire",
        component: decompteProvisoire
    },
    {
        path: "/detailExecutionOpInDirect/:id",
        name: "detailExecutionOpInDirect",
        component: detailExecutionOpInDirect
    },
    {
        path: "/detailExecutionOpDirect/:id",
        name: "detailExecutionOpDirect",
        component: detailExecutionOpDirect
    },
    {
        path: "/AjouterOpProvDefinitif/:id",
        name: "AjouterOpProvDefinitif",
        component: AjouterOpProvDefinitif
    },
    {
        path: "/AjouterServiceRealiteOpProvisoire/:id",
        name: "AjouterServiceRealiteOpProvisoire",
        component: AjouterServiceRealiteOpProvisoire
    },
    {
        path: "/detailOpProvisoire/:id",
        name: "detailOpProvisoire",
        component: detailOpProvisoire
    },

    {
        path: "/detailOpAnnulation/:id",
        name: "detailOpAnnulation",
        component: detailOpAnnulation
    },


    {
        path:"/ModifierServiceRealiteHorsSib/:id",
        name:"ModifierServiceRealiteHorsSib",
        component:ModifierServiceRealiteHorsSib
    },
    {
        path: "/detailOpdefinitif/:id",
        name: "detailOpdefinitif",
        component: detailOpdefinitif
    },
    {
        path: "/ajouterOpProvisoire/:id",
        name: "ajouterOpProvisoire",
        component: ajouterOpProvisoire
    },
    {
        path: "/OpDefinitifDirect/:id",
        name: "OpDefinitifDirect",
        component: OpDefinitifDirect
    },
    {
        path: "/ajouterServiceRealiteHorsSib/:id",
        name: "ajouterServiceRealiteHorsSib",
        component: ajouterServiceRealiteHorsSib
    },
    {
        path: '/detailExecutionHorsSib/:id',
        name: "detailExecutionHorsSib",
        component: detailExecutionHorsSib
    },
    {
        path:"/ListesPersonnel",
        name:"ListesPersonnel",
        component:ListesPersonnel
    },
    {
        path:"/recrutementPersonnelHorsSib",
        name:"recrutementPersonnelHorsSib",
        component:recrutementPersonnelHorsSib
    },
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
        path:"/gestion-marche-hors-sib",
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
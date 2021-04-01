import marche from "../../pages/Hors_sib/marche_hors_sib/marche";
import groupeMarcheParUa from "../../pages/Hors_sib/marche_hors_sib/groupeMarcheParUa.vue";
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
import ListesPersonnel from "../../pages/Hors_sib/dossierPersonnel/groupePersonnelParUa.vue";
import ListesPersonnelParUa from "../../pages/Hors_sib/dossierPersonnel/ListesPersonnel.vue";
import detailExecutionHorsSib from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierPrincipal/detailExecutionHorsSib.vue';
import ajouterOpDefinitif from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DossierOrdrePaiement/ajouterOpDefinitifDirect.vue';
import ajouterOpDefinitifPro from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DossierOrdrePaiement/DossierOpProvisoire/ajouterOpDefinitifPro.vue';
import OpDefinitifDirect from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DossierOrdrePaiement/AjouterOpDefinitif.vue';
import ajouterOpProvisoire from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DossierOrdrePaiement/DossierOpProvisoire/ajouterOpProvisoire.vue';
// import decompteProvisoire from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierDecompte/decomptePro.vue';
import ReceptionDesMarches from "../../pages/Hors_sib/marche_hors_sib_investissement/ReceptionDesMarche/ReceptionDesMarches.vue"
import ReceptionDesLots from "../../pages/Hors_sib/marche_hors_sib_investissement/ReceptionDesMarche/ReceptionDesLots.vue"
import listeDesReceptionDesLot from "../../pages/Hors_sib/marche_hors_sib_investissement/ReceptionDesMarche/listeDesReceptionDesLot.vue"

import detailOpdefinitif from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DetailOrdrePaiement/detailOpdefinitif.vue';

// import ModifierServiceRealiteHorsSib from "../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierRealiteServiceFait/ModifierServiceRealiteHorsSib.vue"


import detailOpProvisoire from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DetailOrdrePaiement/detailOpProvisoire';

import detailOpAnnulation from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DetailOrdrePaiement/detailOpAnnulation';

import AjouterOpProvDefinitif from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/DossierOrdrePaiement/DossierOpProvisoire/AjouterOpProvDefinitif.vue';
// import AjouterServiceRealiteOpProvisoire from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierRealiteServiceFait/AjouterServiceRealiteOpProvisoire';
import detailExecutionOpDirect from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierPrincipal/detailExecutionOpDirect.vue';
import detailExecutionOpInDirect from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierPrincipal/detailExecutionOpInDirect.vue';
import detailMarcheParEntrepriseHors from '../../pages/Hors_sib/marcheParEntreprise/detailMarcheParEntreprise.vue';
import cycleDeChaqueLotEnExecution from '../../pages/Hors_sib/marche_hors_sib_investissement/AfficheExecutionDesMarches/cycleDeChaqueLotEnExecution';
import AjouterDecompte from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierDecompte/AjouterDecompte.vue';
import AjouterDecomptePro from '../../pages/Hors_sib/biens_service/DossierExecutionHorsSib/dossierDecompte/AjouterDecomptePro.vue';
import DetailGreAGre from '../../pages/bien_service/DossierProcedureGreAGre_Convention/DetailGreAGre.vue'
import DetailGreHorsSib from '../../pages/Hors_sib/marche_hors_sib/DetailGreHorsSib.vue'

import AjoutPersonnelSansContrat from "../../pages/Hors_sib/dossierPersonnel/AjoutPersonnelSansContrat.vue";
import AjoutPersonnelAvecContrat from "../../pages/Hors_sib/dossierPersonnel/AjoutPersonnelAvecContrat.vue";
const marcheHorSibRoutes =[
    {
        path:"/groupeMarcheParUa",
        name:"groupeMarcheParUa",
        component:groupeMarcheParUa
    },
    {
        path: "/AjoutPersonnelAvecContrat",
        name: "AjoutPersonnelAvecContrat",
        component: AjoutPersonnelAvecContrat
    },
    {
        path: "/AjoutPersonnelSansContrat",
        name: "AjoutPersonnelSansContrat",
        component: AjoutPersonnelSansContrat
    },
    {
        path: "/liste-Reception-Des-Lots",
        name: "listeDesReceptionDesLot",
        component: listeDesReceptionDesLot
    },
    {
        path: "/ListesPersonnelParUa/:id",
        name: "ListesPersonnelParUa",
        component: ListesPersonnelParUa
    },
    {
        path: "/Reception-Des-Lots/:id",
        name: "ReceptionDesLots",
        component: ReceptionDesLots
    },
    {
        path: "/Ajouter-Decompte/:id",
        name: "AjouterDecomptePro",
        component: AjouterDecomptePro
    },
    {
        path: "/Ajouter-Decompte/:id",
        name: "AjouterDecompte",
        component: AjouterDecompte
    },
    {
        path: '/Suivi-des-marches/:id',
        name: "cycleDeChaqueLotEnExecution",
        component: cycleDeChaqueLotEnExecution
    },
    {
        path: '/detail-Marche-Par-Entreprise/:id',
        name: "detailMarcheParEntrepriseHors",
        component: detailMarcheParEntrepriseHors
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
    // {
    //     path: "/AjouterServiceRealiteOpProvisoire/:id",
    //     name: "AjouterServiceRealiteOpProvisoire",
    //     component: AjouterServiceRealiteOpProvisoire
    // },
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


    // {
    //     path:"/ModifierServiceRealiteHorsSib/:id",
    //     name:"ModifierServiceRealiteHorsSib",
    //     component:ModifierServiceRealiteHorsSib
    // },
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
        path: "/ajouter-Op-Definitif/:id",
        name: "ajouterOpDefinitifPro",
        component: ajouterOpDefinitifPro
    },
    {
        path: "/ajouter-Op-Definitif/:id",
        name: "ajouterOpDefinitif",
        component: ajouterOpDefinitif
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
        path:"/Reception-Des-Marches",
        name:"ReceptionDesMarches",
        component:ReceptionDesMarches
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
    },
    {
        path:"/detail-gre-a-gre/:id",
        name:"detailGre",
        component:DetailGreAGre
    },
    {
        path:"/detail-gre-a-gre/:id",
        name:"detailGreAGre",
        component:DetailGreHorsSib
    }

]
export default marcheHorSibRoutes;
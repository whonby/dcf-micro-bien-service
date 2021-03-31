import suiviDesEntreprise from "../../pages/Gestion_des_Rapports/suiviDesEntreprise";

import ficheSuivi from "../../pages/Gestion_des_Rapports/ficheSuivi";
import EtatExecutionMarche from "../../pages/Gestion_des_Rapports/EtatExecutionMarche";


import tableaudebordbudg from "../../pages/bien_service/Tableau_de_bord/tableaudebordbudg.vue";
import tableaubordmarch from "../../pages/bien_service/Tableau_de_bord/tableaubordmarch.vue";

import editerFicheRealiteServiceFait from "../../pages/Gestion_des_Rapports/editerFicheRealiteServiceFait";
import suiviMarcheDesProjets from "../../pages/Gestion_des_Rapports/marcheHorsSib/suiviMarcheDesProjets.vue";
import suiviMarcheDesProjetParTypeMarche from "../../pages/Gestion_des_Rapports/marcheHorsSib/suiviMarcheDesProjetParTypeMarche";
import etatRecapitulative from "../../pages/Gestion_des_Rapports/marcheHorsSib/etatRecapitulative.vue";
import FicheAnnexeDeControle from "../../pages/Gestion_des_Rapports/FicheAnnexeDeControle";
import ficheSuiviGlobalMarche from "../../pages/Gestion_des_Rapports/marcheHorsSib/ficheSuiviGlobalMarche";
import suiviEvaluationEntreprise from "../../pages/Gestion_des_Rapports/suiviEvaluationEntreprise.vue";
import OrdrePaiementParPeriode from "../../pages/Gestion_des_Rapports/BudgetExecuteHorsSib/OrdrePaiementParPeriode.vue";
import OrdrePaiementParRegie from "../../pages/Gestion_des_Rapports/BudgetExecuteHorsSib/OrdrePaiementParRegie.vue";
import SituationExecutionLigne from "../../pages/Gestion_des_Rapports/BudgetExecuteHorsSib/SituationExecutionLigne.vue";
import SituationExecutionRecapProjet from "../../pages/Gestion_des_Rapports/BudgetExecuteHorsSib/SituationExecutionRecapProjet.vue";
import SituationExecutionRecapRegie from "../../pages/Gestion_des_Rapports/BudgetExecuteHorsSib/SituationExecutionRecapRegie.vue";
import SituationExecution from "../../pages/Gestion_des_Rapports/BudgetExecuteHorsSib/SituationExecution.vue";
import SituationExecutionBailActi from "../../pages/Gestion_des_Rapports/BudgetExecuteHorsSib/SituationExecutionBailActi.vue";
const gestionrapport = [

    {
        path: "/SituationExecutionBailActi",
        name: "SituationExecutionBailActi",
        component: SituationExecutionBailActi
    },
    {
        path: "/OrdrePaiementParPeriode",
        name: "OrdrePaiementParPeriode",
        component: OrdrePaiementParPeriode
    },
    {
        path: "/SituationExecution",
        name: "SituationExecution",
        component: SituationExecution
    },
    {
        path: "/OrdrePaiementParRegie",
        name: "OrdrePaiementParRegie",
        component: OrdrePaiementParRegie
    },

    {
        path: "/SituationExecutionLigne",
        name: "SituationExecutionLigne",
        component: SituationExecutionLigne
    },

    {
        path: "/SituationExecutionRecapProjet",
        name: "SituationExecutionRecapProjet",
        component: SituationExecutionRecapProjet
    },

    {
        path: "/SituationExecutionRecapRegie",
        name: "SituationExecutionRecapRegie",
        component: SituationExecutionRecapRegie
    },
    {
        path: "/EtatExecutionMarche",
        name: "etatExecutionMarche",
        component: EtatExecutionMarche
    },
    {
        path: "/tableaudebordbudg",
        name: "tableaudebordbudg",
        component: tableaudebordbudg
    },
    {
        path: "/tableaubordmarch",
        name: "tableaubordmarch",
        component: tableaubordmarch
    },
    {
        path: "/suiviEvaluationEntreprise",
        name: "suiviEvaluationEntreprise",
        component: suiviEvaluationEntreprise
    },
    {
        path: "/ficheSuiviGlobalMarche",
        name: "ficheSuiviGlobalMarche",
        component: ficheSuiviGlobalMarche
    },
    {
        path: "/etat-Recapitulative",
        name: "etatRecapitulative",
        component: etatRecapitulative
    },
    {
        path: "/Suivi-Marche",
        name: "suiviMarcheDesProjetParTypeMarche",
        component: suiviMarcheDesProjetParTypeMarche
    },
    {
        path: "/FicheAnnexeDeControle/:id",
        name: "FicheAnnexeDeControle",
        component: FicheAnnexeDeControle
    },
    {
        path: "/editerFicheRealiteServiceFait/:id",
        name: "editerFicheRealiteServiceFait",
        component: editerFicheRealiteServiceFait
    },
    {
        path: "/Suivi-Marche-Projet",
        name: "suiviMarcheDesProjets",
        component: suiviMarcheDesProjets
    },
    {
        path: "/Suivi-De-l-Entreprise",
        name: "suiviDesEntreprise",
        component: suiviDesEntreprise
    },

    {
        path: "/FicheSuivi/:id",
        name: "ficheSuivi",
        component: ficheSuivi
    }

]
export default gestionrapport;
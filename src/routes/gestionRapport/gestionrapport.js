import suiviDesEntreprise from "../../pages/Gestion_des_Rapports/suiviDesEntreprise";

import ficheSuivi from "../../pages/Gestion_des_Rapports/ficheSuivi";
import tableauPluriannuel from "../../pages/Gestion_des_Rapports/tableauPluriannuel";


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
const gestionrapport = [

    {
        path: "/OrdrePaiementParPeriode",
        name: "OrdrePaiementParPeriode",
        component: OrdrePaiementParPeriode
    },
    {
        path: "/OrdrePaiementParRegie",
        name: "OrdrePaiementParRegie",
        component: OrdrePaiementParRegie
    },
    {
        path: "/tableauPluriannuel",
        name: "tableauPluriannuel",
        component: tableauPluriannuel
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
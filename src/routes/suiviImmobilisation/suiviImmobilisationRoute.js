import Famille from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Famille.vue";
import bilanUaEquipeNonEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/BilanUaEquipeouNon/bilanUaEquipe.vue";
import Service from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Service.vue";
import Amortissement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Amortissement.vue";
import AmortissementService from "../../pages/suivi_control_budgetaires/suiviImmobilisation/AmortissementService.vue";
import Immobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/docAffectationImmo/listeDesAffectation.vue";
import AjouterImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/AffectationImmobilisation.vue";
import ModifierImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/ModifierImmobilisation.vue";
// import immobilisationParService from "../../pages/suivi_control_budgetaires/suiviImmobilisation/immobilisationParService.vue";
// import VoirImmoParService from "../../pages/suivi_control_budgetaires/suiviImmobilisation/VoirImmoParService.vue";
import TableauBordImmo from "../../pages/suivi_control_budgetaires/suiviImmobilisation/TableauBordImmo.vue";
import TableauBordImmo2 from "../../pages/suivi_control_budgetaires/suiviImmobilisation/TableauBordImmo2.vue";
import RechercheTauxParUniteAdm from "../../pages/suivi_control_budgetaires/suiviImmobilisation/RechercheTauxParUniteAdm.vue";
import DetailImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/DetailImmobilisation.vue";
import besionImmolisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/besionImmolisation.vue";
import listeEquipement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeEquipement.vue";
import listeBesoinParUniteAdmin from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeBesoinParUniteAdmin.vue";
//import listeImmobilisationParUa from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeImmobilisationParUa.vue";
// import listeImmoParServiceParAgent from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeImmoParServiceParAgent.vue";
// import TauxEquipementMinistère from "../../pages/suivi_control_budgetaires/suiviImmobilisation/TauxEquipementMinistère.vue";
import listeActeurEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeActeurEquipe.vue";
import listeStructurePlusEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeStructurePlusEquipe.vue";
import listeStructureMoinEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeStructureMoinEquipe.vue";
import simulationAmortissement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/simulationAmortissement.vue";
//import normeImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/normeImmobilisation.vue"
import ReferentielDesPrix from "../../pages/suivi_control_budgetaires/suiviImmobilisation/ReferentielDesPrix.vue"
import NormeEquipement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeNormeEquipement.vue"
import stockageArticle from "../../pages/suivi_control_budgetaires/suiviImmobilisation/stockageEquipement.vue"
import DetailBesoinImmo from '../../pages/suivi_control_budgetaires/suiviImmobilisation/DetailBesoinImmo.vue';
import StockArticles from '../../pages/suivi_control_budgetaires/suiviImmobilisation/StockArticles.vue'
import demandeEquipement from '../../pages/suivi_control_budgetaires/suiviImmobilisation/demandeImmobilisat.vue'
import ficheAnalyse from '../../pages/suivi_control_budgetaires/suiviImmobilisation/resultatFinal.vue'
import listeBesoinRealise from '../../pages/suivi_control_budgetaires/suiviImmobilisation/listeBesoinRealise.vue'
import historiqueDemande from '../../pages/suivi_control_budgetaires/suiviImmobilisation/historiqueDemande.vue'
import EtatImmobilisation from '../../pages/suivi_control_budgetaires/suiviImmobilisation/EtatImmobilisation.vue'
import CauseInactivite from '../../pages/suivi_control_budgetaires/suiviImmobilisation/CauseInactivite.vue'
import natureEntre from '../../pages/suivi_control_budgetaires/suiviImmobilisation/natureEntre.vue'
import NormeImmo from '../../pages/suivi_control_budgetaires/suiviImmobilisation/GrpeNorme/NormeImmoPrincipal.vue'
import historisqueAffection from '../../pages/suivi_control_budgetaires/suiviImmobilisation/docAffectationImmo/ficheDemandeEquipement.vue'
import ListeUaTauxEquipement25 from '../../pages/suivi_control_budgetaires/suiviImmobilisation/BilanUaEquipeouNon/ListeUaTauxEquipement0a25.vue'
import ListeUaTauxEquipement50 from '../../pages/suivi_control_budgetaires/suiviImmobilisation/BilanUaEquipeouNon/ListeUaTauxEquipement25a50.vue'
import ListeUaTauxEquipement75 from '../../pages/suivi_control_budgetaires/suiviImmobilisation/BilanUaEquipeouNon/ListeUaTauxEquipement50a75.vue'
import ListeUaTauxEquipement100 from '../../pages/suivi_control_budgetaires/suiviImmobilisation/BilanUaEquipeouNon/ListeUaTauxEquipement75a100.vue'

const suiviImmobilisationRoutes = [
  {
    path: "/TauxEquipementparUa25/:id",
    name: "ListeUaTauxEquipement25",
    component: ListeUaTauxEquipement25
  },
  {
    path: "/TauxEquipementparUa50/:id",
    name: "ListeUaTauxEquipement50",
    component: ListeUaTauxEquipement50
  },
  {
    path: "/TauxEquipementparUa75/:id",
    name: "ListeUaTauxEquipement75",
    component: ListeUaTauxEquipement75
  },
  {
    path: "/TauxEquipementparUa100/:id",
    name: "ListeUaTauxEquipement100",
    component: ListeUaTauxEquipement100
  },
  {
    path: "/bilan-Ua-Equipe-NonEquipe",
    name: "bilanUaEquipeNonEquipe",
    component: bilanUaEquipeNonEquipe
  },
  {
    path: "/AmortissementService/:id",
    name: "AmortissementService",
    component: AmortissementService
  },
  {
    path: "/historisque-Affection",
    name: "historisqueAffection",
    component: historisqueAffection
  },
  {
    path: "/equipement-type",
    name: "NormeImmo",
    component: NormeImmo
  },
  {
    path: "/Etat-Immobilisation",
    name: "EtatImmobilisation",
    component: EtatImmobilisation
  },
  {
    path: "/Cause-Inactivite",
    name: "CauseInactivite",
    component: CauseInactivite
  },
  {
    path: "/nature-Entre",
    name: "natureEntre",
    component: natureEntre
  },








  {
    path: "/historique-Demande",
    name: "historiqueDemande",
    component: historiqueDemande
  },
  {
    path: "/liste-Besoin-Realise",
    name: "listeBesoinRealise",
    component: listeBesoinRealise
  },
  {
    path: "/ficheAnalyse",
    name: "ficheAnalyse",
    component: ficheAnalyse
  },
  {
    path: "/demande-Equipement", 
    name: "demandeEquipement",
    component: demandeEquipement
  },
  {
    path: "/StockArticles",
    name: "StockArticles",
    component: StockArticles
  },
  {
    path: "/Detail-Besoin/:id_Besoin",
    name: "DetailBesoinImmo",
    component: DetailBesoinImmo
  },
  {
    path: "/stockageArticle",
    name: "stockageArticle",
    component: stockageArticle
  },
  {
    path: "/ReferentielDesPrix",
    name: "ReferentielDesPrix",
    component: ReferentielDesPrix
  },
  {
    path: "/NormeEquipement",
    name: "NormeEquipement",
    component: NormeEquipement
  },
  {
    path: "/simulationAmortissement",
    name: "simulationAmortissement",
    component: simulationAmortissement
  },
  {
    path: "/liste-Structure-Moin-Equipe",
    name: "listeStructureMoinEquipe",
    component: listeStructureMoinEquipe
  },
  {
    path: "/liste-Structure-Plus-Equipe",
    name: "listeStructurePlusEquipe",
    component: listeStructurePlusEquipe
  },
  {
    path: "/listeActeurEquipe", 
    name: "listeActeurEquipe",
    component: listeActeurEquipe
  },
  // {
    
  //   path: "/Taux-Equipement-Ministère",
  //   name: "TauxEquipementMinistère",
  //   component: TauxEquipementMinistère
  // },
  // {
  //   path: "/liste-immo-par-service-et-agent",
  //   name: "listeImmoParServiceParAgent",
  //   component: listeImmoParServiceParAgent
  // },
  // {
  //   path: "/liste-immo-par-ua",
  //   name: "listeImmobilisationParUa",
  //   component: listeImmobilisationParUa
  // },
  {
    path: "/liste-Besoin-par-ua",
    name: "listeBesoinParUniteAdmin",
    component: listeBesoinParUniteAdmin
  },
  {
    path: "/liste-Equipement",
    name: "listeEquipement",
    component: listeEquipement
  },
  {
    path: "/besion-Immolisation",
    name: "besionImmolisation",
    component: besionImmolisation
  },
  {
    path: "/famille",
    name: "famille",
    component: Famille
  },

  {
    path: "/service",
    name: "service",
    component: Service
  },
  {
    path: "/amortissement/:id",
    name: "amortissement",
    component: Amortissement
  },
  {
    path: "/immobilisation",
    name: "immobilisation",
    component: Immobilisation
  },
  {
    path: "/Ajouter_immobilisation",
    name: "AjouterImmobilisation",
    component: AjouterImmobilisation
  },
  {
    path: "/Modifier_immobilisation/:id",
    name: "formulaireModifierImmobilisation",
    component: ModifierImmobilisation
  },
  // {
  //   path: "/Recherche_immo_par_service",
  //   name: "RechercheImmoParService",
  //   component: immobilisationParService
  // },
  // {
  //   path: "/Voir_immo/:id",
  //   name: "afficherImmobilisation",
  //   component: VoirImmoParService
  // },
  {
    path: "/Tableau-Bord-Immobilisation",
    name: "TableauBordImmo2",
    component: TableauBordImmo2
  },
  {
    path: "/TableauBordImmo",
    name: "TableauBordImmo",
    component: TableauBordImmo
  },

  {
    path: "/Recherche-Taux-UniteAd",
    name: "RechercheTauxUniteAd",
    component: RechercheTauxParUniteAdm
  },
  
  
  //detail immobilisation
  {
    path: "/Detail-Immobilisation/:id_immobilisation",
    name: "Detailimmobilisation",
    component: DetailImmobilisation
  }
];

export default suiviImmobilisationRoutes;

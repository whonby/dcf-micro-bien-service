import listeUaDeComptabiliteMatiere from "../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/dossierListeUaDeComptabilteMatier/listeUaDeComptabiliteMatiere.vue";
import Famille from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Famille.vue";
import bilanUaEquipeNonEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/BilanUaEquipeouNon/bilanUaEquipe.vue";
import Service from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Service.vue";
import Amortissement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/Amortissement.vue";
import AmortissementService from "../../pages/suivi_control_budgetaires/suiviImmobilisation/AmortissementService.vue";
import Immobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/docAffectationImmo/listeDesAffectation.vue";
import AjouterImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/AffectationImmobilisation.vue";
import ModifierImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/ModifierImmobilisation.vue";
import TableauBordImmo from "../../pages/suivi_control_budgetaires/suiviImmobilisation/TableauBordImmo.vue";
import TableauBordImmo2 from "../../pages/suivi_control_budgetaires/suiviImmobilisation/TableauBordImmo2.vue";
import RechercheTauxParUniteAdm from "../../pages/suivi_control_budgetaires/suiviImmobilisation/RechercheTauxParUniteAdm.vue";
import DetailImmobilisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/DetailImmobilisation.vue";
import besionImmolisation from "../../pages/suivi_control_budgetaires/suiviImmobilisation/besionImmolisation.vue";
import listeEquipement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeEquipement.vue";
import listeBesoinParUniteAdmin from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeBesoinParUniteAdmin.vue";
import listeActeurEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeActeurEquipe.vue";
import listeStructurePlusEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeStructurePlusEquipe.vue";
import listeStructureMoinEquipe from "../../pages/suivi_control_budgetaires/suiviImmobilisation/listeStructureMoinEquipe.vue";
import simulationAmortissement from "../../pages/suivi_control_budgetaires/suiviImmobilisation/simulationAmortissement.vue";
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
import detailTauxEquipement from '../../pages/suivi_control_budgetaires/suiviImmobilisation/BilanUaEquipeouNon/detailTauxEquipement.vue'
import marqueVehicules from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/marqueVehicules.vue'
import ModeleVehicules from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeModel/ModeleVehicules.vue'
import TypeEnergie from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/TypeEnergie.vue'
import TypeEntretien from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/TypeEntretien.vue'
import TypeVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/TypeVehicule.vue'
import TypeReparation from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/TypeReparation.vue'
import AjouterFicheVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeVehicule/AjouterFicheVehicule.vue'
import ModifierFicheVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeVehicule/ModifierFicheVehicule.vue'
import DetailVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeVehicule/DetailVehicule.vue'
import affectationVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeAffectation/affectationVehicule.vue'
import DetaiAffectationVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeAffectation/DetaiAffectationVehicule.vue'
import Transmission from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/Transmission.vue'
import Appreciation from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/Appreciation.vue'
import AjouterReparationVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeReparationVehicule/AjouterReparationVehicule.vue'
import AjouterReparationSibVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeReparationVehicule/AjouterReparationSibVehicule.vue'
import ModifierReparationVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeReparationVehicule/ModifierReparationVehicule.vue'
import TableauBordGestionVehicule from '../../gestionDesModule/TableauBordGestionVehicule.vue'
import ExecutionReparationVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/ExecutionReparation/ExecutReparationVehicule.vue'

// import Login from '../../pages/auth/Login.vue'
// import Logout from '../../pages/auth/Logout.vue'

// ROUTE COMPTABILITE MATIERE A FAIRE

import AjouterEntrePatrimoine from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/gpeGestionStock/AjouterEntrePatrimoine.vue'


import ficheReparationVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/rapportVehicule/ficheReparationVehicule.vue'

import ModifierEntrePatrimoine from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/gpeGestionStock/ModifierEntrePatrimoine.vue'



import AjouterEntrePatrimoineVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/grpeStockVehicule/AjouterEntrePatrimoineVehicule.vue'


import ModifierEntrePatrimoineVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/grpeStockVehicule/ModifierEntrePatrimoineVehicule.vue'


import ListeStockArticleVehicule from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/grpeStockVehicule/ListeStockArticleVehicule.vue'

import demarrage from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/DemarrageComptaMatiere/demarrage.vue'



//import AjouterReparationHorsSibMobilier from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/reparationMobilier/AjouterReparationHorsSibMobilier.vue'
//import AjouterReparationSibMobilier from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/reparationMobilier/AjouterReparationSibMobilier.vue'
//import listeDesReparationMobilier from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/reparationMobilier/listeDesReparationMobilier.vue'
//import ModifierReparationMobilier from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/reparationMobilier/ModifierReparationMobilier.vue'

import gestionStockCorporels from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/GestionStock/gestionStockCorporels.vue'







import listedesArticleparPerso from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/AffectationEquipementParUa/DossierAffectation/listedesArticleparPerso.vue'
import listedesArticleParService from '../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/AffectationEquipementParUa/DossierAffectation/listedesArticleParService.vue'

const suiviImmobilisationRoutes = [
  {
    path: "/listedesArticleParService/:id",
    name: "listedesArticleParService",
    component: listedesArticleParService
  },
  {
    path: "/listedesArticleparPerso/:id",
    name: "listedesArticleparPerso",
    component: listedesArticleparPerso
  },
  {
    path: '/gestion-Stock-Corporels',
   name:"gestionStockCorporels",
  
   component: gestionStockCorporels
},
//   {
//     path: '/Ajouter-Reparation-HorsSib-Mobilier',
//    name:"AjouterReparationHorsSibMobilier",
  
//    component: AjouterReparationHorsSibMobilier
// },
// {
//   path: '/Ajouter-Reparation-SibMobilier',
//  name:"AjouterReparationSibMobilier",
 
//  component: AjouterReparationSibMobilier
// },
//   {
//     path: '/liste-Des-Reparation-Mobilier',
//    name:"listeDesReparationMobilier",
   
//    component: listeDesReparationMobilier
// },
  
  // {
  //   path: "/ModifierReparationMobilier/:id",
  //   name: "ModifierReparationMobilier",
  //   component: ModifierReparationMobilier
  // },





  {
    path: '/Comptabilite-Matieres',
   name:"demarrage",
   meta: {layout: "no-sidebar"},
   component: demarrage
},
  
  {
    path: "/ModifierEntrePatrimoineVehicule/:id",
    name: "ModifierEntrePatrimoineVehicule",
    component: ModifierEntrePatrimoineVehicule
  },
  {
    path: "/AjouterEntrePatrimoineVehicule",
    name: "AjouterEntrePatrimoineVehicule",
    component: AjouterEntrePatrimoineVehicule
  },
  {
    path: "/ListeStockArticleVehicule",
    name: "ListeStockArticleVehicule",
    component: ListeStockArticleVehicule
  },





  {
    path: "/ModifierEntrePatrimoine/:id",
    name: "ModifierEntrePatrimoine",
    component: ModifierEntrePatrimoine
  },
  {
    path: "/ficheReparationVehicule",
    name: "ficheReparationVehicule",
    component: ficheReparationVehicule
  },
  {
    path: "/AjouterEntrePatrimoine",
    name: "AjouterEntrePatrimoine",
    component: AjouterEntrePatrimoine
  },
  {
    path: "/ExecutionReparationVehicule",
    name: "ExecutionReparationVehicule",
    component: ExecutionReparationVehicule
  },
  {
    path: "/AjouterReparationSibVehicule",
    name: "AjouterReparationSibVehicule",
    component: AjouterReparationSibVehicule
  },
  {
    path: "/DetailVehicule/:id",
    name: "DetailVehicule",
    component: DetailVehicule
  },
  {
    path: "/TableauBordGestionVehicule",
    name: "TableauBordGestionVehicule",
    component: TableauBordGestionVehicule
  },
  {
    path: "/ModifierReparationVehicule/:id",
    name: "ModifierReparationVehicule",
    component: ModifierReparationVehicule
  },
  {
    path: "/Appreciation",
    name: "Appreciation",
    component: Appreciation
  },
  {
    path: "/AjouterReparationVehicule",
    name: "AjouterReparationVehicule",
    component: AjouterReparationVehicule
  },
  {
    path: "/Transmission",
    name: "Transmission",
    component: Transmission
  },
  {
    path: "/DetaiAffectationVehicule/:id",
    name: "DetaiAffectationVehicule",
    component: DetaiAffectationVehicule
  },
  {
    path: "/affectationVehicule",
    name: "affectationVehicule",
    component: affectationVehicule
  },
  {
    path: "/ModifierFicheVehicule/:id",
    name: "ModifierFicheVehicule",
    component: ModifierFicheVehicule
  },
  {
    path: "/AjouterFicheVehicule",
    name: "AjouterFicheVehicule",
    component: AjouterFicheVehicule
  },
  {
    path: "/TypeReparation",
    name: "TypeReparation",
    component: TypeReparation
  },
  {
    path: "/marqueVehicules",
    name: "marqueVehicules",
    component: marqueVehicules
  },
  {
    path: "/ModeleVehicules",
    name: "ModeleVehicules",
    component: ModeleVehicules
  },
  {
    path: "/TypeEnergie",
    name: "TypeEnergie",
    component: TypeEnergie
  },
  {
    path: "/TypeEntretien",
    name: "TypeEntretien",
    component: TypeEntretien
  },
  {
    path: "/TypeVehicule",
    name: "TypeVehicule",
    component: TypeVehicule
  },











  {
    path: "/detailTauxEquipement/:id",
    name: "detailTauxEquipement",
    component: detailTauxEquipement
  },
  {
    path: "/TauxEquipementparUa25",
    name: "ListeUaTauxEquipement25",
    component: ListeUaTauxEquipement25
  },
  {
    path: "/TauxEquipementparUa50",
    name: "ListeUaTauxEquipement50",
    component: ListeUaTauxEquipement50
  },
  {
    path: "/TauxEquipementparUa75",
    name: "ListeUaTauxEquipement75",
    component: ListeUaTauxEquipement75
  },
  {
    path: "/TauxEquipementparUa100",
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
  path:"/liste-ua-compta-matiere",
  name:"liste_ua_compta",
  meta: {layout: "no-sidebar",
  },
  component:listeUaDeComptabiliteMatiere
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

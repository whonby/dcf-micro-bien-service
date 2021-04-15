import uniteadministrative from "../../pages/unites_administratives/unite_administrative.vue";
//import banqueUa from "../../pages/unites_administratives/banqueUa.vue";
import tableaudebord from "../../pages/unites_administratives/tableau_de_bord.vue";
import typetext from "../../pages/unites_administratives/type_texte.vue";
import archivagedocument from "../../pages/unites_administratives/archivage_document.vue";
import listeuniteadministrative from "../../pages/unites_administratives/liste_unite_administrative.vue";
import listetypetexte from "../../pages/unites_administratives/liste_type_texte.vue";
// import ordonnedocua from "../../pages/unites_administratives/ordonne_doc_ua.vue";
import budgetGenerals from "../../pages/unites_administratives/budgetGeneralComponent.vue";
import DetailbudgetGeneralsNew from "../../pages/unites_administratives/detailBudgetParUa/budgetGeneralComponent.vue";
import budgetGeneralParUa from "../../pages/unites_administratives/budgetGeneral.vue"
import grpeBudgetSection from "../../pages/unites_administratives/grpeBudgetSection.vue"
import grpeBudgetProgramme from "../../pages/unites_administratives/grpeBudgetProgramme.vue"
import historiquebudgetGeneralComponent from "../../pages/unites_administratives/historiquebudgetGeneralComponent.vue";
import banqueUa from "../../pages/unites_administratives/banqueUa.vue";
import uniteZone from "../../pages/unites_administratives/grpeUniteZone/uniteZonePrincipal.vue";
import transfert from "../../pages/unites_administratives/grpeTransfert/transfertPrincipal.vue";
import tableaubordTransfert from "../../pages/unites_administratives/tableauBordTransfert.vue";
import suiviTransfert from "../../pages/unites_administratives/suiviTransfert.vue";
import detailHistoTreansfert from "../../pages/unites_administratives/detailHistoTreansfert.vue";

import DirectionPrincipal from "../../pages/unites_administratives/grpeDirection/DirectionPrincipal.vue";
import ServicePrincipal from "../../pages/unites_administratives/grpeService/ServicePrincipal.vue";
import FonctionPrincipal from "../../pages/unites_administratives/grpeFonction/FonctionPrincipal.vue";

import Budget from "../../pages/budget/Budget";
import BudgetParUa from "../../pages/budget/BudgetParUa";
import DetailBudgetImporte from "../../pages/budget/DetailBudgetImporte.vue";
import LigneExempte from "../../pages/unites_administratives/LigneExempte";
import StructureOrganigramme from "../../pages/parametres_generaux/administratifs/grpeStructureOrganigramme/structureOrganigrammePrincipal.vue";
import Synthesebudg from "../../pages/gestionMarche/synthesebudg.vue";
import decompte from "../../pages/bien_service/contractualisation/DossierExecution/dossierDecompte/decompte.vue";
import listeBudgetIntialParUa from "../../pages/unites_administratives/filtreDesBudgetSurTableauBord/listeBudgetIntialParUa.vue";
import BudgetEclatePrincipal from "../../pages/Hors_sib/grpeBudgetEclate/BudgetEclateProjet.vue"

import ListeBudgeteclate from "../../pages/Hors_sib/grpeBudgetEclate/ListeBudgetEclate.vue"
import AjouterBudgetEclate from "../../pages/Hors_sib/grpeBudgetEclate/AjouterBudgetEclate.vue"

import ListeVehicules from "../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeVehicule/ListeVehicules.vue"
import ReparationVehicule from "../../pages/suivi_control_budgetaires/suiviImmobilisation/gestionDesVehicules/grpeReparationVehicule/ReparationVehicule.vue"


import ListeStockArticle from "../../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/gpeGestionStock/ListeStockArticle.vue"


import ReportingBudget from "../../pages/unites_administratives/ReportingBudget/ReportingBudget.vue"
import listeDesUaBudget from "../../pages/unites_administratives/ReportingBudget/listeDesUaBudget.vue"
import DetailBudgetUa from "../../pages/unites_administratives/ReportingBudget/DetailBudgetUa.vue"
import ModificationBudget from "../../pages/budget/ModificationBudget"
import BudgetPasProgramme from "../../pages/budget/BudgetPasProgramme"
import BudgetEclate from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/BudgetEclate.vue"
import AjouterBudgetEclater from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/AjouterBudgetEclater.vue"
import listeDesBudgetVentille from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/ListeDesBudgetaire.vue"
import ModificationBudgetaire from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/ModificationBudgetaire.vue"
import ModificationBudgetaireSousBudget from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/ModificationBudgetaireSousBudget.vue"
import ModificationBudgetaireRegie from "../../pages/ExecutionBudgetaire/BudgetEclateRegie/ModificationBudgetaireRegie.vue"
import sousBudget from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/sousBudget.vue"
import VoirSousBudget from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/VoirSousBudget.vue"
import ModifierSousBudget from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/ModifierSousBudget.vue"
import listeSousBudgetParUa from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/listeSousBudgetParUa.vue"
import voirDetailBudget from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/voirDetailBudget.vue"
import UniteAdministrativeRegie from "../../pages/ExecutionBudgetaire/BudgetEclateRegie/UniteAdministrativeRegie.vue"
import BudgetEclateRegie from "../../pages/ExecutionBudgetaire/BudgetEclateRegie/BudgetEclateRegie.vue"
import groupeUaDecompte from "../../pages/ExecutionBudgetaire/gestionDesOrdrePaiement/Decompte/groupeUaDecompte.vue"
import GroupeAnneDecompte from "../../pages/ExecutionBudgetaire/gestionDesOrdrePaiement/Decompte/GroupeParAnneeDecompte.vue"
import ListeDecompteAnterieur from "../../pages/ExecutionBudgetaire/gestionDesOrdrePaiement/Decompte/ListeDecompteAnterieur.vue"
import ModificationDecompteAnterieur from "../../pages/ExecutionBudgetaire/gestionDesOrdrePaiement/Decompte/ModificationDecompteAnterieur.vue"
import ListeBailleurUniteAdministrative from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/DocUniteAdministrativeBailleur/ListeBailleurUniteAdministrative.vue"
import ListeUniteAdministrative from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/DocUniteAdministrativeBailleur/ListeUniteAdministrative.vue"
import listeDesUaRegie from "../../pages/ExecutionBudgetaire/BudgetEclateRegie/BailleurRegie/listeDesUaRegie.vue"
import listeUniteZone from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/listeSousBudgetEclate/listeUniteZone.vue"
import ListeBudgetEclateParSousBudget from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/listeSousBudgetEclate/ListeBudgetEclateParSousBudget.vue"
import recapitulatifBudgetHorsSigobe from "../../pages/ExecutionBudgetaire/BudgetEclateHorsSib/recapitulatifBudgetHorsSigobe/recapitulatifBudgetHorsSigobe.vue"
const UniteAdministativeRoutes = [
  {
    path: "/ModificationDecompteAnterieur/:id",
    name: "ModificationDecompteAnterieur",
    component: ModificationDecompteAnterieur
},
  {
    path: "/recapitulatifBudgetHorsSigobe",
    name: "recapitulatifBudgetHorsSigobe",
    component: recapitulatifBudgetHorsSigobe
},
  {
    path: "/ListeBudgetEclateParSousBudget/:id",
    name: "ListeBudgetEclateParSousBudget",
    component: ListeBudgetEclateParSousBudget
},
  {
    path: "/listeUniteZone/:id",
    name: "listeUniteZone",
    component: listeUniteZone
},
  {
    path: "/GroupeAnneDecompte/:id",
    name: "GroupeAnneDecompte",
    component: GroupeAnneDecompte
},
  {
    path: "/ListeDecompteAnterieur/:id",
    name: "ListeDecompteAnterieur",
    component: ListeDecompteAnterieur
},
  {
    path: "/groupeUaDecompte",
    name: "groupeUaDecompte",
    component: groupeUaDecompte
},
  {
    path: "/listeDesUaRegie",
    name: "listeDesUaRegie",
    component: listeDesUaRegie
},
  {
    path: "/ListeBailleurUniteAdministrative/:id",
    name: "ListeBailleurUniteAdministrative",
    component: ListeBailleurUniteAdministrative
},
  {
    path: "/ListeUniteAdministrative",
    name: "ListeUniteAdministrative",
    component: ListeUniteAdministrative
},
{
  path: "/ModifierSousBudget/:id",
  name: "ModifierSousBudget",
  component: ModifierSousBudget
},
  

  {
    path: "/VoirSousBudget/:id",
    name: "VoirSousBudget",
    component: VoirSousBudget
},
  {
    path: "/listeSousBudgetParUa",
    name: "listeSousBudgetParUa",
    component: listeSousBudgetParUa
},
  {
    path: "/voirDetailBudget",
    name: "voirDetailBudget",
    component: voirDetailBudget
},
  {
    path: "/BudgetEclateRegie",
    name: "BudgetEclateRegie",
    component: BudgetEclateRegie
},
  {
    path: "/UniteAdministrativeRegie",
    name: "UniteAdministrativeRegie",
    component: UniteAdministrativeRegie
},
  {
    path: "/sousBudget",
    name: "sousBudget",
    component: sousBudget
},
{
  path: "/ModificationBudgetaireRegie",
  name: "ModificationBudgetaireRegie",
  component: ModificationBudgetaireRegie
},
{
  path: "/ModificationBudgetaireSousBudget",
  name: "ModificationBudgetaireSousBudget",
  component: ModificationBudgetaireSousBudget
},
  {
    path: "/ModificationBudgetaire",
    name: "ModificationBudgetaire",
    component: ModificationBudgetaire
},
  {
    path: "/listeDesBudgetVentille/:id",
    name: "listeDesBudgetVentille",
    component: listeDesBudgetVentille
},
  {
    path: "/AjouterBudgetEclater",
    name: "AjouterBudgetEclater",
    component: AjouterBudgetEclater
  },
  {
    path: "/BudgetEclate",
    name: "BudgetEclate",
    component: BudgetEclate
  },
  {
    path: "/budget-pas-programme",
    name: "BudgetPasProgramme",
    component: BudgetPasProgramme
  },
  {
    path: "/DetailBudgetUa/",
    name: "ModificationBudget",
    component: ModificationBudget
  },
  {
    path: "/DetailBudgetUa/:id",
    name: "DetailBudgetUa",
    component: DetailBudgetUa
},
  {
    path: "/listeDesUaBudget",
    name: "listeDesUaBudget",
    component: listeDesUaBudget
},
  {
    path: "/ReportingBudget",
    name: "ReportingBudget",
    component: ReportingBudget
},
  {
    path: "/ListeStockArticle",
    name: "ListeStockArticle",
    component: ListeStockArticle
},
  {
    path: "/ReparationVehicule",
    name: "ReparationVehicule",
    component: ReparationVehicule
},
  {
    path: "/ListeVehicules",
    name: "ListeVehicules",
    component: ListeVehicules
}
,
  {
    path: "/AjouterBudgetEclate/:id",
    name: "AjouterBudgetEclate",
    component: AjouterBudgetEclate
}
,
  {
    path: "/ListeBudgeteclate/:id",
    name: "ListeBudgeteclate",
    component: ListeBudgeteclate
}
,
  {
    path: "/Budget-Eclate",
    name: "BudgetEclatePrincipal",
    component: BudgetEclatePrincipal
}
,
 
  {
    path: "/listeBudgetIntialParUa/:id",
    name: "listeBudgetIntialParUa",
    component: listeBudgetIntialParUa
}
,
 
 
  {
    path: "/decompte",
    name: "decompte",
    component: decompte
  },
  {
    path: "/Detail-Budget-Generals",
    name: "DetailbudgetGeneralsNew",
    component: DetailbudgetGeneralsNew
  },
  {
    path: "/synthÃ¨se_budgÃ©taire",
    name: "Synthesebudg",
    component: Synthesebudg
  },
  {
    path: '/Banque',
    name: "banqueUa",
    component: banqueUa
  },
  {

    path: '/Structure-Organigramme-ua',
    name: "StructureOrganigramme",
    component: StructureOrganigramme
  },

  {
    path: '/Banque',
    name: "banqueUa",
    component: banqueUa
  },

  {

    path: '/Direction',
    name: "DirectionPrincipal",
    component: DirectionPrincipal
  },

  {
    path: '/ServicePerso',
    name: "ServicePrincipal",
    component: ServicePrincipal
  },

  {
    path: '/FonctionPerso',
    name: "FonctionPrincipal",
    component: FonctionPrincipal
  },









  {
    path: '/detail-Histo-Transfert/:detail_historiq_id',
    name: "detailHistoTreansfert",
    component: detailHistoTreansfert
  },
 
  {
    path: "/suivi-Transfert",
    name: "suiviTransfert",
    component: suiviTransfert
  },
  {
    path: "/tableau-bord-Transfert",
    name: "tableaubordTransfert",
    component: tableaubordTransfert
  },
  {
    path: "/transfert",
    name: "transfert",
    component: transfert
  },
  {
    path: "/unite-Zone",
    name: "uniteZone",
    component: uniteZone
  },
  {
    path: "/historique-budget-general-component",
    name: "historiquebudgetGeneralComponent",
    component: historiquebudgetGeneralComponent
  },
  {
    path: "/budget-General-Par-Programme",
    name: "grpeBudgetProgramme",
    component: grpeBudgetProgramme
  },
  {
    path: "/budget-General-Par-section",
    name: "grpeBudgetSection",
    component: grpeBudgetSection
  },
  {
    path: "/budget-General-Par-Ua",
    name: "budgetGeneralParUa",
    component: budgetGeneralParUa
  },
  {
    path: "/budget-General",
    name: "budgetGenerals",
    component: budgetGenerals
  },
  {
    path: "/unite-administrative",
    name: "uniteadministrative",
    component: uniteadministrative
  },
  // {
  //   path: "/ordonne_doc_ua",
  //   name: "ordonnedocua",
  //   component: ordonnedocua
  // },
  {
    path: "/liste-unite-administrative",
        name: "listeuniteadministrative",
        component: listeuniteadministrative
  },
  {
    path: "/liste_type_texte",
    name: "listetypetexte",
    component: listetypetexte
  },
  {
    path: "/tableau_de_bord",
    name: "tableaudebord",
    component: tableaudebord
  },

  {
    path: "/type-text",
    name: "typetext",
    component: typetext
  },
  {
    path: "/archivage_document",
    name: "archivagedocument",
    component: archivagedocument
  }
  ,
  {
    path: "/import_budget",
    name: "ImportBudget",
    component: Budget
  },

  {
    path: "/budget-par-ua",
    name: "BudgetParUa",
    component: BudgetParUa
  }
  ,
    {
        path: "/detail-budget-importer/:id",
        name: "DetailBudgetImporte",
        component: DetailBudgetImporte
    }
    ,

  {
    path: "/ligne_exempter",
    name: "LigneExempter",
    component: LigneExempte
  }
];

export default UniteAdministativeRoutes;

import TypeActePersonnel from "../../pages/acteurs_depenses/type_acte_personnel/TypeActPersonnel.vue"
//import paiementPersonnel from "../../pages/acteurs_depenses/executionPersonnel/paiementPersonnel.vue"
import Fonction from "../../pages/acteurs_depenses/fonction/Fonction.vue"
import Classe from "../../pages/acteurs_depenses/classes/Classes.vue"
import NiveauEtude from "../../pages/acteurs_depenses/niveau_etude/NiveauEtude.vue"
import TypeContrat from "../../pages/acteurs_depenses/type_contrat/TypeContrat.vue"
import TypeSalarie from "../../pages/acteurs_depenses/type_salarie/TypeSalarie.vue"
import Echelons from "../../pages/acteurs_depenses/echelons/Echelons.vue"
import Grades from "../../pages/acteurs_depenses/grades/GradePrincipal.vue"
import Acteur from "../../pages/acteurs_depenses/acteurs/Acteurs.vue"
import ActeurDetail from "../../pages/acteurs_depenses/acteurs/DetailActeurDepense.vue"
import TableauBordActeurDepense from "../../pages/acteurs_depenses/TableauBord.vue"
import Conge from "../../pages/acteurs_depenses/conges/Conge.vue"
import AjouterActeur from "../../pages/acteurs_depenses/acteurs/AjouteActeurDepense.vue"
import AjouterPersoRecrutementDirect from "../../pages/acteurs_depenses/acteurs/AjouterPersoRecrutementDirect.vue"
import EditActeurDepense from "../../pages/acteurs_depenses/acteurs/EditeActeurDepense.vue"
import CategorieGrade from "../../pages/acteurs_depenses/CategorieGrade/CategorieGrade.vue";
import familleEmploie from "../../pages/acteurs_depenses/fonction/familleEmploie.vue";
import ClassificationEmploisGradePrincipal from "../../pages/acteurs_depenses/fonction/ClassificationEmploisGradePrincipal.vue";
import paiementPersonnel from "../../pages/acteurs_depenses/executionPersonnel/paiementPersonnel.vue"
import executionPersonnel from "../../pages/acteurs_depenses/executionPersonnel/executionPersonnel.vue"
// import ficheSuivi from "../../pages/acteurs_depenses/executionPersonnel/FicheSuiviMarche.vue"
import detailExecutionPersonnel from "../../pages/acteurs_depenses/executionPersonnel/detailExecutionPersonnel.vue"
import recrutementPersonnel from "../../pages/acteurs_depenses/dossierPersonnel/recrutementPersonnel.vue";
import detailPersonnel from "../../pages/acteurs_depenses/dossierPersonnel/detailPersonnel";
import AjouterContratPersonnel from "../../pages/acteurs_depenses/acteurs/AjouterContratPersonnel.vue";
import cycledeVie from "../../pages/acteurs_depenses/Cycledevie/cycledeVie.vue";
import RapportDepense from "../../pages/cycle_de_vie/RapportDepense.vue";
import LivreSpecial from "../../pages/cycle_de_vie/RapportDepense1.vue";
import LivreEnregistrement from "../../pages/cycle_de_vie/RapportDepense2.vue";
import RegistreDepense from "../../pages/cycle_de_vie/RapportDepense3.vue";
// import Synthesebudg from "../../pages/gestionMarche/synthesebudg.vue";



import fonctionBudgetaire from "../../pages/acteurs_depenses/fonction/fonctionBudgetaire.vue";
import SituationMatrimonial from "../../pages/acteurs_depenses/fonction/SituationMatrimonial.vue";
import FonctionProfessionnelle from "../../pages/acteurs_depenses/FonctionProfessionnelle/FonctionProfessionnelle.vue";
const ActeurDepenseRoutes = [

  // {
  //   path: "/synthèse_budgétaire",
  //   name: "Synthesebudg",
  //   component: Synthesebudg
  // },
  {
    path: "/FonctionProfessionnelle",
    name: "FonctionProfessionnelle",
    component: FonctionProfessionnelle
  },
  {
    path: "/Registre_depense",
    name: "RegistreDepense",
    component: RegistreDepense
  },

  {
    path: "/livre_enregistrement",
    name: "LivreEnregistrement",
    component: LivreEnregistrement
  },

  {
    path: "/livre_special",
    name: "LivreSpecial",
    component: LivreSpecial
  },


  {
    path: "/rapport_depense",
    name: "RapportDepense",
    component: RapportDepense
  },



  {
    path: "/cyle_de_vie",
    name: "cycledeVie",
    component: cycledeVie
  },
 
 
 
  {
    path: "/RecrutementDirect/:id",
  name: "AjouterPersoRecrutementDirect",
  component: AjouterPersoRecrutementDirect
  },
  {
    path: '/detailExecutionPersonnel/:id',
    name: "detailExecutionPersonnel",
    component: detailExecutionPersonnel
  },
  {
    path: "/executionPersonnel",
    name: "executionPersonnel",
    component: executionPersonnel
  },
  {
    path: "/paiementpersonnel",
    name: "paiementPersonnel",
    component: paiementPersonnel
  },
  // {
  //   path: "/FicheSuivi",
  //   name: "ficheSuivi",
  //   component: ficheSuivi
  // },
  
  
  {
    path: "/Situation-Matrimonial",
    name: "SituationMatrimonial",
    component: SituationMatrimonial
  },
  {
    path: "/fonction-Budgetaire",
    name: "fonctionBudgetaire",
    component: fonctionBudgetaire
  },
  {
    path: "/Classification-Emplois-Grade-Principal",
    name: "ClassificationEmploisGradePrincipal",
    component: ClassificationEmploisGradePrincipal
  },
  {
    path: "/famille-Emplois",
    name: "familleEmploie",
    component: familleEmploie
  },
  {
    path: "/Categorie-Grade",
    name: "CategorieGrade",
    component: CategorieGrade
  },
  {
    path: "/type-acte-personnel",
    name: "TypeActePersonnels",
    component: TypeActePersonnel
  },

  // la route du detail personne
  {
    path:"/Ajouter-Contrat-Personnel/:id",
    name:"AjouterContratPersonnel",
    component:AjouterContratPersonnel
  },
  {
    path:"/detail-personnel/:id",
    name:"detailPersonnel",
    component:detailPersonnel
  },
  {
    path: "/fonction",
    name: "Fonction",
    component: Fonction
  },
  {
    path: "/classes",
    name: "Classe",
    component: Classe
  },
  {
    path: "/niveau-etude",
    name: "NiveauEtude",
    component: NiveauEtude
  },
  {
    path: "/type-contrat",
    name: "TypeContrat",
    component: TypeContrat
  },
  {
    path: "/type-salarie",
    name: "TypeSalarie",
    component: TypeSalarie
  },
  {
    path: "/grades",
    name: "Grades",
    component: Grades
  },
  {
    path: "/echelons",
    name: "Echelons",
    component: Echelons
  },
  {
    path: "/acteur-depenses",
    name: "Acteur",
    component: Acteur
  },

  {
    path: "/recrutement-personnel",
    name: "recrutementPersonnel",
    component: recrutementPersonnel
  },

  
  {
    path: "/detail-acteur/:id",
    name: "ActeurDetail",
    component: ActeurDetail
  },
  {
    path: "/tableau-bord-acteur-depense",
    name: "TableauBordActeurDepense",
    component: TableauBordActeurDepense
  },
  
  {
    path: "/suivie-conges",
    name: "Conge",
    component: Conge
  },
  {
    path: "/ajouter-acteur",
    name: "AjouterActeur",
    component: AjouterActeur
  },
  {
    path: "/edit-acteur-depense/:id",
    name: "EditActeurDepense",
    component: EditActeurDepense
  },
    
];

export default ActeurDepenseRoutes;

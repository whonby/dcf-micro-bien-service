import TypeActePersonnel from "../../pages/acteurs_depenses/type_acte_personnel/TypeActPersonnel.vue"
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
import detailExecutionPersonnel from "../../pages/acteurs_depenses/executionPersonnel/detailExecutionPersonnel.vue"
import recrutementPersonnel from "../../pages/acteurs_depenses/dossierPersonnel/recrutementPersonnel.vue";
import detailPersonnel from "../../pages/acteurs_depenses/dossierPersonnel/detailPersonnel";

import fonctionBudgetaire from "../../pages/acteurs_depenses/fonction/fonctionBudgetaire.vue";
import SituationMatrimonial from "../../pages/acteurs_depenses/fonction/SituationMatrimonial.vue";
const ActeurDepenseRoutes = [
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

import tableauBordGeneral from "../../pages/parametres_generaux/administratifs/tableauBord.vue";
import tableauBordGeneralOriginal from "../../pages/parametres_generaux/administratifs/tableauBordGeneralOriginal.vue";
import ExerciceBudgetaire from "../../pages/parametres_generaux/administratifs/ExerciceBudgetaire.vue";
// import Titre from "../../pages/parametres_generaux/administratifs/tableauBord.vue";
import NatureSection from "../../pages/parametres_generaux/administratifs/NatureSection.vue";
import Section from "../../pages/parametres_generaux/administratifs/Section.vue";
import StructureProgramme from "../../pages/parametres_generaux/administratifs/StructureProgramme.vue";
import PlanProgramme from "../../pages/parametres_generaux/administratifs/PlanProgramme.vue";
import ImportationProgramme from "../../pages/parametres_generaux/administratifs/ImportationProgramme.vue";
import ImportationUA from "../../pages/parametres_generaux/administratifs/ImportationUA.vue";
import StructureAdministrative from "../../pages/parametres_generaux/administratifs/StructureAdministrative.vue";
import ServiceGestionnaire from "../../pages/parametres_generaux/administratifs/ServiceGestionnaire.vue";
import Chapitre from "../../pages/parametres_generaux/administratifs/Chapitre.vue";
import GrandeNature from "../../pages/parametres_generaux/administratifs/GrandeNature.vue";
import StructureGeographique from "../../pages/parametres_generaux/administratifs/StructureGeographique.vue";
import LocalisationGeographique from "../../pages/parametres_generaux/administratifs/LocalisationGeographique.vue";
import TypeUniteAdmin from "../../pages/parametres_generaux/administratifs/TypeUniteAdmin.vue";
import taux from "../../pages/parametres_generaux/administratifs/taux.vue";
import Formejuridique from "../../pages/parametres_generaux/administratifs/Formejuridique.vue";
import RegimeImposition from "../../pages/parametres_generaux/administratifs/RegimeImposition.vue";
import StructurePays from "../../pages/parametres_generaux/administratifs/StructurePays.vue";
import PlanPays from "../../pages/parametres_generaux/administratifs/PlanPays.vue";
import Infrastructures from "../../pages/parametres_generaux/administratifs/Infrastructures.vue";
import structureOrganigrammeUa from "../../pages/parametres_generaux/administratifs/structureOrganigrammeUa.vue";
import PlanOrganigrammeUa from "../../pages/parametres_generaux/administratifs/PlanOrganigrammeUa.vue";


import grpeCorporel from '../../pages/parametres_generaux/administratifs/grpeCorporel.vue'
import TypeBienCorporel from '../../pages/parametres_generaux/administratifs/TypeBienCorporel.vue'

const AdministratifRoutesAdoni = [
  // route type unite administrative
  {
    path: "/grpeCorporel",
    name: "grpeCorporel",
    component: grpeCorporel  
  },

  {
    path: "/ImportationUA",
    name: "ImportationUA",
    component: ImportationUA
  },

  {
    path: "/ImportationProgramme",
    name: "ImportationProgramme",
    component: ImportationProgramme
  },
  {
    path: "/TypeBienCorporel",
    name: "TypeBienCorporel",
    component: TypeBienCorporel
  },
  {
    path: "/Infrastructures",
    name: "Infrastructures",
    component: Infrastructures
  },
  {
    path: "/tableau-Bord-General",
    name: "tableauBordGeneralOriginal",
    component: tableauBordGeneralOriginal
  },
  {
    path: "/structure-Organigramme-Ua",
    name: "structureOrganigrammeUa",
    component: structureOrganigrammeUa
  },
  // chemin du plan programme
  {
    path: "/Plan-Organigramme-Ua",
    name: "PlanOrganigrammeUa",
    component: PlanOrganigrammeUa
  },
  {
    path: "/structure-pays",
    name: "StructurePays",
    component: StructurePays
  },
  // chemin du plan programme
  {
    path: "/plan-pays",
    name: "PlanPays",
    component: PlanPays
  },






  {
    path: "/Forme-juridique",
    name: "Formejuridique",
    component: Formejuridique
  },
  {
    path: "/RegimeImposition",
    name: "RegimeImposition",
    component: RegimeImposition
  },





  {
    path: "/tableauBordGeneral",
    name: "tableauBordGeneral",
    component: tableauBordGeneral
  },
  {
    path: "/taux",
    name: "taux",
    component: taux
  },
  {
    path: "/type-Unite-Administrative",
    name: "typeUniteAdministrative",
    component: TypeUniteAdmin
  },
    // {
    //   // route pour le titre
    //   path:"/tableauBordGeneralOriginal",
    //    name:"Titre",
    //    component: Titre
    //  },
     // chemin de la structure programme
     {
       path:"/structure-programme",
       name:"StructureProgramme",
       component:StructureProgramme
     },
     // chemin du plan programme
     {
       path:"/plan-programme",
       name:"PlanProgramme",
       component:PlanProgramme
     },

     {
      // route pour l'exercice budgetaire 
      path:"/exercice-budgetaire",
        name:"ExerciceBudgetaire",
        component:ExerciceBudgetaire

     },
     // route pour la nature de section
     {
       path:"/nature-section",
       name:"NatureSection",
       component:NatureSection
     },
     // route section
     {
       path:"/section",
       name:"Section",
       component:Section
     },
     // route structure structure administrative
     {
       path:"/structure-administrative",
       name:"StructureAdministrative",
       component:StructureAdministrative
     },
     // route service gestionnaire
     {
    path:"/service-gestionnaire",
    name:"ServiceGestionnaire",
    component:ServiceGestionnaire
     },
     // route chapitre
     {
       path:"/chapitre",
       name:"Chapitre",
       component:Chapitre
     },
     // route grande nature
     {
       path:"/grande-nature",
       name:"GrandeNature",
       component:GrandeNature
     },
     // route structure geographie
     {
       path:"/structure-geographique",
       name:"SrtuctureGeographique",
       component:StructureGeographique
     },
     // route localisation geographique
     {
       path:"/localisation-georaphique",
       name:"LocalisationGeographique",
       component:LocalisationGeographique
     }
]

export default AdministratifRoutesAdoni;

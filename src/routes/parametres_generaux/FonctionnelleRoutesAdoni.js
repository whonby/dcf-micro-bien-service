
import motifPassation from "../../pages/parametres_generaux/fonctionnelle/motifPassation.vue";
import NaturePrix from "../../pages/parametres_generaux/fonctionnelle/NaturePrix.vue";
import Typeconges from "../../pages/parametres_generaux/fonctionnelle/Typeconges.vue";
import StructureFonctionnelle from "../../pages/parametres_generaux/fonctionnelle/StructureFonctionnelle.vue";
import PlanFonctionnel  from "../../pages/parametres_generaux/fonctionnelle/PlanFonctionnel.vue";

import structureDecision from "../../pages/parametres_generaux/fonctionnelle/structureDecision.vue";
import planDecision from "../../pages/parametres_generaux/fonctionnelle/planDecision.vue";


import structureActe from "../../pages/parametres_generaux/fonctionnelle/structureActe.vue";
import planActe from "../../pages/parametres_generaux/fonctionnelle/planActe.vue";

const FonctionnelleRoutesAdoni = [
   

   {
      path:"/motif-passation",
      name:"motif_passation",
      component:motifPassation
   },

   {
      path: "/NaturePrix",
      name: "NaturePrix",
      component: NaturePrix
   }, 
   {
      path: "/Typeconges",
      name: "Typeconges",
      component: Typeconges

   },

   {
      path: "/structures-Acte",
      name: "structureActe",
      component: structureActe

   },

   {
      path: "/Plan-Acte",
      name: "planActe",
      component: planActe

   },
  
   {
      path: "/structures-décisionnelles",
      name: "structureDecision",
      component: structureDecision

   },

   {
      path: "/Plan-décisionnelles",
      name: "planDecision",
      component: planDecision

   },







     {
        path:"/strucute-fonctionnelle",
        name:"StructureFonctionnelle",
        component:StructureFonctionnelle

     },
     // route type nde financement
     {
        path:"/plan-fonctionnel",
        name:"PlanFonctionnel",
        component:PlanFonctionnel
     }
     
]

export default FonctionnelleRoutesAdoni;


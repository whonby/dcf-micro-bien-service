
import StructureFonctionnelle from "../../pages/parametres_generaux/fonctionnelle/StructureFonctionnelle.vue";
import PlanFonctionnel  from "../../pages/parametres_generaux/fonctionnelle/PlanFonctionnel.vue";

import structureDecision from "../../pages/parametres_generaux/fonctionnelle/structureDecision.vue";
import planDecision from "../../pages/parametres_generaux/fonctionnelle/planDecision.vue";

const FonctionnelleRoutesAdoni = [
  
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


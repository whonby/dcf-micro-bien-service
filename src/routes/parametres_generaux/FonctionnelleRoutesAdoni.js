
import StructureFonctionnelle from "../../pages/parametres_generaux/fonctionnelle/StructureFonctionnelle.vue";
import PlanFonctionnel  from "../../pages/parametres_generaux/fonctionnelle/PlanFonctionnel.vue";

import structureDecision from "../../pages/parametres_generaux/fonctionnelle/structureDecision.vue";
import planDecision from "../../pages/parametres_generaux/fonctionnelle/planDecision.vue";



import structureActe from "../../pages/parametres_generaux/fonctionnelle/structureActe.vue";
import planActe from "../../pages/parametres_generaux/fonctionnelle/planActe.vue";

const FonctionnelleRoutesAdoni = [





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



import StructureAtivite from "../../pages/parametres_generaux/activites/StructureAtivite.vue";
import PlanActivite from "../../pages/parametres_generaux/activites/PlanActivite.vue";
import StructureInfrastructure from "../../pages/parametres_generaux/activites/StructureInfrastructure.vue";
import PlanInfrastructure from "../../pages/parametres_generaux/activites/PlanInfrastructure.vue";

const ActiviteRoutesAdoni = [
  


    {
        path:"/plan-infrastructure",
        name:"PlanInfrastructure",
        component:PlanInfrastructure
     },
    {
        path:"/structure-infrastructure",
        name:"StructureInfrastructure",
        component:StructureInfrastructure

     },
     {
        path:"/structure-activite",
        name:"StructureAtivite",
        component:StructureAtivite

     },
     {
        path:"/plan-activite",
        name:"PlanActivite",
        component:PlanActivite
     }
  
     
]

export default ActiviteRoutesAdoni;


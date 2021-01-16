import CategorieMission from '../../pages/suivi_control_budgetaires/suivi_mission/CategorieMission.vue'
import executionMission from '../../pages/suivi_control_budgetaires/suivi_mission/executionMission'
import Mission from '../../pages/suivi_control_budgetaires/suivi_mission/Mission'
import AjouterMission from '../../pages/suivi_control_budgetaires/suivi_mission/AjouterMission'
import ModifierMission from '../../pages/suivi_control_budgetaires/suivi_mission/ModifierMission'
//import DureeMoyen from '../../pages/suivi_control_budgetaires/suivi_mission/DureeMoyen.vue'
import NormeMission from '../../pages/suivi_control_budgetaires/suivi_mission/NormeMission.vue'
import DetailleMission from '../../pages/suivi_control_budgetaires/suivi_mission/DetailleMission.vue'
//import executionMission from '../../pages/suivi_control_budgetaires/suivi_mission/dossierExecutionMission/executionMission.vue'
const MissionRoutes = [
  
// route categorie mission
     {
        path:"/categorie-mission",
        name:"CategorieMission",
        component:CategorieMission

     },
     // route pour les durees moyennes de mission
   //   {
   //     path:"/duree-mission",
   //     name:"DureeMoyen",
   //     component:DureeMoyen
   //   },

  

     // route imputation
     {
        path:"/execution-mission",
        name:"executionMission",
        component:executionMission
     },
  // route mission
  {
     path:"/mission",
     name:"Mission",
     component:Mission
  },
     // creation de mission
     {
      path:"/creation-de-mission",
      name:"AjouterMission",
      component:AjouterMission
   },
     // detail d'une mission @param id_mission
     {
      path:"/detail-de-mission/:id_mission",
      name:"DetailleMission",
      component:DetailleMission
   },

   // modification de mission
   {
      path:"/modifier-mission/:id_mission",
      name:"ModifierMission",
      component:ModifierMission
   },

 
 //  route pour le montant total
   {
      path:"/norme-mission",
      name:"NormeMission",
      component:NormeMission
   },


    
 
     
]

export default MissionRoutes;
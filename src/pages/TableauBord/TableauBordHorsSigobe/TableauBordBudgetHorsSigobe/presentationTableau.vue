
<template>
  <div>
      <h3 style="text-align:center">TABLEAU DE BORD DU BUDGET HORS SIGOBE</h3>
    
  
        <!-- <div style="text-align:center;border:4px solid blue;font-weight:bold"> <h3 style="text-align:center">TABLEAU DE BORD UA PROJETS (ANNEE EN COURS)</h3></div>
          <h3 style="text-align:center">{{AffichLibelle(formData.unite_administrative_id)}}</h3> -->
         <br>
     
  

  <div class="table-responsive text-nowrap" >
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                   
                     <!-- <li class="active" style="font-size:20px">
                      <a data-toggle="tab" href="#DEMANDE"
                        >TABLEAU DE BORD GENERAL </a
                      >
                    </li> -->
                     <!-- <li class=""  >
                      <a data-toggle="tab" href="#COMMANDE"
                        >CONSULTATION DE L'EXECUTION BUDGETAIRE</a
                      >
                    </li> -->

                      <li class="active"  style="font-size:14px">
                      <!-- <a data-toggle="tab" href="#TABLEAUBORD1"
                        >TB1 : SUIVI DU BUDGET </a
                      > -->
                      <a data-toggle="tab" href="#TABLEAUBORD1"
                        >TB1 </a
                      >
                    </li>

                    <li class="" style="font-size:14px">
                      <!-- <a data-toggle="tab" href="#TABLEAUBORD2"
                        >TB2 : EXECUTION DU BUDGET</a
                      > -->
                       <a data-toggle="tab" href="#TABLEAUBORD2"
                        >TB2 </a
                      >
                    </li>
                    

                    <!-- <li class="" style="font-size:14px">
                      <a data-toggle="tab" href="#TABLEAUBORD3"
                        >TB3 : EXECUTION PAR ACTIVITE</a
                      >
                    </li> -->
                     <li class="" style="font-size:14px">
                      <!-- <a data-toggle="tab" href="#TABLEAUBORD4"
                        >TB3 : D'EXECUTION PAR ACTIVITE ET BAILLEUR</a
                      > -->
                       <a data-toggle="tab" href="#TABLEAUBORD4"
                        >TB3</a
                      >
                    </li>

                     

                     
<li class="" style="font-size:14px">
                      <!-- <a data-toggle="tab" href="#TABLEAUBORD3"
                        >TB4 : SITUATION D'EXECUTION BUDGETAIRE PAR BAILLEUR</a
                      > -->
                      <a data-toggle="tab" href="#TABLEAUBORD3"
                        >TB4</a
                      >
                    </li>
                     <li class="" style="font-size:14px">
                      <!-- <a data-toggle="tab" href="#TABLEAUBORD5"
                        >TB5 : SITUATION D'EXECUTION BUDGETAIRE PAR SECTION</a
                      > -->
                       <a data-toggle="tab" href="#TABLEAUBORD5"
                        >TB5</a
                      >
                    </li>
                    <li class="" style="font-size:14px">
                      <!-- <a data-toggle="tab" href="#TABLEAUBORD6"
                        >TB6 : ETAT EXECUTION PAR BAILLEUR ET SECTION</a
                      > -->
                      <a data-toggle="tab" href="#TABLEAUBORD6"
                        >TB6</a
                      >
                    </li>
                     <!-- <li class="" >
                      <a data-toggle="tab" href="#MANDAT"
                        >DOSSIER OP DIRECT</a
                      >
                    </li> -->
                    <!-- <li class="">
                      <a data-toggle="tab" href="#SYSTEME"
                        >DOSSIER OP SYSTEME</a
                      >
                    </li> -->
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <!--ongle identification-->
                  <div id="TABLEAUBORD6" class="tab-pane " >
                    <!-- <h3 style="text-align:center">DETAIL OP PROVISOIRE</h3> -->
                <EtatExecutionBailleurSection></EtatExecutionBailleurSection>
                         
                  </div>
                  <div id="DEMANDE" class="tab-pane " >
                    <!-- <h3 style="text-align:center">DETAIL OP PROVISOIRE</h3> -->
                <TableauBordBudgetEclate></TableauBordBudgetEclate>
                         
                  </div>
                  <!-- <div id="COMMANDE" class="tab-pane "  >
                   <RechercheExecutionBudgetaire></RechercheExecutionBudgetaire>
                  
                  </div> -->
                   <div id="TABLEAUBORD1" class="tab-pane active">
                     <TableausuiviBudgets></TableausuiviBudgets>
                  </div>

                  <div id="TABLEAUBORD2" class="tab-pane ">
                     <StituationExecutionBudgetActiviteLigne></StituationExecutionBudgetActiviteLigne>
                  </div>

                  <!-- <div id="TABLEAUBORD3" class="tab-pane ">
                     <SituationExecuBudgetRecapActivite></SituationExecuBudgetRecapActivite>
                  </div>

                  <div id="TABLEAUBORD4" class="tab-pane ">
                     <SituationExecutionActiviteBailleur></SituationExecutionActiviteBailleur>
                  </div>

                  <div id="test1" class="tab-pane ">
                     <testLega></testLega>
                  </div> -->
                 <div id="TABLEAUBORD4" class="tab-pane ">
                     <SituationExecutionActiviteBailleur></SituationExecutionActiviteBailleur>
                  </div>
                  <div id="TABLEAUBORD3" class="tab-pane ">
                     <SituationExecutionBudgetaireParBailleur></SituationExecutionBudgetaireParBailleur>
               
                  </div>
                   <div id="TABLEAUBORD5" class="tab-pane ">
                     <SituationExecutionBudgetaireParSection></SituationExecutionBudgetaireParSection>
               
                  </div>

                  


                   <div id="MANDAT" class="tab-pane ">
                       <h3 style="text-align:center">DETAIL OP DIRECT</h3>
     
                              
                  </div>
                   <!-- <div id="SYSTEME" class="tab-pane" >
             45
                  </div> -->
                </div>
            
                
               

                <br />
              </div>
            </table>
          </div>
               
                             
          
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
// import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
import { formatageSomme } from "@/Repositories/Repository";
import EtatExecutionBailleurSection from "./EtatExecutionBailleurSection"
import TableausuiviBudgets from "./TableauSuiviBudgets"
import StituationExecutionBudgetActiviteLigne from "./StituationExecutionBudgetActiviteLigne"
// import SituationExecuBudgetRecapActivite from "./SituationExecuBudgetRecapActivite"
import SituationExecutionActiviteBailleur from "./SituationExecutionActiviteBailleur"

import SituationExecutionBudgetaireParBailleur from "./SituationExecutionBudgetaireParBailleur"
import SituationExecutionBudgetaireParSection from "./SituationExecutionBudgetaireParSection"
// import RechercheExecutionBudgetaire from "./RechercheExecutionBudgetaire"
// import recapitulatifBudgetHorsSigobe from "../../ExecutionBudgetaire/BudgetEclateHorsSib/recapitulatifBudgetHorsSigobe/recapitulatifBudgetHorsSigobe"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
     components: {
       EtatExecutionBailleurSection,
       SituationExecutionBudgetaireParBailleur,
       SituationExecutionBudgetaireParSection,
   // ModelListSelect,
    // TableauBordBudgetEclate,
    TableausuiviBudgets,
    StituationExecutionBudgetActiviteLigne,
 
    // SituationExecuBudgetRecapActivite,
    
    // RechercheExecutionBudgetaire,
    // recapitulatifBudgetHorsSigobe,
     SituationExecutionActiviteBailleur
  },
  name:'',
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        
      ],
      formData:{
        unite_administrative_id:0
      },
      editMandat:{
        test:0,
        
      }
    };
  },

  computed: {
    //    admin: admin,
    // dcf: dcf,
    // noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
     ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5",
    ]),
     ...mapGetters("uniteadministrative", [
      "budgetEclate",
      
      "getSousBudget",
      "BudgetEclateRegie",
      "uniteAdministratives",
     
    ]),
    ...mapGetters("bienService", [
     "gettersgestionOrdrePaiement"
    ]),
   
    
// FIN code op Definitif
  },
  methods: {
    ...mapActions("uniteadministrative", [
      
    ]),
       
 formatageSomme:formatageSomme,
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>


</style>


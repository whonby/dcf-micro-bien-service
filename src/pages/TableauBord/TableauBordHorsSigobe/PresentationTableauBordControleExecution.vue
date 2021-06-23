
<template>
  <div>
      <!-- <h3 style="text-align:center">TABLEAU DE BORD DU BUDGET HORS SIGOBE</h3>
     -->
  
        <!-- <div style="text-align:center;border:4px solid blue;font-weight:bold"> <h3 style="text-align:center">TABLEAU DE BORD UA PROJETS (ANNEE EN COURS)</h3></div>
          <h3 style="text-align:center">{{AffichLibelle(formData.unite_administrative_id)}}</h3> -->
         <br>
     
  

  <div class="table-responsive text-nowrap" >
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                   
                     <li class="active" >
                      <a data-toggle="tab" href="#DEMANDE" style="font-size:16px"
                        >TABLEAU DE BORD 1 </a
                      >
                    </li>
                     <li class=""  >
                      <a data-toggle="tab" href="#COMMANDE" style="font-size:16px"
                        >TABLEAU DE BORD 2</a
                      >
                    </li>
                     <!-- <li class="" >
                      <a data-toggle="tab" href="#LIQUIDATION"
                        >TABLEAU DE BORD 3</a
                      >
                    </li> -->
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
                 
                  <div id="DEMANDE" class="tab-pane active" >
                    <!-- <h3 style="text-align:center">DETAIL OP PROVISOIRE</h3> -->
                <TableauBordExecutionHorsSigobe></TableauBordExecutionHorsSigobe>
                         
                  </div>
                  <div id="COMMANDE" class="tab-pane">
                  <TableauSuiviTypesOpExercice></TableauSuiviTypesOpExercice>
                  </div>
                  <div id="LIQUIDATION" class="tab-pane ">
                     <TableauSuiviOPStatut></TableauSuiviOPStatut>
               
                  </div>
                  <!--  <div id="MANDAT" class="tab-pane ">
                       <h3 style="text-align:center">DETAIL OP DIRECT</h3>
     
                              
                  </div> -->
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
import TableauBordExecutionHorsSigobe from "./TableauBordExecutionHorsSigobe"
import TableauSuiviTypesOpExercice from "./RapportControleExecution/TableauSuiviTypesOpExercice"
import TableauSuiviOPStatut from "./RapportControleExecution/TableauSuiviOPStatut"
// import RechercheExecutionBudgetaire from "./RechercheExecutionBudgetaire"
//import recapitulatifBudgetHorsSigobe from "../../ExecutionBudgetaire/BudgetEclateHorsSib/recapitulatifBudgetHorsSigobe/recapitulatifBudgetHorsSigobe"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
     components: {
   // ModelListSelect,
    TableauBordExecutionHorsSigobe,
    TableauSuiviTypesOpExercice,
    TableauSuiviOPStatut
    // RechercheExecutionBudgetaire,
   // recapitulatifBudgetHorsSigobe
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


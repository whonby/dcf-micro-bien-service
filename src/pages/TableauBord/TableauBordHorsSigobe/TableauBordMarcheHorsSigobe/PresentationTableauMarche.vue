
<template>
  <div>
      <h3 style="text-align:center">TABLEAU DE BORD DES MARCHES HORS SIGOBE</h3>
    
  
      
         <br>
     
  

  <div class="table-responsive text-nowrap" >
            <table class="table table-bordered table-striped">
              <div class="widget-box">
                <div class="widget-title">
                  <ul class="nav nav-tabs">
                   
<li class="active"  style="font-size:14px">
                      <a data-toggle="tab" href="#SUIVIDESMARCHES"
                        >TB1 : SUIVI DES MARCHES </a
                      >
                    </li>
                      <li class=""  style="font-size:14px">
                      <a data-toggle="tab" href="#SYNTHESE"
                        >TB2 : SYNTHESE DES MARCHES </a
                      >
                    </li>
 <li class=""  style="font-size:14px">
                      <a data-toggle="tab" href="#AVENANT"
                        >TB3 : SYNTHESE DES MARCHE AVEC AVENANT </a
                      >
                    </li>
                   <li class=""  style="font-size:14px">
                      <a data-toggle="tab" href="#BAILLEUR"
                        >TB3 : SYNTHESE DES MARCHE PAR BAILLEUR </a
                      >
                    </li>
                  </ul>
                </div>
                <div class="widget-content tab-content">
                  <div id="SUIVIDESMARCHES" class="tab-pane active">
               <TableauBordSuiviMarche></TableauBordSuiviMarche>
                  </div>
                   <div id="SYNTHESE" class="tab-pane ">
                     <SyntheseMarche></SyntheseMarche>
                  </div>
 <div id="AVENANT" class="tab-pane ">
                     <MarcheParAvenant></MarcheParAvenant>
                  </div>
<div id="BAILLEUR" class="tab-pane ">
                     <TableauBordMarcheParBailleur></TableauBordMarcheParBailleur>
                  </div>

            
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
 import TableauBordSuiviMarche from "./TableauBordSuiviMarche"
  import SyntheseMarche from "./SyntheseMarche"
  import MarcheParAvenant from "./MarcheParAvenant"
  import TableauBordMarcheParBailleur from "../TableauBordBudgetHorsSigobe/TableauBordMarcheParBailleur"
//import TableausuiviBudgets from "./TableauSuiviBudgets"

// import RechercheExecutionBudgetaire from "./RechercheExecutionBudgetaire"
// import recapitulatifBudgetHorsSigobe from "../../ExecutionBudgetaire/BudgetEclateHorsSib/recapitulatifBudgetHorsSigobe/recapitulatifBudgetHorsSigobe"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
     components: {
       TableauBordMarcheParBailleur,
       MarcheParAvenant,
      TableauBordSuiviMarche,
      SyntheseMarche
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


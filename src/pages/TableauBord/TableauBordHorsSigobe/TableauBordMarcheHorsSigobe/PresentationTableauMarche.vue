
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
                        >TABLEAU BORD 1 </a
                      >
                    </li>
                      <li class=""  style="font-size:14px">
                      <a data-toggle="tab" href="#SYNTHESE"
                        >TABLEAU BORD 2 </a
                      >
                    </li>
 <!-- <li class=""  style="font-size:14px">
                      <a data-toggle="tab" href="#AVENANT"
                        >TABLEAU BORD 3 </a
                      >
                    </li> -->
                   <li class=""  style="font-size:14px">
                      <a data-toggle="tab" href="#BAILLEUR"
                        >TABLEAU BORD 4 </a
                      >
                    </li>
                     <li class=""  style="font-size:14px">
                      <a data-toggle="tab" href="#BAILLEURSECTION"
                        >TABLEAU BORD 5 </a
                      >
                    </li>
                     <li class=""  style="font-size:14px">
                      <a data-toggle="tab" href="#TABLEAUBORD6"
                        >TABLEAU BORD 6 </a
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
<div id="BAILLEURSECTION" class="tab-pane ">
                     <SyntheseMarcheBailleurSection></SyntheseMarcheBailleurSection>
                  </div>
                  <div id="TABLEAUBORD6" class="tab-pane ">
                     <SyntheseDesMarchesBailleurProjet></SyntheseDesMarchesBailleurProjet>
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
    import SyntheseMarcheBailleurSection from "./SyntheseMarcheBailleurSection"
  import TableauBordMarcheParBailleur from "../TableauBordBudgetHorsSigobe/TableauBordMarcheParBailleur"
  import SyntheseDesMarchesBailleurProjet from "./SyntheseDesMarchesBailleurProjet"
//import TableausuiviBudgets from "./TableauSuiviBudgets"

// import RechercheExecutionBudgetaire from "./RechercheExecutionBudgetaire"
// import recapitulatifBudgetHorsSigobe from "../../ExecutionBudgetaire/BudgetEclateHorsSib/recapitulatifBudgetHorsSigobe/recapitulatifBudgetHorsSigobe"
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
     components: {
       SyntheseDesMarchesBailleurProjet,
       SyntheseMarcheBailleurSection,
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


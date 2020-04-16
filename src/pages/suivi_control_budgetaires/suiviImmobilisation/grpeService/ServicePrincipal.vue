

<template>
  <div>


     
<!----- ajouter modal   ---->


    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="uniteAdministratives">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des Services</h5>
             
            </div>

            <div class="widget-content nopadding"  >
              
              <ServiceComponent v-for="equipement in uniteAdministratives"
                :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative"
                @suppression="supprimerBudget"
                >
                
              </ServiceComponent>

            

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

    
 <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import ServiceComponent from './ServiceComponent'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name: 'transfert',
 components: {
      ServiceComponent
  },
  data() {
    return {
      // json_fields: {
      //       'NATURE_SECTION': 'groupe.libelle',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'LIBELLE_SECTION':'article.nom_section'
           
           
      //   },
     fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
      formData: {
       s_ua_id:"",
           direction_id:"",
      libelle: "",
     
      },
      editTransfert: {
     	 s_ua_id:"",
           direction_id:"",
      libelle: "",
      
      
      },
     
       search:"",
       
    };
    
  },


  computed: {
        ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives"
      // "chapitres",
      // "sections"
    ]),
    
    ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 
 ...mapGetters('personnelUA', ['all_acteur_depense']),

 ...mapGetters("SuiviImmobilisation", [
      "familles",
   
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle",
      "articles",
      "services",
      "servicesua"]),
verroDirection() {
      return this.formData.s_ua_id == "";
    },
verroService() {
      return this.formData.direction_id == "";
    },
  directionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.directions.filter(element => element.d_ua_id == id);
        }
      };
    },
    
    ModifierdirectionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.directions.filter(element => element.d_ua_id == id);
        }
      };
    },
  },


  
  methods: {
    ...mapActions("uniteadministrative", [
     
      "ajouterService",
      "modifierService",
      "supprimerService",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),




    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
     
      this.ajouterService(this.formData);

      this.formData = {
           s_ua_id:"",
           direction_id:"",
      libelle: "",
      };
      },
      
      // }
     
     supprimerBudget(id){
      this.supprimerService(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
     
      this.modifierService(this.editTransfert);
   
this.$("#modificationModal").modal('hide');


      },
       // afficher modal de modification
    afficherModalModifierUniteAdministrative(articles) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTransfert = articles;
      
    },
     alert() {
      console.log("ok");
    },

    // formaterDate(date) {
    //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
    ExporterEnExel(){
      this.$refs.excel.click()
    }
    },
    
    
    
   
   
  }

</script>
<style scoped>

.tailgrand12{
  width: 640px;
  margin: 0 -25%;
 
}

</style>
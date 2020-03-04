

<template>
  <div>
     
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Direction</h3>
      </div>
      <div class="modal-body">
        
        <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="formData.d_ua_id" class="span6">
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
             </tr>
               <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Nom direction</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="formData.libelle"
                      class="span6"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
         
             
            </tr>
            
              
             
      
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

<!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Direction</h3>
      </div>
      <div class="modal-body">
         <table class="table table-bordered table-striped">
         
           
              <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="editTransfert.d_ua_id" class="span6">
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
             </tr>
             <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Nom direction</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="editTransfert.libelle"
                      class="span6"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
         
             
            </tr>
         
          
       
         
      
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierUniteAdministrativeLocal(editTransfert)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
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
              <h5>Listes des Directions</h5>
             
            </div>

            <div class="widget-content nopadding" v-if="uniteAdministratives.length" >
              <DirectionComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative"
                               
                @suppression="supprimerBudget"
                >
              </DirectionComponent>

            

            
              
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
import DirectionComponent from './DirectionComponent'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name: 'transfert',
 components: {
      DirectionComponent
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
      	d_ua_id:"",
      libelle: "",
     
      },
      editTransfert: {
     	d_ua_id:"",
      libelle: "",
      
      
      },
     
       search:"",
       
    };
    
  },

  computed: {
        ...mapGetters("uniteadministrative", [
      "directions",
      "services",
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

  },


  
  methods: {
    ...mapActions("uniteadministrative", [
     
      "ajouterDirection",
      "modifierDirection",
      "supprimerDirection",
     
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
     
      this.ajouterDirection(this.formData);

      this.formData = {
       	d_ua_id:"",
      libelle: "",
      };
      },
      
      // }
     
     supprimerBudget(id){
      this.supprimerDirection(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
     
      this.modifierDirection(this.editTransfert);
   
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
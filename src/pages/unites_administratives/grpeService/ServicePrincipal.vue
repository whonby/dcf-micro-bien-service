

<template>
  <div>


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Ajouter Service</h3>
      </div>
      <div class="modal-body">
        
        <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="formData.s_ua_id" class="span6">
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
                  <label class="control-label">Service</label>
                  <div class="controls">
                    <select v-model="formData.serviceua_id" class="span6" >
                      <option
                        v-for="typeUniteA in groupeServiceNorme"
                        :key="typeUniteA[0].id"
                        :value="typeUniteA[0].service_id"
                      >{{afficheServiceLibelle(typeUniteA[0].service_id)}}</option>
                    </select>
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
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Modifier Service</h3>
      </div>
      <div class="modal-body">
         <table class="table table-bordered table-striped">
         
           
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Unite d'administrative</label>
                  <div class="controls">
                    <select v-model="editTransfert.s_ua_id" class="span6">
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
             
                     <!-- <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Direction</label>
                  <div class="controls">
                    <select v-model="editTransfert.direction_id" class="span6">
                      <option
                        v-for="typeUniteA in ModifierdirectionDynamiques(editTransfert.s_ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.serviceua_id}}</option>
                    </select>
                  </div>
                </div>
              </td>
             </tr> -->
               <tr>
             <td>
                <div class="control-group">
                  <label class="control-label">Service</label>
                  <div class="controls">
                    <select v-model="editTransfert.serviceua_id" class="span6" >
                      <option
                        v-for="typeUniteA in groupeServiceNorme"
                        :key="typeUniteA[0].id"
                        :value="typeUniteA[0].service_id"
                      >{{afficheServiceLibelle(typeUniteA[0].service_id)}}</option>
                    </select>
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
        
       
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des Services</h5>
             
            </div>

            <div class="widget-content nopadding">
              
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
      //       'NATURE_SECTION': 'groupe.serviceua_id',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'serviceua_id_SECTION':'article.nom_section'
           
           
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
      serviceua_id: "",
     
      },
      editTransfert: {
     	 s_ua_id:"",
           direction_id:"",
      serviceua_id: "",
      
      
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
      "normeImmo",
      "groupeServiceNorme",
      "groupeFonctionNormeEquipe"
      
      ]),

afficheServiceLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },


anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },

normeDuService() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.service_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.norme),0).toFixed(0);
        }
      };
    },

 montantPourEtreEquipe() {
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.service_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total), 0).toFixed(0);
        }
      };
    },
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
     var objetService = {
       ...this.formData,
       normeequipement:this.normeDuService(this.formData.serviceua_id),
       historiqueequipement:this.normeDuService(this.formData.serviceua_id),
       montantequipement:this.montantPourEtreEquipe(this.formData.serviceua_id),
       exercicebudget:this.anneeAmort
     }
      this.ajouterService(objetService);

      this.formData = {
           s_ua_id:"",
           direction_id:"",
      serviceua_id: "",
      };
      },
      
      // }
     
     supprimerBudget(id){
      this.supprimerService(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
      var objetService = {
       ...this.editTransfert,
       normeequipement:this.normeDuService(this.editTransfert.serviceua_id),
       historiqueequipement:this.normeDuService(this.editTransfert.serviceua_id),
       montantequipement:this.montantPourEtreEquipe(this.editTransfert.serviceua_id),
       exercicebudget:this.anneeAmort
     }
      this.modifierService(objetService);
   
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
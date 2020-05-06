

<template>
  <div>

     
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Ajouter Equipement type</h3>
      </div>
      <div class="modal-body">
        
        <table class="table table-bordered table-striped">
         
          
               <tr>
                    
               <!-- <td>
                <div class="control-group">
             
              <div class="controls">
                <label> <input type="radio" name="radios" v-model="selectionService" />Service</label><label> <input type="radio" name="radios" v-model="selectionFonction" />Fonction</label>
                  
               
                 
              </div>
            </div>
              </td> -->
               <td>
                <div class="control-group">
                  <label class="control-label" >Service</label>
                  <div class="controls">
                    <select v-model="formData.service_id" class="span5" >
                    
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in services"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="formData.fonction_id" class="span5" >
                     
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in fonctions"
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
                  <label class="control-label">Famille</label>
                  <div class="controls">
                    <select v-model="formData.famille_id" class="span5" >
                     
                      <option value=""></option>
                      <option
                        v-for="typeUniteA in familles"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                   
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Norme</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="formData.norme"
                      class="span5"
                     
                      
                    />
                   
                    
                    
                  </div>
                </div>
              </td>
          <td>
                <div class="control-group">
                  <label class="control-label">Coût moyen</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="MontantMoyen"
                      class="span5"
                     readonly
                      
                    />
                   
                    
                    
                  </div>
                </div>
              </td>
             
            </tr>
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Montant Total</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="MontantTotal"
                      class="span5"
                     readonly
                      
                    />
                   
                    
                    
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Duree de vie</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="DureeAffche"
                      class="span5"
                     readonly
                      
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
        <button data-dismiss="modal" class="close" type="button">x</button>
        <h3>Modifier Equipement type</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
         
               
                     <tr>
               <!-- <td>
                <div class="control-group">
                  <label class="control-label">Direction</label>
                  <div class="controls">
                    <select v-model="editTransfert.direction_id" class="span5" >
                   
                      <option ></option>
                      <option value="Direction">Direction</option>
                    </select>
                  </div>
                </div>
              </td> -->
               <td>
                <div class="control-group">
                  <label class="control-label">Service</label>
                  <div class="controls">
                    <select v-model="editTransfert.service_id" class="span5" >
                      <option
                        v-for="typeUniteA in services"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Fonction</label>
                  <div class="controls">
                    <select v-model="editTransfert.fonction_id" class="span5" >
                      <option
                        v-for="typeUniteA in fonctions"
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
                  <label class="control-label">Famille</label>
                  <div class="controls">
                    <select v-model="editTransfert.famille_id" class="span5" >
                      <option
                        v-for="typeUniteA in familles"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Norme</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="editTransfert.norme"
                      class="span5"
                     
                      
                    />
                   
                    
                    
                  </div>
                </div>
              </td>
         <td>
                <div class="control-group">
                  <label class="control-label">Coût moyen</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="MontantMoyenModifier"
                      class="span5"
                     readonly
                      
                    />
                   
                    
                    
                  </div>
                </div>
              </td>
             
            </tr>
             <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Montant Total</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="MontantTotalModifier"
                      class="span5"
                     readonly
                      
                    />
                   
                    
                    
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Duree de vie</label>
                  <div class="controls">
                       <input
                      type="text"
                  :value="DureeAffcheModifier"
                      class="span5"
                     readonly
                      
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
              <h5>Listes des normes</h5>
             
            </div>

            <div class="widget-content nopadding" v-if="familles.length" >
              
              <NormeImmoComponent v-for="equipement in familles"
                :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative"
                @suppression="supprimerBudget"
                >
                
              </NormeImmoComponent>

            

            
              
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
import NormeImmoComponent from './NormeImmoComponent'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name: 'NormeImmoPrincipal',
 components: {
      NormeImmoComponent
  },
  data() {
    return {
      // json_fields: {
      //       'NATURE_SECTION': 'groupe.libelle',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'LIBELLE_SECTION':'article.nom_section'
           
           
      //   },
      direct:"",
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
     selectionService: [],
selectionFonction:[],
      formData: {
        service_id:"",
       s_ua_id:"",
           direction_id:"",
      libelle: "",
      	fonction_id:""
     
      },
      editTransfert: {
     	 service_id:"",
       s_ua_id:"",
           direction_id:"",
      libelle: "",
      	fonction_id:""
      
      
      },
     
       search:"",
       
    };
    
  },


  computed: {
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
      "services"
      
    ]),
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
 
 ...mapGetters('personnelUA', ['all_acteur_depense','fonctions']),



MontantParEquipementModifier(){
  
    
    var montant = this.articles.filter(element => element.famille_id == this.editTransfert.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 
getNombreArticleModifier(){
  
    
    return  this.articles.filter(element => element.famille_id == this.editTransfert.famille_id).length; 
      

   
  
}, 
MontantMoyenModifier() {
 
      
    const val = parseFloat((this.MontantParEquipementModifier)/this.getNombreArticleModifier).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  

    },

MontantTotalModifier() {
 
      
    const val = parseFloat((this.editTransfert.norme)*this.MontantMoyenModifier).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  

    },


MontantParEquipement(){
  
    
    var montant = this.articles.filter(element => element.famille_id == this.formData.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 
getNombreArticle(){
  
    
    return  this.articles.filter(element => element.famille_id == this.formData.famille_id).length; 
      

   
  
}, 
MontantMoyen() {
 
      
    const val = parseFloat((this.MontantParEquipement)/this.getNombreArticle).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  

    },

MontantTotal() {
 
      
    const val = parseFloat((this.formData.norme)*this.MontantMoyen).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  

    },






DureeAffcheModifier() {
      
      const norme = this.familles.find(normeEquipe => normeEquipe.id == this.editTransfert.famille_id);

      if (norme) {
        return norme.dureVie;
      }
      return 0
    },

 DureeAffche() {
      
      const norme = this.familles.find(normeEquipe => normeEquipe.id == this.formData.famille_id);

      if (norme) {
        return norme.dureVie;
      }
      return 0
    },

// verrouDirection() {
//   if(this.direct != 1){
// return this.formData.direction_id == "";

//   }
//     0 
//     },
// verrouService() {
 
//     if (this.direct != 2){
//         return this.formData.service_id == "";
//       }
//       0
//     },

// verrouFonction() {
 
//     if (this.direct != 3){
//         return this.formData.fonction_id == "";
//       }
//      0 
//     },



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


      familleNormeDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.direction_id == id);
        }
      };
    },
  },


  
  methods: {
    ...mapActions("SuiviImmobilisation", [
     
      "ajouterNormeImmob",
      "modifierNormeImmob",
      "supprimerNormeImmob",
     
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
     
     var objetNorme ={
       ...this.formData,
        cout_moyen: this.MontantMoyen,
      total: this.MontantTotal,
     }
      this.ajouterNormeImmob(objetNorme);

      this.formData = {
           service_id:"",
       s_ua_id:"",
           direction_id:"",
      libelle: "",
      	fonction_id:""
      };
      },
      
      // }
     
     supprimerBudget(id){
      this.supprimerNormeImmob(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
     var objetNorme ={
       ...this.editTransfert,
        cout_moyen: this.MontantMoyenModifier,
      total: this.MontantTotalModifier,
     }
      this.modifierNormeImmob(objetNorme);
   
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
  width:1500px;
  margin: 0 -45%;
 
}

</style>
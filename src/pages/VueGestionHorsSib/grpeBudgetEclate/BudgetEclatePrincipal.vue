

<template>
  <div>
     
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Eclatement du Budget</h3>
      </div>
      <div class="modal-body">
        
        <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Exercice budgetaire</label>
                  <div class="controls">
                       <input
                      type="text"
                    :value="anneeAmort"
                      class="span5"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
               <!-- <td colspan="2">
                <div class="control-group">
                  <label class="control-label">UA Emettrice</label>
                  <div class="controls">
                    <select v-model="formData.ua_id" class="span4">
                      <option
                        v-for="typeUniteA in UniteAdministrative"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select> -->


                    <!-- <model-list-select style="background-color: rgb(255,255,255);"
                                           class="wide"
                                           :list="uniteAdministratives"
                                           v-model="formData.ua_id"
                                           option-value="id"
                                           option-text="libelle"
                                           placeholder="Selectionner l'entreprise"
                                           
                        >

                        </model-list-select> -->
                  <!-- </div>
                </div>
              </td> -->
               <td>
                <div class="control-group">
                  <label class="control-label">UA Réceptrice</label>
                  <div class="controls">
                      <select v-model="formData.uniteadministrative_id" class="span5" >
                                <option v-for="varText in GroupeUaReceptrice" :key="varText[0].unitezone_id"
                              :value="varText[0].unitezone_id">{{libelleUAdministrative(varText[0].unitezone_id)}}</option>
                            </select>
                  </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                  <label class="control-label">Total disponible</label>
                  <div class="controls">
                       <input
                      type="text"
                   :value="RestantMontantTransferer"
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
                  <label class="control-label">Ligne Economique</label>
                  <div class="controls">
                    <select v-model="formData.ligneeconomique_id" class="span5">
                     <option
                        v-for="Bgeneral in recupererDernierNiveauPlanEconomique(calculerTaillerStructureEconomique)"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>

                    
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Grande Nature</label>
                  <div class="controls">
                    <select v-model="formData.grandenature_id" class="span5">
                       <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.code}} - {{gdenature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Dotation</label>
                  <div class="controls">
                       <input
                      type="text"
                   
                      class="span5"
                     v-model="formData.dotation"
                      
                    />
                   
                  </div>
                </div>
              </td>
              
             </tr>
            
              <tr>
                 
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
                  <label class="control-label">Exercice budgetaire</label>
                  <div class="controls">
                       <input
                      type="text"
                    :value="anneeAmort"
                      class="span4"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
               <!-- <td colspan="2">
                <div class="control-group">
                  <label class="control-label">UA Emettrice</label>
                  <div class="controls"> -->
                    <!-- <select v-model="formData.ua_id" class="span4">
                      <option
                        v-for="typeUniteA in UniteAdministrative"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select> -->


                    <!-- <model-list-select style="background-color: rgb(255,255,255);"
                                           class="wide"
                                           :list="uniteAdministratives"
                                           v-model="editBudgetEclate.ua_id"
                                           option-value="id"
                                           option-text="libelle"
                                           placeholder="Selectionner l'entreprise"
                                           
                        >

                        </model-list-select> -->
                  <!-- </div>
                </div>
              </td> -->
               <td>
                <div class="control-group">
                  <label class="control-label">UA Réceptrice</label>
                  <div class="controls">
                      <select v-model="editBudgetEclate.uniteadministrative_id" class="span4" :readOnly="verroBanque">
                                <option v-for="varText in uAReceptriceDynamiques(editBudgetEclate.ua_id)" :key="varText[0].unitezone_id"
                              :value="varText[0].unitezone_id">{{libelleUAdministrative(varText[0].unitezone_id)}}</option>
                            </select>
                      <!-- <model-list-select style="background-color: rgb(255,255,255);"
                                           class="wide"
                                           :list="uniteAdministratives"
                                           v-model="editBudgetEclate.ua_id"
                                           option-value="id"
                                           option-text="libelle"
                                           placeholder="Selectionner l'entreprise"
                                           
                        >

                        </model-list-select> -->

                  </div>
                </div>
              </td>
              
             </tr>
              <tr>
                <td colspan="">
                <div class="control-group">
                  <label class="control-label">Total disponible</label>
                  <div class="controls">
                       <input
                      type="text"
                   :value="RestantMontantTransferer"
                      class="span4"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Ligne Economique</label>
                  <div class="controls">
                    <select v-model="editBudgetEclate.ligneeconomique_id" class="span4">
                     <option
                        v-for="Bgeneral in recupererDernierNiveauPlanEconomique(calculerTaillerStructureEconomique)"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>

                    
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Grande Nature</label>
                  <div class="controls">
                    <select v-model="editBudgetEclate.grandenature_id" class="span4">
                       <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.code}} - {{gdenature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Dotation</label>
                  <div class="controls">
                       <input
                      type="text"
                   
                      class="span4"
                     v-model="editBudgetEclate.dotation"
                      
                    />
                   
                  </div>
                </div>
              </td>
              
             </tr>
            
              <tr>
                 
              </tr>
             
      
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierUniteAdministrativeLocal(editBudgetEclate)"
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
              <h5>Listes Budgets Eclates</h5>
             
            </div>

            <div class="widget-content nopadding" >
              <BudgetEclateComponent v-for="equipement in UniteAdministrative"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative"
                               
                @suppression="supprimerBudget"
                >
              </BudgetEclateComponent>

            

            
              
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
import BudgetEclateComponent from './BudgetEclateComponent'
import {admin,dcf,cf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
  // import {  ModelListSelect } from 'vue-search-select'
  //   import 'vue-search-select/dist/VueSearchSelect.css'
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name: 'transfert',
 components: {
      BudgetEclateComponent,
      // ModelListSelect
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
      	
     
      },
      editBudgetEclate: {
    
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
      "uniteAdministratives",
      "jointureUaChapitreSection",
      "budgetEclate",
      "GroupeUaReceptrice",
      "transferts"
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

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire","structures_budgetaires"]),
 
 ...mapGetters('personnelUA', ['all_acteur_depense']),
 admin:admin,
      dcf:dcf,
        cf:cf,
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
   

recupererDernierNiveauPlanEconomique() {
      return id => {
        if (id != null && id != "") {
           return this.plans_budgetaires.filter(qtreel => this.RecupererNiveauStructureEconomique(qtreel.structure_budgetaire_id) == id);
      
        }
      };
    },
   
   RecupererNiveauStructureEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
   
   calculerTaillerStructureEconomique(){
     return this.structures_budgetaires.length
   },








sommeTotalDisponible() {
     return id => {
        if (id != null && id != "") {
          return this.transferts.filter(
            element => element.unitezone_id == id
          ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0);
        }
        return 0
      };
    },
sommeTotalConsomme() {
     return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            element => element.uniteadministrative_id == id
          ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
         return 0
      };
     
    },

RestantMontantTransferer() {
      const val = parseFloat(this.sommeTotalDisponible(this.formData.uniteadministrative_id)) - parseFloat(this.sommeTotalConsomme(this.formData.uniteadministrative_id));
      return parseFloat(val).toFixed(0);
    },


 verroBanque() {
      return this.formData.ua_id == "";
    },

UniteAdministrative() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
          
        }
        return this.uniteAdministratives

    },
    filtre_unite_admin() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.transferts.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unitezone_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
          
        }
        return this.transferts

    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
      uAReceptriceDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.GroupeUaReceptrice.filter(
            element => element[0].ua_id == id
          );
        }
      };
    },
    libelleUAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
   
  },



  
  methods: {
    ...mapActions("uniteadministrative", [
     
      "ajouterBudgetEclate",
      "modifierBudgetEclate",
      "supprimerBudgetEclate",
     
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
     
      if(this.RestantMontantTransferer == 0){
        alert("Pas de montant disponible")
      }
      else{
        var nouvelObjet = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
         
      };
        this.ajouterBudgetEclate(nouvelObjet);

      this.formData = {
       	uniteadministrative_id:"",
      ligneeconomique_id: "",
      	grandenature_id:"",
      dotation: "",
      };
      }

      
      },
      
      // }
     
     supprimerBudget(id){
      this.supprimerBudgetEclate(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
     
      this.modifierBudgetEclate(this.editBudgetEclate);
   
this.$("#modificationModal").modal('hide');


      },
       // afficher modal de modification
    afficherModalModifierUniteAdministrative(articles) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editBudgetEclate = articles;
      
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
  width: 90%;
  margin: 0 -45%;
 
}

</style>
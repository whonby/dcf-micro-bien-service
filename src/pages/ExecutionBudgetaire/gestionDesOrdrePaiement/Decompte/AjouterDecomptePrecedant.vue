
<template>

<div class="container-fluid">
      <hr />
      
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                    <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter Decompte</h5>
              
            </div>
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#SansContratIdent">Identification</a>
                      </li>
                       
                      <!-- <li>
                        <a data-toggle="tab" href="#SansContratAffect">Affectation</a>
                      </li> -->
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="SansContratIdent" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <tr>
<td colspan="">
                     <div class="control-group">
                                                    <label class="control-label">Exercice</label>
                                                    <div class="controls">
                                                        <select v-model="formData.exercicebudget" class="span12">
                                                            <option></option>
                                                            <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.annee">
                                                                {{item.annee}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
               <td>
 
                                                    <label class="control-label">Numéro Decompte</label>
                                                    <div class="controls">
                                                        <input type="text"  v-model="formData.numero_decompte"  placeholder="" class="span"/>
                                                    </div>
                                                
                </td>
               <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Numéro du marche <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="acteEffetFinanciers"
                                                   v-model="formData.marche_id"
                                                   option-value="marche_id"
                                                   option-text="numero_marche"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              
                  </td>
                
                
               
              
                
            </tr>
            <tr>
                <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Unite administrative <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="formData.uniteadministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              
                  </td>
               <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Entreprise <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="entreprises"
                                                   v-model="formData.entreprise_id"
                                                   option-value="id"
                                                   option-text="raison_sociale"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              
                  </td>
            </tr>
            <tr>
                <td colspan="4">
               <div class="control-group">
            <label class="control-label">Objet marché / contrat</label>
            <div class="controls">
              <textarea
               
                :value="AfficheObjetMarche(formData.marche_id)"
                class="span" rows="2"
                placeholder=""
              ></textarea>
            </div>
          </div>
              </td>
            </tr>
            <tr>
                <td colspan="">
                     <div class="control-group">
                                                    <label class="control-label">Montant du marche</label>
                                                    <div class="controls">
                                                         <money :value="AfficheMontantMarche(formData.marche_id)"  readOnly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                                                        
                                                    </div>
                                                </div>
                </td>
                <td colspan="">
                     <div class="control-group">
                                                    <label class="control-label">Montant Payé</label>
                                                    <div class="controls">
                                                         <money v-model="formData.montantmarche"    style="text-align:left;color:red;font-size:16px"  class="span"></money>
                                                        
                                                    </div>
                                                </div>
                </td>

                  <td colspan="">
                     <div class="control-group">
                                                    <label class="control-label">Date de paiement</label>
                                                    <div class="controls">
                                                        <input type="date" v-model="formData.date_decompte"  placeholder="" class="span"/>
                                                    </div>
                                                </div>
                </td>
            </tr>
            
            </table>
          </div>
          
                    </div>
                   
                     <!-- <div id="tab3" class="tab-pane">
                      

                    </div> -->
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane">
                    
                      
                    </div> -->
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterDecompte"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListeExecution()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
         
          </div>
        </div>
      </div>
      <notifications/>
    </div>


































</template>
<script>

    import {mapGetters, mapActions} from 'vuex'
    //import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth"
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
    ModelListSelect,

  },
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                formData : {
                
                   diff_decompte:1
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            this.allActeurDepense();
            
        },
        computed: {
    //        admin:admin,
    //   dcf:dcf,
    //   noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',"gettersMotifPassations",
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupeUaPourMarheHorSib" ,"budgetEclate","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","getPersonnaliseTransfert" ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite',""]),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
  ...mapGetters('parametreGenerauxFonctionnelle', ['Nature_des_prix','motif_passation']),
  

  ...mapGetters("Utilisateurs", ["user","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
AfficheMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return "Non renseigné"
        }
      };
    },
    AfficheObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return "Non renseigné"
        }
      };
    },
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            ...mapActions('bienService',[
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
           
...mapActions("uniteadministrative", [
      "ajouterDecompteFacture",
      
    ]),
           afficherModalListeExecution(){
                window.history.back();
            },
           afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            
            AjouterDecompte () {
             var objetNouveau={
               ...this.formData,
               diff_decompte:1
               
             }
                this.ajouterDecompteFacture(objetNouveau)
                
                this.formData = {
                    marche_id: "",
                    numero_decompte: "",
                     exercicebudget: "",
                    uniteadministrative_id: "",
                     entreprise_id: "",
                    montantmarche: "",
                     date_decompte: ""
                }
                // this.$router.push({ name: 'Acteur' })
            },
// afficher
            


        }
    };
</script>


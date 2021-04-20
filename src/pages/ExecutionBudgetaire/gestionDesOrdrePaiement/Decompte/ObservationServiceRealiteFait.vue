
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
              <h5>Voir Observation Service Realite Fait</h5>
              
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
            <td>
              <div class="control-group">
                <label class="control-label">Numero Ordre Paiement</label>
                <div class="controls">
                  <input
                    type="text"
                    :value="numeroOP(marcheid)"
                    class="span6"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Date Observation</label>
                <div class="controls">
                  <input
                    type="date"
                   :value="dateobservationagentcf(marcheid)"
                    class="span6"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Observation</label>
                <div class="controls">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                   :value="observationagentcf(marcheid)"
                    class="span12"
                  ></textarea>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Nom et Prénoms Agent cf</label>
                <div class="controls">
                  <input
                    type="text"
                   :value="nomagentid(marcheid)"
                    class="span12"
                  />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
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
    //import {  ModelListSelect } from 'vue-search-select'
    //import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
    //ModelListSelect,

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
                exonere:0,
                   diff_decompte:1
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.decomptefactures.find(
       idmarche => idmarche.id == this.$route.params.id
         )
   
      
},
        computed: {
   
 ...mapGetters("bienService", ["gettersgestionOrdrePaiement","gettersServiceRealiteFaitOp","personnaliseGetterMarcheBailleur","avenants",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',"gettersMotifPassations",
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupeUaPourMarheHorSib" ,"budgetEclate","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","getPersonnaliseTransfert","decomptefactures"]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite',""]),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure',"taux"]),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
  ...mapGetters('parametreGenerauxFonctionnelle', ['Nature_des_prix','motif_passation']),
  

  ...mapGetters("Utilisateurs", ["user","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

  observationagentcf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersServiceRealiteFaitOp.find(qtreel => qtreel.op_definitif_id == id);
if (qtereel) {
        return qtereel.observation_agent_cf;
      }
      return 0
        }
      };
    },
      	dateobservationagentcf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersServiceRealiteFaitOp.find(qtreel => qtreel.op_definitif_id == id);
if (qtereel) {
        return qtereel.date_observation_agent_cf;
      }
      return 0
        }
      };
    },
    	nomagentid() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersServiceRealiteFaitOp.find(qtreel => qtreel.op_definitif_id == id);
if (qtereel) {
        return qtereel.nom_agent_id;
      }
      return 0
        }
      };
    },
      	numeroOP() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);
if (qtereel) {
        return qtereel.numero_ordre_paiement;
      }
      return 0
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
          
         
            
          
        }
    };
</script>


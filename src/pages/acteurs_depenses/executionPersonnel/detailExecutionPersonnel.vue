credit_auto
ligne_id
marcheid
<template>
  <div>
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>DETAIL  EXECUTION PERSONNEL </h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>
  <div class="widget-box">
                <div class="widget-content">
                    <div class="widget-content nopadding">
                       <h4 v-if="detail_Execution" style="text-align: center;font-size:20px;font-weight:bold;">MOIS DE PAIEMENT : {{detail_Execution.moisdepaiement}} </h4>
                        <table class="table table-striped table-bordered" v-if="detail_Execution">
                            <thead>
                           <tr>
                    <th>Exercice en cours</th>
                    <th title="unite administrative"> ua</th>
                    <!-- <th>programme</th>
                    <th>action</th>
                    <th>activité</th> -->
                    <th>ligne</th>
                    <!-- <th>Code Fichier</th> -->
                    <th>Objet Depense</th>
                    <th>Mois de Paiement</th>
                    <!-- <th>Montant des Salaires</th> -->
                    <th>Fichier Joint</th>
                      <th>Validation</th>
                    

                  </tr>
                            </thead>
                            <tbody>
                                  <tr>
                          <td  >{{detail_Execution.exerciceencours }}</td>
                    <td  >{{afficherUa(detail_Execution.ua_id) }}</td>
                      <!-- <td  >{{detail_Execution.programme_id }}</td>
                    <td  >{{detail_Execution.action_id }}</td>
                    <td  >{{detail_Execution.activité_id }}</td> -->
                    <td  >{{Codeeconomique(detail_Execution.ligne_id) }}</td>
                    <!-- <td  >{{detail_Execution.codefichier }}</td> -->
                    <td  >{{detail_Execution.objetdepense }}</td>
                    <td  >{{detail_Execution.moisdepaiement }}</td>
                    <!-- <td  >{{detail_Execution.montantdessalaires }}</td> -->
                    <td  >{{detail_Execution.fichierjoint || 'Non renseigné' }} </td>
                    <td>
                       <button v-if="detail_Execution.valisationvirement == 8"  class="btn  btn-success"   >                        
                     
                      <span    >Validé</span>
                      
                      </button>
                       <button v-else-if="detail_Execution.valisationvirement == 21171" class="btn  btn-warning">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="detail_Execution.valisationvirement == 22171" class="btn  btn-danger" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
  </div>
  </div>
  </div>
  <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab00001">Tableau de bord<span class="badge badge-info"></span></a>
                      </li>
                    
                       <li class="">
                        <a data-toggle="tab" href="#tab00007">Ordre de paiement <span class="badge badge-important"></span></a>
                      </li>
                      <li class="" v-if="afficheTabulationEngagement(detail_Execution.id) == 6">
                        <a data-toggle="tab" href="#tab00008">Engagement <span class="badge badge-important"></span></a>
                      </li>
                       <li class="" v-if="afficheTabulationLiquidation(afficherIdOrdrePaiement(detail_Execution.id)) == 10">
                        <a data-toggle="tab" href="#tab00009">Liquidation <span class="badge badge-important"></span></a>
                      </li>
                       <li class="" v-if="afficheTabulationMandat(afficherIdOrdrePaiement(detail_Execution.id)) == 20112">
                        <a data-toggle="tab" href="#tab000010">Mandat <span class="badge badge-important"></span></a>
                      </li>
                    </ul>
                  </div>

                  
                  
                  <div class="widget-content tab-content">

 <div id="tab000010" class="tab-pane">
                      
                  
                    <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab784569">EMETTEUR<span class="badge badge-info"></span></a>
                      </li>
                    
                       <!-- <li class="" v-if="prendreDecisionEmetteur(detail_Execution.id) == 201">
                        <a data-toggle="tab" href="#tab0078">ORDONNATEUR <span class="badge badge-important"></span></a>
                      </li> -->
                     <li class="" v-if="prendreDecisionCFMandat(detail_Execution.id) == 2017"    >
                        <a data-toggle="tab" href="#tab12023">CONTROLEUR FINANCIER <span class="badge badge-important"></span></a>
                      </li>
                    
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="tab784569" class="tab-pane active">
                       <emetteurMandat :PaiementPersoid="detail_Execution.id" ></emetteurMandat>
                    </div>
                     
                     <div id="tab12023" class="tab-pane">
                       <ControleurFinancierMandat :PaiementPersoid="detail_Execution.id" ></ControleurFinancierMandat>
                    </div>
                  </div>
                </div>
                    </table>
                       </div>








 <div id="tab00009" class="tab-pane">
                      
                  
                    <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab0098">EMETTEUR<span class="badge badge-info"></span></a>
                      </li>
                    
                       <li class="" v-if="prendreDecisionEmetteur(detail_Execution.id) == 201">
                        <a data-toggle="tab" href="#tab0078">ORDONNATEUR <span class="badge badge-important"></span></a>
                      </li>
                     <li class="" v-if="prendreDecisionOrdonnateur(detail_Execution.id) == 2011"    >
                        <a data-toggle="tab" href="#tab4785">CONTROLEUR FINANCIER <span class="badge badge-important"></span></a>
                      </li>
                    
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="tab0098" class="tab-pane active">
                       <liquidationPersoEmetteur :PaiementPersoid="detail_Execution.id" ></liquidationPersoEmetteur>
                    </div>
                     <div id="tab0078" class="tab-pane">
                         <liquidationPersoCoordonateur :PaiementPersoid="detail_Execution.id" ></liquidationPersoCoordonateur>
                    </div>
                     <div id="tab4785" class="tab-pane">
                       <liquidationPersoCf :PaiementPersoid="detail_Execution.id" ></liquidationPersoCf>
                    </div>
                  </div>
                </div>
                    </table>
                       </div>






                   <div id="tab00001" class="tab-pane active">
                       <div class="widget-content nopadding" >
     
             <div class="quick-actions_homepage">
      <ul class="quick-actions">
      
        <li class="bg_ly">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(dotationInite(detail_Execution.ligne_id)))}}</span>DOTATION BUDGETAIRE


          </a>
        </li>
       <li class="bg_ls">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(sommeEgagementLigneTableau(detail_Execution.ligne_id)))}}</span>CUMUL ENGAGEMENT
          </a>
        </li>
      
       <li class="bg_lo">
          <a href="#">
            <i class="icon-list-ol"></i>
            <span class="label label-important">{{formatageSomme(parseFloat(dotationInite(detail_Execution.ligne_id) - sommeEgagementLigneTableau(detail_Execution.ligne_id)))}}</span>DISPONIBLE BUDGETAIRE
          </a>
        </li>
      
      </ul>
    </div>
   
            </div>
                       </div>
                    <div id="tab00007" class="tab-pane">
                      
                  
                    <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab4569">CHEF DE PROJET<span class="badge badge-info"></span></a>
                      </li>
                    
                       <li class="" v-if="prendreDecision(detail_Execution.id) == 1">
                        <a data-toggle="tab" href="#tab7458">CONTROLEUR FINANCIER <span class="badge badge-important"></span></a>
                      </li>
                    
                    
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="tab4569" class="tab-pane active">
                       <ordrePaiement :PaiementPersoid="detail_Execution.id" ></ordrePaiement>
                    </div>
                     <div id="tab7458" class="tab-pane">
                         <ordrePaiementCf :PaiementPersoid="detail_Execution.id" ></ordrePaiementCf>
                    </div>
                  </div>
                </div>
                    </table>
                       </div>

                         <div id="tab00008" class="tab-pane">
                      
                  
                    <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab0789">CONTROLEUR FINANCIER<span class="badge badge-info"></span></a>
                      </li>
                     </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <div id="tab0789" class="tab-pane active">
                       <engagementPerso :PaiementPersoid="detail_Execution.id" ></engagementPerso>
                    </div>
                    
                  </div>
                </div>
                    </table>
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
  import moment from "moment";
     import { formatageSomme } from "../../../../src/Repositories/Repository";
     import ordrePaiement from '../executionPersonnel/ordrePaiement';
     import ordrePaiementCf from '../executionPersonnel/ordrePaiementCf';
     import engagementPerso from '../executionPersonnel/engagementPerso';
     import liquidationPersoEmetteur from '../executionPersonnel/liquidationPersoEmetteur';
     import liquidationPersoCoordonateur from '../executionPersonnel/liquidationPersoCoordonateur';
     import liquidationPersoCf from '../executionPersonnel/liquidationPersoCf';
     import emetteurMandat from '../executionPersonnel/emetteurMandat';
     import ControleurFinancierMandat from '../executionPersonnel/ControleurFinancierMandat';
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ordrePaiement,
    ordrePaiementCf,
    engagementPerso,
    liquidationPersoEmetteur,
    liquidationPersoCoordonateur,
    liquidationPersoCf,
    emetteurMandat,
    ControleurFinancierMandat
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      PaiementPersoid:"",
        exerciceBudgetaire:"",
     
      json_fields: {
        UNIT_ADMINISTRATIVE: "ua.libelle",
        // SECTION: "secti.nom_section",
        // SERVICE_GESTIONNAIRE: "servivegest.libelle",
        // LOCALISATION_GEO: "localgeo.libelle",
        // CODE: "code",
        // LIBELLE: "libelle",
        // DATE_CREATION: "date_creation"
      },
      search: ""
    };
  },
created() {
            this.executionPersoid=this.$route.params.id
            
   this.detail_Execution = this.paiementPersonnel.find(
       idExecution => idExecution.id == this.$route.params.id
         )
  
  
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
  computed: {
  ...mapGetters("bienService", ["modepaiements",'mandats','getMandatPersonnaliserPersonnel','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',"engagements",
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel","ordre_paiement"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
 "liquidation"
 
   
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),

    afficherIdOrdrePaiement() {
      return id2=> {
        if (id2!= null && id2!= "") {
           const qtereel = this.ordre_paiement.find(qtreel => qtreel.paiementperso_id == id2);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
     prendreDecisionOrdonnateur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.liquidation.find(qtreel => qtreel.paiementperso_id == id);

      if (qtereel) {
        return qtereel.decision_ordonnateur;
      }
      return 0
        }
      };
    },
     prendreDecisionCFMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.paiementperso_id == id);

      if (qtereel) {
        return qtereel.decision_emetteur;
      }
      return 0
        }
      };
    },
    prendreDecisionEmetteur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.liquidation.find(qtreel => qtreel.paiementperso_id == id);

      if (qtereel) {
        return qtereel.decision_emetteur;
      }
      return 0
        }
      };
    },
prendreDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ordre_paiement.find(qtreel => qtreel.paiementperso_id == id);

      if (qtereel) {
        return qtereel.motif_chef_projet;
      }
      return 0
        }
      };
    },
afficheTabulationEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ordre_paiement.find(qtreel => qtreel.paiementperso_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },
afficheTabulationLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.ordrepaiemnet_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },

afficheTabulationMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.liquidation.find(qtreel => qtreel.ordrepaiemnet_id == id);

      if (qtereel) {
        return qtereel.decision_controleur_financier;
      }
      return 0
        }
      };
    },
sommeEgagementLigneTableau: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserPersonnel.filter(normeEquipe => normeEquipe.ligne_budgetaire_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },
afficherListeSalaireEnExecution(){
return this.paiementPersonnel.filter(element => element.valisationvirement == 0)
},


 afficherUa() {
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

Codeeconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      };
    },

    
             dotationInite: function () {
                return id => {
                    if (id != "" && id != null) {
                        const qtereel = this.getPersonnaliseBudgetGeneralParPersonnel.find(normeEquipe => normeEquipe.economique_id == id);
                    if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 2
                   }
                }
            },                       
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
    ]),

    formatageSomme:formatageSomme,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}

</style>
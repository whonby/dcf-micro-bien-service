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
                      <th>Validation{{detail_Execution.exerciceencours}}</th>
                    

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
                       <button v-if="detail_Execution.valisationvirement == 1"  class="btn  btn-success"   >                        
                     
                      <span    >Validé</span>
                      
                      </button>
                       <button v-else-if="detail_Execution.valisationvirement == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="detail_Execution.valisationvirement == 3" class="btn  btn-danger" >                        
                     
                      
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
                      <li class="">
                        <a data-toggle="tab" href="#tab00008">Engagement <span class="badge badge-important"></span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab00009">Liquidation <span class="badge badge-important"></span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab000010">Mandat <span class="badge badge-important"></span></a>
                      </li>
                    </ul>
                  </div>

                  
                  
                  
                  <div class="widget-content tab-content">
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
                      
                   <ordrePaiement :PaiementPersoid="detail_Execution.id" ></ordrePaiement>
                   
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
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ordrePaiement
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
  ...mapGetters("bienService", ["modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel"
   
   
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

sommeEgagementLigneTableau: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
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
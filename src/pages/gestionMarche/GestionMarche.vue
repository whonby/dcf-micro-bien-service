
<template>
  <div>
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>GESTION DES MARCHES </h5>
             
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
                        <a data-toggle="tab" href="#tab00007">Importation ppm <span class="badge badge-important"></span></a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab00008">Listes des marchés <span class="badge badge-important"></span></a>
                      </li>
                       <!-- <li class="">
                        <a data-toggle="tab" href="#tab00009">Liquidation <span class="badge badge-important"></span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab000010">Mandat <span class="badge badge-important"></span></a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

                    <div id="tab00007" class="tab-pane">
                <table class="table table-bordered table-striped">
    
                 <PlanPassationMarche></PlanPassationMarche>
              </table>
                  </div>


                   <div id="tab00001" class="tab-pane active">
                     <table class="table table-bordered table-striped">
               
                <tableauBord></tableauBord>
              </table>
                   </div>
 <div id="tab00008" class="tab-pane ">
                     <table class="table table-bordered table-striped">
               
                <historiqueMarche></historiqueMarche>
              </table>
                   </div>
                    <!-- <div id="tab00009" class="tab-pane active">
                     <table class="table table-bordered table-striped">
               
                
              </table>
                   </div>
                    <div id="tab000010" class="tab-pane active">
                     <table class="table table-bordered table-striped">
               
                
              </table>
                   </div> -->
                  </div>
                  <br />
              
                </div>
              </table>
            </div>  
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
 import PlanPassationMarche from '../bien_service/ppm/PlanPassationMarche';
 import historiqueMarche from '../gestionMarche/historiqueMarche';
 import tableauBord from '../gestionMarche/tableauBordMarche'
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    PlanPassationMarche,
    historiqueMarche,
    tableauBord
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
     
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
                                    
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
    ]),

   
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}

</style>
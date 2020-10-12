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

                      <!-- <li class="" v-if="admin() || dcf()">
                        <a data-toggle="tab" href="#tab00007">Importation PPM <span class="badge badge-important"></span></a>
                      </li> -->
                     <li class="">
                        <a data-toggle="tab" href="#tab00008">Liste des marchés <span class="badge badge-info"></span></a>
                      </li>
                       
                     <li class="">
                        <a data-toggle="tab" href="#marchehppm">Liste des marchés Hors PPM   <span class="badge badge-warning"></span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#marcheEntreprise">Marché par entreprise  <span class="badge badge-warning"></span></a>
                      </li>
                            <!-- <li class="">
                        <a data-toggle="tab" href="#tab00214">Liste des Marchés de Bien&Service et Fourniture   <span class="badge badge-warning">{{nombreMarcheBienServiceEtFourniture}}</span></a>
                      </li>
                     
                       <li class="">
                        <a data-toggle="tab" href="#tab00009">Liste des marchés en investissement    <span class="badge badge-important">  {{nombreDeMarcheI}}</span></a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab000010">Liste des Contrats     <span class="badge badge-inverse">  {{nombreDeContrat}}</span></a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

                    <div id="tab00007" class="tab-pane">
                <table class="table table-bordered table-striped">
    
                 <!-- <PlanPassationMarche></PlanPassationMarche> -->
              </table>
                  </div>


                   <div id="tab00001" class="tab-pane active">
                     <table class="table table-bordered table-striped">
               
                <tableauBord></tableauBord>
              </table>
                   </div>
       <div id="tab00008" class="tab-pane ">
        
               
                <marche></marche>
              
                   </div>
                   <div id="marcheEntreprise" class="tab-pane">
                     <table class="table table-bordered table-striped">
                    
               
              </table>
                   </div>
                    <div id="marchehppm" class="tab-pane">
                     <table class="table table-bordered table-striped">
                    
                
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
import marche from "./marche"
import {mapGetters} from "vuex"
export default {
    components:{
        marche
    },
    data(){
        return{

        }
    },
    created(){

    },
    computed:{
         ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

     ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","jointureUaChapitreSection" , ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
    ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques']),

    ...mapGetters("horSib", ["gettersMarcheHorsib"]),

    },
    methods:{

    }
}
</script>
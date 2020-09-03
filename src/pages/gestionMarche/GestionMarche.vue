
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

                      <li class="" v-if="admin() || dcf()">
                        <a data-toggle="tab" href="#tab00007">Importation PPM <span class="badge badge-important"></span></a>
                      </li>
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
<div id="tab000078" class="tab-pane">
                <table class="table table-bordered table-striped">
    
                 <synthesebudg></synthesebudg>
              </table>
                  </div>
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
                   <div id="marcheEntreprise" class="tab-pane">
                     <table class="table table-bordered table-striped">
                    
                <marcheParEntreprise></marcheParEntreprise>
              </table>
                   </div>
                    <div id="marchehppm" class="tab-pane">
                     <table class="table table-bordered table-striped">
                    <marcheHorsppm></marcheHorsppm>
                
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
import {admin,dcf} from '../../../src/Repositories/Auth';
 import PlanPassationMarche from '../bien_service/ppm/PlanPassationMarche';
 import historiqueMarche from '../gestionMarche/historiqueMarche';
 import tableauBord from '../gestionMarche/tableauBordMarche';
  import synthesebudg from '../gestionMarche/synthesebudg'
   import marcheParEntreprise from '../gestionMarche/marcheParEntreprise';
  // import  historiqueInvestissement from '../gestionMarche/dosierHistoriqueInvestissement/historiqueInestissement'
  // import historiquePersonnel from '../gestionMarche/dossierHistoriquePersonnel/historiquePersonnel'
   import marcheHorsppm from '../gestionMarche/marcheHorsppm'
// import moment from "moment";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    PlanPassationMarche,
    historiqueMarche,
    tableauBord,
    synthesebudg,
    marcheParEntreprise,
    // historiqueInvestissement,
    // historiquePersonnel,
    marcheHorsppm
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
...mapGetters("Utilisateurs", ["logoutUser","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

    


afficherNombreMarcheHorsPPM() {
       // const st = this.search.toLowerCase();
        if (!this.admin || !this.dcf){
            let colect=[];
            this.printMarcheNonAttribue.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.objetUniteAdministrative.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(items=>items.mvtmarche == 1).length;
        
        }
else{
return this.printMarcheNonAttribue.filter(items=>items.mvtmarche == 1).length;
}
        
           
    },
// 0() {
//        // const st = this.search.toLowerCase();
//         if (!this.admin || !this.dcf){
//             let colect=[];
//             this.printMarcheNonAttribue.filter(item=>{
//                 let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
//                 if (val!=undefined){
//                     colect.push(item)
//                     return item
//                 }
//             })
//             return this.colect.filter(items=>items.mvtmarche== 'hppm').length;
           
//         }

//         return this.printMarcheNonAttribue.filter(items=>items.mvtmarche== 'hppm').length;
           
//     },
afficherLaListeDesMarche(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 4 || element.type_marche.code_type_marche == 1)
},


nombreMarcheBienServiceEtFourniture(){
  return this.afficherLaListeDesMarche.length;
},


// afficher le nombre du marché

nombreDeMarche(){
  return this.printMarcheNonAttribue.length;
},



afficherLaListeDesContratsDuPersonnel(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 2)
},


// afficher le nombre de contrat et contrat planifié dans le personnel
nombreDeContrat(){
  return this.afficherLaListeDesContratsDuPersonnel.length;
},


afficherLaListeDesMarcheDinvestissement(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 3)
},



// afficher le nombre du marché

nombreDeMarcheI(){
  return this.afficherLaListeDesMarcheDinvestissement.length;
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
                                    
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
    ]),
 admin:admin,
     dcf:dcf,
   
  }
};
</script>
<style scoped>

.tailgrand{
      width: 95%;
margin: 0 -48%;

  
}

</style>
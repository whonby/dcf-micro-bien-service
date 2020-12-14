afficheNumeroMarche
<template>
  	<div>

<div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>DETAIL  MARCHE </h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>
   <div class="widget-box">
                
            </div>
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">TABLEAU DE BORD</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab2">DETAIL EXECUTION</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#tab22">PARAMETRAGE ECHEANCIER</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab03">IMAGES DES MARCHES</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab040">EVOLUTION DES MARCHES</a>
                      </li> 
                      <li>
                        <a data-toggle="tab" href="#tab041">SITUATION DES MARCHE</a>
                      </li> 
                    <li>
                        <a data-toggle="tab" href="#tab0401">SITUATION DES MARCHE</a>
                      </li> 
                    </ul>
                  </div>
                         <div class="widget-content tab-content">
                           <!-- <div id="tab03" class="tab-pane ">
                         <imageMarche :macheid="detail_marche.id"></imageMarche>
                      </div> -->
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
  RECHERCHE PAR ANNEE
          </div>
                            <div id="tab2" class="tab-pane ">
  RECHERCHE PAR SECTION
        </div>
                      <div id="tab22" class="tab-pane ">
                          RECHERCHE PAR UA
                      </div>

                       <div id="tab03" class="tab-pane ">
                      
                        RECHERCHE PAR ANNEE ET UA ET VEHICULE
                      </div>

                      <div id="tab040" class="tab-pane ">
                        RECHERCHE PAR ANNEE ET UA ET VEHICULE
                      </div>
<div id="tab0401" class="tab-pane ">
                        RECHERCHE PAR  VEHICULE
                      </div>
                     
      </div>
                </div>
              </table>
              

</div>
    </div>
</div>


    </div>
    
        <!-- <div class="container-fluid"> -->


    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->








    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->













        </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    // import moment from "moment";
    // import { formatageSomme } from './../../../../../Repositories/Repository';
   

                
  export default {
  watch: {
  },
        name: 'compte',
        components:{
        

        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                
              


            };
           
        },
created() {
       
},
        computed: {
            ...mapGetters("bienService", ["typeMarches",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

           ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle",
      "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
   
 ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),


        },
        methods: {
            ...mapActions("bienService", [
                "getEngagement",
                "supprimerEngagement",
                "modifierEngagement",
                "ajouterEngagement",
                "ajouterMandat",
                "modifierMandat",
                "supprimerMandat",
                "ajouterFacture",
                "modifierFacture",
                "supprimerFacture",
                "ajouterChoixProcedure",
                 "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierMarche",
      "getActeEffetFinancier",
      "getMarche"
               
            ]),
 ...mapActions("uniteadministrative", [              
                "modifierMontantBudgetaire",
                "ajouterRealiteServiceFait",
                "modifierRealiteServiceFait",
                "ajouterLiquidation",
                "modifierLiquidation",
                "supprimerLiquidation",
                "supprimerRealiteServiceFait"
            ]),
    

  retourListeEntreprise(){
                 this.$router.push({ name: 'executionMarche' })
            },


      // formatageSomme:formatageSomme,

            ExporterEnExel(){
                this.$refs.excel.click()
            },
    //          formaterDate(date) {
    //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },






  
   
    
    // afficher modal de modification
   
    // fonction pour vider l'input modification
  

    },


















         
        }
    








</script>
<style scoped>
 /* .testtaille {
        
      height: 1000px;
    } */
    .taillemodal45 {
        width: 1200px;
        margin: 0 -580px;
      
    }
    .gdmodelfour
    {
 width: 1000px;
 margin: 0 -580px;
 height: 500px;
    }
    .grdirModalActeEffet
    {

 width: 1000px;
 margin: 0 -530px;
 height: 500px;

    }
    .taillModal{
        width: 970px;
 margin: 0 -530px;

    }
    
    .sommecolor{
        background-color: red;
        color:red;
        font-size: 120%;
        text-align: center;
        font-weight:bold;
    }
       .taillemodal {
        width: 1200px;
        margin: 0 -680px;
    }
    .tailfacture{
      height: 500px;
    }

     .taillemodal6 {
        width: 1600px;
        margin: 0 -780px;
    }
    .taillemodal61 {
        width: 1500px;
        
    }
    .tailleRealiteServiceFait{
        width: 1600px;
        margin: 0 -780px;
    }
    .tailgrand{
  width: 89%;
  margin: 0 -45%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
</style>

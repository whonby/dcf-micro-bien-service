
<template>
  <div >
    <!--start-top-serch-->
    <MenuParamG v-if="active_el == 11"></MenuParamG>
    <MenuUA v-if="active_el == 1"></MenuUA>
    <MenuActeurDepense v-if="active_el == 2"></MenuActeurDepense>
    <MenuPlanification v-if="active_el ==3"></MenuPlanification>
    <MenuSuivi v-if="active_el == 4"></MenuSuivi>
    <MenuCatographie v-if="active_el ==5"></MenuCatographie>
    <MenuControlAxe v-if="active_el ==6"></MenuControlAxe>
    <MenuOperationRapport v-if="active_el ==7"></MenuOperationRapport>
    <MenuOpRisque v-if="active_el ==8"></MenuOpRisque>
     <MenuDefaut v-if="active_el ==0"></MenuDefaut>
    <Search></Search>
    
    
    <!--close-top-serch-->
  </div>
</template>

<script>

// var housecall = require('housecall');

// var queue = housecall({ concurrency: 2, cooldown: 1000 });

import MenuParamG from "../components/navs/menuParametreG";
import MenuUA from "../components/navs/menuUA";
import MenuActeurDepense from "../components/navs/MenuActeurDepense";
import MenuPlanification from "../components/navs/MenuPlanification";
import MenuSuivi from "../components/navs/MenuSuivi";
import MenuCatographie from "../components/navs/MenuCatographie";
import MenuControlAxe from "../components/navs/MenuControlAxe";
import MenuOperationRapport from "../components/navs/MenuOperationRapport.vue";
import MenuOpRisque from "../components/navs/MenuOpRisque.vue";
import MenuDefaut from "../components/navs/MenuDefaut.vue";
import Search from "../components/Search";

import { mapState, mapActions} from "vuex";
export default {
  components: {
    MenuParamG,
    MenuUA,
    MenuActeurDepense,
    MenuPlanification,
    MenuSuivi,
    MenuCatographie,
   MenuControlAxe,
   MenuOperationRapport,
   MenuOpRisque,
   MenuDefaut,
    Search
    
  },

  computed: {

       ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  })
  },

  methods: {
   

      ...mapActions('parametreGenerauxFonctionnelle', 
    [ 'getStructureFonctionnelle', 'getPlanFonctionnelle']),

    ...mapActions('parametreGenerauxSourceDeFinancement',['getSourceFinancement',
        'getTypeFinancement'
    ]),
   ...mapActions( 'parametreGenerauxBudgetaire', ['getStructureBudgetaire',
   'getPlanBudgetaire']),
   ...mapActions('parametreGenerauxActivite', [ 'getStructureActivite','getPlanActivite']),
   ...mapActions('parametreGenerauxProgrammeUnite',['getUnite', 'getZone']),

    ...mapActions('parametreGenerauxAdministratif',
     ['getExercicesBudgetaires', 'getTitres', 'getTaux',
    'getNatureSection', 'getSection', 'getStructureProgramme', 'getPlanProgramme', 
    'getStructureAdministrative', 'getServiceGestionnaire', 'getStructureGeographique',
    'getLocalisationGeographique', 'getChapitre','getTypeUniteAdministrative',"getGrandeNature"]),

 ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllUniteAdministrative",
      "getAllArchivageDocument",
      
      "getAllBudgetGeneral",
      "getAllHistoriqueBudgetGeneral"
    ]),
            ...mapActions('personnelUA', ['getTypeSalarie',"getEchelons",
            "getTypeContrat","getNiveauEtude","getFonctions","getTypeActPersonnel",
            "getClasses","getEchelons","getActeur","getGrades","getNbrActeurAcrediteTaux",
            "getActPersonnel","getConges","allActeurDepense","getListeSalaireActuelAll","getActeurFinContratAndActivite"]),

      ...mapActions('gestionMarche',['getTypeMarche',"getSecteurActivite",
        "getEntreprise","getEtapeMarche","getDocumentPTBAPPM","getMarcheContrat","getPresenceCF",
        "getDocumentPresence","getNombreMarcheByProcedure","sourcePersonnalise",
        "getSourceFinnancementByMarche","getMarcheContratExecution",
        "getBanque", "getCompte","getAgence"]),

        ...mapActions("SuiviImmobilisation", [
      
      "getAllService",
      "getAllEquipement",
      "getAllFamille",
      "getAllArticles",
      "getAllNormeArticle",
      "getAllStock",
      "getAllBesoinImmo",
      "getAllImmobilisation",
      "getAllAmortissement",
      
    ]),

    	 ...mapActions('suivi_controle_budgetaire', ['getCategorieMission', 'getNormeMission','getHistoriqueMission',
    'getMission']),
      //  ...mapActions('planification_budgetaire', ['getAllBudgetGeneral']),
       ...mapActions('bienService', ['getAvenant','getChoixProcedure','getActeurDepense', 'getBailleur','getTypeFacture',
       'getTypeActeDepense', 'getTypeActeEffetFinancier', 'getTypeAnalyse','getTypeTextJuridique','getAutreTextJuridique' ,
         'getTypePrestation', 'getCondition', 'getTextJuridique', 'getMarche', 'getTypeMarches',
       'getModePassations', 'getTypeProcedures', 'getProcedurePassation', "getAppelOffre","getLot",
         "getDossierCandidat", "getOffreFinancier", "getOffreTechnique","getLettreInvitation","getMandater",
         "getCojo","getAnalyseDossier", 'getMotifDecision', 'getDocumentProcedure',
         'getDemandeAno',"getAnalyseDMP","getAnoDMPBailleur","getObservationBailleur",
          'getActeEffetFinancier','getEngagement','getMandat',"getVille","getPays","getCommune",
          "getExecutionMarche","getTypeAppel","getTypeCandidat","getFacture"
          ,"getMarcheBailleur","getMembreCojo","getProceVerbal","getModePaiement"]),
               ...mapActions("Utilisateurs",["getRole","getModule","getEntite","getAtorisation","getUtilisateur"])


  },

  created(){
  this.getRole()
    this.getModule()
    this.getEntite()
    this.getUtilisateur()
    this.getAtorisation()
      this.getExercicesBudgetaires()
      this.getTaux()
      this.getModePaiement()
   this.getTitres()
   this.getNatureSection()
   this.getSection()
   this.getStructureProgramme()
   this.getPlanProgramme()
   this.getStructureAdministrative()
   this.getServiceGestionnaire()
   this.getStructureGeographique()
   this.getLocalisationGeographique()
   this.getChapitre()
   this.getStructureFonctionnelle()
   this.getPlanFonctionnelle()
   this.getSourceFinancement()
   this.getTypeFinancement()
   this.getStructureBudgetaire()
   this.getPlanBudgetaire()
    this.getStructureActivite()
    this.getPlanActivite()
    this.getGrandeNature()
    this.getTypeUniteAdministrative()
    // this. getPlanActivite()
    this.getUnite()
    this.getZone()
    this.getBanque()
    this.getAgence()
    this.getCompte()
    this.getPays()
this.getVille()
this.getCommune()
this.getChoixProcedure()

// this.getTypeProcedure()










this.getTypeCandidat();
this.getTypeAppel()





    
      this.getAllTypeTextes();
    this.getAllUniteAdministrative();
    this.getAllArchivageDocument();



      this.getListeSalaireActuelAll()
    this.getTypeSalarie()
        this.getTypeActPersonnel()
        this.getFonctions()
        this.getNiveauEtude()
        this.getTypeContrat()
        this.getClasses()
        this.getEchelons()
        this.getGrades()
        this.getActeur()
        this.getNbrActeurAcrediteTaux()
        this.getActPersonnel()
        this.getConges();
        this.allActeurDepense()
         this.getActeurFinContratAndActivite()
            /**Gestion des marche*/
            
      this.getTypeMarche()
      // this.s()
      this.getSecteurActivite()
      this.getEntreprise()
      this.getEtapeMarche()
      this.getDocumentPTBAPPM()
    this.getMarcheContrat()
    this.getPresenceCF()
    this.getDocumentPresence()
    this.getNombreMarcheByProcedure()
this.getMarcheContratExecution()

    this.getSourceFinnancementByMarche()
      /**Fin gestion des marche**/
this.getAllHistoriqueBudgetGeneral()
      /**
       * suivi des immo
       */
       
    this.getAllService();
    this.getAllEquipement();
    this.getAllFamille();
    this.getAllArticles();
    this.getAllNormeArticle();
    this.getAllStock();
    this.getAllBesoinImmo();
    this.getAllImmobilisation();
    //this.getAllAmortissement();
      /**
       * fin suivi des immo
       */

      /**
       * missions
       */
       this.getCategorieMission()
     this.getNormeMission()
   
      this.getMission()
       this.getHistoriqueMission() 
this.getAllBudgetGeneral()
 // debut du module de bien && service
this.getActeurDepense()
this.getBailleur()
this.getTypeFacture()
this.getTypeActeDepense()
this.getTypeActeEffetFinancier()
this.getTypeAnalyse()
this.getTypePrestation()
this.getCondition()
this.getTextJuridique()
this.getAutreTextJuridique()
this.getTypeTextJuridique()
this.getMotifDecision()
this.getDocumentProcedure()
// this.getDecisionMarche()

// this.getDecisionMarche()
this.getActeEffetFinancier()
 this.getFacture()
this.getTypeProcedures()
this.getTypeMarches()
this.getMarche()
this.getModePassations()
this.getProcedurePassation()
this.getEngagement()
this.getExecutionMarche()
this.getMandat()

 

    this.getAppelOffre()
this.getMarche()
    this.getLot()
    this.getModePassations()
    this.getDossierCandidat()
    this.getOffreFinancier()
    this.getOffreTechnique()
this.getLettreInvitation()
    this.getMandater()
    this.getCojo()
    this.getAnalyseDossier()
    this.getDemandeAno()
    this.getAnalyseDMP()
    this.getAnoDMPBailleur()
    this.getObservationBailleur()

   this.getAvenant()

    this.getMarcheBailleur()
this.getMembreCojo()
    this.getProceVerbal()
      /**
       * fin missions
       */
  }

};
</script>

 
<template>
  <div>
    <!--start-top-serch-->
    <MenuTableau v-if="active_el == 11"></MenuTableau>
    <MenuParamG v-if="active_el == 17"></MenuParamG>
    <MenuUA v-if="active_el == 1"></MenuUA>
    <MenuActeurDepense v-if="active_el == 2"></MenuActeurDepense>
    <MenuPlanification v-if="active_el ==3"></MenuPlanification>
    <MenuSuivi v-if="active_el == 4"></MenuSuivi>
    <MenuCatographie v-if="active_el ==5"></MenuCatographie>
    <MenuControlAxe v-if="active_el ==6"></MenuControlAxe>
    <MenuOperationRapport v-if="active_el ==7"></MenuOperationRapport>
    <MenuOpRisque v-if="active_el ==8"></MenuOpRisque>
    <MenuMilieu v-if="active_el ==20"></MenuMilieu>
     <MenuDefaut v-if="active_el ==0"></MenuDefaut>
    <Search></Search>
    
    
    <!--close-top-serch-->
  </div>
</template>

<script>

// var housecall = require('housecall');

// var queue = housecall({ concurrency: 2, cooldown: 1000 });
import MenuTableau from "../components/navs/menuTableauBord";
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
import MenuMilieu from "../components/navs/MenuMilieu.vue";
import Search from "../components/Search";

import { mapState, mapActions} from "vuex";
export default {
  components: {
    MenuTableau,
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
   MenuMilieu,
    Search
    
  },

  computed: {

       ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  })
  },

  methods: {

    ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles","getAffectation","getUniteAdminUser"]),
      ...mapActions('parametreGenerauxFonctionnelle', 
    [ 'getStructureFonctionnelle', 'getPlanFonctionnelle','getStructureDecision','getPlanDecision','getStructureActe','getPlanActe','getTypeconges','getlisteNaturePrix']),

    ...mapActions('parametreGenerauxSourceDeFinancement',['getSourceFinancement',
        'getTypeFinancement'
    ]),
   ...mapActions( 'parametreGenerauxBudgetaire', ['getStructureBudgetaire',
   'getPlanBudgetaire']),
   ...mapActions('parametreGenerauxActivite', [ 'getStructureActivite','getPlanActivite']),
   ...mapActions('parametreGenerauxProgrammeUnite',['getUnite', 'getZone']),

    ...mapActions('parametreGenerauxAdministratif',
     ['getExercicesBudgetaires', 'getTitres', 'getTaux',
    'getNatureSection', 'getSection', 'getStructureProgramme', 'getPlanProgramme', 'getStructurePays', 'getPlanPays','getPlanOrganigrammeUa','getStructureOrganigrammeUa', 
    'getStructureAdministrative', 'getServiceGestionnaire', 'getStructureGeographique',
    'getLocalisationGeographique', 'getChapitre','getTypeUniteAdministrative',"getGrandeNature","getFormeJuridiques","getRegimeImpositions"]),

 ...mapActions("uniteadministrative", [
      // "getAllTypeTextes",
      "getAllUniteAdministrative",
      // "getAllArchivageDocument",
      // "getAllDirection",
      "getAllServiceua",
      "getAllBanqueUa",
      "getAllFonction",
      "getAllBudgetGeneral",
      "getAllHistoriqueBudgetGeneral",
      "getAllUniteZone",
      "getAllTransfert",
      "getAllHistoriqueTransfert",
     "getLigneExempter",
     "getBudgeChager",
     "getAllRealiteServiceFait",
     "getAllLiquidation",
     "getOrganigrammeUa",
     "getAllBanqueUa",
     "getAllDecompteFacture"
    ]),
            ...mapActions('personnelUA', ["getSalaire","getordrepaiement",'getTypeSalarie',"getEchelons",
            "getTypeContrat","getNiveauEtude","getFonctions","getTypeActPersonnel",
            "getClasses","getEchelons","getpaiementPersonnel","getActeur","getGrades","getNbrActeurAcrediteTaux",
            "getActPersonnel","getConges","allActeurDepense","getListeSalaireActuelAll","getActeurFinContratAndActivite","getCategorieGrade",
"getFamilleFonction","getFonctionBudgetaire", "getDossierCandidatPersonnel",
"getClassificationGradeFonction","getSituationMatrimonial", "getContratResilie"]),

      ...mapActions('gestionMarche',['getTypeMarche',"getSecteurActivite",
        "getEntreprise","getEtapeMarche","getDocumentPTBAPPM","getMarcheContrat","getPresenceCF",
        "getDocumentPresence","getNombreMarcheByProcedure","sourcePersonnalise",
        "getSourceFinnancementByMarche","getMarcheContratExecution",
        "getBanque", "getCompte","getAgence","getSanction"]),

        ...mapActions("SuiviImmobilisation", [
      "getAllNatureEntre",
      "getAllCauseInactivite",
      "getAllEtatImmo",
      "getAllService",
      "getAllEquipement",
      "getAllFamille",
      "getAllArticles",
      "getAllNormeImmob",
      "getAllNormeArticle",
      "getAllStock",
      "getAllBesoinImmo",
      "getAllImmobilisation",
      "getAllAmortissement",
      "getAllHistoAffectation",
      "getAllDemandeMateriel",
      "getAllHistoAffectationService",
      
      
    ]),

    	 ...mapActions('suivi_controle_budgetaire', ['getCategorieMission', 'getNormeMission','getHistoriqueMission',
    'getMission']),
      //  ...mapActions('planification_budgetaire', ['getAllBudgetGeneral']),
       ...mapActions('bienService', ['getAvenant','getChoixProcedure', 'getBailleur','getTypeFacture',
       'getTypeActeDepense', 'getTypeActeEffetFinancier', 'getTypeAnalyse','getTypeTextJuridique','getAutreTextJuridique' ,
         'getTypePrestation', 'getCondition', 'getTextJuridique', 'getMarche', 'getTypeMarches',
       'getModePassations', 'getTypeProcedures', 'getProcedurePassation', "getAppelOffre","getLot",
         "getDossierCandidat", "getOffreFinancier", "getOffreTechnique","getLettreInvitation","getMandater",
         "getCojo","getAnalyseDossier", 'getMotifDecision', 'getDocumentProcedure',
         'getDemandeAno',"getAnalyseDMP","getAnoDMPBailleur","getObservationBailleur",
          'getActeEffetFinancier','getEngagement','getMandat',"getVille","getPays","getCommune",
          "getExecutionMarche","getTypeAppel","getTypeCandidat","getFacture"
          ,"getMarcheBailleur","getMembreCojo","getProceVerbal","getModePaiement", "getEcheances",
          "getCotation","getOuverture","getTransmission","getPlanPassationMarche",

          "getRapport", "getDocument","getRapportJugement","getRolemembreCojo","getCandidatSelectionner","getEcheances"])


  },

  created(){
    let objet=localStorage.getItem('Users');
    let user=JSON.parse (objet)

    this.getAffectation()
this.getFormeJuridiques()
this.getRegimeImpositions()
    this.getRoles()
    this.getUtilisateurs()
    this.getPlanPassationMarche()
    this.getRapport()
      this.getBudgeChager()
      this.getLigneExempter()
      this.getExercicesBudgetaires()
      this.getTaux()
      this.getModePaiement()
   this.getTitres()
   this.getNatureSection()
   this.getSection()
   this.getStructureProgramme()
   this.getPlanProgramme()
    this.getStructurePays()
   this.getPlanPays()
   this.getStructureAdministrative()
   this.getServiceGestionnaire()
   this.getStructureGeographique()
   this.getLocalisationGeographique()
   this.getChapitre()
   this.getStructureFonctionnelle()
   this.getPlanFonctionnelle()
   this.getStructureDecision()
   this.getPlanDecision()
   this.getStructureActe()
   this.getPlanActe()
   this.getTypeconges()
   this.getlisteNaturePrix()
   this.getSourceFinancement()
   this.getTypeFinancement()
   this.getStructureBudgetaire()
   this.getPlanBudgetaire()
    this.getStructureActivite()
    this.getPlanActivite()
    this.getGrandeNature()
    this.getTypeUniteAdministrative()
    // this. getPlanActivite()
    this.getAllUniteZone()
    
    this.getAllHistoriqueTransfert()
    this.getUnite()
    this.getZone()
    this.getBanque()
    this.getAgence()
    this.getCompte()
    this.getPays()
this.getVille()
this.getCommune()
this.getChoixProcedure()
this.getTransmission()
this.getCotation()
this.getOuverture()    
this.getSanction()
this.getAllRealiteServiceFait()
     this.getAllLiquidation()
// this.getTypeProcedure()








    this.getUniteAdminUser(user.id)

this.getTypeCandidat();
this.getTypeAppel()





    
      // this.getAllTypeTextes();
    this.getAllUniteAdministrative();
     this.getOrganigrammeUa()
     this.getAllBanqueUa()
     this.getAllDecompteFacture()
       this.getStructureOrganigrammeUa()
   this.getPlanOrganigrammeUa()
    // this.getAllArchivageDocument();
// this.getAllDirection()
this.getAllServiceua()
this.getAllFonction()
this.getAllBanqueUa()
this.getFonctionBudgetaire()
this.getDossierCandidatPersonnel()
      this.getListeSalaireActuelAll()
    this.getTypeSalarie()
        this.getTypeActPersonnel()
        this.getFonctions()
       this.getCategorieGrade()
this.getFamilleFonction()
this.getSituationMatrimonial()
this.getContratResilie()
this.getClassificationGradeFonction()
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
        this.getpaiementPersonnel()
        
         this.getActeurFinContratAndActivite()
        this.getordrepaiement()
        this.getSalaire()
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
       this.getAllNatureEntre();
      this.getAllCauseInactivite();
      this.getAllEtatImmo();
    this.getAllService();
    this.getAllEquipement();
    this.getAllFamille();
    this.getAllArticles();
    this.getAllNormeImmob();
    this.getAllNormeArticle();
    this.getAllStock();
    this.getAllBesoinImmo();
    this.getAllImmobilisation();
    this.getAllHistoAffectation();
    this.getAllDemandeMateriel();
    this.getAllHistoAffectationService();
    
    //this.getAllAmortissement();
      /**
       * this.
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
this.getAllTransfert()
 // debut du module de bien && service

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
this.getRapportJugement()
this.getCandidatSelectionner()
this.getDocument()
 this.getRolemembreCojo()

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
      this.getEcheances()
      /**
       * fin missions
       */
  }

};
</script>

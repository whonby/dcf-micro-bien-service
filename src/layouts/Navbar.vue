 
<template>
  <div>
    <!--start-top-serch-->
    <MenuTableau v-if="active_el == 11"></MenuTableau>
    <MenuParamG v-if="active_el == 17"></MenuParamG>
    <MenuUA v-if="active_el == 1"></MenuUA>
    <MenuActeurDepense v-if="active_el == 2"></MenuActeurDepense>
    <MenuPlanification v-if="active_el ==3"></MenuPlanification>
    <MenuInvestissement v-if="active_el == 4"></MenuInvestissement>
    <MenuComptaMatieres v-if="active_el ==5"></MenuComptaMatieres>
    <MenuControlAxe v-if="active_el ==6"></MenuControlAxe>
    <MenuPlanificationHorSib v-if="active_el ==7"></MenuPlanificationHorSib>
    <MenuCatographie v-if="active_el ==8"></MenuCatographie>
    <MenuInvestissementHorSib v-if="active_el ==40"></MenuInvestissementHorSib>
     <MenuDefaut v-if="active_el ==0"></MenuDefaut>
    <MenuGestionAccess v-if="active_el ==21"></MenuGestionAccess>
    <MenuGestionDesMarches v-if="active_el ==22"></MenuGestionDesMarches>
     <MenuGestionDesMarchesHorsSib v-if="active_el ==25"></MenuGestionDesMarchesHorsSib>
    <MenuMonEquipe v-if="active_el ==30"></MenuMonEquipe>
    <MenuActeurDepenseHS v-if="active_el ==31"></MenuActeurDepenseHS>
   <MenuParametreVehicule v-if="active_el == 42"></MenuParametreVehicule>
   <MenuGestionParc v-if="active_el == 43"></MenuGestionParc>
   <MenuRapportMarche v-if="active_el == 89"></MenuRapportMarche>
   <MenuRapportVehicule v-if="active_el == 90"></MenuRapportVehicule>
   <MenuTableauBordGestionMarche v-if="active_el == 45"></MenuTableauBordGestionMarche>
   <MenuTableauBordGestionSibMarche v-if="active_el ==46"></MenuTableauBordGestionSibMarche>
   <MenuTableauBordGeneral v-if="active_el ==123"></MenuTableauBordGeneral>
   <MenuBudgetEclate v-if="active_el ==780"></MenuBudgetEclate>
   <MenuOrdrePaiement v-if="active_el ==1200"></MenuOrdrePaiement>
    <MenuBudgetExecuteHorsSib v-if="active_el ==1033"></MenuBudgetExecuteHorsSib>
    <MenuTableaudebordreal v-if="active_el ==1034"></MenuTableaudebordreal>
    <MenuTableaudebordsigobereal v-if="active_el ==1035"></MenuTableaudebordsigobereal>
    <!-- <Search></Search> -->
    
    <!--close-top-serch MenuPlanificationHorSib-->
  </div>
</template>

<script>
// var housecall = require('housecall');

// var queue = housecall({ concurrency: 2, cooldown: 1000 });
import MenuBudgetExecuteHorsSib from "../components/navs/MenuBudgetExecuteHorsSib.vue"
import MenuOrdrePaiement from "../components/navs/MenuOrdrePaiement.vue"
import MenuBudgetEclate from "../components/navs/MenuBudgetEclate.vue"
import MenuTableauBordGestionSibMarche from "../components/navs/MenuTableauBordGestionSibMarche.vue"
import MenuTableauBordGestionMarche from "../components/navs/MenuTableauBordGestionMarche";
import MenuTableau from "../components/navs/menuTableauBord";
import MenuParamG from "../components/navs/menuParametreG";
import MenuUA from "../components/navs/menuUA";
import MenuActeurDepense from "../components/navs/MenuActeurDepense";
import MenuPlanification from "../components/navs/MenuPlanification";
import MenuInvestissement from "../components/navs/MenuInvestissement";
import MenuComptaMatieres from "../components/navs/MenuComptaMatieres";
import MenuControlAxe from "../components/navs/MenuControlAxe";
import MenuPlanificationHorSib from "../components/navs/MenuPlanificationHorSib.vue";
import MenuCatographie from "../components/navs/MenuCatographie.vue";
import MenuDefaut from "../components/navs/MenuDefaut.vue";
import MenuInvestissementHorSib from "../components/navs/MenuInvestissementHorSib.vue";
import MenuMonEquipe from "../components/navs/MenuMonEquipe.vue";
// import Search from "../components/Search";
import MenuGestionAccess from "../components/navs/MenuGestionAccess"
import MenuGestionDesMarches from "../components/navs/MenuGestionDesMarches"
import MenuGestionDesMarchesHorsSib from "../components/navs/MenuGestionDesMarchesHorsSib"
import MenuActeurDepenseHS from "../components/navs/MenuActeurDepenseHS"
import MenuParametreVehicule from "../components/navs/MenuParametreVehicule"
import MenuGestionParc from "../components/navs/MenuGestionParc"
import MenuRapportMarche from "../components/navs/MenuRapportMarche"
import MenuRapportVehicule from "../components/navs/MenuRapportVehicule"
import MenuTableauBordGeneral from "../components/navs/MenuTableauBordGeneral"
import MenuTableaudebordreal from "../components/navs/MenuTableau_de_bord"
import MenuTableaudebordsigobereal from "../components/navs/MenuTableau_de_bord_sib"
import { mapState, mapActions} from "vuex";
export default {
  components: {
    MenuBudgetExecuteHorsSib,
    MenuTableaudebordreal,
    MenuTableaudebordsigobereal,
    MenuOrdrePaiement,
    MenuBudgetEclate,
    MenuTableauBordGeneral,
    MenuTableauBordGestionSibMarche,
    MenuTableauBordGestionMarche,
    MenuGestionDesMarchesHorsSib,
    MenuGestionDesMarches,
    MenuRapportVehicule,
    MenuRapportMarche,
    MenuGestionParc,
    MenuParametreVehicule,
    MenuTableau,
    MenuParamG,
    MenuUA,
    MenuActeurDepense,
    MenuPlanification,
    MenuInvestissement,
    MenuComptaMatieres,
   MenuControlAxe,
   MenuPlanificationHorSib,
   MenuCatographie,
   MenuDefaut,
   MenuInvestissementHorSib,
    // Search,
      MenuGestionAccess,
    MenuMonEquipe,
    MenuActeurDepenseHS
    
  },

  computed: {

       ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  })
  },
 created(){

//    this.getGestionModules()
//    this.getTypeOrdrePaiement()
//    this.getInfrastructure()
//    this.getAffectation()
//this.getFormeJuridiques()
//this.getRegimeImpositions()
//    this.getRoles()
//    this.getUtilisateurs()
//    this.getEquipeCF()
//    this.getPlanPassationMarche()
//    this.getRapport()
//      this.getBudgeChager()
//      this.getLigneExempter()
//
//   this.getLocalisationGeographiqueAll()
//      this.getExercicesBudgetaires()
//      this.getTaux()
//      this.getModePaiement()
//   this.getTitres()
//   this.getNatureSection()
//   this.getSection()
//   this.getStructureProgramme()
//   this.getPlanProgramme()
//    this.getStructurePays()
//   this.getPlanPays()
//   this.getPlanOrganigrammeUa()
//   this.getStructureAdministrative()
//   this.getServiceGestionnaire()
//   this.getStructureGeographique()
//   this.getLocalisationGeographique()
//   this.getChapitre()
//   this.getStructureFonctionnelle()
//   this.getPlanFonctionnelle()
//   this.getStructureDecision()
//   this.getPlanDecision()
//   this.getStructureActe()
//   this.getPlanActe()
//   this.getTypeconges()
//   this.getlisteNaturePrix()
//   this.getSourceFinancement()
//   this.getTypeFinancement()
//   this.getStructureBudgetaire()
//   this.getPlanBudgetaire()
//    this.getStructureActivite()
//    this.getPlanActivite()
//    this.getGrandeNature()
//    this.getTypeUniteAdministrative()
//    // this. getPlanActivite()
//    this.getAllUniteZone()
//
//    this.getAllHistoriqueTransfert()
//    this.getUnite()
//    this.getZone()
//    this.getBanque()
//    this.getAgence()
//    this.getCompte()
//    this.getPays()
//this.getVille()
//this.getCommune()
//this.getChoixProcedure()
//this.getTransmission()
//this.getCotation()
//this.getOuverture()
//this.getSanction()
//this.getAllRealiteServiceFait()
//     this.getAllLiquidation()
//     this.getAllBudgetEclate()
//// this.getTypeProcedure()
//
//// les get des marches hors sib
//
//this.getMarcheHorSib()
//this.getOpProvisoire()
//this.getRealiteServiceHors()
//
//
//
//
//
//
//
//
    // this.getUniteAdminUser(user.id)
//
//this.getTypeCandidat();
//this.getTypeAppel()
//
//
//
//
//
//
//      // this.getAllTypeTextes();
//    this.getAllUniteAdministrative();
//
//     this.getAllBanqueUa()
//     this.getAllDecompteFacture()
//       this.getStructureOrganigrammeUa()
//
//    // this.getAllArchivageDocument();
//this.getAllDirection()
//this.getAllServiceua()
//this.getAllFonction()
//this.getAllBanqueUa()
//this.getFonctionBudgetaire()
//this.getDossierCandidatPersonnel()
//      this.getListeSalaireActuelAll()
//    this.getTypeSalarie()
//        this.getTypeActPersonnel()
//        this.getFonctions()
//       this.getCategorieGrade()
//this.getFamilleFonction()
//this.getSituationMatrimonial()
//this.getContratResilie()
//this.getClassificationGradeFonction()
//        this.getNiveauEtude()
//        this.getTypeContrat()
//        this.getClasses()
//        this.getEchelons()
//        this.getGrades()
//        this.getActeur()
//        this.getNbrActeurAcrediteTaux()
//        this.getActPersonnel()
//        this.getConges();
//        this.allActeurDepense()
//        this.getpaiementPersonnel()
//
//         this.getActeurFinContratAndActivite()
//        this.getordrepaiement()
//        this.getSalaire()
//            /**Gestion des marche*/
//            this.getPermissionConge()
//      this.getTypeMarche()
//      // this.s()
//      this.getSauvegardePhoto()
//      this.getSecteurActivite()
//      this.getEntreprise()
//      this.getHistoriqueEntreprise()
//      this.getEtapeMarche()
//      this.getDocumentPTBAPPM()
//    this.getMarcheContrat()
//    this.getPresenceCF()
//    this.getDocumentPresence()
//    this.getNombreMarcheByProcedure()
//this.getMarcheContratExecution()
//
//    this.getSourceFinnancementByMarche()
//      /**Fin gestion des marche**/
//this.getAllHistoriqueBudgetGeneral()
//      /**
//       * suivi des immo
//       */
//       this.getAllNatureEntre();
//      this.getAllCauseInactivite();
//      this.getAllEtatImmo();
//    this.getAllService();
//    this.getAllEquipement();
//    this.getAllFamille();
//    this.getAllArticles();
//    this.getAllNormeImmob();
//    this.getAllNormeArticle();
//    this.getAllStock();
//    this.getAllBesoinImmo();
//    this.getAllImmobilisation();
//    this.getAllHistoAffectation();
//    this.getAllDemandeMateriel();
//    this.getAllHistoAffectationService();
//
//    //this.getAllAmortissement();
//      /**
//       * this.
//       * fin suivi des immo
//       */
//
//      /**
//       * missions
//       */
//       this.getCategorieMission()
//     this.getNormeMission()
//
//      this.getMission()
//       this.getHistoriqueMission()
//this.getAllBudgetGeneral()
//this.getAllTransfert()
// // debut du module de bien && service
//
//this.getBailleur()
//this.getTypeFacture()
//this.getTypeActeDepense()
//this.getTypeActeEffetFinancier()
//this.getTypeAnalyse()
//this.getTypePrestation()
//this.getCondition()
//this.getTextJuridique()
//this.getAutreTextJuridique()
//this.getTypeTextJuridique()
//this.getMotifDecision()
//this.getDocumentProcedure()
//// this.getDecisionMarche()
//
//// this.getDecisionMarche()
//this.getActeEffetFinancier()
// this.getFacture()
//this.getTypeProcedures()
//this.getTypeMarches()
//this.getMarche()
//this.getModePassations()
//this.getProcedurePassation()
//this.getEngagement()
//this.getExecutionMarche()
//this.getMandat()
//this.getRapportJugement()
//this.getCandidatSelectionner()
//this.getDocument()
// this.getRolemembreCojo()
//
//    this.getAppelOffre()
//this.getMarche()
//    this.getLot()
//    this.getModePassations()
//    this.getDossierCandidat()
//    this.getOffreFinancier()
//    this.getOffreTechnique()
//this.getLettreInvitation()
//    this.getMandater()
//    this.getCojo()
//    this.getAnalyseDossier()
//    this.getDemandeAno()
//    this.getAnalyseDMP()
//    this.getAnoDMPBailleur()
//    this.getObservationBailleur()
//
//   this.getAvenant()
//this.getImageMarche()
//    this.getMarcheBailleur()
//this.getMembreCojo()
//    this.getProceVerbal()
//      this.getEcheances()
//      this.getReserveCf()
//      this.getArnmp()
//      this.getOrganeDecision()
//      this.getNaturePrix()
//      this.getMotifPassation()
      /**
       * fin missions
       */
  },
  methods: {

    ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles","getAffectation","getUniteAdminUser","getEquipeCF"]),
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
     ['getGestionModules','getInfrastructure','getExercicesBudgetaires', 'getTitres', 'getTaux',
    'getNatureSection', 'getSection', 'getStructureProgramme', 'getPlanProgramme', 'getStructurePays', 'getPlanPays','getPlanOrganigrammeUa',
    'getStructureAdministrative', 'getServiceGestionnaire', 'getStructureGeographique',
    'getLocalisationGeographique', 'getChapitre','getTypeUniteAdministrative',"getGrandeNature","getFormeJuridiques","getRegimeImpositions","getLocalisationGeographiqueAll","getInfrastructure"]),

 ...mapActions("uniteadministrative", [
      // "getAllTypeTextes",
      "getAllUniteAdministrative",
      // "getAllArchivageDocument",
      "getAllDirection",
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
     "getStructureOrganigrammeUa",
     "getAllBanqueUa",
     "getAllDecompteFacture",
     "getAllBudgetEclate",
     "getVehicule"
    ]),
            ...mapActions('personnelUA', ["getSauvegardePhoto","getPermissionConge","getSalaire","getordrepaiement",'getTypeSalarie',"getEchelons",
            "getTypeContrat","getNiveauEtude","getFonctions","getTypeActPersonnel",
            "getClasses","getpaiementPersonnel","getActeur","getGrades","getNbrActeurAcrediteTaux",
            "getActPersonnel","getConges","allActeurDepense","getListeSalaireActuelAll","getActeurFinContratAndActivite","getCategorieGrade",
"getFamilleFonction","getFonctionBudgetaire", "getDossierCandidatPersonnel",
"getClassificationGradeFonction","getSituationMatrimonial", "getContratResilie"]),

      ...mapActions('gestionMarche',['getTypeMarche',"getSecteurActivite",
        "getEntreprise","getEtapeMarche","getDocumentPTBAPPM","getMarcheContrat","getPresenceCF",
        "getDocumentPresence","getNombreMarcheByProcedure","sourcePersonnalise",
        "getSourceFinnancementByMarche","getMarcheContratExecution",
        "getBanque", "getCompte","getAgence","getSanction","getHistoriqueEntreprise"]),

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
      "getMarqueVehicule",
      "getModeleVehicule",
      "getTypeEntretien",
      "getTypeVehicule",
      "getTypeEnergie",
      "getTypeReparation",
      "getAffectationVehicule",
      "getTransmissionVeh"
      
      
    ]),

    	 ...mapActions('suivi_controle_budgetaire', ['getCategorieMission', 'getNormeMission','getHistoriqueMission',
    'getMission']),
      //  ...mapActions('planification_budgetaire', ['getAllBudgetGeneral']),
       ...mapActions('bienService', ["getTypeOrdrePaiement","getImageMarche",'getAvenant','getChoixProcedure', 'getBailleur','getTypeFacture',
       'getTypeActeDepense', 'getTypeActeEffetFinancier', 'getTypeAnalyse','getTypeTextJuridique','getAutreTextJuridique' ,
         'getTypePrestation', 'getCondition', 'getTextJuridique', 'getMarche', 'getTypeMarches',
       'getModePassations', 'getTypeProcedures', 'getProcedurePassation', "getAppelOffre","getLot",
         "getDossierCandidat", "getOffreFinancier", "getOffreTechnique","getLettreInvitation","getMandater",
         "getCojo","getAnalyseDossier", 'getMotifDecision', 'getDocumentProcedure',
         'getDemandeAno',"getAnalyseDMP","getAnoDMPBailleur","getObservationBailleur",
          'getActeEffetFinancier','getEngagement','getMandat',"getVille","getPays","getCommune",
          "getExecutionMarche","getTypeAppel","getTypeCandidat","getFacture"
          ,"getMarcheBailleur","getMembreCojo","getProceVerbal","getModePaiement",
          "getCotation","getOuverture","getTransmission","getPlanPassationMarche",

          "getRapport", "getDocument","getRapportJugement","getRolemembreCojo","getCandidatSelectionner","getEcheances",
          "getReserveCf","getArnmp","getOrganeDecision","getNaturePrix","getMotifPassation"]),

          ...mapActions('horSib',['getMarcheHorSib',"getRealiteServiceHors","getOpProvisoire"])


  },

 

};
</script>

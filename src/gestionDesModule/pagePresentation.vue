<template>

    <div>
<!--      <div class="row-fluid" style="background: #fff">-->
<!--        <div class="span10" align="center">   <h5 >MENU GENERAL DU SID-CF</h5></div>-->
<!--        <div class="span2" align="right">  <router-link :to="{ name: 'Login'}" tag="a" style="text-align: right;color:red;">-->
<!--          <h5 >Se Déconnecté</h5>-->

<!--        </router-link>-->
<!--        </div>-->
<!--      </div>-->
<br>
<br>
      <table class="table " style="background-color: #2E363F;">
        <tr>
          <td>
            <center>
      <router-link tag="a" :to="{ name: 'photoProfil' }">
        <img v-bind:src="AffichePhoto(afficheIdUtilisateur)" name="aboutme" class="avatar">
        </router-link>
      <h6 style="color:orange;font-size:14px;text-align:center;">{{afficheNomUtilisateur}}</h6>
  
		</center>
           
       <router-link :to="{ name: 'Login'}" tag="a" style="color:red;width:20%;text-align:center;">
              <h5 >Se déconnecter</h5>

            </router-link>
          </td>
          <td style="width:88%;text-align: center;font-size:20px;padding:50px 50px;font-weight:bold; color: #fff">
            <P>SYSTEME D'INFORMATION DECISIONNELLE DU CONTRÖLEUR FINANCIER  </P>
            <P>(SID-CF)</P>
          </td>

          <!-- <td style="width:15%">
            <router-link :to="{ name: 'Login'}" tag="a" style="text-align: right;color:red;width:20%;">
              <h5 >Se déconnecter</h5>

            </router-link>
          </td> -->
        </tr>
      </table>
      
      <div id="loginbox" class="spinner-border text-primary">



        <!-- <h3 style="text-align:center;color:#ffffff;">TABLEAU DE BORD GENERAL</h3> -->
        <div class="row-fluid form">
      <div class="span16">
        <div class="quick-actions_homepage">


          
          <div >
            <ul class="quick-actions" >
                <li class="bg_lg span3" >
                     <router-link :to="{ name: 'TableauDeBordG', params: {id:1}}" tag="a"  style="color:black;">
                <h4>PARAMETRES</h4> <i class="icon-cogs"></i><h4> GENERAUX</h4>
                
                </router-link> 
                </li>
  <li class="bg_lg span3" > 
     <router-link :to="{ name: 'TableauDeBordG', params: {id:2}}" tag="a"  style="color:black;">
      <h4>UNITES </h4> <i class="icon-home"></i> <h4> D'ADMINISTRATIVES</h4>      </router-link> </li>
       <li class="bg_lg span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:3}}" tag="a"  style="color:black;"><h4>GESTION </h4> <i class=" icon-folder-open"></i><h4> SIB</h4></router-link> </li>
      <!-- <li class="bg_lg span3" > 
     <router-link :to="{ name: 'TableauDeBordG', params: {id:7}}" tag="a"  style="color:black;">
      <h4>GESTION DU </h4> <i class="icon-group"></i> <h4> PERSONNEL</h4>      </router-link> </li> -->
      
            </ul>
            <br>
<br>

            <ul class="quick-actions" >
              
    <li class="bg_lo span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:4}}" tag="a"  style="color:black;"><h4>GESTION </h4> <i class=" icon-folder-open"></i><h4>HORS SIB</h4></router-link> </li>
  <li class="bg_lo span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:5}}" tag="a"  style="color:black;"><h4>CARTOGRAPHIES </h4> <i class="icon-globe"></i><h4>DES BUDGETS ET DES MARCHES</h4></router-link> </li>
           <li class="bg_lo span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:6}}" tag="a"  style="color:black;"><h4>MON </h4> <i class="icon-group"></i><h4> EQUIPE</h4></router-link> </li>
            </ul>
           
          </div>
        </div>
      </div>
      
    </div>


      </div>
    </div>


</template>


<script>
import { mapGetters,mapActions} from "vuex";


// import {admin,dcf,cf,noDCfNoAdmin} from "../Repositories/Auth"
export default {

  data(){
    return{

      budgetGeneralCharge:""

    }
  },
created(){
          this.getGestionModules()
    this.getAffectation()
this.getFormeJuridiques()
this.getRegimeImpositions()
    this.getRoles()
    this.getUtilisateurs()
    this.getEquipeCF()
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
   this.getPlanOrganigrammeUa()
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








    

this.getTypeCandidat();
this.getTypeAppel()





    
      // this.getAllTypeTextes();
    this.getAllUniteAdministrative();
     
     this.getAllBanqueUa()
     this.getAllDecompteFacture()
       this.getStructureOrganigrammeUa()
 this.getAllBudgetEclate()
    // this.getAllArchivageDocument();
this.getAllDirection()
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
            this.getPermissionConge()
      this.getTypeMarche()
      // this.s()
      this.getSauvegardePhoto()
      this.getSecteurActivite()
      this.getEntreprise()
      this.getHistoriqueEntreprise()
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
this.getImageMarche()
    this.getMarcheBailleur()
this.getMembreCojo()
    this.getProceVerbal()
      this.getEcheances()
        },

  computed:{
 ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "budgetGeneral",
                "afficheTransfertValider",
                "transferts"

            ]),
            ...mapGetters('personnelUA', ['sauvegardePhoto']),
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel","mandats"]),

       ...mapGetters("parametreGenerauxAdministratif", [
             
                "gestionModules"
            ]),
            
      
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),


afficherModule1() {
      return id1 => {
        if (id1 != null && id1 != "") {
           const qtereel = this.gestionModules.find(qtreel => qtreel.id == id1);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },


  AffichePhoto() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sauvegardePhoto.find(qtreel => qtreel.user_id == id);

      if (qtereel) {
        return qtereel.fichier;
      }
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/1_!1595119277.jpg "
        }
      };
    },
  afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
afficheRoleUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.user_role.role.libelle

},
  afficheIdUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.id

},







  },

  methods:{

    ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles","getAffectation","getUniteAdminUser","getEquipeCF","activeMenuModuleSidcf"]),
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
     ['getGestionModules','getExercicesBudgetaires', 'getTitres', 'getTaux',
    'getNatureSection', 'getSection', 'getStructureProgramme', 'getPlanProgramme', 'getStructurePays', 'getPlanPays','getPlanOrganigrammeUa',
    'getStructureAdministrative', 'getServiceGestionnaire', 'getStructureGeographique',
    'getLocalisationGeographique', 'getChapitre','getTypeUniteAdministrative',"getGrandeNature","getFormeJuridiques","getRegimeImpositions"]),

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
     "getAllBudgetEclate"
    ]),
            ...mapActions('personnelUA', ["getSauvegardePhoto","getPermissionConge","getSalaire","getordrepaiement",'getTypeSalarie',"getEchelons",
            "getTypeContrat","getNiveauEtude","getFonctions","getTypeActPersonnel",
            "getClasses","getEchelons","getpaiementPersonnel","getActeur","getGrades","getNbrActeurAcrediteTaux",
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
      
      
    ]),

    	 ...mapActions('suivi_controle_budgetaire', ['getCategorieMission', 'getNormeMission','getHistoriqueMission',
    'getMission']),
      //  ...mapActions('planification_budgetaire', ['getAllBudgetGeneral']),
       ...mapActions('bienService', ["getImageMarche",'getAvenant','getChoixProcedure', 'getBailleur','getTypeFacture',
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

          "getRapport", "getDocument","getRapportJugement","getRolemembreCojo","getCandidatSelectionner","getEcheances"]),

    activeMenuModuleParamGeneral(){
      this.activeMenuModuleSidcf(1)
      this.$router.push({
        name: 'TableauDeBordG'
      })
    },
    activeMenuModuleUniteAdministrative(){
      this.activeMenuModuleSidcf(2)
      this.$router.push({
        name: 'TableauDeBordG'
      })
    },
    activeMenuModuleGestionSIB(){
      this.activeMenuModuleSidcf(3)
      this.$router.push({
        name: 'TableauDeBordG'
      })
    },
    activeMenuModuleGestionHorSIB(){
      this.activeMenuModuleSidcf(4)
      this.$router.push({
        name: 'TableauDeBordG'
      })
    },
    activeMenuModuleCartographie(){
      this.activeMenuModuleSidcf(5)
      this.$router.push({
        name: 'TableauDeBordG'
      })
    },
    activeMenuModuleMonEquipe(){
      this.activeMenuModuleSidcf(6)
      this.$router.push({
        name: 'TableauDeBordG'
      })
    },


 
  }
}
</script>
<style scoped>
.flex{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  position: relative;
}
.square{
  width: 20px;
  height: 20px;
 
  color: #FAFAFA;
  text-align: center;
  margin-right: 5px;
  cursor: pointer;
  line-height: 50px;
}
.square:hover{
  opacity: 0.8;
}




.dropdown-menu .divider{ margin:4px 0px;}
.dropdown-menu{ min-width:180px;}
.dropdown-menu > li > a{ padding:3px 10px; color:#666; font-size:12px;}
.dropdown-menu > li > a i{ padding-right:3px;}
.userphoto img{ width:19px; height:19px;}
select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input, .label, .dropdown-menu, .btn, .well, .progress, .table-bordered, .btn-group > .btn:first-child, .btn-group > .btn:last-child, .btn-group > .btn:last-child, .btn-group > .dropdown-toggle, .alert{ border-radius:0px;}
.btn, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input{ box-shadow:none;}
.progress, .progress-success .bar, .progress .bar-success, .progress-warning .bar, .progress .bar-warning, .progress-danger .bar, .progress .bar-danger, .progress-info .bar, .progress .bar-info, .btn, .btn-primary{background-image:none;}
.accordion-heading h5{ width:70%; }
.form-horizontal .form-actions{ padding-left:20px; }
#footer{ padding:10px; text-align:center;}
hr{ border-top-color:#dadada;}
.carousel{ margin-bottom:0px;}
.fl { float:left}
.fr {float:right}
.label-important, .badge-important{ background:#f74d4d;}

/*Metro Background color class*/
.bg_lb{ background:#27a9e3;}
.bg_db{ background:#2295c9;}
.bg_lg{ background:#28b779;}
.bg_dg{ background:#28b779;}
.bg_ly{ background:#ffb848;}
.bg_dy{ background:#da9628;}
.bg_ls{ background:#2255a4;}
.bg_lo{ background:#da542e;}
.bg_lr{ background:#f74d4d;}
.bg_lv{ background:#603bbc;}
.bg_lh{ background:#b6b3b3;}


#logo, #loginbox {    width: 100%;    margin-left: auto;    margin-right: auto;    position: relative;}
#logo img {  margin: 0 auto;    display: block;}
#loginbox { overflow: hidden !important;
  width: 75%;
  text-align: left;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-box-shadow: -4px 10px 10px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: -4px 10px 10px -6px rgba(0,0,0,0.75);
  box-shadow: -4px 10px 10px -6px rgba(0,0,0,0.75);
  background:#ffffff;

}
#loginbox .form{ width:100%; background:#ffffff; position:relative; top:0; left:0; }
#loginbox .form-actions { padding: 14px 20px 15px;}


@media (max-width:1024px){
  #logo { width: 60%; }
  #loginbox{ width:80%}
}
@media (max-width: 480px){
  #logo { width: 40%; }
  #loginbox{ width:90%}
  #loginbox .control-group{ padding:8px 0; margin-bottom:0px;}
}

</style>
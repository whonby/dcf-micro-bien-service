<template>

    <div>
<br>
<br>
<br>
<br>
<br>

        <!-- <h3 style="text-align:center;color:#ffffff;">TABLEAU DE BORD GENERAL</h3> -->
        <div class="row-fluid">
      <div class="span16">
        <div class="quick-actions_homepage">
          <!-- <center>
      <router-link tag="a" :to="{ name: 'photoProfil' }">
        <img v-bind:src="AffichePhoto(afficheIdUtilisateur)" name="aboutme" class="avatar">
        </router-link>
      <h6 style="color:orange;font-size:14px">{{afficheNomUtilisateur}}</h6>
      <span class="user-level" style="color:#ffffff;font-size:14px">({{afficheRoleUtilisateur}})</span>
		</center> -->
          <table class="table table-bordered table-striped" style="background-color: #ffffff;">
            <tr>
              <td style="width:85%;text-align: center;font-size:14px">
                <h5 >MENU GENERAL DU SID-CF</h5>
              </td>
             
              <td >
                 <router-link :to="{ name: 'Login'}" tag="a" style="text-align: right;color:red;">
                <h5 >Se Déconnecté</h5>
                
                </router-link>
              </td>
            </tr>
          </table>
          
          <div >
            <ul class="quick-actions" >
                <li class="bg_lg span3" > 
                     <router-link :to="{ name: 'TableauDeBordG', params: {id:1}}" tag="a"  style="color:black;">
                <h4>MODULE</h4> <i class="icon-cogs"></i><h4>PARAMETRES GENERAUX</h4>
                
                </router-link> 
                </li>
  <li class="bg_lg span3" > 
     <router-link :to="{ name: 'TableauDeBordG', params: {id:2}}" tag="a"  style="color:black;">
      <h4>MODULE </h4> <i class="icon-home"></i> <h4>UNITE D'ADMINISTRATIVE</h4>      </router-link> </li>
      <li class="bg_lo span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:3}}" tag="a"  style="color:black;"><h4>GESTION </h4> <i class=" icon-folder-open"></i><h4> SIB</h4></router-link> </li>
            </ul>
            <br>
<br>

            <ul class="quick-actions" >
               
    <li class="bg_ly span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:4}}" tag="a"  style="color:black;"><h4>GESTION </h4> <i class=" icon-folder-open"></i><h4>HORS SIB</h4></router-link> </li>
  <li class="bg_lo span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:5}}" tag="a"  style="color:black;"><h4>MODULE </h4> <i class="icon-globe"></i><h4>CATOGRAPHIES</h4></router-link> </li>
           <li class="bg_ly span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:6}}" tag="a"  style="color:black;"><h4>MODULE </h4> <i class="icon-group"></i><h4>MON EQUIPE</h4></router-link> </li>
            </ul>
           
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

    this.getMarcheBailleur()
this.getMembreCojo()
    this.getProceVerbal()
      this.getEcheances()
        },
//   created() {
//             this.marcheid=this.$route.params.id
//    this.detail_marche = this.getMarchePersonnaliser.find(
//        idmarche => idmarche.id == this.$route.params.id
//    )
  
// },
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
     "getAllDecompteFacture"
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


 
  }
}
</script>
<style>
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

</style>
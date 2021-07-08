<template>

    <div>


<chargement v-if="show"></chargement>
<br><br>

        <table class="table " style="background-color: #006400;">
            <tr style="background-color: #006400;">
                <td style="border: 3px solid #ffffff;">
                    <center>
                        <router-link tag="a" :to="{ name: 'photoProfil' }">
                            <img v-bind:src="AffichePhoto(afficheIdUtilisateur)" name="aboutme" class="avatar">
                        </router-link>
                        <h6 style="color:#fff;font-size:14px;text-align:center;">{{afficheNomUtilisateur}}</h6>

                    </center>

                    <router-link :to="{ name: 'Login'}" tag="a" style="color:#fff;width:20%;text-align:center;">
                        <h5 >Se déconnecter</h5>

                    </router-link>
                </td>
                <td style="width:88%;text-align: center;font-size:20px;padding:50px 50px;font-weight:bold; color: #fff">
                    <P>SYSTEME D'INFORMATION DECISIONNEL DU CONTRÔLE FINANCIER  </P>
                    <P>(SID-CF)</P>
                </td>

                <!-- <td style="border: 2px solid;">
                   <center>
             <router-link tag="a" :to="{ name: 'photoProfil' }">
               <img v-bind:src="AffichePhoto(afficheIdUtilisateur)" name="aboutme" class="avatar">
               </router-link>
             <h6 style="color:#fff;font-size:14px;text-align:center;">{{afficheNomUtilisateur}}</h6>

               </center>

              <router-link :to="{ name: 'Login'}" tag="a" style="color:green;width:20%;text-align:center;">
                     <h5 >Se déconnecter</h5>

                   </router-link>
                 </td> -->
            </tr>
        </table>

<!--        <table class="table " style="background-color: black;">-->
<!--            <tr style="background-color: black;">-->
<!--                <td style="border: 3px solid #ffffff;">-->
<!--                    <center>-->
<!--                        <router-link tag="a" :to="{ name: 'photoProfil' }">-->
<!--                            <img v-bind:src="AffichePhoto(afficheIdUtilisateur)" name="aboutme" class="avatar">-->
<!--                        </router-link>-->
<!--                        <h6 style="color:#fff;font-size:14px;text-align:center;">{{afficheNomUtilisateur}}</h6>-->

<!--                    </center>-->

<!--                    <router-link :to="{ name: 'Login'}" tag="a" style="color:#fff;width:20%;text-align:center;">-->
<!--                        <h5 >Se déconnecter</h5>-->

<!--                    </router-link>-->
<!--                </td>-->
<!--                <td style="width:88%;text-align: center;font-size:20px;padding:50px 50px;font-weight:bold; color: #fff">-->
<!--                    <P>SYSTEME D'INFORMATION DECISIONNEL DU CONTRÔLEUR FINANCIER  </P>-->
<!--                    <P>(SID-CF)</P>-->
<!--                </td>-->

<!--                &lt;!&ndash; <td style="border: 2px solid;">-->
<!--                   <center>-->
<!--             <router-link tag="a" :to="{ name: 'photoProfil' }">-->
<!--               <img v-bind:src="AffichePhoto(afficheIdUtilisateur)" name="aboutme" class="avatar">-->
<!--               </router-link>-->
<!--             <h6 style="color:#fff;font-size:14px;text-align:center;">{{afficheNomUtilisateur}}</h6>-->

<!--               </center>-->

<!--              <router-link :to="{ name: 'Login'}" tag="a" style="color:green;width:20%;text-align:center;">-->
<!--                     <h5 >Se déconnecter</h5>-->

<!--                   </router-link>-->
<!--                 </td> &ndash;&gt;-->
<!--            </tr>-->
<!--        </table>-->
      <div id="loginbox"  >


        <!-- <h3 style="text-align:center;color:#ffffff;">TABLEAU DE BORD GENERAL</h3> -->
        <div class="row-fluid form " >
      <div class="span12">

<!--        <div class="quick-actions_homepage">-->




<!--          <div >-->
<!--            <ul class="quick-actions" >-->
<!--                <li class="bg_lg span3" v-if="admin() || dcf()">-->
<!--                     <router-link :to="{ name: 'TableauDeBordG', params: {id:1}}" tag="a"  style="color:black;">-->
<!--                <h4>PARAMETRES</h4> <i class="icon-cogs"></i><h4> GENERAUX</h4>-->

<!--                </router-link>-->
<!--                </li>-->

<!--   <li class="bg_lg span3" >-->
<!--     <router-link :to="{ name: 'TableauDeBordG', params: {id:2}}" tag="a"  style="color:black;">-->
<!--      <h4>UNITES </h4> <i class="icon-home"></i> <h4> ADMINISTRATIVES</h4>      </router-link> </li>-->
<!--       <li class="bg_lg span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:3}}" tag="a"  style="color:black;"><h4>GESTION </h4> <i class=" icon-folder-open"></i><h4> SIB</h4></router-link> </li>-->

<!--            </ul>-->


<!--            <ul class="quick-actions" >-->
<!--               <li class="bg_lo span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:4}}" tag="a"  style="color:black;"><h4>GESTION </h4> <i class=" icon-folder-open"></i><h4>HORS SIB</h4></router-link> </li>-->

<!--  <li class="bg_lo span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:5}}" tag="a"  style="color:black;"><h4>CARTOGRAPHIES </h4> <i class="icon-globe"></i><h4>DES BUDGETS ET DES MARCHES</h4></router-link> </li>-->
<!--           <li class="bg_lo span3"> <router-link :to="{ name: 'liste_ua_compta'}" tag="a"  style="color:black;"><h4>COMPTABILITE </h4> <i class="icon-book"></i><h4> DES MATIERES</h4></router-link> </li>-->
<!--           &lt;!&ndash; <listeUaDeComptabiliteMatiere></listeUaDeComptabiliteMatiere> &ndash;&gt;-->

<!--            </ul>-->
<!--            <br>-->
<!--<br>-->

<!--            <ul class="quick-actions" >-->
<!--               <li class="bg_lo span3">-->
<!--                 <router-link :to="{ name: 'TableauDeBordG', params: {id:7}}" tag="a"  style="color:black;"><h4>GESTION DES </h4> <i class="icon-book"></i><h4> RAPPORTS</h4></router-link> </li>-->
<!--           &lt;!&ndash; <li class="bg_lo span3"> <router-link :to="{ name: 'TableauDeBordG', params: {id:7}}" tag="a"  style="color:black;"><h4>GESTION DES </h4> <i class="icon-book"></i><h4> RAPPORTS</h4></router-link> </li> &ndash;&gt;-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
          <section class="timeline_area section_padding_130">
              <div class="">
                  <div class="row-fluid">
                      <div class="span12">
                          <!-- Timeline Area-->
                          <div class="">
                              <!-- Single Timeline Content-->
                              <div class="single-timeline-area">

                                  <div class="row-fluid">
                                     <div class="span4"  @click="goToModule(1)" v-if="!noDCfNoAdmin">
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text">
                                                  <h5>PARAMETRES GENERAUX</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-cogs"></i>
                                                  </div>
                                                  <p> Permet de codifier les données de base</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="span4" @click="goToModule(2)">
                                          <div  class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; ">

                                              <div class="timeline-text" style="margin-top: -18px">
                                                  <h5>UNITES ADMINISTRATIVES (UA)</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-home"></i>
                                                  </div>
                                                  <p>Présente la gestion des unités administratives et la gestion du budget .</p>
                                                  <!-- <p>Présente la gestion des unités administratives et la gestion du budget (planification et exécution).</p> -->
                                              </div>
                                          </div>
                                      </div>
<!--                                      <div class="span4">-->
<!--                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">-->
<!--                                              <div class="timeline-icon"><i class="fa fa-archive" aria-hidden="true"></i></div>-->
<!--                                              <div class="timeline-text">-->
<!--                                                  <h6>Fixed bug</h6>-->
<!--                                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>-->
<!--                                              </div>-->
<!--                                          </div>-->
<!--                                      </div>-->
 <div class="span4"  >
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text">
                                                  <h5>GESTION DU PERSONNEL</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-group"></i>
                                                  </div>
                                                  <p> permet de traiter la gestion des actes de personnel (recrutement et début de carrière, suivi de carrière et sortie de carrière)</p>
                                              </div>
                                          </div>
                                      </div>
                                     
                                       <!-- </li> -->
                                  </div>
                              </div>
                              <!-- Single Timeline Content-->
                              <div class="single-timeline-area">
                                  <div class="row-fluid">
 <div class="span4" @click="goToModule(3)">
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInLeft;">

                                              <div class="timeline-text" style="margin-top: -18px">
                                                  <h5>GESTION SIGOBE</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-book"></i>
                                                  </div>
                                                  <p> Gérer l’ensemble des transactions effectuées par les UA liées au SIGOBE (Système Intégré  de Gestion des Opérations Budgetaires de l'Etat).</p>
                                              </div>
                                          </div>
                                      </div>
                                       <!-- <li :class="{active: active_el == 1034 }" @click.prevent="navigateToTableauBord"> -->
                                      <div class="span4"  @click="goToModule(4)">
                                        
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-briefcase" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text" style="margin-top: -18px">
                                                  <h5>GESTION HORS SIGOBE</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-folder-open"></i>
                                                  </div>
                                                  <p>Gérer l’ensemble des transactions effectuées par les UA non liées au SIGOBE .</p>
                                              </div>
                                          </div>
                                      </div>
                                       <div class="span4"  @click="goToModule(8)">
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text" style="margin-top: -18px">
                                                  <h5>COMPTABILITE DES MATIERES</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-home"></i>
                                                  </div>
                                                  <p>Présente la gestion des immobilisations (corporelles et incorporelles) des unités administratives.</p>
                                              </div>
                                          </div>
                                      </div>
                                      
                                     
                                    
                                  </div>
                              </div>
                              <!-- Single Timeline Content-->
                              <div class="single-timeline-area">

                                  <div class="row-fluid">

                                     <div class="span4"  @click="goToModule(5)">
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text" style="margin-top: -18px">
                                                  <h5>CARTOGRAPHIES DES BUDGETS ET DES MARCHES</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-globe"></i>
                                                  </div>
                                                  <p> Présente la Géolocalisation et l’analyse spatiale des opérations budgétaires des UA Nationales et Internationales</p>
                                              </div>
                                          </div>
                                      </div>
                                        <div class="span4"  @click="goToModule(7)">
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-id-card" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text" style="margin-top: -18px">
                                                  <h5>GESTION DES RAPPORTS</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-file"></i>
                                                  </div>
                                                  <p> Présentation des rapports</p>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="span4"  @click="goToModule(9)">
                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
<!--                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>-->
                                              <div class="timeline-text">
                                                  <h5>TABLEAU DE BORD GENERAL</h5>
                                                  <div>
                                                      <i style="font-size: 35px !important;" class="icon-dashboard"></i>
                                                  </div>
                                                  <p> Présente tous les Tableaux de Bord</p>
                                              </div>
                                          </div>
                                      </div>

<!--                                      <div class="span4"  @click="goToModule(16)" v-if="!noDCfNoAdmin">-->
<!--                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">-->
<!--                                              &lt;!&ndash;                                              <div class="timeline-icon"><i class="fa fa-desktop" aria-hidden="true"></i></div>&ndash;&gt;-->
<!--                                              <div class="timeline-text">-->
<!--                                                  <h5>MON EQUIPE</h5>-->
<!--                                                  <div>-->
<!--                                                      <i style="font-size: 35px !important;" class="icon-group"></i>-->
<!--                                                  </div>-->
<!--&lt;!&ndash;                                                  <p> Permet de codifier les données de base</p>&ndash;&gt;-->
<!--                                              </div>-->
<!--                                          </div>-->
<!--                                      </div>-->
<!--                                      <div class="span4">-->
<!--                                          <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.7s" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInLeft;">-->
<!--                                              <div class="timeline-icon"><i class="fa fa-picture-o" aria-hidden="true"></i></div>-->
<!--                                              <div class="timeline-text">-->
<!--                                                  <h6>Reach 500 Users</h6>-->
<!--                                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>-->
<!--                                              </div>-->
<!--                                          </div>-->
<!--                                      </div>-->
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>

    </div>


      </div>


    </div>


</template>


<script>
import { mapGetters,mapActions,mapState,mapMutations} from "vuex";
import {admin,dcf,noDCfNoAdmin} from '../../src/Repositories/Auth';
import Pusher from 'pusher-js';
import Chargement from '../components/Chargement.vue'

import Ws from '@adonisjs/websocket-client'
//import listeUaDeComptabiliteMatiere from '../pages/suivi_control_budgetaires/suiviImmobilisation/RefaireComptabiliteMatiere/dossierListeUaDeComptabilteMatier/listeUaDeComptabiliteMatiere'
// import {admin,dcf,cf,noDCfNoAdmin} from "../Repositories/Auth"
export default {
components:{
  //listeUaDeComptabiliteMatiere
  Chargement,
},
  data(){
    return{
        isConnected:false,
      budgetGeneralCharge:"",
      

    }
  },
created(){
    this.show = false;
    let objet=localStorage.getItem('Users');
    let user=JSON.parse (objet)
    this.getServiceCF()
    this.getEntrepriseSousTraitance()
    this.getProgrammationMarchePlurieAnnuel()
    this.getAffectationServiceCF()
    this.getAffectation()
    this.getUniteAdminUser(user.id)
          this.getGestionModules()
          this.getInfrastructure()
          this.getTypeOrdrePaiement()
          this.getTacheMarche()
this.getReception()
this.getDemandeEngagement()
this.getPieceJustificative()
this.getDossierLiquidation()
this.getDossierMandat()
this.getDossierFacture()
this.getGestionOrdrePaiementAnnulat()
this.getServiceRealiteFaitOp()
this.getHistoriqueDecisionOp()
this.getBudgetEclateImporter()
this.getProcedureDroitCommun()
this.getProcedureDerogatoire()
this.getBonCommande()
this.getBailleurDmdEngagement()
this.getProcedureTypeDepense()
this.getDossierAutreDepense()
this.getGestionOrdrePaiement()
this.getFormeJuridiques()
this.getRegimeImpositions()
 this.getGroupe()
    this.getRoles()
    this.getUtilisateurs()
    this.getMenu()
    this.getModule()
    this.getEquipeCF()
    this.getAffectationGroupeUser()
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
   this.getMotifPassation()
   this.getSourceFinancement()
   this.getTypeFinancement()
   this.getPlanSourceFinancement()
   this.getStructureBudgetaire()
   this.getPlanBudgetaire()
   this.getStructureActivite()
    this.getStructureInfrastructure()
    this.getPlanActivite()
    this.getPlanInfrastructure()
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
     this.getAllHistoriqueDecompteFacture()
       this.getStructureOrganigrammeUa()
       this.getSousBudget()
       this.getBudgetEclateRegie()
 this.getAllBudgetEclate()
 this.getAllHistorisqueBudgetEclate()
 this.getAllDecisionBudgetEclate()
 this.getAllHistoriqueDecisionBudgetEclate()
 this.getVehicule()
 this.getReparationVehicule()
 this.getStockArticleUa()
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
      this.getFonctionsProfessionnel()
      this.getComptableAssignataire()
      this.getSauvegardePhoto()
      this.getFichierJointDmd()
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
      this.getGrpeCorporel();
      this.getAffectationUaBien()
      this.getTypeBienCorporels();
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
     this.getMarqueVehicule();
      this.getModeleVehicule();
      this.getTypeEntretien();
      this.getTypeVehicule();
      this.getTypeEnergie();
      this.getTypeReparation();
      this.getAffectationVehicule();
      this.getTransmissionVeh();
      this.getAppreciation();
      this.getFicheArticle()
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
this.getTousPlanBudgetaire()
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
 this.getReserveCf()
this.getUniteAdministrativeBailleur()
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

    this.getProblemeMarche()
    this.getPersonnelRattacher()
    

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

this.getMarcheHorSib()
this.getOpProvisoire()
this.getRealiteServiceHors()

   this.getAvenant()
this.getImageMarche()
    this.getMarcheBailleur()
this.getMembreCojo()
    this.getProceVerbal()
      this.getEcheances()
      this.getOrganeDecision()
    this.getMembreComiteEvaluation()
    this.getStructureDAO()
this.getTousActivite()

this.getEntreprisePreselectionner()
        },

  computed:{
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "budgetGeneral",
                "afficheTransfertValider",
                "transferts"
            ]),
            ...mapGetters('personnelUA', ['sauvegardePhoto',]),
    ...mapGetters("bienService", ["getMandatPersonnaliserVise","getMandatPersonnaliserPersonnel","mandats"]),

       ...mapGetters("parametreGenerauxAdministratif", [

                "gestionModules"
            ]),


      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation",
      "getterUniteAdministrativeByUser"]),
   ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  }),

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
      return "https://personnel.agosoftprojet.com/savephotoprofil/1_!1595119277.jpg "
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
if(objJson==undefined) return null;
return objJson.id

},







  },



  methods:{
 admin:admin,
     dcf:dcf,
...mapMutations('parametrageMenu', ['activate']),
    ...mapActions('Utilisateurs', ['getUtilisateurs',"getRoles",'getGroupe',"getMenu","getModule",
    "getAffectation","getUniteAdminUser","getEquipeCF","activeMenuModuleSidcf","getAffectationGroupeUser","getServiceCF","getAffectationServiceCF"]),
      ...mapActions('parametreGenerauxFonctionnelle',
    [ 'getStructureFonctionnelle', 'getPlanFonctionnelle','getStructureDecision','getPlanDecision','getStructureActe','getPlanActe','getTypeconges','getlisteNaturePrix','getMotifPassation']),

    ...mapActions('parametreGenerauxSourceDeFinancement',['getSourceFinancement',
        'getTypeFinancement','getPlanSourceFinancement'
    ]),
   ...mapActions( 'parametreGenerauxBudgetaire', ['getStructureBudgetaire',
   'getPlanBudgetaire',"getTousPlanBudgetaire","getTousActivite"]),
   ...mapActions('parametreGenerauxActivite', [ 'getStructureActivite','getPlanActivite','getStructureInfrastructure','getPlanInfrastructure']),
   ...mapActions('parametreGenerauxProgrammeUnite',['getUnite', 'getZone']),

    ...mapActions('parametreGenerauxAdministratif',
     ['getGestionModules',"getInfrastructure",'getExercicesBudgetaires', 'getTitres', 'getTaux',
    'getNatureSection', 'getSection', 'getStructureProgramme', 'getPlanProgramme', 'getStructurePays', 'getPlanPays','getPlanOrganigrammeUa',
    'getStructureAdministrative', 'getServiceGestionnaire', 'getStructureGeographique',
    'getLocalisationGeographique', 'getChapitre','getTypeUniteAdministrative',"getGrandeNature","getFormeJuridiques","getRegimeImpositions"]),

 ...mapActions("uniteadministrative", [
   "getUniteAdministrativeBailleur", 
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
     "getSousBudget",
     "getBudgetEclateRegie",
     "getAllDecompteFacture",
     "getAllBudgetEclate",
     "getAllHistorisqueBudgetEclate",
     "getAllDecisionBudgetEclate",
     "getAllHistoriqueDecisionBudgetEclate",
     "getVehicule",
     "getReparationVehicule",
     "getStockArticleUa",
     "getAllHistoriqueDecompteFacture"
    ]),
            ...mapActions('personnelUA', ["getComptableAssignataire","getFonctionsProfessionnel","getFichierJointDmd","getSauvegardePhoto","getPermissionConge","getSalaire","getordrepaiement",'getTypeSalarie',"getEchelons",
            "getTypeContrat","getNiveauEtude","getPersonnelRattacher","getFonctions","getTypeActPersonnel",
            "getClasses","getEchelons","getpaiementPersonnel","getActeur","getGrades","getNbrActeurAcrediteTaux",
            "getActPersonnel","getConges","allActeurDepense","getListeSalaireActuelAll","getActeurFinContratAndActivite","getCategorieGrade",
"getFamilleFonction","getFonctionBudgetaire", "getDossierCandidatPersonnel",
"getClassificationGradeFonction","getSituationMatrimonial", "getContratResilie"]),

      ...mapActions('gestionMarche',['getTypeMarche',"getSecteurActivite",
        "getEntreprise","getEtapeMarche","getDocumentPTBAPPM","getMarcheContrat","getPresenceCF",
        "getDocumentPresence","getNombreMarcheByProcedure","sourcePersonnalise",
        "getSourceFinnancementByMarche","getMarcheContratExecution",
        "getBanque", "getCompte","getAgence","getSanction","getHistoriqueEntreprise"]),

        ...mapActions("SuiviImmobilisation", ["getAffectationUaBien",
          "getAffectationUaBien",
          "getGrpeCorporel",
          "getTypeBienCorporels",
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
      "getTransmissionVeh",
      "getAppreciation",
      "getFicheArticle"



    ]),
 ...mapActions('horSib',['getMarcheHorSib',"getRealiteServiceHors","getOpProvisoire"]),
 
    	 ...mapActions('suivi_controle_budgetaire', ['getCategorieMission', 'getNormeMission','getHistoriqueMission',
    'getMission']),
      //  ...mapActions('planification_budgetaire', ['getAllBudgetGeneral']),
       ...mapActions('bienService', ['getBonCommande',"getProcedureTypeDepense","getProcedureDerogatoire","getProcedureDroitCommun","getBudgetEclateImporter","getHistoriqueDecisionOp","getServiceRealiteFaitOp","getGestionOrdrePaiementAnnulat","getGestionOrdrePaiement","getDossierAutreDepense","getDossierFacture","getDossierMandat","getDossierLiquidation","getPieceJustificative","getDemandeEngagement","getReception","getTacheMarche","getTypeOrdrePaiement","getImageMarche",'getAvenant','getChoixProcedure', 'getBailleur','getTypeFacture',
       'getTypeActeDepense','getProblemeMarche', 'getTypeActeEffetFinancier', 'getTypeAnalyse','getTypeTextJuridique','getAutreTextJuridique' ,
         'getTypePrestation', 'getCondition', 'getTextJuridique', 'getMarche', 'getTypeMarches','getBailleurDmdEngagement',
       'getModePassations', 'getTypeProcedures', 'getProcedurePassation', "getAppelOffre","getLot",
         "getDossierCandidat", "getOffreFinancier", "getOffreTechnique","getLettreInvitation","getMandater",
         "getCojo","getAnalyseDossier", 'getMotifDecision', 'getDocumentProcedure','getReserveCf',
         'getDemandeAno',"getAnalyseDMP","getAnoDMPBailleur","getObservationBailleur",
          'getActeEffetFinancier','getEngagement','getMandat',"getVille","getPays","getCommune",
          "getExecutionMarche","getTypeAppel","getTypeCandidat","getFacture"
          ,"getMarcheBailleur","getMembreCojo","getProceVerbal","getModePaiement", "getEcheances","getOrganeDecision",
          "getCotation","getOuverture","getTransmission","getPlanPassationMarche",
          "getRapport", "getDocument","getRapportJugement","getRolemembreCojo","getCandidatSelectionner",
          "pusherImageMarche","getImageMarche","getMembreComiteEvaluation","getStructureDAO",
          'getEntrepriseSousTraitance','getProgrammationMarchePlurieAnnuel','getEntreprisePreselectionner']),

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

    navigateToTableauBord(){
      this.activeMenuModuleSidcf(4)
        this.activate(1034)
        this.$router.push({
          name: 'TableauBordGestionHorsSibSimple'
        })
      },
    // navigateToTableauBord(){
    //   this.activeMenuModuleSidcf(4)
    //   this.$router.push({
    //     name: 'TableauBordGestionHorsSibSimple'
    //   })
    // },

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
activeMenuModuleTableauBord(){
      this.activeMenuModuleSidcf(9)
      this.$router.push({
        name: 'TableauDeBordG'
      })
    },

      goToModule(id){
     console.log(id)
     if (id==6){
         this.$router.push({
             name: 'liste_ua_compta'
         })
     }else{

         this.$router.push({
             name: 'TableauDeBordG',
             params:{id:id}
         })
     }
      },
      // goToGestionSib(){
      //     this.$router.push({
      //         name: 'TableauDeBordG',
      //         params:{id:}
      //     })
      // },
      // goToGestionHorsSib(){
      //     this.$router.push({
      //         name: 'TableauDeBordG',
      //         params:{id:}
      //     })
      // },
      // goToCartographie(){
      //     this.$router.push({
      //         name: 'TableauDeBordG',
      //         params:{id:}
      //     })
      // },
      // goToUniteComptabiliteMatiere(){
      //     this.$router.push({
      //         name: 'TableauDeBordG'
      //     })
      // },
      // goToRapport(){
      //     this.$router.push({
      //         name: 'TableauDeBordG',
      //         params:{id:}
      //     })
      // },
      // goToParametreGeneraux(){
      //     this.$router.push({
      //         name: 'TableauDeBordG',
      //         params:{id:}
      //     })
      // },

  },
  mounted() {
    let pusher = new Pusher('44daa856e0753c75275a', {
      cluster: 'eu',
       encrypted: false
    });
let vm=this;
    let channel = pusher.subscribe('channel-image-marche');
    channel.bind('event-image-marche', function(data) {

      let infomarche=data
    vm.pusherImageMarche(infomarche.data)
    });

      const ws = Ws('ws://localhost:3333')


      ws.on('open', () => {
          console.log("*********GUEI ROLAND********")
          vm.isConnected = true
          console.log(vm.isConnected)
          console.log(".............................")
      })

      ws.on('close', () => {
          vm.isConnected = false
          console.log(vm.isConnected)
      })



      //
      // const chat = ws.subscribe('chat')
      //
      // chat.on('ready', () => {
      //     chat.emit('message', 'hello')
      // })
      //
      // chat.on('error', (error) => {
      //     console.log(error)
      // })
      //
      // chat.on('close', () => {
      // })

  }
}
 
</script>
<style scoped>
h4{
  color:#ffffff
}
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


}
#loginbox .form{ width:100%; background: #fff; position:relative; top:0; left:0; }
#loginbox .form-actions { padding: 14px 20px 15px;}


/*@media (max-width:3000px){*/
/*  #logo { width: 60%; }*/
/*  #loginbox{*/
/*      width: 80%;*/
/*      top: 75%;*/
/*      left: 50%;*/

/*  }*/
/*}*/
@media (max-width: 480px){
  #logo { width: 40%; }
  #loginbox{ width:90%}
  #loginbox .control-group{ padding:8px 0; margin-bottom:0px;}
}



.timeline_area {
    position: relative;
    z-index: 1;
    background: transparent;


}
.single-timeline-area {
    position: relative;
    z-index: 1;

}
@media only screen and (max-width: 575px) {
    .single-timeline-area {
        padding-left: 100px;
    }
}
.single-timeline-area .timeline-date {
    position: absolute;
    width: 180px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-grid-row-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-right: 60px;
}
@media only screen and (max-width: 575px) {
    .single-timeline-area .timeline-date {
        width: 100px;
    }
}
.single-timeline-area .timeline-date::after {
    position: absolute;
    width: 3px;
    height: 100%;
    content: "";
    background-color: #ebebeb;
    top: 0;
    right: 30px;
    z-index: 1;
}
.single-timeline-area .timeline-date::before {
    position: absolute;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #f1c40f;
    content: "";
    top: 50%;
    right: 26px;
    z-index: 5;
    margin-top: -5.5px;
}
.single-timeline-area .timeline-date p {
    margin-bottom: 0;
    color: #020710;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
}
.single-timeline-area .single-timeline-content {
    position: relative;
    z-index: 1;
    padding: 30px 30px 25px;
    border-radius: 6px;
    margin-bottom: 10px;
    margin-top: 10px;
    -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125) !important;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23) !important;
    border: 5px solid orangered;
    height: 120px !important;
    text-align: center;
    background: #FFF !important;
    color: black !important;

}

.single-timeline-area .single-timeline-content:hover {
    border: 5px solid green;
    cursor: grab;
    background: orangered !important;
    color: white !important;

}
@media only screen and (max-width: 575px) {
    .single-timeline-area .single-timeline-content {
        padding: 20px;
    }
}
/*.single-timeline-area .single-timeline-content .timeline-icon {*/
/*  */
/*    width: 45px;*/
/*    height: 45px;*/
/*    background-color: #f1c40f;*/
/*    -webkit-box-flex: 0;*/
/*    -ms-flex: 0 0 30px;*/

/*    text-align: center !important;*/
/*    max-width: 50px;*/
/*    border-radius: 50%;*/

/*}*/
.single-timeline-area .single-timeline-content .timeline-icon i {
    color: #ffffff;
    line-height: 30px;
    text-align: center !important;
}
.single-timeline-area .single-timeline-content .timeline-text h6 {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
}
.single-timeline-area .single-timeline-content .timeline-text p {
    font-size: 13px;
    margin-bottom: 0;
}
.single-timeline-area .single-timeline-content:hover .timeline-icon,
.single-timeline-area .single-timeline-content:focus .timeline-icon {
    background-color: #020710;
}
.single-timeline-area .single-timeline-content:hover .timeline-text h6,
.single-timeline-area .single-timeline-content:focus .timeline-text h6 {
    color: #3f43fd;
}

</style>

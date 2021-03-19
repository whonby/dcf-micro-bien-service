ajouterHistorisqueBudgetEclate
<template>

<div class="container-fluid">
      <hr />
      <table class="table table-bordered table-striped">
        <tr>
          <td>
 <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente{{doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id)}}</button>
    
        </div>
          </td>
         
        </tr>
      </table>
      
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter la Ventilation du budget</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION{{idBudgetEclateRegierSousBudget(this.formData10.sous_budget_id,this.formData1.ligneeconomique_id)}}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="INFORMATIONUA" class="tab-pane active">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION SUR UNITE ADMINISTRATIVE</a>
                      </li>
                    </ul>
                  </div>
                 <table class="table table-bordered table-striped" style="border:1px solid #000">
                     
                     <tr>
 
                    <td>
                       <div class="control-group">
                <label class="control-label">Exercice</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  :value="anneeAmort"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td>   
                  
                  <td>
                       <div class="control-group">
                <label class="control-label">Section</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleSection(idSection(idLigneEconomique(iddmandeEngagement(formData.numero_op_systeme))))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td>
              <td>
              <div class="control-group">
                <label class="control-label">Programme</label>
                <div class="controls">
                   <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleProgramme(idProgramme(idLigneEconomique(iddmandeEngagement(formData.numero_op_systeme))))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
                     </td>
                     <td>
              <div class="control-group">
                <label class="control-label">Action</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleAction(idAction(idLigneEconomique(iddmandeEngagement(formData.numero_op_systeme))))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td> 
                     </tr>
                     <tr>
 
                 
              <td>
              <div class="control-group">
                <label class="control-label">Grande Nature</label>
                <div class="controls">
                   <input
                    type="text"
                    style="border:1px solid #000"
                   :value="LibelleGrandeNature(idGrandeNature(idLigneEconomique(iddmandeEngagement(formData.numero_op_systeme))))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
                     </td>
                      <td>
                       <div class="control-group">
                <label class="control-label">Unite administrative{{formData.uniteadministrative_id}} <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="formData.uniteadministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              <code style="color:red;font-size:12px" v-if="formData.uniteadministrative_id==''">Veuillez renseigner ce champ</code>
                  </td>
                    <td colspan="">
              <div class="control-group">
                <label class="control-label">Numero op Système</label>
                <div class="controls">
                  <select v-model="formData.numero_op_systeme" class="span" style="border:1px solid #000">
                    <option></option>
                     <option
                        v-for="typeFact in afficheNumeroOPSysteme(formData.uniteadministrative_id)"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.numero_op_systeme}}</option>
                  </select>
                </div>
              </div>
              
                     </td>
                   <td colspan="2">
              <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libellePlanActivite(idactivite(iddmandeEngagement(formData.numero_op_systeme)))"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
                     </td>
                   
                      
                     </tr>
                     
            
                        <tr>
 
                       <td colspan="2">
              <div class="control-group">
                <label class="control-label">Ligne budgetaire</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleLigneEconomique(idLigneEconomique(iddmandeEngagement(formData.numero_op_systeme)))"
                    class="span"
                    readonly
                  />
 
              
                </div>
              </div>
              
                     </td>
                     <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Dotation(n)</label>
                <div class="controls">
                   <money :value="MontantOpSysteme(formData.numero_op_systeme)"  readOnly  style="text-align:left;color:red"  class="span"></money>
                 
                </div>
              </div>
                  </td>   
                     </tr>
</table>
                    
                    
                        
 
              
                      
                
                  
                  
                 <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION SUR L'ECLATEMENT DU BUDGET</a>
                      </li>
                    </ul>
                  </div>
                  <table class="table table-bordered table-striped" style="border:1px solid #000">
                     <tr>
 
                    <td>
                       <div class="control-group">
                <label class="control-label">Type de Financement  <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="types_financements"
                                                   v-model="formData1.type_financement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
               <code style="color:red;font-size:12px" v-if="formData1.type_financement_id==''">Veuillez renseigner ce champ</code>
                  </td>   
                  
                  <td colspan="">
                       <div class="control-group">
                <label class="control-label">Bailleur{{doublonLigneBudgetaireUniteAdministrative(this.formData.uniteadministrative_id)}}</label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="sources_financements"
                                                   v-model="formData.source_financement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
                  </td>
                   <td>
                       <div class="control-group">
                <label class="control-label">Montant du Bailleur</label>
                <div class="controls">
                   <money :value="RecupererMontantBailleur(this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),formData.source_financement_id)"  readOnly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                 <!-- <code style="color:red;font-size:12px" v-if="MontantParBailleur == 0">Montant Budget est Saturé</code> -->
                </div>
              </div>
                  </td>
             <td>
                       <div class="control-group">
                <label class="control-label">Montant a Eclaté (n+(n-1))</label>
                <div class="controls">
                   <money :value="MontantAEclate"  readOnly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                 <code style="color:red;font-size:12px" v-if="MontantAEclate == 0">Montant Budget est Saturé</code>
                </div>
              </div>
                  </td>
                  
                     </tr>
                     <tr>
                        <td colspan="">
                       <div class="control-group">
                <label class="control-label">Grande nature</label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="grandes_natures"
                                                   v-model="formData.grandenature_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
                  </td>
                        <td>
                       <div class="control-group">
                <label class="control-label">code Ligne Economique   <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="recuppererLeDernierNiveau"
                                                   v-model="formData1.ligneeconomique_id"
                                                   option-value="id"
                                                   option-text="code"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              <code style="color:red;font-size:12px" v-if="formData1.ligneeconomique_id==''">Veuillez renseigner ce champ</code>
                  </td>   
                  
                  <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Libelle ligne budgetaire</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelleLigneEconomique(formData1.ligneeconomique_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
                  </td>
                     </tr>
                     <tr>
 
                      
                  
                  
             
                     <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Dotation</label>
                <div class="controls">
                  <money  v-model="formData1.dotation_nouvelle"   style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>
                  <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Dotation Total</label>
                <div class="controls">
                  <money   :value="formData1.dotation_nouvelle"  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>
                     </tr>
                    
                 </table>
                  <!-- <div align="left">

      <button class="btn btn-info"  @click.prevent="apercuFacture">Aperçu Ventilation budget  {{anneeAmort}} </button>


                            </div> -->
                            <!-- <div id="printMe">
                             
                                  <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                    <th></th>
                    <th colspan="3" style="font-size:14px;color:#000">BUDGET</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <th style="font-size:14px;color:#000">LIGNE BUDGETAIRE</th>
                     <th style="font-size:14px;color:#000">ETAT</th>
                    <th style="font-size:14px;color:#000">DON</th>
                    <th style="font-size:14px;color:#000">EMPRUNT</th>
                    <th style="font-size:14px;color:#000">BUDGET TOTAL</th>
                    <th style="font-size:14px;color:#000">SUPPRIMER</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type) in listeBudgetaireEclate(formData.uniteadministrative_id,idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)))" :key="type.id">
                    <td style="font-size:12px;color:#000">{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                      <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.tresor)) || 0}}</td>
                                         <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.don)) || 'Non renseigné'}}</td>
                   <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.emprunt)) || 'Non renseigné'}}</td>
                    <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.don)+parseFloat(type.emprunt)+parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclateRegie(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td style="font-weight:bold;font-size:14px;text-align:center;">TOTAL</td>
                    <td style="text-align:center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(TotalBudget))}}</td>
                    <td></td>
                    
                  </tr>
                </tbody>
              </table>
                              
                
                            </div> -->
                    </div>
                  </div>
<div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                        
                          class="btn btn-primary"
                          @click.prevent="ajouterBudgetEclateRegieUniteAdministrative()"
                        >Valider</a>
                        <a
                          @click.prevent="pagePrecedent()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                  
                  <br />
                  
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications/>
     

</div>
</template>
<script>

    import {mapGetters,mapActions} from 'vuex'
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
    import {formatageSomme} from "@/Repositories/Repository"
import {  ModelListSelect } from 'vue-search-select'
    import moment from 'moment';
import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
    ModelListSelect,
     
  },
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                
          info_pdf:false,
                formData:{
                 activite_id:0,
                 uniteadministrative_id:"",
                 
                },
                
                editpiece:{},
                formData5:{
                  numeroDemande:""
                },
                formData10:{
sous_budget_id:0
                },
 formMandat:{
                 
                },
                formData2:{
                 exo:"",
                 typeeclatement:"",
                 ligne_parent_id:"",
                 budgetaire_parent_id:""
                },
                formData1:{
                  type_financement_id:"",
                  ligneeconomique_id:""
                },
                message_mandater:""
            };
        },

        created() {
          
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["BudgetEclateRegie","getSousBudget","getdecisionBudgetEclate","groupeParBAILLER","BudgetEclateRegie","groupeLigneEconomiqueBudget","groupeActiviteBudget","budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","structures_budgetaires","getterTousActivite","getterTousPlanBudgetaire"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["gettersDossierMandat","gettersDemandeEngagement","getMandatPersonnaliserVise","typeFactures","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',"types_financements"]),

LibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
           return this.groupeActiviteBudget.filter(qtreel => qtreel[0].ua_id == id && qtreel[0].actived==1 && qtreel[0].exercicebudget_id==this.anneeAmort);

      
        }
      };
    },
    MontantOpSysteme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierMandat.find(qtreel => qtreel.id == id && qtreel.decision_cf==8 || qtreel.id == id && qtreel.decision_cf==9);

      if (qtereel) {
        return qtereel.montant_engage
      }
      return 0
        }
      };
    },
    RecupererMontantBailleur() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.gettersDossierMandat.find(qtreel => this.idLigneEconomique(qtreel.demande_engagement_id) == id  && this.idBailleur(qtreel.demande_engagement_id)==id1);

      if (qtereel) {
        return qtereel.montant_engage
      }
      return 0
        }
      };
    },
    iddmandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierMandat.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.demande_engagement_id
      }
      return 0
        }
      };
    },
    idactivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id
      }
      return 0
        }
      };
    },
    idLigneEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ligne_economique_id
      }
      return 0
        }
      };
    },
    idBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.bailler_id
      }
      return 0
        }
      };
    },
afficheNumeroOPSysteme() {
      return (id) => {
        if (id != null && id != "") {
           return this.gettersDossierMandat.filter(qtreel => this.ua_sur_op_systeme(qtreel.demande_engagement_id) == id && qtreel.decision_cf== 8 && this.Anneop_systeme(qtreel.demande_engagement_id)==this.anneeAmort && this.TypeEngagementop_systeme(qtreel.demande_engagement_id)=="Régie davances-reservation des crédit" );

      
        }
      };
    },
    TypeEngagementop_systeme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_engagement_id
      }
      return 0
        }
      };
    },
Anneop_systeme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exercice
      }
      return 0
        }
      };
    },
ua_sur_op_systeme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ua_id
      }
      return 0
        }
      };
    },
















 TotalBudget(){
    

return parseFloat(this.recupereMontantEtatTotal(this.formData.uniteadministrative_id))+parseFloat(this.recupereMontantDonTotal(this.formData.uniteadministrative_id))+parseFloat(this.recupereMontantEmpruntTotal(this.formData.uniteadministrative_id))
    
    },




     cumulDotationParUa() {
      return (id,id1,id3) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id3 != null && id3 != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligne_budgetaire_parent_id == id1  && qtreel.source_financement_id == id3 && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    cumulDotationParUaSousBudget() {
      return (id,id1,id2,id3) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id2 != null && id2 != "" && id3 != null && id3 != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.sous_budget_id == id && qtreel.ligne_budgetaire_parent_id == id1 && qtreel.type_financement_id == id2 && qtreel.source_financement_id == id3 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
     RecupererMontantParBailleurCumull(){

return this.cumulDotationParUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),this.formData.source_financement_id)
      
      
    },
//      RecupererMontantParBailleur(){
//       if(this.comparaison(this.formData.activite_id)==this.formData.activite_id){
// return this.MontantParBailleurSousBudget(this.formData10.sous_budget_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),this.formData1.type_financement_id,this.formData.source_financement_id)
//       }
//       else{
// return this.MontantParBailleur(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),this.formData1.type_financement_id,this.formData.source_financement_id)
//       }
      
//     },




//formatageSomme(parseFloat(recupereMontantDon(type[0].ligneeconomique_id))+parseFloat(recupereMontantEmprunt(type[0].ligneeconomique_id)))

MontantParBailleur() {
      return (id,id3,id1,id2)=> {
        if (id != null && id != "" && id3 != null && id3 != "" && id1 != null && id1 != "" && id2 != null && id2 != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.ua_id == id && qtreel.economique_id == id3 && qtreel.typefinancement_id == id1 && qtreel.sourcefinancement_id == id2 &&  qtreel.exercicebudget_id==this.anneeAmort && qtreel.actived==1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.cp), 0).toFixed(0);

   
        }
      };
    },

MontantParBailleurSousBudget() {
      return (id,id3,id1,id2)=> {
        if (id != null && id != "" && id3 != null && id3 != "" && id1 != null && id1 != "" && id2 != null && id2 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.id == id && qtreel.ligneeconomique_id == id3 && qtreel.type_financement_id == id1 && qtreel.source_financement_id == id2 &&  qtreel.execice==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_budgetaire), 0).toFixed(0);

   
        }
      };
    },


LibelleTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    LibelleSourceFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    LibelleGrandeNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
idTypeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.typefinancement_id
      }
      return 0
        }
      };
    },
    idSourceFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.sourcefinancement_id
      }
      return 0
        }
      };
    },
    idGrandeNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.gdenature_id
      }
      return 0
        }
      };
    },
comparaison() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.activite_parent_id == id);

      if (qtereel) {
        return qtereel.activite_parent_id
      }
      return 0
        }
      };
    },
// videLeChamp(){
// if(this.formData10.sous_budget_id==''){
//   return this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))==""
// }
// else{
//   return this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))
// }
// },
    
   afficheLesSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.activite_parent_id==id1 && qtreel.execice==this.anneeAmort);

     
      
        }
      };
    },
    afficheLesSousBudgetLigneBudgetaire() {
      return (id1) => {
        if (id1 != null && id1 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.id==id1);

     
      
        }
      };
    },




recupereMontantEtat() {
      return id => {
        if (id != null && id != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==14 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDon() {
      return id => {
        if (id != null && id != "") {
          return this.BudgetEclateRegie.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==13  && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==15  && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },


recupereMontantEtatTotal() {
      return id => {
        if (id != null && id != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDonTotal() {
      return id => {
        if (id != null && id != "") {
          return this.BudgetEclateRegie.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmpruntTotal() {
      return id => {
        if (id != null && id != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },

recupereMontantEtatTotalSousBudget() {
      return id => {
        if (id != null && id != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.sous_budget_id == id && qtreel.annebudgetaire==this.anneeAmort && qtreel.sous_budget_id != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDonTotalSousBudget() {
      return id => {
        if (id != null && id != "") {
          return this.BudgetEclateRegie.filter(qtreel => qtreel.sous_budget_id == id && qtreel.annebudgetaire==this.anneeAmort && qtreel.sous_budget_id != 0 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmpruntTotalSousBudget() {
      return id => {
        if (id != null && id != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.sous_budget_id == id && qtreel.annebudgetaire==this.anneeAmort && qtreel.sous_budget_id != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },

listeBudgetaireEclateSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.sous_budget_id == id && qtreel.activite_id == id1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.sous_budget_id != 0 );

        }
      };
    },
listeBudgetaireEclate() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.activite_id == id1 && qtreel.annebudgetaire==this.anneeAmort);

        }
      };
    },
listeDesBudgetaireEclate() {
      return id => {
        if (id != null && id != "") {
           return this.groupeParBAILLER.filter(qtreel => qtreel[0].uniteadministrative_id == id && qtreel[0].annebudgetaire==this.anneeAmort );

        }
      };
    },



MontantDisponibleParUa(){
return parseFloat(this.DotationRestantAnneePrecedant(this.formData.uniteadministrative_id))-parseFloat(this.CumulMontantConsommeParUaPrecedent(this.formData.uniteadministrative_id))
},
     CumulMontantConsommeParUaPrecedent() {
      return id => {
        if (id != null && id != "") {
           return this.getMandatPersonnaliserVise.filter(qtreel => qtreel.ua_id == id && qtreel.exercice_budget==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);

        }
      };
    },






MontantAEclate(){
return parseFloat(this.RecupererMontantBailleur(this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),this.formData.source_financement_id))-parseFloat(this.RecupererMontantParBailleurCumull)-parseFloat(this.formData1.dotation_nouvelle)
// if(this.formData10.sous_budget_id !=""){
//   return  ((parseFloat(this.RecuppererLaDotation(this.formData10.sous_budget_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))))+parseFloat(this.MontantDisponibleParUa)) - (parseFloat(this.cumulDotationParUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))))+parseFloat(this.dotationTotal)))
// }
// else if(this.formData10.sous_budget_id ==""){
  
//   return  ((parseFloat(this.RecuppererLaDotationInitial(this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))))+parseFloat(this.MontantDisponibleParUa)) - (parseFloat(this.cumulDotationParUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))))+parseFloat(this.dotationTotal)))
// }
// else{
//    return  ((parseFloat(this.MontantDisponibleParUa)) - (parseFloat(this.cumulDotationParUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))))+parseFloat(this.dotationTotal)))
// }
},

  DotationRestantAnneePrecedant() {
      return id => {
        if (id != null && id != "") {
           return this.BudgetEclateRegie.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },



    
dotationTotal(){
return parseFloat(this.formData1.report)+parseFloat(this.formData1.dotation_nouvelle)
},
recupererAnneePrecedant(){

        return parseFloat(this.anneeAmort)-1
   
   
},


grise(){
    return this.formData.typeeclatement == 1
},
griseExercice(){
    return this.formData2.typeeclatement != 1
},
griseLigne(){
    return this.formData2.typeeclatement !=1 && this.formData2.exo != ''
},
griseLigneBudgetaire(){
    return this.formData2.typeeclatement!=1 && this.formData2.ligne_parent_id ==''
},
recuppererLeDernierNiveau() {
      
           return this.plans_budgetaires.filter(qtreel => this.recupererStructure(qtreel.structure_budgetaire_id) == 6 );

      
       
    },

recupererStructure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau
      }
      return 0
        }
      };
    },

      libelleAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
      }
      return 0
        }
      };
    },
    libelleProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    libelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat('  ',qtereel.nom_section)
      }
      return 0
        }
      };
    },
    
    idSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.section_id
      }
      return 0
        }
      };
    },
    idProgramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.program_id
      }
      return 0
        }
      };
    },
idAction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.action_id
      }
      return 0
        }
      };
    },
ActiviteCode() {
      
           return this.plans_activites.filter(qtreel => qtreel.parent != null );

      
       
    },



      RecupererlibelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
           return this.groupeLigneEconomiqueBudget.filter(qtreel => qtreel[0].activite_id == id);

      
        }
      };
    },
     lignePrecedent() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.activite_id == id && qtreel.actived==0);

      
        }
      };
    },
    ActivitePrecedant() {
     
           return this.budgetGeneral.filter(qtreel => qtreel.exercicebudget_id == this.recupererAnneePrecedant && qtreel.actived==0 && qtreel.ua_id==this.idUniteAdministrative(this.formData.activite_id));

      
      
    },
    // RecuppererLaDotation() {
    //   return (id) => {
    //     if (id != null && id != "") {
    //        return this.budgetGeneral.filter(qtreel => qtreel.id == id && qtreel.actived==1);

      
    //     }
    //   };
    // },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    videLeChamps(){
      if(this.formData10.sous_budget_id!=""){
return this.RecuppererLaDotation(this.formData10.sous_budget_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))
      }
      return 0
    },
    RecuppererLaDotation() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.getSousBudget.find(qtreel =>qtreel.id == id  && qtreel.ligneeconomique_id == id1 && qtreel.execice==this.anneeAmort);

      if (qtereel) {
        return qtereel.montant_budgetaire
      }
      return 0
        }
      };
    },
    idLigneBudgetaire() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.getSousBudget.find(qtreel => qtreel.id == id  && qtreel.execice==this.anneeAmort);

      if (qtereel) {
        return qtereel.ligneeconomique_id
      }
      return 0
        }
      };
    },
    RecuppererLaDotationInitial() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id  && qtreel.exercicebudget_id==this.anneeAmort && qtreel.actived==1);

      if (qtereel) {
        return qtereel.cp
      }
      return 0
        }
      };
    },
    imputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.codebudget
      }
      return 0
        }
      };
    },
    libellePlanActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
   
    libelleLigneEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
    idUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.activite_id == id);

      if (qtereel) {
        return qtereel.ua_id
      }
      return 0
        }
      };
    },
listeDesUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

return this.uniteAdministratives

    },
doublonLigneBudgetaireSousBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.sous_budget_id == id && qtreel.annebudgetaire==this.anneeAmort && 	qtreel.sous_budget_id!=0);

      if (qtereel) {
        return qtereel.sous_budget_id
      }
      return 0
        }
      };
    },
    doublonLigneBudgetaireUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort && 	qtreel.sous_budget_id==0);

      if (qtereel) {
        return qtereel.uniteadministrative_id
      }
      return 0
        }
      };
    },
    doublonLigneBudgetaireSousBudgetaire() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.sous_budget_id == id && qtreel.ligneeconomique_id == id1 && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.ligneeconomique_id
      }
      return 0
        }
      };
    },
    
    doublonDecisionBudgetEclateRegie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getdecisionBudgetEclate.find(qtreel => qtreel.unite_administrative_id == id);

      if (qtereel) {
        return qtereel.exercice
      }
      return 0
        }
      };
    },
    doublonLigneBudgetaire() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.ligneeconomique_id
      }
      return 0
        }
      };
    },
    idBudgetEclateRegierUa() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.uniteadministrative_id == id && qtreel.ligneeconomique_id == id1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.sous_budget_id==0);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
    idBudgetEclateRegierSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.sous_budget_id == id && qtreel.ligneeconomique_id == id1 && qtreel.annebudgetaire==this.anneeAmort && qtreel.sous_budget_id!=0);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
    montantDon() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.don
      }
      return 0
        }
      };
    },
    montantTresor() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.tresor
      }
      return 0
        }
      };
    },
    montantEmprunt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.BudgetEclateRegie.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.emprunt
      }
      return 0
        }
      };
    },
    SommeCumul(){
return parseFloat(this.montantEmprunt(this.formData1.ligneeconomique_id))+parseFloat(this.montantTresor(this.formData1.ligneeconomique_id))+parseFloat(this.montantDon(this.formData1.ligneeconomique_id))
},
   SommeCumulAjouter(){
return (parseFloat(this.dotationTotal))
},
        },

methods: {
   ...mapActions("uniteadministrative", [
      
      "supprimerBudgetEclateRegie",
      "modifierBudgetEclateRegie",
     "ajouterBudgetEclateRegie",
      "ajouterHistoriqueDecisionBudgetEclate",
      "ajouterHistorisqueBudgetEclate"
      
      
    ]),

    ajouterBudgetEclateRegieUniteAdministrative() {
  
   if(this.doublonDecisionBudgetEclateRegie(this.formData.uniteadministrative_id)!=this.anneeAmort){
   if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))!=this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
 var nouvelObjet200 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.formData1.dotation_nouvelle,
          tresor:this.formData1.dotation_nouvelle,
          ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
         // type_financement_id:this.formData1.type_financement_id,
          activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
         // source_financement_id:this.formData.source_financement_id,
          	type_financement_don_id:this.formData1.type_financement_id,
            source_financement_don_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          uniteadministrative_id:this.formData.uniteadministrative_id,

         ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      var decisionBudget1012 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1012);
      this.ajouterBudgetEclateRegie(nouvelObjet200);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet200)
      this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
   
   }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))!=this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
var nouvelObjet1520 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.formData1.dotation_nouvelle,
          don:this.formData1.dotation_nouvelle,
          ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
          type_financement_don_id:this.formData1.type_financement_id,
          activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
           source_financement_don_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      var decisionBudget1245 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget1245);
      this.ajouterBudgetEclateRegie(nouvelObjet1520);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet1520)
this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
     }   
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))!=this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
       var nouvelObjet2102 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.formData1.dotation_nouvelle,
          	emprunt:this.formData1.dotation_nouvelle,
            ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
            type_financement_emprunt_id:this.formData1.type_financement_id,
            activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
             source_financement_emprunt_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      var decisionBudget13021 = {
       
        	exercice: this.anneeAmort,
        	unite_administrative_id:this.formData.uniteadministrative_id,
         
      };
      this.ajouterDecisionBudgetEclate(decisionBudget13021);
      this.ajouterBudgetEclateRegie(nouvelObjet2102);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet2102)
       this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))==this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
       var nouvelObjet28452 = {
        ...this.formData,
        id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))),
        	annebudgetaire: this.anneeAmort,
            dotation:this.SommeCumulAjouter,
          	tresor:this.formData1.dotation_nouvelle,
            ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
            type_financement_id:this.formData1.type_financement_id,
            activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
             source_financement_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.modifierBudgetEclateRegie(nouvelObjet28452);
       this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))==this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
       var nouvelObjet27 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	emprunt:this.formData1.dotation_nouvelle,
            ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
            type_financement_emprunt_id:this.formData1.type_financement_id,
            activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
             source_financement_emprunt_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.modifierBudgetEclateRegie(nouvelObjet27);
       this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))==this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
       var nouvelObjet25 = {
        ...this.formData,
         id:this.idBudgetEclater(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	don:this.formData1.dotation_nouvelle,
            ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
            type_financement_don_id:this.formData1.type_financement_id,
            activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
             source_financement_don_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.modifierBudgetEclateRegie(nouvelObjet25);
       this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
   
   }
else{
     if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))!=this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
 var nouvelObjet96 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.formData1.dotation_nouvelle,
          tresor:this.formData1.dotation_nouvelle,
          ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
          type_financement_id:this.formData1.type_financement_id,
          activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
          source_financement_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.ajouterBudgetEclateRegie(nouvelObjet96);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet96)
      this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
   
   }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))!=this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
var nouvelObjet163 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.formData1.dotation_nouvelle,
          don:this.formData1.dotation_nouvelle,
          ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
          type_financement_don_id:this.formData1.type_financement_id,
          activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
           source_financement_don_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.ajouterBudgetEclateRegie(nouvelObjet163);
       this.ajouterHistorisqueBudgetEclate(nouvelObjet163)
this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",
      }
     }   
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))!=this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
       var nouvelObjet221 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.formData1.dotation_nouvelle,
          	emprunt:this.formData1.dotation_nouvelle,
            ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
            type_financement_emprunt_id:this.formData1.type_financement_id,
            activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
             source_financement_emprunt_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.ajouterBudgetEclateRegie(nouvelObjet221);
      this.ajouterHistorisqueBudgetEclate(nouvelObjet221)
       this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))==this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
       var nouvelObjet281 = {
        ...this.formData,
        id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))),
        	annebudgetaire: this.anneeAmort,
            dotation:this.SommeCumulAjouter,
          	tresor:this.formData1.dotation_nouvelle,
            ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
            type_financement_id:this.formData1.type_financement_id,
            activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
             source_financement_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.modifierBudgetEclateRegie(nouvelObjet281);
       this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))==this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
       var nouvelObjet271 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	emprunt:this.formData1.dotation_nouvelle,
            ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
            type_financement_emprunt_id:this.formData1.type_financement_id,
            activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
             source_financement_emprunt_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.modifierBudgetEclateRegie(nouvelObjet271);
       this.formData1 = {
ligne_budgetaire_parent_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)))==this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)) ){
       var nouvelObjet251 = {
        ...this.formData,
         id:this.idBudgetEclaterUa(this.formData.uniteadministrative_id,this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme))),
        	annebudgetaire: this.anneeAmort,
        dotation:this.SommeCumulAjouter,
          	don:this.formData1.dotation_nouvelle,
            ligne_budgetaire_parent_id:this.idLigneEconomique(this.iddmandeEngagement(this.formData.numero_op_systeme)),
            type_financement_don_id:this.formData1.type_financement_id,
            activite_id:this.idactivite(this.iddmandeEngagement(this.formData.numero_op_systeme)),
             source_financement_don_id:this.formData.source_financement_id,
          dotation_nouvelle:this.formData1.dotation_nouvelle,
          ligneeconomique_id:this.formData1.ligneeconomique_id
      };
      this.modifierBudgetEclateRegie(nouvelObjet251);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",

      }
     }
   
}

    },
    apercuFacture() {
      this.$("#ApercuFacture").modal({
        backdrop: "static",
        keyboard: false
      });
    },
      montantPasEquipment(id){
     
          let montant=parseFloat(this.recupereMontantDon(id))+parseFloat(this.recupereMontantEmprunt(id))
          return  montant
       
   },
   TotalHorizontal(id){
     
          let montant=(parseFloat(this.recupereMontantDon(id))+parseFloat(this.recupereMontantEmprunt(id))+parseFloat(this.recupereMontantEtat(id)))
          return  montant
       
   },
   montantTotalMobilier(id){
      let montantTotal =0
       let vm=this
       this.listeDesBudgetaireEclate(this.formData.uniteadministrative_id).forEach(function(){
           montantTotal = montantTotal + vm.montantPasEquipment(id)
       })
       return montantTotal
   },
      formatageSomme:formatageSomme,
 





EnregistrerTout(){
if(this.comparaison(this.formData.activite_id)!=this.formData.activite_id){
   return this.ajouterBudgetEclateRegieRegieUniteAdministrative()
}
else{
 
  return this.ajouterBudgetEclateRegieRegieSousBudget()
}
},
pagePrecedent(){
                window.history.back()
            },


    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
             genererEnPdf(){
  this.$htmlToPaper('printMe');
},
       
}


    };
</script>
<style scoped>
.taille{
  width: 80%;
  margin: 0 -40%;
  height: 50%;
}
.tailles{
   width: 64%;
  margin: 0 -30%;
  
}
.ApercuFacture1{
 width: 64%;
  margin: 0 -30%;
  
  border: 2px solid #000;

}
</style>
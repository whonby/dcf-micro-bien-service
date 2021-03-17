
<template>

<div class="container-fluid">
      <hr />
       <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Modification Budgetaire</h5>
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
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION</a>
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
                   :value="libelleSection(idSection(formData.ligne_budgetaire_parent_id))"
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
                   :value="libelleProgramme(idProgramme(formData.ligne_budgetaire_parent_id))"
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
                   :value="libelleAction(idAction(formData.ligne_budgetaire_parent_id))"
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
                <label class="control-label">Unite administrative <code style="color:red;font-size:16px">*</code></label>
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
                  
                  <!-- <td>
                       <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeActiviteUA(formData.uniteadministrative_id)"
                                                   v-model="formData.activite_id"
                                                   option-value="id"
                                                   option-text="lib"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
                  </td> -->
                   <td colspan="">
              <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <select v-model="formData.activite_id" class="span" style="border:1px solid #000">
                    <option></option>
                     <option
                        v-for="typeFact in LibelleActivite(formData.uniteadministrative_id)"
                        :key="typeFact[0].id"
                        :value="typeFact[0].activite_id"
                      >{{NomActivite(typeFact[0].activite_id)}}</option>
                  </select>
                </div>
              </div>
              
                     </td>
              <td colspan="">
              <div class="control-group">
                <label class="control-label">Ligne budgetaire</label>
                <div class="controls">
                  <select v-model="formData.ligne_budgetaire_parent_id" class="span" style="border:1px solid #000">
                    
                     <option
                        v-for="typeFact in RecupererlibelleLigneEconomique(formData.activite_id)"
                        :key="typeFact[0].id"
                        :value="typeFact[0].economique_id"
                      >{{libelleLigneEconomique(typeFact[0].economique_id)}}</option>
                  </select>
                </div>
              </div>
              
                     </td>
                     <td>
                       <div class="control-group">
                <label class="control-label">Dotation(n)</label>
                <div class="controls">
                   <money :value="videLeChamps"  readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>   
                     </tr>
                 </table>
                 <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION SUR BAILLEUR{{doublonLigneBudgetaire(formData1.ligneeconomique_id)}}</a>
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
                <label class="control-label">Bailleur</label>
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
                  
                     </tr>
                  
                     
                 </table>
                 <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION BUDGET PRECEDENT{{idBudgetEclater(formData1.ligneeconomique_id)}}</a>
                      </li>
                    </ul>
                  </div>
                  <table class="table table-bordered table-striped" style="border:1px solid #000">
                     
                     <tr>
 
                  
                  <td>
                       <div class="control-group">
                <label class="control-label">Cumul Reservation{{ReduitCumulReservation}}</label>
                <div class="controls">
                   <money :value="-cumulReservation(formData.uniteadministrative_id)" readOnly   style="text-align:left;color:red"  class="span"></money>
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
                <label class="control-label">code Ligne Economique    <code style="color:red;font-size:16px">*</code></label>
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
                  
                  <td colspan="3">
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
 
                      
                  
                  <td colspan="">
                       <div class="control-group">
                <label class="control-label">Report</label>
                <div class="controls">
                  <money   :value="recuppererMontantReport(formData.uniteadministrative_id,formData1.ligneeconomique_id)" readonly style="text-align:left;color:red"  class="span" ></money>
                </div>
              </div>
                  </td>
             
                     <td colspan="">
                       <div class="control-group">
                <label class="control-label">Dotation</label>
                <div class="controls">
                  <money  :value="recuppererMontantDotationNouvel(formData.uniteadministrative_id,formData1.ligneeconomique_id)" readonly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>
                  <td>
                             <div class="control-group">
                <label class="control-label">Variation</label>
                <div class="controls">
                  <money  v-model="formData1.variation_budget"   style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                        </td>
                  <td colspan="">
                       <div class="control-group">
                <label class="control-label">Dotation Total</label>
                <div class="controls">
                  <money   :value="dotationTotal" readonly style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
                  </td>
                     </tr>
                    
                 </table>
                 <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                        v-if="MontantAEclate > 0"
                          class="btn btn-primary"
                          @click.prevent="AjouterLiquidation"
                        >Modifier</a>
                        <a
                          @click.prevent="pagePrecedent()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                  <!-- <div align="left">

      <button class="btn btn-info"  @click.prevent="apercuFacture">Aperçu Ventilation budget  {{anneeAmort}} </button>


                            </div> -->
                            <div id="printMe">
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
                  <tr class="odd gradeX" v-for="(type) in listeBudgetaireEclate(formData.uniteadministrative_id)" :key="type.id">
                    <td style="font-size:12px;color:#000;text-align:center">{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                      <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                                         <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.don)) || 'Non renseigné'}}</td>
                   <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.emprunt)) || 'Non renseigné'}}</td>
                    <td style="font-size:12px;color:#000;text-align:center">{{formatageSomme(parseFloat(type.don)+parseFloat(type.emprunt)+parseFloat(type.tresor)) || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
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
                    <td style="font-weight:bold;font-size:14px">TOTAL</td>
                    <td style="text-align:center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(parseFloat(recupereMontantEtatTotal(formData.uniteadministrative_id))+parseFloat(recupereMontantDonTotal(formData.uniteadministrative_id))+parseFloat(recupereMontantEmpruntTotal(formData.uniteadministrative_id))))}}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
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
                 uniteadministrative_id:""
                },
                
                editpiece:{},
                formData5:{
                  numeroDemande:""
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
             ...mapGetters("uniteadministrative", ["groupeParBAILLER","budgetEclate","groupeLigneEconomiqueBudget","groupeActiviteBudget","budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires","structures_budgetaires","getterTousActivite","getterTousPlanBudgetaire"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["getMandatPersonnaliserVise","typeFactures","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
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
     
//formatageSomme(parseFloat(recupereMontantDon(type[0].ligneeconomique_id))+parseFloat(recupereMontantEmprunt(type[0].ligneeconomique_id)))

recupererCumulReservation(){
  return parseFloat(this.cumulReservation(this.formData.uniteadministrative_id))+parseFloat(this.formData1.variation_budget) 
},
ReduitCumulReservation(){
  if(-(this.cumulReservation(this.formData.uniteadministrative_id))>0){
    return parseFloat(this.cumulReservation(this.formData.uniteadministrative_id))+parseFloat(this.formData1.variation_budget)
  }
  else{
    return 0
  }
},


    cumulReservation() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort && qtreel.cumul_reservation < 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.cumul_reservation), 0).toFixed(0);

        }
      };
    },
  



recupereMontantEtat() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==14 && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDon() {
      return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==13  && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.ligneeconomique_id == id && qtreel.type_financement_id==15  && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },


recupereMontantEtatTotal() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tresor), 0).toFixed(0);

     
      
        }
      };
    },
recupereMontantDonTotal() {
      return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.don), 0).toFixed(0);

        }
      };
    },
    recupereMontantEmpruntTotal() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.emprunt), 0).toFixed(0);
        }
      };
    },

listeBudgetaireEclate() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort );

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

cumulDotationParUa() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
cumulDotationParUaEtActivite() {
      return (id,id1) => {
        if (id != null && id != "",id1 != null && id1 != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.activite_id == id1 && qtreel.annebudgetaire==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },



MontantAEclate(){

if(this.formData.activite_id !=""){
  if(this.formData1.variation_budget>0){
 return  ((parseFloat(this.RecuppererLaDotation(this.formData.activite_id))) - (parseFloat(this.cumulDotationParUaEtActivite(this.formData.uniteadministrative_id,this.formData.activite_id))+parseFloat(this.formData1.variation_budget)))
  }
 else{
    return ((parseFloat(this.RecuppererLaDotation(this.formData.activite_id))) - (parseFloat(this.cumulDotationParUaEtActivite(this.formData.uniteadministrative_id,this.formData.activite_id))))
 }
}
else{

if(this.formData1.variation_budget>0){
 return ((parseFloat(this.MontantDisponibleParUa)) + (parseFloat(this.cumulDotationParUa(this.formData.uniteadministrative_id))+parseFloat(this.formData1.variation_budget)))
  }
 else{
     return  ((parseFloat(this.MontantDisponibleParUa)) + (parseFloat(this.cumulDotationParUa(this.formData.uniteadministrative_id))))
 }


 
}
},

  DotationRestantAnneePrecedant() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.annebudgetaire==this.recupererAnneePrecedant ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
 dotationDon(){
return parseFloat(this.recuppererMontantDon(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id))+parseFloat(this.formData1.variation_budget)
},

  dotationEmprunt(){
return parseFloat(this.recuppererMontantEmprunt(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id))+parseFloat(this.formData1.variation_budget)
},
    
    dotationTresor(){
return parseFloat(this.recuppererMontantTresor(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id))+parseFloat(this.formData1.variation_budget)
},
dotationTotal(){
return parseFloat(this.recuppererMontantDotationFinal(this.formData.uniteadministrative_id,this.formData1.ligneeconomique_id))+parseFloat(this.formData1.variation_budget)
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

LibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
           return this.groupeActiviteBudget.filter(qtreel => qtreel[0].ua_id == id && qtreel[0].actived==1 && qtreel[0].exercicebudget_id==this.anneeAmort);

      
        }
      };
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
      if(this.formData.activite_id!=""){
return this.RecuppererLaDotation(this.formData.activite_id)
      }
      return 0
    },
    RecuppererLaDotation() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.activite_id == id &&  qtreel.actived==1 && qtreel.exercicebudget_id==this.anneeAmort);

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
    NomActivite() {
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

    doublonLigneBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.ligneeconomique_id
      }
      return 0
        }
      };
    },
    idBudgetEclater() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

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
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

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
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

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
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.emprunt
      }
      return 0
        }
      };
    },
    recuppererMontantReport() {
      return (id1,id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id1 && qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.report
      }
      return 0
        }
      };
    },
    recuppererMontantDotationNouvel() {
      return (id1,id) => {
        if ( id1 != null && id1 != "" && id != null && id != "" ) {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id1 && qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.dotation
      }
      return 0
        }
      };
    },
    recuppererMontantDotationFinal() {
      return (id1,id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id1 && qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.dotation
      }
      return 0
        }
      };
    },
    
    SommeCumul(){
return parseFloat(this.montantEmprunt(this.formData1.ligneeconomique_id))+parseFloat(this.montantTresor(this.formData1.ligneeconomique_id))+parseFloat(this.montantDon(this.formData1.ligneeconomique_id))
},
   SommeCumulAjouter(){
return (parseFloat(this.SommeCumul)+parseFloat(this.dotationTotal))
},

recuppererMontantEmprunt() {
      return (id1,id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id1 && qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.emprunt
      }
      return 0
        }
      };
    },
    recuppererMontantDon() {
      return (id1,id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id1 && qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.don
      }
      return 0
        }
      };
    },
    recuppererMontantTresor() {
      return (id1,id) => {
        if (id1 != null && id1 != "" && id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.uniteadministrative_id == id1 && qtreel.ligneeconomique_id == id && qtreel.annebudgetaire==this.anneeAmort);

      if (qtereel) {
        return qtereel.tresor
      }
      return 0
        }
      };
    },
    
        },

methods: {
   ...mapActions("uniteadministrative", [
      "ajouterBudgetEclate",
      "supprimerBudgetEclate",
      "modifierBudgetEclate",
      
    ]),
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
 AjouterLiquidation() {
   if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id ){
 var nouvelObjet = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          tresor:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          type_financement_id:this.formData1.type_financement_id,
          
            	source_financement_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           variation_budget:this.formData1.variation_budget,
           cumul_reservation:this.recupererCumulReservation
      };
      this.ajouterBudgetEclate(nouvelObjet);
      this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
type_financement_id:""
      }
   
   }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id){
var nouvelObjet1 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          don:this.dotationTotal,
          ligneeconomique_id:this.formData1.ligneeconomique_id,
          //type_financement_id:this.formData1.type_financement_id,
          type_financement_don_id:this.formData1.type_financement_id,
            	source_financement_don_id:this.formData.source_financement_id,
          activite_id:this.formData.activite_id,
           variation_budget:this.formData1.variation_budget,
           cumul_reservation:this.recupererCumulReservation
      };
      this.ajouterBudgetEclate(nouvelObjet1);
       
this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
type_financement_id:""
      }
     }   
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData1.ligneeconomique_id)!=this.formData1.ligneeconomique_id){
       var nouvelObjet2 = {
        ...this.formData,
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	emprunt:this.dotationTotal,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_id:this.formData1.type_financement_id,
            	source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
             variation_budget:this.formData1.variation_budget,
             cumul_reservation:this.recupererCumulReservation
      };
      this.ajouterBudgetEclate(nouvelObjet2);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
type_financement_id:""
      }
     }
     else if(this.formData1.type_financement_id==14 && this.doublonLigneBudgetaire(this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
       var nouvelObjet28 = {
        ...this.formData,
        id:this.idBudgetEclater(this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
            dotation:this.dotationTotal,
          	tresor:this.dotationTresor,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            type_financement_id:this.formData1.type_financement_id,
            
            	source_financement_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
            variation_budget:this.formData1.variation_budget,
            cumul_reservation:this.recupererCumulReservation
      };
      this.modifierBudgetEclate(nouvelObjet28);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
type_financement_id:"",
variation_budget:""
      }
     }
     else if(this.formData1.type_financement_id==15 && this.doublonLigneBudgetaire(this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
       var nouvelObjet27 = {
        ...this.formData,
         id:this.idBudgetEclater(this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        // dotation:this.SommeCumulAjouter,
        //   	emprunt:this.dotationTotal,
               dotation:this.dotationTotal,
          	emprunt:this.dotationEmprunt,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
            //type_financement_id:this.formData1.type_financement_id,
            type_financement_emprunt_id:this.formData1.type_financement_id,
            	source_financement_emprunt_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
            variation_budget:this.formData1.variation_budget,
            cumul_reservation:this.recupererCumulReservation
      };
      this.modifierBudgetEclate(nouvelObjet27);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
type_financement_id:"",
variation_budget:""
      }
     }
     else if(this.formData1.type_financement_id==13 && this.doublonLigneBudgetaire(this.formData1.ligneeconomique_id)==this.formData1.ligneeconomique_id){
       var nouvelObjet25 = {
        ...this.formData,
         id:this.idBudgetEclater(this.formData1.ligneeconomique_id),
        	annebudgetaire: this.anneeAmort,
        dotation:this.dotationTotal,
          	don:this.dotationDon,
            ligneeconomique_id:this.formData1.ligneeconomique_id,
           // type_financement_id:this.formData1.type_financement_id,
           type_financement_don_id:this.formData1.type_financement_id,
            	source_financement_don_id:this.formData.source_financement_id,
            activite_id:this.formData.activite_id,
            variation_budget:this.formData1.variation_budget,
            cumul_reservation:this.recupererCumulReservation
      };
      this.modifierBudgetEclate(nouvelObjet25);
       this.formData1 = {
ligneeconomique_id:"",
dotation_nouvelle:"",
report:"",
type_financement_id:"",
variation_budget:""
      }
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
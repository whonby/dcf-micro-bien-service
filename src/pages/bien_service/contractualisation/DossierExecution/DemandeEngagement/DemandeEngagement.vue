
<template>

<div >
     
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">Fiche de demnade d'engagement</a>
                      </li>
                       
                      <!-- <li>
                        <a data-toggle="tab" href="#tab2">Affectation</a>
                      </li> -->
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                <table class="table table-bordered table-striped">
                    <tr>
                        <td>
                            <div class="control-group">
                                                    <label class="control-label">Type de procédure</label>
                                                    <div class="controls">
                                                        <select v-model="formData.typeprocedure_id" class="span5" style="border:1px solid #000">
                                                            <option></option>
                                                            <option value="0">Engagement par Bon de commande</option>
                                                            <option value="1">Engagement Direct</option>

                                                        </select>
                                                    </div>
                                                </div>
                        </td>
                        <td>
                              <div class="control-group">
                                                    
                                                    <div class="controls" >
                                                        Budget Général     <input type="checkbox" id="2" value="Budget Général" v-model="formData.mode_id"/><label class="control-label"></label>
                                                
                                                    </div>
                                                </div>
                         </td>
                         <td>
                             <div class="control-group">
                                                    <label class="control-label"></label>
                                                    <div class="controls">
                                                        Compte spécial du trésor    <input type="checkbox" id="1" value="Compte spécial du trésor" v-model="formData.mode_id1"/>
                                                    </div>
                                                </div>
                         </td>
                    </tr>
                </table>
                 <table class="table table-bordered table-striped">
                     <tr>
                         
                         <!-- <td>
                             <div class="control-group">
                                                    
                                                    <div class="controls">
                                                      <label class="control-label">Compte spécial du trésor</label>  <input type="radio" value="Compte spécial du trésor" v-model="formData.mode_id"/>
                                                    </div>
                                                </div>
                         </td> -->
                          
                     </tr>
                 </table>
                  <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATION">INFORMATION SUR UA</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#ENGAGEMENT">TYPE D'ENGAGEMENT DIRECT</a>
                      </li>
                        <li>
                        <a data-toggle="tab" href="#PAIEMENT">MODE DE PAIEMENT</a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#FOURNISSEUR">REFERENCE DU FOURNISSEUR OU BENEFICIAIRE</a>
                      </li>
                     <li>
                        <a data-toggle="tab" href="#IMPUTATION">IMPUTATION</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="INFORMATION" class="tab-pane active">
 <table class="table table-bordered table-striped">
                     <tr>
                       <td>
              <div class="control-group">
                <label class="control-label">Numéro Démande</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Exercice</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
                     </tr>
                      <tr>
                       <td>
              <div class="control-group">
                <label class="control-label">Ministère/Institution</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Programme/Dotation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
                     </tr>
                     <tr>
                       <td>
              <div class="control-group">
                <label class="control-label">Action</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
                     </tr>
                     <tr>
                       <td colspan="2">
              <div class="control-group">
                <label class="control-label">Unité administrative</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span12"
                    
                  />
                </div>
              </div>
              
            </td>
            
                     </tr>
                     <tr>
                       <td>
                <div class="control-group">
                  <label class="control-label">Grande nature de dépense</label>
                  <div class="controls">
                    <select v-model="formData.gdenature_id" class="span" style="border:1px solid #000">
                      <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
              <div class="control-group">
                <label class="control-label">Type de procédure</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            
                     </tr>
                 </table>
          </div>
                            <div id="ENGAGEMENT" class="tab-pane ">
  <table class="table table-bordered table-striped">
                    
                    
                     <tr>
                       <td>
                <div class="control-group">
                  <label class="control-label">Type d'engagement</label>
                  <div class="controls">
                    <select v-model="formData.gdenature_id" class="span" style="border:1px solid #000">
                      <option value="Marche">Marche</option>
                      <option value="Régie d'avances-reservation des crédit">Régie d'avances-reservation des crédit</option>
                      <option value="Régularisation d'ordre de paiement">Régularisation d'ordre de paiement(Op)</option>
                      <option value="Régularisation avances de trésorerie">Régularisation avances de trésorerie(AT)</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
              <div class="control-group">
                <label class="control-label">Réf.Engagement juridique</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            
                     </tr>
                     <tr>
                    
              <td>
              <div class="control-group">
                <label class="control-label">N°OP/AT</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td>  
              <div class="control-group">
                <label class="control-label">Autres Observation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
                     </tr>
                 </table>
        </div>
                      <div id="PAIEMENT" class="tab-pane ">

                         <table class="table table-bordered table-striped">
                           
                         </table>
                      </div>
                       <div id="FOURNISSEUR" class="tab-pane ">
                         11111111111111111
                      </div>
                       <div id="IMPUTATION" class="tab-pane ">
                         22222222222222
                      </div>

      </div>
       </div>
      
              </table>
 
  </div>
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterTitreLocal"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListePersonnel()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
         
      <notifications/>
    </div>

</template>
<script>

    import {mapGetters} from 'vuex'
    //import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth"
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                formData : {
                    
                },

                editTitre: {
                   
                }

            };
        },

        created() {
           
        },
        computed: {
        
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

// methode pour maper notre guetter
            ...mapGetters('personnelUA', ["dossierPersonnels","situation_matrimonial",'acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","classificationGradeFonction",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"]),
            ...mapGetters("uniteadministrative", ["fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            ...mapGetters("parametreGenerauxAdministratif", ["groupeService","getterplanOrganisationUa","exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", [
      "services",
      "normeImmo"
      
      
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "structures_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
 ...mapGetters("bienService", ["getActeEffetFinancierPersonnaliserContrat","selectionner_candidats","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 


        }
    };
</script>


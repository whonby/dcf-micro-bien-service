
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
                                                        <select v-model="formData.typeprocedure_id" class="span5" style="border:2px solid #000">
                                                            <option></option>
                                                            <option value="0">Engagement par Bon de commande</option>
                                                            <option value="1">Engagement Direct</option>

                                                        </select>
                                                    </div>
                                                </div>
                        </td>
                    </tr>
                </table>
                 <table class="table table-bordered table-striped">
                     <tr>
                         <td>
                              <div class="control-group">
                                                    
                                                    <div class="controls" >{{formData.mode_id}}
                                                       <label class="control-label">Budget Général</label> : <input type="checkbox" id="2" value="Budget Général" v-model="formData.mode_id"/>
                                                
                                                    </div>
                                                </div>
                         </td>
                         <td>
                             <div class="control-group">
                                                    
                                                    <div class="controls">
                                                      <label class="control-label">Compte spécial du trésor</label>  <input type="radio" value="Compte spécial du trésor" v-model="formData.mode_id"/>
                                                    </div>
                                                </div>
                         </td>
                          <td>
                             <div class="control-group">
                                                    <label class="control-label">Compte spécial du trésor</label>
                                                    <div class="controls">
                                                        <input type="radio" value="Compte spécial du trésor" v-model="formData.mode_id"/>
                                                    </div>
                                                </div>
                         </td>
                     </tr>
                 </table>
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



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
              <h5>Ajouter Lettre d'Avance</h5>
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
                  <table class="table table-bordered table-striped" style="border:1px solid #000">
                      <tr>
                         <td>
              <div class="control-group">
                <label class="control-label">Numéro de la lettre d'avance</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                     
                  />
                </div>
              </div>
              
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Date de la lettre d'avance</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
                          <td colspan="2">
              <div class="control-group">
                <label class="control-label">A Remettre</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span" 
                    
                  />
                </div>
              </div>
              
            </td>
             
          
                      </tr>
                  </table>
        <table class="table table-bordered table-striped" style="border:1px solid #000">
            <tr>
                <td>
                    <div class="control-group">
                <label class="control-label">Objet de la lettre d'avance</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                    
                    class="span12"
                    
                  />
                </div>
              </div>
                </td>
            </tr>
        </table>
                 <table class="table table-bordered table-striped" style="border:1px solid #000">
                    <tr>
                        <td>
                                <label>Initiateur de la dépense <code style="color:red;font-size:16px">*</code>
                                </label>
                                <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeDesUa"
                                                   v-model="formData.ua_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                                 
                            </td>
                        <!-- <td>
              <div class="control-group">
                <label class="control-label">Initiateur de la dépense</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                     
                  />
                </div>
              </div>
              
            </td> -->
            <td>
              <div class="control-group">
                <label class="control-label">Service bénéficiaire</label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeDesUa"
                                                   v-model="formData.ua_id"
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
                  <label class="control-label">Type de dépense <code style="color:red;font-size:16px">*</code></label>
                  <div class="controls">
                       <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="grandes_natures"
                                                   v-model="formData.grd_nature_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                   
                     <!-- <code style="color:red;font-size:12px" v-if="formData.grd_nature_id==''">Veuillez renseigner ce champ</code> -->
                  </div>
                </div>
              </td>
                    </tr>
                    <tr>
                        <td>
              <div class="control-group">
                <label class="control-label">Nature de la dépense</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                     
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Mode de paiement</label>
                <div class="controls">
                     <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="modepaiements"
                                                   v-model="formData.mode_paiement_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                  <!-- <select v-model="formData.mode_paiement_id" class="span" style="border:1px solid #000">
                    
                     <option
                        v-for="typeFact in modepaiements"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select> -->
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Structure chargée de la régularisation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                     
                  />
                </div>
              </div>
              
            </td>
                    </tr>
                </table>
                <table class="table table-bordered table-striped" style="border:1px solid #000">
                    <tr>
                        <td>
              <div class="control-group">
                <label class="control-label">Activite</label>
                <div class="controls">
                  

                                <model-list-select style="border:1px solid #000"
                                                    class="wide"
                                                   :list="plans_activites"
                                                   v-model="formData.activite_id"
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
                <label class="control-label">Ligne économique</label>
                <div class="controls">
                    <select v-model="formData.ligne_economique_id" class="span" style="border:1px solid #000">
                      <option
                        v-for="ligneeco in Activite(formData.activite_id)"
                        :key="ligneeco.id"
                        :value="ligneeco.economique_id"
                      >{{libelleLigneEconomique(ligneeco.economique_id)}}</option>
                    </select>
                  
                </div>
              </div>
              
            </td>
           
                    </tr>
                   <tr>
                        <td>
              <div class="control-group">
                <label class="control-label">Imputation budgétaire</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  :value="imputation(formData.ligne_economique_id)"
                    class="span"
                     readonly
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Montant</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                     
                  />
                </div>
              </div>
              
            </td>
                   </tr>
                </table> 
                 <table class="table table-bordered table-striped" style="border:1px solid #000">
                     <tr>
 <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">Le Ministre de l'Economie et des Finances</a>
                      </li>
                    </ul>
                  </div>
                  <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Fonction</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                  
                  />
                </div>
              </div>
              
                     </td>
                      <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">Le Ministre du Budget et du Portefeuille de l'Etat</a>
                      </li>
                    </ul>
                  </div>
                  <div class="control-group">
                <label class="control-label">Date</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
               <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Fonction</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                  
                  />
                </div>
              </div>
              
                     </td>
                     </tr>
                 </table>
                    </div>
                  </div>
<div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterLiquidation"
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
                 
                },
                
                editpiece:{},
                formData5:{
                  numeroDemande:""
                },
 formMandat:{
                 
                },
                formData2:{
                 
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
             ...mapGetters("uniteadministrative", ["budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["typeFactures","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
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
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
      Activite() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.activite_id == id && qtreel.actived==1);

      
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
        },

methods: {
    ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "ajouterDemandeEngagement",
      "ajouterDossierMandat",
      "modifierDossierLiquidation",
      "supprimerDossierLiquidation",
      "modifierDemandeEngagement"
     
    ]),
      ...mapActions('personnelUA', ["ajouterFichierJointDmd"]),


pagePrecedent(){
                window.history.back()
            },


    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            
       
}


    };
</script>


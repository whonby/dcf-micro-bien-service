
<template>

<div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter Liquidation</h5>
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
                <label class="control-label">Numéro de Mandat</label>
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
                <label class="control-label">Date Mandat</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                   
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Imputation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
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
                <label class="control-label">Ministère/Institution</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
           
                 <td colspan="2">
              <div class="control-group">
                <label class="control-label">Programme/Dotation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
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
                <label class="control-label">Action</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
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
                <label class="control-label">Unite administrative</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Nature de depense</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Unité de cout</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
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
                <label class="control-label">Réference engagement</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                     readonly
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Montant engagé</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                    <td>
              <div class="control-group">
                <label class="control-label">Numéro Demande</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                     readonly
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Type de Procedure</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                      </tr>
                      
                  </table>  
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">CREANCIER</a>
                      </li>
                    </ul>
                  </div>
                 <table class="table table-bordered table-striped" style="border:1px solid #000">
             
                    <tr>
                         <td>
              <div class="control-group">
                <label class="control-label">Numéro cc</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
               <td>
              <div class="control-group">
                <label class="control-label">Nom</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Adresse</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                <td colspan="">
              <div class="control-group">
                <label class="control-label">Montant Liquidé</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
           
            </td>
                    </tr>
                    <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">ODJET DE LA DEPENSE</a>
                      </li>
                    </ul>
                  </div>
                    <tr>
                    
             
            <td colspan="4">
              <div class="control-group">
                <label class="control-label">Objet de la depense</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                    </tr>
                    <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">REGLEMENT</a>
                      </li>
                    </ul>
                  </div>
                    <tr>
                        
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Mode de réglement</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Domiciliation bancaire</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Numéro de compte</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                    </tr>
                    <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">RENSEIGNEMENTS ANNEXES</a>
                      </li>
                    </ul>
                  </div>
                   <tr>
                       <td colspan="4">
                           <label class="control-label">Pièce Justificative</label>
 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>Numero Ordre</th>
                    <th>Nature de la pièce</th>
                   <th>Reference</th>
                   <th>Date de la pièce</th>
                   <th>Montant</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr class="odd gradeX" v-for="(type) in listePieceJustificative(formData.numero_demande)" :key="type.id">
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="width:30%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.libelle || 'Non renseigné'}}</td>
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.reference || 'Non renseigné'}}</td>
                    <td style="width:15%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formaterDate(type.date_piece) || 'Non renseigné'}}</td>

                    <td  style="width:15%">
                      <button class="btn btn-danger" @click="supprimerPieceJustificative(type.id)">
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
                    </td>
                  </tr> -->
                </tbody>
              </table>
                       </td>
                      
                   </tr>
                   <!-- <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">SITUATION DE CREDITS</a>
                      </li>
                    </ul>
                  </div>
                   <tr>
                       <td colspan="">
              <div class="control-group">
                <label class="control-label">Crédit autorisé</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Cumul engagement</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
             <td colspan="2">
              <div class="control-group">
                <label class="control-label">Cumul des liquidations</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                   </tr> -->
                   <tr>
                     <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">EMETTEUR</a>
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
                    readonly
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
                    readonly
                  />
                </div>
              </div>
              
                     </td>
                     <td colspan="2">
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">Visa Controleur Financier</a>
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
                    readonly
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Visa</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  />
                </div>
              </div>
                     </td>
                     <td>
                       <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">Signature Ordonnateur</a>
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
                    readonly
                  />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label">Signature</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
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
                          @click.prevent="ajouterFonctionGroupe"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListePersonnel()"
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
    // import {  ModelListSelect } from 'vue-search-select'
    import moment from 'moment';
   // import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
     //ModelListSelect,
     
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
                  Auteur_id:"2"
                },
 formData1:{
                 
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

...mapGetters("bienService", ["gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      
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

        },

methods: {
    ...mapActions("bienService", [
      "ajouterPieceJustificative",
      "modifierPieceJustificative",
      "supprimerPieceJustificative",
      "ajouterDemandeEngagement"
     
    ]),
      ...mapActions('personnelUA', ["ajouterFichierJointDmd"]),

    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            afficherModalListePersonnel(){
                this.$router.push({ name: 'ListeUaExecutionBudgetaire' })
            },
}


    };
</script>


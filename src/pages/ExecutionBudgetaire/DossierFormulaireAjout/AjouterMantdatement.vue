
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
              <h5>Ajouter Mandat</h5>
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
                <label class="control-label">Numéro Demande</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.numeroDemande"
                   v-on:keyup="rechercheMembreCojo()"
                    class="span"
                     
                  />
                </div>
              </div>
              
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Numéro Liquidation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="numeroLiquidation(formData5.numero_liquidation)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                          <td>
              <div class="control-group">
                <label class="control-label">Numéro de Mandat</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formMandat.numero_mandat"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">Date  Mandat</label>
                <div class="controls">
                  <input
                    type="date"
                    style="border:1px solid #000"
                    v-model="formMandat.date_mandat"
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
                <label class="control-label">Imputation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="imputationBudgetaire(formData5.ligne_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
                         <td>
              <div class="control-group">
                <label class="control-label">Ministère/Institution</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="nomSection(formData5.section_id)"
                    class="span"
                    readonly
                  />
                </div>
              </div>
              
            </td>
           
                 <td colspan="">
              <div class="control-group">
                <label class="control-label">Programme/Dotation</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   :value="libelle_Programme(formData5.prog_id)"
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
                   :value="libelle_Action(formData5.action_id)"
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
                   :value="libelle_Action(formData5.activite_id)"
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
                   :value="libelleUniteAdministrative(formData5.ua_id)"
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
                  :value="libelleGrandNature(formData5.nature_id)"
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
                  v-model="formData5.odjetDepense"
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
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.montant_engage"
                    class="span"
                    readonly
                  /> -->
                  <money v-model="formData5.montant_engage" readOnly style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
                   
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Type de Procedure</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.typeProcedure_id"
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
                   v-model="formData5.Numero_cc"
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
                   v-model="formData5.nomEntreprise"
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
                    v-model="formData5.adresse"
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
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                   v-model="formData5.montant_engage"
                    class="span"
                    readonly
                  /> -->
                   <money v-model="formData5.montant_engage" readOnly  style="text-align:left;color:red"  class="span"></money>
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
                   v-model="formData5.odjetDepense"
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
                  :value="libelleModePaiement(formData5.mode_paiement_id)"
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
                  v-model="formData5.Reference_bancaires"
                    class="span"
                   
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
                           



<label class="control-label">Pièce Justificative (Definitive)</label>

                          
                    
 <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                     <th style="font-size:14px;font-weight:bold">Numero Ordre</th>
                    <th style="font-size:14px;font-weight:bold">Nature de la pièce</th>
                   <th style="font-size:14px;font-weight:bold">Reference</th>
                   <th style="font-size:14px;font-weight:bold">Date de la pièce</th>
                    
                  </tr>
                </thead>
               <tbody>
                  <tr class="odd gradeX" v-for="(type) in listePieceJustificativedefinitive(formData5.numeroDemande)" :key="type.id">
                    <td style="width:20%,text-align:center"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.numero_ordre || 'Non renseigné'}}</td>
                    <td style="width:30%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{listePieceJustifica(type.libelle) || 'Non renseigné'}}</td>
                    <td style="width:20%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{type.reference || 'Non renseigné'}}</td>
                    <td style="width:15%"
                      @dblclick="afficherModalModifierTypeTexte(type.id)"
                    >{{formaterDate(type.date_piece) || 'Non renseigné'}}</td>

                    
                  </tr>
                </tbody>
              </table>
                       </td>
                      
                   </tr>
                   <div class="widget-title">
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
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  /> -->
                   <money :value="CreditAutorise(formData5.ligne_id)" readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
             <td colspan="">
              <div class="control-group">
                <label class="control-label">Cumul engagement</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                  calculCumul
                    class="span"
                    readonly
                  /> -->
                   <money :value="CumulDemande(this.formData5.ligne_id)" readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
             <td colspan="2">
              <div class="control-group">
                <label class="control-label">Cumul des liquidations</label>
                <div class="controls">
                  <!-- <input
                    type="text"
                    style="border:1px solid #000"
                  
                    class="span"
                    readonly
                  /> -->
                  <money :value="formData5.montant_engage" readOnly  style="text-align:left;color:red"  class="span"></money>
                </div>
              </div>
              
            </td>
                   </tr>
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
                          @click.prevent="AjouterLiquidation"
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
      <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter pièces justificatives</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
          
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Numéro ordre</label>
            <div class="controls">
              <input
                type="text"
               
                class="span5"
                placeholder="Saisir le libellé"
                readonly
              />
            </div>
          </div>
            </td>
          </tr>
           <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Nature de la pièce</label>
            <div class="controls">
              <input
                type="text"
                
                class="span5"
                placeholder="Saisir le libellé"
              />
            </div>
          </div>
            </td>
          </tr>
           <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Reference de la pièce</label>
            <div class="controls">
              <input
                type="text"
               
                class="span5"
                placeholder="Saisir la reference"
              />
            </div>
          </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
            <label class="control-label">Date de la pièce</label>
            <div class="controls">
              <input
                type="date"
                
                class="span5"
                
              />
            </div>
          </div>
            </td>
          
          </tr>
          <tr>
              <td colspan="">
              <div class="control-group">
                <label class="control-label">Pièces justificatives </label>
                <div class="controls">
                  <input
                    type="file"
                    style="border:1px solid #000"
                  
                    class="span"
                    
                  />
                  <!-- <code v-if="info_pdf">Le fichier doit etre un pdf</code> -->
                </div>
              </div>
              
            </td>
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
         
          class="btn btn-primary"
          href="#"
          
          @click.prevent="AjoutePieceJustific"
        >Valider</a>
        <a
                          @click.prevent="pagePrecedent()"
                          class="btn"
                          href="#"
                        >Fermer</a>
      </div>
    </div>
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


      listePieceJustifica() {
      return (id) => {
        if (id != null && id != "" ) {
           const qtereel = this.typeFactures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
 listePieceJustificativedefinitive() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_dmd_combine == id && qtreel.etat_piece=="definitive");

      
        }
      };
    },

numeroLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDossierLiquidation.find(qtreel => qtreel.dmd_engagement_id == id);

      if (qtereel) {
        return qtereel.numero_liquidation;
      }
      return 0
        }
      };
    },



 calculCumul() { 
      const val =  parseFloat(this.CumulDemande(this.formData5.ligne_id)) ;
      return parseFloat(val).toFixed(0);
      
    },
CumulDemande: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.gettersDemandeEngagement.filter(normeEquipe => normeEquipe.ligne_economique_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },


     CreditAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id && qtreel.actived==1);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return ""
        }
      };
    },
      listePieceJustificative() {
      return id => {
        if (id != null && id != "") {
           return this.gettersnomPieceJustificative.filter(qtreel => qtreel.numero_dmd_combine == id && qtreel.etat_piece=="definitive");

      
        }
      };
    },
      libelleModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     
     
     
     codeUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services_gestionnaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
libelleGrandNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
libelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return this.codeUa(qtereel.servicegest_id).concat("  ",qtereel.libelle);
      }
      return 0
        }
      };
    },
    imputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.codebudget;
      }
      return 0
        }
      };
    },
    nomSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat("  ",qtereel.nom_section);
      }
      return 0
        }
      };
    },
    libelle_Programme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("  ",qtereel.libelle);
      }
      return 0
        }
      };
    },
    libelle_Action() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat("  ",qtereel.libelle);
      }
      return 0
        }
      };
    },

recupereIdDemandeEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.numero_dmd_combine == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
    montantEngage() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.numero_dmd_combine == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return 0
        }
      };
    },
    recupereNumeroDemande() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersDemandeEngagement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_dmd_combine;
      }
      return 0
        }
      };
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
      "supprimerDossierLiquidation"
     
    ]),
      ...mapActions('personnelUA', ["ajouterFichierJointDmd"]),


pagePrecedent(){
                window.history.back()
            },
rechercheMembreCojo(){
      // console.log(this.formData5.numeroDemande)

      let objetMandater=this.gettersDossierLiquidation.filter(item=>this.recupereNumeroDemande(item.dmd_engagement_id)==this.formData5.numeroDemande)
      // console.log(objetMandater)
      if(objetMandater!=undefined){
        if (objetMandater.length==1){
          let acteur= this.gettersDemandeEngagement.find(item=>item.numero_dmd_combine==this.formData5.numeroDemande)
          this.formData5.ligne_id=acteur.ligne_economique_id,
          this.formData5.section_id=acteur.section_id,
        this.formData5.prog_id=acteur.programme_id,
        this.formData5.action_id=acteur.action_id,
        this.formData5.activite_id=acteur.activite_id,
        this.formData5.ua_id=acteur.ua_id,
        this.formData5.nature_id=acteur.grd_nature_id,
        this.formData5.odjetDepense=acteur.objet_depense,
        this.formData5.montant_engage=acteur.total_general,
        this.formData5.typeProcedure_id=acteur.type_procedure_id,

         this.formData5.Numero_cc=acteur.numero_cc_autre,
         this.formData5.nomEntreprise=acteur.nom_autre,
        this.formData5.adresse=acteur.adresse,
        this.formData5.mode_paiement_id=acteur.mode_paiement_id,
        this.formData5.adresse=acteur.Reference_bancaires,
        this.formData5.numero_liquidation=acteur.id
        //   this.message_mandater=" "

        }
        else{
          // this.message_mandater="Ce Numero cc  n'existe pas dans notre base de donnée "
          this.formData5.ligne_id=""
        }
      }
      if(this.formData5.numeroDemande==""){
       this.formData5.ligne_id="",
          this.formData5.section_id="",
        this.formData5.prog_id="",
        this.formData5.action_id="",
        this.formData5.activite_id="",
        this.formData5.ua_id="",
        this.formData5.nature_id="",
        this.formData5.odjetDepense="",
        this.formData5.montant_engage="",
        this.formData5.typeProcedure_id="",

         this.formData5.Numero_cc="",
         this.formData5.nomEntreprise="",
        this.formData5.adresse="",
        this.formData5.mode_paiement_id="",
        this.formData5.adresse="",
        this.formData5.numero_liquidation=""
        this.message_mandater=" "
      }
    },
AjouterLiquidation() {
         var nouvelObjet = {
        ...this.formMandat,
        demande_engagement_id: this.recupereIdDemandeEngagement(this.formData5.numeroDemande),
        montant_engage:this.montantEngage(this.formData5.numeroDemande)
        
      };
      this.ajouterDossierMandat(nouvelObjet);
this.$("#modificationModal").modal('hide');
      this.formData5 = {
        numeroDemande: "",
        
      };
    },


    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            afficherModalListePersonnel(){
                this.$router.push({ name: 'ListeUaExecutionBudgetaire' })
            },
            afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
}


    };
</script>


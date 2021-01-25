prix_propose_ttc
editMandat
afficherMontantFacture
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
              <h5>Modifier Mandat</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap tailleMandat">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab10009">INFORMATION</a>
                      </li>
                    
                      
                      <li>
                        <a data-toggle="tab" href="#tab1569">INFO FOURNISSEUR </a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab157896">IMPUTATION BUDGETAIRE</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content tabtailleFenetre" >
                     <div id="tab157896" class="tab-pane">
 <div class="modal-body">
        <table class="table table-bordered table-striped">
           
                      <tr>
                       <td>
                         <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="number" class="span" :value="commparerMontantGleEtMontantFacture" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editMandat.montant_tresor" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editMandat.montant_don" />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="editMandat.montant_emprunt" />
                            </div>
                          </div>
                        </td>
                      </tr>
                        <tr>
                        
                        
                       
                        
                        <td>
                           <div class="control-group">
                            <label class="control-label">Ligne Budgétaire</label>
                            <div class="controls">
                              
                               <div class="controls">
                              <input type="text" class="span" :value="afficherLibelleLigneBudgetaire(afficherIdLigneBudgetaire(afficherIdMarche(editMandat.facture_id)))"  readonly/>
                            </div>
                            </div>
                          </div>
                        </td>
                        <td >
                          <div class="control-group">
                            <label class="control-label">Imputation budgétaire</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherInputationBudgetaire(afficherIdMarche(editMandat.facture_id))" readonly/>
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Facture</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherNumerofacture(editMandat.facture_id)" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherMontantFacture(editMandat.facture_id)" readonly/>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Dotation Initiale(crédits autorisés)</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherMontantBudgetaireInitial(afficherInputationBudgetaire(afficherIdMarche(editMandat.facture_id)))" readonly/>
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Cumul engagements antérieurs </label>
                            <div class="controls">
                              <input type="text" class="span" :value="sommeEgagementLigne(editMandat.marche_id)" readonly/>
                            </div>
                          </div>
                        </td>
                           <td>
                          <div class="control-group">
                            <label class="control-label">Engagement actuel</label>
                            <div class="controls">
                              <input type="text" class="span" :value="montantGeneralMandatModifier" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                                                    <div class="control-group">
                            <label class="control-label">Cumul des demandes(y compris celle-ci) </label>
                            <div class="controls">
                              <input type="text" class="span" :value="montantCumulerMandatEngagement" readonly/>
                              <input type="hidden" class="span"  readonly/>
                              
                            </div>
                          </div>
                        </td>
                        
                        
                      
                      </tr>
                        <tr>
                           <td >
                          <div class="control-group">
                            <label class="control-label">Dotation disponible</label>
                            <div class="controls">
                              <input type="text" class="span" :value="dotationDisponibleAnterieure"  readonly/>
                            </div> 
                          </div>
                          
                        <!-- </td>
                                                 <td>
                          <div class="control-group">
                            <label class="control-label">Dotation disponible anterieure</label>
                            <div class="controls">
                              <input type="text" class="span"  readonly/>
                            </div>
                          </div>
                        </td> -->
                           <td>
                          <div class="control-group">
                            <label class="control-label">Montant marché</label>
                            <div class="controls">
                              <input type="text" class="span" :value="montantMarcheAvecAvenant" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Disponible marché</label>
                            <div class="controls">
                              <input type="text" class="span" :value="restePayeMarche" readonly/>
                            </div>
                          </div>
                        </td>

                         <!-- <td>
                          <div class="control-group">
                            <label class="control-label">Disponible</label>
                            <div class="controls">
                              <input type="text" class="span4" :value="montantDisponibleBudget" readonly/>
                            </div> 
                          </div>
                        </td> -->
                       
                      </tr>
        </table>
 </div>
                    </div>
                    <!--ongle identification-->
                    <div id="tab10009" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
    <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgétaire</label>
                            
                               
                             <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                              :value="anneeAmort"
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
                                class="span15"
                               readonly
                            :value="afficherLibelleSection(afficherIdSection(afficherIdUa(afficherIdMarche(editMandat.facture_id))))"
                              
                              />
                            </div>
                          </div>
                          
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Programme/dotation</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                readonly
                             :value="afficherProgDot"
                              
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Nature dépense</label>
                             <div class="controls">
                                 <input
                                type="text"
                                class="span"
                                readonly
                             :value="CodeGdeNatureDep(afficherIdGrandeNature(afficherIdMarche(editMandat.facture_id)))"
                             
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
                                class="span"
                                readonly
                          :value="afficherActi"
                              
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
                                class="span"
                                readonly

                             :value="afficheractivite(afficheIdActivite(editMandat.marche_id))"
                              
                              />
                            </div>
                          </div>
                          </td>
                          <td>
                             <div class="control-group">
                            <label class="control-label">Unité administrative</label>
                            <div class="controls">
                               <input
                                type="text"
                                class="span"
                                readonly
                            :value="afficheLibelleUa(afficheUa_id(afficherIdMarche(editMandat.facture_id)))"
                              
                              />
                              
                            </div>
                          </div>
                          
                        </td>
                          <td>
                           <div class="control-group">
                            <label class="control-label">Type de Procédure</label>
                            
                               <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                             :value="recupererTypeProcedure"
                              
                              />
                        
                            </div>
                          </div>
                        </td>
                        </tr>
                         
                        <tr>
             
                        <td>
                          <div class="control-group">
                            <label class="control-label">Type d'engagement direct</label>
                            <div class="controls">
                              <select v-model="editMandat.type_engagement_id"  class="span">
                                  <option value="0">Marché</option>
                                    <option value="1">Régie d'avances - réservation des crédits</option>
                                       <option value="2">Régularisation d'ordre de paiement (OP)</option>
                                    <option value="3">Régularisation avances de trésorerie (AT)</option>
                                     <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                       <td>
                            <div class="control-group">
                              <label class="control-label">Réf. Engagement juridique</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="editMandat.ref_juridique"
                                />
                              </div>
                            </div>
                          </td>
                           <td>
                            <div class="control-group">
                              <label class="control-label">Numéro OP/AT</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="editMandat.numero_op"
                                />
                              </div>
                            </div>
                          </td>
                  <td >
                         <div class="control-group">
                            <label class="control-label">Autre type engagement</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editMandat.autre_engagement" />
                            </div>
                          </div>
                        </td>
                      </tr>

                    
                 
                  <tr>
                          <td>
                         <div class="control-group">
                            <label class="control-label">Numéro mandat</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editMandat.numero_mandat"/>
                            </div>
                          </div>
                        </td>
                        
                        <td>
                         <div class="control-group">
                            <label class="control-label">Numéro Bordereau</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="editMandat.numero_bordereau"/>
                            </div>
                          </div>
                        </td>
                 
                           <td>
                         <div class="control-group">
                            <label class="control-label">Date de réception dossier</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="editMandat.date_reception_cf"/>
                            </div>
                          </div>
                        </td>
                         
                      </tr>
                    
                     
            </table>
          </div>
          
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab1569" class="tab-pane">
                      
  <div class="modal-body">
        <table class="table table-bordered table-striped">
                 <tr>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Mode de paiement</label>
                            <div class="controls">
                              
                               <select v-model="editMandat.mod_paiement_engage" class="span" >
                    
                     <option
                        v-for="typeFact in modepaiements"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                            </div>
                          </div>
                        </td>
                         
                       <td>
                         <div class="control-group">
                            <label class="control-label">N° compte contribuable</label>
                            <div class="controls">
                             <div class="controls">
                              <input type="text" class="span" :value="afficherNumeroCCEntreprise(afficherIdEntreprise(editMandat.facture_id))" readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherNomEntreprise(afficherIdEntreprise(editMandat.facture_id))"  readonly/>
                               
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Adresse</label>
                            <div class="controls">
                              <input
                                type="text"
                                class="span"
                                placeholder="Saisir adresse_entreprise"
                                :value="afficherAdresseEntreprise(afficherIdEntreprise(editMandat.facture_id))"
                                readonly
                              />
                            </div>
                          </div>
                        </td>
                       
                       
                      </tr>
                     
                      <tr>
                        
                       <input
                    type="hidden"
                  
                    
                    class="span"
                    
                  />
                      <input
                    type="hidden"
                  
                    
                    class="span"
                    
                  />
                        
                          
                        
                       
                        
                       
                       
                      </tr>
                      <tr>
                         
                         
                      
                        
                       
                       
                      </tr>
                      <tr>
                            
                        <td colspan="">
                            <div class="control-group">
                              <label class="control-label">Banque</label>
                              <div class="controls">
                               <!-- <select v-model="editMandat.compte_id" class="span" >
                                <option
                                  v-for="affiche in afficheLibelleBanque(afficheIdBanque(afficherIdEntreprise(editMandat.facture_id)))" :key="affiche.id"
                                  :value="affiche.id"
                                >{{affiche.libelle}}</option>
                              </select> -->
                               <input
                                  type="text"
                                  :value="afficheLibelleBanque(afficheIdBanque(afficherIdEntreprise(editMandat.facture_id)))"
                                  class="span"
                                 readonly
                                />
                              </div>
                            </div>
                          </td>
                         <td colspan="">
                            <div class="control-group">
                              <label class="control-label">Numéro compte</label>
                              <div class="controls">
                               <!-- <select v-model="editMandat.compte_id" class="span" >
                                <option
                                  v-for="affiche in afficheCompteEntreprise(afficherIdEntreprise(editMandat.facture_id))" :key="affiche.id"
                                  :value="affiche.id"
                                >{{affiche.rib}}</option>
                              </select> -->
                               <input
                                  type="text"
                                  :value="afficheNumeroCompte(afficheIdCompte(afficherIdEntreprise(editMandat.facture_id)))"
                                  class="span"
                                 readonly
                                />
                              </div>
                            </div>
                          </td>
                         <td>
                            <div class="control-group">
                              <label class="control-label">Pièce justificative</label>
                              <div class="controls">
                                <input
                                  type="file"
                                  class="span"
                                 
                                />
                              </div>
                            </div>
                          </td>
                             <td>
                             <div class="control-group">
                            <label class="control-label">Bailleur</label>
                            
                             <select v-model="editMandat.bailler_id" class="span">
                                <option
                                  v-for="fam in sources_financements"
                                  :key="fam.id"
                                  :value="fam.id"
                                >{{fam.libelle}}</option>
                              </select>
                          </div>
                        </td> 
                      </tr>
                      <tr>
                        <td colspan="4">
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherObjetMarche(afficherIdMarche(editMandat.facture_id))" readonly/>
                              
                            </div>
                          </div>
                        </td>
                      </tr>
                     
        </table>
  </div>
                    </div>
                     <!-- <div id="tab3" class="tab-pane">
                      

                    </div> -->
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane">
                    
                      
                    </div> -->
                  </div>
                  
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterMandatFactureDefinitive" v-show="this.commparerMontantGleEtMontantFacture <= this.afficherMontantFacture(this.editMandat.facture_id)"
                        >Valider</a>
                         <a  @click.prevent="afficherModalListeExecution" class="btn">Fermer</a>
                        
                      </div>
                    </div>
                  </div>
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

    import {mapGetters, mapActions} from 'vuex'
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
                editMandat : {
                    montant_tresor: 0,
                    montant_emprunt: 0,
                    montant_don: 0,
                    decompte:0,
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },
 props:["macheid"],
       created() {
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.getFacturePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
         ),
         
   this.editMandat=this.mandats.find(item=>item.id==this.$route.params.id)
  
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {
// methode pour maper notre guetter
          ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques","type_marches"]),

           ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle",
      "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation","decomptefactures"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

 afficherMontantFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ttc;
      }
      return 0
        }
      };
    },
  
    afficherNumerofacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_facture;
      }
      return ""
        }
      };
    },
afficheDecompte() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id);
      
        }
      };
    },


 NombreDecompte() { 
      const val = this.afficheDecompte(this.editMandat.marche_id).length + 1;
      return parseFloat(val).toFixed(0);
      
    },






afficheMarcheType(){
if(this.afficheIdTypeMarche(this.editMandat.marche_id) == 5){
return 1
}
else{
  return 2
}
},


afficheIdTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
    
afficheLibelleTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.typeMarches;
      }
      return 0
        }
      };
    },






commparerMontantGleEtMontantFacture(){
if(this.montantGeneralMandatModifier > this.afficherMontantFacture(this.editMandat.facture_id)){
alert("Le montant demandé est supérieur à la facture")
}
else{
  return this.montantGeneralMandatModifier
}
return this.montantGeneralMandatModifier
},



    restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEgagementLigne(this.editMandat.marche_id));
      return parseFloat(val).toFixed(0);
      
    },
afficheMontantReelMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },

montantMarcheAvecAvenant() {
      const val = parseFloat(this.afficheMontantReelMarche(this.editMandat.marche_id)) + parseFloat(this.affichierMontantAvenant(this.editMandat.marche_id));
      return parseFloat(val).toFixed(0);
    },

affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},
    dotationDisponibleAnterieure() {
      const val =  parseFloat(this.afficherMontantBudgetaireInitial(this.afficherInputationBudgetaire(this.afficherIdMarche(this.editMandat.facture_id)))) - parseFloat(this.montantCumulerMandatEngagement);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantDisponibleBudgetMandatEngagement() {
      const val =  parseFloat(this.dotationDisponibleAnterieure) - parseFloat(this.montantGeneralMandatModifier);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
    },

montantCumulerMandatEngagement() {
      const val = parseFloat(this.sommeEgagementLigne(this.editMandat.marche_id)) + parseFloat(this.montantGeneralMandatModifier);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
sommeEgagementLigne: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.mandats.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },



 montantGeneralMandatModifier() { 
      const val = parseFloat(this.editMandat.montant_tresor) + parseFloat(this.editMandat.montant_don) + parseFloat(this.editMandat.montant_emprunt);
      return parseFloat(val).toFixed(0);
      
    },
afficheCompteEntreprise() {
      return id => {
        if (id != null && id != "") {
           return this.comptes.filter(qtreel => qtreel.entrepse_id == id);

     
        }
      };
    },
    afficheNumeroCompte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.comptes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.rib;
      }
      return 0
        }
      };
    },
    afficheIdCompte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.entreprise_id == id);

      if (qtereel) {
        return qtereel.compte_id;
      }
      return 0
        }
      };
    },
afficheIdBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.entreprise_id == id);

      if (qtereel) {
        return qtereel.banq_id;
      }
      return 0
        }
      };
    },
afficheLibelleBanque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },






afficherActi() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.editMandat.facture_id)));

      if (norme) {
       
       return norme.afficheAction.code.concat('  ', norme.afficheAction.libelle)
      }
      return ""
    },
    afficherActid() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.editMandat.facture_id)));

      if (norme) {
       return norme.afficheAction.id;
      }
      return ""
    },
afficheractivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
      
        return qtereel.code.concat('  ', qtereel.libelle)
      }
      return 0
        }
      };
    },
afficheIdActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
        }
      };
    },
  afficherObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.numero_marche.concat(' / ', qtereel.objet)
      }
      return ""
        }
      };
    },
 afficherIdLigneBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.economique_id;
      }
      return ""
        }
      };
    },
    afficherLibelleLigneBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
             return qtereel.code.concat('  ', qtereel.libelle)
      }
      return ""
        }
      };
    },
afficherInputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.imputation;
      }
      return ""
        }
      };
    },
    afficherMontantBudgetaireInitial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.codebudget == id);

      if (qtereel) {
       
           return qtereel.Dotation_Initiale;
      }
      return ""
        }
      };
    },
 CodeGdeNatureDep() {
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
 afficherProgDot() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.editMandat.facture_id)));

      if (norme) {
       
       return norme.afficheProgramme.code.concat('  ', norme.afficheProgramme.libelle)
      }
      return ""
    },
    afficherProgDotId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.editMandat.facture_id)));

      if (norme) {
       return norme.afficheProgramme.id;
      }
      return ""
    },
 afficherIdMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marche_id;
      }
      return ""
        }
      };
    },
     afficherIdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return ""
        }
      };
    },
    afficherNomEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return ""
        }
      };
    },
     afficherAdresseEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.email.concat(' / ', qtereel.telephone)
      }
      return ""
        }
      };
    },
    afficherNumeroCCEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return ""
        }
      };
    },
 afficherIdGrandeNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getMarchePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.gdenature_id;
      }
      return ""
        }
      };
    },
 afficherIdUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getMarchePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return ""
        }
      };
    },
afficherIdSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.section_id;
      }
      return ""
        }
      };
    },
    afficherLibelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section.concat('  ', qtereel.nom_section)
      }
      return ""
        }
      };
    },



 anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    
afficheUa_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },
afficheLibelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  recupererTypeProcedure() {
      
      const norme = this.choixprocedure.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.tprocedure;
      }
      return ""
    },
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            ...mapActions('bienService',['supprimerActeEffetFinancier',"modifierMandat",
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
            ...mapActions("bienService", [
                "getEngagement",
                "supprimerEngagement",
                "modifierEngagement",
                "ajouterEngagement",
                "ajouterMandat",
                "modifierMandat",
                "supprimerMandat",
                "ajouterFacture",
                "modifierFacture",
                "supprimerFacture",
                "ajouterChoixProcedure",
                 "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierMarche",
      "getActeEffetFinancier",
      "getMarche",
     
               
            ]),
             ...mapActions("uniteadministrative", [
      "ajouterDecompteFacture"
    ]),
 afficherModalListeExecution(){
                window.history.back();
            },

modifierModalMandatDecisionCF(){
    
     
   if (this.afficherMontantFacture(this.editMandat.facture_id) > this.montantGeneralMandatModifier)
      {
        alert("Le montant engagé est inférieur au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficherMontantFacture(this.editMandat.facture_id))
      {
        alert("La dotation est inférieure au montant de la facture")
      }
      
  
       else if (parseFloat(this.montantMarcheAvecAvenant) == parseFloat(this.sommeEgagementLigneTableau(this.macheid)))
      {
        

      var nouvelObjet = {
      ...this.editMandat,
       exercice_budget :this.anneeAmort,
    
         budget_general_id :this.afficherInputationBudgetaire(this.afficherIdMarche(this.editMandat.facture_id)),
         marche_id : this.editMandat.marche_id,
         montant_a_paye: this.restePayeMarche,
        //  montant_cumul:this.montantCumuler,
       ligne_id:this.afficherIdLigneBudgetaire(this.afficherIdMarche(this.editMandat.facture_id)),
     banque_id:this.afficheIdBanque(this.afficherIdEntreprise(this.editMandat.facture_id)),
        facture_id:this.editMandat.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,
// engagement_id:this.editLiquidation.egagement_id,
programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.afficheIdActivite(this.editMandat.marche_id),
  ua_id:this.afficherIdUa(this.afficherIdMarche(this.editMandat.facture_id)),
  grd_nature_id:this.afficherIdGrandeNature(this.afficherIdMarche(this.editMandat.facture_id)),
	compte_id:this.afficheIdCompte(this.afficherIdEntreprise(this.editMandat.facture_id)),
section_id:this.afficherIdSection(this.afficherIdUa(this.afficherIdMarche(this.editMandat.facture_id))),
  total_general:this.montantGeneralMandatModifier,
   	entreprise_id:this.editMandat.fournisseur_id,
    	
 marchetype:this.afficheMarcheType

       };
    this.modifierMandat(nouvelObjet)
      // this.$('#ModifierModalMandat').modal('hide');
      this.$('#validaDecisionCF').modal('hide');
      this.$('#exampleModalMotifMandatEmetteur').modal('hide');
      
this.formData= {

 numero_engage:"",
  total_general:0,
       montant_tresor:0,
montant_don:0,
montant_emprunt:0,

val:0,
        exercice_budget:"",
        budget_general_id:"",
        programme_id:"",
        action_id:"",
        activite_id:"",
      
        ua_id:"",
        grd_nature_id:"",
        type_procedure_id:"",
        ref_juridique:"",

        type_engagement_id:"",
        mod_paiement_engage:"",
        numero_cc_id:"",
        adresse_entreprise:"",

         nom_entreprise:"",
       
        bailler_id:"",
        objet_depense:"",
        piece_justificative:"",

         motif:"",
        date_motif:"",
        observation:"",
        ligne_budgetaire_id:"",
        section_id:"",
        marche_id:"",
        // montant_a_paye:"",
        //  montant_cumul:"",
         ligne_id:"",
         
         date_reception_cf:"",
          decision_cf:"",
           numero_demande:"",
              numero_op:"",
              autre_engagement:"",
              observation_emetteur:"",
              	decision_emetteur:"",
                date_decision_emetteur:"",
                nom_emetteur:""
};

      }
      else
      {
 return 
      }
    
    
  //  }
      
    },

        }
    };
</script>

<style >
.tabtailleFenetre{
   
   height: 200%;
}
</style>
commparerMontantGleEtMontantFacture
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
              <h5>ORDRE DE PAIEMENT ORDINAIRE</h5>
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
        <table class="table table-bordered table-striped" v-if="detail_Facture">
           
                      <tr>
                       <td>
                         <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="number" class="span" :value="montantGeneralMandat" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.montant_tresor" :readonly="formData.bailler_id!=6" />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.montant_don" :readonly="formData.bailler_id==6"/>
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="number" class="span" v-model="formData.montant_emprunt" :readonly="formData.bailler_id==6"/>
                            </div>
                          </div>
                        </td>
                      </tr>
                        <tr>
                        
                        
                       
                        
                        <td>
                           <div class="control-group">
                            <label class="control-label">Ligne Budgetaire</label>
                            <div class="controls">
                              
                               <div class="controls">
                              <input type="text" class="span" :value="afficherLibelleLigneBudgetaire(afficherIdLigneBudgetaire(afficherIdParent(detail_Facture.marche_id)))"  readonly/>
                            </div>
                            </div>
                          </div>
                        </td>
                        <td >
                          <div class="control-group">
                            <label class="control-label">Imputation budgetaire{{detail_Facture.id}}</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherInputationBudgetaire(afficherIdLigneBudgetaire(afficherIdParent(detail_Facture.marche_id)))" readonly/>
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Facture</label>
                            <div class="controls">
                              <input type="text" class="span" :value="detail_Facture.numero_facture" readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span" :value="detail_Facture.prix_propose_ttc" readonly/>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Dotation Initiale(crédits autorises)(A)</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherMontantBudgetaireInitial(afficherIdLigneBudgetaire(afficherIdParent(detail_Facture.marche_id)))" readonly/>
                            </div>
                          </div>
                        </td>
                         <td>
                          <div class="control-group">
                            <label class="control-label">Cumul engagements antérieurs (B) </label>
                            <div class="controls">
                              <input type="text" class="span" :value="sommeEgagementLigne(detail_Facture.marche_id)" readonly/>
                            </div>
                          </div>
                        </td>
                           <td>
                          <div class="control-group">
                            <label class="control-label">Engagement actuel (C)</label>
                            <div class="controls">
                              <input type="text" class="span" :value="montantGeneralMandat" readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                                                    <div class="control-group">
                            <label class="control-label">Cumul des demandes(y compris celle-ci)(D=A+B) </label>
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
                            <label class="control-label">Dotation disponible (E=A-D)</label>
                            <div class="controls">
                              <input type="text" class="span" :value="dotationDisponibleAnterieure"  readonly/>
                            </div> 
                          </div>
                           </td>
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
<td>
                          <div class="control-group">
                            <label class="control-label">Montant Bailleur par Marché</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficheMontantParBailler(detail_Facture.marche_id)" readonly/>
                               <h5 v-if="afficheMontantParBailler(this.detail_Facture.marche_id) < afficheMontantBailleur(this.formData.bailler_id)" style="color:red">
           La part du bailleur sature</h5>
                              <input type="hidden" class="span" :value="afficheMontantBailleur(formData.bailler_id)" readonly/>
                            </div>
                          </div>
                        </td>
                      </tr>
                     
        </table>
 </div>
                    </div>
                    <!--ongle identification-->
                    <div id="tab10009" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped" v-if="detail_Facture">
    <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Exercice Budgetaire</label>
                            
                               
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
                            :value="afficherLibelleSection(afficherIdSection(afficherIdUa(detail_Facture.marche_id)))"
                              
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
                             :value="afficherProgDotId"
                              
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                         <div class="control-group">
                            <label class="control-label">Nature depense</label>
                             <div class="controls">
                                 <input
                                type="text"
                                class="span"
                                readonly
                            
                             :value="afficherlibelleGrandeNature(afficherIdGrandeNature(detail_Facture.marche_id))"
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
                            <label class="control-label">Activite</label>
                            <div class="controls">
                             
                               <input
                                type="text"
                                class="span"
                                readonly

                             :value="afficheractivite(afficheIdActivite(detail_Facture.marche_id))"
                              
                              />
                            </div>
                          </div>
                          </td>
                          <td>
                             <div class="control-group">
                            <label class="control-label">Unite Administrative</label>
                            <div class="controls">
                               <input
                                type="text"
                                class="span"
                                readonly
                            :value="afficheLibelleUa(afficheUa_id(afficherIdMarche(detail_Facture.id)))"
                              
                              />
                              
                            </div>
                          </div>
                          
                        </td>
                          <td>
                           <div class="control-group">
                            <label class="control-label">Type Ordre Paiement</label>
                            
                               <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                             :value="AfficheTypeProcedure"
                              
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
                              <select v-model="formData.type_engagement_id"  class="span">
                                  <option value="0">Marche</option>
                                    <option value="1">Régie d'avances - reservation des crédits</option>
                                       <option value="2">Régularisation d'ordre de paiement (OP)</option>
                                    <option value="3">Régularisation avances de trésorerie (AT)</option>
                                     <option value="4">Autres</option>
                               
                              </select>
                              
                            </div>
                          </div>
                        </td>
                       <td>
                            <div class="control-group">
                              <label class="control-label">Réf. Engagement  juridique</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="formData.ref_juridique"
                                />
                              </div>
                            </div>
                          </td>
                           <td>
                            <div class="control-group">
                              <label class="control-label">Numero OP/AT</label>
                              <div class="controls">
                                <input
                                  type="text"
                                  class="span"
                                  v-model="formData.numero_op"
                                />
                              </div>
                            </div>
                          </td>
                  <td >
                         <div class="control-group">
                            <label class="control-label">Autre type engagement</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.autre_engagement" />
                            </div>
                          </div>
                        </td>
                      </tr>

                    
                 
                  <tr>
                          <td>
                         <div class="control-group">
                            <label class="control-label">Numero OP Définitif</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.numero_op_definitif"/>
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
                              
                               <select v-model="formData.mod_paiement_engage" class="span" >
                    
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
                              <input type="text" class="span" :value="afficherNumeroCCEntreprise(afficherIdEntreprise(detail_Facture.id))" readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherNomEntreprise(afficherIdEntreprise(detail_Facture.id))"  readonly/>
                               
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
                                :value="afficherAdresseEntreprise(afficherIdEntreprise(detail_Facture.id))"
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
                               <!-- <select v-model="formData.compte_id" class="span" >
                                <option
                                  v-for="affiche in afficheLibelleBanque(afficheIdBanque(afficherIdEntreprise(detail_Facture.id)))" :key="affiche.id"
                                  :value="affiche.id"
                                >{{affiche.libelle}}</option>
                              </select> -->
                               <input
                                  type="text"
                                  :value="afficheLibelleBanque(afficheIdBanque(afficherIdEntreprise(detail_Facture.id)))"
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
                               <!-- <select v-model="formData.compte_id" class="span" >
                                <option
                                  v-for="affiche in afficheCompteEntreprise(afficherIdEntreprise(detail_Facture.id))" :key="affiche.id"
                                  :value="affiche.id"
                                >{{affiche.rib}}</option>
                              </select> -->
                               <input
                                  type="text"
                                  :value="afficheNumeroCompte(afficheIdCompte(afficherIdEntreprise(detail_Facture.id)))"
                                  class="span"
                                 readonly
                                />
                              </div>
                            </div>
                          </td>
                         <td>
                            <div class="control-group">
                              <label class="control-label">piece(s) justificative(s)</label>
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
                            
                             <select v-model="formData.bailler_id" class="span">
                               <option></option>
                                <option
                                  v-for="fam in afficheBailleurMarche(detail_Facture.marche_id)"
                                  :key="fam.id"
                                  :value="fam.bailleur_id"
                                >{{afficheLibelleBailler(fam.bailleur_id)}}</option>
                              </select>
                          </div>
                        </td> 
                      </tr>
                      <tr>
                        <td colspan="4">
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherObjetMarche(afficherIdMarche(detail_Facture.id))" readonly/>
                              
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
                          @click.prevent="ajouterMandatFactureDefinitive" 
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
                formData : {
                    montant_tresor: 0,
                    montant_emprunt: 0,
                    montant_don: 0,
                    
                },

                editTitre: {
                    code: "",
                    libelle: ""
                },
ndepense:"Bien et service"
            };
        },
 props:["macheid"],
       created() {
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.getFacturePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
         )
         
  
  
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {
          ...mapGetters('horSib', ['gettersrealiteServiceFaitHorsSib']),
// methode pour maper notre guetter
          ...mapGetters("bienService", ["personnaliseGetterMarcheBailleur",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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
      "budgetEclate",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation","decomptefactures"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

    afficheLibelleBailler() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    afficheCumulMontantParBailler() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.marche_id == id && qtreel.bailleur_id == this.formData.bailler_id);

      if (qtereel) {
        return qtereel.montant;
      }
      return 0
        }
      };
    },
    afficheMontantParBailler() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseGetterMarcheBailleur.find(qtreel => qtreel.marche_id == id && qtreel.bailleur_id == this.formData.bailler_id);

      if (qtereel) {
        return qtereel.montant;
      }
      return 0
        }
      };
    },
    afficheMontantBailleur() {
      return id => {
        if (id != null && id != "") {
           return this.mandats.filter(qtreel => qtreel.bailler_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0)
        }
        }
      },
    
afficheBailleurMarche() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id);
      
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
      const val = this.afficheDecompte(this.detail_Facture.marche_id).length + 1;
      return parseFloat(val).toFixed(0);
      
    },






afficheMarcheType(){
if(this.afficheIdTypeMarche(this.detail_Facture.marche_id) == 5){
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
if( this.detail_Facture.prix_propose_ttc < this.montantGeneralMandat){
alert("Montant demande est supperieur a la facture")
}
else{
  return this.montantGeneralMandat
}
return this.montantGeneralMandat
},



    restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEgagementLigne(this.detail_Facture.marche_id));
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
      const val = parseFloat(this.afficheMontantReelMarche(this.detail_Facture.marche_id)) + parseFloat(this.affichierMontantAvenant(this.detail_Facture.marche_id));
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
      const val =  parseFloat(this.afficherMontantBudgetaireInitial(this.afficherIdLigneBudgetaire(this.afficherIdParent(this.detail_Facture.marche_id)))) - parseFloat(this.montantCumulerMandatEngagement);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantDisponibleBudgetMandatEngagement() {
      const val =  parseFloat(this.dotationDisponibleAnterieure) - parseFloat(this.montantGeneralMandat);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
    },

montantCumulerMandatEngagement() {
      const val = parseFloat(this.sommeEgagementLigne(this.detail_Facture.marche_id)) + parseFloat(this.montantGeneralMandat);
      
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



 montantGeneralMandat() { 
      const val = parseFloat(this.formData.montant_tresor) + parseFloat(this.formData.montant_don) + parseFloat(this.formData.montant_emprunt);
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
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.detail_Facture.id)));

      if (norme) {
       
       return norme.afficheAction.code.concat('  ', norme.afficheAction.libelle)
      }
      return ""
    },
    
    enregistrerActivite(){
        if(this.afficherProgDotId==""){
          return 0
        }
        else{
          return this.afficheIdActivite(this.detail_Facture.marche_id)
        }
    },
    enregistrerAction(){
        if(this.afficherProgDotId==""){
          return 0
        }
        else{
          return this.afficherActid
        }
    },
    afficherActid() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.detail_Facture.id)));

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
    afficherIdParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
       
           return qtereel.parent_id;
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
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id);

      if (qtereel) {
       
           return qtereel.dotation;
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
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.detail_Facture.id)));

      if (norme) {
       
       return norme.afficheProgramme.code.concat('  ', norme.afficheProgramme.libelle)
      }
      return ""
    },
    enregistrerProgramme(){
        if(this.afficherProgDotId==""){
          return 0
        }
        else{
          return this.afficherProgDotId
        }
    },
    afficherProgDotId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.detail_Facture.id)));

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
    afficherlibelleGrandeNature() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
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
    AfficheTypeProcedure(){
      if(this.recupererIdTypeFacture(this.detail_Facture.id) == 1){

      return "ORDRE PAIEMENT DEFINITIF" ;

    }
    else{
      return "ORDRE PAIEMENT PROVISOIRE"
    }
    },

      recupererIdTypeFacture() {
      
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typeordrepaiement;
      }
      return 0
        }
      };
    },
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            ...mapActions('bienService',['supprimerActeEffetFinancier',
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
    ...mapActions("horSib", ['ajouterRealiteServiceHors']),
 afficherModalListeExecution(){
                window.history.back();
            },

ajouterMandatFactureDefinitive(){
      //  let datationdispo = parseFloat(this.montantMarcheAvecAvenant)
      // let montant_contrat = parseFloat( this.afficheMontantReelMarche(this.detail_marche.id))
      if (this.detail_Facture.prix_propose_ttc > this.montantGeneralMandat)
      {
      //   alert("Le montant engagé est Inférieure au montant de la facture")
      // }
      //  else if (this.dotationDisponibleAnterieure < this.detail_Facture.prix_propose_ttc)
      // {
      //   alert("La dotation est Inférieure au montant de la facture")
      // }
      
      //  else if (parseFloat(this.montantMarcheAvecAvenant) == parseFloat(this.sommeEgagementLigne(this.detail_Facture.marche_id)))
      // {
      //   alert("Marché apuré")
      // }
      // else if(this.NombreDecompte == 1)
      // {
        var nouvelObjet919 = {
      ...this.formData,
      etat_srf:0,
      etat_op_def:0,
       exercice_budget :this.anneeAmort,
   budget_general_id :this.afficherInputationBudgetaire(this.afficherIdParent(this.detail_Facture.marche_id)),
         marche_id : this.detail_Facture.marche_id,
         montant_a_paye: this.restePayeMarche,
        //  montant_cumul:this.montantCumuler,
       ligne_id:this.afficherIdLigneBudgetaire(this.afficherIdParent(this.detail_Facture.marche_id)),
     banque_id:this.afficheIdBanque(this.afficherIdEntreprise(this.detail_Facture.id)),
        facture_id:this.detail_Facture.id,
        type_procedure_id	:this.recupererTypeProcedure,
// engagement_id:this.editLiquidation.egagement_id,
programme_id:this.enregistrerProgramme,
action_id:this.enregistrerAction,
activite_id:this.enregistrerActivite,
  ua_id:this.afficherIdUa(this.detail_Facture.marche_id),
  grd_nature_id:this.afficherIdGrandeNature(this.detail_Facture.marche_id),
	compte_id:this.afficheIdCompte(this.afficherIdEntreprise(this.detail_Facture.id)),
section_id:this.afficherIdSection(this.afficherIdUa(this.detail_Facture.marche_id)),
  total_general:this.montantGeneralMandat,
// montant_tresor:this.detail_Facture.montant_tresor,
// montant_don:this.detail_Facture.montant_don,
// montant_emprunt:this.detail_Facture.montant_emprunt,
	entreprise_id:this.detail_Facture.entreprise_id,
  //  bailler_id:this.detail_Facture.bailler_id,
 marchetype:this.afficheMarcheType,
 type_engagement_id:this.detail_Facture.type_engagement_id,
 mod_paiement_engage:this.detail_Facture.mod_paiement_engage,
  service_realite_id:this.detail_Facture.id,
  differentop:0
       };

  //       var objetDecompte1 = {
  //      facture_id :this.detail_Facture.id,
  // marche_id :this.detail_Facture.marche_id,
  // numero_decompte :this.NombreDecompte,
  //   montant_execute :this.montantGeneralMandat,
  //   montantmarche:this.montantMarcheAvecAvenant,
    
  //     dotationprevue:this.afficherMontantBudgetaireInitial(this.afficherIdLigneBudgetaire(this.afficherIdParent(this.detail_Facture.marche_id))),
  //      };
      
this.ajouterMandat(nouvelObjet919)

// this.ajouterDecompteFacture(objetDecompte1)
this.formDataMadat= {
 
  montant_tresor: 0,
                    montant_emprunt: 0,
                    montant_don: 0,
};
      }
      else
      {
 var nouvelObjet91 = {
      ...this.formData,
      etat_srf:0,
      etat_op_def:0,
       exercice_budget :this.anneeAmort,
   budget_general_id :this.afficherInputationBudgetaire(this.afficherIdParent(this.detail_Facture.marche_id)),
         marche_id : this.detail_Facture.marche_id,
         montant_a_paye: this.restePayeMarche,
        //  montant_cumul:this.montantCumuler,
       ligne_id:this.afficherIdLigneBudgetaire(this.afficherIdParent(this.detail_Facture.marche_id)),
     banque_id:this.afficheIdBanque(this.afficherIdEntreprise(this.detail_Facture.id)),
        facture_id:this.detail_Facture.id,
        type_procedure_id	:this.recupererTypeProcedure,
// engagement_id:this.editLiquidation.egagement_id,
programme_id:this.enregistrerProgramme,
action_id:this.enregistrerAction,
activite_id:this.enregistrerActivite,
  ua_id:this.afficherIdUa(this.detail_Facture.marche_id),
  grd_nature_id:this.afficherIdGrandeNature(this.detail_Facture.marche_id),
	compte_id:this.afficheIdCompte(this.afficherIdEntreprise(this.detail_Facture.id)),
section_id:this.afficherIdSection(this.afficherIdUa(this.detail_Facture.marche_id)),
  total_general:this.montantGeneralMandat,
// montant_tresor:this.detail_Facture.montant_tresor,
// montant_don:this.detail_Facture.montant_don,
// montant_emprunt:this.detail_Facture.montant_emprunt,
	entreprise_id:this.detail_Facture.entreprise_id,
  //  bailler_id:this.detail_Facture.bailler_id,
 marchetype:this.afficheMarcheType
       };

  //       var objetDecompte = {
  //      facture_id :this.detail_Facture.id,
  // marche_id :this.detail_Facture.marche_id,
  // numero_decompte :this.NombreDecompte,
  //    montant_execute :this.commparerMontantGleEtMontantFacture,
  //     dotationprevue:this.dotationDisponibleAnterieure,
  //     montantmarche:this.restePayeMarche,
  //      };
this.ajouterMandat(nouvelObjet91)
// this.ajouterDecompteFacture(objetDecompte)
this.formDataMadat= {
 numero_mandat:"",
 
  montant_tresor: 0,
                    montant_emprunt: 0,
                    montant_don: 0,
};

      }
      

    },

        }
    };
</script>

<style >
.tabtailleFenetre{
   
   height: 200%;
}
</style>
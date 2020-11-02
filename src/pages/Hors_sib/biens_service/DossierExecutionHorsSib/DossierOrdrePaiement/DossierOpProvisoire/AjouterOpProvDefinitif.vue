decompte
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
        <table class="table table-bordered table-striped" >
           
                      <tr>
                       <td>
                         <div class="control-group">
                            <label class="control-label">Total général</label>
                            <div class="controls">
                              <input type="number" class="span" 
                              :value="detail_ServiceRealite.total_general"
                               readonly/>
                            </div>
                          </div>
                        </td>
                       
                        <td>
                         <div class="control-group">
                            <label class="control-label">Trésor</label>
                            <div class="controls">
                              <input type="number" class="span" :value="detail_ServiceRealite.montant_tresor" readonly />
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Don</label>
                            <div class="controls">
                              <input type="number" class="span" :value="detail_ServiceRealite.montant_don" readonly />
                            </div>
                          </div>
                        </td>
                        <td>
                             <div class="control-group">
                            <label class="control-label">Emprunt</label>
                            <div class="controls">
                              <input type="number" class="span" :value="detail_ServiceRealite.montant_emprunt" readonly />
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
                              <input type="text" class="span"  
                              :value="afficherLibelleLigneBudgetaire(afficherIdLigneBudgetaire(afficherIdParent(detail_ServiceRealite.marche_id)))" readonly
                              
                               />
                            </div>
                            </div>
                          </div>
                        </td>
                        <td >
                          <div class="control-group">
                            <label class="control-label">Imputation budgetaire</label>
                            <div class="controls">
                              <input type="text" class="span"  :value="afficherInputationBudgetaire(afficherIdLigneBudgetaire(afficherIdParent(detail_ServiceRealite.marche_id)))" readonly/>
                            </div>
                          </div>
                        </td>
                       <td>
                          <div class="control-group">
                            <label class="control-label">Numéro Facture</label>
                            <div class="controls">
                              <input type="text" class="span" 
                              :value="recupererNumeroFacture(detail_ServiceRealite.facture_id)"
                               readonly/>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Montant Facture</label>
                            <div class="controls">
                              <input type="text" class="span" 
                              :value="recupererMontantFacture(detail_ServiceRealite.facture_id)"
                               readonly/>
                            </div>
                          </div>
                        </td>
                       
                      </tr>
                      <tr>
                        <td>
                          <div class="control-group">
                            <label class="control-label">Dotation Iniatiale(crédits autorises)(A)</label>
                            <div class="controls">
                              <input type="text" class="span" :value="afficherMontantBudgetaireInitial(afficherIdLigneBudgetaire(afficherIdParent(detail_ServiceRealite.marche_id)))" readonly/>
                            </div>
                          </div>
                        </td>
                          <td>
                          <div class="control-group">
                            <label class="control-label">Cumul engagements antérieurs (B) </label>
                            <div class="controls">
                              <input type="text" class="span" :value="sommeEgagementLigne(detail_ServiceRealite.marche_id)" readonly/>
                            </div>
                          </div>
                        </td>
                           <td>
                          <div class="control-group">
                            <label class="control-label">Engagement actuel (C)</label>
                            <div class="controls">
                              <input type="text" class="span" :value="detail_ServiceRealite.facture_id" readonly/>
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
                            :value="afficherLibelleSection(afficherIdSection(afficherIdUa(detail_ServiceRealite.marche_id)))"
                              
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
                            
                            :value="afficherlibelleGrandeNature(afficherIdGrandeNature(detail_ServiceRealite.marche_id))"
                             
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
                         
                             :value="afficheractivite(afficheIdActivite(detail_ServiceRealite.marche_id))"
                              
                              />
                            </div>
                          </div>
                          </td>
                          <td>
                             <div class="control-group">
                            <label class="control-label">Unite administrative</label>
                            <div class="controls">
                               <input
                                type="text"
                                class="span"
                                readonly
                                :value="afficheLibelleUa(afficheUa_id(detail_ServiceRealite.marche_id))"
                              
                              />
                              
                            </div>
                          </div>
                          
                        </td>
                          <td>
                           <div class="control-group">
                            <label class="control-label">Type OP</label>
                            
                               <div class="controls">
                              <input
                                type="text"
                                class="span"
                               readonly
                              :value="libelleOp"
                              
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
                               <input
                                type="text"
                                class="span"
                               readonly
                              :value="typeEngagement"
                              
                              />
                              
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
                                  :value="detail_ServiceRealite.ref_juridique"
                              readonly
                                />
                              </div>
                            </div>
                          </td>
                           <!-- <td>
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
                          </td> -->
                  <td >
                         <div class="control-group">
                            <label class="control-label">Autre type engagement</label>
                            <div class="controls">
                              <input type="text" class="span" :value="detail_ServiceRealite.autre_engagement" readonly/>
                            </div>
                          </div>
                        </td>
                         <td>
                         <div class="control-group">
                            <label class="control-label">Numero OP Définitif</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.numero_op_definitif"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                    
                 
                  <tr>
                         
                        
                        <!-- <td>
                         <div class="control-group">
                            <label class="control-label">Numero Bordereau</label>
                            <div class="controls">
                              <input type="text" class="span" v-model="formData.numero_bordereau"/>
                            </div>
                          </div>
                        </td> -->
                 
                           <td>
                         <div class="control-group">
                            <label class="control-label">Date de reception dossier</label>
                            <div class="controls">
                              <input type="date" class="span" v-model="formData.date_reception_cf"/>
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
                              
                                <input type="text" class="span" 
                              :value="afficherModeDePaiement(detail_ServiceRealite.mod_paiement_engage)"
                               readonly/>
                            </div>
                          </div>
                        </td>
                         
                       <td>
                         <div class="control-group">
                            <label class="control-label">N° compte contribuable</label>
                            <div class="controls">
                             <div class="controls">
                              <input type="text" class="span" 
                              
                              :value="afficherNumeroCCEntreprise(afficherIdEntreprise(detail_ServiceRealite.facture_id))"
                               readonly/>
                               
                            </div>
                              
                            </div>
                          </div>
                        </td>
                        
                          
                       
                       
                        <td>
                          <div class="control-group">
                            <label class="control-label">Nom entreprise</label>
                            <div class="controls">
                              <input type="text" class="span" 
                              
                              :value="afficherNomEntreprise(afficherIdEntreprise(detail_ServiceRealite.facture_id))"
                                readonly/>
                               
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
                                
                                :value="afficherAdresseEntreprise(afficherIdEntreprise(detail_ServiceRealite.facture_id))"
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
                               
                               <input
                                  type="text"

                                  :value="afficheLibelleBanque(afficheIdBanque(afficherIdEntreprise(detail_ServiceRealite.facture_id)))"
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
                              
                               <input
                                  type="text"
                                 
                                  :value="afficheNumeroCompte(afficheIdCompte(afficherIdEntreprise(detail_ServiceRealite.facture_id)))"
                                  class="span"
                                 readonly
                                />
                              </div>
                            </div>
                          </td>
                         <td>
                            <div class="control-group">
                              <label class="control-label">piece justificative</label>
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
                            
                             
                              <input
                                  type="text"
                                 
                                  :value="afficheLibelleSourceFinancement(detail_ServiceRealite.bailler_id)"
                                  class="span"
                                 readonly
                                />
                          </div>
                        </td> 
                      </tr>
                      <tr>
                        <td colspan="4">
                         <div class="control-group">
                            <label class="control-label">Objet de la dépense</label>
                            <div class="controls">
                              <input type="text" class="span" 
                              :value="afficherObjetMarche(detail_ServiceRealite.marche_id)"
                               readonly/>
                              
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
   this.detail_ServiceRealite = this.gettersrealiteServiceFaitHorsSib.find(
       idmarche => idmarche.id == this.$route.params.id && idmarche.differentrealite==1
         )
  
},
        computed: {
          ...mapGetters('horSib', ['gettersrealiteServiceFaitHorsSib']),
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
      "budgetEclate",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation","decomptefactures"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),


typeEngagement(){
if(this.detail_ServiceRealite.type_engagement_id==0){
  return "Marche"
}
else if (this.detail_ServiceRealite.type_engagement_id==1){
return "Régie d'avances - reservation des crédits"
}
else if (this.detail_ServiceRealite.type_engagement_id==2){
  return "Régularisation d'ordre de paiement (OP)"
}
else if (this.detail_ServiceRealite.type_engagement_id==3){
  return "Régularisation avances de trésorerie (AT)"
}

else{
  return "Autres"
}
},



afficheDecompte() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id);
      
        }
      };
    },


 NombreDecompte() { 
      const val = this.afficheDecompte(this.detail_ServiceRealite.marche_id).length + 1;
      return parseFloat(val).toFixed(0);
      
    },






afficheMarcheType(){
if(this.afficheIdTypeMarche(this.detail_ServiceRealite.marche_id) == 5){
return 1
}
else{
  return 2
}
},


afficheLibelleSourceFinancement() {
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
if(this.montantGeneralMandat > this.recupererMontantFacture(this.detail_ServiceRealite.facture_id)){
alert("Montant demande est supperieur a la facture")
}
else{
  return this.montantGeneralMandat
}
return this.montantGeneralMandat
},
libelleOp(){
  if(this.afficheTypeOp(this.detail_ServiceRealite.facture_id)==1)
  {
    return "ORDRE DE PAIEMENT ORDINAIRE"
  }
  else{
    return "ORDRE DE PAIEMENT INDERECT"
  }
},
afficheTypeOp() {
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

    restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEgagementLigne(this.detail_ServiceRealite.marche_id));
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
      const val = parseFloat(this.afficheMontantReelMarche(this.detail_ServiceRealite.marche_id)) + parseFloat(this.affichierMontantAvenant(this.detail_ServiceRealite.marche_id));
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
      const val =  parseFloat(this.afficherMontantBudgetaireInitial(this.afficherIdLigneBudgetaire(this.afficherIdParent(this.detail_ServiceRealite.marche_id)))) - parseFloat(this.montantCumulerMandatEngagement);
      
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
      const val = parseFloat(this.sommeEgagementLigne(this.detail_ServiceRealite.marche_id)) + parseFloat(this.montantGeneralMandat);
      
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
      return parseFloat(val).toFixed(2);
      
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
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.detail_ServiceRealite.marche_id));

      if (norme) {
       
       return norme.afficheAction.code.concat('  ', norme.afficheAction.libelle)
      }
      return ""
    },
    afficherActid() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.detail_ServiceRealite.marche_id));

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
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.detail_ServiceRealite.marche_id));

      if (norme) {
       
       return norme.afficheProgramme.code.concat('  ', norme.afficheProgramme.libelle)
      }
      return ""
    },
    afficherProgDotId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.detail_ServiceRealite.marche_id));

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
      if(this.recupererIdTypeFacture(this.detail_ServiceRealite.facture_id) == 1){

      return "Engagement Direct" ;

    }
    else{
      return "Engagement Bon de Commande"
    }
    },

      recupererIdTypeFacture() {
      
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typfacture_id;
      }
      return 0
        }
      };
    },
    recupererNumeroFacture() {
      
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_facture;
      }
      return 0
        }
      };
    },
    afficherModeDePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
    recupererMontantFacture() {
      
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
    enregistrerProgramme(){
        if(this.afficherProgDotId==""){
          return 0
        }
        else{
          return this.afficherProgDotId
        }
    },
    enregistrerActivite(){
        if(this.afficherProgDotId==""){
          return 0
        }
        else{
          return this.afficheIdActivite(this.detail_ServiceRealite.marche_id)
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
 afficherModalListeExecution(){
                window.history.back();
            },

ajouterMandatFactureDefinitive(){
      //  let datationdispo = parseFloat(this.montantMarcheAvecAvenant)
      // let montant_contrat = parseFloat( this.afficheMontantReelMarche(this.detail_marche.id))
      if (this.detail_ServiceRealite.prix_propose_ttc > this.commparerMontantGleEtMontantFacture)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.detail_ServiceRealite.prix_propose_ttc)
      {
        alert("La dotation est Inférieure au montant de la facture")
      }
      
       else if (parseFloat(this.montantMarcheAvecAvenant) == parseFloat(this.sommeEgagementLigne(this.detail_ServiceRealite.marche_id)))
      {
        alert("Marché apuré")
      }
      else if(this.NombreDecompte == 1)
      {
        var nouvelObjet919 = {
      ...this.formData,
      
       exercice_budget :this.anneeAmort,
   budget_general_id :this.afficherInputationBudgetaire(this.detail_ServiceRealite.marche_id),
         marche_id : this.detail_ServiceRealite.marche_id,
         montant_a_paye: this.restePayeMarche,
        //  montant_cumul:this.montantCumuler,
       ligne_id:this.afficherIdLigneBudgetaire(this.detail_ServiceRealite.marche_id),
     banque_id:this.afficheIdBanque(this.afficherIdEntreprise(this.detail_ServiceRealite.facture_id)),
        facture_id:this.detail_ServiceRealite.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,
// engagement_id:this.editLiquidation.egagement_id,
programme_id:this.enregistrerProgramme,
action_id:this.enregistrerAction,
activite_id:this.enregistrerActivite,
  ua_id:this.afficherIdUa(this.detail_ServiceRealite.marche_id),
  grd_nature_id:this.afficherIdGrandeNature(this.detail_ServiceRealite.marche_id),
	compte_id:this.afficheIdCompte(this.afficherIdEntreprise(this.detail_ServiceRealite.facture_id)),
section_id:this.afficherIdSection(this.afficherIdUa(this.detail_ServiceRealite.marche_id)),
  total_general:this.detail_ServiceRealite.total_general,
montant_tresor:this.detail_ServiceRealite.montant_tresor,
montant_don:this.detail_ServiceRealite.montant_don,
montant_emprunt:this.detail_ServiceRealite.montant_emprunt,
	entreprise_id:this.detail_ServiceRealite.entreprise_id,
   bailler_id:this.detail_ServiceRealite.bailler_id,
 marchetype:this.afficheMarcheType,
 type_engagement_id:this.detail_ServiceRealite.type_engagement_id,
 mod_paiement_engage:this.detail_ServiceRealite.mod_paiement_engage,
  service_realite_id:this.detail_ServiceRealite.id
       };

        var objetDecompte1 = {
       facture_id :this.detail_ServiceRealite.facture_id,
  marche_id :this.detail_ServiceRealite.marche_id,
  numero_decompte :this.NombreDecompte,
    montant_execute :this.commparerMontantGleEtMontantFacture,
    montantmarche:this.montantMarcheAvecAvenant,
    differentop:1,
      dotationprevue:this.afficherMontantBudgetaireInitial(this.afficherIdLigneBudgetaire(this.afficherIdParent(this.detail_ServiceRealite.marche_id))),
       };
this.ajouterMandat(nouvelObjet919)
this.ajouterDecompteFacture(objetDecompte1)
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
      
       exercice_budget :this.anneeAmort,
   budget_general_id :this.afficherInputationBudgetaire(this.detail_ServiceRealite.marche_id),
         marche_id : this.detail_ServiceRealite.marche_id,
         montant_a_paye: this.restePayeMarche,
        //  montant_cumul:this.montantCumuler,
       ligne_id:this.afficherIdLigneBudgetaire(this.detail_ServiceRealite.marche_id),
     banque_id:this.afficheIdBanque(this.afficherIdEntreprise(this.detail_ServiceRealite.facture_id)),
        facture_id:this.detail_ServiceRealite.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,
// engagement_id:this.editLiquidation.egagement_id,
programme_id:this.enregistrerProgramme,
action_id:this.enregistrerAction,
activite_id:this.enregistrerActivite,
  ua_id:this.afficherIdUa(this.detail_ServiceRealite.marche_id),
  grd_nature_id:this.afficherIdGrandeNature(this.detail_ServiceRealite.marche_id),
	compte_id:this.afficheIdCompte(this.afficherIdEntreprise(this.detail_ServiceRealite.facture_id)),
section_id:this.afficherIdSection(this.afficherIdUa(this.detail_ServiceRealite.marche_id)),
  total_general:this.detail_ServiceRealite.total_general,
montant_tresor:this.detail_ServiceRealite.montant_tresor,
montant_don:this.detail_ServiceRealite.montant_don,
montant_emprunt:this.detail_ServiceRealite.montant_emprunt,
	entreprise_id:this.detail_ServiceRealite.entreprise_id,
   bailler_id:this.detail_ServiceRealite.bailler_id,
 marchetype:this.afficheMarcheType
       };

        var objetDecompte = {
       facture_id :this.detail_ServiceRealite.facture_id,
  marche_id :this.detail_ServiceRealite.marche_id,
  numero_decompte :this.NombreDecompte,
     montant_execute :this.commparerMontantGleEtMontantFacture,
      dotationprevue:this.dotationDisponibleAnterieure,
      montantmarche:this.restePayeMarche,
       };
this.ajouterMandat(nouvelObjet91)
this.ajouterDecompteFacture(objetDecompte)
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
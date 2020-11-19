typeOrdrePaiement
<template>

<div>
  <div id="modatFactureAjouteDefinitif" class="modal hide taillemodal45" >
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Facture</h3>
      </div>
      <div class="modal-body ">
      <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Type facture</label>
                  <div class="controls">
                      <select v-model="formData1.typfacture_id" class="span" >
                    
                     <option
                        v-for="typeFact in afficherTypeFactureProforma"
                        :key="typeFact.id"
                        :value="typeFact.id"
                      >{{typeFact.libelle}}</option>
                  </select>
                     
                  </div>
                </div>
              </td>
              
               <td>
                <div class="control-group">
                  <label class="control-label">Numero facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData1.numero_facture"
                    class="span"
                    
                  />
                </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                 <label class="control-label">Date de la facture</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData1.date_facture"
                   
                    class="span"
                   
                  />
                </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                   <label class="control-label">Unite administrative</label>
                <div class="controls">
                 <input
                    type="text"
                    :value="afficheLibelleUa(afficheUa_id(macheid))"
                   readonly
                    class="span"
                   
                  />
                </div>
                </div>
              </td>
             </tr>
               <tr>
               <td colspan="2">
                <div class="control-group">
                  <label class="control-label">Objet de la facture</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   :value="afficheObjetMarche(macheid)"
                    class="span"
                    
                  />
                </div>
                </div>
              </td>
              
               <td>
                <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData1.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
              </td>
              <td>
                 <div class="control-group">
                <label class="control-label">Fournisseur</label>
                <div class="controls">
                  <input
                    type="text"
                    :value="afficheNomFournisseur(AfficherFournisseur_id)"
                
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
                  <label class="control-label">Désignation</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData1.designation"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData1.designation2"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    
                    v-model="formData1.designation3"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    
                   v-model="formData1.designation4"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    
                    v-model="formData1.designation5"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    
                    v-model="formData1.designation6"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    
                    v-model="formData1.designation7"
                    class="span"
                    
                  />
                  <input
                    type="text"
                    
                    v-model="formData1.designation8"
                    class="span"
                    
                  />
                </div>
                </div>
              </td>
              
               <td>
                <div class="control-group">
                <label class="control-label">Prix unitaire</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire"
                    class="span"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire2"
                    class="span"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire3"
                    class="span"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire4"
                    class="span"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire5"
                    class="span"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire6"
                    class="span"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire7"
                    class="span"
                   
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.prix_unitaire8"
                    class="span"
                   
                  />
                 
                </div>
              </div>
              </td>
              <td>
                <div class="control-group">
                <label class="control-label">Quantité</label>
                <div class="controls">
                  <input
                    type="number"
                    
                  v-model="formData1.quantite"
                    class="span"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.quantite2"
                    class="span"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.quantite3"
                    class="span"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.quantite4"
                    class="span"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.quantite5"
                    class="span"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.quantite6"
                    class="span"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.quantite7"
                    class="span"
                    
                  />
                  <input
                    type="number"
                    
                  v-model="formData1.quantite8"
                    class="span"
                    
                  />
                </div>
              </div>
              </td>
               <td>
                   <div class="control-group">
                <label class="control-label">Total</label>
                <div class="controls">
                  <input
                    type="number"
                  :value="montantHT1"
                 
                    class="span"
                    readonly
                  />
                   <input
                    type="number"
                  :value="montantHT2"
                 
                    class="span"
                    readonly
                  />
                   <input
                    type="number"
                  :value="montantHT3"
                 
                    class="span"
                    readonly
                  />
                   <input
                    type="number"
                  
                 :value="montantHT4"
                    class="span"
                    readonly
                  />
                   <input
                    type="number"
                  :value="montantHT5"
                 
                    class="span"
                    readonly
                  />
                   <input
                    type="number"
                  
                 :value="montantHT6"
                    class="span"
                    readonly
                  />
                   <input
                    type="number"
                  
                 :value="montantHT7"
                    class="span"
                    readonly
                  />
                   <input
                    type="number"
                  
                 :value="montantHT8"
                    class="span"
                    readonly
                  />
                 
                      
                </div>
              </div>
               </td>
             </tr>
             <tr>
               <td colspan="3" style="text-align:right;color:red">Montant HT</td>
               <td>
                  <div class="control-group">
                
                <div class="controls">
                  <input
                  :value="totalMontantHT"
                    type="text"
                    class="span"
                    readonly
                  />
                  
                </div>
              </div>
               </td>
             </tr>
             <tr>
               <td colspan="3" style="text-align:right;color:red">Taux</td>
               <td>
                 <div class="control-group">
                
                <div class="controls">
                  <input
                    type="text"
                    :value="afficherEnorere"
                    class="span"
                    readonly
                  />
                  
                </div>
              </div>
               </td>
             </tr>
             <tr>
               <td colspan="3" style="text-align:right;color:red">TVA</td>
               <td>
                 <div class="control-group">
                
                <div class="controls">
                  <input
                    type="text"
                    :value="montantTva"
                    class="span"
                    readonly
                  />
                  
                </div>
              </div>
               </td>
             </tr>
             <tr>
               <td colspan="3" style="text-align:right;color:red">Montant TTC</td>
               <td>
                 <div class="control-group">
                
                <div class="controls">
                  <input
                    type="text"
                    :value="montantHTt"
                    class="span"
                    readonly
                  />
                  
                </div>
              </div>
               </td>
             </tr>
      </table>
      </div >
      <div class="modal-footer">
        <a
          @click.prevent="ajouterFactureLocal(formData1)"
          class="btn btn-primary"
          href="#"
           
        >Valider</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<div id="etatOpAnnulation" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Numero Op Annulation</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
                     
                        <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Numero Op Annulation</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editMandat.numero_op_annulation"/>
                            </div>
                          </div>
                       </td>
                       
                       </tr>  
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Etat Op </label>
                            <div class="controls">
                              <select v-model="editMandat.etat_op" class="span">
                                <option value="0"></option>
                              <option value="1">Annulé Op provisoire</option>
                              
                             
    
    </select>
                           
                            </div>
                          </div>
            </td>
              
          </tr>
           
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="changeEtatOpAnnulation(editMandat)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> 

                     <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                   <tr>

                                        <th>Année</th>
                                        <th>Num Op Provisoire</th>
                                        <th>Num Op Annulation</th>
                                         <th title="">Section</th>
                              
                                 
                                <th title="">N°facture</th>
                                 
                                  <!-- <th>Imputation</th> -->
                                <th>Montant</th>
                                <!-- <th>Service béneficiaire</th> -->
                                <th >Date béneficiaire</th>
                                <th title="Date validation Cf">Date validation CF</th>
                               <th> Etat OP Provisoire</th>
                                <!-- <th title="Observation Controleur financier">Observation CF</th> -->
                                <th colspan="">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="macheid">
                                     <tr
                    class="odd gradeX"
                    v-for="Manda in afficheOpProvisoirecf(macheid)"
                    :key="Manda.id"
                  >
        <td >{{Manda.exercice_budget || 'Non renseigné'}}</td>
        <td >{{Manda.numero_op_provisoire || 'Non renseigné'}}</td>
        <td >{{Manda.numero_op_annulation || 'Non renseigné'}}</td> 
                    <td >{{afficherSection(Manda.section_id) || 'Non renseigné'}}</td>
                   
                    <td >{{afficheNumeroFacture(Manda.facture_id) || 'Non renseigné'}}</td>
                     
                     
                    <!-- <td >{{detail_marche.imputation  || 'Non renseigné'}}</td> -->
                     <td >{{formatageSomme(parseFloat(Manda.total_general)) || 'Non renseigné'}}</td>
                     
                       <td >{{(formaterDate(Manda.date_decision_emetteur)) || 'Non renseigné'}}</td>
                   <td >{{formaterDate(Manda.date_motif) || 'Non renseigné'}}</td>
                   <td v-if="Manda.decision_cf == 8 || Manda.decision_cf == 9">

                       <button v-if="Manda.etat_op == 0"  class="btn  btn-success" @click="afficheDecisionCf(Manda.id)" >                        
                     
                      <span    >En Cours</span>
                      
                      </button>
                       <button v-else class="btn  btn-danger" @click="afficheDecisionCf(Manda.id)" >                        
                     
                      
                       <span  >Annuler</span>
                      
                    
                      </button>
                   </td>
                    <!-- <td>
                          <router-link :to="{ name: 'detailOpProvisoire', params: {id:Manda.id}}"
                class="btn btn-inverse " title="Detail Op Provisoire" >
                  <span class="" style="color:#fff">D.OP.Pro</span>
                   </router-link>
                     <router-link :to="{ name: 'detailOpAnnulation', params: {id:Manda.id}}"
                class="btn btn-danger " title="Detail Op Annulation" >
                  <span class="" style="color:#fff">D.OP.Annul</span>
                   </router-link>
                     
                      
                    </td> -->
                    <td v-if="Manda.etat_op == 1">
                       <!-- <router-link :to="{ name: 'AjouterServiceRealiteOpProvisoire', params: { id: Manda.id }} "
                class="btn btn-default " title="Facture Definitif">
                  <span class=""><i class="  icon-random"></i></span>
                   </router-link> -->
                    <button   class="btn  btn-success" @click="ModalFactureDefinitive(Manda.id)" title="Ajouter facture definitif">                        
                     
                      <span    >Ajouter Facture</span>
                      
                      </button>
                    </td>
                                     </tr>
               
                 
                                    </tbody>
                                </table>

              
     




  





<notifications/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../../Repositories/Repository';
import moment from 'moment';
export default {
   
    data(){
        return{
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData1:{},
       editMandat: {
        
       },

search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
                ...mapGetters('horSib', ['gettersopProvisoire']),
            ...mapGetters("bienService", ["typeMarches",'modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

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
    ...mapGetters("personnelUA", ["acte_personnels","fonctionBudgetaire","all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
     ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),
  afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
   anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
afficherEnorere(){
if(this.formData1.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}
},
AfficherFournisseur_id() {
      
      const norme = this.acteEffetFinanciers.find(normeEquipe => normeEquipe.marche_id == this.macheid);

      if (norme) {
        return norme.entreprise_id;
      }
      return 0
    },
     AffichierElementParent() {
      
      // return id => {
      //   if (id != null && id != "") {
          return this.plans_Decision.filter(element => this.RecupererNiveau3StructureDecision(element.structure_motif_decission_id) == 3);
      //   }
      // };
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
    
afficheObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    },

   
    RecupererNiveau3StructureDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structuresDecision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
    AffichierElementEnfant() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },
    afficherIdFoctionBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fonction_budgetaire_id;
      }
      return 'Non renseigné'
        }
      };
    },
     afficherLibelleFoctionBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctionBudgetaire.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 'Non renseigné'
        }
      };
    },
    afficheUAId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ua_id;
      }
      return 0
        }
      };
    },
     afficheIdActeurDepense() {
      return id => {
        if (id != null && id != "") {
           return this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.fonction_budgetaire_id != null);

        }
      };
    },
    afficherNomActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule.concat('    ', qtereel.acteur_depense.nom,'     ',qtereel.acteur_depense.prenom);
      }
      return 'Non renseigné'
        }
      };
    },
    afficheNomActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.fonction_budgetaire_id != null);

      if (qtereel) {
        return qtereel.acteur_depense_id;
      }
      return 0
        }
      };
    },
    afficheMontantEngagementServiceRealiteEtLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return 0
        }
      };
    },
    afficheNumeroFacture() {
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

afficheDateFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_facture;
      }
      return 0
        }
      };
    },

    afficheNomFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },
    afficheidFournisseurFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },
   afficherSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.code_section.concat('  ', qtereel.nom_section);
       
      }
      return 0
        }
      };
    },
       afficheOpProvisoirecf() {
      return id => {
        if (id != null && id != "") {
          return this.gettersopProvisoire.filter(
            element => element.marche_id == id  && this.afficherMarcheHorsSIb(element.marche_id)
          );
        }
      };
    },

    afficherMarcheHorsSIb() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.sib;
       
      }
      return 0
        }
      };
    },
//     afficheMarcheType(){
// if(this.afficheIdTypeMarche(this.EditServiceRealite.marche_id) == 5){
// return 1
// }
// else{
//   return 2
// }
// },
   montantHT1() {
      const val =  parseFloat(this.formData1.prix_unitaire) * parseFloat(this.formData1.quantite);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantHT2() {
      const val =  parseFloat(this.formData1.prix_unitaire2) * parseFloat(this.formData1.quantite2);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT3() {
      const val =  parseFloat(this.formData1.prix_unitaire3) * parseFloat(this.formData1.quantite3);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT4() {
      const val =  parseFloat(this.formData1.prix_unitaire4) * parseFloat(this.formData1.quantite4);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT5() {
      const val =  parseFloat(this.formData1.prix_unitaire5) * parseFloat(this.formData1.quantite5);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT6() {
      const val =  parseFloat(this.formData1.prix_unitaire6) * parseFloat(this.formData1.quantite6);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT7() {
      const val =  parseFloat(this.formData1.prix_unitaire7) * parseFloat(this.formData1.quantite7);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT8() {
      const val =  parseFloat(this.formData1.prix_unitaire8) * parseFloat(this.formData1.quantite8);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT9() {
      const val =  parseFloat(this.formData1.prix_unitaire9) * parseFloat(this.formData1.quantite9);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    montantHT10() {
      const val =  parseFloat(this.formData1.prix_unitaire10) * parseFloat(this.formData1.quantite10);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

 totalMontantHT() {
      const val =  parseFloat(this.montantHT1) + parseFloat(this.montantHT2)+ parseFloat(this.montantHT3)+ parseFloat(this.montantHT4)+ parseFloat(this.montantHT5)+ parseFloat(this.montantHT6)+ parseFloat(this.montantHT7)+ parseFloat(this.montantHT8)+ parseFloat(this.montantHT9)+ parseFloat(this.montantHT10);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },



affcherTauxEnCours() {
      
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
tauxArrondit() {
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.arrondit;
      }
      return 0
    },

montantTva() {
      const val =   parseFloat(this.totalMontantHT) * parseFloat(this.afficherEnorere);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


 montantHTt() {
      const val =    parseFloat(this.totalMontantHT) + parseFloat(this.montantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
afficheMarcheType(){
if(this.afficherLibelleTypeMarche(this.afficheridTypeMarche(this.macheid)) == "Travaux"){
return 1
}
else{
  return 2
}
},
afficheridTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return ""
        }
      };
    },
    afficherLibelleTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
    afficherTypeFactureProforma() {
               
                        return  this.typeFactures.filter(normeEquipe => normeEquipe.code == 2);
                       
                 
            },
      },
 
      methods:{ 
...mapActions("horSib", ['ajouterRealiteServiceHors','modifierOpProvisoire','supprimerRealiteServiceHors']),
   ...mapActions("bienService", [
                
                "ajouterMandat",
                
                "supprimerMandat",
               "ajouterFacture",
      
     
               
            ]),
       afficheDecisionCf(id) {
      this.$("#etatOpAnnulation").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editMandat = this.afficheOpProvisoirecf(this.macheid).find(item=>item.id==id);
    },
      ModalFactureDefinitive(id) {
      this.$("#modatFactureAjouteDefinitif").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editMandat = this.afficheOpProvisoirecf(this.macheid).find(item=>item.id==id);
    },
// afficherModalObservationServiceBeneficiaire(id) {
//       this.$("#DecisionServiceBeneficiaire").modal({
//         backdrop: "static",
//         keyboard: false
//       });

//        this.EditServiceRealite = this.gettersopProvisoire.find(item=>item.id==id);
//     },

     afficherModalAjouterTitre() {
      this.$("#exampleModalAvenant").modal({
        backdrop: "static",
        keyboard: false
      });
    },
       ajouterTypeTexteLocal() {
      var nouvelObjet = {
      ...this.formData,
      marche_id :this.macheid,
   
       };
      this.ajouterAvenant(nouvelObjet);
this.$("#exampleModalAvenant").modal('hide');
     
    },

    modifierTypeTexteLocal() {
      var nouvelObjet = {
      ...this.editAvenant,
      marche_id :this.macheid,
   
       };
      this.modifierAvenant(nouvelObjet);
this.$("#modificationModalAvenant").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },


              changeEtatOpAnnulation() {
     

 var nouvelObjet = {
      ...this.editMandat,
     	exercice_budget :this.editMandat.exercice_budget,
       
         marche_id : this.editMandat.marche_id,
       
      	
        facture_id:this.editMandat.facture_id,
       
 total_general :this.editMandat.total_general,

  ua_id:this.editMandat.ua_id,
 
section_id:this.afficherSectId,

  marchetype:this.editMandat.marchetype,
 
       };
 this.modifierOpProvisoire(nouvelObjet);
this.$("#etatOpAnnulation").modal('hide');

          this.editMandat={
                  numero_bon_manuel:"",
numero_demande:"",
	exo_id:"",
  	imputation_budgetaire:"",
    section_id:"",
    	programme_id:"",
      action_id:"",
      activite_id:"",
      	ua_id:"",
        nature_depense_id:"",
        plan_budgetaire_id:"",
        marche_id:"",
        mode_paiement_id:"",
        fournisseur_id:"",
        	egagement_id:"",
          decision_emetteur:"",
          nom_emetteur:""
                };

      
       
    },
ajouterFactureLocal(){

var nouvelObjet = {
      ...this.formData1,
    fournisseur_id: this.AfficherFournisseur_id,
       	prix_propose_ht :this.totalMontantHT,
        prix_propose_ttc :this.montantHTt,
         taux :this.affcherTauxEnCours,
         tva :this.montantTva,
          	ua :this.afficheUa_id(this.macheid),
    marche_id : this.macheid,
    objet_facture:this.afficheObjetMarche(this.macheid),
      // typeordrepaiement:this.typeOrdrePaiement(this.macheid),
      marchetype:this.afficheMarcheType,
      etat_type_facture:1
       };
      // var objetDecompte = {
      //   numero_decompte:this.numeroDecompte,
      //   marche_id : this.macheid,
      //   typeProcedure:this.typeOrdrePaiement(this.macheid)
      // }
this.ajouterFacture(nouvelObjet)

this.$("#modatFactureAjouter").modal('hide');
this.formData1= {
total:0,
total2:0,
total3:0,
total4:0,
total5:0,
total6:0,
total7:0,
total8:0,
total9:0,
total10:0,
       
numero_facture:"",
        objet_facture:"",
       
      
        
        typfacture_id:"",
           prix_propose_ht:"",
        prix_propose_ttc:"",
         date_facture:"",
         ua:"",
           tva:"",
           taux:"",

            designation:"",

 prix_unitaire:"",
         quantite:"",
           montantHT1:"",
           designation2:"",
            prix_unitaire2:"",
             quantite2:"",
         montantHT2:"",
           designation3:"",
           prix_unitaire3:"",
            quantite3:"",
             montantHT3:"",

 designation4:"",
           prix_unitaire4:"",
            quantite4:"",
             montantHT4:"",
              designation5:"",
           prix_unitaire5:"",
            quantite5:"",
             montantHT5:"",
              designation6:"",
           prix_unitaire6:"",
            quantite6:"",
             montantHT6:"",
              designation7:"",
           prix_unitaire7:"",
            quantite7:"",
             montantHT7:"",
              designation8:"",
           prix_unitaire8:"",
            quantite8:"",
             montantHT8:"",
              designation9:"",
           prix_unitaire9:"",
            quantite9:"",
             montantHT9:"",

 designation10:"",
           prix_unitaire10:"",
            quantite10:"",
             montantHT10:"",
 fournisseur_id:"",
 exonere:"",
       

        
      
};
       
       

    },

      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
.taillemodal45 {
        width: 1500px;
        margin: 0 -750px;
      
    }
</style>
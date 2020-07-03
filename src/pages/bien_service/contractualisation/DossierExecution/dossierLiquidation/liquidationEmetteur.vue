afficheIdActeurDepense

<template>

<div>

           <div id="exampleModalMotifLiquidationEmetteur" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Décision Emetteur</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <!-- <td colspan="2">
               <div class="control-group">
                            <label class="control-label">Décision Emetteur </label>
                            <div class="controls">
                              <select v-model="editLiquidation.decision_emetteur" class="span">
                                <option value="0">Attente</option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            
    
    </select>
                           
                            </div>
                          </div>
            </td>
             
          </tr> -->
        
               <tr>
                <td >
                    <div class="control-group">
                            <label class="control-label">Observation Emetteur</label>
                            <div class="controls">
                              <textarea  class="span" row = "2" v-model="editLiquidation.observation_emetteur">
                              </textarea>
                            </div>
                          </div>
                 </td>
                 <td >
                       <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editLiquidation.date_emetteur"/>
                             
                            </div>
                          </div>
                       </td>
                 
                 </tr>            
                  
                       <tr>
                 <td >
                    <div class="control-group">
                            <label class="control-label">Nom et prenoms </label>
                            <div class="controls">
                              <select v-model="editLiquidation.nom_emetteur" class="span">
                                <option v-for="acteur in afficheIdActeurDepense(afficheUAId(this.editLiquidation.marche_id))"  :key="acteur.id"
                        :value="acteur.id">{{afficherNomActeurDepense(acteur.acteur_depense_id)}}</option>
                               </select>
                           
                            </div>
                          </div>
                 </td>
                  <td>
                                  <div class="control-group">
                            <label class="control-label">Fonction</label>
                            <div class="controls">
                              <input type="text" class="span" readonly :value=" afficherLibelleFoctionBudgetaire(afficherIdFoctionBudgetaire(editLiquidation.nom_emetteur))"/>
                             
                            </div>
                          </div>
                           </td>
                 </tr>             
                        
                           
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="fonctionModifierLiquidation(editLiquidation)"
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
                                          <th title="">N°bon manuel</th>
                                <th title="">N°demande</th>
                           
                                <!-- <th title="">Adresse fournisseur</th> -->
                               
                                <th title="">Montant Autorisé</th>
                                
                                  <th title="">Disponible</th>
                                  <!-- <th>Date paiement</th> -->
                                  <th>Imputation</th>
                                
                                <!-- <th>Service béneficiaire</th> -->
                                <th >Date validation Emmetteur</th>
                                
                               
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     <tr
                    class="odd gradeX"
                    v-for="liquida in afficheLiquidationEmetteur(macheid)"
                    :key="liquida.id"
                  >
       <td >{{liquida.exo_id || 'Non renseigné'}}</td>
                    <td >{{liquida.numero_bon_manuel || 'Non renseigné'}}</td>
                    <td >{{liquida.numero_demande || 'Non renseigné'}}</td>
                    <td >{{formatageSomme(parseFloat(afficheMontantAutorise(liquida.marche_id))) || 0}}</td>
                     <td >{{formatageSomme(parseFloat(sommeEgagementLigne(liquida.marche_id))) || 0 }}</td> 
                     
                     
                    <td >{{liquida.imputation_budgetaire || 'Non renseigné'}}</td>
                   <td >{{(formaterDate(liquida.date_emetteur)) || 'Non renseigné'}}</td>
                     <!-- <td>
                        <button v-if="liquida.decision_emetteur == 1"  class="btn  btn-success" @click="afficherModalObservationEmetteurLiquidation(liquida.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="liquida.decision_emetteur == 2" class="btn  btn-warning" @click="afficherModalObservationEmetteurLiquidation(liquida.id)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="liquida.decision_emetteur == 3" class="btn  btn-danger" @click="afficherModalObservationEmetteurLiquidation(liquida.id)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationEmetteurLiquidation(liquida.id)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td> -->
                    <td>
                       <button  class="btn  btn-success" @click="afficherModalObservationEmetteurLiquidation(liquida.id)">
                        <span>
                          <i class="icon icon-ok"></i>
                        </span>
                      </button>
                         <button class="btn btn-danger"  @click="supprimerLiquidation(liquida.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                    
                                     </tr>
               
                 
                                    </tbody>
                                </table>

              
     




  






    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from './../../../../../Repositories/Repository';
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
   
       editLiquidation: {},
search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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
    ...mapGetters("personnelUA", ["fonctionBudgetaire","personnaFonction","all_acteur_depense","personnaliseActeurDepense","acteur_depenses","acte_personnels"]),
    
   
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
      afficheIdActeurDepense() {
      return id => {
        if (id != null && id != "") {
           return this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.fonction_budgetaire_id != null);

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
       afficheLiquidationEmetteur() {
      return id => {
        if (id != null && id != "") {
          return this.liquidation.filter(
            element => element.marche_id == id  
          );
        }
      };
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
   afficheMontantAutorise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.total_general;
      }
      return 0
        }
      };
    },
    afficheProgrammeId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.programme_id;
      }
      return 0
        }
      };
    },
    afficheActionId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.action_id;
      }
      return 0
        }
      };
    },
    afficheActiviteId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.activite_id;
      }
      return 0
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
    afficheGrandNatureId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.gdenature_id;
      }
      return 0
        }
      };
    },
    afficheImputationBudget() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return 0
        }
      };
    },
 affichePlanEconomiqueId() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id );

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
    afficheIdModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.mod_paiement_engage;
      }
      return 0
        }
      };
    },
    afficheIdFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.fournisseur_id;
      }
      return 0
        }
      };
    },
    afficheIdEngagement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
      },
 
      methods:{ 

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",]),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
      "modifierLiquidation",
                "supprimerLiquidation"
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),


             fonctionModifierLiquidation() {
     

//                   if (this.editLiquidation.numero_bon_manuel ==""){
// alert("Veuillez saisir le numrero du Bon")
//       }
//       else if (this.editLiquidation.numero_demande =="")
//       {
//         alert("Veuillez saisir le numrero de la demande")
//       }
    
//       else
//       {
 var nouvelObjet = {
      ...this.editLiquidation,
      exo_id :this.editLiquidation.exo_id,
       	imputation_budgetaire :this.afficheImputationBudget(this.editLiquidation.marche_id),
        	section_id :this.editLiquidation.section_id,
         programme_id :this.afficheProgrammeId(this.editLiquidation.marche_id),
        
         action_id :this.afficheActionId(this.editLiquidation.marche_id),
         activite_id : this.afficheActiviteId(this.editLiquidation.marche_id),
         ua_id: this.afficheUAId(this.editLiquidation.marche_id),
         nature_depense_id:this.afficheGrandNatureId(this.editLiquidation.marche_id),
       plan_budgetaire_id:this.affichePlanEconomiqueId(this.editLiquidation.marche_id),
     
        marche_id:this.editLiquidation.marche_id,
        mode_paiement_id:this.afficheIdModePaiement(this.editLiquidation.marche_id),
fournisseur_id:this.afficheIdFournisseur(this.editLiquidation.marche_id),
egagement_id:this.afficheIdEngagement(this.editLiquidation.marche_id),
marchetype:this.editLiquidation.marchetype
 
       };
 this.modifierLiquidation(nouvelObjet);
this.$("#exampleModalMotifLiquidationEmetteur").modal('hide');

          this.editLiquidation={
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
afficherModalObservationEmetteurLiquidation(id) {
      this.$("#exampleModalMotifLiquidationEmetteur").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editLiquidation = this.liquidation.find(item=>item.id==id);
    },

  
formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
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
</style>
afficheIdActeurDepense
detail_marche
<template>

<div>

  
         <div id="DecisionServiceBeneficiaire" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Décision Chef de service</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <!-- <tr>
            <td colspan="2">
               <div class="control-group">
                            <label class="control-label">Décision Chef de service </label>
                            <div class="controls">
                              <select v-model="EditServiceRealite.decision_service_beneficiaire" class="span">
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
                            <label class="control-label">Observation Chef de service</label>
                            <div class="controls">
                              <textarea  class="span" row = "2" v-model="EditServiceRealite.observation_service_beneficiaire">
                              </textarea>
                            </div>
                          </div>
                 </td>
                 <td >
                       <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="EditServiceRealite.date_service_beneficiaire"/>
                             
                            </div>
                          </div>
                       </td>
                 
                 </tr>            
                  
                       <tr>
                 <td >
                    <div class="control-group">
                            <label class="control-label">Nom et prénoms </label>
                            <div class="controls">
                              <select v-model="EditServiceRealite.nom_service_beneficiaire" class="span">
                                <option v-for="acteur in afficheIdActeurDepense(afficheUAId(this.EditServiceRealite.marche_id))"  :key="acteur.id"
                        :value="acteur.id">{{afficherNomActeurDepense(acteur.acteur_depense_id)}}</option>
                               </select>
                           
                            </div>
                          </div>
                 </td>
                  <td>
                                  <div class="control-group">
                            <label class="control-label">Fonction</label>
                            <div class="controls">
                              <input type="text" class="span" readonly :value=" afficherLibelleFoctionBudgetaire(afficherIdFoctionBudgetaire(EditServiceRealite.nom_service_beneficiaire))"/>
                             
                            </div>
                          </div>
                           </td>
                 </tr>             
                        
                           
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="FonctionDeModificationServiceRealite(EditServiceRealite)"
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
                                         <th title="">Section</th>
                              
                                 <th title="">Fournisseur</th>
                                <th title="">N°facture</th>
                                 <th>Date facture</th>
                                  <!-- <th>Imputation</th> -->
                                <th>Montant</th>
                                <!-- <th>Service béneficiaire</th> -->
                                <th title="Observation service beneficiaire">Date validation</th>
                                <!-- <th title="Observation Controleur financier">Observation CF</th> -->
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     <tr
                    class="odd gradeX"
                    v-for="realiteService in afficheServiceRealiteFait(macheid)"
                    :key="realiteService.id"
                  >
        <td >{{realiteService.exercice_budget || 'Non renseigné'}}</td>
                    <td >{{afficherSection(realiteService.section_id) || 'Non renseigné'}}</td>
                    <td >{{afficheNomFournisseur(afficheidFournisseurFacture(realiteService.facture_id)) || 'Non renseigné'}}</td>
                    <td >{{afficheNumeroFacture(realiteService.facture_id) || 'Non renseigné'}}</td>
                     <td >{{afficheDateFacture(realiteService.facture_id) || 'Non renseigné'}}</td> 
                     
                    <!-- <td >{{detail_marche.imputation  || 'Non renseigné'}}</td> -->
                     <td >{{formatageSomme(parseFloat(realiteService.montant)) || 'Non renseigné'}}</td>
                     
                       <td >{{(formaterDate(realiteService.date_service_beneficiaire)) || 'Non renseigné'}}</td>
                     <!-- <td>
                        <button v-if="realiteService.decision_service_beneficiaire == 1"  class="btn  btn-success" @click="afficherModalObservationServiceBeneficiaire(realiteService.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_service_beneficiaire == 2" class="btn  btn-warning" @click="afficherModalObservationServiceBeneficiaire(realiteService.id)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_service_beneficiaire == 3" class="btn  btn-rr" @click="afficherModalObservationServiceBeneficiaire(realiteService.id)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationServiceBeneficiaire(realiteService.id)" >                        
                     
                      
                       <span  >Attente</span>
                      
                      
                    
                      </button>
                    </td> -->
                    <td>
                      <button  class="btn  btn-danger" v-if="realiteService.decision_service_beneficiaire == 0" @click="afficherModalObservationServiceBeneficiaire(realiteService.id)">
                        <span>
                          <i class="icon icon-ok"></i>
                        </span>
                      </button>
                      <button  v-else  class="btn  btn-success" @click="afficherModalObservationServiceBeneficiaire(realiteService.id)">
                        <span>
                          <i class="icon icon-ok"></i>
                        </span>
                      </button>
                        <router-link :to="{ name: 'detailRealiteServiceFait', params: {id_detailRealiteServiceFait:realiteService.id}}"
                class="btn btn-default " title="Detail Realite service fait">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                    <!-- <button v-if="realiteService.decision_controleur_financier == 1 && validationDeEngagement(realiteService.marche_id) == 1" class="btn " @click="afficherModalAjouterLiquidation(index)" title="Ajouter Liquidatation">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <!-- <button v-if="Engage.decision_cf == 1" class="btn " @click="afficherModalAjouterMandat(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <button  class="btn btn-rr" @click="supprimerRealiteServiceFait(realiteService.id)">
                        <!-- <span>
                          <i class="icon icon-trash"></i>
                        </span> -->
                         <span class=""><i class="icon-trash"></i>Supprimer</span>
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
      
       EditServiceRealite: {
         decision_service_beneficiaire : 1
       },
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
       afficheServiceRealiteFait() {
      return id => {
        if (id != null && id != "") {
          return this.realiteServiceFait.filter(
            element => element.marche_id == id  
          );
        }
      };
    },
    afficheMarcheType(){
if(this.afficheIdTypeMarche(this.EditServiceRealite.marche_id) == 5){
return 1
}
else{
  return 2
}
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
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),
   ...mapActions("uniteadministrative", [              
                "modifierMontantBudgetaire",
                "ajouterRealiteServiceFait",
                "modifierRealiteServiceFait",
                "ajouterLiquidation",
                "modifierLiquidation",
                "supprimerLiquidation",
                "supprimerRealiteServiceFait"
            ]),

afficherModalObservationServiceBeneficiaire(id) {
      this.$("#DecisionServiceBeneficiaire").modal({
        backdrop: "static",
        keyboard: false
      });

       this.EditServiceRealite = this.realiteServiceFait.find(item=>item.id==id);
    },

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


              FonctionDeModificationServiceRealite() {
     

 var nouvelObjet = {
      ...this.EditServiceRealite,
     exercice_budget :this.EditServiceRealite.exercice_budget,
       
         marche_id : this.EditServiceRealite.marche_id,
       
      	
        facture_id:this.EditServiceRealite.facture_id,
       
 montant :this.EditServiceRealite.montant,

  ua_id:this.EditServiceRealite.ua_id,
  


section_id:this.afficherSectId,
// id:this.afficherIdRealiteServiceFait(this.EditServiceRealite.marche_id),
  engagement_id:this.EditServiceRealite.id,
  marchetype:this.EditServiceRealite.marchetype,
  decision_service_beneficiaire:1
       };
 this.modifierRealiteServiceFait(nouvelObjet);
this.$("#DecisionServiceBeneficiaire").modal('hide');

          this.EditServiceRealite={
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
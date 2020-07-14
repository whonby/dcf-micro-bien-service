

<template>

<div class="container-fluid">
<div id="decisionServiceRealite" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editServiceRealite.decision_controleur_financier" class="span">
                                <option value=""></option>
                              <option value="1">Visé</option>
                              <option value="9">Visé avec Observation</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
                            <option value="0">Attente</option>
    
    </select>
                           
                            </div>
                          </div>
            </td>
             <td>
                    <div class="control-group">
                            <label class="control-label">Motif CF </label>
                            <div class="controls">
                               <select v-model="editServiceRealite.motifcf" class="span">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementParent" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
          </tr>
               <tr>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Libelle motif </label>
                            <div class="controls">
                               <select v-model="editServiceRealite.motif_controleur" class="span">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementEnfant(editServiceRealite.motifcf)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editServiceRealite.date_controleur_financier"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           </td>
                 </tr>            
                   <tr>
                     <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span6" row = "6" v-model="editServiceRealite.observation_controleur_financier">
                              </textarea>
                            </div>
                          </div>
                       </td>
                        <td colspan="">
                        <div class="control-group">
                            <label class="control-label">Nom du CF</label>
                            <div class="controls">
                              <input type="text" class="span6"  :value="afficheNomUtilisateur" readonly/>
                            </div>
                          </div>
                       </td>
                       </tr>      
                         
                           
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="FonctionDeModificationServiceRealite(editServiceRealite)"
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
                                <th title="Date validation du service beneficiaire">Date validation S-B</th>
                                <th title="Date validation du CF">Date validation CF</th>
                                <th title="Observation Controleur financier">Observation CF</th>
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
                     <!-- <td>
                        <button v-if="realiteService.decision_service_beneficiaire == 1"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_service_beneficiaire == 2" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_service_beneficiaire == 3" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td> -->
                     <td >{{(formaterDate(realiteService.date_service_beneficiaire)) || 'Non renseigné'}}</td>
                      <td >{{(formaterDate(realiteService.date_controleur_financier)) || 'Non renseigné'}}</td>
                    <td >
                        <button v-if="realiteService.decision_controleur_financier == 1"  class="btn  btn-success" @click="afficherModalObservationControlleurFinancier(realiteService.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_controleur_financier == 2" class="btn  btn-warning" @click="afficherModalObservationControlleurFinancier(realiteService.id)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_controleur_financier == 3" class="btn  btn-danger" @click="afficherModalObservationControlleurFinancier(realiteService.id)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationControlleurFinancier(realiteService.id)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                      
                    </td>
                    <td>
                        <router-link :to="{ name: 'detailRealiteServiceFait', params: {id_detailRealiteServiceFait:realiteService.id}}"
                class="btn btn-default " title="Detail Realite service fait">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                   
                      <button  class="btn btn-danger" @click="supprimerRealiteServiceFait(realiteService.id)">
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
    
       editServiceRealite: {},
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
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
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
    affichierIdPlanDecission() {
      const qtereel = this.plans_Decision.find(
        qtreel => qtreel.code == "11",
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

// AffichierElementParent() {
      
//       return id => {
//         if (id != null && id != "") {
//           return this.plans_Decision.filter(element => element.parent == id);
//         }
//       };
//     },
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
   AffichierElementParent() {
      
      // return id => {
      //   if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.code == 11 || element.code == 12 || element.code == 13 || element.code == 14 || element.code == 15 || element.code == 16 || element.code == 17 || element.code == 18 || element.code == 19 || element.code == 20);
      //   }
      // };
    },
AffichierElementEnfant() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
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
   FonctionDeModificationServiceRealite() {
     

 var nouvelObjet = {
      ...this.editServiceRealite,
     exercice_budget :this.editServiceRealite.exercice_budget,
       
         marche_id : this.editServiceRealite.marche_id,
       
      	
        facture_id:this.editServiceRealite.facture_id,
       
 montant :this.editServiceRealite.montant,

  ua_id:this.editServiceRealite.ua_id,
  

section_id:this.afficherSectId,
// id:this.afficherIdRealiteServiceFait(this.editServiceRealite.marche_id),
  engagement_id:this.editServiceRealite.id,
  marchetype:this.editServiceRealite.marchetype
       };
 this.modifierRealiteServiceFait(nouvelObjet);
this.$("#decisionServiceRealite").modal('hide');

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
afficherModalObservationControlleurFinancier(id) {
      this.$("#decisionServiceRealite").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editServiceRealite = this.realiteServiceFait.find(item=>item.id==id);
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
afficherModalModifierTypeTexte(index) {

      this.$("#modificationModalAvenant").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editAvenant = this.afficheMarcheAvenant(this.macheid)[index];
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
  width: 50%;
  margin: 0 -25%;
}
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
</style>
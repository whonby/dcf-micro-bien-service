RecupererNiveau3StructureDecision
<template>

<div>

  
         <div id="ObservationCFRealiteService" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>DECISION CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                            <label class="control-label">Décision CF </label>
                            <div class="controls">
                              <select v-model="editObservationCfServiceFait.decision_cf_service_real" class="span">
                                <option value=""></option>
                              <option value="8">Visé</option>
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
                            <label class="control-label">Famille de Motif  </label>
                            <div class="controls">
                               <select v-model="editObservationCfServiceFait2.motifcf" class="span">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementParent" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Motif </label>
                            <div class="controls">
                               <select v-model="editObservationCfServiceFait.motif_cf_serviceRealite" class="span">
                                 <option value=""></option>
                                <option v-for="varText in AffichierElementEnfant(editObservationCfServiceFait2.motifcf)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
          </tr>
               <tr>
                  <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Autres Motif</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editObservationCfServiceFait.autre_motif" :readonly="griserAutreMotif">
                              </textarea>
                            </div>
                          </div>
                       </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editObservationCfServiceFait.date_cf_service_real"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           </td>
                 </tr>             
                   <tr>
                     <td colspan="3">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editObservationCfServiceFait.obsevationcf_service_real">
                              </textarea>
                            </div>
                          </div>
                       </td>
                     
                       </tr> 
                       <tr>     
                        <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Nom et prenoms de l'Agent connecté</label>
                            <div class="controls">
                              <input type="text" class="span"  :value="afficheNomUtilisateur" readonly/>
                            </div>
                          </div>
                       </td>
                       <td>
                                  <div class="control-group">
                            <label class="control-label">Joint Fiche réalité service fait </label>
                            <div class="controls">
                              <!-- <input type="text" class="span" readonly :value=" afficherLibelleFoctionBudgetaire(afficherIdFoctionBudgetaire(editObservationAgentCf.nom_service_beneficiaire))"/>
                              -->
                              <input type="file" class="span" />
                             
                            </div>
                          </div>
                           </td>
                          
                       </tr>  
                           
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="FonctionDeModificationServiceRealite(editObservationCfServiceFait)"
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
                                        <th>UA</th>
                                         <th title="">Objet depense</th>
                              
                                 <th title="">Fournisseur</th>
                                 <!-- <th title="">Adresse</th> -->
                                <th title="">N°facture</th>
                                 <th>Date facture</th>
                                  <!-- <th>Imputation</th> -->
                                <th>Montant</th>
                                <!-- <th>Service béneficiaire</th> -->
                                <th >Date validation SB</th>
                                <th >Date décision CF</th>
                                <!-- <th >Observation CF</th> -->
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     <tr
                    class="odd gradeX"
                    v-for="realiteService in afficheServiceReaiteFaitCf(macheid)"
                    :key="realiteService.id"
                  >
        <td >{{realiteService.exercice_budget || 'Non renseigné'}}</td>
         <td >{{LIBELLEUA(realiteService.ua_id) || 'Non renseigné'}}</td>
                    <td >{{afficheObjetfacture(realiteService.facture_id) || 'Non renseigné'}}</td>
                    <td >{{afficheNomFournisseur(afficheidFournisseurFacture(realiteService.facture_id)) || 'Non renseigné'}}</td>
                    <td >{{afficheNumeroFacture(realiteService.facture_id) || 'Non renseigné'}}</td>
                     <td >{{formaterDate(afficheDateFacture(realiteService.facture_id)) || 'Non renseigné'}}</td> 
                     
                    <!-- <td >{{detail_marche.imputation  || 'Non renseigné'}}</td> -->
                     <td >{{formatageSomme(parseFloat(realiteService.total_general)) || 'Non renseigné'}}</td>
                     
                       <td >{{(formaterDate(realiteService.date_sb_service_real)) || 'Non renseigné'}}</td>
                    <td >{{formaterDate(realiteService.date_cf_service_real) || 'Non renseigné'}}</td>
                    <!-- <td >{{realiteService.motif_cf_serviceRealite || 'Non renseigné'}}</td> -->
                     <td>
                        <button v-if="realiteService.decision_cf_service_real == 8"  class="btn  btn-success" @click="afficherModalObservationCF(realiteService.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="realiteService.decision_cf_service_real == 2" class="btn  btn-warning" @click="afficherModalObservationCF(realiteService.id)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="realiteService.decision_cf_service_real == 3" class="btn  btn-danger" @click="afficherModalObservationCF(realiteService.id)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                       <button v-else-if="realiteService.decision_cf_service_real == 9"  class="btn  btn-success" @click="afficherModalObservationCF(realiteService.id)" >                        
                     
                      <span title="Visé avec observation">Visé O</span>
                      
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalObservationCF(realiteService.id)" >                        
                     
                      
                       <span>Attente</span>
                      
                    
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
import { formatageSomme } from './../../../../../Repositories/Repository';
import moment from 'moment';
export default {
  watch: {
  },
   
    data(){
        return{
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      
       editObservationCfServiceFait2: {
         motifcf : ""
       },
        editObservationCfServiceFait: {
         
       },
search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
                ...mapGetters('horSib', ['gettersopProvisoire']),
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
      ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision','plans_Decision']),

griserAutreMotif(){
  return this.editObservationCfServiceFait.motif_cf_serviceRealite != 237 
},
      afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

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
     AffichierElementParent() {
      
          return this.plans_Decision.filter(element => this.RecupererNiveau3StructureDecision(element.structure_motif_decission_id) == 3);
     
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
    LIBELLEUA() {
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
   afficheObjetfacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
         return qtereel.objet_facture;
       
      }
      return 0
        }
      };
    },
       afficheServiceReaiteFaitCf() {
      return id => {
        if (id != null && id != "") {
          return this.mandats.filter(element => element.marche_id == id && element.etat_srf == 0
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
    afficheMarcheType(){
if(this.afficheIdTypeMarche(this.editObservationCfServiceFait.marche_id) == 5){
return 1
}
else{
  return 2
}
},
   
      },
 
      methods:{ 

   ...mapActions("bienService", [
                
                "ajouterMandat",
                "modifierMandat",
                "supprimerMandat",
               
      
     
               
            ]),
       
afficherModalObservationCF(id) {
      this.$("#ObservationCFRealiteService").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editObservationCfServiceFait = this.afficheServiceReaiteFaitCf(this.macheid).find(item=>item.id==id);
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
      ...this.editObservationCfServiceFait,
     	
  	
       };
 this.modifierMandat(nouvelObjet);
this.$("#ObservationCFRealiteService").modal('hide');

          this.editObservationCfServiceFait={
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
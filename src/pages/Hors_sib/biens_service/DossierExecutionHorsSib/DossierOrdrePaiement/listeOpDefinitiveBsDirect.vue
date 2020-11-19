
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
                              <select v-model="editOpDefinitif.decision_service_beneficiaire" class="span">
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
                              <textarea  class="span" row = "2" v-model="editOpDefinitif.observation_emetteur">
                              </textarea>
                            </div>
                          </div>
                 </td>
                 <td >
                       <div class="control-group">
                            <label class="control-label">Date Observation:</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editOpDefinitif.date_decision_emetteur"/>
                             
                            </div>
                          </div>
                       </td>
                 
                 </tr>            
                  
                       <tr>
                 <td >
                    <div class="control-group">
                            <label class="control-label">Nom et prenoms </label>
                            <div class="controls">
                              <select v-model="editOpDefinitif.nom_emetteur" class="span">
                                <option v-for="acteur in afficheIdActeurDepense(afficheUAId(this.editOpDefinitif.marche_id))"  :key="acteur.id"
                        :value="acteur.id">{{afficherNomActeurDepense(acteur.acteur_depense_id)}}</option>
                               </select>
                           
                            </div>
                          </div>
                 </td>
                  <td>
                                  <div class="control-group">
                            <label class="control-label">Fonction</label>
                            <div class="controls">
                              <input type="text" class="span" readonly :value=" afficherLibelleFoctionBudgetaire(afficherIdFoctionBudgetaire(editOpDefinitif.nom_service_beneficiaire))"/>
                             
                            </div>
                          </div>
                           </td>
                 </tr>             
                        
                           
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="FonctionDeModificationServiceRealite(editOpDefinitif)"
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
                                        <th>Num Op Definitif</th>
                                         <th title="">Section</th>
                              
                                 <th title="">Fournisseur</th>
                                <th title="">N°facture</th>
                                 <th>Date facture</th>
                                  <!-- <th>Imputation</th> -->
                                <th>Montant</th>
                                <!-- <th>Service béneficiaire</th> -->
                                <th >Date validation</th>
                                <!-- <th title="Observation Controleur financier">Observation CF</th> -->
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     <tr
                    class="odd gradeX"
                    v-for="realiteService in afficheOpDefinitiveBs(macheid)"
                    :key="realiteService.id"
                  >
        <td >{{realiteService.exercice_budget || 'Non renseigné'}}</td>
         <td >{{realiteService.numero_op_definitif || 'Non renseigné'}}</td>
                    <td >{{afficherSection(realiteService.section_id) || 'Non renseigné'}}</td>
                    <td >{{afficheNomFournisseur(afficheidFournisseurFacture(realiteService.facture_id)) || 'Non renseigné'}}</td>
                    <td >{{afficheNumeroFacture(realiteService.facture_id) || 'Non renseigné'}}</td>
                     <td >{{afficheDateFacture(realiteService.facture_id) || 'Non renseigné'}}</td> 
                     
                    <!-- <td >{{detail_marche.imputation  || 'Non renseigné'}}</td> -->
                     <td >{{formatageSomme(parseFloat(realiteService.total_general)) || 'Non renseigné'}}</td>
                     
                       <td >{{(formaterDate(realiteService.date_decision_emetteur)) || 'Non renseigné'}}</td>
                    
                    <td>
                      <button  class="btn  btn-danger" v-if="realiteService.decision_emetteur == 0" @click="afficherModalObservationServiceBeneficiaire(realiteService.id)">
                        <span>
                          <i class="icon icon-ok"></i>
                        </span>
                      </button>
                      <button  v-else  class="btn  btn-success" @click="afficherModalObservationServiceBeneficiaire(realiteService.id)">
                        <span>
                          <i class="icon icon-ok"></i>
                        </span>
                      </button>
                       
                      <button  class="btn btn-danger" @click="supprimerMandat(realiteService.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
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
      
       editOpDefinitif: {
         decision_emetteur : 1
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
       afficheOpDefinitiveBs() {
      return id => {
        if (id != null && id != "") {
          return this.mandats.filter(
            element => element.marche_id == id && element.etat_op_def == 0
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
if(this.afficheIdTypeMarche(this.editOpDefinitif.marche_id) == 5){
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
       
afficherModalObservationServiceBeneficiaire(id) {
      this.$("#DecisionServiceBeneficiaire").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editOpDefinitif = this.afficheOpDefinitiveBs(this.macheid).find(item=>item.id==id);
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
      ...this.editOpDefinitif,
     	exercice_budget :this.editOpDefinitif.exercice_budget,
       
         marche_id : this.editOpDefinitif.marche_id,
       
      	
        facture_id:this.editOpDefinitif.facture_id,
       
 total_general :this.editOpDefinitif.total_general,

  ua_id:this.editOpDefinitif.ua_id,
  


section_id:this.afficherSectId,
// id:this.afficherIdRealiteServiceFait(this.editOpDefinitif.marche_id),
  // engagement_id:this.editOpDefinitif.id,
  marchetype:this.editOpDefinitif.marchetype,
  decision_emetteur:1
       };
 this.modifierMandat(nouvelObjet);
this.$("#DecisionServiceBeneficiaire").modal('hide');

          this.editOpDefinitif={
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
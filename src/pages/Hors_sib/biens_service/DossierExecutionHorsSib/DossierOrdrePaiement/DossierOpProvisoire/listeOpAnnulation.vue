
<template>

<div>
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
                                <th colspan="2">Action</th>
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
                    <td>
                          <router-link :to="{ name: 'detailOpProvisoire', params: {id:Manda.id}}"
                class="btn btn-inverse " title="Detail Op Provisoire" >
                  <span class="" style="color:#fff">D.OP.Pro</span>
                   </router-link>
                     <router-link :to="{ name: 'detailOpAnnulation', params: {id:Manda.id}}"
                class="btn btn-danger " title="Detail Op Annulation" >
                  <span class="" style="color:#fff">D.OP.Annul</span>
                   </router-link>
                     
                      
                    </td>
                    <td v-if="Manda.etat_op == 1">
                       <router-link :to="{ name: 'AjouterServiceRealiteOpProvisoire', params: { id: Manda.id }} "
                class="btn btn-default " title="Realité Service Fait">
                  <span class=""><i class="  icon-random"></i></span>
                   </router-link>
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
      
       editMandat: {
        
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
     ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),
  afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
     AffichierElementParent() {
      
      // return id => {
      //   if (id != null && id != "") {
          return this.plans_Decision.filter(element => this.RecupererNiveau3StructureDecision(element.structure_motif_decission_id) == 3);
      //   }
      // };
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
...mapActions("horSib", ['ajouterRealiteServiceHors','modifierOpProvisoire','supprimerRealiteServiceHors']),
   ...mapActions("bienService", [
                
                "ajouterMandat",
                
                "supprimerMandat",
               
      
     
               
            ]),
       afficheDecisionCf(id) {
      this.$("#etatOpAnnulation").modal({
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
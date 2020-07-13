
<template>

<div class="container-fluid">



 <div id="decisionCfEngagement" class="modal hide tailgrand">
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
                              <select v-model="editEngagement.decisionengagement_cf" class="span">
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
                               <select v-model="editEngagement.motifcf" class="span">
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
                               <select v-model="editEngagement.motif" class="span">
                               <option value=""></option>
                                <option v-for="varText in AffichierElementEnfant(editEngagement.motifcf)" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>
                            
                            </div>
                          </div>
                 </td>
                  <td>
                               <div class="control-group">
                            <label class="control-label">Date Decision CF :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editEngagement.date_motif"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                              
                            </div>
                          </div>
                           </td>
                 </tr>            
                   <tr>
                     <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Observation CF</label>
                            <div class="controls">
                              <textarea  class="span12" row = "6" v-model="editEngagement.observation">
                              </textarea>
                            </div>
                          </div>
                       </td></tr>      
                        
                         
                           
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ModificationEngagement(editEngagement)"
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
                                          <th title="numero de  demande engagement">N°demande engagement</th>
                                <th title="numero de bordereau">N°bordereau engagement</th>
                                 <th title="numero de l'engagement">N°engagement</th>
                                <th title="programme/dotation">Prog/Dotat</th>
                                <!-- <th>Action Programmatique</th>
                                <th>Activite</th> -->
                                <th title="unite administrative">Ua</th>
                                 <th>Imputation</th>
                                  <th title="ligne budgetaire">Section</th>
                                  <th>Montant</th>
                                  <th>Décision CF</th>
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     <tr
                    class="odd gradeX"
                    v-for="Engage in afficheEngagementCf(macheid)"
                    :key="Engage.id"
                  >
         <td >{{Engage.exercice_budget || 'Non renseigné'}}</td>
                    <td @dblclick="afficheModalModificationEngagement(Engage.id)">{{Engage.numero_demande_engage || 'Non renseigné'}}</td>
                    <td @dblclick="afficheModalModificationEngagement(Engage.id)">{{Engage.numero_bordereau || 'Non renseigné'}}</td>
                    <td @dblclick="afficheModalModificationEngagement(Engage.id)">{{Engage.numero_engage || 'Non renseigné'}}</td>
                     <td @dblclick="afficheModalModificationEngagement(Engage.id)">{{afficheProgrammeDot(Engage.programme_id) || 'Non renseigné'}}</td> 
                     <!-- <td >{{afficheActionProg(Engage.action_id)|| 'Non renseigné'}}</td> 
                      <td >{{afficheAtiviteProg(Engage.activite_id) || 'Non renseigné'}}</td> -->
                    <td @dblclick="afficheModalModificationEngagement(Engage.id)">{{uaMandat(Engage.ua_id) || 'Non renseigné'}}</td>
                     <td @dblclick="afficheModalModificationEngagement(Engage.id)">{{Engage.budget_general_id || 'Non renseigné'}}</td>
                     
                    <td @dblclick="afficheModalModificationEngagement(Engage.id)">{{CodeSection(Engage.section_id) || 'Non renseigné'}}</td> 
                  <td @dblclick="afficheModalModificationEngagement(Engage.id)">{{formatageSomme(parseFloat(Engage.total_general)) || 0}}</td>
                  <td>
                        <button v-if="Engage.decisionengagement_cf == 1"  class="btn  btn-success" @click="afficheModalDecision(Engage.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Engage.decisionengagement_cf == 2" class="btn  btn-warning" @click="afficheModalDecision(Engage.id)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Engage.decisionengagement_cf == 3" class="btn  btn-danger" @click="afficheModalDecision(Engage.id)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficheModalDecision(Engage.id)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                     
                       <td>
                        <router-link :to="{ name: 'DetailEngagement', params: {id_detail_engagement:Engage.id}}"
                class="btn btn-default " title="Detail Engagement">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                    <!-- <button v-if="Engage.decisionengagement_cf == 1" class="btn " @click="afficherModalAjouterRealiteServiceFait(index)" title="Ajouter Réalité Service Fait">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <!-- <button v-if="Engage.decisionengagement_cf == 1" class="btn " @click="afficherModalAjouterMandat(index)" title="Ajouter Mandat">
                        <span>
                          <i class="icon icon-book"></i>
                        </span>
                      </button> -->
                      <button class="btn btn-danger" @click="supprimerEngagement(Engage.id)">
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
      editEngagement :{},
      
search:""
        }
    },
    props:["macheid"],
        created() {
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.getFacturePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
         )
        //  this.editEngagement=this.engagements.find(item=>item.marche_id==this.$route.params.id)
  
  
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},

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

afficherIdLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

afficherIdRealiteServiceFait() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.realiteServiceFait.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
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
    CodeSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_section;
      }
      return 0
        }
      };
    },
      afficheProgrammeDot() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
    uaMandat() {
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
    
afficheTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typeProcedure;
      }
      return 0
        }
      };
    },
 afficheMontantFacture() {
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
       afficheEngagementCf() {
      return id => {
        if (id != null && id != "") {
          return this.engagements.filter(
            element => element.marche_id == id  &&  this.afficheTypeProcedure(element.facture_id) == 2
          );
        }
      };
    },
  
afficheDecompte() {
      return id => {
        if (id != null && id != "") {
           return this.decomptes.filter(qtreel => qtreel.marche_id == id);
      
        }
      };
    },


 NombreDecompte() { 
      const val = this.afficheDecompte(this.editEngagement.marche_id).length + 1;
      return parseFloat(val).toFixed(0);
      
    },






afficheMarcheType(){
if(this.afficheIdTypeMarche(this.editEngagement.marche_id) == 5){
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
if(this.montantGeneralMandatModification > this.afficheMontantFacture(this.editEngagement.facture_id) ){
alert("Montant demande est supperieur a la facture")
}
else{
  return this.montantGeneralMandatModification
}
return this.montantGeneralMandatModification
},



    restePayeMarche() {
      const val = parseFloat(this.montantMarcheAvecAvenant) - parseFloat(this.sommeEgagementLigne(this.editEngagement.marche_id));
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
      const val = parseFloat(this.afficheMontantReelMarche(this.editEngagement.marche_id)) + parseFloat(this.affichierMontantAvenant(this.editEngagement.marche_id));
      return parseFloat(val).toFixed(0);
    },

affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
        
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
},
montantGeneralMandat() { 
      const val = parseFloat(this.editEngagement.montant_tresor) + parseFloat(this.editEngagement.montant_don) + parseFloat(this.editEngagement.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },
    dotationDisponibleAnterieure() {
      const val =  parseFloat(this.afficherMontantBudgetaireInitial(this.afficherInputationBudgetaire(this.afficherIdMarche(this.editEngagement.facture_id)))) - parseFloat(this.montantCumulerMandatEngagement);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
montantDisponibleBudgetMandatEngagement() {
      const val =  parseFloat(this.dotationDisponibleAnterieure) - parseFloat(this.montantGeneralMandatModification);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
     
      return 0
     
    },

montantCumulerMandatEngagement() {
      const val = parseFloat(this.sommeEgagementLigne(this.editEngagement.marche_id)) + parseFloat(this.montantGeneralMandatModification);
      
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



 montantGeneralMandatModification() { 
      const val = parseFloat(this.editEngagement.montant_tresor) + parseFloat(this.editEngagement.montant_don) + parseFloat(this.editEngagement.montant_emprunt);
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
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.editEngagement.facture_id)));

      if (norme) {
       
       return norme.afficheAction.code.concat('  ', norme.afficheAction.libelle)
      }
      return ""
    },
    afficherActid() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.editEngagement.facture_id)));

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
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.editEngagement.facture_id)));

      if (norme) {
       
       return norme.afficheProgramme.code.concat('  ', norme.afficheProgramme.libelle)
      }
      return ""
    },
    afficherProgDotId() {
    
       const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.ua_id == this.afficheUa_id(this.afficherIdMarche(this.editEngagement.facture_id)));

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
 
      methods:{ 

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
      "getMarche"
               
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
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),
     afficheModalModificationEngagement(id) {
      this.$router.push({
        path: "/Modifier_Engagement/" + id
      });
    },
    ModalModificationEngagement(id) {
      this.$("#modalModificationEngagement").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editEngagement = this.engagements.find(item=>item.id==id);
    },
afficheModalDecision(id) {
      this.$("#decisionCfEngagement").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editEngagement = this.engagements.find(item=>item.id==id);
    },
afficheFactureProforma() {
      return id => {
        if (id != null && id != "") {
          return this.engagements.filter(
            element => element.marche_id == id && this.AfficheTypeFacture(element.facture_id) == 8
          );
        }
      };
    },
AfficheTypeFacture() {
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








            ModificationEngagement(){

 if (this.afficheMontantFacture(this.editEngagement.facture_id) < this.montantGeneralMandatModification){
alert("Le montant engagé est superieure au montant de la facture")
      }
      else if (this.afficheMontantFacture(this.editEngagement.facture_id) > this.montantGeneralMandatModification)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficheMontantFacture(this.editEngagement.facture_id))
      {
        alert("Impossible d'emettre l'engagement veuillez revoir la dotation svp")
      }
      
      else
      {
 var nouvelObjet = {
      ...this.editEngagement,
    exercice_budget :this.anneeAmort,
       	// numero_cc_id :this.NumeroFournisseur,
        // nom_entreprise :this.nomFournisseur,
        //  adresse_entreprise :this.AdresseFournisseur,
        fournisseur_id:this.editEngagement.fournisseur_id,
         total_general :this.commparerMontantGleEtMontantFacture,
         budget_general_id :this.afficherInputationBudgetaire(this.afficherIdMarche(this.editEngagement.facture_id)),
         marche_id : this.editEngagement.marche_id,
        //  montant_a_paye: this.montantResteApaye,
        //  montant_cumul:this.montantCumuler,
       ligne_id:this.afficherIdLigneBudgetaire(this.afficherIdMarche(this.editEngagement.facture_id)),
    //      numero_facture:this.formDataFacture.numero_facture,
    //   montant_facture:this.formDataFacture.prix_propose_ttc,
      	// objet_depense : this.formDataFacture.objet_facture,
        facture_id:this.editEngagement.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,

programme_id:this.afficherProgDotId,
action_id:this.afficherActid,

activite_id:this.afficheIdActivite(this.editEngagement.marche_id),
  ua_id:this.afficherIdUa(this.afficherIdMarche(this.editEngagement.facture_id)),
  grd_nature_id:this.afficherIdGrandeNature(this.afficherIdMarche(this.editEngagement.facture_id)),
	compte_id:this.afficheIdCompte(this.afficherIdEntreprise(this.editEngagement.facture_id)),
section_id:this.afficherIdSection(this.afficherIdUa(this.afficherIdMarche(this.editEngagement.facture_id))),
       };
          var realiteServiceFait = {
     ...this.editEngagement,

      exercice_budget :this.anneeAmort,
       
         marche_id : this.editEngagement.marche_id,
       
      	
        facture_id:this.editEngagement.facture_id,
       
 montant :this.montantGeneralMandatModification,

  ua_id:this.editEngagement.ua_id,
  

section_id:this.afficherSectId,
id:this.afficherIdRealiteServiceFait(this.editEngagement.marche_id),
  engagement_id:this.editEngagement.id,
  marchetype:this.afficheMarcheType

       };

      var odjetLiquisation = {
    

id:this.afficherIdLiquidation(this.editEngagement.marche_id),
	engagement_id:this.editEngagement.id,



   numero_bon_manuel :this.editEngagement.numero_demande_engage,
       
         numero_demande : this.numero_engage,
        	exo_id:this.anneeAmort,
       
 imputation_budgetaire :this.editEngagement.budget_general_id,

  section_id:this.afficherSectId,
  

programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
  

activite_id:this.editEngagement.activite_id,


  ua_id:this.editEngagement.ua_id,
  

nature_depense_id:this.editEngagement.grd_nature_id,
plan_budgetaire_id:this.idBudgetaire,
  

	marche_id:this.editEngagement.marche_id,

  mode_paiement_id:this.editEngagement.mod_paiement_engage,
  

fournisseur_id:this.editEngagement.ligne_id,
marchetype:this.afficheMarcheType
       };
    //    let marcheObjet = this.mandats.find(marche=>marche.engagement_id==this.editEngagement.id)
    //      marcheObjet.total_general = this.montantGeneralMandatModification
    //       marcheObjet.montant_tresor = this.editEngagement.montant_tresor
    // marcheObjet.montant_don = this.editEngagement.montant_don
    // marcheObjet.montant_emprunt = this.editEngagement.montant_emprunt
  this.modifierEngagement(nouvelObjet)
  // this.modifierMandat(marcheObjet)
  this.modifierRealiteServiceFait(realiteServiceFait)
  this.modifierLiquidation(odjetLiquisation)
      this.$('#decisionCfEngagement').modal('hide');
      // this.$('#exampleModalMotif').modal('hide');
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
          decisionengagement_cf:"",
           numero_demande:"",
              numero_op:"",
              autre_engagement:"",
};

      }
      
      
  //  }
      
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

<template>

<div>
  
                <div id="exampleModalMotifMandatEmetteur" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td colspan="2">
              <div class="control-group">
                            <label class="control-label">Décision Emetteur </label>
                            <div class="controls">
                              <select v-model="editMandat.decision_emetteur" class="span">
                                <option value=""></option>
                              <option value="1">Visé</option>
                             <option value="2">Différé</option>
                             <option value="3">Réjeté</option>
    </select>
                           
                            </div>
                          </div>
            </td>
          </tr>
               <tr>
                 <td colspan="2">
                    <div class="control-group">
                            <label class="control-label">Observation Emetteur</label>
                            <div class="controls">
                              <textarea  class="span" row = "6" v-model="editMandat.observation_emetteur">
                              </textarea>
                            </div>
                          </div>
                 </td>
                 </tr>            
                   <tr>
                     <td colspan="2">
                        <div class="control-group">
                            <label class="control-label">Date Decision Emetteur :</label>
                            <div class="controls">
                              <input type="date" class="span"  v-model="editMandat.date_decision_emetteur"/>
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                            </div>
                          </div>
                       </td></tr>      
                         <!-- <tr>
                           <td>
                                    <div class="control-group">
                            <label class="control-label">Nom Emetteur :</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editMandat.nom_emetteur"/>
                                <input type="hidden" class="span"  :value="recuperer"/> 
                            </div>
                          </div>
                           </td>
                         </tr> -->
                                <tr>
                 <td>
                    <div class="control-group">
                            <label class="control-label">Nom et prenoms </label>
                            <div class="controls">
                              <select v-model="editMandat.nom_emetteur" class="span">
                                <option v-for="acteur in afficheIdActeurDepense(afficheUAId(this.editMandat.marche_id))"  :key="acteur.id"
                        :value="acteur.id">{{afficherNomActeurDepense(acteur.acteur_depense_id)}}</option>
                               </select>
                           
                            </div>
                          </div>
                 </td>
                  <td>
                                  <div class="control-group">
                            <label class="control-label">Fonction</label>
                            <div class="controls">
                              <input type="text" class="span" readonly :value=" afficherLibelleFoctionBudgetaire(afficherIdFoctionBudgetaire(editMandat.nom_emetteur))"/>
                             
                            </div>
                          </div>
                           </td>
                 </tr>  
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalMandatDecisionCF(editMandat)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div> 
                <div class="span4"></div>
                                <div class="span4"></div>
                                <!-- <div class="span4" align="right">
                                   
                                      <button class="btn btn-success" @click="afficherModalProcedureFacture" >Ajouter Facture</button>

                              </div> -->
                 
                      <table class="table table-bordered table-striped" v-if="macheid">
              
                                    <thead>
                                    <tr>

                                         
                      <th>N° du marche {{macheid}}</th>
                                         <th>N° du mandat</th>
                                        <th>N° bordereau mandat</th>
                                        <th>N° demande engagement</th>
                                          <th>N° engagement</th>
                                        <!-- <th>Type procedure</th> -->
                                                    
                                <th>Montant Mandat</th>
                                 <th >Emetteur</th>
                                <th title="Date validation Emetteur">Date Emetteur</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                            
                 <tr
                    class="odd gradeX"
                    v-for="factu in afficheFactureDefinitiveEmetteur(macheid)"
                    :key="factu.id"
                  >
                   
                                     <td>{{afficheNumeroMarche(factu.marche_id) || 'Non renseigné'}}</td>
                   <td>{{factu.numero_mandat || 'Non renseigné'}}</td>
                   <td>{{factu.numero_bordereau || 'Non renseigné'}}</td>
                    <td>{{afficherNumeroDemandeEngagemnt(factu.engagement_id)|| 'pas numero demande'}}</td>
                     <td>{{afficherNumeroEngagemnt(factu.engagement_id) || 'pas numero engage'}}</td>
                     <!-- <td>{{factu.type_procedure_id || 'Non renseigné'}}</td> -->
            <!-- <td>{{uafactut(factu.ua_id) || 'Non renseigné'}}</td>
                                    -->
                    <td>{{formatageSomme(parseFloat(factu.total_general))|| 'Non renseigné'}}</td>
                    
                    <td>
                        <button v-if="factu.decision_emetteur == 1"  class="btn  btn-success" @click="afficheDecisionEmetteur(factu.id)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="factu.decision_emetteur == 2" class="btn  btn-warning" @click="afficheDecisionEmetteur(factu.id)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="factu.decision_emetteur == 3" class="btn  btn-danger" @click="afficheDecisionEmetteur(factu.id)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  @click="afficheDecisionEmetteur(factu.id)">                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                    
                    <td>{{formaterDate(factu.date_decision_emetteur) || 'Non renseigné'}}</td>
                   
                     
                     
                   
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
         editMandat: {
         decision_emetteur:"",
         observation_emetteur:"",
         date_decision_emetteur:"",
         nom_emetteur:""


       },
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ['decomptes','modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
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
    afficheNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterActeEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
   
     afficheFactureDefinitiveEmetteur() {
      return id => {
        if (id != null && id != "") {
          return this.getMandatPersonnaliser.filter(
            element => element.marche_id == id  
          );
        }
      };
    },
afficherNumeroDemandeEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
      }
      return 0
        }
      };
    },
afficherNumeroEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_engage;
      }
      return 0
        }
      };
    },

afficherTypeFacture() {
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
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },





    

 
       afficheFactureDefinitiveCf() {
      return id => {
        if (id != null && id != "") {
          return this.getMandatPersonnaliser.filter(
            element => element.marche_id == id  &&  this.afficherTypeFacture(element.facture_id) == 1
          );
        }
      };
    },
   

    afficherMontantFacture() {
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
    sommeEgagementLigneTableau: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserVise.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
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
            montantMarcheAvecAvenant() {
      const val = parseFloat(this.afficheMontantReelMarche(this.macheid)) + parseFloat(this.affichierMontantAvenant(this.macheid));
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
    affichierMontantAvenant(){
  return id => {
    if(id !=""){
  
    return this.avenants.filter(element => element.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_avenant), 0).toFixed(2); 
      
    }
    
  }
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
     montantGeneralMandatModifier() { 
      const val = parseFloat(this.editMandat.montant_tresor) + parseFloat(this.editMandat.montant_don) + parseFloat(this.editMandat.montant_emprunt);
      return parseFloat(val).toFixed(2);
      
    },

      },
 
      methods:{ 

       ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",
      "modifierMandat",
      "ajouterChoixProcedure"]),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
      "ajouterChoixProcedure",
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),
    afficheDecisionEmetteur(id) {
      this.$("#exampleModalMotifMandatEmetteur").modal({
        backdrop: "static",
        keyboard: false
      });

       this.editMandat = this.mandats.find(item=>item.id==id);
    },
  modifierModalMandatDecisionCF(){
    
     
   if (this.afficherMontantFacture(this.editMandat.facture_id) > this.montantGeneralMandatModifier)
      {
        alert("Le montant engagé est Inférieure au montant de la facture")
      }
       else if (this.dotationDisponibleAnterieure < this.afficherMontantFacture(this.editMandat.facture_id))
      {
        alert("La dotation est Inférieure au montant de la facture")
      }
      
  
       else if (parseFloat(this.montantMarcheAvecAvenant) == parseFloat(this.sommeEgagementLigneTableau(this.macheid)))
      {
        let marcheObjet=this.marches.find(marche=>marche.id == this.macheid)
    marcheObjet.attribue = 5
      //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
     this.modifierMarche(marcheObjet)
      this.getMarche()
      this.getActeEffetFinancier()
      
      }
    
      else
      {
 var nouvelObjet = {
      ...this.editMandat,
       exercice_budget :this.anneeAmort,
    
         budget_general_id :this.afficherInputationBudgetaire(this.afficherIdMarche(this.editMandat.facture_id)),
         marche_id : this.editMandat.marche_id,
         montant_a_paye: this.restePayeMarche,
        //  montant_cumul:this.montantCumuler,
       ligne_id:this.afficherIdLigneBudgetaire(this.afficherIdMarche(this.editMandat.facture_id)),
     banque_id:this.afficheIdBanque(this.afficherIdEntreprise(this.editMandat.facture_id)),
        facture_id:this.editMandat.facture_id,
        type_procedure_id	:this.recupererTypeProcedure,
// engagement_id:this.editLiquidation.egagement_id,
programme_id:this.afficherProgDotId,
action_id:this.afficherActid,
activite_id:this.afficheIdActivite(this.editMandat.marche_id),
  ua_id:this.afficherIdUa(this.afficherIdMarche(this.editMandat.facture_id)),
  grd_nature_id:this.afficherIdGrandeNature(this.afficherIdMarche(this.editMandat.facture_id)),
	compte_id:this.afficheIdCompte(this.afficherIdEntreprise(this.editMandat.facture_id)),
section_id:this.afficherIdSection(this.afficherIdUa(this.afficherIdMarche(this.editMandat.facture_id))),
  total_general:this.montantGeneralMandatModifier,
   	entreprise_id:this.editMandat.fournisseur_id,
    	
 marchetype:this.afficheMarcheType

       };
  this.modifierMandat(nouvelObjet)
      // this.$('#ModifierModalMandat').modal('hide');
      this.$('#exampleModalMotifMandatEmetteur').modal('hide');
     
      
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
          decision_cf:"",
           numero_demande:"",
              numero_op:"",
              autre_engagement:"",
              observation_emetteur:"",
              	decision_emetteur:"",
                date_decision_emetteur:"",
                nom_emetteur:""
};

      }
    
    
  //  }
      
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
.taillemodal45 {
        width: 1500px;
        margin: 0 -750px;
      
    }
       .taillemodal6 {
        width: 1600px;
        margin: 0 -780px;
    }
    .taillemodal61 {
        width: 1500px;
        
    }
</style>
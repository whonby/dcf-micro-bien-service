
<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Detail Mandat</h5>
          </div>

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap bordure">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                 <th>Année</th>
                                    <th title="Numéro de demande d'engagement">N° demande d'engagement</th>
                                
                                 <th title="Numéro de l'engagement">N° d'engagement</th>
                                 
                                  <th title="Numéro de bordereau">N° mandat</th>
                                  <th title="numero de bordereau">N° bordereau mandat</th>
                                <th title="programme/dotation">Prog/Dotat</th>
                                <th>Action Programmatique</th>
                                <th>Activité</th>
                                <th title="Unité administrative">UA</th>
                                 <th>Imputation</th>
                                  <th title="ligne budgétaire">Section</th>
                                  
                                  <th>Décision CF</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  
                  <td>{{Manda.exercice_budget || 'Non renseigné'}}</td>
                   <td>{{Manda.engagement_id || 'Non renseigné'}}</td>
                   <td>{{Manda.engagement_id || 'Non renseigné'}}</td>
                    <td>{{Manda.numero_mandat || 'Non renseigné'}}</td>
                   <td>{{Manda.numero_bordereau || 'Non renseigné'}}</td>
<td>{{afficheProgrammeDot(Manda.programme_id) || 'Non renseigné'}}</td> 
 <td>{{afficheActionProg(Manda.action_id)|| 'Non renseigné'}}</td> 
                      <td>{{afficheAtiviteProg(Manda.activite_id) || 'Non renseigné'}}</td>
 <td>{{uaMandat(Manda.ua_id) || 'Non renseigné'}}</td>
  <td>{{Manda.budget_general_id || 'Non renseigné'}}</td>
 <td>{{CodeSection(Manda.section_id) || 'Non renseigné'}}</td> 

                   
                  <td>
                        <button v-if="Manda.decision_cf == 8"  class="btn  btn-success">                        
                     
                      <span    >Viser</span>
                      
                      </button>
                       <button v-else-if="Manda.decision_cf == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Différer</span>
                      
                    
                      </button>
                        <button v-else-if="Manda.decision_cf == 3" class="btn  btn-danger">                        
                     
                      
                       <span  >Réjeter</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info">                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
            <br/>
           
             <div class="table-responsive text-nowrap bordure">
            <!---/////////////////////// DEUXIEME PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Grande nature</th>
                   <th>Type de procédure</th>
                   <th>Montant</th>
                  
                  <th>Mode de paiement</th>
                  <th>Montant du don</th>
                   <th>Montant du trésor</th>
                   <th >Montant de l'emprunt</th>
                  <th>Référence juridique</th>
                  <th>Numéro CC</th>

                  <th>Nom de l'entreprise</th>
 <th>Bailleur</th>
                  
               <th>Objet de la dépense</th>   
                 
                </tr>
              </thead>
              <tbody>
               <tr class="odd gradeX">
                  
 <td>{{afficheGrandeNature(Manda.grd_nature_id) || 'Non renseigné'}}</td>
                    <td>{{Manda.type_procedure_id || 'Non renseigné'}}</td>             
                  <td>{{formatageSomme(parseFloat(Manda.total_general)) || 0}}</td>
                
                   <td>{{Manda.mod_paiement_engage || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(Manda.montant_don)) || 0}}</td>
                    <td>{{formatageSomme(parseFloat(Manda.montant_tresor)) || 0}}</td>
                     <td>{{formatageSomme(parseFloat(Manda.montant_emprunt)) || 0}}</td>
                     <td>{{Manda.ref_juridique || 'Non renseigné'}}</td> 
                     <td>{{Manda.numero_cc_id|| 'Non renseigné'}}</td> 
                      <td>{{Manda.nom_entreprise || 'Non renseigné'}}</td>
                    <td>{{afficheBailleur(Manda.bailler_id) || 'Non renseigné'}}</td>
                     <td>{{afficheMarche(Manda.marche_id) || 'Non renseigné'}}</td> 
                    
                     
                  
                  
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// troisieme PARTIES ///////////////////////--->
          
          </div>
<br/>
             <div class="table-responsive text-nowrap bordure">
            <!---/////////////////////// DEUXIEME PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Pièce justificative</th>
                  <th>Motif</th>
                   <th>Date motif</th>
                  <th>Observation</th>
                  <!-- <th>ligne budgetaire</th> -->
                 
                   <th >Date de la demande</th>
                  <th>Numéro OP</th>
                  <th>Numéro de la facture</th>

                 
            
<th>Numéro du marché</th>
                </tr>
              </thead>
              <tbody>
               <tr class="odd gradeX">
                   <td>{{Manda.piece_justificative|| 'Non renseigné'}}</td> 
                      <td>{{afficheMotif(Manda.motif) || 'Non renseigné'}}</td>
                  <td>{{Manda.date_motif || 'Non renseigné'}}</td>
                   <td>{{Manda.observation || 'Non renseigné'}}</td>
                    <!-- <td>{{Engage.ligne_id ||'Non renseigné'}}</td> -->
                   
                     <td>{{formaterDate(Manda.date_demande) ||'Non renseigné'}}</td>
                     <td>{{Manda.numero_op || 'Non renseigné'}}</td> 
                     <td>{{afficheFacture(Manda.facture_id)|| 'Non renseigné'}}</td> 
                      
 
 
 
               <td>{{afficheMarcheNumero(Manda.marche_id) || 'Non renseigné'}}</td>   
                  
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// troisieme PARTIES ///////////////////////--->
          
          </div>
          <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="afficherModalListeExecution" href="#">Retour</a>
       
      </div>
  
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  
  data() {
    return {
      detail_mandat: undefined
    };
  },
  created() {
    this.getDetail()
  },

  watch: {
    '$route' : 'getDetail'
  },
  

  computed: {
      ...mapGetters("bienService", ['getFacturePersonnaliser','factures','motifDecisions','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),

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
    //   "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
    ...mapGetters("gestionMarche", ["entreprises"]),
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
 ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

 afficheMarcheNumero() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
afficheGrandeNature() {
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

 afficheFacture() {
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
 afficheMarche() {
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
afficheBailleur() {
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
afficheMotif() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.motifDecisions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
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
     marcheMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
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
     afficheActionProg() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauAction.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
    afficheAtiviteProg() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheNiveauActivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
  },
  methods: {
    getDetail(){
        this.Manda = this.mandats.find(
      Manda => Manda.id == this.$route.params.id_detail_mandat
    );
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
       formatageSomme: formatageSomme,

        // retourEngagement(){
        //          this.$router.push({ name:'Engagement/:id' })
        //     },
afficherModalListeExecution(){
                window.history.back();
            },
  }
};
</script>
<style scoped>
.bordure{
    border: 1px black solid;
}
</style>
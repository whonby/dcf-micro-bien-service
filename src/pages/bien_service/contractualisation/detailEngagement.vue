<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Detail Engagement</h5>
          </div>

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap bordure">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                 <th>Année</th>
                                    <th title="numero de  demande engagement">N°demande engagement</th>
                                <th title="numero de bordereau">N°bordereau engagement</th>
                                 <th title="numero de l'engagement">N°engagement</th>
                                <th title="programme/dotation">Prog/Dotat</th>
                                <th>Action Programmatique</th>
                                <th>Activite</th>
                                <th title="unite administrative">Ua</th>
                                 <th>Imputation</th>
                                  <th title="ligne budgetaire">Section</th>
                                  <th>Montant</th>
                                  <th>Décision CF</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  
                  <td>{{Engage.exercice_budget || 'Non renseigné'}}</td>
                   <td>{{Engage.numero_demande_engage || 'Non renseigné'}}</td>
                    <td>{{Engage.numero_bordereau || 'Non renseigné'}}</td>
                    <td>{{Engage.numero_engage || 'Non renseigné'}}</td>
                     <td>{{afficheProgrammeDot(Engage.programme_id) || 'Non renseigné'}}</td> 
                     <td>{{afficheActionProg(Engage.action_id)|| 'Non renseigné'}}</td> 
                      <td>{{afficheAtiviteProg(Engage.activite_id) || 'Non renseigné'}}</td>
                    <td>{{uaMandat(Engage.ua_id) || 'Non renseigné'}}</td>
                     <td>{{Engage.budget_general_id || 'Non renseigné'}}</td>
                     
                    <td>{{CodeSection(Engage.section_id) || 'Non renseigné'}}</td> 
                  <td>{{formatageSomme(parseFloat(Engage.total_general)) || 0}}</td>
                  <td>
                        <button v-if="Engage.decision_cf == 1"  class="btn  btn-success">                        
                     
                      <span    >Viser</span>
                      
                      </button>
                       <button v-else-if="Engage.decision_cf == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Différer</span>
                      
                    
                      </button>
                        <button v-else-if="Engage.decision_cf == 3" class="btn  btn-danger">                        
                     
                      
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
                 
                   <th>type procedure</th>
                  <th>mode paiement</th>
                  <th>montant don</th>
                   <th>montant tresor</th>
                   <th >montant emprunt</th>
                  <th>reference juridique</th>
                  <th>Numero CC</th>

                  <th>nom_entreprise</th>
 <th>Bailleur</th>
                  
               <th>Object depense</th>   
                  <th>piece_justificative</th>
                  <th>motif</th>
                </tr>
              </thead>
              <tbody>
               <tr class="odd gradeX">
                  
                  <td>{{Engage.type_procedure_id || 'Non renseigné'}}</td>
                   <td>{{afficheModePaiement(Engage.mod_paiement_engage)|| 'Non renseigné'}}</td>
                    <td>{{Engage.montant_don || 0}}</td>
                    <td>{{Engage.montant_tresor || 0}}</td>
                     <td>{{Engage.montant_emprunt || 0}}</td>
                     <td>{{Engage.ref_juridique || 'Non renseigné'}}</td> 
                     <td>{{Engage.numero_cc_id|| 'Non renseigné'}}</td> 
                      <td>{{Engage.nom_entreprise || 'Non renseigné'}}</td>
                    <td>{{afficheBailleur(Engage.bailler_id) || 'Non renseigné'}}</td>
                     <td>{{afficheMarche(Engage.marche_id) || 'Non renseigné'}}</td> 
                     <td>{{Engage.piece_justificative|| 'Non renseigné'}}</td> 
                      <td>{{afficheMotif(Engage.motif) || 'Non renseigné'}}</td>
                     
                  
                  
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
                 
                   <th>	date motif</th>
                  <th>observation</th>
                  <!-- <th>ligne budgetaire</th> -->
                 
                   <th >Date demande</th>
                  <th>numero op</th>
                  <th>Numero facture</th>

                  <th>Numero bordereau</th>

                </tr>
              </thead>
              <tbody>
               <tr class="odd gradeX">
                  
                  <td>{{formaterDate(Engage.date_motif) || 'Non renseigné'}}</td>
                   <td>{{Engage.observation || 'Non renseigné'}}</td>
                    <!-- <td>{{Engage.ligne_id ||'Non renseigné'}}</td> -->
                   
                     <td>{{formaterDate(Engage.date_demande) ||'Non renseigné'}}</td>
                     <td>{{Engage.numero_op || 'Non renseigné'}}</td> 
                     <td>{{afficheFacture(Engage.facture_id)|| 'Non renseigné'}}</td> 
                      <td>{{Engage.numero_bordereau || 'Non renseigné'}}</td>

                  
                  
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// troisieme PARTIES ///////////////////////--->
          
          </div>
          <!-- <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourEngagement" href="#">Voir Tableau</a>
       
      </div> -->
  
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
      detail_engage: undefined
    };
  },
  created() {
    this.getDetail()
  },

  watch: {
    '$route' : 'getDetail'
  },
  

  computed: {
      ...mapGetters("bienService", ['modepaiements','getFacturePersonnaliser','factures','motifDecisions','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
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
    afficheModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.modepaiements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  },
  methods: {
    getDetail(){
        this.Engage = this.engagements.find(
      Engage => Engage.id == this.$route.params.id_detail_engagement
    );
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
       formatageSomme: formatageSomme,

        // retourEngagement(){
        //          this.$router.push({ name:'Engagement/:id' })
        //     },

  }
};
</script>
<style scoped>
.bordure{
    border: 1px black solid;
}
</style>
<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Detail Réalite Service Fait</h5>
          </div>

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap bordure">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                 <th>Année</th>
                  <th title="">Ministere</th>
                                    <th title="">Objet de la depense</th>
                                <th title="">Fournisseur</th>
                                 <th title="">Adresse</th>
                                <th title="">Numero facture</th>
                                <th>Date facture</th>
                                <th>Ordre de paiement</th>
                               
                                
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  
                  <td>{{Engage.exercice_budget || 'Non renseigné'}}</td>
                  <td>{{afficherSection(Engage.section_id) || 'Non renseigné'}}</td>
                   <td>{{afficheMarche(Engage.marche_id) || 'Non renseigné'}}</td>
                    
                    <td>{{afficheNomFournisseur(afficheidFournisseurFacture(Engage.facture_id)) || 'Non renseigné'}}</td>
                     <td>{{afficheAdresseFournisseur(afficheidFournisseurFacture(Engage.facture_id)) || 'Non renseigné'}}</td> 
                     <td>{{afficheNumeroFacture(Engage.facture_id)|| 'Non renseigné'}}</td> 
                      <td>{{formaterDate(afficheDateFacture(Engage.facture_id)) || 'Non renseigné'}}</td>
                    <td>{{afficheModePaiement(recupererModePaiement(Engage.engagement_id)) || 'Non renseigné'}}</td>
                    
                    
                
                  
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
                 
                            
                                  <th title="">Service Bénéficiaire</th>
                                  <th>Decision Service bénéficiaire</th>
                                  <th>Date</th>
                                  <th>Nom et prénoms Service bénéficiaire</th>
                                  <th>Observation Service bénéficiaire</th>
                                 <th>Decision CF</th>
                                  <th>Date</th>
                                  <th>Nom et prénoms CF</th>
                                   <th>Observation CF</th>
                                   <th>Montant</th>
                </tr>
              </thead>
              <tbody>
               <tr class="odd gradeX">
                  
                  <td>{{recupererUA(Engage.ua_id) || 'Non renseigné'}}</td>
                   <td>
                        <button v-if="Engage.decision_service_beneficiaire == 1"  class="btn  btn-success">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Engage.decision_service_beneficiaire == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Engage.decision_service_beneficiaire == 3" class="btn  btn-danger">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info">                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                   <td>{{formaterDate(Engage.date_service_beneficiaire)|| 'Non renseigné'}}</td>
                    <td>{{Engage.nom_service_beneficiaire || 'Non renseigné'}}</td>
                    <td>{{Engage.observation_service_beneficiaire || 'Non renseigné'}}</td>
                    <td>
                        <button v-if="Engage.decision_controleur_financier == 1"  class="btn  btn-success">                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Engage.decision_controleur_financier == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Engage.decision_controleur_financier == 3" class="btn  btn-danger">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info">                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                    
                     <td>{{formaterDate(Engage.date_controleur_financier) || 'Non renseigné'}}</td> 
                     <td>{{Engage.nom_controleur_financier|| 'Non renseigné'}}</td> 
                      <td>{{Engage.observation_controleur_financier || 'Non renseigné'}}</td>
                    <td>{{formatageSomme(parseFloat(Engage.montant)) || 0}}</td>
                    
                  
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// troisieme PARTIES ///////////////////////--->
          
          </div>
<br/>
            
        
  
        </div>
          <!-- <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau</a>
       
      </div> -->
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
      "getPersonnaliseBudgetGeneralParBienService",
      "realiteServiceFait"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
 ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

recupererUA() {
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




recupererImputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.budget_general_id;
      }
      return 0
        }
      };
    },

recupererModePaiement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.mod_paiement_engage;
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

afficheNumeroFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
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

afficheAdresseFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.adresse;
      }
      return 0
        }
      };
    },

afficheTelephoneFournisseur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.telephone;
      }
      return 0
        }
      };
    },

  },
  methods: {
    getDetail(){
        this.Engage = this.realiteServiceFait.find(
      Engage => Engage.id == this.$route.params.id_detailRealiteServiceFait
    );
    },

    retourListeEntreprise(){
                 this.$router.push({ name: 'Engagement' })
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
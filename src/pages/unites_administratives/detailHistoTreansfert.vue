<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Detail Transfert</h5>
          </div>


          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap bordure">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                      <th>Numero transfert</th>
                 <th>Matricule Acteurs</th>
                      <th>Destinataire</th>
                   
                    <th>Ligne budgetaire</th>
                    <th>Grande nature</th>
                       <th>UA</th>
                        <th>Montant Contrat</th> 
                                    <th>Motif CF</th>
                                <th>Observation CF</th>
                                <th>Date reception</th>
                                 <th>Date Decision CF</th>
                                <th title="programme/dotation">Durée traitement</th>
                                <th>D&eacute;cision CF</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="type in filtre_Historique" :key="type.id">
                  
                  <td>{{type.num_transfert || 'Non renseigné'}}</td>
                  <td>{{afficherActeurDepense(type.acteurdepense_id)|| 'Non renseigné'}}</td>
                     <td>{{afficherDestinataire(type.unitezone_id) || 'Non renseigné'}}</td>
                      
                          <td>{{afficherCodeTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}-{{afficherTransfert(type.ligne_budgetaire_id) || 'Non renseigné'}}</td>
                  <td>{{afficherGrandNature(type.grandnatire_id)|| 'Non renseigné'}}</td>
                  <td>{{afficherUa(type.ua_id) || 'Non renseigné'}}</td>
                   <td style="text-align: center;">{{formatageSomme(parseFloat(type.montant_total_contrat)) || 'Non renseigné'}}</td>
                    <td>{{type.motif || 'Non renseigné'}}</td>
                    <td>{{type.observation || 'Non renseigné'}}</td>
                     <td>{{type.date_jours || 'Non renseigné'}}</td> 
                     <td>{{type.date_motif|| 'Non renseigné'}}</td> 
                       <td>{{type.delaitraitement || 'Non renseigné'}}</td>
                      
               
                  <td>
                        <button v-if="type.decision_cf == 1"  class="btn  btn-success">                        
                     
                      <span    >Viser</span>
                      
                      </button>
                       <button v-else-if="type.decision_cf == 2" class="btn  btn-warning">                        
                     
                      
                       <span  >Différer</span>
                      
                    
                      </button>
                        <button v-else-if="type.decision_cf == 3" class="btn  btn-danger">                        
                     
                      
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
import { formatageSomme } from "../.././Repositories/Repository.js";
export default {
  
  data() {
    return {
      
      search: ""
    };
    
  },
  created() {
    this.getDetail()
  },

  watch: {
    '$route' : 'getDetail'
  },
  

  computed: {
          ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections"
    ]),
...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "historiquetransferts"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters('personnelUA', ['all_acteur_depense',  'fonctions']),

 
 filtre_Historique() {
      const st = this.search.toLowerCase();
      return this.historiquetransferts.filter(type => {
        return (
          type.num_transfert.toLowerCase().includes(st) 
         
         
        );
      });
    },
    afficherLocalisation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheLocalisationGeoNiveau5.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
         afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom);
      }
      return 0
        }
      };
    },
   afficherDestinataire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.description_localisation;
      }
      return 0
        }
      };
    },
     afficherUa() {
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
     afficherGrandNature() {
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
    afficherTransfert() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.libelle;
      }
      return 0
        }
      };
    },
    afficherCodeTransfert() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.code;
      }
      return 0
        }
      };
    },
  },
  methods: {
    getDetail(){
        this.type = this.historiquetransferts.find(
      type => type.num_transfert == this.$route.params.detail_historiq_id
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
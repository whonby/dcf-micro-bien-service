
<template>
  

  
                  <tr class="odd gradeX" v-if="article" @dblclick="$emit('modification', article)">
                   <td>{{article.num_transfert || 'Non renseigné'}}</td>
                    <td>{{afficherLocalisation(article.id_zone_geographique) || 'Non renseigné'}}</td>
                      
                     
                    <td>{{article.acteurdepense_id|| 'Non renseigné'}}</td>
                    <td>{{article.unitezone_id || 'Non renseigné'}}</td>
                    <td>{{article.montant_total_contrat || 'Non renseigné'}}</td>
                   
                      <td>{{article.montant_transfert || 'Non renseigné'}}</td>
                    <td>{{article.montant_total_transfert || 'Non renseigné'}}</td>
                   <td>{{article.montant_restant || 'Non renseigné'}}</td>
                     <td>{{article.ligne_budgetaire_id || 'Non renseigné'}}</td>
                  <td>{{article.grandnatire_id || 'Non renseigné'}}</td>
                  <td>{{article.ua_id || 'Non renseigné'}}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        
                        @click.prevent="$emit('suppression', article.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>


  
  
</template>

<script>
import { mapGetters} from "vuex";
import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
    name: 'transfertItem',
     props: {
    article: Object,
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
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  
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
    
  
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
        
      }
    },
    formatageSomme:formatageSomme,
     show(){
        return this.isOver = true
    },

    kit(){
        return this.isOver = false
 
    },
    br: function (){
    this.$emit('make-br', this.article.children)
  
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-modification', this.article)
        this.isOpen = true
      }
    },

    //    makeFor: function () {
    //   	this.$emit('create-children', this.article)
      
    // }
  }
}
</script>
<style>

.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>


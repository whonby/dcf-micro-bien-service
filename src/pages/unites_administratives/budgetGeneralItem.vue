
<template>
  

  
                  <tr class="odd gradeX" v-if="article" @dblclick="$emit('modification', article)">
                   
                    <td>{{article.exercicebudget_id || 'Non renseigné'}}</td>
                      <td>{{article.codebudget || 'Non renseigné'}}</td>
                      <!-- <td>{{article.affichetypeua.libelle || 'Non renseigné'}}</td> -->
                    <!-- <td>{{article.afficheUA.libelle || 'Non renseigné'}}</td> -->
                    <td>{{CodeSection(article.section_id)|| 'Non renseigné'}}-{{afficherSection(article.section_id)|| 'Non renseigné'}}</td>
                    <td>{{CodeGdeNatureDep(article.gdenature_id) || 'Non renseigné'}}-{{afficherGdeNatureDep(article.gdenature_id) || 'Non renseigné'}}</td>
                    <td>{{Codeprogramme(article.program_id) || 'Non renseigné'}}-{{afficherprogramme(article.program_id) || 'Non renseigné'}}</td>
                    <!-- <td>{{article.afficheAction.code || 'Non renseigné'}}-{{article.afficheAction.libelle || 'Non renseigné'}}</td>
                     <td>{{article.afficheActivite.code || 'Non renseigné'}}-{{article.afficheActivite.libelle || 'Non renseigné'}}</td> -->
                      <td>{{Codefonctionnel(article.fonctionnel_id) || 'Non renseigné'}}-{{afficherfonctionnel(article.fonctionnel_id) || 'Non renseigné'}}</td>
                       <td>
                         <span v-if="article.Dotation_Initiale < 10000000 ">PSC Sans comité</span>
                         <span v-else-if="article.Dotation_Initiale < 30000000 ">PSC Avec comité</span>
                         <span v-else-if="article.Dotation_Initiale < 60000000 ">PSL</span>
                         <span v-else-if="article.Dotation_Initiale < 100000000 ">PSO</span>
                         <span v-else-if="article.Dotation_Initiale > 100000000 ">AON ou AOI</span>
                         <span v-else></span>
                       </td>
                       <td>

                         <span v-if="article.economique_id == CodeExempte(article.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                    <td>{{Codeeconomique( article.economique_id) || 'Non renseigné'}}-{{ affichereconomique(article.economique_id) || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(parseFloat(article.Dotation_Initiale)) || 0}}</td>
                   <td>
                     
                     
                     <span v-if="article.version == 0">Original </span>
                      <span 
                     v-else>Premiere modification</span>
                     </td>
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
import { formatageSomme } from "../../../src/Repositories/Repository";
export default {
    name: 'budgetGeneralItem',
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
   ...mapGetters("uniteadministrative", [
                "acteCreations",
                "typeTextes",
                "uniteAdministratives",
                "getterBudgeCharge",
                "getterligneExempter",

            ]),
           CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
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
        return qtereel.nom_section;
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


    afficherGdeNatureDep() {
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
     CodeGdeNatureDep() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },


     afficherprogramme() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_programmes.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     Codeprogramme() {
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

     afficherfonctionnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_fonctionnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     Codefonctionnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_fonctionnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
    
     affichereconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     Codeeconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },
  },
  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
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


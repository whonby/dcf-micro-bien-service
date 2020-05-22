
<template>
  

  
                  <tr class="odd gradeX" v-if="article" @dblclick="$emit('modification', article)">
                    <td></td>
                   <td>{{budgetPersonnelParUa(article.ua_id)}}</td>
                  
                  </tr>


  
  
</template>

<script>
import { mapGetters} from "vuex";
import { formatageSomme } from "../../../Repositories/Repository";
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
                "budgetGeneral",
                "afficheTransfertValider",
                "groupBudgetGeneral"

            ]),
             ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

budgetPersonnelParUa(){
  return id => {
    if(id !=""){
    var montant = this.groupBudgetGeneral.filter(element => element.ua_id == id && element.gdenature_id == 2 ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0); 
       if(isNaN(montant)) return null
      return montant
    }
    
  }
    
  
  
},






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
 typeFinancement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.types_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
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


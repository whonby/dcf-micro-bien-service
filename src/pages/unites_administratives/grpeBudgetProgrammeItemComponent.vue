

<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{groupe.program_id}} &nbsp; {{groupe.program_id}}</h5>
                 <!-- <span class="badge badge-info" >{{getNombreArticle}}</span>&nbsp;&nbsp; -->
                 <span class="badge badge-inverse" >{{formatageSomme(parseFloat(MontantTotal))}}</span>

                </a> 
            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen ">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                       <th>Exercice</th>
                    <th title="">Code Budget</th>
                     <!-- <th title="unite administrative">ua</th> -->
                    <th>Section</th>
                    <th title="grande nature depense">Gde nature</th>
                      <th>Programme</th>
                    <th>Action</th> 
                    <th>Activite</th> 
                     <th title="classification fonctionnel">Clsse Fontionnel</th>
                     <th title="classification Economique">Clsse Economique</th>
                    <th>Dotation Initial</th>
                   
                  </tr>
                </thead>
                <tbody>
                   <grpeBudgetProgrammeItem
                        class="item"
                        v-for="groupeElement in groupe.ua_budget_general"
                        :key="groupeElement.id"
                        :article="groupeElement"
                    

                    ></grpeBudgetProgrammeItem>
                      <!-- <tr>
                     
                       <td>
                           
                      </td>
                       <td>
                          
                      </td>
                        <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Dotation 
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(MontantTotal))}}
                           
                      </td>
                       <td>
                           
                      </td>
                        <td>
                           
                      </td>
                     
                    </tr> -->
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import { mapGetters} from "vuex";
import grpeBudgetProgrammeItem from './grpeBudgetProgrammeItem'
import { formatageSomme } from "../../../src/Repositories/Repository";
export default {
    name: 'grpeBudgetProgrammeItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      grpeBudgetProgrammeItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral"
      // "chapitres",
      // "sections"
    ]),
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
    MontantTotal(){
  
    
    var montant = this.groupe.ua_budget_general.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 
    isFolder: function () {
      return this.groupe.ua_budget_general &&
        this.groupe.ua_budget_general.length
    },

    // getNombreArticle(){
    //     var nombre = this.groupe.ua_budget_general.length
    //     if(nombre) return nombre
    //     return 'Aucun' 
    // },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.ua_budget_general.length,
        'icon-minus': this.isOpen && this.groupe.ua_budget_general.length
        //    'icon-folder-close': !this.isOpen && this.groupe.ua_budget_general.length,
        // 'icon-folder-open': this.isOpen && this.groupe.ua_budget_general.length
      }
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
      if (this.isFolder ) {
        this.isOpen = !this.isOpen 
        
      }
    },
formatageSomme:formatageSomme
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


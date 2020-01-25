

<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{groupe.code}} &nbsp; {{groupe.libelle}}</h5>
                 <span class="badge badge-info" >{{getNombreArticle}}</span>&nbsp;&nbsp;
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
                    <!--<th>Action</th> -->
                    <!-- <th>Activite</th> -->
                     <th title="classification fonctionnel">Clsse Fontionnel</th>
                     <th title="classification Economique">Clsse Economique</th>
                    <th>Dotation Initial</th>
                    <th>Version</th>
                    

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <historiquebudgetGeneralItem
                        class="item"
                        v-for="groupeElement in groupe.ua_historique_budget_general"
                        :key="groupeElement.id"
                        :article="groupeElement"
                      @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></historiquebudgetGeneralItem>
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
import historiquebudgetGeneralItem from './historiquebudgetGeneralItem'
import { formatageSomme } from "../../../src/Repositories/Repository";
export default {
    name: 'historiquebudgetGeneralItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      historiquebudgetGeneralItem
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
      "montantBudgetGeneral",
      "historiquebudgetGeneral"
      // "chapitres",
      // "sections"
    ]),
    MontantTotal(){
  
    
    var montant = this.groupe.ua_historique_budget_general.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 
    isFolder: function () {
      return this.groupe.ua_historique_budget_general &&
        this.groupe.ua_historique_budget_general.length
    },

    getNombreArticle(){
        var nombre = this.groupe.ua_historique_budget_general.length
        if(nombre) return nombre
        return '0' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.ua_historique_budget_general.length,
        'icon-minus': this.isOpen && this.groupe.ua_historique_budget_general.length
        //    'icon-folder-close': !this.isOpen && this.groupe.ua_historique_budget_general.length,
        // 'icon-folder-open': this.isOpen && this.groupe.ua_historique_budget_general.length
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


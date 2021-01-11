
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{afficheLibellePlanEconomique(groupe.code)}}---{{groupe.libelle}}</h5>
                 <span class="badge badge-inverse" >{{getNombreArticle}}</span>

                </a> 
            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen ">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <!-- <th>code</th> -->
                    <th style="width:80%">famille acticles</th>
                     <th style="width:10%">Duree de vie</th>
                    <th style="width:10%">Type de Bien</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <FamilleItem
                        class="item"
                        v-for="groupeElement in groupe.equipement_famille"
                        :key="groupeElement.id"
                        :article="groupeElement"
                      @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></FamilleItem>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import FamilleItem from './FamilleItem'
import { mapGetters} from "vuex";
export default {
    name: 'FamilleItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      FamilleItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
   ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),

    isFolder: function () {
      return this.groupe.equipement_famille &&
        this.groupe.equipement_famille.length
    },

    getNombreArticle(){
        var nombre = this.groupe.equipement_famille.length
        if(nombre) return nombre
        return '0' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.equipement_famille.length,
        'icon-minus': this.isOpen && this.groupe.equipement_famille.length
        //    'icon-folder-close': !this.isOpen && this.groupe.equipement_famille.length,
        // 'icon-folder-open': this.isOpen && this.groupe.equipement_famille.length
      }
    },

   afficheLibellePlanEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
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
      if (this.isFolder ) {
        this.isOpen = !this.isOpen 
        
      }
    },

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


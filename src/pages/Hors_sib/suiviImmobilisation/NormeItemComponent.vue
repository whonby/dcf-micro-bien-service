
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{groupe.code}}---{{groupe.libelle}}</h5>
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
                    <th>Fonction</th>
                  
                    <th>Famille</th>
                    <th>Montant TTC</th>
                    <th>Quantite</th>
                   
                    <th>Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                   <NormeItem
                        class="item"
                        v-for="groupeElement in groupe.equipe__norme_equipement"
                        :key="groupeElement.id"
                        :article="groupeElement"
                      @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    >
                    
                    </NormeItem>
                   
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import NormeItem from './NormeItem'

export default {
    name: 'NormeItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      NormeItem
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
      active: null
    }
  },



  computed: {
  
    isFolder: function () {
      return this.groupe.equipe__norme_equipement &&
        this.groupe.equipe__norme_equipement.length
    },

    getNombreArticle(){
        var nombre = this.groupe.equipe__norme_equipement.length
        if(nombre) return nombre
        return 'Aucun' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.equipe__norme_equipement.length,
        'icon-minus': this.isOpen && this.groupe.equipe__norme_equipement.length
        //    'icon-folder-close': !this.isOpen && this.groupe.equipe__norme_equipement.length,
        // 'icon-folder-open': this.isOpen && this.groupe.equipe__norme_equipement.length
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


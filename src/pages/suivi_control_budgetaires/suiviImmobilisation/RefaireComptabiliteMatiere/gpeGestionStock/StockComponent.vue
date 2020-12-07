
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box" v-if="groupe.gestion_stock.length > 0 ">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5 style="font-size:14px">{{groupe.libelle}}</h5>
                 <span class="badge badge-inverse" >{{getNombreArticle}}</span>

                </a> 
            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th title="unite administrative">UA</th>
                  
                     <th>Famille</th>
                   
                    <th title="quantite en stock">Quantité en stock</th>
                     <th>Date d'entrée</th>
                    <th title="quantite entrant">Quantité entrée</th>
                    <th>Date de sortie</th>
                    <th title="quantite sortant">Quantité sortie</th>
                    <th colspan="2">Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <StockItem
                        class="item"
                        v-for="groupeElement in groupe.gestion_stock"
                        :key="groupeElement.id"
                        :article="groupeElement"
                        @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></StockItem>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import StockItem from './StockItem'

export default {
    name: 'StockItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      StockItem
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
      return this.groupe.gestion_stock &&
        this.groupe.gestion_stock.length
    },

    getNombreArticle(){
        var nombre = this.groupe.gestion_stock.length
        if(nombre) return nombre
        return '0' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.gestion_stock.length,
        'icon-minus': this.isOpen && this.groupe.gestion_stock.length
        //    'icon-folder-close': !this.isOpen && this.groupe.gestion_stock.length,
        // 'icon-folder-open': this.isOpen && this.groupe.gestion_stock.length
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


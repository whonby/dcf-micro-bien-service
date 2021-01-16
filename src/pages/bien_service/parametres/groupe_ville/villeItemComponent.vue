
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box">
            <div class="accordion-heading">
              <div @click="toggle()" class="widget-title"> <a data-parent="#collapse-group" href="#collapseGOne" data-toggle="collapse"> 
                  <span class="icon"><i :class="iconClasses"></i></span>
                <h5>{{groupe.libelle}}</h5>
                 <!-- <span class="badge badge-inverse" >{{getNombreArticle}}</span> -->

                </a> 
            </div>
            </div>
            <div class="collapse in accordion-body"  v-if="isFolder && isOpen ">
              <div class="widget-content"> 
                 <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                  
                    <th width="90%">Ville</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                   <villeItem
                        class="item"
                        v-for="groupeElement in groupe.pays_ville"
                        :key="groupeElement.id"
                        :article="groupeElement"
                      @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></villeItem>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import villeItem from './villeItem'

export default {
    name: 'villeItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      villeItem
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
      return this.groupe.pays_ville &&
        this.groupe.pays_ville.length
    },

    // getNombreArticle(){
    //     var nombre = this.groupe.pays_ville.length
    //     if(nombre) return nombre
    //     return '0' 
    // },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.pays_ville.length,
        'icon-minus': this.isOpen && this.groupe.pays_ville.length
        //    'icon-folder-close': !this.isOpen && this.groupe.pays_ville.length,
        // 'icon-folder-open': this.isOpen && this.groupe.pays_ville.length
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


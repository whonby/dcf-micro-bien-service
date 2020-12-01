
<template>
   
      <div class="accordion" >
          <div class="accordion-group widget-box" v-if="groupe.reparation_vehicule.length > 0 ">
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
                    
                    <th>N°immatriculation</th>
                     <th>Marque</th>
                    <th>Modèle</th>
                    <th>Couleur</th>
                     <th>Panne Signale</th>
                     <th>Date Signal</th>
                     <th>Date Envoi</th>
                    <th>Entreprise</th>
                     <th>Date Retour</th>
                    <th>Coût Réparation</th>
                    <th>Appréciation</th>
                    
                    <th colspan="2">Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                   <reparationvehItem
                        class="item"
                        v-for="groupeElement in groupe.reparation_vehicule"
                        :key="groupeElement.id"
                        :article="groupeElement"
                        @modification="$emit('modification', $event)"
                        @suppression="$emit('suppression', $event)"

                    ></reparationvehItem>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        
        
        </div>

  
</template>


<script>
import reparationvehItem from './reparationvehItem'

export default {
    name: 'reparationvehItemComponent',
     props: {
    groupe: Object,
  },
  components: {
      reparationvehItem
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
      return this.groupe.reparation_vehicule &&
        this.groupe.reparation_vehicule.length
    },

    getNombreArticle(){
        var nombre = this.groupe.reparation_vehicule.length
        if(nombre) return nombre
        return '0' 
    },
    iconClasses() {
      return {
        'icon-plus': !this.isOpen && this.groupe.reparation_vehicule.length,
        'icon-minus': this.isOpen && this.groupe.reparation_vehicule.length
        //    'icon-folder-close': !this.isOpen && this.groupe.reparation_vehicule.length,
        // 'icon-folder-open': this.isOpen && this.groupe.reparation_vehicule.length
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


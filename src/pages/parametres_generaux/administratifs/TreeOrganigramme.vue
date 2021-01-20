<template>
     <li>
       
    <div 
      :class="{bold: isFolder}"
      
      @dblclick="$emit('modifier', item)">
    <span v-if="isFolder" @click="toggle"> <i :class="iconClasses"></i></span>

     <span style="font-size: 1.5em;" :title="item.libelle"> <code > {{item.code}}</code>  {{ afficherLibelle(item.libelle) |subStr(100) }} </span>
     <span style="cursor: pointer;"  class="add" @click="$emit('ajouterElementEnfant', item)"><i class="icon-plus-sign"></i></span>
     <!-- <span style="cursor: pointer;"  class="add" @click="$emit('modifier', item)"><i class="icon-pencil"></i></span> -->
     <span style="cursor: pointer;" class="add" @click="$emit('supprimer', item)"><i class="icon-trash"></i></span>

    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <Tree
        class="item"
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        @ajouterElementEnfant="$emit('ajouterElementEnfant', $event)"
        @supprimer="$emit('supprimer', $event)"

        @modifier="$emit('modifier', $event)"
      ></Tree>
    </ul>
  </li>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Tree',
     props: {
    item: Object
  },
  data: function () {
    return {
      isOpen: false,
      isOver: false,
    }
  },
  computed: {
  ...mapGetters("uniteadministrative", [
     
      "uniteAdministratives",
     "StructureOrganigrammeUa",
     "groupeNiveau1Ua",
     "directions"
      
    ]),
    ...mapGetters("SuiviImmobilisation", [
      
      "normeImmo",
      "groupeServiceNorme",
      "groupeFonctionNormeEquipe",
      "services",
      
      
      ]),
// methode pour maper notre guetter
...mapGetters('personnelUA', ['all_acteur_depense','fonctions']),
   ...mapGetters('parametreGenerauxAdministratif', [ 'getterstructuresOrganisationUa',
    'getterplanOrganisationUa']) ,
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    },
    afficherLibelle(){
  return id1 =>{
        if(id1!=null && id1!=""){
          const objet = this.uniteAdministratives.find(item => item.id==id1)
          if(objet) 
          return objet.libelle
        }
        if(id1!=null && id1!=""){
          const objet = this.directions.find(item => item.id==id1)
          if(objet) 
          return objet.libelle
        }
        if(id1!=null && id1!=""){
          const objet = this.services.find(item => item.id==id1)
          if(objet) 
          return objet.libelle
        }
        if(id1!=null && id1!=""){
          const objet = this.fonctions.find(item => item.id==id1)
          if(objet) 
          return objet.libelle
        }
        
        
        
      }
      
},
    iconClasses() {
      return {
        'icon-chevron-right': !this.isOpen && this.item.children.length,
        'icon-chevron-down': this.isOpen && this.item.children.length
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
      if (this.isFolder) {
        this.isOpen = !this.isOpen
         // console.log(this.$route.name)
      }
    },
  
  }
}
</script>

<style>
.add:hover{

}
</style>

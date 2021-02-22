<template>
  

  
                  <tr class="odd gradeX" v-if="article" @dblclick="$emit('modification', article)">
                  
                    <td
                    
                    > {{article.code_agence || 'Non renseigné'}}</td>
                      <td
                    
                    > {{article.nom_agence || 'Non renseigné'}}</td>
                      <td
                    
                    > {{article.tel_agence || 'Non renseigné'}}</td>
                      <td
                    
                    > {{paysAfficher(article.pays_id) || 'Non renseigné'}}</td>
                      <td
                    
                    > {{villeAfficher(article.ville_id) || 'Non renseigné'}}</td>
                      <td
                    
                    > {{communeAfficher(article.commune_id) || 'Non renseigné'}}</td>
                    
      <td
                    
                    > {{article.situation_geo || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click.prevent="$emit('suppression', article.id)">
                        <span>
                          <i class="icon icon-trash"></i>Supprimer
                        </span>
                      </button>
                    </td>
                  </tr>



  
  
</template>

<script>
import { mapGetters} from "vuex";

export default {
    name: 'agenceItem',
     props: {
    article: Object,
  },
 computed: {
  ...mapGetters("bienService", ['villes','pays','communes']),
 ...mapGetters('gestionMarche', ['banques','agenceBanques']) ,
 ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
  
  paysAfficher() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterplan_pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    villeAfficher() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterplan_pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    banqueAfficher() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.banques.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     communeAfficher() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterplan_pays.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
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


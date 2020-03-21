<template>
  

  
                  <tr class="odd gradeX" v-if="article" @dblclick="$emit('modification', article)">
                    <td
                    
                    > {{afficheFonction(article.fonction_id) || 'Non renseigné'}}</td>
                   
 <td
                    
                    > {{afficherGrade(article.grade_id) || 'Non renseigné'}}</td>
                     <td
                    
                    > {{article.recrutement || 'Non renseigné'}}</td>
                     <td
                    
                    > {{article.promotion || 'Non renseigné'}}</td>
                    <td>
                      <button class="btn btn-danger" @click.prevent="$emit('suppression', article.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>



  
  
</template>

<script>
import { mapGetters} from "vuex";

export default {
    name: 'ClassificationEmploisGradeItem',
     props: {
    article: Object,
  },
 
  computed: {
     ...mapGetters('personnelUA', ['familleFonction',"grades","fonctions"]),

afficheFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     afficherGrade() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grades.find(qtreel => qtreel.id == id);

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


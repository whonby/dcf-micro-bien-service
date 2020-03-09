
<template>
  

  
                  <tr class="odd gradeX" v-if="article" @dblclick="$emit('modification', article)">
                     <!-- <td style="width:50%"  >{{afficherUniteAdministrative(article.s_ua_id)|| 'Non renseignÃ©'}}</td> -->
                      <td >{{article.direction_id|| ''}}</td>
                       <td >{{afficherService(article.service_id)|| ''}}</td>
                     <td  >{{afficherFonction(article.fonction_id)|| ''}}</td>
                     <td style="text-align:center;color:red;font-weight:bold" >{{article.norme|| 'Non renseigné'}}</td>
                     
                 

                    <td>
                      <button
                        class="btn btn-danger"
                        
                        @click.prevent="$emit('suppression', article.id)"
                      >
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>



  
  
</template>

<script>
import { mapGetters} from "vuex";
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
    name: 'NormeImmoItem',
     props: {
    article: Object,
  },
 
 
 computed: {
    ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives"
      // "chapitres",
      // "sections"
    ]),
    
 ...mapGetters('personnelUA', ['all_acteur_depense','fonctions']),
    afficherFonction() {
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
   afficherService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
 afficherDirection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.directions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
        
      }
    },
    // formatageSomme:formatageSomme,
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


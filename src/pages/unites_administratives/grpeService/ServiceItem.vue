

<template>
  


                  <tr class="odd gradeX" v-if="article" @dblclick="$emit('modification', article)">
                     <!-- <td style="width:50%"  >{{afficherUniteAdministrative(article.s_ua_id)|| 'Non renseigné'}}</td> -->
                     <td style="width:90%;font-size:14px;font-weight:bold;" >{{afficherLibelleService(article.serviceua_id)|| 'Non renseigné'}}</td>
                    
                 

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
    name: 'ServiceItem',
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
      ...mapGetters("SuiviImmobilisation", ["services"]),
   afficherLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  
 afficherUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

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


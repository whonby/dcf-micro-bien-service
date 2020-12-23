<template>
  

  
                  <tr class="odd gradeX" v-if="article" >
                 
                    <td style="font-size:14px"> {{article.numidentification || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{article.numimmatriculation || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{article.immobilisation || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleTypeVehicule(article.typevehicule) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libellemarqueVehicules(article.marque) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleModeleVehicules(article.modele) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleTypeEnergie(article.energie) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{article.numchassis || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{article.numserie || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{article.couleur || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleTransmission(article.transmission) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{article.nombreportes || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{article.nombreplace || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{article.puissance || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleEtatImmobilisations(article.etatvehicule) || 'Non renseigné'}}</td>
                    
                    <td>
                      <button class="btn  btn-success" @click.prevent="$emit('modification', article)" v-if="article.situationvehicule == 1" :disabled="article.situationvehicule == 1" title="Vehicule déja affecté">
                        <span>
                          <i class="icon-thumbs-up"></i>
                        </span>
                      </button>
                      <button v-else @click.prevent="$emit('modification', article)" class="btn  btn-danger" >
              
                        <span>
                          <i class=" icon-thumbs-down"></i>
                        </span>
                </button>
                    </td>
                    <td>
                        <button  @click.prevent="afficherModalModifierTitre(article.id)" class="btn  btn-default" >
              
                        <span>
                          <i class="icon-folder-open"></i>
                        </span>
                </button>
             
                    </td>
                  </tr>




  
  
</template>

<script>

import { mapGetters} from "vuex";
export default {
  data () {
    return {
    }
  },
    name: 'ModelItem',
     props: {
    article: Object,
  },
 

  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
  },
   computed: {
     ...mapGetters("SuiviImmobilisation", ["EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation","Transmissions"]),  
       
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
  
    ]),
     libelleEtatImmobilisations() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.EtatImmobilisations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleTypeVehicule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TypeVehicule.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleTypeEntretien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TypeEntretien.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleModeleVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libellemarqueVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marqueVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleTransmission() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Transmissions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  libelleTypeEnergie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TypeEnergie.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  },
  methods: {

    afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/DetaiAffectationVehicule/" + id
      });
    },
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


<template>
  

  
                  <tr class="odd gradeX" v-if="article" @dblclick="$emit('modification', article)">
                 
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.numidentification || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.numimmatriculation || 'Non renseigné'}}</td>
                    <!-- <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.immobilisation || 'Non renseigné'}}</td> -->
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libelleTypeVehicule(article.typevehicule) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libellemarqueVehicules(article.marque) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libelleModeleVehicules(article.modele) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libelleTypeEnergie(article.energie) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.numchassis || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.numserie || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.couleur || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libelleTransmission(article.transmission) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.nombreportes || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.nombreplace || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.puissance || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libelleEtatImmobilisations(article.etatvehicule) || 'Non renseigné'}}</td>
                    
                    <td>
                      <button class="btn btn-danger" @click.prevent="$emit('suppression', article.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                     <td>
                        <button  @click.prevent="detailVehicule1(article.id)" class="btn  btn-default" >
              
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
     ...mapGetters("SuiviImmobilisation", ["Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),  
       
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
  
    ]),
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

    detailVehicule1(id) {

      this.$router.push({
        path: "/DetailVehicule/" + id
      });
    },
    afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModifierFicheVehicule/" + id
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


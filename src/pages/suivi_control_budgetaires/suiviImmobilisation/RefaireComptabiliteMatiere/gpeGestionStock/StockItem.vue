<template>
  

  
                  <tr class="odd gradeX" v-if="article" >
                 
                    


                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libelleFamilleEquipement(article.famill_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.histo_qte || 0}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.quantitestock || 0}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{formaterDate(article.date_entre) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.qteentrant || 0}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{formaterDate(article.date_sortie) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{article.qtesortie || 0}}</td>
                   
<td>
  <button class="btn btn-inverse" @click.prevent="$emit('modification', article)" title="ajouter quantite entrant">
                        <span>
                          <i class=" icon-edit"></i>
                        </span>
                      </button>
</td>
                     <td>
                      <button class="btn btn-danger" @click.prevent="$emit('suppression', article.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                    <!-- <td>
                        <button  @click.prevent="afficherModalModifierTitre(article.id)" class="btn  btn-default" >
              
                        <span>
                          <i class="icon-folder-open"></i>
                        </span>
                </button>
             
                    </td> -->
                  </tr>




  
  
</template>

<script>

import { mapGetters} from "vuex";
import moment from "moment";

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
     ...mapGetters("SuiviImmobilisation", [
       "equipements",
      "familles",
      "articles",
       "Appreciations","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation","Transmissions"]),  
       
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      "getvehicules"
  
    ]),
      

    libelleFamilleEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleUniteAdministrative() {
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
    afficheCoulleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getvehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.couleur;
      }
      return 0
        }
      };
    },
    afficheImmatriculation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getvehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numimmatriculation;
      }
      return 0
        }
      };
    },
    afficheIdMarque() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getvehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marque;
      }
      return 0
        }
      };
    },
    afficheIdModel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getvehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.modele;
      }
      return 0
        }
      };
    },
    libelleAppreciations() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Appreciations.find(qtreel => qtreel.id == id);

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
//formatageSomme:formatageSomme,
formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModifierReparationVehicule/" + id
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


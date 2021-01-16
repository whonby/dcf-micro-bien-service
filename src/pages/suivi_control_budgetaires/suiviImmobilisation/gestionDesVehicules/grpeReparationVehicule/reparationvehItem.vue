<template>
  

  
                  <tr class="odd gradeX" v-if="article" >
                 
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{afficheImmatriculation(article.vehicule_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libellemarqueVehicules(afficheIdMarque(article.vehicule_id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libelleModeleVehicules(afficheIdModel(article.vehicule_id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{afficheCoulleur(article.vehicule_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{affichePanneSignaler(afficheIdMarche(article.acte_id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{formaterDate(article.date_signal) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{formaterDate(article.date_envoi) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{afficheNomEntreprise(afficheIdEntreprise(article.acte_id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{formaterDate(article.date_retour) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{formatageSomme(parseFloat(afficheMontantReparation(article.acte_id))) || 'Non renseigné'}}</td>
                    <td style="font-size:14px" @dblclick="afficherModalModifierTitre(article.id)"> {{libelleAppreciations(article.appreciation_id) || 'Non renseigné'}}</td>
                   
                    <td>
                      <button class="btn  btn-warning" @click.prevent="$emit('modification', article)" v-if="article.appreciation_id == 0">
                        <span>
                          <i class=" icon-hand-up"></i>
                        </span>
                      </button>
                      <button v-else-if="article.appreciation_id == 6" @click.prevent="$emit('modification', article)" class="btn  btn-danger" >
              
                        <span>
                          <i class=" icon-thumbs-down"></i>
                        </span>
                </button>
                 <button v-else @click.prevent="$emit('modification', article)" class="btn  btn-success" >
              
                        <span>
                          <i class=" icon-thumbs-up"></i>
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
import { formatageSomme } from "../../../../../Repositories/Repository";
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
     ...mapGetters("SuiviImmobilisation", ["Appreciations","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation","Transmissions"]),  
       
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      "getvehicules"
  
    ]),
    ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
       "typeActeEffetFinanciers","getterLoadinMarche"]),
       ...mapGetters("gestionMarche", ['entreprises']),
    afficheIdMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marche_id;
      }
      return 0
        }
      };
    },
     afficheMontantReparation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    afficheIdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },
    afficheNomEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },
     affichePanneSignaler() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
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
formatageSomme:formatageSomme,
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


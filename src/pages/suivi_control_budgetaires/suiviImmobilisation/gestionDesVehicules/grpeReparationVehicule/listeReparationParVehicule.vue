
<template>
  <div>

    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div >
      <hr />
      <div >
        <div >
            <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                         <th>N°immatriculation</th>
                     <th>Marque</th>
                    <th>Modèle</th>
                    <th>Couleur</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                  
                  <td style="font-size:14px"> {{afficheImmatriculation(detail_vehicule.id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libellemarqueVehicules(afficheIdMarque(detail_vehicule.id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{libelleModeleVehicules(afficheIdModel(detail_vehicule.id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{afficheCoulleur(detail_vehicule.id) || 'Non renseigné'}}</td>
                     
                     
                     

                    </tbody>
                </table>
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Types équipements"
            :data="filtre_equipement"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des Reparations des Véhicules</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    
                   
                     <th>Panne Signalée</th>
                     <th>Date bon de commande</th>
                     <th>Entreprise</th>
                     <th>Date Sortie</th>
                    
                     <th>Date Retour</th>
                   
                    <th>Appréciation</th>
                     <th>Coût Réparation</th>
                    
                     
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="equipement in listeDesReparationVehicule(detail_vehicule.id)"
                    :key="equipement.id"
                  >
                
                    <td style="font-size:14px"> {{affichePanneSignaler(afficheIdMarche(equipement.acte_id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{formaterDate(equipement.date_signal) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{afficheNomEntreprise(afficheIdEntreprise(equipement.acte_id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{formaterDate(equipement.date_envoi) || 'Non renseigné'}}</td>
                    
                    <td style="font-size:14px"> {{formaterDate(equipement.date_retour) || 'Non renseigné'}}</td>
                   
                    <td style="font-size:14px"> {{libelleAppreciations(equipement.appreciation_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{formatageSomme(parseFloat(afficheMontantReparation(equipement.acte_id))) || 'Non renseigné'}}</td>
                  </tr>
                  <tr>
                      
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td style="text-align:center;color:red">MONTANT DE REPARATION</td>
                      <td style="text-align:center;color:red">{{formatageSomme(parseFloat(MontantDesReparationVehicule(detail_vehicule.id)))}}</td>
                      
                  </tr>
                </tbody>
              </table>
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button> -->
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
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
  created() {
            this.marcheid=this.$route.params.id
   this.detail_vehicule = this.getvehicules.find(
       idmarche => idmarche.id == this.$route.params.id
         )
      
},
   computed: {
     ...mapGetters("SuiviImmobilisation", ["Appreciations","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation","Transmissions"]),  
       
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      "getvehicules",
      "ReparationVehicules"
  
    ]),
    ...mapGetters("bienService", ['mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser",
       "typeActeEffetFinanciers","getterLoadinMarche"]),
       ...mapGetters("gestionMarche", ['entreprises']),


listeDesReparationVehicule() {
      return id => {
        if (id != null && id != "") {
           return this.ReparationVehicules.filter(qtreel => qtreel.vehicule_id == id && qtreel.article_id == null);

        }
      };
    },
MontantDesReparationVehicule() {
      return id => {
        if (id != null && id != "") {
           return this.ReparationVehicules.filter(qtreel => qtreel.vehicule_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.MontantContrat(this.acte_id)), 0).toFixed(0);

        }
      };
    },


MontantContrat() {
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


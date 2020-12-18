AfficheIdPersonnel
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
                        <th style="width:20%">Ua</th>
                        <th style="width:20%">Matricule</th>
                        <th style="width:20%">Nom && Prénoms</th>
                       
                        <th style="width:40%">Fonction</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                  
                  <!-- <td style="font-size:14px"> {{afficherActeurDepenseMatricule(detail_Personnel.acteur_depense_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{afficherActeurDepenseNomPrenoms(detail_Personnel.acteur_depense_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{afficheFonction(detail_Personnel.fonction_id) || 'Non renseigné'}}</td>
                   -->
                    <td style="font-size:14px"> {{libelleUa(AfficheIdUa(detail_Personnel.id)) || 'Non renseigné'}}</td>
                     <td style="font-size:14px"> {{afficherActeurDepenseMatricule(AfficheIdPersonnel(detail_Personnel.id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{afficherActeurDepenseNomPrenoms(AfficheIdPersonnel(detail_Personnel.id)) || 'Non renseigné'}}</td>
                    <td style="font-size:14px"> {{afficheFonction(AfficheIdFonction(detail_Personnel.id)) || 'Non renseigné'}}</td>
                  
                     

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
              <h5>Mes Articles</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                <tr>
                    
                   <th>Année Budgétaire</th>
                     <th>Articles</th>
                     <th>Date mise en service</th>
                    
                    
                    <th colspan="2">Action</th>
                     
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="equipement in ListeArticleParPersonnel(AfficheIdPersonnel(detail_Personnel.id))"
                    :key="equipement.id"
                  >
                
                    <td style="font-size:14px"> {{equipement.exercice_budgetaire || 'Non renseigné'}}</td>
                   <td style="font-size:14px"> {{libelleFamille(equipement.famillearticle_id) || 'Non renseigné'}}</td>
                   
                    <td style="font-size:14px"> {{formaterDate(equipement.date_mise_service) || 'Non renseigné'}}</td>
                   <!-- <td style="font-size:14px"> {{equipement.qte_affecte || 'Non renseigné'}}</td> -->
                    <!-- <td style="font-size:14px"> {{formatageSomme(parseFloat(equipement.prixUnitaire)) || 'Non renseigné'}}</td> -->
                    <td>
                         <router-link
                        :to="{name : 'AjouterReparationMateriel', params: {id:equipement.id}}"
                        class="btn btn-info"
                        title=""
                      >
                        <span>
                          <i class="icon  icon-plus"></i>
                        </span>
                      </router-link>
                      
                    </td>
                    <td>
                      
                       <router-link
                        :to="{name : 'listeReparationParVehicule', params: {id:equipement.id}}"
                        class="btn btn-success"
                        title=""
                      >
                        <span>
                          <i class="icon icon-list-ol"></i>
                        </span>
                      </router-link>
                     </td>
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
 
search:{},
  filters: {
  
  	subStr: function(string, nbr) {
      if (!string) return ''
      if(string.length <= nbr) return string 
    	return string.substring(0,nbr) + '...';

      
        }
  
  },
  created() {
            this.marcheid=this.$route.params.id
   this.detail_Personnel = this.acte_personnels.find(
       idmarche => idmarche.id == this.$route.params.id
         )
      
},
   computed: {
     ...mapGetters("SuiviImmobilisation", ["familles","immobilisations","Appreciations","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation","Transmissions"]),  
       
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

 ...mapGetters('personnelUA', ["acteur_depenses","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",]),



AfficheIdPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.acteur_depense_id;
      }
      return 'Non renseigné'
        }
      };
    },





libelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },








libelleFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },




afficheFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
afficherActeurDepenseNomPrenoms() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.nom.concat('    ',qtereel.acteur_depense.prenom);
      }
      return 'Non renseigné'
        }
      };
    },
afficherActeurDepenseMatricule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule;
      }
      return 'Non renseigné'
        }
      };
    },

ListeArticleParPersonnel() {
      return id => {
        if (id != null && id != "") {
           return this.immobilisations.filter(qtreel => qtreel.acteurdepense_id == id);

        }
      };
    },
    AfficheIdFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.fonction_id;
      }
      return 'Non renseigné'
        }
      };
    },
      AfficheIdUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acte_personnels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 'Non renseigné'
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


<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
            <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
        <br>
        <h5 style="text-align:center;font-size:25px">{{afficherLibelleUA(detail_Vehicule.uAdministrative_id)}}</h5>
        
          <div class="widget-title" style="background-color: hsl(50, 33%, 25%); color: white;">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5 style="color: white;">INFORMATION SUR LE VEHICULE</h5>
          </div>
 <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                       <th>IMMATRICULATION</th>
                    <th>MARQUE</th>
                     
                    <th>MODDELE</th>
                    <th>ENERGIE</th>
                    <th>NUMERO CHASSIS</th>
                    <th>COULEUR</th>
                    <th>TRANSMISSION</th>
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  
                  <td>{{detail_Vehicule.numimmatriculation || 'Non renseigné'}}</td>
                  <td>{{libellemarqueVehicules(detail_Vehicule.marque_id) || 'Non renseigné'}}</td>  
                    <td>{{libelleModeleVehicules(detail_Vehicule.model_id) || 'Non renseigné'}}</td>
                    <td>{{libelleTypeEnergie(detail_Vehicule.energie) || 'Non renseigné'}}</td>
                  <td>{{detail_Vehicule.numchassis || 'Non renseigné'}}</td>
                  <td>{{detail_Vehicule.couleur || 'Non renseigné'}}</td>
                  <td>{{libelleTransmission(detail_Vehicule.transmission) || 'Non renseigné'}}</td>
                  <!-- <td>{{formatageSomme(immobilisat.prixUnitaire)|| 'Non renseigné'}}</td> -->
                  
                </tr>
              </tbody>
            </table>
            
            
             <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                   <th>NOMBRE DE PORTE</th>
                  <th>NOMBRE DE PLACE</th>
                  <th>PUISSANCE</th>
                  <th>ETAT DU VEHICULE</th>
                  <th>DUREE DE VIE</th>

                  <th>VALEUR D'ACQUISITION</th>
                  <th>ANNEE DU VEHICULE</th>
                  <!-- <th title="Exercice Budgetaire">Exercice Budget</th> -->
                 
                 
                </tr>
              </thead>
              <tbody>
              <tr class="odd gradeX">
                  
                  <td>{{detail_Vehicule.nombreportes || 'Non renseigné'}}</td>
                  <td>{{detail_Vehicule.nombreplace || 'Non renseigné'}}</td>  
                    <td>{{detail_Vehicule.puissance || 'Non renseigné'}}</td>
                    <td>{{libelleTypeEnergie(detail_Vehicule.etatvehicule) || 'Non renseigné'}}</td>
                  <td>{{detail_Vehicule.durevie || 'Non renseigné'}} Ans</td>
                  <td>{{formatageSomme(parseFloat(detail_Vehicule.prix_unitaire)) || 'Non renseigné'}}</td>
                  <td>{{detail_Vehicule.anneevehicule|| 'Non renseigné'}}</td>
                  <!-- <td>{{detail_Vehicule.transmission || 'Non renseigné'}}</td> -->
                  <!-- <td>{{formatageSomme(immobilisat.prixUnitaire)|| 'Non renseigné'}}</td> -->
                  
                </tr>
              </tbody>
            </table>
           
          </div>
           <div class="widget-title" style="background-color: #1fef; color: white;">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5 style="color: #000000;">INFO SUR L'AFFECTATION DU VEHICULE</h5>
          </div>
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                       <th>SERVICE RATTACHE</th>
                    <th>FONCTION RATTACHE</th>
                     <th>PERSONNE RATTACHE</th>
                    <th>DATE AFFECTATION</th>
                    
                   
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr 
                  class="odd gradeX"
                    v-for="equipement in listeDesPersonnelAttribuer(detail_Vehicule.id)"
                    :key="equipement.id">
                  <td>{{afficherLibelleService(service_id(equipement.id)) || 'Non renseigné'}}</td>
                  <td>{{afficherLibelleFonction(fonction_id(equipement.id)) || 'Non renseigné'}}</td> 
                  <td>{{nomPersonnel(equipement.id) || 'Non renseigné'}}</td>  
                     <td>{{formaterDate(dateAffectation(equipement.id)) || 'Non renseigné'}}</td>
                   
                  

                </tr>
              </tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../../../../Repositories/Repository";
export default {
  
  data() {
    return {
      BesoinImmo: undefined
    };
  },
created() {
            this.marcheid=this.$route.params.id
   this.detail_Vehicule = this.GestionStockageArticles.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  
},

  watch: {
    '$route' : 'getDetail'
  },
  

  computed: {
     ...mapGetters("SuiviImmobilisation", [
       "services",
      "trieUaImmobilisation",
      "immobilisations",
      "equipements",
      "familles",
      "articles",
      "SommeTotalBesoin",
      "getAfficheArticle",
      "Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"
    ]),
     
       ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
   "decomptefactures",
   "getvehicules",
   "GestionStockageArticles"
   
   ]),
   ...mapGetters("personnelUA", ["personnaliseActeurDepense","acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),


listeDesPersonnelAttribuer() {
      return id => {
        if (id != null && id != "") {
           return this.immobilisations.filter(qtreel => qtreel.stock_id == id);

        }
      };
    },

afficherLibelleUA() {
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


afficherLibelleFonction() {
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
service_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.service_id;
      }
      return 0
        }
      };
    },
fonction_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.fonction_id;
      }
      return 0
        }
      };
    },
dateAffectation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.date_mise_service;
      }
      return 0
        }
      };
    },
nomPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.stock_id == id);

      if (qtereel) {
        return qtereel.	nom_prenoms;
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
  
  },
  methods: {
    getDetail(){
        this.BesoinImmo = this.trieUaImmobilisation.find(
      BesoinImmo => BesoinImmo.id == this.$route.params.id_Besoin
    );
    },
    afficherModalListePersonnel(){
                window.history.back()
            },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
       formatageSomme: formatageSomme,
  }
};
</script>
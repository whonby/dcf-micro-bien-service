<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
            <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="afficherModalListePersonnel">Page Précédente</button>
    
        </div> 
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Information sur le Véhicule</h5>
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
            <br>
             <br>
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

                  <!-- <th title="Exercice Budgetaire">Exercice Budget</th> -->
                 
                 
                </tr>
              </thead>
              <tbody>
              <tr class="odd gradeX">
                  
                  <td>{{detail_Vehicule.nombreportes || 'Non renseigné'}}</td>
                  <td>{{detail_Vehicule.nombreplace || 'Non renseigné'}}</td>  
                    <td>{{detail_Vehicule.puissance || 'Non renseigné'}}</td>
                    <td>{{libelleTypeEnergie(detail_Vehicule.etatvehicule) || 'Non renseigné'}}</td>
                  <td>{{detail_Vehicule.durevie || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(parseFloat(detail_Vehicule.prix_unitaire)) || 'Non renseigné'}}</td>
                  <!-- <td>{{detail_Vehicule.transmission || 'Non renseigné'}}</td> -->
                  <!-- <td>{{formatageSomme(immobilisat.prixUnitaire)|| 'Non renseigné'}}</td> -->
                  
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
      "trieUaImmobilisation",
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
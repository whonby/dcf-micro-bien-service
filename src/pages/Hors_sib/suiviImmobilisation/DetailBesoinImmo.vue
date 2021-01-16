<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Detail Besoins Equipement</h5>
          </div>

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                       <th>Type Unite administrative</th>
                    <th>Unite administrative</th>
                     
                    <th>Designation</th>
                    <th>Quantité</th>
                    <th>Prix Unitaire</th>
                    <th>Montant Total</th>
                    <th>Date</th>
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  
                  <td>{{BesoinImmo.typeUniteAdmin.libelle || 'Non renseigné'}}</td>
                  <td>{{BesoinImmo.uniteAdminist.libelle || 'Non renseigné'}}</td>  
                    <td>{{BesoinImmo.famille.libelle || 'Non renseigné'}}</td>
                    <td>{{BesoinImmo.quantite || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(parseFloat(BesoinImmo.prix_unitaire)) || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(parseFloat(BesoinImmo.montant_total)) || 'Non renseigné'}}</td>
                  <td>{{formaterDate(BesoinImmo.date_jour) || 'Non renseigné'}}</td>
                  <td>{{formatageSomme(immobilisat.prixUnitaire)|| 'Non renseigné'}}</td>
                  
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// DEUXIEME PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                   <th>Equipement Type</th>
                  <th>Article</th>
                  <th>Service</th>
                  <th>Durée</th>
                  <th>Numero CC</th>

                  <th>Acteur Depense</th>

                  <!-- <th title="Exercice Budgetaire">Exercice Budget</th> -->
                 
                 
                </tr>
              </thead>
              <tbody>
                <!-- <tr class="odd gradeX">
                  <td>{{formatageSomme(immobilisat.total_actuel) || 'Non renseigné'}}</td>
                  <td v-if="immobilisat.type_immo == 1" >Corporelle</td>
                  <td v-else>Incorporelle</td>
                  <td>{{immobilisat.serviceImmo.libelle || 'Non renseigné'}}</td>
                  <td>{{immobilisat.duree || 'Non renseigné'}} ans</td>
                  <td>{{immobilisat.numero_CC || 'Non renseigné'}}</td>

                  
                 
                </tr> -->
              </tbody>
            </table>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
  
  data() {
    return {
      BesoinImmo: undefined
    };
  },
  created() {
    this.getDetail()
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
      "getAfficheArticle"
    ]),
  },
  methods: {
    getDetail(){
        this.BesoinImmo = this.trieUaImmobilisation.find(
      BesoinImmo => BesoinImmo.id == this.$route.params.id_Besoin
    );
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
       formatageSomme: formatageSomme,
  }
};
</script>
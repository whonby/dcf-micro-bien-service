<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title">
            <span class="icon">
              <i class="icon-th"></i>
            </span>
            <h5>Detail Budget Géneral </h5>
          </div>

          <!--- PREMIERE PARTIE --->
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                       <th title="Exercice Budgetaire">Exercice Budgetaire</th>
                  <th>Exercice Budgetaire</th>
                  <th>Grande Nature Depense</th>
                  <th>Section</th>
                  <th>Plan Programme</th>
                  <th>Destination</th>
                  <th>Nature Economique</th>
                 
                  <!-- <th>Acteur Depense</th> -->
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                  
                 <td
                     
                    >{{bGeneral.exoBudgetaire.annee || 'Non renseigné'}}</td>
                     <td
                    
                    >{{bGeneral.grandeNatureDepense.libelle || 'Non renseigné'}}</td>
                    <td
                     
                    >{{bGeneral.uniteAdminist.secti.code_section || 'Non renseigné'}}</td>
                     <td
                     
                    >{{bGeneral.planProgramme.code || 'Non renseigné'}}</td>
                    <td
                     
                    >{{bGeneral.destination || 'Non renseigné'}}</td>
                    <td
                     
                    >{{bGeneral.planBudget.code || 'Non renseigné'}}</td>
                  
                </tr>
              </tbody>
            </table>
            <!---/////////////////////// DEUXIEME PARTIES ///////////////////////--->
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <!-- <th>Code</th> -->
                    <th>Imputation Budgetaire</th>
                  <th>Sous Financement</th>
                   <th>Type Financement</th>
                   <th>Date Jours</th>
                   <th>Type ua</th>
                    <th>Dotation</th>

                  <!-- <th title="Exercice Budgetaire">Exercice Budget</th> -->
                 
                 
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX">
                 <td
                    
                    >{{bGeneral.imputationbudgetaire || 'Non renseigné'}}</td>
                     <td
                    
                    >{{bGeneral.sousFinancement.libelle || 'Non renseigné'}}</td>
                    <td
                    
                    >{{bGeneral.typeFinancement.libelle || 'Non renseigné'}}</td>
                     <td
                    
                    >{{formaterDate(bGeneral.date_jour) || 'Non renseigné'}}</td>
                    <td
                    
                    >{{bGeneral.typeFinancement.libelle || 'Non renseigné'}}</td>
                     <td
                    
                    >{{formatageSomme(bGeneral.dotation)|| 'Non renseigné'}}</td>
                    
                 
                </tr>
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
import { formatageSomme } from "../../../src/Repositories/Repository";
export default {
  
  data() {
    return {
      bGeneral: undefined
    };
  },
  created() {
    this.getDetail()
  },

  watch: {
    '$route' : 'getDetail'
  },
  

  computed: {
    ...mapGetters("planification_budgetaire", ["budgetGeneralUniteAdministrative"])
  },
  methods: {
    getDetail(){
        this.bGeneral = this.budgetGeneralUniteAdministrative.find(
      bGeneral => bGeneral.id == this.$route.params.id_budgetGeneral
    );
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
       formatageSomme: formatageSomme,
  }
};
</script>
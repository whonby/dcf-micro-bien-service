<template>
  <div>
    <h1>TABLEAU DE BORD GENERAL{{ Grande_nature1 }}</h1>
    <h2>la vue se trouve dans gestion des modules tableau de bord general</h2>
    <div class="container-fluid" style="height: 100em">
      <div class="col-md-8 control-group">
        <select name="" id="" v-model="grande_nature_id" class="span6">
          <option
            v-for="grandnature in grandes_natures"
            :key="grandnature.id"
            :value="grandnature.id"
          >
            {{ grandnature.libelle }}
          </option>
        </select>
      </div>
      <br />
      <br />

      <div class="span4" style="border: 2px dotted #ffffff">
        <apexchart
          type="donut"
          :options="chartOptions"
          :series="[this.Grande_nature1, this.Grande_nature1]"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";
//import { noDCfNoAdmin, dcf } from "../../../Repositories/Auth";
//import { formatageSomme } from "../../../Repositories/Repository";
//import { ModelListSelect } from "vue-search-select";

export default {
  name: "TableauBordEquipeCF",
  components: {
    apexchart: VueApexCharts,
    // ModelListSelect,
  },

  data() {
    return {
      grande_nature_id: "",
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "donut",
        },
        labels: ["Budget execute en AE", "Budget preveisionel en CP"],
        colors: ["#8ea9db", "#f4b084"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
              title: {
                text: "Favourite Movie Type",
              },
            },
          },
        ],
      },
    };
  },

  created() {
    console.log(this.budgetGeneral);
  },
  computed: {
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "budgetGeneral",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
    ]),

    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },

    Grande_nature1() {
      if (this.grande_nature_id == "") {
        return 0
      } else {
         return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == this.grande_nature_id && item.actived == 1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      }
    
    },
     Grande_nature2() {
      if (this.grande_nature_id != "") {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == this.grande_nature_id && item.actived == 1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.ae), 0)
          .toFixed(0);
      } else {
        return 10;
      }
    },
  },
};
</script>

<style scoped>
</style>

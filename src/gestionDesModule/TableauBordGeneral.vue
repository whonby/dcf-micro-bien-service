<template>
  <div>
    <h1 style="text-align: center; text-decoration: underline">
      TABLEAU DE BORD GENERAL BUDGET GENERAL SIB
    </h1>
    <br />
    <div class="container-fluid">
      <div class="row" style="margin-left: 70px">
        <div class="span4">
          <label for=""><b>SECTION</b></label>
          <model-list-select
            style="border: 1px solid #000"
            class="wide"
            :list="sections"
            v-model="sections_id"
            option-value="id"
            option-text="nom_section"
            placeholder=""
          >
          </model-list-select>
        </div>

        <div class="span4">
          <label for=""><b>Unité Administrative</b></label>
          <model-list-select
            style="border: 1px solid #000"
            class="wide"
            :list="ListUa"
            v-model="ua_id"
            option-value="id"
            option-text="libelle"
            placeholder=""
          >
          </model-list-select>
        </div>

        <div class="span4">
          <label for=""><b>Date Debut</b></label>
          <input
            type="Date"
            name="datedebut"
            id="datedebut"
            class="form-control"
          />
        </div>

        <div class="span4">
          <label for=""><b>Date Fin</b></label>
          <input type="Date" name="datefin" id="datefin" class="form-control" />
        </div>
      </div>

      <br />
      <br />

      <div class="row" style="margin-left: 70px">
        <div class="span8 card" id="tableau1" style="">
          <h3 style="text-align: center">Personnels</h3>
          <div class="row">
            <div class="span4" style="height: 180px">
              <apexchart
                type="donut"
                :options="chartOptions1"
                :series="dataPourcentage"
              ></apexchart>
            </div>

            <div class="span4" style="height: 180px">
              <apexchart
                type="donut"
                :options="chartOptions21"
                :series="dataPourcentage21"
              ></apexchart>
            </div>
          </div>
        </div>

        <!-- bien et service -->

        <div class="span8 card" id="tableau1">
          <h3 style="text-align: center">Biens et Services</h3>
          <div class="row">
            <div class="span4" style="">
              <apexchart
                type="donut"
                :options="chartOptionsBienService1"
                :series="dataPourcentageBienService1"
              ></apexchart>
            </div>

            <div class="span4" style="">
              <apexchart
                type="donut"
                :options="chartOptionsBienService2"
                :series="dataPourcentageBienService2"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>

      <br />

      <br />

      <div class="row" style="margin-left: 70px">
        <!-- transferts -->

        <div class="span8 card" id="tableau1">
          <h3 style="text-align: center">Transferts</h3>
          <div class="row">
            <div class="span4" style="">
              <apexchart
                type="donut"
                :options="chartOptionsTransferts1"
                :series="dataPourcentageTransferts1"
              ></apexchart>
            </div>

            <div class="span4" style="">
              <apexchart
                type="donut"
                :options="chartOptionsTransferts2"
                :series="dataPourcentageTransferts2"
              ></apexchart>
            </div>
          </div>
        </div>

        <!-- Investissement -->

        <div class="span8 card" id="tableau1">
          <h3 style="text-align: center">Investissements</h3>
          <div class="row">
            <div class="span4" style="">
              <apexchart
                type="donut"
                :options="chartOptionsInvestissements1"
                :series="dataPourcentageInvestissements1"
              ></apexchart>
            </div>

            <div class="span4" style="">
              <apexchart
                type="donut"
                :options="chartOptionsInvestissements2"
                :series="dataPourcentageInvestissements2"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <br />

      <div class="row" style="margin-left: 85px">
        <div class="span14 card" id="" style="width: 1550px">
          <apexchart
            type="line"
            height="600"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>

      <br />
      <br />
    </div>
    <!-- pour les personnels -->
    {{ dataArrayPourcentage }}
    {{ dataArrayPourcentage21 }}
    <!-- pour bien et services -->
    {{ dataArrayPourcentageBienService1 }}
    {{ dataArrayPourcentageBienService2 }}
    <!-- pour les transferts -->
    {{ dataArrayPourcentageTransferts1 }}
    {{ dataArrayPourcentageTransferts2 }}

    <!-- pour les Investissements -->
    {{ dataArrayPourcentageInvestissements1 }}
    {{ dataArrayPourcentageInvestissements2 }}

    {{ datamois }}
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters, mapActions } from "vuex";
//import { noDCfNoAdmin, dcf } from "../../../Repositories/Auth";
import { formatageSomme } from "@/Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";

export default {
  name: "TableauBordEquipeCF",
  components: {
    apexchart: VueApexCharts,
    ModelListSelect,
  },

  data() {
    return {
      grande_nature_id: "",
      sections_id: 0,
      ua_id: 0,
      dataPourcentage: [],
      dataPourcentage21: [],
      dataPourcentageBienService1: [],
      dataPourcentageBienService2: [],
      dataPourcentageTransferts1: [],
      dataPourcentageTransferts2: [],
      dataPourcentageInvestissements1: [],
      dataPourcentageInvestissements2: [],

      chartOptions1: {
        chart: {
          width: 450,
          type: "donut",
        },
        labels: ["Budget prévisionnel en AE", "Budget exécuté en AE"],
        colors: ["#8ea9db", "#f4b084"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 480,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      //deuxiement partie de la nature personnel

      chartOptions21: {
        chart: {
          width: 450,
          type: "donut",
        },
        labels: ["Budget prévisionnel CP", "Budget exécuté CP"],
        colors: ["#f4b084", "#8ea9db"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 480,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      // debut de la nature bien et services
      chartOptionsBienService1: {
        chart: {
          width: 400,
          type: "donut",
        },
        labels: ["Budget prévisionnel AE", "Budget exécuté AE"],
        colors: ["#8ea9db", "#f4b084"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      chartOptionsBienService2: {
        chart: {
          width: 400,
          type: "donut",
        },
        labels: ["Budget prévisionnel CP", "Budget exécuté CP"],
        colors: ["#f4b084", "#8ea9db"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      // fin bien et service

      // debut de la nature Transferts
      chartOptionsTransferts1: {
        chart: {
          width: 400,
          type: "donut",
        },
        labels: ["Budget prévisionnel AE", "Budget exécuté AE"],
        colors: ["#8ea9db", "#f4b084"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      chartOptionsTransferts2: {
        chart: {
          width: 450,
          type: "donut",
        },
        labels: ["Budget prévisionnel CP", "Budget exécuté CP"],
        colors: ["#f4b084", "#8ea9db"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 480,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      // fin Transferts

      // debut de la nature Investissements
      chartOptionsInvestissements1: {
        chart: {
          width: 450,
          type: "donut",
        },
        labels: ["Budget prévisionnel AE", "Budget exécuté AE"],
        colors: ["#8ea9db", "#f4b084"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 480,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      chartOptionsInvestissements2: {
        chart: {
          width: 400,
          type: "donut",
        },
        labels: ["Budget prévisionnel CP", "Budget exécuté CP"],
        colors: ["#f4b084", "#8ea9db"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },

      // fin Investissements

      //pour le deuxieme tableau de bord en fonction des budgets exécutés

      series: [
        {
          name: "Budget Exécuté en AE",
          type: "column",
          data: [],
        },
        {
          name: "Budget Exécuté en CP",
          type: "line",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 500,
          type: "line",
        },
        stroke: {
          width: 2,
        },
        title: {
          text: "Budget Executé par Mois",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [4],
        },
        labels: [
          "Janvier",
          "Fevrier",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août ",
          "Septembre",
          "Octobre",
          "Novembre",
          "Decembre",
        ],
        xaxis: {
          type: "date",
        },
        yaxis: [
          {
            title: {
              text: "Budget Exécuté en AE",
            },
          },
          {
            opposite: true,
            title: {
              text: "Budget Exécuté en CP",
            },
          },
        ],
      },
    };
  },

  created() {
    console.log(this.budgetGeneral);
    console.log(this.grandes_natures);
    console.log(this.sections);
    console.log(".............................");
    console.log(this.getMoisLiquidation("2021-01-23"));
    // this.series = [
    //   {
    //     name: "Budget Exécuté en AE",
    //     type: "column",
    //     data: [this.DataJanv1, this.DataFev1, this.DataMars1, this.DataAvril1, this.DataMai1, this.DataJuin1,
    //     this.DataJuillet, this.DataAout1, this.DataSeptembre1, this.DataOctobre1, this.DataNovembre1, this.DataDecembre1],
    //   },
    //   {
    //     name: "Budget Exécuté en CP",
    //     type: "line",
    //     data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    //   },
    // ];
  },
  computed: {
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "budgetGeneral",
      "GrandeNaturePersonelCp",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),
    ...mapGetters("bienService", [
      "gettersDossierMandat",
      "gettersDemandeEngagement",
      "gettersDossierLiquidation",
    ]),

    //le computed pour le deuxieme tableau de bord
    // ****** pour les AE executé  en fonction des mois
    DataJanv1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "01" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataFev1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "02" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataMars1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "03" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataAvril1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "04" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataMai1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "05" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataJuin1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "06" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataJuillet1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "07" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataAout1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "08" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataSeptembre1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "09" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataOctobre1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "10" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataNovembre1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "11" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataDecembre1() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationid(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationdate(item.id)) == "12" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    // ****** pour les CP executé  en fonction des mois
    DataJanv2() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationidmandat(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
              "01" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataFev2() {
      return this.gettersDemandeEngagement
        .filter(
          (item) =>
            this.liquidationidmandat(item.id) == 8 &&
            this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
              "02" &&
            item.exercice == this.anneeAmort
        )
        .reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
          0
        )
        .toFixed(0);
    },

    DataMars2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "03" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataAvril2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "04" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataMai2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "05" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataJuin2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "06" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataJuillet2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "07" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataAout2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "08" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataSeptembre2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "09" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataOctobre2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "10" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataNovembre2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "11" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },

    DataDecembre2() {
      if (this.liquidationidmandatdate) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              this.getMoisLiquidation(this.liquidationidmandatdate(item.id)) ==
                "12" &&
              item.exercice == this.anneeAmort
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return 0;
      }
    },
    // fonction de recuperation de du mois dans l'année
    getMoisLiquidation() {
      return (date) => {
        if (!date) return null;
        let array_date = date.split("-");
        if (array_date.length == 3) {
          return array_date[1];
        }
        return null;
      };
    },
    //fin
    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },
    //************* liste des unités Administratives ****************** par section */
    ListUa() {
      if (this.sections_id != "") {
        return this.uniteAdministratives.filter(
          (item) => item.section_id == this.sections_id
        );
      }
      return this.uniteAdministratives;
    },
    // ************** debut grande nature Personnels qui a pour id 2 ***********//
    GrandeNaturePersonelAePrevisionel() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 2 &&
              item.actived == 1 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 2 &&
              item.actived == 1 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      } else {
        return this.budgetGeneral
          .filter((item) => item.gdenature_id == 2 && item.actived == 1)
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      }
    },

    GrandeNaturePersonelCpPrevisionel() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 2 &&
              item.actived == 1 &&
              item.section_id == this.sections_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 2 &&
              item.actived == 1 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      } else {
        return this.budgetGeneral
          .filter((item) => item.gdenature_id == 2 && item.actived == 1)
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      }
    },

    GrandeNaturePersonelAeExecute() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 &&
              item.grd_nature_id == 2 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 &&
              item.grd_nature_id == 2 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 && item.grd_nature_id == 2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      }
    },

    GrandeNaturePersonelCpExecute() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              item.grd_nature_id == 2 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              item.grd_nature_id == 2 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 && item.grd_nature_id == 2
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      }
    },

    liquidationidmandat() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierMandat.find(
            (qtreel) => qtreel.demande_engagement_id == id
          );

          if (qtereel) {
            return qtereel.decision_cf;
          }
          return 0;
        }
      };
    },

    liquidationidmandatdate() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierMandat.find(
            (qtreel) => qtreel.demande_engagement_id == id
          );

          if (qtereel) {
            return qtereel.date_motif;
          }
          return 0;
        }
      };
    },

    liquidationid() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierLiquidation.find(
            (qtreel) => qtreel.dmd_engagement_id == id
          );

          if (qtereel) {
            return qtereel.decision_cf;
          }
          return 0;
        }
      };
    },

    liquidationdate() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierLiquidation.find(
            (qtreel) => qtreel.dmd_engagement_id == id
          );

          if (qtereel) {
            return qtereel.date_motif;
          }
          return 0;
        }
      };
    },
    // ************** fin grande nature Personnels qui a pour id 2 ***********//

    //debut des fonction de bien et services
    GrandeNatureBienServiceAePrevisionel() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 5 &&
              item.actived == 1 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 5 &&
              item.actived == 1 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      } else {
        return this.budgetGeneral
          .filter((item) => item.gdenature_id == 5 && item.actived == 1)
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      }
    },

    GrandeNatureBienServiceCpPrevisionel() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 5 &&
              item.actived == 1 &&
              item.section_id == this.sections_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 5 &&
              item.actived == 1 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      } else {
        return this.budgetGeneral
          .filter((item) => item.gdenature_id == 5 && item.actived == 1)
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      }
    },

    GrandeNatureBienServiceAeExecute() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 &&
              item.grd_nature_id == 5 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 &&
              item.grd_nature_id == 5 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 && item.grd_nature_id == 5
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      }
    },

    GrandeNatureBienServiceCpExecute() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              item.grd_nature_id == 5 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              item.grd_nature_id == 5 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 && item.grd_nature_id == 5
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      }
    },
    // fin des fonction bien et services

    //debut des fonction transferts
    GrandeNatureTransfertsAePrevisionel() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 6 &&
              item.actived == 1 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 6 &&
              item.actived == 1 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      } else {
        return this.budgetGeneral
          .filter((item) => item.gdenature_id == 6 && item.actived == 1)
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      }
    },

    GrandeNatureTransfertsCpPrevisionel() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 6 &&
              item.actived == 1 &&
              item.section_id == this.sections_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 6 &&
              item.actived == 1 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      } else {
        return this.budgetGeneral
          .filter((item) => item.gdenature_id == 6 && item.actived == 1)
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      }
    },

    GrandeNatureTransfertsAeExecute() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 &&
              item.grd_nature_id == 6 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 &&
              item.grd_nature_id == 6 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 && item.grd_nature_id == 6
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      }
    },

    GrandeNatureTransfertsCpExecute() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              item.grd_nature_id == 6 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              item.grd_nature_id == 6 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 && item.grd_nature_id == 6
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      }
    },

    // fin des fonction transferts

    //debut des fonction Investissements
    GrandeNatureInvestissementsAePrevisionel() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 7 &&
              item.actived == 1 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 7 &&
              item.actived == 1 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      } else {
        return this.budgetGeneral
          .filter((item) => item.gdenature_id == 7 && item.actived == 1)
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
            0
          )
          .toFixed(0);
      }
    },

    GrandeNatureInvestissementsCpPrevisionel() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 7 &&
              item.actived == 1 &&
              item.section_id == this.sections_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.budgetGeneral
          .filter(
            (item) =>
              item.gdenature_id == 7 &&
              item.actived == 1 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      } else {
        return this.budgetGeneral
          .filter((item) => item.gdenature_id == 7 && item.actived == 1)
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.cp), 0)
          .toFixed(0);
      }
    },

    GrandeNatureInvestissementsAeExecute() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 &&
              item.grd_nature_id == 7 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 &&
              item.grd_nature_id == 7 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationid(item.id) == 8 && item.grd_nature_id == 7
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      }
    },
    GrandeNatureInvestissementsCpExecute() {
      if (this.sections_id != 0 && this.ua_id == 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              item.grd_nature_id == 7 &&
              item.section_id == this.sections_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else if (this.sections_id != 0 && this.ua_id != 0) {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 &&
              item.grd_nature_id == 7 &&
              item.section_id == this.sections_id &&
              item.ua_id == this.ua_id
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersDemandeEngagement
          .filter(
            (item) =>
              this.liquidationidmandat(item.id) == 8 && item.grd_nature_id == 7
          )
          .reduce(
            (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
            0
          )
          .toFixed(0);
      }
    },

    // fin des fonction Investissements

    dataArrayPourcentage() {
      let vm = this;
      if (vm.dataPourcentage.length > 0) {
        vm.dataPourcentage = [];
      }
      vm.dataPourcentage.push(
        parseFloat(
          this.GrandeNaturePersonelAePrevisionel -
            this.GrandeNaturePersonelAeExecute
        )
      );
      vm.dataPourcentage.push(parseFloat(this.GrandeNaturePersonelAeExecute));

      return "";
    },

    //deuxiement partie de la nature personnel
    dataArrayPourcentage21() {
      let vm = this;

      if (vm.dataPourcentage21.length > 0) {
        vm.dataPourcentage21 = [];
      }
      vm.dataPourcentage21.push(
        parseFloat(
          this.GrandeNaturePersonelCpPrevisionel -
            this.GrandeNaturePersonelCpExecute
        )
      );
      vm.dataPourcentage21.push(parseFloat(this.GrandeNaturePersonelCpExecute));

      return "";
    },

    //debut bien et service
    dataArrayPourcentageBienService1() {
      let vm = this;

      if (vm.dataPourcentageBienService1.length > 0) {
        vm.dataPourcentageBienService1 = [];
      }
      vm.dataPourcentageBienService1.push(
        parseFloat(
          this.GrandeNatureBienServiceAePrevisionel -
            this.GrandeNatureBienServiceAeExecute
        )
      );
      vm.dataPourcentageBienService1.push(
        parseFloat(this.GrandeNatureBienServiceAeExecute)
      );

      return "";
    },

    datamois() {
      let vm = this;
      vm.series = [
        {
          // name: "Budget Exécuté en AE",
          // type: "column",
          data: [
            this.DataJanv1,
            this.DataFev1,
            this.DataMars1,
            this.DataAvril1,
            this.DataMai1,
            this.DataJuin1,
            this.DataJuillet1,
            this.DataAout1,
            this.DataSeptembre1,
            this.DataOctobre1,
            this.DataNovembre1,
            this.DataDecembre1,
          ],
        },
        {
          // name: "Budget Exécuté en CP",
          //type: "line",
          data: [
            this.DataJanv2,
            this.DataFev2,
            this.DataMars2,
            this.DataAvril2,
            this.DataMai2,
            this.DataJuin2,
            this.DataJuillet2,
            this.DataAout2,
            this.DataSeptembre2,
            this.DataOctobre2,
            this.DataNovembre2,
            this.DataDecembre2,
          ],
        },
      ];
      return "";
    },

    dataArrayPourcentageBienService2() {
      let vm = this;

      if (vm.dataPourcentageBienService2.length > 0) {
        vm.dataPourcentageBienService2 = [];
      }
      vm.dataPourcentageBienService2.push(
        parseFloat(
          this.GrandeNatureBienServiceCpPrevisionel -
            this.GrandeNatureBienServiceCpExecute
        )
      );
      vm.dataPourcentageBienService2.push(
        parseFloat(this.GrandeNatureBienServiceCpExecute)
      );

      return "";
    },

    //fin bien et services

    //debut Tansferts
    dataArrayPourcentageTransferts1() {
      let vm = this;

      if (vm.dataPourcentageTransferts1.length > 0) {
        vm.dataPourcentageTransferts1 = [];
      }
      vm.dataPourcentageTransferts1.push(
        parseFloat(
          this.GrandeNatureTransfertsAePrevisionel -
            this.GrandeNatureTransfertsAeExecute
        )
      );
      vm.dataPourcentageTransferts1.push(
        parseFloat(this.GrandeNatureTransfertsAeExecute)
      );

      return "";
    },

    dataArrayPourcentageTransferts2() {
      let vm = this;

      if (vm.dataPourcentageTransferts2.length > 0) {
        vm.dataPourcentageTransferts2 = [];
      }
      vm.dataPourcentageTransferts2.push(
        parseFloat(
          this.GrandeNatureTransfertsCpPrevisionel -
            this.GrandeNatureTransfertsCpExecute
        )
      );
      vm.dataPourcentageTransferts2.push(
        parseFloat(this.GrandeNatureTransfertsCpExecute)
      );

      return "";
    },

    //fin Tansferts

    //debut Investissements
    dataArrayPourcentageInvestissements1() {
      let vm = this;

      if (vm.dataPourcentageInvestissements1.length > 0) {
        vm.dataPourcentageInvestissements1 = [];
      }
      vm.dataPourcentageInvestissements1.push(
        parseFloat(
          this.GrandeNatureInvestissementsAePrevisionel -
            this.GrandeNatureInvestissementsAeExecute
        )
      );
      vm.dataPourcentageInvestissements1.push(
        parseFloat(this.GrandeNatureInvestissementsAeExecute)
      );

      return "";
    },

    dataArrayPourcentageInvestissements2() {
      let vm = this;

      if (vm.dataPourcentageInvestissements2.length > 0) {
        vm.dataPourcentageInvestissements2 = [];
      }
      vm.dataPourcentageInvestissements2.push(
        parseFloat(
          this.GrandeNatureInvestissementsCpPrevisionel -
            this.GrandeNatureInvestissementsCpExecute
        )
      );
      vm.dataPourcentageInvestissements2.push(
        parseFloat(this.GrandeNatureInvestissementsCpExecute)
      );

      return "";
    },

    //fin Investissements
  },
  methods: {
    ...mapActions("uniteadministrative", []),
    formatageSomme: formatageSomme,
  },
};
</script>

<style scoped>
#tableau1 {
  box-shadow: 2px 3px 5px 2px;
  border: 3px dotted #ddd;
}
</style>

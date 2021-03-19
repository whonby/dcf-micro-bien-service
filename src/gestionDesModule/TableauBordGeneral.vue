<template>
  <div>
    <h1 style="text-align: center; text-decoration: underline">
      TABLEAU DE BORD GENERAL BUDGET GENERAL SIB
    </h1>
    <br />
    <div class="container-fluid">
      <div class="row">
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
      </div>

      <br />
      <br />
      <br />

      <table class="table table-bordered table-striped">
        <tr style="border: 2px solid #000">
          <td>
            <!-- debut pour les Personnels -->
            <h4 style="text-align: center">Personnels</h4>

            <div class="span4" style="border: 2px dotted #ffffff">
              <div class="card" style="height: 180px">
                <apexchart
                  type="donut"
                  :options="chartOptions1"
                  :series="dataPourcentage"
                ></apexchart>
              </div>
            </div>

            <div class="span4" style="border: 2px dotted #ffffff">
              <div class="card" style="heigth: 50px">
                <apexchart
                  type="donut"
                  :options="chartOptions21"
                  :series="dataPourcentage21"
                ></apexchart>
              </div>
            </div>
          </td>
          <!-- fin pour les Personnels -->
          <td>
            <!-- debut pour les Biens et Services -->
            <h4 style="text-align: center">Biens et Services</h4>
            <div class="span4" style="border: 2px dotted #ffffff">
              <div class="card">
                <apexchart
                  type="donut"
                  :options="chartOptionsBienService1"
                  :series="dataPourcentageBienService1"
                ></apexchart>
              </div>
            </div>
            <div class="span4" style="border: 2px dotted #ffffff">
              <div class="card">
                <apexchart
                  type="donut"
                  :options="chartOptionsBienService2"
                  :series="dataPourcentageBienService2"
                ></apexchart>
              </div>
            </div>
          </td>
          <!-- debut pour les Biens et Services -->
        </tr>
      </table>

      <!-- debut pour les Transferts -->
      <table class="table table-bordered table-striped">
        <tr style="border: 2px solid #000">
          <td>
            <h4 style="text-align: center">Transferts</h4>
            <div class="span4" style="border: 2px dotted #ffffff">
              <div class="card">
                <apexchart
                  type="donut"
                  :options="chartOptionsTransferts1"
                  :series="dataPourcentageTransferts1"
                ></apexchart>
              </div>
            </div>
            <div class="span4" style="border: 2px dotted #ffffff">
              <div class="card">
                <apexchart
                  type="donut"
                  :options="chartOptionsTransferts2"
                  :series="dataPourcentageTransferts2"
                ></apexchart>
              </div>
            </div>
          </td>
          <!-- fin pour les Transferts -->
          <td>
            <!-- debut pour les Investissements -->
            <h4 style="text-align: center">Investissements</h4>

            <div class="span4" style="border: 2px dotted #ffffff">
              <div class="card">
                <apexchart
                  type="donut"
                  :options="chartOptionsInvestissements1"
                  :series="dataPourcentageInvestissements1"
                ></apexchart>
              </div>
            </div>

            <div class="span4" style="border: 2px dotted #ffffff">
              <div class="card">
                <apexchart
                  type="donut"
                  :options="chartOptionsInvestissements2"
                  :series="dataPourcentageInvestissements2"
                ></apexchart>
              </div>
            </div>
          </td>
          <!-- fin pour les Investissements -->
        </tr>
      </table>
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

      chartOptionsBienService2: {
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

      // fin bien et service

      // debut de la nature Transferts
      chartOptionsTransferts1: {
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

      // fin Investissements
    };
  },

  created() {
    console.log(this.budgetGeneral);
    console.log(this.grandes_natures);
    console.log(this.sections);
    //console.log(this.GrandeNaturePersonelCp);
    //this.series = [this.grande_nature_id, this.grande_nature_id];
    // this.series = [this.GrandeNaturePersonelCp, this.GrandeNaturePersonelCp];
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
        console.log(this.sections_id + "*******");
        // console.log(this.ua_id + "*******");
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
            (qtreel) => qtreel.dmd_engagement_id == id
          );

          if (qtereel) {
            return qtereel.decision_cf;
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
      //console.log(parseFloat(this.pourcentageMarchePasStatus("planifie")))

      if (vm.dataPourcentage.length > 0) {
        vm.dataPourcentage = [];
      }
      vm.dataPourcentage.push(
        parseFloat(this.GrandeNaturePersonelAePrevisionel)
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
        parseFloat(this.GrandeNaturePersonelCpPrevisionel)
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
        parseFloat(this.GrandeNatureBienServiceAePrevisionel)
      );
      vm.dataPourcentageBienService1.push(
        parseFloat(this.GrandeNatureBienServiceAeExecute)
      );

      return "";
    },

    dataArrayPourcentageBienService2() {
      let vm = this;

      if (vm.dataPourcentageBienService2.length > 0) {
        vm.dataPourcentageBienService2 = [];
      }
      vm.dataPourcentageBienService2.push(
        parseFloat(this.GrandeNatureBienServiceCpPrevisionel)
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
        parseFloat(this.GrandeNatureTransfertsAePrevisionel)
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
        parseFloat(this.GrandeNatureTransfertsCpPrevisionel)
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
        parseFloat(this.GrandeNatureInvestissementsAePrevisionel)
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
        parseFloat(this.GrandeNatureInvestissementsCpPrevisionel)
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
</style>

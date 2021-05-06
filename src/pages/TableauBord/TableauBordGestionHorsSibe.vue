<template>
  <div>
    <div class="container-fluid" style="height: 200em">
      <div class="" style="margin-top: -30px">
        <div class="" v-if="affiche_filtre">
          <div class="span1"></div>
          <div class="span10 card-3">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <td>
                    <label
                      >UA
                      <a
                        href="#"
                        @click.prevent="videUniteAdmin()"
                        v-if="unite_administrative_id"
                        style="color: red"
                        ><i class="fa fa-trash-o"></i
                      ></a>
                    </label>
                    <model-list-select
                      style="background-color: rgb(233, 233, 233)"
                      class="wide"
                      :list="filtre_unite_admin"
                      v-model="unite_administrative_id"
                      option-value="id"
                      option-text="libelle"
                      placeholder="Unité administrative"
                    >
                    </model-list-select>
                  </td>
                  <td>
                    <label
                      >Regions
                      <a
                        href="#"
                        @click.prevent="videRegions()"
                        v-if="region"
                        style="color: red"
                        ><i class="fa fa-trash-o"></i
                      ></a>
                    </label>
                    <model-list-select
                      style="background-color: rgb(233, 233, 233)"
                      class="wide"
                      :list="regions"
                      v-model="region"
                      option-value="id"
                      option-text="libelle"
                      placeholder="Regions"
                    >
                    </model-list-select>
                  </td>
                  <td>
                    <label
                      >Infrastructure
                      <a
                        href="#"
                        @click.prevent="videInfrastructure()"
                        v-if="infrastructure"
                        style="color: red"
                        ><i class="fa fa-trash-o"></i
                      ></a>
                    </label>
                    <model-list-select
                      style="background-color: rgb(233, 233, 233)"
                      class="wide"
                      :list="getterInfrastrucure"
                      v-model="infrastructure"
                      option-value="id"
                      option-text="libelle"
                      placeholder="Infrastructure"
                    >
                    </model-list-select>
                  </td>
                  <td>
                    <label
                      >Type Marché
                      <a
                        href="#"
                        @click.prevent="videTypeMarche()"
                        v-if="type_marche"
                        style="color: red"
                        ><i class="fa fa-trash-o"></i
                      ></a>
                    </label>
                    <model-list-select
                      style="background-color: rgb(233, 233, 233)"
                      class="wide"
                      :list="typeMarches"
                      v-model="type_marche"
                      option-value="id"
                      option-text="libelle"
                      placeholder="Type Marche"
                    >
                    </model-list-select>
                  </td>
                  <!--<td>-->
                  <!--<label>CF-->
                  <!--</label>-->
                  <!--<model-list-select style="background-color: rgb(255,255,255);"-->
                  <!--class="wide"-->
                  <!--:list="filtre_unite_admin"-->
                  <!--v-model="unite_administrative_id"-->
                  <!--option-value="id"-->
                  <!--option-text="libelle"-->
                  <!--placeholder="Unité administrative"-->
                  <!--&gt;-->

                  <!--</model-list-select>-->
                  <!--</td>-->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--<DraggableDiv class="col-11">-->
        <!--&lt;!&ndash;<template slot="header">&ndash;&gt;-->
        <!--&lt;!&ndash;<div>GUEIEI ROLAND</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</template>&ndash;&gt;-->
        <!--<template slot="main" >-->
        <!---->
        <!--</template>-->
        <!--&lt;!&ndash;<template slot="footer">&ndash;&gt;-->
        <!--&lt;!&ndash;<div>GUEIEI 5555555</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</template>&ndash;&gt;-->
        <!--</DraggableDiv>-->

        <div class="row-fluid">
          <div class="span7">
            <h4>Tableau de bord gestion marche, Exercice {{ anneeAmort }}</h4>
          </div>
          <div class="span4" align="right">
            <h4>
              Nombre de marché (<font color="blue" size="5">{{
                nombreTotalMarche
              }}</font
              >)
            </h4>
          </div>
        </div>

        <nav aria-label="breadcrumb" class="main-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item" v-if="!unite_administrative_id">
              Situation General des marchés &nbsp;&nbsp;&nbsp;&nbsp; /
            </li>
            <li class="breadcrumb-item" v-if="unite_administrative_id">
              Situation {{ nomUniteAdmin(unite_administrative_id) }} des marchés
              &nbsp;&nbsp;&nbsp;&nbsp; /
            </li>
            <li class="breadcrumb-item" v-if="region">
              Région {{ nomRegions(region) }} &nbsp;&nbsp;&nbsp;&nbsp; /
            </li>
            <li class="breadcrumb-item" v-if="infrastructure">
              Infrastructutre
              {{ nomInfrastructure(infrastructure) }} &nbsp;&nbsp;&nbsp;&nbsp; /
            </li>

            <li class="breadcrumb-item" v-if="type_marche">
              Type Marche
              {{ nomTypeMarche(type_marche) }} &nbsp;&nbsp;&nbsp;&nbsp; /
            </li>
            <li
              class="breadcrumb-item"
              v-if="info_status_marche"
              v-html="info_status_marche"
            ></li>
          </ol>
        </nav>

        <!-----------------TABLEAU DE BORD MONTANT MARCHE------------------------>
        <div class="">
          <div class="row-fluid" style="margin-top: -20px">
            <div class="span3">
              <div class="card-box bg-prevision">
                <div class="inner">
                  <h3>{{ formatageSomme(montantPrevue) }}</h3>
                  <p>Montant previsionnel</p>
                </div>

                <div class="icon">
                  <i class="fa fa-money" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div class="span3">
              <div class="card-box bg-base">
                <div class="inner">
                  <h3>{{ formatageSomme(montantApprouveMarche) }}</h3>
                  <p>Montant de base + avenant</p>
                </div>
                <div class="icon">
                  <i class="fa fa-money" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="span2">
              <div class="card-box bg-green">
                <div class="inner">
                  <h3>{{ formatageSomme(montantExecute) }}</h3>
                  <p>Montant execute</p>
                </div>

                <div class="icon">
                  <i class="fa fa-money" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="span2">
              <div class="card-box bg-restant">
                <div class="inner">
                  <h3>{{ formatageSomme(montantRestant) }}</h3>
                  <p>Montant restant</p>
                </div>
                <div class="icon">
                  <i class="fa fa-money" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="span2">
              <div class="card-box bg-taux">
                <div class="inner">
                  <h3>{{ tauxExecution }} %</h3>
                  <p>Taux execution</p>
                </div>
                <div class="icon">
                  <i class="fa fa-money" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="row-fluid" style="margin-top: -20px">
            <div class="span3">
              <div
                class="card-box bg-attente-contratualisation-hors-alert"
                style="height: 60px !important; cursor: grab !important"
                @click="listeMarcheStatus('planifie')"
              >
                <div class="inner">
                  <h3>{{ nombreMarcheParStatue("planifie") }}</h3>
                  <p>En attente de contractualisation hors alert</p>
                </div>

                <div class="icon2">
                  {{ pourcentageMarchePasStatus("planifie") }}%
                </div>
              </div>
            </div>

            <div class="span3">
              <div
                @click="listeMarcheStatus(8)"
                class="card-box bg-attente-contratualisation-avec-alert"
                style="height: 60px !important; cursor: grab !important"
              >
                <div class="inner">
                  <h3>{{ nombreMarcheParStatue(8) }}</h3>
                  <p>En attente de contractualisation avec alert</p>
                </div>
                <div class="icon2">{{ pourcentageMarchePasStatus(8) }}%</div>
              </div>
            </div>
            <div class="span2">
              <div
                @click="listeMarcheStatus(1)"
                class="card-box bg-en-contratualisation"
                style="height: 60px !important; cursor: grab !important"
              >
                <div class="inner">
                  <h3>{{ nombreMarcheParStatue(1) }}</h3>
                  <p>En contractualisation</p>
                </div>
                <div class="icon2">{{ pourcentageMarchePasStatus(1) }}%</div>
              </div>
            </div>
            <div class="span2">
              <div
                @click="listeMarcheStatus(2)"
                class="card-box bg-en-execution"
                style="height: 60px !important; cursor: grab !important"
              >
                <div class="inner">
                  <h3>{{ nombreMarcheParStatue(2) }}</h3>
                  <p>En exécution</p>
                </div>
                <div class="icon2">{{ pourcentageMarchePasStatus(2) }}%</div>
              </div>
            </div>
            <div class="span2">
              <div
                @click="listeMarcheStatus(7)"
                class="card-box bg-en-souffrance"
                style="height: 60px !important; cursor: grab !important"
              >
                <div class="inner">
                  <h3>
                    {{
                      parseFloat(nombreMarcheParStatue(7)) +
                      parseFloat(nombreMarcheParStatue(3))
                    }}
                  </h3>
                  <p>En souffrance</p>
                </div>
                <div class="icon2">{{ pourcentageMarchePasStatus(7) }}%</div>
              </div>
            </div>
          </div>

          <div class="row-fluid">
            <div class="span4" style="border: 1px dotted #eeeeee">
              <apexchart
                type="pie"
                width="350"
                :options="chartOptions"
                :series="dataPourcentage"
              ></apexchart>
            </div>
            <div class="span8">
              <nav
                aria-label="breadcrumb"
                class="main-breadcrumb"
                v-if="info_status_marche"
              >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item" v-html="info_status_marche"></li>
                </ol>
              </nav>
              <table
                class="table table-bordered table-striped"
                v-if="info_status_marche"
              >
                <thead>
                  <tr>
                    <th>UA</th>
                    <th>Nombre Marche</th>
                    <th>Montant prevue</th>
                    <th v-if="status_marches == 2">Montant base</th>
                    <th>Taux</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="unite in listeUniteAdministrative" :key="unite.id">
                    <td>{{ unite.libelle }}</td>
                    <td>{{ nbrTotalMarchePasUA(unite.id) }}</td>
                    <td>{{ formatageSomme(montantPrevuePasUA(unite.id)) }}</td>
                    <td v-if="status_marches == 2">
                      {{ formatageSomme(montantApprouvePasUA(unite.id)) }}
                    </td>
                    <td>
                      {{ tauxStatusMarchePasUniteAdministrative(unite.id) }} %
                    </td>
                    <td>
                      <a
                        href="#"
                        @click="selectionUnite(unite.id)"
                        class="btn btn-default"
                        title="Detail marches"
                      >
                        <span class=""><i class="icon-folder-open"></i></span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab
      v-if="affiche_boutton_filtre"
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      main-icon="format_indent_decrease"
      @cache="filter"
    ></fab>
    <fab
      v-if="!affiche_boutton_filtre"
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      main-icon="ballot"
      @cache="filter"
    ></fab>

    {{ dataArrayPourcentage }}
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters, mapActions } from "vuex";
import { noDCfNoAdmin } from "../../Repositories/Auth";
import { formatageSomme } from "../../Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
// import DraggableDiv from '../../components/DraggableDiv/DraggableDiv'
export default {
  name: "TableauBordGestionMarche",
  components: {
    apexchart: VueApexCharts,
    ModelListSelect,
    //  DraggableDiv
  },
  data() {
    return {
      status_marches: "",
      unite_administrative_id: "",
      infrastructure: "",
      type_marche: "",
      region: "",
      info_status_marche: "",
      tableMarcheStatue: "",
      listeDesMarchePasStatus: "",
      affiche_filtre: false,
      affiche_boutton_filtre: true,
      status_marche: "",
      bgColor: "#171b39",
      position: "bottom-right",
      fabActions: [
        {
          name: "cache",
          icon: "cached",
        },
      ],
      dataPourcentage: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "A.C.H.A",
          "A.C.A.A",
          "En Cont.",
          "En Execution",
          "En Souffrance.",
        ],
        colors: ["#410041", "#e81776", "#FF00FF", "#008000", "#b5160e"],
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
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "decomptefactures",
    ]),
    ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "structures_geographiques",
      "localisations_geographiques",
      "getterLocalisationGeoAll",
      "getterInfrastrucure",
      "exercices_budgetaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
    ]),

    ...mapGetters("bienService", [
      "marches",
      "engagements",
      "getMandatPersonnaliserVise",
      "getterImageMarche",
      "acteEffetFinanciers",
      "getActeEffetFinancierPersonnaliser45",
      "typeMarches",
      "avenants",
    ]),
    noDCfNoAdmin: noDCfNoAdmin,
    regions() {
      // console.log(this.localisations_geographiques.filter(item=>item.structure_localisation_geographique.niveau==2))
      return this.localisations_geographiques.filter((item) => {
        if (
          item.longitude != null &&
          item.structure_localisation_geographique.niveau == 2
        ) {
          return item;
        }
      });
    },
    filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];
        let vM = this;
        this.uniteAdministratives.filter((item) => {
          console.log("OK bonjour GUE");
          if (vM.getterUniteAdministrativeByUser.length > 0) {
            let val = vM.getterUniteAdministrativeByUser.find(
              (row) => row.unite_administrative_id == item.id
            );
            if (val != undefined) {
              colect.push(item);
              return item;
            }
          }
        });
        return colect;
      }
      return this.uniteAdministratives;
    },
    listeMarcheUniteAdmin() {
      let colect = [];
      let vM = this;
      this.filtre_unite_admin.forEach(function (value) {
        let objet = vM.marches.filter((item) => {
          if (
            item.parent_id != null &&
            item.unite_administrative_id == value.id &&
            item.sib == 1
          ) {
            //  console.log(item.parent_id)
            return item;
          }
        });
        if (objet != undefined) {
          objet.forEach(function (val) {
            colect.push(val);
          });
        }
      });
      return colect;
    },
    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        let vM = this;
        vM.exercice_budget = norme.annee;
        return norme.annee;
      }
      return 0;
    },

    objetMarchePasUniteOuRegion() {
      let vM = this;
      let objet = this.listeMarcheUniteAdmin.filter(
        (item) => item.parent_id != ""
      );

      //retourne les marches d'une region selectionner
      if (
        vM.region != "" &&
        vM.unite_administrative_id == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une unite administrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une une infrastucture selectionner
      if (
        vM.infrastructure != "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type de marché selectionner
      if (
        vM.infrastructure == "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (item.type_marche_id == vM.type_marche && item.parent_id != "") {
            return item;
          }
        });
      }

      //retourne les marches de region et unite adminstrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrastructure et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une region et infrastructure selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrasture et type marche selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et regions selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et INFRASTRUCTURE

      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, INFRA et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE,UA
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      return objet;
    },
    getMarcheStatus() {
      return (status) => {
        if (status == "planifie") {
          status = 0;
          return this.objetMarchePasUniteOuRegion.filter(
            (item) => item.attribue == 0
          );
        }

        if (status != "") {
          return this.objetMarchePasUniteOuRegion.filter(
            (item) => item.attribue == status
          );
        } else {
          return this.objetMarchePasUniteOuRegion;
        }
      };
    },
    nombreMarcheParStatue() {
      return (status) => {
        if (status != "") {
          if (status == "planifie") {
            status = 0;
          }

          //                        let objet={
          //                            etat_marche:status,
          //                            marches:""
          //                        }
          //                        let liste_marches=""
          let nombre = 0;

          if (this.infrastructure != "" && this.type_marche == "") {
            //                            liste_marches=this.objetMarchePasUniteOuRegion.filter(item=>{
            //                                if(item.attribue==status && item.infrastructure_id==this.infrastructure){
            //                                    return item
            //                                }
            //                            })
            nombre = this.objetMarchePasUniteOuRegion.filter((item) => {
              if (
                item.attribue == status &&
                item.infrastructure_id == this.infrastructure
              ) {
                return item;
              }
            }).length;
          }

          if (this.infrastructure == "" && this.type_marche != "") {
            //                            liste_marches= this.objetMarchePasUniteOuRegion.filter(item=>{
            //                                if(item.attribue==status && item.type_marche_id==this.type_marche){
            //                                    return item
            //                                }
            //                            })
            nombre = this.objetMarchePasUniteOuRegion.filter((item) => {
              if (
                item.attribue == status &&
                item.type_marche_id == this.type_marche
              ) {
                return item;
              }
            }).length;
          }

          if (this.infrastructure != "" && this.type_marche != "") {
            //                            liste_marches= this.objetMarchePasUniteOuRegion.filter(item=>{
            //                                if(item.attribue==status && item.type_marche_id==this.type_marche  && item.infrastructure_id==this.infrastructure){
            //                                    return item
            //                                }
            //                            })
            nombre = this.objetMarchePasUniteOuRegion.filter((item) => {
              if (
                item.attribue == status &&
                item.type_marche_id == this.type_marche &&
                item.infrastructure_id == this.infrastructure
              ) {
                return item;
              }
            }).length;
          }

          if (this.infrastructure == "" && this.type_marche == "") {
            //                            liste_marches=this.objetMarchePasUniteOuRegion.filter(item=>item.attribue==status)
            nombre = this.objetMarchePasUniteOuRegion.filter(
              (item) => item.attribue == status
            ).length;
          }

          return nombre;
        }
      };
    },
    marcheUniteRegion() {
      let vM = this;
      let objet = this.listeMarcheUniteAdmin.filter(
        (item) => item.parent_id != ""
      );
      if (vM.region != "" && vM.unite_administrative_id == "") {
        objet = this.marches.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      if (vM.unite_administrative_id != "" && vM.region == "") {
        objet = this.listeMarcheUniteAdmin.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      if (vM.unite_administrative_id != "" && vM.region != "") {
        objet = this.listeMarcheUniteAdmin.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }
      return objet;
    },
    pourcentageMarchePasStatus() {
      return (status) => {
        if (this.nombreTotalMarche == 0) {
          return 0.0;
        }
        if (status == "planifie") {
          status = "planifie";
          let taux =
            (this.nombreMarcheParStatue(status) * 100) / this.nombreTotalMarche;
          return taux.toFixed(2);
        }
        let nombre = this.nombreMarcheParStatue(status);
        if (status == 7) {
          nombre = nombre + this.nombreMarcheParStatue(3);
        }

        let taux = (nombre * 100) / this.nombreTotalMarche;
        return taux.toFixed(2);
      };
    },

    /**
     * Calcule de montant prevue
     */
    montantPrevue() {
      let initeVal = 0;
      let montant_prevue = this.objetMarchePasUniteOuRegion.reduce(function (
        total,
        currentValue
      ) {
        return total + parseFloat(currentValue.montant_marche);
      },
      initeVal);
      return montant_prevue;
    },

    montantApprouveMarche() {
      if (this.objetMarchePasUniteOuRegion.length > 0) {
        //acteEffetFinanciers
        let vm = this;
        let montantTotal = 0;
        this.objetMarchePasUniteOuRegion.forEach(function (val) {
          let objetAct = vm.getActeEffetFinancierPersonnaliser45.find(
            (item) => item.marche_id == val.id
          );
          let montant_avenant = 0;
          let objetAvenant = vm.avenants.filter(
            (item) => item.marche_id == val.id
          );
          if (objetAvenant != undefined) {
            let initeVal = 0;
            montant_avenant = objetAvenant.reduce(function (
              total,
              currentValue
            ) {
              return total + parseFloat(currentValue.montant_avenant);
            },
            initeVal);
          }
          if (objetAct != undefined) {
            //  console.log(objetAct)
            montantTotal =
              parseFloat(montantTotal) +
              parseFloat(objetAct.montant_act) +
              parseFloat(montant_avenant);
          }
        });
        return montantTotal;
      }
      return 0;
    },

    montantExecute() {
      if (this.objetMarchePasUniteOuRegion.length > 0) {
        let montant_execute = 0;
        let vm = this;

        this.objetMarchePasUniteOuRegion.forEach(function (val) {
          let initeVal = 0;
          let montant = vm.decomptefactures
            .filter((item) => item.marche_id == val.id)
            .reduce(function (total, currentValue) {
              return total + parseFloat(currentValue.montantmarche);
            }, initeVal);
          montant_execute = parseFloat(montant_execute) + parseFloat(montant);
        });

        return montant_execute;
      }
      return 0;
    },

    montantRestant() {
      return this.montantApprouveMarche - this.montantExecute;
    },
    tauxExecution() {
      if (this.montantExecute) {
        let taux = (this.montantExecute * 100) / this.montantApprouveMarche;
        if (taux == Infinity) {
          return 0;
        }
        return taux.toFixed(2);
      }
      return 0;
    },
    dataArrayPourcentage() {
      let vm = this;
      //console.log(parseFloat(this.pourcentageMarchePasStatus("planifie")))

      if (vm.dataPourcentage.length > 0) {
        vm.dataPourcentage = [];
      }
      vm.dataPourcentage.push(
        parseFloat(this.pourcentageMarchePasStatus("planifie"))
      );
      vm.dataPourcentage.push(parseFloat(this.pourcentageMarchePasStatus(8)));
      vm.dataPourcentage.push(parseFloat(this.pourcentageMarchePasStatus(1)));
      vm.dataPourcentage.push(parseFloat(this.pourcentageMarchePasStatus(2)));
      vm.dataPourcentage.push(parseFloat(this.pourcentageMarchePasStatus(7)));
      return "";
    },

    nombreTotalMarche() {
      return this.objetMarchePasUniteOuRegion.length;
    },
    objetListeMarcheInfoUnite() {
      return this.listeMarcheUniteAdmin.filter((item) => item.parent_id != "");
    },
    listeUniteAdministrative() {
      let vm = this;
      let collect = [];
      if (vm.tableMarcheStatue.length > 0) {
        vm.tableMarcheStatue.forEach(function (val) {
          let objet = vm.uniteAdministratives.find((item) => item.id == val);
          collect.push(objet);
        });
        console.log(collect);
        return collect;
      }

      return collect;
    },
    nbrTotalMarchePasUA() {
      return (unite) => {
        let vm = this;
        return vm.listeDesMarchePasStatus.filter(
          (item) => item.unite_administrative_id == unite
        ).length;
      };
    },

    montantPrevuePasUA() {
      return (unite) => {
        let vm = this;
        let initeVal = 0;
        return vm.listeDesMarchePasStatus
          .filter((item) => item.unite_administrative_id == unite)
          .reduce(function (total, currentValue) {
            return total + parseFloat(currentValue.montant_marche);
          }, initeVal);
      };
    },
    montantApprouvePasUA() {
      return (unite) => {
        let vm = this;
        let montantTotal = 0;
        vm.listeDesMarchePasStatus
          .filter((item) => item.unite_administrative_id == unite)
          .forEach(function (val) {
            let objetAct = vm.getActeEffetFinancierPersonnaliser45.find(
              (item) => item.marche_id == val.id
            );
            let montant_avenant = 0;
            let objetAvenant = vm.avenants.filter(
              (item) => item.marche_id == val.id
            );
            if (objetAvenant != undefined) {
              let initeVal = 0;
              montant_avenant = objetAvenant.reduce(function (
                total,
                currentValue
              ) {
                return total + parseFloat(currentValue.montant_avenant);
              },
              initeVal);
            }
            if (objetAct != undefined) {
              //  console.log(objetAct)
              montantTotal =
                parseFloat(montantTotal) +
                parseFloat(objetAct.montant_act) +
                parseFloat(montant_avenant);
            }
          });
        return montantTotal;
      };
    },
    tauxStatusMarchePasUniteAdministrative() {
      return (unite) => {
        let vm = this;
        if (vm.listeDesMarchePasStatus.length > 0) {
          let taux =
            (vm.nbrTotalMarchePasUA(unite) * 100) /
            vm.listeDesMarchePasStatus.length;
          return taux.toFixed(2);
        }
        return 0;
      };
    },
    nomUniteAdmin() {
      return (id) => {
        if (id != "") {
          let objet = this.uniteAdministratives.find((item) => item.id == id);
          return objet.libelle;
        }
        return "";
      };
    },
    nomTypeMarche() {
      return (id) => {
        if (id != "") {
          let objet = this.typeMarches.find((item) => item.id == id);
          return objet.libelle;
        }
        return "";
      };
    },
    nomInfrastructure() {
      return (id) => {
        if (id != "") {
          let objet = this.getterInfrastrucure.find((item) => item.id == id);
          return objet.libelle;
        }
        return "";
      };
    },
    nomRegions() {
      return (id) => {
        if (id != "") {
          let objet = this.localisations_geographiques.find(
            (item) => item.id == id
          );
          return objet.libelle;
        }
        return "";
      };
    },
    infoEtatMarche() {
      return (status) => {
        if (status == 0) {
          //  colors:['#410041', '#e81776', '#FF00FF',"#008000","#b5160e"]
          return "<font color='#410041'>En attente de contractualisation hors alert</font>";
        }
        if (status == 8) {
          return "<font color='#e81776'>En attente de contractualisation avec alert</font>";
        }
        if (status == 1) {
          return "<font color='#FF00FF'>En contractualisation</font>";
        }

        if (status == 2) {
          return "<font color='#008000'>En exécution</font>";
        }

        if (status == 7) {
          return "<font color='#b5160e'>En suffrance</font>";
        }
        return null;
      };
    },
  },
  methods: {
    ...mapActions("bienService", [
      "ajouterTableauBordFiltre",
      "ajouterInfoTableauBordFiltre",
    ]),
    selectionUnite(id) {
      if (this.status_marches == "planifie") {
        this.status_marches = 0;
      }
      let objet = {
        status_marche: this.status_marches,
        infrastructure: this.infrastructure,
        unite_administrative: id,
        type_marche: this.type_marche,
        region: this.region,
      };
      // console.log(this.objetMarchePasUniteOuRegion)

      let objetMarche = this.objetMarchePasUniteOuRegion.filter((item) => {
        if (
          item.unite_administrative_id == id &&
          item.attribue == this.status_marches
        ) {
          return item;
        }
      });
      this.ajouterTableauBordFiltre(objetMarche);
      this.ajouterInfoTableauBordFiltre(objet);

      this.$router.push({
        name: "DetailInforTableBordUniteAd",
        params: { id: id },
      });
    },
    videUniteAdmin() {
      this.unite_administrative_id = "";
    },
    videRegions() {
      this.region = "";
    },
    videInfrastructure() {
      this.infrastructure = "";
    },
    videTypeMarche() {
      this.type_marche = "";
    },
    filter() {
      this.affiche_filtre = !this.affiche_filtre;
      this.affiche_boutton_filtre = !this.affiche_boutton_filtre;
      this.videUniteAdmin();
      this.videRegions();
      this.videInfrastructure();
      this.videTypeMarche();
    },
    formatageSomme: formatageSomme,
    listeMarcheStatus(status) {
      if (status == "planifie") {
        status = 0;
      }
      this.tableMarcheStatue = "";

      this.info_status_marche = this.infoEtatMarche(status);
      let vM = this;
      let objet = this.objetListeMarcheInfoUnite.filter((item) => {
        if (item.parent_id != "" && item.attribue == status) {
          return item;
        }
      });

      //retourne les marches d'une region selectionner
      if (
        vM.region != "" &&
        vM.unite_administrative_id == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une unite administrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une une infrastucture selectionner
      if (
        vM.infrastructure != "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type de marché selectionner
      if (
        vM.infrastructure == "" &&
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (item.type_marche_id == vM.type_marche && item.parent_id != "") {
            return item;
          }
        });
      }

      //retourne les marches de region et unite adminstrative selectionner
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrastructure et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et unite adminstrative selectionner

      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une region et infrastructure selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'une infrasture et type marche selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourne les marches d'un type marche et regions selectionner
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.localisation_geographie_id == vM.region &&
            item.type_marche_id == vM.type_marche &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et INFRASTRUCTURE

      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche == ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, REGION et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure == "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.localisation_geographie_id == vM.region &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marches d'une UA, INFRA et TYPE MARCHE
      if (
        vM.unite_administrative_id != "" &&
        vM.region == "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE
      if (
        vM.unite_administrative_id == "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }

      //retourn les marche INFRA, REGIONS,TYPE MARCHE,UA
      if (
        vM.unite_administrative_id != "" &&
        vM.region != "" &&
        vM.infrastructure != "" &&
        vM.type_marche != ""
      ) {
        objet = objet.filter((item) => {
          if (
            item.type_marche_id == vM.type_marche &&
            item.localisation_geographie_id == vM.region &&
            item.infrastructure_id == vM.infrastructure &&
            item.unite_administrative_id == vM.unite_administrative_id &&
            item.parent_id != ""
          ) {
            return item;
          }
        });
      }
      this.status_marches = status;
      this.listeDesMarchePasStatus = objet;
      let distinct = [
        ...new Set(objet.map((item) => item.unite_administrative_id)),
      ];
      this.tableMarcheStatue = distinct;
    },
  },
  watch: {
    type_marche: function (value) {
      console.log(value);
      this.listeMarcheStatus(this.status_marches);
    },

    infrastructure: function (value) {
      console.log(value);
      this.listeMarcheStatus(this.status_marches);
    },
    region: function (value) {
      console.log(value);
      this.listeMarcheStatus(this.status_marches);
    },
    unite_administrative_id: function (value) {
      console.log(value);
      this.listeMarcheStatus(this.status_marches);
    },
  },
};
</script>

<style scoped>
.grdirModalActeEffet {
  width: 1200px;
  margin: 0 -530px;
  height: 550px;
}
.tailgrand {
  width: 50%;
  margin: 0 -25%;
}
.tailAvenant {
  width: 75%;
  margin: 0 -40%;
}
.avatar1 {
  width: 50%;
  height: 50%;
}

.center_image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 250px;
}

.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}

.JesterBox div {
  visibility: hidden;
  position: fixed;
  top: 5%;
  right: 5%;
  bottom: 5%;
  left: 5%;
  z-index: 75;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.JesterBox div:before {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 74;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.5s ease-out;
}

.JesterBox div img {
  position: relative;
  z-index: 77;
  max-width: 100%;
  max-height: 100%;
  margin-left: -9999px;
  opacity: 0;
  transition-property: all, opacity;
  transition-duration: 0.5s, 0.2s;
  transition-timing-function: ease-in-out, ease-out;
}

.JesterBox div:target {
  visibility: visible;
}

.JesterBox div:target:before {
  background-color: rgba(0, 0, 0, 0.7);
}

.JesterBox div:target img {
  margin-left: 0px;
  opacity: 1;
}

.card-box {
  position: relative;
  color: #fff;
  padding: 10px 10px 30px;
  margin: 10px 0px;
  height: 45px;
}
.card-box:hover {
  text-decoration: none;
  color: #f1f1f1;
}

.card-box .inner {
  padding: 5px 10px 0 10px;
}
.card-box h3 {
  font-size: 12px;
  font-weight: bold;
  margin: 0 0 8px 0;
  white-space: nowrap;

  text-align: left;
}
.card-box p {
  font-size: 14px;
}
.card-box .icon {
  position: absolute;
  top: auto;
  bottom: 3px;
  right: 3px;
  z-index: 0;
  font-size: 50px;
  color: rgba(0, 0, 0, 0.15);
}

.card-box .icon2 {
  position: absolute;
  top: auto;
  bottom: 45px;
  right: 3px;
  z-index: 0;
  font-size: 20px;
  color: #f2f2f2;
}

.card-box .card-box-footer {
  position: absolute;
  left: 0px;
  bottom: 0px;
  text-align: center;
  padding: 3px 0;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  text-decoration: none;
}
.card-box:hover .card-box-footer {
  background: rgba(0, 0, 0, 0.3);
}
.bg-prevision {
  background-color: #3a373b !important;
}
.bg-blue {
  background-color: #00c0ef !important;
}
.bg-green {
  background-color: #00a65a !important;
}
.bg-orange {
  background-color: #f39c12 !important;
}
.bg-red {
  background-color: #d9534f !important;
}
.bg-base {
  background-color: #a62f59 !important;
}
.bg-taux {
  background-color: #ba7024 !important;
}
.bg-restant {
  background-color: #154282 !important;
}

.bg-attente-contratualisation-hors-alert {
  background-color: #410041 !important;
}
.bg-attente-contratualisation-avec-alert {
  background-color: #e81776 !important;
}
.bg-en-contratualisation {
  background-color: #ff00ff !important;
}

.bg-en-execution {
  background-color: #008000 !important;
}
.bg-en-souffrance {
  background-color: darkred !important;
}

.red {
  color: #fff !important;
  background-color: #892e6a !important;
}

.red_type_marche {
  color: #fff !important;
  background-color: #892e6a !important;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  border: none;
  position: relative;
  margin-bottom: 30px;
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
    0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
    0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
    0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}
.l-bg-cherry {
  background: linear-gradient(to right, #493240, #f09) !important;
  color: #fff;
}

.l-bg-blue-dark {
  background: linear-gradient(to right, #373b44, #4286f4) !important;
  color: #fff;
}

.l-bg-green-dark {
  background: linear-gradient(to right, #0a504a, #38ef7d) !important;
  color: #fff;
}

.l-bg-orange-dark {
  background: linear-gradient(to right, #a86008, #ffba56) !important;
  color: #fff;
}

.card .card-statistic-3 .card-icon-large .fas,
.card .card-statistic-3 .card-icon-large .far,
.card .card-statistic-3 .card-icon-large .fab,
.card .card-statistic-3 .card-icon-large .fal {
  font-size: 110px;
}

.card .card-statistic-3 .card-icon {
  text-align: center;
  line-height: 50px;
  margin-left: 15px;
  color: #000;
  position: absolute;
  right: -5px;
  top: 20px;
  opacity: 0.1;
}

.l-bg-cyan {
  background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
  color: #fff;
}

.l-bg-green {
  background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
  color: #fff;
}

.l-bg-orange {
  background: linear-gradient(to right, #f9900e, #ffba56) !important;
  color: #fff;
}

.l-bg-cyan {
  background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
  color: #fff;
}

#footer {
  position: relative;
  height: 20px;
  width: 100%;
  background: transparent;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/*.card-1:hover {*/
/*box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);*/
/*}*/

.card-2 {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
</style>
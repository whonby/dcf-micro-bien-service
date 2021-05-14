<template>
  <div>
    <div class="container-fluid">
      <div class="widget-box">
        <div class="widget-title">
          <span class="icon">
            <i class="icon-th"></i>
          </span>
          <!-- <h5>Liste des UA Importés</h5> -->
        </div>
        <div class="">
          <div class="widget-box">
            <div class="widget-title">
              <ul class="nav nav-tabs">
                <!-- <li class="active"><a data-toggle="tab" href="#tab1">Budget importé</a></li> -->
                <li class="active">
                  <a data-toggle="tab" href="#tab2">Importation des UA</a>
                </li>

                <li class="" v-if="section_dettecter.length > 0">
                  <a data-toggle="tab" href="#tab5"
                    ><span>Nouvelle Section Detecté</span>
                    <span class="label label-important">{{
                      section_dettecter.length
                    }}</span></a
                  >
                </li>
                <li class="" v-if="servicegestioncredit_detecter.length > 0">
                  <a data-toggle="tab" href="#tab3"
                    ><span>Nouvel Service Gestionnaire de Credit Detecté</span>
                    <span class="label label-important">{{
                      servicegestioncredit_detecter.length
                    }}</span></a
                  >
                </li>
                <li class="" v-if="localisation_geo_dettecter.length > 0">
                  <a data-toggle="tab" href="#tab4"
                    >Nouvelle Localisation Géolocalisation detectée
                    <span class="label label-important">{{
                      localisation_geo_dettecter.length
                    }}</span></a
                  >
                </li>
              </ul>
            </div>
            <div class="widget-content tab-content">
              <div id="tab2" class="tab-pane active">
                <input type="text" class="span" readonly :value="anneeAmort" />

                <upload-excel-component
                  :on-success="handleSuccess"
                  :before-upload="beforeUpload"
                />
                <hr />
                <a
                  align="right"
                  @click.prevent="ajouterFichier"
                  class="btn btn-primary"
                  href="#"
                  v-if="tableData.length"
                  >Importer</a
                >

                <table
                  class="table table-bordered table-striped"
                  v-if="tableData.length"
                >
                  <thead>
                    <tr>
                      <!-- <th>SECTION</th> -->
                      <th>TYPE UA</th>
                      <th>SECTION</th>
                      <th>SERVICES GESTIONNAIRES DE CREDIT</th>
                      <th>LOCALISATION GEOGRAPHIQUE</th>
                      <th>DATE DE CREATION</th>
                      <!-- <th>SOURCE FINANCEMENT</th>
             <th>LIGNE</th>
             <th>AE</th>
             <th>CP</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="data in tableData" :key="data.id">
                      <td>{{ data["TYPE UA"] }}</td>
                      <td>{{ data["SECTION"] }}</td>
                      <td>{{ data["SERVICES GESTIONNAIRES DE CREDIT"] }}</td>
                      <td>{{ data["LOCALISATION GEOGRAPHIQUE"] }}</td>
                      <td>{{ data["DATE DE CREATION"] }}</td>
                      <!--<td>{{data["SOURCE FINANCEMENT"]}}</td>
                                        <td>{{data["LIGNE"]}}</td>
                                        <td>{{data["AE"]}}</td>
                                        <td>{{data["CP"]}}</td> -->
                    </tr>
                  </tbody>
                </table>
                <hr />
                <!-- <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
                                    <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
                                </el-table>-->
              </div>

              <div
                id="tab5"
                class="tab-pane"
                v-if="section_dettecter.length > 0"
              >
                <table class="table table-bordered table-striped" id="source">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Libellé</th>
                      <th>Nature Section</th>
                      <!-- <th>parent</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="odd gradeX"
                      v-for="source_financement in section_dettecter"
                      :key="source_financement.code"
                    >
                      <td>
                        {{ source_financement.code || "Non renseigné" }}
                      </td>
                      <td>
                        {{ source_financement.libelle || "Non renseigné" }}
                      </td>
                      <td>
                        {{
                          source_financement.naturesection || "Non renseigné"
                        }}
                      </td>
                      <!-- <td>
                        {{ source_financement.parent || "Non renseigné" }}
                      </td> -->
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                id="tab3"
                class="tab-pane"
                v-if="servicegestioncredit_detecter.length > 0"
              >
                <table class="table table-bordered table-striped" id="source">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Libellé</th>
                      <th>structure_administrative_id</th>
                      <th>parent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="odd gradeX"
                      v-for="source_financement in servicegestioncredit_detecter"
                      :key="source_financement.code"
                    >
                      <td>
                        {{ source_financement.code || "Non renseigné" }}
                      </td>
                      <td>
                        {{ source_financement.libelle || "Non renseigné" }}
                      </td>
                      <td>
                        {{
                          source_financement.structure_administrative_id ||
                          "Non renseigné"
                        }}
                      </td>
                      <td>
                        {{ source_financement.parent || "Non renseigné" }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                id="tab4"
                class="tab-pane"
                v-if="localisation_geo_dettecter.length > 0"
              >
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Libellé</th>
                      <th>structure_localisation_geographique_id</th>
                      <th>parent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="odd gradeX"
                      v-for="source_financement in localisation_geo_dettecter"
                      :key="source_financement.code"
                    >
                      <td>
                        {{ source_financement.code || "Non renseigné" }}
                      </td>
                      <td>
                        {{ source_financement.libelle || "Non renseigné" }}
                      </td>
                      <td>
                        {{
                          source_financement.structure_localisation_geographique_id ||
                          "Non renseigné"
                        }}
                      </td>
                      <td>
                        {{ source_financement.parent || "Non renseigné" }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <notifications />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "../../../Repositories/Repository";
import UploadExcelComponent from "@/components/UploadExcel/index.vue";
export default {
  components: {
    UploadExcelComponent,
  },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      namePDFDemandeAno: "",
      fichierPDFDemandeAno: "",
      imagePDFDemandeAno: "",
      source_financement_detecter: [],
      unite_admin_dettecte: [],
      servicegestioncredit_detecter: [],
      localisation_geo_dettecter: [],
      nat_section_dettecter: [],
      section_dettecter: [],
    };
  },

  created() {},
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllActeCreation",
      "ajouterActeCreation",
      "modifierActeCreation",
      "supprimerActeCreation",
      "importBudget",
      "getAllTypeTextes",
      "getAllUniteAdministrative",
      "getAllArchivageDocument",
      "ajouterBudgetCharge",
      "getAllBudgetGeneral",
      "getAllHistoriqueBudgetGeneral",
      "modifierLigneExempter",

      "getAllUniteAdministrative",
      "ajouterUniteAdministrative",
      "modifierUniteAdministrative",
      "supprimerUniteAdministrative",
      "importationUniteAdministrative",
    ]),

    ...mapActions("parametreGenerauxSourceDeFinancement", [
      "getSourceFinancement",
      "ajouterSourceFinancement",
      "modifierFinancement",
      "supprimerSourceFinancement",
    ]),

    ...mapActions("parametreGenerauxAdministratif", [
      "getPlanProgramme",
      "ajouterPlanProgramme",
      "modifierPlanProgramme",
      "supprimerPlanProgramme",
      "importPlanProgramme",
      "ajouterServiceGestionnaire",
      "ajouterLocalisationGeographique",
    ]),

    formatageSomme: formatageSomme,

    OnchangeFichier(e) {
      const files = e.target.files;
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      Array.from(files).forEach((file) => this.addFichier(file));
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },

    handleSuccess({ results, header }) {
      // console.log(results[0]["GRANDE NATURE DE DEPENSE"])
      this.tableData = results;
      this.tableHeader = header;
      if (this.tableData.length > 0) {
        let vm = this;

        this.tableData.forEach(function (value) {
          console.log(value);
          //recherche de nouvelle source de financement
          let service_gestion_credit = value[
            "SERVICES GESTIONNAIRES DE CREDIT"
          ].split(" ");
          let localisation_geo = value["LOCALISATION GEOGRAPHIQUE"].split(" ");
          let libelle_service_gestion = value[
            "SERVICES GESTIONNAIRES DE CREDIT"
          ].substr(9);
          let libelle_service_geo = value["LOCALISATION GEOGRAPHIQUE"].substr(
            7
          );

          let code_service_geo = value["LOCALISATION GEOGRAPHIQUE"].substr(
            0,
            4
          );
          let code_service_sgc = value[
            "SERVICES GESTIONNAIRES DE CREDIT"
          ].substr(0, 4);

          let code_nature_section = value["SECTION"].substr(0, 1);
          let code_section = value["SECTION"].substr(1, 3);
          let libelle_section = value["SECTION"].substr(4);
          let libelle_naturesection = value["SECTION"].substr(4);

          console.log(service_gestion_credit[0]);
          console.log(localisation_geo[0]);

          let ServiceGestionCredit = vm.services_gestionnaires.find(
            (item) => item.code == service_gestion_credit[0]
          );

          let LocalisationGeo = vm.localisations_geographiques.find(
            (item) => item.code == localisation_geo[0]
          );

          let nat_section = vm.natures_sections.find(
            (item) => item.code == code_nature_section
          );

          let section = vm.sections.find((item) => item.code == code_section);

          //**** recherche de nouvel section et nature de section les ajouter en même temps */

          if (nat_section == undefined) {
            let objet = {
              code: code_nature_section,
              libelle: libelle_naturesection,
            };
            let isExisteSGC = vm.nat_section_dettecter.find(
              (item) => item.code == code_nature_section
            );
            if (isExisteSGC == undefined) {
              vm.nat_section_dettecter.push(objet);
              // vm.ajouterServiceGestionnaire(objet);
            }
          }

          // **** sections***
          if (section == undefined && nat_section != undefined) {
            let objet = {
              code: code_section,
              libelle: libelle_section,
              naturesection: vm.recup_nature_section(code_nature_section),
              //structure_administrative_id:4,
            };
            let isExisteSGC = vm.section_dettecter.find(
              (item) => item.code == code_section
            );
            if (isExisteSGC == undefined) {
              vm.section_dettecter.push(objet);
              //vm.ajouterServiceGestionnaire(objet);
            }
          }

          //**** recherche de nouvel service gestion de credit et les ajouter en même temps */
          if (ServiceGestionCredit == undefined) {
            let objet = {
              code: service_gestion_credit[0],
              libelle: libelle_service_gestion,
              parent: vm.recup_parent_serviceGC(code_service_sgc),
              structure_administrative_id: 4,
            };
            let isExisteSGC = vm.servicegestioncredit_detecter.find(
              (item) => item.code == service_gestion_credit[0]
            );
            if (isExisteSGC == undefined) {
              vm.servicegestioncredit_detecter.push(objet);
              vm.ajouterServiceGestionnaire(objet);
            }
          }

          //**** recherche de nouvel localisation geolocalisation et les ajouter en même temps */
          if (LocalisationGeo == undefined) {
            let objet = {
              code: localisation_geo[0],
              libelle: libelle_service_geo,
              parent: vm.recup_parent_loca_geo(code_service_geo),
              structure_localisation_geographique_id: 4,
            };

            let isExisteLG = vm.localisation_geo_dettecter.find(
              (item) => item.code == localisation_geo[0]
            );
            if (isExisteLG == undefined) {
              vm.localisation_geo_dettecter.push(objet);
              vm.ajouterLocalisationGeographique(objet);
            }
          }
        });
      }
    },

    addFichier(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.imagePDFDemandeAno = "pdf.png";
        vm.namePDFDemandeAno = file.name;
        vm.fichierPDFDemandeAno = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    Annulerfichier() {
      let vm = this;
      vm.tableData = [];
    },

    ajouterFichier() {
      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };
      let formData = {
        // exercicebudget_id:this.exercice_budget,
        dataExcel: this.tableData,
      };

      this.i = this.i + 10;
      this.bgWidth = this.i + "%";
      this.$("#exampleModal").modal("hide");
      console.log(formData);
      console.log(config);
      this.importationUniteAdministrative(formData, config)
        .then((data) => {
          console.log(data);
          this.tableData = [];
        })
        .catch((erro) => {
          console.log(erro);
          // this.getAllBudgetGeneral()
          // this.getAllUniteAdministrative()
          // router.push({ path: 'budgetGenerals' })
        });
    },
  },

  computed: {
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "services_gestionnaires",
      "localisations_geographiques",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
    ]),

    recup_nature_section() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.natures_sections.find(
            (qtreel) => qtreel.code == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },

    recup_parent_loca_geo() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.localisations_geographiques.find(
            (qtreel) => qtreel.code == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },

    recup_parent_serviceGC() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.services_gestionnaires.find(
            (qtreel) => qtreel.code == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
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
  },
};
</script>
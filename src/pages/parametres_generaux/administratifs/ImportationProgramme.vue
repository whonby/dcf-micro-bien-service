<template>
  <div>
    <h2 style="text-align: center">IMPORTATION DES PROGRAMMES</h2>

    <div id="tab2" class="tab-pane">
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

      <a
        align="left"
        @click.prevent="Annulerfichier"
        class="btn btn-primary"
        href="#"
        v-if="tableData.length"
        >Anuller</a
      >

      <table class="table table-bordered table-striped" v-if="tableData.length">
        <thead>
          <tr>
            <!-- <th>SECTION</th> -->
            <th>PROGRAMME</th>
            <!-- <th>GRANDE NATURE DE DEPENSE</th>
                                        <th>UA </th>
                                        <th>ZONE </th>
                                        <th>ACTION</th>
                                        <th>ACTIVITE</th>
                                        <th>TYPE FINACEMENT</th>
                                        <th>SOURCE FINANCEMENT</th>
                                        <th>LIGNE</th>
                                        <th>AE</th>
                                        <th>CP</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in tableData" :key="data.id">
            <!-- <td>{{data["SECTION"]}}</td> -->
            <td>{{ data["PROGRAMME"] }}</td>
          </tr>
        </tbody>
      </table>
      <hr />
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
      //   let config = {
      //     header: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   };
      let formData = {
        // exercicebudget_id:this.exercice_budget,
        dataExcel: this.tableData,
      };

      this.i = this.i + 10;
      this.bgWidth = this.i + "%";
      this.$("#exampleModal").modal("hide");
      console.log(formData);
      //console.log(config);
      this.importPlanProgramme(formData)
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
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
    ]),

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
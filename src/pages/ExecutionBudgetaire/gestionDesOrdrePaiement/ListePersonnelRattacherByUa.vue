
<template>
  <div>
    <br />
    <br />
    <br />
    <div align="left" style="cursor: pointer">
      <button class="btn btn-danger" @click.prevent="pagePrecedent">
        Page Précédente
      </button>
    </div>

    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th style="text-align: center; font-size: 12px">
            PERSONNEL RATTACHER
          </th>

          <th style="text-align: center; font-size: 12px">
            UNITE ADMINISTRATIVE PROPRIETAIRE
          </th>

          <th style="text-align: center; font-size: 12px" colspan="2">
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd gradeX"
          v-for="typedata in AffichePersonnelByUaRattacher(
            detailOp.ua_rattacheur
          )"
          :key="typedata.id"
        >
          <td style="text-align: center">
            {{ PersonnelParUA(typedata.personne_rattacher) || "Non renseigné" }}
          </td>
          <td style="text-align: center">
            {{
              libelleUniteAdministrative(typedata.ua_proprietaire) ||
              "Non renseigné"
            }}
          </td>

          <td>
            <button
              class="btn btn-danger"
              @click="DeletePersonnelRattacher(typedata.id)"
            >
              <span>
                <i class="icon icon-trash"> Supprimer</i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
import { formatageSomme } from "@/Repositories/Repository";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
// import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
export default {
  components: {
    // ModelListSelect
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      page: 0,
      size: 10,
      active_el: 0,

      editObservation: {},

      search: "",
    };
  },

  created() {
    this.marcheid = this.$route.params.id;
    this.detailOp = this.getterPersonneRattacher.find(
      (idmarche) => idmarche.ua_rattacheur == this.$route.params.id
    );
  },

  mounted() {
    console.log(this.idrattacheur);
  },
  computed: {
    ...mapGetters("personnelUA", [
      "all_acteur_depense",
      "getterPersonneRattacher",
      "groupeUaPersonneRattacher",
      "personnaliseActeurDepense",
      "acteur_depenses",
      "personnaFonction",
    ]),
    ...mapGetters("uniteadministrative", [
      "uniteAdministratives",
      "GestionStockageArticles",
      "groupeUniteAdministrativeDecompte",
      "uaperso",
    ]),

    AffichePersonnelByUaRattacher() {
      return (id) => {
        if (id != null && id != "") {
          return this.getterPersonneRattacher.filter(
            (element) => element.ua_rattacheur == id
          );
        }
      };
    },

    libelleUniteAdministrative() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.uniteAdministratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    PersonnelParUA() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.personnaliseActeurDepense.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.nom.concat(" "), qtereel.prenom;
          }
          return 0;
        }
      };
    },

    DeletePersonnelRattacher() {
      return (id) => {
        if (id != null && id != "") {
          this.SupprimerPersonnelRattacher(id);
        }
      };
    },
  },
  methods: {
    ...mapActions("bienService", [
      "ajouterServiceRealiteFaitOp",
      "modifierServiceRealiteFaitOp",
      "supprimerServiceRealiteFaitOp",
    ]),
    ...mapActions("uniteadministrative", [
      "ModifierDecompteFacture",
      "supprimerDecompteFacture",
    ]),

    ...mapActions("personnelUA", [
      "AjouterPersonnelRattacher",
      "SupprimerPersonnelRattacher",
      "ModifierPersonnelRattacher",
    ]),

    pagePrecedent() {
      window.history.back();
    },

    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>
<style>
.tailleModal {
  width: 53%;
  margin: 0 -28%;
}
td {
  font-size: 14px;
}
th {
  font-size: 14px;
}
</style>
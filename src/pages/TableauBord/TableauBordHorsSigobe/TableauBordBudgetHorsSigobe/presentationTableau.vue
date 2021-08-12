
<template>
  <div>
    <h3 style="text-align: center">TABLEAU DE BORD DU BUDGET HORS SIGOBE</h3>

    <!-- <div style="text-align:center;border:4px solid blue;font-weight:bold"> <h3 style="text-align:center">TABLEAU DE BORD UA PROJETS (ANNEE EN COURS)</h3></div>
          <h3 style="text-align:center">{{AffichLibelle(formData.unite_administrative_id)}}</h3> -->
    <br />

    <div class="table-responsive text-nowrap">
      <table class="table table-bordered table-striped">
        <div class="widget-box">
          <div class="widget-title">
            <ul class="nav nav-tabs">
              <li
                @click="activedOptionMenu(1)"
                class="active"
                style="font-size: 14px"
              >
                <a data-toggle="tab" href="#TABLEAUBORD1">TABLEAU BORD 1 </a>
              </li>

              <li
                @click="activedOptionMenu(2)"
                class=""
                style="font-size: 14px"
              >
                <a data-toggle="tab" href="#TABLEAUBORD2">TABLEAU BORD 2 </a>
              </li>

              <li
                @click="activedOptionMenu(3)"
                class=""
                style="font-size: 14px"
              >
                <a data-toggle="tab" href="#TABLEAUBORD4">TABLEAU BORD 3</a>
              </li>

              <li
                @click="activedOptionMenu(4)"
                class=""
                style="font-size: 14px"
              >
                <a data-toggle="tab" href="#TABLEAUBORD5">TABLEAU BORD 4</a>
              </li>
              <li
                @click="activedOptionMenu(5)"
                class=""
                style="font-size: 14px"
              >
                <a data-toggle="tab" href="#TABLEAUBORD6">TABLEAU BORD 5</a>
              </li>
            </ul>
          </div>
          <div class="widget-content tab-content">
            <li v-if="state == 5">
              <div id="TABLEAUBORD6" class="tab-pane">
                <!-- <h3 style="text-align:center">DETAIL OP PROVISOIRE</h3> -->
                <EtatExecutionBailleurSection></EtatExecutionBailleurSection>
              </div>
            </li>

            <div id="DEMANDE" class="tab-pane">
              <!-- <h3 style="text-align:center">DETAIL OP PROVISOIRE</h3> -->
              <TableauBordBudgetEclate></TableauBordBudgetEclate>
            </div>

            <div v-if="state == 1" id="TABLEAUBORD1" class="tab-pane active">
              <TableausuiviBudgets></TableausuiviBudgets>
            </div>

            <div v-if="state == 2" id="TABLEAUBORD2" class="tab-pane">
              <StituationExecutionBudgetActiviteLigne></StituationExecutionBudgetActiviteLigne>
            </div>

            <div v-if="state == 3" id="TABLEAUBORD4" class="tab-pane">
              <SituationExecutionActiviteBailleur></SituationExecutionActiviteBailleur>
            </div>
            <div id="TABLEAUBORD3" class="tab-pane">
              <SituationExecutionBudgetaireParBailleur></SituationExecutionBudgetaireParBailleur>
            </div>

            <div v-if="state == 4" id="TABLEAUBORD5" class="tab-pane">
              <SituationExecutionBudgetaireParSection></SituationExecutionBudgetaireParSection>
            </div>

            <div id="TABLEAUBORD7" class="tab-pane">
              <SituationExecutionBudgetaireParBailleurProjet></SituationExecutionBudgetaireParBailleurProjet>
            </div>

            <div id="MANDAT" class="tab-pane">
              <h3 style="text-align: center">DETAIL OP DIRECT</h3>
            </div>
            <!-- <div id="SYSTEME" class="tab-pane" >
             45
                  </div> -->
          </div>

          <br />
        </div>
      </table>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
// import { admin, dcf, noDCfNoAdmin } from "@/Repositories/Auth";
import { formatageSomme } from "@/Repositories/Repository";
import EtatExecutionBailleurSection from "./EtatExecutionBailleurSection";
import TableausuiviBudgets from "./TableauSuiviBudgets";
import StituationExecutionBudgetActiviteLigne from "./StituationExecutionBudgetActiviteLigne";
// import SituationExecuBudgetRecapActivite from "./SituationExecuBudgetRecapActivite"
import SituationExecutionActiviteBailleur from "./SituationExecutionActiviteBailleur";

import SituationExecutionBudgetaireParBailleur from "./SituationExecutionBudgetaireParBailleur";
import SituationExecutionBudgetaireParSection from "./SituationExecutionBudgetaireParSection";
import SituationExecutionBudgetaireParBailleurProjet from "./SituationExecutionBudgetaireParBailleurProjet";
//import vueTextTreeview from "./vueTextTreeview";
export default {
  components: {
   // vueTextTreeview,
    EtatExecutionBailleurSection,
    SituationExecutionBudgetaireParBailleur,
    SituationExecutionBudgetaireParSection,
    // ModelListSelect,
    // TableauBordBudgetEclate,
    TableausuiviBudgets,
    StituationExecutionBudgetActiviteLigne,
    SituationExecutionBudgetaireParBailleurProjet,

    // SituationExecuBudgetRecapActivite,

    // RechercheExecutionBudgetaire,
    // recapitulatifBudgetHorsSigobe,
    SituationExecutionActiviteBailleur,
  },
  name: "",
  data() {
    return {
      state: 1,
      fabActions: [
        {
          name: "cache",
          icon: "add",
        },
      ],
      formData: {
        unite_administrative_id: 0,
      },
      editMandat: {
        test: 0,
      },
    };
  },

  // created() {
  //   this.state1=TableausuiviBudgets;
  // },

  computed: {
    //    admin: admin,
    // dcf: dcf,
    // noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    ...mapGetters("uniteadministrative", [
      "budgetEclate",

      "getSousBudget",
      "BudgetEclateRegie",
      "uniteAdministratives",
    ]),
    ...mapGetters("bienService", ["gettersgestionOrdrePaiement"]),

    // FIN code op Definitif
  },
  methods: {
    ...mapActions("uniteadministrative", []),

    activedOptionMenu(id) {
      return (this.state = id);
    },

    formatageSomme: formatageSomme,
    alert() {
      console.log("ok");
    },

    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>
<style scoped>
</style>


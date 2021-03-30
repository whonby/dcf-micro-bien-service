<template>
  <div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Probleme</th>
          <th>Traitement</th>
          <th>Décision</th>

          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(gettersProblemeMarch, index) in ListegettersProblemeMarche(
            macheid
          )"
          :key="gettersProblemeMarch.id"
        >
          <td>{{ gettersProblemeMarch.probleme }}</td>
          <td>{{ gettersProblemeMarch.traitement }}</td>
          <td>{{ gettersProblemeMarch.decision }}</td>
          <td>{{ gettersProblemeMarch.date }}</td>
          <td>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <button
              @click="afficherModalModificationMarchePluriannuel(index)"
              class="btn btn-primary"
            >
              modifier
            </button>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <button
              class="btn btn-danger"
              @click="DeleteProbleme(gettersProblemeMarch.id)"
            >
              supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div id="ajouterProblemeMarchemodal" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Probleme sur le Marché</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <div class="controls">
                  <label>Date <code>*</code></label>
                  <input
                    type="date"
                    class="span"
                    placeholder=""
                    v-model="formData.date"
                  />
                </div>
              </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <div class="controls">
                  <label>Traitement <code>*</code></label>
                  <select v-model="formData.traitement" class="span">
                    <!-- <option>veuillez selectionner l'année</option> -->
                    <option>En cours</option>
                    <option>Résolu</option>
                    <option>En attente</option>
                  </select>
                </div>
              </div>
            </td>

            <!-- <td colspan="">
              
                  <label>Utilisateur <code>*</code></label>
                  <model-list-select
                    style="border: 1px solid #000"
                    class="wide"
                    :list="getterUtilisateur"
                    v-model="formData.user_id"
                    option-value="id"
                    option-text="name"
                    placeholder=""
                  >
                  </model-list-select>
               
            </td> -->
          </tr>

          <tr>
            <td colspan="">
              <div class="control-group">
                <div class="controls">
                  <label>Décision <code>*</code></label>
                  <input
                    type="text"
                    class=""
                    placeholder=""
                    v-model="formData.decision"
                  />
                </div>
              </div>
            </td>

            <td colspan="2">
              <div class="control-group">
                <div class="controls">
                  <label for="">problème rencontré<code>*</code></label>
                  <textarea
                    name="probleme"
                    cols="60"
                    rows="8"
                    v-model="formData.probleme"
                  ></textarea>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a @click.prevent="ajouterProbleme" class="btn btn-primary" href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    <!-- modification -->

    <div id="modifierMarchePM" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Probleme sur le Marché</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <input type="hidden" v-model="editMarchePl.id" />
              <div class="control-group">
                <div class="controls">
                  <label>Date <code>*</code></label>
                  <input
                    type="date"
                    class="span"
                    placeholder=""
                    v-model="editMarchePl.date"
                  />
                </div>
              </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <div class="controls">
                  <label>Traitement <code>*</code></label>
                  <select v-model="editMarchePl.traitement" class="span">
                    <!-- <option>veuillez selectionner l'année</option> -->
                    <option>En cours</option>
                    <option>Résolu</option>
                    <option>En attente</option>
                    <!-- <code v-if="message_offre">{{message_offre}}</code> -->
                  </select>
                </div>
              </div>
            </td>

            <!-- <td colspan="">
              <div class="control-group">
                <div class="controls">
                  <label>Utilisateur <code>*</code></label>
                  <model-list-select
                    style="border: 1px solid #000"
                    class="wide"
                    :list="grandes_natures"
                    v-model="formData.user_id"
                    option-value="id"
                    option-text="libelle"
                    placeholder=""
                  >
                  </model-list-select>
                </div>
              </div>
            </td> -->

            <td colspan="">
              <div class="control-group">
                <div class="controls">
                  <label>Décision <code>*</code></label>
                  <input
                    type="text"
                    class=""
                    placeholder=""
                    v-model="editMarchePl.decision"
                  />
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <div class="control-group">
                <div class="controls">
                  <label for="">problème rencontré<code>*</code></label>
                  <textarea
                    name="probleme"
                    cols="60"
                    rows="8"
                    v-model="editMarchePl.probleme"
                  ></textarea>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a @click.prevent="modificationLocal" class="btn btn-primary" href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    <notifications />
  </div>
</template>
<script>
import { formatageSomme } from "../../../../../Repositories/Repository";
import { mapActions, mapGetters } from "vuex";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  props: ["macheid"],
  data() {
    return {
      formData: {
        date: "",
        probleme: "",
        decision: "",
        traitement: "",
      },
      components: {
        ModelListSelect,
        //  facture
      },
      editMarchePl: {},
    };
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters("bienService", [
      "getterProgrammationMarchePlurieAnnuel",
      "acteEffetFinanciers",
      "gettersProblemeMarche",
      "marches",
    ]),

    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
      "types_financements",
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "exercices_budgetaires",
      "grandes_natures",
      "structures_geographiques",
      "localisations_geographiques",
      "getterInfrastrucure",
    ]),

    ListegettersProblemeMarche: function () {
      return (macheid) => {
        if (macheid != "") {
          //console.log("Marche lettre inviation marche")
          return this.gettersProblemeMarche.filter(
            (idmarche) => idmarche.marche_id == macheid
          );
        }
      };
    },

    listeMarcheProbleme: function () {
      return (macheid) => {
        if (macheid != "") {
          //console.log("Marche lettre inviation marche")
          return this.gettersProblemeMarche.filter(
            (idmarche) => idmarche.marche_id == macheid
          );
        }
      };
    },
    // calcul du CP annuel prevu pour les type de financement

    calculCPAnnuelPourLesTypeFinancement() {
      const sommeCPAnnuel =
        parseFloat(this.formData.cp_tresor) +
        parseFloat(this.formData.cp_dons) +
        parseFloat(this.formData.cp_emprunt);
      if (isNaN(sommeCPAnnuel)) return null;
      return parseFloat(sommeCPAnnuel).toFixed(2);
    },

    DeleteProbleme() {
      return (id) => {
        if (id != null && id != "") {
          this.SupprimerProblemeMarche(id);
        }
      };
    },

    LibelleMarche() {
      return (id) => {
        if (id != null) {
          let objet = this.marches.find((item) => item.id == id);
          if (objet) return objet.objet;
        }
        return 0;
      };
    },

    affiherLibelleTypefinancement() {
      return (id) => {
        if (id != null) {
          let objet = this.types_financements.find((item) => item.id == id);
          if (objet) return objet.libelle;
        }
        return null;
      };
    },

    afficherLibelleAnneBudgetaire() {
      return (id) => {
        if (id != null) {
          let objet = this.exercices_budgetaires.find((item) => item.id == id);
          if (objet) return objet.annee;
        }
        return null;
      };
    },

    afficherAnneBudgetaire() {
      return (id) => {
        if (id != null) {
          let objet = this.getterProgrammationMarchePlurieAnnuel.find(
            (item) => item.marche_id == id
          );
          if (objet) return objet.anneeBudgetaire;
        }
        return null;
      };
    },

    anneeBugetaire() {
      const anneBudget = this.exercices_budgetaires.find(
        (anneBudg) => anneBudg.encours == 1
      );
      if (anneBudget) {
        return anneBudget.annee;
      }
      return 0;
    },

    afficherMontantTtcDeActe() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );
          console.log(this.acteEffetFinanciers);
          if (qtereel) {
            return qtereel.montant_act;
          }
          return 0;
        }
      };
    },

    // afficher la duree contractuel
    afficherDureeContratuel() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );
          console.log(this.acteEffetFinanciers);
          if (qtereel) {
            return qtereel.duree;
          }
          return 0;
        }
      };
    },
  },
  methods: {
    ...mapActions("bienService", [
      "ajouterProgrammationMarchePlurieAnnuel",
      "modifierProgrammationMarchePlurieAnnuel",
      "supprimerProgrammationMarchePlurieAnnuel",
      "getProblemeMarche",
      "AjouterProblemeMarche",
      "SupprimerProblemeMarche",
      "ModifierProblemeMarche",
    ]),

    // afficherModalModif(index) {
    //   this.$("#modifierMarcheP").modal({
    //     backdrop: "static",
    //     keyboard: false,
    //   });
    //   this.editMarchePl = this.listeMarchePluriannuel(this.macheid)[index];
    //   //  console.log(this.edit_bailleur_marche)
    // },

    afficherModalModificationMarchePluriannuel(index) {
      this.$("#modifierMarchePM").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMarchePl = this.ListegettersProblemeMarche(this.macheid)[index];
      //  console.log(this.edit_bailleur_marche)
    },
    formatageSomme: formatageSomme,

    ajouterProbleme() {
      //    this.$router.push({
      //      name:'marcheHorsib'
      //    })
      var nouvelObjet = {
        ...this.formData,
        // date: this.date,
        // probleme: this.probleme,
        // decision: this.decision,
        // traitement: this.traitement,
        marche_id: this.macheid,
        //user_id: this.macheid,
      };
      this.AjouterProblemeMarche(nouvelObjet);
      this.$("#ajouterProblemeMarchemodal").modal("hide");

      this.formData = {
        date: "",
        probleme: "",
        decision: "",
        traitement: "",
      };
    },

    modificationLocal() {
      // console.log(this.edite_appel_offre)
      this.ModifierProblemeMarche(this.editMarchePl);
      this.$("#modifierMarchePM").modal("hide");
    },
  },
};
</script>

<style scoped>
.grdirModalActeEffet {
  width: 1100px;
  margin: 0 -530px;
  height: 600px;
}
</style>
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
          v-for="(ListegettersProblemeMarch, index) in ListegettersProblemeMarche(macheid)"
          :key="ListegettersProblemeMarch.id"
        >
          <td>{{ ListegettersProblemeMarch.probleme }}</td>
          <td>{{ ListegettersProblemeMarch.traitement }}</td>
          <td>{{ ListegettersProblemeMarch.decision }}</td>
          <td>{{ formaterDate(ListegettersProblemeMarch.date) }}</td>
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
              @click="DeleteProbleme(ListegettersProblemeMarch.id)"
            >
              supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div id="AjouterProblemeMarcheModal" class="modal hide grdirModalActeEffet">
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
        <a class="btn btn-primary" @click.prevent="ajouterProbleme" href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

     <!-- modification -->

    <div id="modifierMarchePM" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modification Probleme sur le Marché</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
            <input type="hidden" v-model="editMarchePl.id">
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
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
import { formatageSomme } from "../../../../../Repositories/Repository";
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
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

  computed: {
    ...mapGetters("bienService", [
      "getterProgrammationMarchePlurieAnnuel",
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
      "getterInfrastrucure",
    ]),


//      ListegettersProblemeMarche() {
//         return this.gettersProblemeMarche.filter(
//            // console.log(this.macheid)
//           (idmarche) => idmarche.marche_id == this.macheid
//         );
//   },


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

   DeleteProbleme() {
      return (id) => {
        if (id != null && id != "") {
          this.SupprimerProblemeMarche(id);
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

    afficherModalModificationMarchePluriannuel(index) {
      this.$("#modifierMarchePM").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMarchePl = this.ListegettersProblemeMarche(this.macheid)[index];
      //  console.log(this.edit_bailleur_marche)
    },

   

formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,

     modificationLocal() {
      // console.log(this.edite_appel_offre)
      this.ModifierProblemeMarche(this.editMarchePl);
      this.$("#modifierMarchePM").modal("hide");
    },

    ajouterProbleme() {
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
      this.$("#AjouterProblemeMarcheModal").modal("hide");

      this.formData = {
        date: "",
        probleme: "",
        decision: "",
        traitement: "",
      };
    },
  },

  mounted:{
      // console.log(this.macheid);
  }
};
</script>

<style>
</style>
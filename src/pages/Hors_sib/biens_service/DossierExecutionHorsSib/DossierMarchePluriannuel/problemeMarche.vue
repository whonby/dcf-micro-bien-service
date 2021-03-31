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
          v-for="gettersProblemeMarch in ListegettersProblemeMarche"
          :key="gettersProblemeMarch.id"
        >
          <td>{{ gettersProblemeMarch.probleme }}</td>
          <td>{{ gettersProblemeMarch.traitement }}</td>
          <td>{{ gettersProblemeMarch.decision }}</td>
          <td>{{ gettersProblemeMarch.date }}</td>
          <td>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <button
             
              class="btn btn-primary"
            >
              modifier
            </button>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <button
              class="btn btn-danger"
              
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
        <a  class="btn btn-primary"  @click.prevent="ajouterProbleme" href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
import { formatageSomme } from "../../../../../Repositories/Repository";
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
  },

  ListegettersProblemeMarche: function () {
     
          return this.gettersProblemeMarche.filter(
            (idmarche) => idmarche.marche_id == this.macheid
          );
        
      
    },

  methods:{
       ...mapActions("bienService", [
      "ajouterProgrammationMarchePlurieAnnuel",
      "modifierProgrammationMarchePlurieAnnuel",
      "supprimerProgrammationMarchePlurieAnnuel",
      "getProblemeMarche",
      "AjouterProblemeMarche",
      "SupprimerProblemeMarche",
      "ModifierProblemeMarche",
    ]),

    formatageSomme: formatageSomme,

    
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

  }

}
</script>

<style>

</style>
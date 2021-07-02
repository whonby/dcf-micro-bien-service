
<template>
  <div>
    <table class="table table-striped">
      <tbody>
        <tr>
          <td>
            <label>EXERCICE </label>
            <model-list-select
              style="border: 1px solid #000"
              class="wide"
              :list="exercices_budgetaires"
              v-model="exercices_budgetaires_id"
              option-value="annee"
              option-text="annee"
              placeholder="2021"
            >
            </model-list-select>
          </td>

          <!-- <td>

                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >CODE ACTIVITE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="plans_activites"
                  v-model="Activite_code"
                  option-value="id"
                  option-text="code"
                  placeholder="CODE"
                >
                </model-list-select>
              </td> -->

          <td>
            <label style="color: #000; font-size: 14px; font-weight: bolder"
              >LIBELLE ACTIVITE<a href="#" style="color: red"></a>
            </label>
            <model-list-select
              style="background-color: #fff; border: 2px solid #000"
              class="wide"
              :list="plans_activites"
              v-model="Activite_id"
              option-value="id"
              option-text="libelle"
              placeholder="LIBELLE"
            >
            </model-list-select>
          </td>

          <!-- <td>
                <div class="control-group">
                  <label
                    class="control-label"
                    style="color: #000; font-size: 14px; font-weight: bolder"
                    >Date debut</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      v-model="formData.date_debut"
                      class="span"
                      style="background-color: #fff; border: 2px solid #000"
                    />
                  </div>
                </div>
              </td>

              <td>
                <div class="control-group">
                  <label
                    class="control-label"
                    style="color: #000; font-size: 14px; font-weight: bolder"
                    >Date Fin</label
                  >
                  <div class="controls">
                    <input
                      type="date"
                      v-model="formData.date_fin"
                      class="span"
                      style="background-color: #fff; border: 2px solid #000"
                    />
                  </div>
                </div>
              </td> -->
        </tr>
      </tbody>
    </table>
    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>
    <div class="widget-content nopadding" id="printpdf">
    <table class="table table-bordered table-striped">
          <tr>
             <h2 style="text-align: center; font-size: 25px;text-decoration: underline ;text-transform: uppercase;">SITUATION D'EXECUTION DU BUDGET PAR ACTIVITE ET PAR BAILLEUR</h2>
          </tr>
        </table>
      <!-- <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
        v-if="formData.date_debut == '' && formData.date_fin == ''"
      >
        SITUATION D'EXECUTION RECAPITULATIVE PAR ACTIVITE ET PAR BAILLEUR

        {{ formData.date_debut }}
        {{ formData.date_fin }}
      </h2> -->

      <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
        v-if="formData.date_debut != '' && formData.date_fin != ''"
      >
        SITUATION D'EXECUTION RECAPITULATIVE PAR ACTIVITE ET PAR BAILLEUR DU

        {{ formaterDate(formData.date_debut) }} AU
        {{ formaterDate(formData.date_fin) }}
      </h2>
      <p
        style="
          margin-left: 30px;
          font-size: 14px;
          color: #000;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        EXERCICE: {{ anneeAmort }}
      </p>
      <div class="span4">
        <br />
        Afficher
        <select name="pets" id="pet-select" v-model="size" class="span3">
          <option value="5" selected>5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
      </div>
      <div class="widget-content nopadding" style="margin: 25px">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th
                style="
                  font-size: 14px;
                  color: #000;
                  font-weight: bold;
                  background-color: #fbb203 !important;
                "
              ></th>

              <th
                style="
                  font-size: 14px;
                  color: #000;
                  font-weight: bold;
                  background-color: #fbb203 !important;
                "
              >
                ACTIVITE/BAILLEUR {{ afficheAnnee }}
                <button @click="ActiveInputLigne">
                  <i class="icon-search"></i>
                </button>
                <!-- <input type="text" v-model="inputLigne1" class="span4" /> -->
                <model-list-select
                  v-show="inputLigne == true"
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="plans_activites"
                  v-model="inputLigne1"
                  option-value="id"
                  option-text="code"
                  placeholder="CODE ACTIVITE"
                >
                </model-list-select>
              </th>

              <th
                style="
                  font-size: 14px;
                  color: #000;
                  font-weight: bold;
                  background-color: #fbb203 !important;
                "
              >
                BUDGET INITIAL {{ afficheAnnee }}
              </th>
              <th
                style="
                  font-size: 14px;
                  color: #000;
                  font-weight: bold;
                  background-color: #fbb203 !important;
                "
              >
                MODIFICATION BUDGETAIRE {{ afficheAnnee }}
              </th>
              <th
                style="
                  font-size: 14px;
                  color: #000;
                  font-weight: bold;
                  background-color: #fbb203 !important;
                "
              >
                BUDGET ACTUEL {{ afficheAnnee }}
              </th>
              <th
                style="
                  font-size: 14px;
                  color: #000;
                  font-weight: bold;
                  background-color: #fbb203 !important;
                "
              >
                MONTANT EXECUTE {{ afficheAnnee }}
              </th>

              <th
                style="
                  font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                MONTANT OP PROVISOIRE NON REGULARISE {{ afficheAnnee }}
              </th>

              <th
                style="
                  font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                NB OP PROVISOIRE NON REGULARISE(S) {{ afficheAnnee }}
              </th>

              <!-- <th
                  style="
                    font-size: 14px;
                    font-weight: bold;
                    color: #000;
                    text-align: center;
                    background-color:  #ff9c1a !important;
                  "
                >
                  Montant Provisoire
                </th> -->
              <th
                style="
                  font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  background-color: #fbb203 !important;
                "
              >
                TAUX D'EXECUTION(%) {{ afficheAnnee }}
              </th>
<!-- 
              <th
                style="
                  font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  text-align: center;
                  background-color: #fbb203 !important;
                "
              >
                EVOLUTION DU TAUX D’EXECUTION
              </th> -->
              <th
                style="
                  font-size: 14px;
                  font-weight: bold;
                  color: #000;
                  background-color: #fbb203 !important;
                "
              >
                DISPONIBLE {{ afficheAnnee }}
              </th>
            </tr>
          </thead>
          <tbody
            v-for="GroupeOrdrePaiementByActivit in partition(afficheUa, size)[
              page
            ]"
            :key="GroupeOrdrePaiementByActivit[0].id"
          >
            <tr>
              <td>
                <button
                  @click="
                    ShowMyLigne(GroupeOrdrePaiementByActivit[0].activite_id)
                  "
                >
                  <i class="icon-eye-open"></i>
                </button>
              </td>

              <td
                v-bind:class="
                  recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id
                    ? 'graybg'
                    : 'whitebg'
                "
              >
                {{
                  LibelleActivite(GroupeOrdrePaiementByActivit[0].activite_id)
                }}
              </td>
              <td
                 v-bind:class=" recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id ? 'graybg': 'whitebg'"
                   style="text-align: right"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantBudgetInitial(
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  )
                }}
              </td>
              <td
                 v-bind:class=" recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id ? 'graybg': 'whitebg'"
                   style="text-align: right"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantReamenagement(
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  )
                }}
              </td>
              <td
                v-bind:class=" recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id ? 'graybg': 'whitebg'"
                   style="text-align: right"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantBudgetActuel(
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  )
                }}
              </td>
              <td
                v-bind:class="recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id ? 'graybg': 'whitebg'"
                   style="text-align: right"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantBudgetExecuté(
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  )
                }}
              </td>

              <td
                v-bind:class="
                  recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id
                    ? 'graybg'
                    : 'whitebg'
                " style="text-align: right"
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantBudgetExecutéProvisoire(
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  )
                }}
              </td>

              <td
                v-bind:class="
                  recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id
                    ? 'graybg'
                    : 'whitebg'
                " style="text-align: right"
              >
                {{ NbreOpProvisoireNonRegularisé(GroupeOrdrePaiementByActivit[0].activite_id) }}
              </td>

              <!-- <td
                  style="font-weight: bold; font-size:15px; text-align: right; background-color:#a7e556 !important"
                >
                  {{
                    formatageSommeSansFCFA(
                      parseFloat(
                        MontantBudgetExecutéProvisoire(
                          GroupeOrdrePaiementByActivit[0].activite_id
                        )
                      )
                    )
                  }}
                </td> -->
              <!-- <td
                v-bind:class="
                  recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id
                    ? 'graybg'
                    : 'whitebg'
                "
              >
                {{
                  EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) ||
                  "Non renseigné"
                }}
              </td> -->

              <td style=" text-align: right;color:#000; !important;">
                <button
                  class="btn btn-danger taille"
                  v-if="
                    EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) <= 25
                  "
                >
                  <span style="color: #fff; font-size: 14px; font-weight: bold">
                    {{ EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) }}
                  </span>
                </button>
                <button
                  class="btn btn-warning taille"
                  v-else-if="
                    25 <
                    EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) <=
                    50
                  "
                >
                  <span style="color: #fff; font-size: 14px; font-weight: bold">
                    {{ EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) }}
                  </span>
                </button>
                <button
                  class="btn btn-success taille"
                  v-else-if="
                    50 <
                    EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) <=
                    75
                  "
                >
                  <span style="color: #fff; font-size: 14px; font-weight: bold">
                    {{ EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) }}
                  </span>
                </button>
                <button
                  class="btn btn-success taille"
                  v-else-if="
                    75 <
                    EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) <=
                    100
                  "
                >
                  <span style="color: #fff; font-size: 14px; font-weight: bold;">
                    {{ EviteNaN(GroupeOrdrePaiementByActivit[0].activite_id) }}
                  </span>
                </button>
              </td>

              <td
                v-bind:class=" recupereIDactivite ==
                  GroupeOrdrePaiementByActivit[0].activite_id ? 'graybg': 'whitebg'" style="text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(MontantDisponible(GroupeOrdrePaiementByActivit[0].activite_id) ))
                }}
              </td>
            </tr>

            <tr
              class="odd gradeX"
              v-show="
                recupereIDactivite ==
                GroupeOrdrePaiementByActivit[0].activite_id
              "
              v-for="ListepaimentBailleur in arrayExerciceDecompte(
                GroupeOrdrePaiementByActivit[0].activite_id
              )"
              :key="ListepaimentBailleur"
            >
              <td></td>
              <td style="font-size: 14px; color: #000">
                {{
                  libelleLigneEconomique(ListepaimentBailleur) ||
                  "Non renseigné"
                }}
              </td>
              <td style="widht: 25px; color: #000; text-align: right">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      afficheMontantVoteParActivite(ListepaimentBailleur,
                      GroupeOrdrePaiementByActivit[0].activite_id

                      )
                    )
                  )
                }}
              </td>
              <td style="widht: 25px; text-align: right; color: #000">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantReamenagerBailleur(
                        ListepaimentBailleur,
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  )
                }}
              </td>
              <td style="widht: 25px; text-align: right; color: #000">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantBudgetActuelBailleur(ListepaimentBailleur,
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  )
                }}
              </td>

              <td style="font-size: 14px; text-align: right; color: #000">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantBudgetExecuté1Bailleur(
                        ListepaimentBailleur,
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  ) || "Non renseigné"
                }}
              </td>

              <td style="font-size: 14px; text-align: right; color: #000">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      MontantBudgetExecutéProvisoireBailleur(
                        ListepaimentBailleur,
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    )
                  ) || "Non renseigné"
                }}
              </td>

              <td style="font-size: 14px; text-align: right; color: #000">
                {{ NbreBudgetExecutéProvisoireBailleur(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id) }}
              </td>

              <!-- <td style="font-size: 14px; text-align: right; color: #000">
                {{
                  EviteNaNBailleur(
                    ListepaimentBailleur,
                    GroupeOrdrePaiementByActivit[0].activite_id
                  )
                }}
              </td> -->

              <td style="text-align: right; color: #000">
                <button
                  class="btn btn-danger taille"
                  v-if="
                    0 <
                    EviteNaNBailleur(
                      ListepaimentBailleur,
                      GroupeOrdrePaiementByActivit[0].activite_id
                    ) <
                    25
                  "
                >
                  <span style="color: #fff; font-size: 14px; font-weight: bold">
                    {{
                      EviteNaNBailleur(
                        ListepaimentBailleur,
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    }}
                  </span>
                </button>
                <button
                  class="btn btn-warning taille"
                  v-else-if="
                    25 <
                    EviteNaNBailleur(
                      ListepaimentBailleur,
                      GroupeOrdrePaiementByActivit[0].activite_id
                    ) <
                    50
                  "
                >
                  <span style="color: #fff; font-size: 14px; font-weight: bold">
                    {{
                      EviteNaNBailleur(
                        ListepaimentBailleur,
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    }}
                  </span>
                </button>
                <button
                  class="btn btn-success taille"
                  v-else-if="
                    50 <
                    EviteNaNBailleur(
                      ListepaimentBailleur,
                      GroupeOrdrePaiementByActivit[0].activite_id
                    ) <
                    75
                  "
                >
                  <span style="color: #fff; font-size: 14px; font-weight: bold">
                    {{
                      EviteNaNBailleur(
                        ListepaimentBailleur,
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    }}
                  </span>
                </button>
                <button
                  class="btn btn-success taille"
                  v-else-if="
                    75 <
                    EviteNaNBailleur(
                      ListepaimentBailleur,
                      GroupeOrdrePaiementByActivit[0].activite_id
                    ) <
                    100
                  "
                >
                  <span style="color: #fff; font-size: 14px; font-weight: bold">
                    {{
                      EviteNaNBailleur(
                        ListepaimentBailleur,
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )
                    }}
                  </span>
                </button>
              </td>
              <td style="font-size: 14px; text-align: right; color: #000">
                {{
                  formatageSommeSansFCFA(
                    parseFloat(MontantBudgetDisponobleBailleur(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id)
                    )
                  ) || "Non renseigné"
                }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr style="margin-left: 25px">
              <td></td>
              <td
                style="
                  text-align: center;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                TOTAL ACTIVITE
              </td>

              <td
                style="
                  text-align: center;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                {{ formatageSommeSansFCFA(parseFloat(TotalMontantbudgetVote)) }}
              </td>

              <td
                style="
                  text-align: right;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                {{
                  formatageSommeSansFCFA(parseFloat(TotalMontantReamenagement))
                }}
              </td>

              <td
                style="
                  text-align: right;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                {{
                  formatageSommeSansFCFA(parseFloat(TotalMontantBudgetActuel))
                }}
              </td>

              <td
                style="
                  text-align: right;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                {{
                  formatageSommeSansFCFA(parseFloat(TotalMontantBudgetExecuté))
                }}
              </td>

              <td
                style="
                  text-align: right;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(TotalMontantBudgetExecutéProvisoire)
                  )
                }}
              </td>

              <td
                style="
                   text-align: right;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                {{ NbreTotalBudgetExecutéProvisoire }}
              </td>

              <td
                style="
                  text-align: center;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                {{TotalEviteNaN}}
              </td>

              <!-- <td
                style="
                  text-align: center;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              ></td> -->

              <td
                style="
                  text-align: right;
                  color: #000;
                  background-color: #f55e25 !important;
                  font-weight: bold;
                  color: #000;
                "
              >
                {{
                  formatageSommeSansFCFA(
                    parseFloat(
                      TotalMontantBudgetActuel - TotalMontantBudgetExecuté
                    )
                  )
                }}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div class="pagination alternate">
        <ul>
          <li :class="{ disabled: page == 0 }">
            <a @click.prevent="precedent()" href="#">Précedent</a>
          </li>
          <li
            v-for="(titre, index) in partition(afficheUa, size).length"
            :key="index"
            :class="{ active: active_el == index }"
          >
            <a @click.prevent="getDataPaginate(index)" href="#">{{
              index + 1
            }}</a>
          </li>
          <li
            :class="{ disabled: page == partition(afficheUa, size).length - 1 }"
          >
            <a @click.prevent="suivant()" href="#">Suivant</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSommeSansFCFA } from "@/Repositories/Repository";
//import { formatageSomme } from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size: 5,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      options2: [
        { id: "1", libelle: "OP Direct" },
        { id: "2", libelle: "OP Provisoire" },
        { id: "3", libelle: "OP Annulation" },
        { id: "4", libelle: "OP Définitif" },
      ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },
      affiche_filtre1: false,
      affiche_filtre: false,
      affiche_boutton_filtre: true,
      formData: {
        code: "",
        libelle: "",
        date_debut: "",
        date_fin: "",
      },
      EditDetache: {},
      typeop_id: 0,
      NumeroOp: 0,
      uniteAdministrative_id: 0,
      exercices_budgetaires_id: 0,
      Activite_code: 0,
      Activite_id: 0,
      inputLigne1: 0,
      inputLigne: false,

      editMandat: {},
      EditAnulation: {},
      editDecisionFinal: {},
      search: "",
      recupereIDactivite: "",
    };
  },

  computed: {
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    ...mapGetters("parametreGenerauxAdministratif", [
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "exercices_budgetaires",
      "sections",
    ]),
    ...mapGetters("personnelUA", [
      "salairesActeur",
      "personnaliseActeurDepense",
      "personnaFonction",
      "afficheNombrePersonnelRecuActeNormination",
      "fonctionBudgetaire",
      "type_salaries",
      "type_contrats",
      "acte_personnels",
      "type_acte_personnels",
      "fonctions",
      "grades",
      "niveau_etudes",
      "nbr_acteur_actredite_taux",
      "all_acteur_depense",
      "personnaliseActeurFinContrat",
      "totalActeurEnctivite",
      "totalActeurDepense",
      "totalActeurAccredite",
      "tauxActeurAccredite",
      "totalActeurNonAccredite",
      "affichePersonnelRecuActeNormination",
    ]),
    ...mapGetters("bienService", [
      "gettershistoriqueDecisionCfOP",
      "typeMarches",
      "gettersgestionOrdrePaiementAnnulation",
      "gettersgestionOrdrePaiement",
      "gettersDossierAutreDepense",
      "gettersDossierMandat",
      "gettersDossierFacturePiece",
      "typeFactures",
      "gettersDemandeEngagement",
      "gettersnomPieceJustificative",
      "modepaiements",
      "gettersCotationPersonnaliser",
      "typeCandidat",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "lots",
      "villes",
      "communes",
      "pays",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "gettersPersonnaliserRapportJugement",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "getterMandate",
      "getterCojos",
      "conditions",
      "getterAnalyseDossiers",
      "typeAnalyses",
      "getterDemandeAno",
      "documentProcedures",
      "getterAnalyseDMP",
      "getterAnoDMPBailleur",
      "getterObseravtionBailleurs",
      "obseravtionBailleurs",
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "selectionner_candidats",
      "getActeEffetFinancierPersonnaliserContrat",
      "acteEffetFinanciers",
      "personnaliseGetterMarcheBailleur",
      "getterMembreCojo",
      "getterProceVerballe",
      "GroupeOrdrePaiementByActivite",
      "GroupeOrdrePaiementByLigneEconomique",
    ]),
    ...mapGetters("gestionMarche", [
      "groupeVille",
      "entreprises",
      "banques",
      "comptes",
      "getCompte",
      "getEntreptise",
      "getPersonnaliseAgence",
      "agenceBanques",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structureActe",
      "planActe",
    ]),
    ...mapGetters("parametreGenerauxActivite", [
      "structures_activites",
      "plans_activites",
      "afficheNiveauAction",
      "afficheNiveauActivite",
    ]),
    ...mapGetters("gestionMarche", ["entreprises"]),

    ...mapGetters("uniteadministrative", [
      "budgetEclate",
      "groupeLigneEconomiqueBudget",
      "getSousBudget",
      "groupeActiviteBudget",
      "budgetGeneral",
      "fonctionsua",
      "servicesua",
      "directions",
      "uniteZones",
      "uniteAdministratives",
      "getPersonnaliseBudgetGeneralParPersonnel",
      "groupeByActivite",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
    ]),
    ...mapGetters("parametreGenerauxBudgetaire", [
      "plans_budgetaires",
      "derniereNivoPlanBudgetaire",
    ]),
    ...mapGetters("parametreGenerauxSourceDeFinancement", [
      "sources_financements",
    ]),

    //****************gestion des totaux *********//
    TotalMontantbudgetVote() {
      if (this.Activite_id != 0 && this.inputLigne1 != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.activite_id == this.Activite_id &&
              qtreel.activite_id == this.inputLigne1 &&
              qtreel.budget_actif_def==1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else if (this.Activite_id == 0 && this.inputLigne1 != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.activite_id == this.inputLigne1 &&
              qtreel.budget_actif_def==1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else if (this.Activite_id != 0 && this.inputLigne1 == 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.activite_id == this.Activite_id &&
              qtreel.budget_actif_def==1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      } else {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.activite_id != null &&
              qtreel.budget_actif_def==1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.dotation), 0)
          .toFixed(0);
      }
    },

    TotalMontantReamenagement() {
      if (this.Activite_id != 0 && this.inputLigne1 != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.activite_id == this.Activite_id &&
              qtreel.activite_id == this.inputLigne1 &&
              qtreel.budget_active==1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget), 0)
          .toFixed(0);
      } else if (this.Activite_id == 0 && this.inputLigne1 != 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.activite_id == this.inputLigne1 &&
              qtreel.budget_active==1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget), 0)
          .toFixed(0);
      } else if (this.Activite_id != 0 && this.inputLigne1 == 0) {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.activite_id == this.Activite_id &&
              qtreel.budget_active==1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget), 0)
          .toFixed(0);
      } else {
        return this.budgetEclate
          .filter(
            (qtreel) =>
              qtreel.annebudgetaire == this.afficheAnnee &&
              qtreel.activite_id != null &&
              qtreel.budget_active==1
          )
          .reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget), 0)
          .toFixed(0);
      }
    },

    TotalMontantBudgetActuel() {
      return ( parseFloat(this.TotalMontantReamenagement) + parseFloat(this.TotalMontantbudgetVote));
    },

     TotalEviteNaN() {
      if (
        this.TotalMontantBudgetExecuté == 0 &&
        this.TotalMontantBudgetActuel == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.TotalMontantBudgetExecuté) /
            parseFloat(this.TotalMontantBudgetActuel)) *
          100
        ).toFixed(2);
      }
    },

    TotalMontantBudgetExecuté() {
      if (this.Activite_id != 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.Activite_id &&
                qtreel.activite_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.Activite_id &&
                qtreel.activite_id == this.inputLigne1 &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.Activite_id &&
                qtreel.activite_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.Activite_id &&
                qtreel.activite_id == this.inputLigne1 &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.Activite_id == 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.inputLigne1 &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.inputLigne1 &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.inputLigne1 &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.Activite_id != 0 && this.inputLigne1 == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.Activite_id &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id == this.Activite_id &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.Activite_id &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id == this.Activite_id &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id != null &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 1 &&
                qtreel.activite_id != null &&
                qtreel.decision_cf == 8) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id != null &&
                qtreel.decision_cf == 9) ||
              (qtreel.exercice == this.afficheAnnee &&
                qtreel.type_ordre_paiement == 4 &&
                qtreel.activite_id != null &&
                qtreel.decision_cf == 8)
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      }
    },

    NbreTotalBudgetExecutéProvisoire() {
      if (this.Activite_id != 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.activite_id == this.Activite_id &&
              qtreel.activite_id == this.inputLigne1 &&
              qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==1
          ).length
      } else if (this.Activite_id == 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.activite_id == this.inputLigne1 &&
              qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==1
          ).length
      }
      else if (this.Activite_id != 0 && this.inputLigne1 == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.activite_id == this.Activite_id && 
              qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==1
          ).length
      } else {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.activite_id != null &&
              qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==1
          ).length
      }
    },

    TotalMontantBudgetExecutéProvisoire() {
      if (this.Activite_id != 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.activite_id == this.Activite_id &&
              qtreel.activite_id == this.inputLigne1 &&
              qtreel.diff_reg_op==0
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else if (this.Activite_id == 0 && this.inputLigne1 != 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.activite_id == this.inputLigne1 &&
              qtreel.diff_reg_op==0
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      }
      else if (this.Activite_id != 0 && this.inputLigne1 == 0) {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.activite_id == this.Activite_id && 
              qtreel.diff_reg_op==0
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      } else {
        return this.gettersgestionOrdrePaiement
          .filter(
            (qtreel) =>
              qtreel.exercice == this.afficheAnnee &&
              qtreel.activite_id != null &&
              qtreel.diff_reg_op==0
          )
          .reduce(
            (prec, cur) =>
              parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
            0
          )
          .toFixed(0);
      }
    },

    //*************fin gestion des totaux*************/

    variation() {
      return (id, id1) => {
        if ((id != null && id != "", id1 != null && id1 != "")) {
          return this.budgetEclate
            .filter(
              (item) =>
                item.activite_id == id && item.source_financement_id == id
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        }
      };
    },

    MontantReamenagerBailleur() {
      return (id, id1) => {
        if ((id != null && id != "", id1 != null && id1 != "")) {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.activite_id == id1 &&
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.anneeAmort &&
                qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    afficheMontantVoteParActivite() {
      return (id, id1) => {
        if ((id != null && id != "", id1 != null && id1 != "")) {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.activite_id == id1 &&
                qtreel.source_financement_id == id &&
                qtreel.annebudgetaire == this.anneeAmort &&
                qtreel.budget_actif_def == 1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    afficheUa() {
      return this.ListeGroupByActivite2;
    },

    afficheAnnee() {
      if (this.exercices_budgetaires_id == 0) {
        return this.anneeAmort;
      } else {
        return this.exercices_budgetaires_id;
      }
    },

    ListeGroupByActivite2() {
      if (this.Activite_id != 0 && this.inputLigne1 != 0) {
        return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee &&
            qtreel[0].activite_id == this.Activite_id &&
            qtreel[0].activite_id == this.inputLigne1
        );
      } else if (this.Activite_id == 0 && this.inputLigne1 != 0) {
        return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee &&
            qtreel[0].activite_id == this.inputLigne1
        );
      } else if (this.Activite_id != 0 && this.inputLigne1 == 0) {
        return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee &&
            qtreel[0].activite_id == this.Activite_id
        );
      } else {
        return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.afficheAnnee &&
            qtreel[0].activite_id != null
        );
      }
    },

    // ListeGroupByActivite2() {
    //   if (this.formData.date_debut != "" && this.formData.date_fin != "") {
    //     return this.groupeByActivite.filter(
    //       (qtreel) =>
    //         qtreel[0].annebudgetaire == this.afficheAnnee
    //     );
    //   } else {
    //     return this.groupeByActivite
    //     .filter(
    //       (qtreel) =>
    //         (qtreel[0].annebudgetaire == this.afficheAnnee
    //          )

    //     );
    //   }
    // },

    // ListeGroupByActivite3() {
    //   if (this.formData.date_debut != "" && this.formData.date_fin != "") {
    //     return this.GroupeOrdrePaiementByActivite.filter(
    //       (qtreel) =>
    //         qtreel[0].decision_cf == 8 &&
    //         qtreel[0].diff_op == null &&
    //         qtreel[0].decision_cf == 9 &&
    //         //  qtreel[0].exercice == this.anneeAmort &&
    //         qtreel[0].date_decision_cf >= this.formData.date_debut &&
    //         qtreel[0].date_decision_cf <= this.formData.date_fin
    //     );
    //   } else {
    //     return this.GroupeOrdrePaiementByActivite;
    //     // .filter(
    //     //   (qtreel) =>
    //     //     (qtreel[0].decision_cf == 8 && qtreel[0].diff_op == null
    //     //      // && qtreel[0].exercice == this.anneeAmort
    //     //      )

    //     // );
    //   }
    // },

    libelleBailleur() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    libelleGroupeBailleur() {
      return (id) => {
        if (id != null && id != "") {
          return this.GroupeOrdrePaiementByLigneEconomique.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
    },

    libelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sources_financements.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat("    ", qtereel.libelle);
          }
          return 0;
        }
      };
    },

    LibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_activites.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" ", qtereel.libelle);
          }
          return 0;
        }
      };
    },

    MontantBudgetInitial() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
                && qtreel.budget_actif_def==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    

    MontantReamenagement() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&
                qtreel.annebudgetaire == this.afficheAnnee
                && qtreel.budget_active==1
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.variation_budget),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    NbreOpNonRegularisé() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.ligne_economique_id == id &&
                qtreel.unite_administrative_id==id1 &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.diff_reg_op==0)
            ).length
        } else {
          return 0;
        }
      };
    },

     NbreOpProvisoireNonRegularisé() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&
                qtreel.exercice == this.afficheAnnee &&
             qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==2
            ).length
        } else {
          return 0;
        }
      };
    },


  

    MontantBudgetExecutéProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                 qtreel.diff_reg_op==0
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecuté() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.activite_id == id &&
                  qtreel.decision_cf == 9) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.activite_id == id &&
                  qtreel.decision_cf == 8) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.activite_id == id &&
                  qtreel.decision_cf == 9) ||
                (qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.activite_id == id &&
                  qtreel.decision_cf == 8)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

       NbreBudgetExecutéProvisoireBailleur() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.activite_id == id1
                && qtreel.diff_reg_op==0 && qtreel.type_ordre_paiement==1
            ).length
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecutéProvisoireBailleur() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                qtreel.exercice == this.afficheAnnee &&
                qtreel.activite_id == id1
                && qtreel.diff_reg_op==0
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecuté1Bailleur() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.activite_id == id1 &&
                  qtreel.decision_cf == 9) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 1 &&
                  qtreel.activite_id == id1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.activite_id == id1 &&
                  qtreel.decision_cf == 8) ||
                (qtreel.source_financement_id == id &&
                  qtreel.exercice == this.afficheAnnee &&
                  qtreel.type_ordre_paiement == 4 &&
                  qtreel.activite_id == id1 &&
                  qtreel.decision_cf == 8)
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ordre_paiement),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    verifActiviteId() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) =>
              qtreel.activite_id == id && qtreel.exercice == this.anneeAmort
          );

          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },

    listeordrepaiementstest() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter((qtreel) => qtreel.activite_id == id);
        }
      };
    },

    arrayExerciceDecompte() {
      return (idactivite) => {
        console.log(idactivite);

        if (idactivite != null && idactivite != "") {
          let objet = this.listeordrepaiementstest(idactivite);
          //  let vm=this
          let array_exercie = [];
          if (objet.length > 0) {
            objet.forEach(function (val) {
              array_exercie.push(val.source_financement_id);
            });
            let unique = [...new Set(array_exercie)];
            console.log(unique);
            if (unique.length == 0) {
              return [];
            }
            return unique;
          }
          return [];
        }
      };
    },

    // listeordrepaiements() {
    //   if (this.formData.date_debut != "" && this.formData.date_fin != "") {
    //     return this.gettersgestionOrdrePaiement.filter(
    //       (qtreel) =>
    //         (qtreel.activite_id == id && qtreel.diff_op == null &&
    //           qtreel.decision_cf == 8 &&
    //           qtreel.date_decision_cf >= this.formData.date_debut &&
    //           qtreel.date_decision_cf <= this.formData.date_fin) ||

    //         (
    //           qtreel.activite_id == id && qtreel.diff_op == null &&
    //           qtreel.decision_cf == 9 &&
    //           qtreel.date_decision_cf >= this.formData.date_debut &&
    //           qtreel.date_decision_cf <= this.formData.date_fin)
    //     );
    //   } else {
    //     return this.gettersgestionOrdrePaiement.filter(
    //       (qtreel) =>
    //         (qtreel.activite_id == id && qtreel.diff_op == null && qtreel.decision_cf == 8) ||
    //         (qtreel.activite_id == id && qtreel.diff_op == null && qtreel.decision_cf == 9)
    //     );
    //   }
    // },

    anneeAmort() {
      const norme = this.exercices_budgetaires.find(
        (normeEquipe) => normeEquipe.encours == 1
      );

      if (norme) {
        return norme.annee;
      }
      return 0;
    },

    AfficheLogODCF() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
    },
    AfficheAmoirie() {
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
    },

    // listeordrepaiements() {
    //   if (this.uniteAdministrative_id != 0) {
    //     return this.gettersgestionOrdrePaiement.filter(
    //       (qtreel) =>
    //         (qtreel.diff_op == null &&
    //           qtreel.decision_cf == 8 &&
    //           qtreel.unite_administrative_id == this.uniteAdministrative_id) ||
    //         (qtreel.diff_op == null &&
    //           qtreel.decision_cf == 9 &&
    //           qtreel.unite_administrative_id == this.uniteAdministrative_id)
    //     );
    //   } else if (
    //     this.uniteAdministrative_id == 0 &&
    //     this.formData.date_debut != "" &&
    //     this.formData.date_fin != ""
    //   ) {
    //     return this.gettersgestionOrdrePaiement.filter(
    //       (qtreel) =>
    //         (qtreel.diff_op == null &&
    //           qtreel.decision_cf == 8 && (
    //           qtreel.date_decision_cf >= this.formData.date_debut &&
    //           qtreel.date_decision_cf <= this.formData.date_fin)) ||

    //         (qtreel.diff_op == null &&
    //           qtreel.decision_cf == 9 && (
    //           qtreel.date_decision_cf >= this.formData.date_debut &&
    //           qtreel.date_decision_cf <= this.formData.date_fin))
    //     );
    //   } else if (
    //     this.uniteAdministrative_id != 0 &&
    //     this.formData.date_debut != "" &&
    //     this.formData.date_fin != ""
    //   ) {
    //     return this.gettersgestionOrdrePaiement.filter(
    //       (qtreel) =>
    //         (qtreel.diff_op == null &&
    //           qtreel.decision_cf == 8  && (
    //           qtreel.date_decision_cf >= this.formData.date_debut &&
    //           qtreel.date_decision_cf <= this.formData.date_fin) &&
    //           qtreel.unite_administrative_id == this.uniteAdministrative_id) ||

    //         (qtreel.diff_op == null &&
    //           qtreel.decision_cf == 9 && (
    //           qtreel.date_decision_cf >= this.formData.date_debut &&
    //           qtreel.date_decision_cf <= this.formData.date_fin)&&
    //           qtreel.unite_administrative_id == this.uniteAdministrative_id)
    //     );
    //   } else {
    //     return this.gettersgestionOrdrePaiement.filter(
    //       (qtreel) =>
    //         (qtreel.diff_op == null && qtreel.decision_cf == 8) ||
    //         (qtreel.diff_op == null && qtreel.decision_cf == 9)
    //     );
    //   }
    // },

    ListepaimentBailleurs() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
    },

    libelleUa() {
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
  },
  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
      "modifierGestionOrdrePaiementAnnulat",
      "supprimerGestionOrdrePaiement",
      "ajouterHistoriqueDecisionOp",
      "modifierHistoriqueDecisionOp",
    ]),

    EviteNaNBailleur(id, id1) {
      if (
        this.MontantBudgetExecuté1Bailleur(id, id1) == 0 &&
        this.MontantBudgetActuelBailleur(id, id1) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecuté1Bailleur(id, id1)) /
            parseFloat(this.MontantBudgetActuelBailleur(id, id1))) *
          100
        ).toFixed(2);
      }
    },

    ActiveInputLigne() {
      if (this.inputLigne == false) {
        this.inputLigne = true;
      } else {
        this.inputLigne = false;
        this.inputLigne1 = 0;
      }
    },

    ShowMyLigne(id) {
      if (this.recupereIDactivite == "") {
        this.recupereIDactivite = id;
      } else if (
        this.recupereIDactivite != "" &&
        this.recupereIDactivite != id
      ) {
        this.recupereIDactivite = "";
        this.recupereIDactivite = id;
      } else {
        this.recupereIDactivite = "";
      }
    },

    EviteNaN(id) {
      if (
        this.MontantBudgetExecuté(id) == 0 &&
        this.MontantBudgetActuel(id) == 0
      ) {
        return 0.0;
      } else {
        return (
          (parseFloat(this.MontantBudgetExecuté(id)) /
            parseFloat(this.MontantBudgetActuel(id))) *
          100
        ).toFixed(2);
      }
    },

    //gestion des actuel
      MontantBudgetActuel(id){
          return ( parseFloat(this.MontantBudgetInitial(id)) + parseFloat(this.MontantReamenagement(id)))
      },

      MontantDisponible(id){
          return (parseFloat(this.MontantBudgetActuel(id)) - parseFloat(this.MontantBudgetExecuté(id)))
            
  },

  MontantBudgetActuelBailleur(id,id1){
     return (parseFloat(this.afficheMontantVoteParActivite(id,id1)) + parseFloat(this.MontantReamenagerBailleur(id,id1)))
  },

  MontantBudgetDisponobleBailleur(id,id1){
     return (parseFloat(this.MontantBudgetActuelBailleur(id,id1)) - parseFloat(this.MontantBudgetExecuté1Bailleur(id,id1)))
  },





    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    partition: partition,

    getDataPaginate(index) {
      this.active_el = index;
      this.page = index;
    },
    precedent() {
      this.active_el--;
      this.page--;
    },
    suivant() {
      this.active_el++;
      this.page++;
    },

    // apercuFacture(id) {
    //   this.$("#validationOpDefinitif").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });
    //    this.editMandat = this.gettersgestionOrdrePaiement.find(item=>item.id==id);
    // },

    formatageSommeSansFCFA: formatageSommeSansFCFA,

    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>

<style scoped>
.taille {
  width: 100%;
}
#Mycss {
  font-weight: bold;
  font-size: 15px;
  background-color: palegreen !important;
  color: #000;
}

.whitebg {
  background: #98FB98 !important;
  font-weight: bold;
  color: black;
  font-size: 13px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 13px;
  font-weight: bold;
}

.tailgrand {
  width: 65%;
  margin: 0 -30%;
  height: 50%;
}
.tailBtn {
  width: 100%;
}
.modal-body {
  max-height: 85%;
}
</style>

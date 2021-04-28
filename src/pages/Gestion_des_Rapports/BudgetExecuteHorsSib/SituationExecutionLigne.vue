
<template>
  <div>
    <div class="row-fluid" style="margin-top: -20px">
      <div class="span1"></div>
      <div class="span10" style="background-color: transparent; !important;">
        <table class="table table-striped">
          <tbody>
            <tr>
              <td colspan="2">
                <br />

                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >ACTIVITE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="plans_activites"
                  v-model="activite_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="TOUTES LES ACTIVITES"
                >
                </model-list-select>
              </td>
            </tr>
            <tr>
              <td>
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div align="right">
      <button class="btn btn-info" @click.prevent="genererEnPdf()">
        Exporter en PDF
      </button>
    </div>
    <br />
    <div class="widget-content nopadding" id="printpdf">
      <table
        class="table table-bordered table-striped html2pdf__page-break"
        id="app1"
      >
        <tr>
          <td style="text-align: center">
            <p>
              MINISTERE DU BUDGET <br />
              ------------------------- <br />
              DIRECTION DU CONTRÔLE FINANCIER <br />
              -------------------------
            </p>
            <img :src="AfficheLogODCF" />
          </td>
          <td style="text-align: center">
            <img :src="AfficheAmoirie" />
          </td>
          <td style="text-align: center">
            <p>
              REPUBLIQUE DE CÔTE D'IVOIRE <br />
              Union-Discipline-Travail <br />
              -------------------------
            </p>
          </td>
        </tr>
      </table>
      <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
        v-if="formData.date_debut == '' && formData.date_fin == ''"
      >
        SITUATION D'EXECUTION BUDGETAIRE PAR ACTIVITE ET LIGNE
        {{ formData.date_debut }}
        {{ formData.date_fin }}
      </h2>

      <h2
        style="
          font-size: 25px;
          font-weight: bold;
          color: #000;
          text-align: center;
        "
        v-if="formData.date_debut != '' && formData.date_fin != ''"
      >
        SITUATION D'EXECUTION BUDGETAIRE PAR ACTIVITE ET LIGNE DU
        {{ formaterDate(formData.date_debut) }} AU
        {{ formaterDate(formData.date_fin) }}
      </h2>
      <p
        style="
          margin-left: 30px;
          font-size: 14px;
          font-weight: bold;
          text-decoration: underline;
        "
      >
        EXERCICE: {{ anneeAmort }}
      </p>

      <div 
        v-for="GroupeOrdrePaiementByActivit in ListeGroupByActivite"
        :key="GroupeOrdrePaiementByActivit.id"
      >
        <div>
      
          <p v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1"
            class="widget-content nopadding" style="margin-left: 30px; font-size: 14px; font-weight: bold;margin: 25px">
            ACTIVITE:
            {{ LibelleActivite(GroupeOrdrePaiementByActivit[0].activite_id) }}
          </p>


            <table class="table table-bordered">
              <thead style="background-color: #87ceeb" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                <tr>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      background-color: #87ceeb;
                    "
                  >
                    LIGNE BUDGETAIRE
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      background-color: #87ceeb;
                    "
                  >
                    Budget Actuel
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #87ceeb;
                    "
                  >
                    Montant Exécuté
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      background-color: #87ceeb;
                    "
                  >
                    Montant Provisoire
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      text-align: center;
                      background-color: #87ceeb;
                    "
                  >
                    Taux(%)
                  </th>
                  <th
                    style="
                      font-size: 14px;
                      font-weight: bold;
                      color: #000;
                      text-align: center;
                      background-color: #87ceeb;
                    "
                  >
                    Disponible
                  </th>
                </tr>
              </thead>
              <tbody  v-for="listeLigne in arrayExerciceDecompte(
              GroupeOrdrePaiementByActivit[0].activite_id
            )"
            :key="listeLigne">
                <tr>
                  <!-- <td>{{ sommeLigneGrandeNature(listeLigne) }}</td> -->

                  <td style="background-color: #ff9966; width: 800px" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                    <b>{{ LibelleGrandeNature(listeLigne) }}</b>
                    
                  </td>
                  <td style="background-color: #ff9966; text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                   <b> {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuel(
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )
                     }} 
                    </b>
                  </td>
                  <td style="background-color: #ff9966; text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                   <b> {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetExecuté(
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )
                     }}
                    </b>
                  </td>
                  <td style="background-color: #ff9966; text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                    <b>{{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetExecutéProvisoire(
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )
                    }}
                    </b>
                  </td>
                  <td style="background-color: #ff9966; text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                    <b>{{
                      (
                        (MontantBudgetExecuté(
                          listeLigne,
                          GroupeOrdrePaiementByActivit[0].activite_id
                        ) /
                          MontantBudgetActuel(
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )) *
                        100
                      ).toFixed(3) || "Non renseigné"
                    }}
                    </b>
                  </td>
                  <td style="background-color: #ff9966; text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                    <!-- <b> -->
                      {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuel(
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          ) -
                            MontantBudgetExecuté(
                              listeLigne,
                              GroupeOrdrePaiementByActivit[0].activite_id
                            )
                        )
                      )
                    }}
                    <!-- </b> -->
                  </td>

                  <!-- <td style="background-color:#ff9966;">{{ LibelleGrandeNature(GroupeOrdrePaiementByActivit[0].grand_nature_id)}}</td>
               -->
                </tr>

                <tr
                  class="odd gradeX"
                  v-for="listeLignes in arrayExerciceDecompte2(listeLigne)"
                  :key="listeLignes"
                >
                  <td style="width: 800px" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1 && 
                  (formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )) != 0">
                    {{ libelleLigneEconomique(listeLignes) }}
                  </td>
                  <td style="text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1 && 
                  (formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )) != 0">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )
                    }}
                  </td>
                  <td style="text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1 && 
                  (formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )) != 0">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetExecutéActivite(listeLignes, listeLigne)
                        )
                      )
                    }}
                  </td>
                  <td style="text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1 && 
                  (formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )) != 0">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetExecutéProvisoireActivite(
                            listeLignes,
                            listeLigne
                          )
                        )
                      )
                    }}
                  </td>
                  <td style="text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1 && 
                  (formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )) != 0">
                    {{
                      (
                        (MontantBudgetExecutéActivite(listeLignes, listeLigne) /
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )) *
                        100
                      ).toFixed(3) || "Non renseigné"
                    }}
                  </td>
                  <td style="text-align: right" v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1 && 
                  (formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          )
                        )
                      )) != 0">
                    {{
                      formatageSommeSansFCFA(
                        parseFloat(
                          MontantBudgetActuelActivite(
                            listeLignes,
                            listeLigne,
                            GroupeOrdrePaiementByActivit[0].activite_id
                          ) -
                            MontantBudgetExecutéActivite(
                              listeLignes,
                              listeLigne
                            )
                        )
                      )
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          
        </div>
      </div>
    </div>
    <!-- <fab
      :actions="fabActions"
      @searchMe="filter"
      main-icon="apps"
      bg-color="green"
    ></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSommeSansFCFA } from "@/Repositories/Repository";
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
      size: 10,
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
      activite_id: 0,

      editMandat: {},
      EditAnulation: {},
      editDecisionFinal: {},
      search: "",
  
    };
  },
  mounted(){
    console.log("hello word")
    // console.log(this.budgetEclate)
    console.log(this.MontantBudgetActuel())
    console.log(this.MontantBudgetExecuté())
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
      "GroupeOrdrePaiementByGrandeNature",
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
      "groupeByBailleur"
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
   

    verifActiviteId() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.activite_id == id
            &&  qtreel.exercice == this.anneeAmort
          );

          if (qtereel) {
            return 1;
          }
          return 0;
        }
      };
    },

    ListeGroupByActivite() {
      if (this.activite_id!=0) {
        return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.anneeAmort
            && qtreel[0].activite_id==this.activite_id
        );
      } else {
        return this.groupeByActivite
        .filter(
          (qtreel) =>
            (qtreel[0].annebudgetaire == this.anneeAmort
             )

        );
      }
    },

    // ListeGroupByNature() {
    //   if (this.activite_id != 0) {
    //     return this.GroupeOrdrePaiementByGrandeNature.filter(
    //       (qtreel) =>
    //         qtreel[0].activite_id == this.activite_id
    //     );
    //   } else if (
    //     this.activite_id != 0 &&
    //     this.formData.date_debut != "" &&
    //     this.formData.date_fin != ""
    //   ) {
    //     return this.GroupeOrdrePaiementByGrandeNature.filter(
    //       (qtreel) =>
    //         qtreel[0].date_decision_cf >= this.formData.date_debut &&
    //         qtreel[0].date_decision_cf <= this.formData.date_fin
    //     );
    //   }

    //   else {
    //      return this.GroupeOrdrePaiementByGrandeNature;
    //   }
    // },

    ListeGroupByNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.GroupeOrdrePaiementByGrandeNature.filter(
            (qtreel) => qtreel.grand_nature_id == id
          );

          if (qtereel) {
            return qtereel.grand_nature_id;
          }
          return 0;
        }
      };
    },
    
    MontantBudgetActuel() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.grandenature_id == id &&
                qtreel.annebudgetaire == this.anneeAmort &&
                qtreel.activite_id == id1
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

    MontantBudgetExecuté() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.grand_nature_id == id &&
                qtreel.exercice == this.anneeAmort &&
                qtreel.type_ordre_paiement != 2 &&
                qtreel.activite_id == id1
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

    MontantBudgetExecutéProvisoire() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.grand_nature_id == id &&
                qtreel.exercice == this.anneeAmort &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.activite_id == id1
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

    MontantBudgetActuelActivite() {
      return (id, id1, id3) => {
        if (
          id != null &&
          id != "" &&
          id1 != null &&
          id1 != "" &&
          id3 != null &&
          id3 != ""
        ) {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.ligneeconomique_id == id &&
                qtreel.annebudgetaire == this.anneeAmort &&
                qtreel.grandenature_id == id1 &&
                qtreel.activite_id == id3
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


    MontantBudgetExecutéActivite() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.ligne_economique_id == id &&
                qtreel.exercice == this.anneeAmort &&
                qtreel.type_ordre_paiement != 2 &&
                // && qtreel.type_ordre_paiement != 4
                qtreel.grand_nature_id == id1
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

    MontantBudgetExecutéProvisoireActivite() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.ligne_economique_id == id &&
                qtreel.exercice == this.anneeAmort &&
                qtreel.type_ordre_paiement == 2 &&
                qtreel.grand_nature_id == id1
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

    libelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_budgetaires.find(
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

    LibelleGrandeNature() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.grandes_natures.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.code.concat(" "), qtereel.libelle;
          }
          return 0;
        }
      };
    },

    listeordrepaiements() {
      if (this.formData.date_debut != "" && this.formData.date_fin != "") {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement.filter(
              (qtreel) =>
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 8 &&
                  qtreel.date_decision_cf >= this.formData.date_debut &&
                  qtreel.date_decision_cf <= this.formData.date_fin) ||
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 9 &&
                  qtreel.date_decision_cf >= this.formData.date_debut &&
                  qtreel.date_decision_cf <= this.formData.date_fin)
            );
          }
        };
      } else {
        return (id) => {
          if (id != null && id != "") {
            return this.gettersgestionOrdrePaiement.filter(
              (qtreel) =>
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 8) ||
                (qtreel.grand_nature_id == id &&
                  qtreel.diff_op == null &&
                  qtreel.decision_cf == 9)
            );
          }
        };
      }
    },

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

    listeordrepaiementLigne() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.activite_id == id
          );
        }
      };
    },

    arrayExerciceDecompte() {
      return (idactivite) => {
        console.log(idactivite);
        if(idactivite !=null && idactivite!=""){
           let objet = this.listeordrepaiementLigne(idactivite);
        //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.grandenature_id);
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

      }
       
    },

    listeordrepaiementLigne2() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) => qtreel.grandenature_id == id
          );
        }
      };
    },


    recupBudget() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            (qtreel) =>
              qtreel.grandenature_id == id &&
              qtreel.annebudgetaire == this.anneeAmort
          );
        }
      };
    },

    sommeLigneGrandeNature() {
      return (grande_nature_id) => {
        console.log(grande_nature_id)
        if (grande_nature_id == "") return 0;
        let _objet = this.recupBudget(grande_nature_id);
        if (_objet == undefined) return 0;
        let montant = _objet.reduce(
          (prec, cur) => parseFloat(prec) + parseFloat(cur.dotation),
          0
        );
        return montant;
      };
    },
   
    arrayExerciceDecompte2() {
      return (idactivite) => {
        console.log(idactivite);
        if(idactivite!=null){
          let objet = this.listeordrepaiementLigne2(idactivite);
          //  let vm=this
        let array_exercie = [];
        if (objet.length > 0) {
          objet.forEach(function (val) {
            array_exercie.push(val.ligneeconomique_id);
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
     verifValeur(){
      if(this.MontantBudgetActuel() == 0 && this.MontantBudgetExecuté() == 0 && this.MontantBudgetExecutéProvisoire() == 0){
        return 1;
      }
      return 0;
      
       
    },
    genererEnPdf() {
      this.$htmlToPaper("printpdf");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    partition: partition,

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

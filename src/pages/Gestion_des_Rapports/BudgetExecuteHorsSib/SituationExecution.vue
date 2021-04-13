
<template>
  <div>
    <div class="row-fluid" style="margin-top: -20px">
      <div class="span1"></div>
      <div class="span10" style="background-color: transparent; !important;">
        <table class="table table-striped">
          <tbody>
            <br />
            <br />
            <!-- <tr>
              <td colspan="2">
                <br />

                <label style="color: #000; font-size: 14px; font-weight: bolder"
                  >UNITE ADMINISTRATIVE<a href="#" style="color: red"></a>
                </label>
                <model-list-select
                  style="background-color: #fff; border: 2px solid #000"
                  class="wide"
                  :list="uniteAdministratives"
                  v-model="uniteAdministrative_id"
                  option-value="id"
                  option-text="libelle"
                  placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                >
                </model-list-select>
              </td>
            </tr> -->
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
        SITUATION D'EXECUTION PAR ACTIVITE ET BAILLEUR

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
        SITUATION D'EXECUTION PAR ACTIVITE ET BAILLEUR DU

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

      

       <div class="widget-content nopadding" style="margin: 25px"  >
      <table class="table table-bordered">
          <thead style="background-color: #87ceeb">
            <tr>
              <th
                style="
                  font-size: 14px;
                  font-weight: bold;
                  text-align: center;
                  background-color: #87ceeb;
                  width: 800px
                "
              >
                Bailleurs
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
                  color: #000;
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
                  text-align: center;
                  background-color: #87ceeb;
                "
              >
                Disponible
              </th>
            </tr>
          </thead>
          <tbody v-for="GroupeOrdrePaiementByActivit in ListeGroupByActivite3"
        :key="GroupeOrdrePaiementByActivit[0].id">
            
            <tr 
              class="odd gradeX"
              v-for="ListepaimentBailleur in arrayExerciceDecompte(
                GroupeOrdrePaiementByActivit[0].activite_id
              )"
              :key="ListepaimentBailleur"
            >
              <td style="font-size: 14px; width: 800px"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">

                {{ libelleLigneEconomique(ListepaimentBailleur) || "Non renseigné" }}
              </td>
              <td style="text-align: right; ; width: 200px"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
              {{
                
                formatageSommeSansFCFA(
                  parseFloat( Montanttest(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id)))
              }} 
            </td>

            <td style="font-size: 14px; text-align: right; width: 200px"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
            
               {{
                formatageSommeSansFCFA(
                  parseFloat(
                    MontantBudgetExecuté1Bailleur(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id)
                  )
                ) || "Non renseigné"
              }} 
            </td>

            <td style="font-size: 14px; text-align: right; width: 200px"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
            
               {{
                formatageSommeSansFCFA(
                  parseFloat(
                    MontantBudgetExecutéProvisoireBailleur(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id)
                  )
                ) || "Non renseigné"
              }} 
            </td>
            <td style="font-size: 14px; text-align: right; width: 200px"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
               {{
                
                  (
                    ((MontantBudgetExecuté1Bailleur(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id)/
                      MontantBudgetActuelBailleur(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id)) 
                    ) * 100
                  ).toFixed(2) || "Non renseigné"
              }}
            </td>
            <td style="font-size: 14px; text-align: right; width: 200px"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
               {{
               formatageSommeSansFCFA(
                  parseFloat( MontantBudgetActuelBailleur(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id) -
                  MontantBudgetExecuté1Bailleur(ListepaimentBailleur,GroupeOrdrePaiementByActivit[0].activite_id))) ||
                "Non renseigné"
              }} 
            </td>
            </tr>
            <tr>
              <td style="font-weight: bold; font-size: 18px ; width: 800px"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                TOTAL:{{
                  LibelleActivite(GroupeOrdrePaiementByActivit[0].activite_id)
                }}
              </td>
              <td style="font-weight: bold; font-size: 18px; text-align: right;"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                {{
                  formatageSommeSansFCFA(
                  parseFloat(MontantBudgetActuel(
                    GroupeOrdrePaiementByActivit[0].activite_id
                  )))
                }}
              </td>
              <td style="font-weight: bold; font-size: 18px; text-align: right;"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                {{
                 formatageSommeSansFCFA(
                  parseFloat( MontantBudgetExecuté(
                    GroupeOrdrePaiementByActivit[0].activite_id
                  )))
                }}
              </td>

                <td style="font-weight: bold; font-size: 18px; text-align: right;"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                {{
                 formatageSommeSansFCFA(
                  parseFloat( MontantBudgetExecutéProvisoire(
                    GroupeOrdrePaiementByActivit[0].activite_id
                  )))
                }}
              </td>
              <td style="font-weight: bold; font-size: 18px; text-align: right;"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                {{
                  (
                    ((MontantBudgetExecuté(
                      GroupeOrdrePaiementByActivit[0].activite_id
                    ) /
                      MontantBudgetActuel(
                        GroupeOrdrePaiementByActivit[0].activite_id
                      )) 
                    ) * 100
                  ).toFixed(2) || "Non renseigné"
                }}
              </td>

              <td style="font-weight: bold; font-size: 18px; text-align: right;"  v-if="verifActiviteId(GroupeOrdrePaiementByActivit[0].activite_id)==1">
                {{
                 formatageSommeSansFCFA(
                  parseFloat( MontantBudgetActuel(
                    GroupeOrdrePaiementByActivit[0].activite_id
                  ) -
                  MontantBudgetExecuté(
                    GroupeOrdrePaiementByActivit[0].activite_id
                  )))
                }}
              </td>
            </tr>
            
          </tbody>

          <tfoot>
            
          </tfoot>
          
        </table>
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
//import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    // ModelListSelect,
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
      uniteAdministrative_id: 0,

      editMandat: {},
      EditAnulation: {},
      editDecisionFinal: {},
      search: "",
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
      "groupeByActivite"
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

    ListeGroupByActivite3() {
      if (this.formData.date_debut != "" && this.formData.date_fin != "") {
        return this.groupeByActivite.filter(
          (qtreel) =>
            qtreel[0].annebudgetaire == this.anneeAmort
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

    MontantBudgetActuel() {
      return (id) => {
        if (id != null && id != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.activite_id == id &&
                qtreel.annebudgetaire == this.anneeAmort
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

    MontantBudgetActuelBailleur() {
      return (id, id1) => {
        if (id != null && id1 != "" && id!="" && id1!=null) {
          return this.budgetEclate
            .filter(
              (qtreel) => qtreel.source_financement_id == id
              && qtreel.activite_id==id1
              && qtreel.annebudgetaire == this.anneeAmort
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

      MontantBudgetExecutéProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.activite_id == id 
                && qtreel.exercice ==this.anneeAmort
                && qtreel.type_ordre_paiement == 2
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
                qtreel.activite_id == id 
                 && qtreel.exercice ==this.anneeAmort
                && qtreel.type_ordre_paiement != 2
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

    MontantBudgetExecutéProvisoireBailleur() {
      return (id, id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id &&
                 qtreel.exercice ==this.anneeAmort
                && qtreel.type_ordre_paiement == 2
                 && qtreel.activite_id ==id1
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




    /////*********** */
     Montanttest() {
      return (id , id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.budgetEclate
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id 
                && qtreel.annebudgetaire ==this.anneeAmort 
                && qtreel.activite_id==id1
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.dotation),
              0
            )
            .toFixed(0);
        } else {
          return 0;
        }
      };
    },

    MontantBudgetExecuté1Bailleur() {
      return (id,id1) => {
        if (id != null && id != ""&& id1 != null && id1 != "") {
          return this.gettersgestionOrdrePaiement
            .filter(
              (qtreel) =>
                qtreel.source_financement_id == id
                && qtreel.exercice ==this.anneeAmort
                && qtreel.type_ordre_paiement != 2
                && qtreel.activite_id ==id1
                
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

    listeordrepaiementstest() {
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
        if(idactivite!=null && idactivite!=""){
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

    total(){
      return this.MontantBudgetExecuté1Bailleur
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
      this.$refs.excel.click("printpdf");
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

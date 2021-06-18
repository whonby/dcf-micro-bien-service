
<template>
  <div>
    <notifications/>
   <div id="validationOpDefinitifDifViseO" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision CF</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Décision CF </label>
                <div class="controls">
                  <select v-model="editMandatDefViso.decision_cf" class="span5">
                    <option value=""></option>
                    <option value="8">Visé</option>
                    <option value="9">Visé avec Observation</option>
                    <option value="2">Différé</option>
                    <option value="3">Réjeté</option>
                    <option value="0">Attente</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Famille de Motif</label>
                <div class="controls">
                  <select v-model="editMandatDefViso.famille_motif" class="span5">
                    <option value="0"></option>
                    <option
                      v-for="varText in AffichierElementParent"
                      :key="varText.id"
                      :value="varText.id"
                    >
                      {{ varText.libelle }}
                    </option>
                  </select>
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Motif</label>
                <div class="controls">
                  <select v-model="editMandatDefViso.motif" class="span5">
                    <option value="0"></option>
                    <option
                      v-for="varText in AffichierElementEnfant(
                        editMandatDefViso.famille_motif
                      )"
                      :key="varText.id"
                      :value="varText.id"
                    >
                      {{ varText.libelle }}
                    </option>
                  </select>
                </div>
              </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Autres Motif</label>
                <div class="controls">
                  <textarea
                    class="span5"
                    row="6"
                    v-model="editMandatDefViso.autre_motif"
                    :readonly="griserAutreMotif"
                  >
                  </textarea>
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Date Decision CF</label>
                <div class="controls">
                  <input
                    type="date"
                    class="span5"
                    v-model="editMandatDefViso.date_decision_cf"
                  />
                  <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                </div>
              </div>
            </td>
            <td colspan="">
              <div class="control-group">
                <label class="control-label">Observation CF</label>
                <div class="controls">
                  <textarea
                    class="span5"
                    row="6"
                    v-model="editMandatDefViso.observation"
                  >
                  </textarea>
                </div>
              </div>
            </td>
            
          </tr>
          <tr>
            <td colspan="2">
              <div class="control-group">
                <label class="control-label">Nom du CF</label>
                <div class="controls">
                  <input
                    type="text"
                    class="span5"
                    :value="
                      recupererNomDuControleurF(
                        recupererIdUser(
                          recupererIdServiceCF(
                            editMandatDefViso.unite_administrative_id
                          )
                        )
                      )
                    "
                    readonly
                  />
                </div>
              </div>
            </td>
          </tr>
        </table>

        <table
          class="table table-bordered table-striped"
          v-if="editMandatDefViso.decision_cf == 2"
        >
          <div class="row-fluid">
            <div class="span6">
              <div class="widget-box">
                <div class="widget-title">
                  <span class="icon"> <i class="icon-eye-open"></i> </span>
                  <h5>Motif à Corrigé</h5>
                </div>
                <div class="widget-content nopadding">
                  <templete v-if="verifier(editMandatDefViso.id) == editMandatDefViso.id">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="type in listeOpdiffere(editMandatDefViso.id)"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{
                              MotifLibelle(type.famille_motif) ||
                              "Non renseigné"
                            }}
                          </td>
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{ MotifLibelle(type.motif) || "Non renseigné" }}
                          </td>

                          <td>
                            <button
                              class="btn btn-danger"
                              @click="DetacheMotif(type.id)"
                            >
                              <span>
                                <i class="icon-external-link"></i>Détaché
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </templete>
                  <templete v-else>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                    </table>
                  </templete>
                </div>
              </div>
            </div>
            <div class="span6">
              <div class="widget-box">
                <div class="widget-title">
                  <span class="icon"> <i class="icon-arrow-right"></i> </span>
                  <h5>Motif Corrige</h5>
                </div>
                <div class="widget-content nopadding">
                  <templete v-if="verifier(editMandatDefViso.id) == editMandatDefViso.id">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          class="odd gradeX"
                          v-for="type in EurreurCorrige(editMandatDefViso.id)"
                          :key="type.id"
                        >
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{
                              MotifLibelle(type.famille_motif) ||
                              "Non renseigné"
                            }}
                          </td>
                          <td @dblclick="afficherModalModifierTypeTexte(index)">
                            {{ MotifLibelle(type.motif) || "Non renseigné" }}
                          </td>
                          <td>
                            <button
                              class="btn btn-info"
                              @click="DetacheMotifAttache(type.id)"
                            >
                              <span>
                                <i class="icon-external-link"></i>Attaché
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </templete>
                  <templete v-else>
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Famille Motif</th>
                          <th>Motif</th>
                        </tr>
                      </thead>
                    </table>
                  </templete>
                </div>
              </div>
            </div>
          </div>
        </table>
        <br />
      </div>

      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal()"
          class="btn btn-primary"
          href="#"
          >Valider</a
        >
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                  <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Execice</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">N°Ordre paiement</th>
                   <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Objet ordre de paiement </th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Montant Engagé(FCFA)</th>
                    <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Détail</th>
                   
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff">Decision CF</th>
                     <th style="font-size:14px;font-weight:bold;background-color: #228B22;color:#fff" colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    v-for="type in partition(listeordrepaiementProvisoire, size)[page]"
                    :key="type.id"
                  >
                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      {{ type.exercice || "Non renseigné" }}
                    </td>
                    

                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                        color: green;
                      "
                    >
                      {{ type.numero_ordre_paiement || "Non renseigné" }}
                    </td>

                    <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{ type.odjet_autre_depense || "Non renseigné" }}
                    </td>
                    <!-- <td style="font-size: 14px; font-weight: bold" @dblclick="afficherModalModifierTitre(type.id)">
                      {{
                        libelleUa(type.unite_administrative_id) ||
                        "Non renseigné"
                      }}
                    </td> -->
                    <td @dblclick="afficherModalModifierTitre(type.id)"
                      style="
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                      "
                    >
                      {{
                        formatageSommeSansFCFA(
                          parseFloat(type.montant_ordre_paiement)
                        ) || "Non renseigné"
                      }}
                    </td>
                    <td @dblclick="afficherModalModifierTitre(type.id)">
                      <router-link
                        :to="{
                          name: 'VoirDetailAutreFiche',
                          params: { id: type.id },
                        }"
                        class="btn btn"
                        title="Editer Fiche"
                        style="width: 50%"
                      >
                        <span
                          class=""
                          style="
                            font-size: 15px;
                            font-weight: bold;
                            color: #000;
                          "
                          ><i class="icon-eye-open"></i> Voir</span
                        >
                      </router-link>
                    </td>

                    
                    <td >
                      <button
                        v-if="type.decision_cf == 8"
                        class="btn btn-success tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé</span
                        >
                      </button>
                      <button
                        v-else-if="type.decision_cf == 2"
                        class="btn btn-warning tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Différé</span
                        >
                      </button>
                      <button
                        v-else-if="type.decision_cf == 3"
                        class="btn btn-danger tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Réjeté</span
                        >
                      </button>
                      <button
                        v-else-if="type.decision_cf == 9"
                        class="btn btn-success tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          title="Visé avec observation"
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Visé O</span
                        >
                      </button>
                      <button
                        v-else
                        class="btn btn-info tailBtn"
                        @click="apercuFacture0(type.id)"
                      >
                        <span
                          style="
                            font-weight: bolder;
                            color: #fff;
                            font-size: 18px;
                          "
                          >Attente</span
                        >
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="supprimerGestionOrdrePaiement(type.id)"
                      >
                        <span>
                          <i class="icon icon-trash"> Supprimer</i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
               <div class="pagination alternate">
            <ul>
              <li :class="{ disabled: page == 0 }">
                <a @click.prevent="precedent()" href="#">Précedent</a>
              </li>
              <li
                v-for="(titre, index) in partition(listeordrepaiementProvisoire, size)
                  .length"
                :key="index"
                :class="{ active: active_el == index }"
              >
                <a @click.prevent="getDataPaginate(index)" href="#">{{
                  index + 1
                }}</a>
              </li>
              <li
                :class="{
                  disabled:
                    page == partition(listeordrepaiementProvisoire, size).length - 1,
                }"
              >
                <a @click.prevent="suivant()" href="#">Suivant</a>
              </li>
            </ul>
          </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSommeSansFCFA } from "@/Repositories/Repository";
import { partition } from "@/Repositories/Repository";
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    //ModelListSelect,
  },
  name: "typetext",
  data() {
    return {
      page: 0,
      size: 20,
      active_el: 0,
      fabActions: [
        {
          name: "searchMe",
          icon: "search",
        },
      ],

      
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle",
      },
     
      formData: {
        code: "",
        libelle: "",
      },
      EditDetache: {},
      typeop_id: 0,
      NumeroOp: 0,
      uniteAdministrative_id: 0,

      editMandatDefViso: {},
      EditAnulation: {},
      editDecisionFinal: {},
      search: "",
    };
  },
created() {
    this.marcheid = this.$route.params.id;
    this.detailOp1 = this.gettersgestionOrdrePaiement.find(
      (idmarche) => idmarche.id == this.$route.params.id
    );
  },
  computed: {
      ...mapGetters("parametreGenerauxAdministratif", [
      "taux",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5",
    ]),
    ...mapGetters("Utilisateurs", [
      "getterAffectionServiceCF",
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
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
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "structuresDecision",
      "plans_Decision",
    ]),

   listeOpdiffere() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettershistoriqueDecisionCfOP.filter(
            (qtreel) =>
              qtreel.id_op == id &&
              qtreel.diff_decision == 0 &&
              qtreel.decision_cf == 2
          );
        }
      };
    },
    EurreurCorrige() {
      return (id) => {
        if (id != null && id != "") {
          return this.gettershistoriqueDecisionCfOP.filter(
            (qtreel) =>
              qtreel.id_op == id &&
              qtreel.diff_decision == 1 &&
              qtreel.decision_cf == 2
          );
        }
      };
    },
    MotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    FamilleMotifLibelle() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    verifier() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettershistoriqueDecisionCfOP.find(
            (qtreel) => qtreel.id_op == id
          );

          if (qtereel) {
            return qtereel.id_op;
          }
          return 0;
        }
      };
    },
   

    
    NombreTotalOPProvisoire() {
      return this.ListeDEsEntreprise.filter(
        (item) => item.type_ordre_paiement == 2 &&  item.unite_administrative_id == this.marcheid
      ).length;
    },


    recupererNomDuControleurF() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterUtilisateur.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.name;
          }
          return 0;
        }
      };
    },
    recupererIdUser() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterAffectionServiceCF.find(
            (qtreel) => qtreel.servicecf_id == id && qtreel.date_fin == null
          );

          if (qtereel) {
            return qtereel.user_id;
          }
          return 0;
        }
      };
    },
    recupererIdServiceCF() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.getterAffectation.find(
            (qtreel) =>
              qtreel.unite_administrative_id == id && qtreel.date_fin == null
          );

          if (qtereel) {
            return qtereel.servicecf_id;
          }
          return 0;
        }
      };
    },

    griserAutreMotif() {
      return this.editMandatDefViso.motif != 237;
    },
    AffichierElementParent() {
      // return id => {
      //   if (id != null && id != "") {
      return this.plans_Decision.filter(
        (element) =>
          this.RecupererNiveau3StructureDecision(
            element.structure_motif_decission_id
          ) == 3
      );
      //   }
      // };
    },
    RecupererNiveau3StructureDecision() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.structuresDecision.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.niveau;
          }
          return 0;
        }
      };
    },
    AffichierElementEnfant() {
      return (id) => {
        if (id != null && id != "") {
          return this.plans_Decision.filter((element) => element.parent == id);
        }
      };
    },
    libelleDecision() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.plans_Decision.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.libelle;
          }
          return "Non renseigné";
        }
      };
    },
    MontantMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.acteEffetFinanciers.find(
            (qtreel) => qtreel.marche_id == id
          );

          if (qtereel) {
            return qtereel.montant_act;
          }
          return 0;
        }
      };
    },
    libelleMarche() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.marches.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_marche.concat("    ", qtereel.objet);
          }
          return 0;
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
    recupererIdOpAnnulation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.id;
          }
          return 0;
        }
      };
    },
    recupererIdOpProvisoire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(
            (qtreel) => qtreel.id_op_provisoire == id
          );

          if (qtereel) {
            return qtereel.id_op_provisoire;
          }
          return 0;
        }
      };
    },
    recupererIdUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersgestionOrdrePaiement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.unite_administrative_id;
          }
          return 0;
        }
      };
    },
    listeordrepaiementProvisoire() {
      return this.gettersgestionOrdrePaiement.filter(
        (qtreel) => qtreel.diff_op == null  && qtreel.unite_administrative_id == this.marcheid && qtreel.type_ordre_paiement==4 && qtreel.decision_cf == 9
      );
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
afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModificationOrdrePaiement/" + id
      });
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

   DetacheMotif(id) {
      this.EditDetache = this.gettershistoriqueDecisionCfOP.find(
        (item) => item.id == id
      );
      this.ModifierMotif();
    },
    DetacheMotifAttache(id) {
      this.EditDetache = this.gettershistoriqueDecisionCfOP.find(
        (item) => item.id == id
      );

      this.ModifierMotifAttche();
    },

    ModifierMotif() {
      var objet = {
        id: this.EditDetache.id,
        decision_cf: this.EditDetache.decision_cf,
        famille_motif: this.EditDetache.famille_motif,
        motif: this.EditDetache.motif,
        date_decision: this.EditDetache.date_decision_cf,
        diff_decision: 1,
        id_op: this.EditDetache.id_op,
      };
      this.modifierHistoriqueDecisionOp(objet);
    },

    ModifierMotifAttche() {
      var objet = {
        id: this.EditDetache.id,
        decision_cf: this.EditDetache.decision_cf,
        famille_motif: this.EditDetache.famille_motif,
        motif: this.EditDetache.motif,
        date_decision: this.EditDetache.date_decision_cf,
        diff_decision: 0,
        id_op: this.EditDetache.id_op,
      };
      this.modifierHistoriqueDecisionOp(objet);
    },

    AfficheBoutonAjouter() {
      this.affiche_filtre1 = !this.affiche_filtre1;
    },
    filter() {
      this.affiche_filtre = !this.affiche_filtre;
    },
    ajouterLiquidation() {
      this.$router.push({ name: "AjouterOrdrePaiementAnnulation" });
    },
    modifierTypeTexteLocal() {
      var nouveauObjet = {
        decision_cf: this.editMandatDefViso.decision_cf,
        famille_motif: this.editMandatDefViso.famille_motif,
        motif: this.editMandatDefViso.motif,
        date_decision: this.editMandatDefViso.date_decision_cf,
        diff_decision: 0,
        id_op: this.editMandatDefViso.id,
      };
        var nouveauObjet1 = {
          ...this.editMandatDefViso,
        decision_cf: this.editMandatDefViso.decision_cf,
        famille_motif: this.editMandatDefViso.famille_motif,
        motif: this.editMandatDefViso.motif,
        date_decision_cf: this.editMandatDefViso.date_decision_cf,
        // diff_op: 0,
        id: this.editMandatDefViso.id,
      };
       this.ajouterHistoriqueDecisionOp(nouveauObjet);
      this.modifierGestionOrdrePaiement(nouveauObjet1);
      this.$("#validationOpDefinitifDifViseO").modal("hide");
    },
    modifierDecisionFinal() {
      this.modifierGestionOrdrePaiement(this.editDecisionFinal);
      this.$("#validationOpDefinitifDifViseO").modal("hide");
    },
    apercuFacture0(id) {
      this.$("#validationOpDefinitifDifViseO").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editMandatDefViso = this.gettersgestionOrdrePaiement.find(
        (item) => item.id == id
      );
    },
 pagePrecedent(){
                window.history.back()
            },
    DecisionDefinitifCf(id) {
      this.$("#decisionDefinitif").modal({
        backdrop: "static",
        keyboard: false,
      });
      this.editDecisionFinal = this.gettersgestionOrdrePaiement.find(
        (item) => item.id == id
      );
    },
    formatageSommeSansFCFA: formatageSommeSansFCFA,
   
    //afiicher modal ajouter
  
    // fonction pour vider l'input ajouter
   
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editTypeTexte = this.typeTextes[index];
    },
    // fonction pour vider l'input modification

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
.tailgrand {
  width: 54%;
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

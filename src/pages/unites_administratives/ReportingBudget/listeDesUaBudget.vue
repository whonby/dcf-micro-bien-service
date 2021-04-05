
<template>
  <div>
    <!--///////////////////////////////////////// fin modal modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <download-excel
            class="btn btn-success pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Unites administratives"
            :data="jointureUaChapitreSection"
            name="Liste Unites administratives"
            worksheet="Liste Unites administratives"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
         
          </download-excel> -->
          <div align="right" style="cursor: pointer">
            <router-link
              :to="{ name: 'ReportingBudget', params: {} }"
              class="btn btn-info"
            >
              <span class="">Voir Tout le Budget</span>
            </router-link>
          </div>
          <div class="widget-box">
            <div class="widget-title">
              <div class="span6">
                <span class="icon">
                  <i class="icon-th"></i>
                </span>
                <h5>Liste des unités administratives</h5>
              </div>
              <div class="span6">
                <div align="right">
                  <!-- Recherche:
                        <input type="search" placeholder="" v-model="search" /> -->

                  <!-- <div class="span3">
                          <model-list-select
                            v-model="formData.test"
                            style="background-color: rgb(222, 222, 222);"
                            :list="type_Unite_admins"
                            option-value="id"
                            option-text="libelle"
                            placeholder="unite administrative"
                          ></model-list-select>
                        </div>
                        <button>ok</button>-->
                </div>
                <div align="right">
                  Recherche:
                  <input
                    type="search"
                    placeholder="Nom Unite Administrative"
                    v-model="search"
                  />
                </div>
              </div>
              <div class="span4">
                <br />
                Afficher
                <select
                  name="pets"
                  id="pet-select"
                  v-model="size"
                  class="span3"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                Entrer
              </div>
            </div>

            <div
              class="widget-content nopadding"
              v-if="
                type_Unite_admins.length && sections.length && chapitres.length
              "
            >
              <table
                class="table table-bordered table-striped"
                id="Nature_section"
              >
                <thead>
                  <tr>
                    <th style="font-weight: bold; font-size: 14px">Code</th>
                    <th style="font-weight: bold; font-size: 14px">UA</th>
                    <th style="font-weight: bold; font-size: 14px">
                      Budget Initial
                    </th>
                    <th style="font-weight: bold; font-size: 14px">
                      Budget Executé
                    </th>
                    <th style="font-weight: bold; font-size: 14px">
                      Budget Actuel
                    </th>
                    <!-- <th style="font-weight: bold;font-size:14px">Taux excution</th> -->
                    <th style="font-weight: bold; font-size: 14px">
                      Voir Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="uniteadministrative in partition(rechercheUa, size)[
                      page
                    ]"
                    :key="uniteadministrative.id"
                  >
                    <!-- <template v-if="uniteadministrative.type_ua_id = type_Unite_admins.id"> -->

                    <td
                      style="
                        text-align: center;
                        font-weight: bold;
                        font-size: 14px;
                      "
                    >
                      {{ uniteadministrative.code }}
                    </td>
                    <td style="font-weight: bold; font-size: 14px">
                      {{ uniteadministrative.libelle }}
                    </td>
                    <td
                      style="
                        text-align: center;
                        font-weight: bold;
                        font-size: 14px;
                      "
                    >
                      {{
                        formatageSomme(
                          parseFloat(TotalBudgetInitial(uniteadministrative.id))
                        )
                      }}
                    </td>
                    <td
                      style="
                        text-align: center;
                        font-weight: bold;
                        font-size: 14px;
                      "
                    >
                      {{
                        formatageSomme(
                          parseFloat(
                            budgetConsommerBienService(uniteadministrative.id)
                          ) +
                            parseFloat(
                              budgetConsommerPersonnel(uniteadministrative.id)
                            ) +
                            parseFloat(
                              budgetConsommerInvertissement(
                                uniteadministrative.id
                              )
                            ) +
                            parseFloat(
                              budgetConsommerTransfert(uniteadministrative.id)
                            )
                        )
                      }}
                    </td>
                    <td
                      style="
                        text-align: center;
                        font-weight: bold;
                        font-size: 14px;
                      "
                    >
                      {{
                        formatageSomme(
                          parseFloat(
                            TotalBudgetInitial(uniteadministrative.id)
                          ) -
                            parseFloat(
                              parseFloat(
                                budgetConsommerBienService(
                                  uniteadministrative.id
                                )
                              ) +
                                parseFloat(
                                  budgetConsommerPersonnel(
                                    uniteadministrative.id
                                  )
                                ) +
                                parseFloat(
                                  budgetConsommerInvertissement(
                                    uniteadministrative.id
                                  )
                                ) +
                                parseFloat(
                                  budgetConsommerTransfert(
                                    uniteadministrative.id
                                  )
                                )
                            )
                        )
                      }}
                    </td>

                    <!-- <td style="text-align:center;font-weight: bold;font-size:14px">{{((parseFloat((parseFloat(budgetConsommerBienService(uniteadministrative.id))+parseFloat(budgetConsommerPersonnel(uniteadministrative.id))+parseFloat(budgetConsommerInvertissement(uniteadministrative.id))+parseFloat(budgetConsommerTransfert(uniteadministrative.id))))/parseFloat(TotalBudgetInitial(uniteadministrative.id)))/100).toFixed(2)}}%</td>
                   -->
                    <td>
                      <router-link
                        :to="{
                          name: 'DetailBudgetUa',
                          params: { id: uniteadministrative.id },
                        }"
                        class="btn btn-success"
                      >
                        <span class="">Voir Budget</span>
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>
              <p style="text-align: center; font-size: 20px; color: red">
                Aucune Unité Administrative
              </p>
            </div>
          </div>
          <div class="pagination alternate">
            <ul>
              <li :class="{ disabled: page == 0 }">
                <a @click.prevent="precedent()" href="#">Précedent</a>
              </li>
              <li
                v-for="(titre, index) in partition(rechercheUa, size).length"
                :key="index"
                :class="{ active: active_el == index }"
              >
                <a @click.prevent="getDataPaginate(index)" href="#">{{
                  index + 1
                }}</a>
              </li>
              <li
                :class="{
                  disabled: page == partition(rechercheUa, size).length - 1,
                }"
              >
                <a @click.prevent="suivant()" href="#">Suivant</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button> -->
    <notifications />
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  partition,
  formatageSomme,
} from "../../../../src/Repositories/Repository";

// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
import {
  admin,
  dcf,
  cf,
  noDCfNoAdmin,
} from "../../../../src/Repositories/Auth";
export default {
  // components: {
  //   ModelListSelect
  // },
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
      formData: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",

        servicegest_id: "",
        nature_section_id: "",
      },
      editUniteAdministrative: {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
        servicegest_id: "",
        nature_section_id: "",
      },
      json_fields: {
        TYPE_UNIT_ADMINISTRATIVE: "typeua.libelle",
        SECTION: "secti.nom_section",
        SERVICE_GESTIONNAIRE: "servivegest.libelle",
        LOCALISATION_GEO: "localgeo.libelle",
        CODE: "code",
        LIBELLE: "libelle",
        DATE_CREATION: "date_creation",
      },
      search: "",
    };
  },

  created() {},
  computed: {
    ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      "budgetGeneral",
      "transferts",
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "structures_administratives",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections",
      "structures_geographiques",
      "exercices_budgetaires",
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", ["plans_fonctionnels"]),
    ...mapGetters("bienService", [
      "gettersDemandeEngagement",
      "gettersDossierMandat",
      "getMandatPersonnaliserPersonnel",
      "getMandatPersonnaliserVise",
      "getMandatPersonnaliser",
      "choixprocedure",
      "acteDepense",
      "getMarchePersonnaliser",
      "appelOffres",
      "getFacturePersonnaliser",
      "lots",
      "modePassations",
      "procedurePassations",
      "getterDossierCandidats",
      "marches",
      "getterOffreFinanciers",
      "gettersOffreTechniques",
      "getterLettreInvitation",
      "typeFactures",
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
      "typeActeEffetFinanciers",
      "analyseDossiers",
      "text_juridiques",
      "livrables",
      "motifDecisions",
      "getActeEffetFinancierPersonnaliser",
      "acteEffetFinanciers",
      "getEngagementPersonnaliser",
      "engagements",
      "getEngagementPersonnaliser1",
      "mandats",
      "avenants",
      "getterActeEffetFinanciers",
    ]),

    admin: admin,
    dcf: dcf,
    cf: cf,
    noDCfNoAdmin: noDCfNoAdmin,
    ...mapGetters("Utilisateurs", [
      "getterUtilisateur",
      "getterAffectation",
      "getterUniteAdministrativeByUser",
    ]),

    rechercheUa() {
      const st = this.search.toLowerCase();
      return this.filtre_unite_admin.filter((type) => {
        return type.libelle.toLowerCase().includes(st);
      });
    },

    TotalBudgetInitial() {
      return (id) => {
        if (id != null && id != "") {
          return this.affichebudgetActive
            .filter((qtreel) => qtreel.ua_id == id)
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.Dotation_Initiale),
              0
            )
            .toFixed(0);
        }
        // return this.affichebudgetActive.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0);
      };
    },
    budgetConsommerDesModule() {
      const val =
        parseInt(this.budgetConsommerBienService(this.formData.section)) +
        parseInt(this.budgetConsommerTransfert(this.formData.section)) +
        parseInt(this.budgetConsommerInvertissement(this.formData.section)) +
        parseInt(this.budgetConsommerPersonnel(this.formData.section));

      if (val) {
        return parseInt(val).toFixed(0);
      }

      return 0;
    },
    budgetConsommerBienService() {
      return (id) => {
        if (id != "") {
          return this.gettersDossierMandat
            .filter(
              (element) =>
                (this.DemandeEngagement(element.demande_engagement_id) == id &&
                  element.decision_cf == 8) ||
                (this.DemandeEngagement(element.demande_engagement_id) == id &&
                  element.decision_cf == 9)
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.montant_engage),
              0
            )
            .toFixed(0);
        }
      };
    },
    DemandeEngagement() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDemandeEngagement.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.ua_id;
          }
          return 0;
        }
      };
    },
    // budgetConsommerBienService(){
    //   return id => {
    //     if(id !=""){
    //     return this.getMandatPersonnaliserVise.filter(element => element.ua_id == id && element.marchetype == 2 && element.exercice_budget == this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);

    //     }

    //   }
    // },
    //     budgetConsommerBienService(){
    //   return id => {
    //     if(id !=""){
    //     return this.gettersDemandeEngagement.filter(element => element.ua_id == id && element.exercice == this.anneeAmort &&  element.decision_cf == this.MandatValideParCf(element.id)).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0);

    //     }

    //   }
    // },
    MandatValideParCf() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.gettersDossierMandat.find(
            (qtreel) => qtreel.demande_engagement_id == id
          );

          if (qtereel) {
            return qtereel.decision_cf;
          }
          return 0;
        }
      };
    },
    budgetConsommerTransfert() {
      return (id) => {
        if (id != "") {
          return this.transferts
            .filter(
              (element) =>
                element.ua_id == id &&
                element.exerciceencours == this.anneeAmort
            )
            .reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_total_contrat),
              0
            )
            .toFixed(0);
        }
      };
    },
    budgetConsommerInvertissement() {
      return (id) => {
        if (id != "") {
          return this.getMandatPersonnaliserVise
            .filter(
              (element) =>
                element.ua_id == id &&
                element.marchetype == 1 &&
                element.exercice_budget == this.anneeAmort
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
    },
    budgetConsommerPersonnel() {
      return (id) => {
        if (id != "") {
          return this.getMandatPersonnaliserPersonnel
            .filter(
              (element) =>
                element.ua_id == id &&
                element.marchetype == "perso" &&
                element.exercice_budget == this.anneeAmort
            )
            .reduce(
              (prec, cur) => parseFloat(prec) + parseFloat(cur.total_general),
              0
            )
            .toFixed(0);
        }
      };
    },

    affichebudgetActive() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.budgetGeneral.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.ua_id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect.filter((element) => element.actived == 1);
      }
      return this.budgetGeneral.filter((element) => element.actived == 1);
    },
    recupererDernierNiveauServiceGestionnaire() {
      return (id) => {
        if (id != null && id != "") {
          return this.services_gestionnaires.filter(
            (qtreel) =>
              this.RecupererNiveauStructureAdministrative(
                qtreel.structure_administrative_id
              ) == id
          );
        }
      };
    },

    RecupererNiveauStructureAdministrative() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.structures_administratives.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.niveau;
          }
          return 0;
        }
      };
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
    //  test() {
    //     return id => {
    //       if (id != null && id != "") {
    //          const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

    //     if (qtereel) {
    //       return qtereel.libelle;
    //     }
    //     return 0
    //       }
    //     };
    //   },
    calculerTaillerStructureAdministrative() {
      return this.structures_administratives.length;
    },

    recupererDernierLocalisationGeographique() {
      return (id) => {
        if (id != null && id != "") {
          return this.localisations_geographiques.filter(
            (qtreel) =>
              this.RecupererNiveauStructureLocalisation(
                qtreel.structure_localisation_geographique_id
              ) == id
          );
        }
      };
    },

    RecupererNiveauStructureLocalisation() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.structures_geographiques.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.niveau;
          }
          return 0;
        }
      };
    },

    calculerTaillerStructureLocalisation() {
      return this.structures_geographiques.length;
    },

    libelleLocalGeographie() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.localisations_geographiques.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    libelleServiceGestionnaire() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.services_gestionnaires.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    libelleUa() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.type_Unite_admins.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },
    libelleSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.sections.find((qtreel) => qtreel.id == id);

          if (qtereel) {
            return qtereel.nom_section;
          }
          return 0;
        }
      };
    },
    libelleNatureSection() {
      return (id) => {
        if (id != null && id != "") {
          const qtereel = this.natures_sections.find(
            (qtreel) => qtreel.id == id
          );

          if (qtereel) {
            return qtereel.libelle;
          }
          return 0;
        }
      };
    },

    filtre_unite_admin() {
      if (this.noDCfNoAdmin) {
        let colect = [];

        this.jointureUaChapitreSection.filter((item) => {
          let val = this.getterUniteAdministrativeByUser.find(
            (row) => row.unite_administrative_id == item.id
          );
          if (val != undefined) {
            colect.push(item);
            return item;
          }
        });
        return colect;
      }
      return this.jointureUaChapitreSection;
    },

    sectionDynamiques() {
      return (id) => {
        if (id != null && id != "") {
          return this.sections.filter(
            (element) => element.naturesection_id == id
          );
        }
      };
    },

    // codeSectionNature(){
    //       //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
    //       const natsect = this.natures_sections.find(natsect => natsect.id == this.formData.natsection_id)
    //      const secti = this.sections.find(sect => sect.id == this.formData.section_id)

    //      if(natsect && secti){
    //        return natsect.code + secti.code
    //      }

    //      return null
    //    },

    codeuniteadministrative2() {
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)

      const servgest = this.services_gestionnaires.find(
        (serviceg) => serviceg.id == this.formData.servicegest_id
      );
      const localisageo = this.localisations_geographiques.find(
        (chap) => chap.id == this.formData.localisationgeo_id
      );
      if (servgest && localisageo) {
        return servgest.code + localisageo.code;
      }

      return null;
    },

    codeuniteadministrativeModifier2() {
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)

      const servgest = this.services_gestionnaires.find(
        (serviceg) => serviceg.id == this.editUniteAdministrative.servicegest_id
      );
      const localisageo = this.localisations_geographiques.find(
        (chap) => chap.id == this.editUniteAdministrative.localisationgeo_id
      );
      if (servgest && localisageo) {
        return servgest.code + localisageo.code;
      }

      return null;
    },

    codeuniteadministrative() {
      //  const section = this.sections.find(sect => sect.id == this.formData.section_id)
      const natsect = this.natures_sections.find(
        (natsect) => natsect.id == this.formData.nature_section_id
      );
      const secti = this.sections.find(
        (sect) => sect.id == this.formData.section_id
      );
      const servgest = this.services_gestionnaires.find(
        (serviceg) => serviceg.id == this.formData.servicegest_id
      );
      const localisageo = this.localisations_geographiques.find(
        (chap) => chap.id == this.formData.localisationgeo_id
      );
      if (natsect && secti && servgest && localisageo) {
        return (
          natsect.code +
          secti.code +
          "-" +
          servgest.code +
          "-" +
          localisageo.code
        );
      }

      return null;
    },
    codeuniteadministrativeModifier() {
      // const section = this.sections.find(sect => sect.id == this.editUniteAdministrative.section_id)
      const natsect = this.natures_sections.find(
        (natsect) =>
          natsect.id == this.editUniteAdministrative.nature_section_id
      );
      const secti = this.sections.find(
        (sect) => sect.id == this.editUniteAdministrative.section_id
      );
      const servgest = this.services_gestionnaires.find(
        (serviceg) => serviceg.id == this.editUniteAdministrative.servicegest_id
      );
      const localisageo = this.localisations_geographiques.find(
        (chap) => chap.id == this.editUniteAdministrative.localisationgeo_id
      );
      if (natsect && secti && servgest && localisageo) {
        return (
          natsect.code +
          secti.code +
          "-" +
          servgest.code +
          "-" +
          localisageo.code
        );
      }

      return null;
    },
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllUniteAdministrative",
      "ajouterUniteAdministrative",
      "modifierUniteAdministrative",
      "supprimerUniteAdministrative",
    ]),

    genererEnPdf() {
      var doc = new jsPDF("landscape");
      // doc.autoTable({ html: this.natures_sections })
      doc.setFontSize(8);
      doc.text(115, 10, "LISTE DES UNITES ADMINISTRATIVES");
      doc.autoTable({ html: "#Nature_section" }),
        doc.save("UniteAdministrative.pdf");
      return 0;
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
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false,
      });
    },
    formatageSomme: formatageSomme,
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      var nouvelObjet = {
        ...this.formData,
        code: this.codeuniteadministrative,
        code_ua: this.codeuniteadministrative2,
      };
      this.ajouterUniteAdministrative(nouvelObjet);

      this.formData = {
        code: "",
        libelle: "",
        section_id: "",
        localisationgeo_id: "",
        type_ua_id: "",
        date_creation: "",
        code_ua: "",
      };
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
      var nouvelObjet = {
        ...this.editUniteAdministrative,
        code: this.codeuniteadministrativeModifier,
        code_ua: this.codeuniteadministrativeModifier2,
      };
      this.modifierUniteAdministrative(nouvelObjet);
      this.$("#modificationModal").modal("hide");
      // this.editUniteAdministrative = {
      //   code: "",
      //   libelle: "",
      //   section_id: "",
      //   localisationgeo_id: ""
      // };
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(id) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false,
      });

      this.editUniteAdministrative = this.jointureUaChapitreSection.find(
        (items) => items.id == id
      );
    },
    alert() {
      console.log("ok");
    },

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    ExporterEnExel() {
      this.$refs.excel.click();
    },
  },
};
</script>
<style>
.tailgrand {
  width: 88%;
  margin: 0 -42%;
}
</style>